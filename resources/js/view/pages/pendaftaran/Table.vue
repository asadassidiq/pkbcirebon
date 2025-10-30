<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-lorry text-primary"></i>
                </span>
                <h3 class="card-label">Pendaftaran</h3>
            </div>
            <div class="card-toolbar">
                <div class="row">
                    <div class="col-5">
                        <b-form-datepicker
                            id="example-datepicker"
                            v-model="tgl"
                            locale="id"
                        ></b-form-datepicker>
                    </div>
                    <div class="col-5">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="serach"
                            v-model="search"
                        />
                    </div>
                    <div class="col-1">
                        <router-link
                            :to="{ name: 'pendaftaran.add' }"
                            class="btn btn-sm btn-icon btn-light-success mr-2"
                            ><i class="flaticon2-add"></i>
                        </router-link>
                    </div>
                    <div class="col-1">
                        <a
                            class="btn btn-sm btn-icon btn-light-info mr-2"
                            @click.prevent="reload"
                            title="reload data"
                            ><i class="flaticon2-reload"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row table-responsive">
                <div class="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Jenis Pendaftaran</th>
                                <th>No Uji</th>
                                <th>No Kendaraan</th>
                                <th>No Telp</th>
                                <th>Via</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(pendaftaran, index) in pendaftaran
                                    .pendaftarans.data"
                                :key="pendaftaran.id"
                            >
                                <td>{{ index+1 }}</td>
                                <td>{{ pendaftaran.keterangan }}</td>
                                <td>{{ pendaftaran.nouji }}</td>
                                <td>{{ pendaftaran.noregistrasikendaraan }}</td>
                                <td>{{ pendaftaran.notelp }}</td>
                                <td v-if="pendaftaran.jenispendaftaran == 'on'">
                                    online
                                </td>
                                <td
                                    v-if="pendaftaran.jenispendaftaran == 'off'"
                                >
                                    offline
                                </td>
                                <td>
                                    <router-link
                                        :to="{
                                            name: 'pendaftaran.edit',
                                            params: { id: pendaftaran.uuid },
                                        }"
                                    >
                                        <i class="fa fa-edit text-success"></i>
                                    </router-link>
                                    <a
                                        href="javascript:void(0)"
                                        @click="print(pendaftaran.uuid)"
                                        title="Surat Permohonan"
                                    >
                                        <i class="fa fa-print text-info"></i>
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        @click="
                                            deletePendaftaran(pendaftaran.uuid)
                                        "
                                        data-toggle="tooltip"
                                        title="Hapus Pendaftaran"
                                    >
                                        <i class="fas fa-trash text-danger"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <div class="pull-right">
                <div class="overflow-auto">
                    <b-pagination
                        v-model="page"
                        :total-rows="pendaftaran.pendaftarans.total"
                        :per-page="pendaftaran.pendaftarans.per_page"
                        aria-controls="pendaftarans"
                        v-if="
                            pendaftaran.pendaftarans.data &&
                            pendaftaran.pendaftarans.data.length > 0
                        "
                    ></b-pagination>
                </div>
            </div>
        </div>
        <b-modal id="modal-scrollable" scrollable ok-only>
            <p class="error">{{ error }}</p>
            <qrcode-stream @decode="onDecode" @init="onInit" />
        </b-modal>
    </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { QrcodeStream } from "vue-qrcode-reader";
import Swal from "sweetalert2";
import { mapState,mapGetters,mapActions } from "vuex";
export default {
    created() {
        // this.reload();
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + "-" + mm + "-" + dd;
        this.tgl = today;
    },
    data() {
        return {
            // users: {}
            search: "",
            tgl: "",
            result: "",
            error: "",
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Pendaftaran" },
            { title: "Data" },
        ]);
    },
    computed: {
        ...mapGetters(["currentNotifInfo"]),
        ...mapState(["pendaftaran"]),
        page: {
            get() {
                return this.$store.state.pendaftaran.page;
            },
            set(val) {
                this.$store.commit("pendaftaran/SET_PAGE", val);
            },
        },
    },
    watch: {
        page() {
            this.getPendaftarans(this.search);
        },
        search() {
            this.getPendaftarans(this.search);
        },
        tgl() {
            this.$store.commit(
                "pendaftaran/SET_TGL",
                this.customFormatter(this.tgl),
            );
            this.getPendaftarans(this.search);
        },
    },
    methods: {
        ...mapActions("pendaftaran", [
            "getPendaftarans",
            "removePendaftaran",
            "editPendaftaran",
            "removePendaftaran",
        ]),
        deletePendaftaran(id) {
            Swal.fire({
                title: "Hapus Pendaftaran?",
                text: "Anda yakin hapus data ini!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Iya, hapus ini!",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.removePendaftaran(id).then(() => {
                        Swal.fire(
                            "Deleted!",
                            "Pendaftaran sudah terhapus.",
                            "success",
                        );
                        this.getPendaftarans();
                    });
                }
            });
        },
        print3(id) {
            window.open("/cetak/" + id + "/skrd", "_blank");
        },
        customFormatter(today) {
            return today;
        },
        caridata() {
            this.editPendaftaran(this.pendaftaran.pendaftaran.id).then(() => {
                this.$router.push({
                    name: "pendaftaran.edit",
                    params: { id: this.pendaftaran.pendaftaran.id },
                });
            });
        },
        print(id) {
            window.open("/cetak/" + id + "/permohonan", "_blank");
        },
        reload() {
            this.getPendaftarans(this.search);
        },

        onDecode(result) {
            this.result = result;
            this.$router.push({
                name: "pendaftaran.edit",
                params: { id: result.substr(9, 6) },
            });
        },

        async onInit(promise) {
            try {
                await promise;
            } catch (error) {
                if (error.name === "NotAllowedError") {
                    this.error =
                        "ERROR: you need to grant camera access permission";
                } else if (error.name === "NotFoundError") {
                    this.error = "ERROR: no camera on this device";
                } else if (error.name === "NotSupportedError") {
                    this.error =
                        "ERROR: secure context required (HTTPS, localhost)";
                } else if (error.name === "NotReadableError") {
                    this.error = "ERROR: is the camera already in use?";
                } else if (error.name === "OverconstrainedError") {
                    this.error = "ERROR: installed cameras are not suitable";
                } else if (error.name === "StreamApiNotSupportedError") {
                    this.error =
                        "ERROR: Stream API is not supported in this browser";
                } else if (error.name === "InsecureContextError") {
                    this.error =
                        "ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.";
                } else {
                    this.error = `ERROR: Camera error (${error.name})`;
                }
            }
        },
    },
    components: {
        QrcodeStream,
    },
};
</script>

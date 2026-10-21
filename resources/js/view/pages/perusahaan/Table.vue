<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-lorry text-primary"></i>
                </span>
                <h3 class="card-label">Perusahaan</h3>
            </div>
            <div class="card-toolbar">
                <div class="row">
                    <div class="col-10">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="serach"
                            v-model="search"
                        />
                    </div>
                    <div class="col-1">
                        <router-link
                            :to="{ name: 'perusahaan.add' }"
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
                                <th>Nama Perusahaan</th>
                                <th>No Telp</th>
                                <th>Email</th>
                                <th>Jumlah Kendaraan</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(perusahaan, index) in perusahaan
                                    .perusahaans.data"
                                :key="perusahaan.id"
                            >
                                <td>{{ index + 1 }}</td>
                                <td>{{ perusahaan.keterangan }}</td>
                                <td>{{ perusahaan.notelp }}</td>
                                <td>{{ perusahaan.email }}</td>
                                <td>
                                    <router-link
                                        :to="{
                                            name: 'perusahaan.edit',
                                            params: { id: perusahaan.uuid },
                                        }"
                                    >
                                        <i class="fa fa-edit text-success"></i>
                                    </router-link>
                                    <a
                                        href="javascript:void(0)"
                                        @click="
                                            deletePerusahaan(perusahaan.uuid)
                                        "
                                        data-toggle="tooltip"
                                        title="Hapus Perusahaan"
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
                        :total-rows="perusahaan.perusahaans.total"
                        :per-page="perusahaan.perusahaans.per_page"
                        aria-controls="perusahaans"
                        v-if="
                            perusahaan.perusahaans.data &&
                            perusahaan.perusahaans.data.length > 0
                        "
                    ></b-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";
import { mapState,mapGetters,mapActions } from "vuex";
export default {
    created() {
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
            { title: "Perusahaan" },
            { title: "Data" },
        ]);
    },
    computed: {
        ...mapGetters(["currentNotifInfo"]),
        ...mapState(["perusahaan"]),
        page: {
            get() {
                return this.$store.state.perusahaan.page;
            },
            set(val) {
                this.$store.commit("perusahaan/SET_PAGE", val);
            },
        },
    },
    watch: {
        page() {
            this.getPerusahaans(this.search);
        },
        search() {
            this.getPerusahaans(this.search);
        },
        tgl() {
            this.$store.commit(
                "perusahaan/SET_TGL",
                this.customFormatter(this.tgl),
            );
            this.getPerusahaans(this.search);
        },
    },
    methods: {
        ...mapActions("perusahaan", [
            "getPerusahaans",
            "removePerusahaan",
            "editPerusahaan",
            "removePerusahaan",
        ]),
        deletePerusahaan(id) {
            Swal.fire({
                title: "Hapus Perusahaan?",
                text: "Anda yakin hapus data ini!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Iya, hapus ini!",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.removePerusahaan(id).then(() => {
                        Swal.fire(
                            "Deleted!",
                            "Perusahaan sudah terhapus.",
                            "success",
                        );
                        this.getPerusahaans();
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
            this.editPerusahaan(this.perusahaan.perusahaan.id).then(() => {
                this.$router.push({
                    name: "perusahaan.edit",
                    params: { id: this.perusahaan.perusahaan.id },
                });
            });
        },
        print(id) {
            window.open("/cetak/" + id + "/permohonan", "_blank");
        },
        printFormulir(id) {
            window.open("/cetak/" + id + "/formulir", "_blank");
        },
        reload() {
            this.getPerusahaans(this.search);
        },
    },
    components: {
        
    },
};
</script>

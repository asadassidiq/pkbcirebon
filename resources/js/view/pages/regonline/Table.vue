<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-lorry text-primary"></i>
                </span>
                <h3 class="card-label">Registrasi Online</h3>
            </div>
            <div class="card-toolbar">
                <div class="row">
                    <div class="col-6">
                        <b-form-datepicker id="example-datepicker" v-model="tgl" locale="id"></b-form-datepicker>
                    </div>
                    <div class="col-4">
                        <input class="form-control" type="text" placeholder="serach" v-model="search" />
                    </div>
                    <div class="col-2">
                        <a class="btn btn-sm btn-icon btn-light-info mr-2" @click.prevent="reload"
                            title="reload data"><i class="flaticon2-reload"></i>
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
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(regonline, index) in regonline
                            .regonlines.data" :key="regonline.id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ regonline.keterangan }}</td>
                                <td>{{ regonline.nouji }}</td>
                                <td>{{ regonline.noregistrasikendaraan }}</td>
                                <td v-if="regonline.status == 0">
                                    Menunggu Approve
                                </td>
                                <td v-if="regonline.status == 1
                            ">
                                    Approve
                                </td>
                                <td>
                                    <a v-if="regonline.status == '0'" href="javascript:void(0)"
                                        @click="approvePend(regonline.noregistrasikendaraan, regonline.uuid)"
                                        title="Proses Pendaftaran">
                                        <i class="fa fa-check-square text-success"></i>
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
                    <b-pagination v-model="page" :total-rows="regonline.regonlines.total"
                        :per-page="regonline.regonlines.per_page" aria-controls="regonlines" v-if="regonline.regonlines.data &&
                            regonline.regonlines.data.length > 0
                            "></b-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";
import { mapState, mapActions } from "vuex";
export default {
    created() {
        this.getRegOnlines();

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
            idbilling: "",
            result: "",
            error: "",
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "RegOnline" },
            { title: "Data" },
        ]);
    },
    computed: {
        ...mapState(["regonline"]),
        page: {
            get() {
                return this.$store.state.regonline.page;
            },
            set(val) {
                this.$store.commit("regonline/SET_PAGE", val);
            },
        },
    },
    watch: {
        page() {
            this.getRegOnlines();
        },
        search() {
            this.getRegOnlines(this.search);
        },
        tgl() {
            this.$store.commit(
                "regonline/SET_TGL",
                this.customFormatter(this.tgl),
            );
            this.getRegOnlines(this.search);
        },
    },
    methods: {
        ...mapActions("regonline", ["getRegOnlines", "getRegOnlineVerif"]),
        deleteRegOnline(id) { },
        customFormatter(today) {
            return today;
        },
        approvePend(nokend, id) {
            Swal.fire({
                title: "Setujui Pendaftaran uji kendaraan : " + "</br>" + nokend,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Setuju",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("Disetujui!", "", "success");
                    this.getRegOnlineVerif(id).then(() => {
                        this.$router.push({
                            name: "pendaftaran.edit",
                            params: { id: this.$store.state.regonline.pendaftaran_id },
                        });
                    });
                }
            });
        },
        print(id) {
            window.open("/cetak/" + id + "/permohonan", "_blank");
        },
        reload() {
            this.getRegOnlines(this.search);
        },
    },
    components: {},
};
</script>

<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-lorry text-primary"></i>
                </span>
                <h3 class="card-label">Hasil Uji</h3>
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
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(pendaftaran, index) in verif
                                .hasiluji.data" :key="pendaftaran.uuid">
                                <td>{{ index + 1 }}</td>
                                <td>{{ pendaftaran.keterangan }}</td>
                                <td>{{ pendaftaran.nouji }}</td>
                                <td>{{ pendaftaran.noregistrasikendaraan }}</td>
                                <td>
                                    <a href="javascript:void(0)" @click="print(pendaftaran.uuid)">
                                        <i class="fa fa-print text-info"></i>
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
                    <b-pagination v-model="page" :total-rows="verif.hasiluji.total"
                        :per-page="verif.hasiluji.per_page" aria-controls="hasiluji" v-if="
                            verif.hasiluji.data &&
                            verif.hasiluji.data.length > 0
                        "></b-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";
export default {
    created() {
        this.getHasilUji();

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
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Pendaftaran" },
            { title: "Data" },
        ]);
    },
    computed: {
        ...mapState(["verif"]),
        page: {
            get() {
                return this.$store.state.verif.page;
            },
            set(val) {
                this.$store.commit("verif/SET_PAGE", val);
            },
        },
    },
    watch: {
        page() {
            this.getHasilUji();
        },
        search() {
            this.getHasilUji(this.search);
        },
        tgl() {
            this.$store.commit("verif/SET_TGL", this.customFormatter(this.tgl));
            this.getHasilUji(this.search);
        },
    },
    methods: {
        ...mapActions("verif", ["getHasilUji"]),
        customFormatter(today) {
            return today;
        },
        reload() {
            this.getHasilUji(this.search);
        },
        print(id) {
            window.open("/cetak/" + id + "/lhp", "_blank");
        },
    },
    components: {},
};
</script>

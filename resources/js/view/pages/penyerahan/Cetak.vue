<template>
    <div class="row">
        <div class="col-4">
            <div class="card card-custom gutter-b">
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <label>Harian</label>
                            <datepicker
                                input-class="form-control"
                                v-model="tgl"
                                :language="id"
                                :format="customFormatter"
                            ></datepicker>
                        </div>
                        <div class="col-6">
                            <br />
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-info"
                                @click.prevent="printharian"
                            >
                                <i class="flaticon2-printer"></i>
                            </a>
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-success"
                            >
                                <i class="far fa-file-excel"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card card-custom gutter-b">
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <label>Bulanan</label>
                            <datepicker
                                input-class="form-control"
                                v-model="bulan"
                                :language="id"
                                :format="customFormatter2"
                                minimum-view="month"
                            ></datepicker>
                        </div>
                        <div class="col-6">
                            <br />
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-info"
                                @click.prevent="printbulanan"
                            >
                                <i class="flaticon2-printer"></i>
                            </a>
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-success"
                            >
                                <i class="far fa-file-excel"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card card-custom gutter-b">
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <label>Tahunan</label>
                            <datepicker
                                input-class="form-control"
                                v-model="tahun"
                                :language="id"
                                :format="customFormatter3"
                                minimum-view="year"
                            ></datepicker>
                        </div>
                        <div class="col-6">
                            <br />
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-info"
                                @click.prevent="printtahunan"
                            >
                                <i class="flaticon2-printer"></i>
                            </a>
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-success"
                            >
                                <i class="far fa-file-excel"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import datepicker from "vuejs-datepicker";
import { en, id } from "vuejs-datepicker/dist/locale";
import moment from "moment";
export default {
    created() {},
    data() {
        return {
            // users: {}
            search: "",
            tgl: "",
            tgl1: "",
            bulan: "",
            tahun: "",
            id: id,
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Cetak" },
            { title: "Laporan Penyerahan" },
        ]);
    },
    computed: {},
    watch: {},
    methods: {
        printharian() {
            this.tgl = moment(this.tgl).format("YYYY-MM-DD");
            window.open("/cetak/" + this.tgl + "/penyerahanharian", "_blank");
        },
        customFormatter(date) {
            return moment(date).format("YYYY-MM-DD");
        },
        customFormatter2(date) {
            return moment(date).format("YYYY-MM");
        },
        customFormatter3(date) {
            return moment(date).format("YYYY");
        },
        printbulanan() {
            this.bulan = moment(this.bulan).format("YYYY-MM");
            window.open(
                "/cetak/" + this.bulan + "/penyerahanbulanan",
                "_blank",
            );
        },
        printtahunan() {
            this.tahun = moment(this.tahun).format("YYYY");
            window.open(
                "/cetak/" + this.tahun + "/penyerahantahunan",
                "_blank",
            );
        },
    },
    components: {
        datepicker,
    },
};
</script>

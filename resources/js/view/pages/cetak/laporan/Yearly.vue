<template>
    <div class="row">
        <div class="col-12">
            <div class="card card-custom gutter-b">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <h4>Tahunan</h4>
                        </div>
                        <div class="col-4">
                            <label>Pilih Tanggal</label>
                            <datepicker
                                input-class="form-control"
                                v-model="tgl"
                                :language="id"
                                :format="customFormatter"
                            ></datepicker>
                        </div>
                        
                        <div class="col-4">
                            <label>Pilih Jenis Laporan</label>
                            <select class="form-control" v-model="dataLaporan">
                                <option selected="selected" value=""></option>
                                <option value="kwbutahunan">KWBU</option>
                                <option value="jenistahunan">Jenis Kendaraan</option>
                                <option value="pelayanantahunan">Pelayanan</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <label>Pilih Aksi</label>
                            <br>
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-info"
                                @click.prevent="printLaporan"
                            >
                                <i class="flaticon2-printer"></i>
                            </a>
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-success"
                                @click.prevent="exportLaporan"
                            >
                                <i class="far fa-file-excel"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div v-if="loading && dataLaporan == 'printlaporanharian'" class="loading-overlay">
                <div class="spinner">Loading Laporan...</div>
            </div>
            <!-- <iframe
                :src="`/cetak/${tgl}/${dataLaporan}`"
                width="100%"
                height="650"
                style="border: none;"
                @load="loading = false"
            ></iframe> -->
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import datepicker from "vuejs-datepicker";
import { en, id } from "vuejs-datepicker/dist/locale";
import moment from "moment";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
    created() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();

        this.tgl = yyyy + "-" + mm + "-" + dd;
    },
    data() {
        return {
            loading: true,
            dataLaporan:"",
            tgl: "",
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Cetak" },
            { title: "Laporan Tahunan" },
        ]);
    },
    computed: {
    },
    watch: {},
    methods: {
        printLaporan() {
            this.tgl = moment(this.tgl).format("YYYY");
            window.open("/cetak/" + this.tgl + '/'+this.dataLaporan, "_blank");
        },
        exportLaporan() {
            this.tgl = moment(this.tgl).format("YYYY");
            window.open("/export/" + this.tgl + '/'+this.dataLaporan, "_blank");
        },
        customFormatter(date) {
            return moment(date).format("YYYY");
        },
    },
    components: {
        datepicker,
        vSelect,
    },
};
</script>

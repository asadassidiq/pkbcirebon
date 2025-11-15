<template>
    <div class="row">
        <div class="col-12">
            <div class="card card-custom gutter-b">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <h4>Bulanan</h4>
                        </div>
                        <div class="col-4">
                            <label>Pilih Tanggal</label>
                            <datepicker
                                input-class="form-control"
                                v-model="tgl"
                                :language="id"
                                :format="customFormatter"
                                :minimum-view="'month'" :maximum-view="'month'"
                            ></datepicker>
                        </div>
                        
                        <div class="col-4">
                            <label>Pilih Jenis Laporan</label>
                            <select class="form-control" v-model="dataLaporan">
                                <option selected="selected" value=""></option>
                                <option value="kartubulanan">Pemakaian Kartu</option>
                                <option value="jenis1">Jenis Kendaraan Uji Pertama</option>
                                <option value="jenis2">Jenis Kendaraan Uji Berkala</option>
                                <option value="jenis5">Jenis Kendaraan Numpang Uji Masuk</option>
                                <option value="jenis6">Jenis Kendaraan Mutasi Masuk</option>
                                <option value="jenis9">Jenis Kendaraan Numpang Uji Keluar</option>
                                <option value="jenis10">Jenis Kendaraan Mutasi Keluar</option>
                                <option value="jenis8">Jenis Kendaraan Rubah Bentuk</option>
                                <option value="pelayananbulanan">Pelayanan</option>
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
            { title: "Laporan Bulanan" },
        ]);
    },
    computed: {
    },
    watch: {},
    methods: {
        printLaporan() {
            this.tgl = moment(this.tgl).format("YYYY-MM");
            if(this.dataLaporan == 'jenis1')
            {
                window.open("/cetak/" + this.tgl + '/'+'jenisbulanan'+'?k=1', "_blank");
            }else if(this.dataLaporan == 'jenis2')
            {
                window.open("/cetak/" + this.tgl + '/'+'jenisbulanan'+'?k=2', "_blank");
            }else if(this.dataLaporan == 'jenis3')
            {
                window.open("/cetak/" + this.tgl + '/'+'jenisbulanan'+'?k=3', "_blank");
            }else if(this.dataLaporan == 'jenis5')
            {
                window.open("/cetak/" + this.tgl + '/'+'jenisbulanan'+'?k=5', "_blank");
            }else if(this.dataLaporan == 'jenis6')
            {
                window.open("/cetak/" + this.tgl + '/'+'jenisbulanan'+'?k=6', "_blank");
            }else if(this.dataLaporan == 'jenis8')
            {
                window.open("/cetak/" + this.tgl + '/'+'jenisbulanan'+'?k=8', "_blank");
            }else if(this.dataLaporan == 'jenis9')
            {
                window.open("/cetak/" + this.tgl + '/'+'jenisbulanan'+'?k=9', "_blank");
            }else if(this.dataLaporan == 'jenis110')
            {
                window.open("/cetak/" + this.tgl + '/'+'jenisbulanan'+'?k=10', "_blank");
            }else{
                window.open("/cetak/" + this.tgl + '/'+this.dataLaporan, "_blank");
            }
        },
        exportLaporan() {
            this.tgl = moment(this.tgl).format("YYYY-MM");
            if(this.dataLaporan == 'jenis1')
            {
                window.open("/export/" + this.tgl + '/'+'jenistriwulan'+'?k=', "_blank");
            }else if(this.dataLaporan == 'jenis2')
            {
                window.open("/export/" + this.tgl + '/'+'jenistriwulan'+'?k=2', "_blank");
            }else if(this.dataLaporan == 'jenis3')
            {
                window.open("/export/" + this.tgl + '/'+'jenistriwulan'+'?k=3', "_blank");
            }else if(this.dataLaporan == 'jenis5')
            {
                window.open("/export/" + this.tgl + '/'+'jenistriwulan'+'?k=5', "_blank");
            }else if(this.dataLaporan == 'jenis6')
            {
                window.open("/export/" + this.tgl + '/'+'jenistriwulan'+'?k=6', "_blank");
            }else if(this.dataLaporan == 'jenis8')
            {
                window.open("/export/" + this.tgl + '/'+'jenistriwulan'+'?k=8', "_blank");
            }else if(this.dataLaporan == 'jenis9')
            {
                window.open("/export/" + this.tgl + '/'+'jenistriwulan'+'?k=9', "_blank");
            }else if(this.dataLaporan == 'jenis110')
            {
                window.open("/export/" + this.tgl + '/'+'jenistriwulan'+'?k=10', "_blank");
            }else{
                window.open("/export/" + this.tgl + '/'+this.dataLaporan, "_blank");
            }
        },
        customFormatter(date) {
            return moment(date).format("YYYY-MM");
        },
    },
    components: {
        datepicker,
        vSelect,
    },
};
</script>

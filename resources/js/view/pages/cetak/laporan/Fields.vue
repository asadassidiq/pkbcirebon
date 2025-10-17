<template>
    <div class="row">
        <div class="col-12">
            <div class="card card-custom gutter-b">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <h4>Harian</h4>
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
                            <select class="form-control" v-model="dataHarian">
                                <option selected="selected" value=""></option>
                                <option value="printlaporanharian">Laporan Harian</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <label>Pilih Aksi</label>
                            <br>
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
                                    @click.prevent="exportharian"
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
                            <label>Bulanan KBWU</label>
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
                                @click.prevent="exportbulanan"
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
                            <label>Tahunan KBWU</label>
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
                                @click.prevent="exporttahunan"
                            >
                                <i class="far fa-file-excel"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card card-custom gutter-b">
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <label>Bulanan Jenis Kendaraan</label>
                            <datepicker
                                input-class="form-control"
                                v-model="bulan1"
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
                                @click.prevent="printbulananjenis"
                            >
                                <i class="flaticon2-printer"></i>
                            </a>
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-success"
                                @click.prevent="exportbulananjenis"
                            >
                                <i class="far fa-file-excel"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-6">
            <div class="card card-custom gutter-b">
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <label>Tahunan Jenis Kendaraan</label>
                            <datepicker
                                input-class="form-control"
                                v-model="tahun1"
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
                                @click.prevent="printtahunanjenis"
                            >
                                <i class="flaticon2-printer"></i>
                            </a>
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-success"
                                @click.prevent="exporttahunanjenis"
                            >
                                <i class="far fa-file-excel"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-6">
            <div class="card card-custom gutter-b">
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <label>Bulanan Jenis Pelayanan</label>
                            <datepicker
                                input-class="form-control"
                                v-model="bulan2"
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
                                @click.prevent="printbulananpelayanan"
                            >
                                <i class="flaticon2-printer"></i>
                            </a>
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-success"
                                @click.prevent="exportbulananpelayanan"
                            >
                                <i class="far fa-file-excel"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-6">
            <div class="card card-custom gutter-b">
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <label>Tahunan Jenis Pelayanan</label>
                            <datepicker
                                input-class="form-control"
                                v-model="tahun2"
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
                                @click.prevent="printtahunanpelayanan"
                            >
                                <i class="flaticon2-printer"></i>
                            </a>
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-success"
                                @click.prevent="exporttahunanpelayanan"
                            >
                                <i class="far fa-file-excel"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-6">
            <div class="card card-custom gutter-b">
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <label>Tahunan Bapperida</label>
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
                                @click.prevent="printtahunanBapperida"
                            >
                                <i class="flaticon2-printer"></i>
                            </a>
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-success"
                                @click.prevent="exporttahunanBapperida"
                            >
                                <i class="far fa-file-excel"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
        </div>
        <div class="col-12">
            <div class="card card-custom gutter-b">
                <div class="card-body">
                    <div class="row">
                        <div class="col-2">
                            <label>Jenis Pendaftaran</label>
                            <select
                                class="form-control"
                                v-model="jenispendaftaran"
                            >
                                <option selected="selected" value=""></option>
                                <option value="1">Daftar Baru</option>
                                <option value="2">Perpanjangan</option>
                                <option value="3">Rusak</option>
                                <option value="4">Hilang</option>
                                <option value="5">Numpang Uji Masuk</option>
                                <option value="9">Numpang Uji Keluar</option>
                                <option value="6">Mutasi Masuk</option>
                                <option value="10">Mutasi Keluar</option>
                                <option value="7">Uji Ulang</option>
                            </select>
                        </div>
                        <div class="col-2">
                            <label>Jenis Kendaraan</label>
                            <vSelect
                                label="jenis"
                                ref="jenis"
                                :options="jenis"
                                v-model="jeniskendaraan"
                            ></vSelect>
                        </div>
                        <div class="col-2">
                            <label>Umum/Tidak Umum</label>
                            <select class="form-control" v-model="peruntukan">
                                <option selected="selected" value=""></option>
                                <option value="Umum">Umum</option>
                                <option value="Tidak Umum">Tidak Umum</option>
                            </select>
                        </div>
                        <div class="col-2">
                            <label>JBB</label>
                            <select class="form-control" v-model="jbb">
                                <option selected="selected" value=""></option>
                                <option value="1">(JBB) s/d 3000</option>
                                <option value="2">(JBB) 3001 s/d 9000</option>
                                <option value="3">(JBB) 9001 s/d 15000</option>
                                <option value="4">(JBB) 15001 s/d 21000</option>
                                <option value="5">(JBB) >= 21000</option>
                            </select>
                        </div>
                        <div class="col-2">
                            <label>Tanggal</label>
                            <datepicker
                                input-class="form-control"
                                v-model="tglrange1"
                                :language="id"
                                :format="customFormatter"
                            ></datepicker>
                        </div>
                        <div class="col-2">
                            <label>:</label>
                            <datepicker
                                input-class="form-control"
                                v-model="tglrange2"
                                :language="id"
                                :format="customFormatter"
                            ></datepicker>
                        </div>
                        
                        <div class="col-sm-4">
                            <div class="form-group">
                            <label>Kabupaten</label>
                            <vSelect label="nama" :options="kotas"  v-model="kota" @input="setKota"></vSelect>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                            <label>Kecamatan</label>
                            <vSelect label="nama" :options="kecamatans"  v-model="kecamatan" @input="setKecamatan"></vSelect>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                            <label>Kelurahan</label>
                            <vSelect label="nama" :options="kelurahans"  v-model="kelurahan" @input="setKelurahan" ></vSelect>
                            </div>
                        </div>
                        
                        <div class="col-2">
                            <br />
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-info"
                                @click.prevent="printcustom1"
                            >
                                <i class="flaticon2-printer"></i>
                            </a>
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-success"
                                @click.prevent="exportcustom1"
                            >
                                <i class="far fa-file-excel"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="card card-custom gutter-b">
                <div class="card-body">
                    <div class="row">
                        <div class="col-4">
                            <label>Jenis Kendaraan</label>
                            <vSelect
                                label="jenis"
                                ref="jenis"
                                :options="jenis"
                                v-model="jeniskendaraan"
                            ></vSelect>
                        </div>
                        <div class="col-4">
                            <label>Umum/Tidak Umum</label>
                            <select class="form-control" v-model="peruntukan">
                                <option selected="selected" value=""></option>
                                <option value="Umum">Umum</option>
                                <option value="Tidak Umum">Tidak Umum</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <label>JBB</label>
                            <select class="form-control" v-model="jbb">
                                <option selected="selected" value=""></option>
                                <option value="1">(JBB) s/d 3000</option>
                                <option value="2">(JBB) 3001 s/d 9000</option>
                                <option value="3">(JBB) 9001 s/d 15000</option>
                                <option value="4">(JBB) 15001 s/d 21000</option>
                                <option value="5">(JBB) >= 21000</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                            <label>Kabupaten</label>
                            <vSelect label="nama" :options="kotas"  v-model="kota" @input="setKota"></vSelect>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                            <label>Kecamatan</label>
                            <vSelect label="nama" :options="kecamatans"  v-model="kecamatan" @input="setKecamatan"></vSelect>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                            <label>Kelurahan</label>
                            <vSelect label="nama" :options="kelurahans"  v-model="kelurahan" @input="setKelurahan" ></vSelect>
                            </div>
                        </div>
                        <div class="col-2">
                            <br />
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-info"
                                @click.prevent="printcustom2"
                            >
                                <i class="flaticon2-printer"></i>
                            </a>
                            <a
                                href="javascript:void(0)"
                                class="btn btn-icon btn-success"
                                @click.prevent="exportcustom2"
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
        this.bulan = yyyy + "-" + mm;
        this.bulan1 = yyyy + "-" + mm;
        this.bulan2 = yyyy + "-" + mm;
        this.tahun = "2024";
        this.tahun1 = "2024";
        this.tahun2 = "2024";
        this.getJenis().then(() => {
        });
        this.getKotas();
        this.$store.commit("pendaftaran/SET_KOTA", "Kabupaten Sragen");
        this.getKecamatans("Kabupaten Sragen");
    },
    data() {
        return {
            // users: {}
            search: "",
            dataHarian:"",
            tgl: "",
            tgl1: "",
            bulan: "",
            bulan1: "",
            bulan2: "",
            tahun: "",
            tahun1: "",
            tahun2: "",
            id: id,
            jenispendaftaran: "",
            jeniskendaraan: "",
            peruntukan: "",
            jbb: "",
            kota: "Kabupaten Sragen",
            disabled1:1,
            disabled2:1,
            kecamatan:"",
            kelurahan:"",
            tglrange1: "",
            tglrange2: "",
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Cetak" },
            { title: "Laporan Kendaraan" },
        ]);
    },
    computed: {
        ...mapState("pendaftaran", {
            jenis: (state) => state.jenis,
            kotas: (state) => state.kotas,
            kecamatans: (state) => state.kecamatans,
            kelurahans: (state) => state.kelurahans,
            identitaskendaraan: state => state.identitaskendaraan,
        }),
    },
    watch: {},
    methods: {
        ...mapActions("pendaftaran", ["getKotas","getKecamatans","getKelurahans2","getJenis"]),
        
        setKota(value){
            this.kota = value.nama
            this.getKecamatans(value.nama);
            this.$store.commit("pendaftaran/SET_KOTA", value.nama);
            this.disabled1 = 0;
        },
        setKecamatan(value){
            this.kecamatan = value.nama
            this.getKelurahans2(value.nama);
            this.disabled2 = 0;
        },
        setKelurahan(value){
            this.kelurahan = value.nama
        },
        printharian() {
            this.tgl = moment(this.tgl).format("YYYY-MM-DD");
            window.open("/cetak/" + this.tgl + '/'+this.dataHarian, "_blank");
        },
        exportharian() {
            this.tgl = moment(this.tgl).format("YYYY-MM-DD");
            window.open("/export/" + this.tgl + "/laporanharian", "_blank");
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
                "/cetak/" + this.bulan + "/printlaporanbulanan",
                "_blank",
            );
        },
        exportbulanan() {
            this.bulan = moment(this.bulan).format("YYYY-MM");
            window.open(
                "/export/" + this.bulan + "/kwbubulanan",
                "_blank",
            );
        },
        printtahunan() {
            this.tahun = moment(this.tahun).format("YYYY-MM");
            window.open(
                "/cetak/" + this.tahun + "/printlaporantahunan",
                "_blank",
            );
        },
        exporttahunan() {
            this.bulan = moment(this.bulan).format("YYYY-MM");
            window.open(
                "/export/" + this.bulan + "/kwbutahunan",
                "_blank",
            );
        },
        printtahunanBapperida() {
            this.tahun = moment(this.tahun).format("YYYY");
            window.open(
                "/cetak/" + this.tahun + "/printtamankendaraantahunan",
                "_blank",
            );
        },
        exporttahunanBapperida() {
            this.tahun = moment(this.tahun).format("YYYY");
            window.open(
                "/export/" + this.tahun + "/tamankendaraantahunan",
                "_blank",
            );
        },
        printtahunanrange() {
            this.tahun1 = moment(this.tahun1).format("YYYY-MM");
            this.tahun2 = moment(this.tahun2).format("YYYY-MM");
            window.open(
                "/cetak/" +
                    this.tahun1 +
                    "/" +
                    this.tahun2 +
                    "/printlaporantahunanrange",
                "_blank",
            );
        },
        printbulananjenis() {
            this.bulan1 = moment(this.bulan1).format("YYYY-MM");
            window.open(
                "/cetak/" + this.bulan1 + "/printlaporanjeniskendaraanbulanan",
                "_blank",
            );
        },
        exportbulananjenis() {
            this.bulan1 = moment(this.bulan1).format("YYYY-MM");
            window.open(
                "/export/" + this.bulan1 + "/jenisbulanan",
                "_blank",
            );
        },
        printtahunanjenis() {
            this.tahun1 = moment(this.tahun1).format("YYYY");
            window.open(
                "/cetak/" + this.tahun1 + "/printlaporanjeniskendaraantahunan",
                "_blank",
            );
        },
        exporttahunanjenis() {
            this.tahun1 = moment(this.tahun1).format("YYYY-MM");
            window.open(
                "/export/" + this.tahun1 + "/jenistahunan",
                "_blank",
            );
        },
        printbulananpelayanan() {
            this.bulan2 = moment(this.bulan2).format("YYYY-MM");
            window.open(
                "/cetak/" + this.bulan2 + "/printlaporanjenispelayananbulanan",
                "_blank",
            );
        },
        exportbulananpelayanan() {
            this.bulan2 = moment(this.bulan2).format("YYYY-MM");
            window.open(
                "/export/" + this.bulan2 + "/pelayananbulanan",
                "_blank",
            );
        },
        printtahunanpelayanan() {
            this.tahun2 = moment(this.tahun2).format("YYYY");
            window.open(
                "/cetak/" + this.tahun2 + "/printlaporanjenispelayanantahunan",
                "_blank",
            );
        },
        exporttahunanpelayanan() {
            this.tahun2 = moment(this.tahun2).format("YYYY");
            window.open(
                "/export/" + this.tahun2 + "/pelayanantahunan",
                "_blank",
            );
        },
        printcustom1() {
            if(this.jeniskendaraan.length === 0){
                var jenis = '';
            }else{
                var jenis = this.jeniskendaraan.jenis;
            }
            if(this.tglrange1.length === 0){
            }else{
                this.tglrange1 = moment(this.tglrange1).format("YYYY-MM-DD");
            }
            if(this.tglrange2.length === 0){
            }else{
                this.tglrange2 = moment(this.tglrange2).format("YYYY-MM-DD");
            }
            if(this.kota.length === 0){
                var kota = '';
            }else{
                var kota = this.kota;
            }
            if(this.kecamatan.length === 0){
                var kecamatan = '';
            }else{
                var kecamatan = this.kecamatan;
            }
            if(this.kelurahan.length === 0){
                var kelurahan = '';
            }else{
                var kelurahan = this.kelurahan;
            }
            window.open(
                `/cetak/printcustom1?tgl1=${this.tglrange1}&tgl2=${this.tglrange2}&jenispendaftaran=${this.jenispendaftaran}&jeniskendaraan=${jenis}&peruntukan=${this.peruntukan}&jbb=${this.jbb}&kota=${kota}&kec=${kecamatan}&kel=${kelurahan}`,
                "_blank",
            );
        },
        exportcustom1() {
            if(this.jeniskendaraan.length === 0){
                var jenis = '';
            }else{
                var jenis = this.jeniskendaraan.jenis;
            }
            if(this.tglrange1.length === 0){
            }else{
                this.tglrange1 = moment(this.tglrange1).format("YYYY-MM-DD");
            }
            if(this.tglrange2.length === 0){
            }else{
                this.tglrange2 = moment(this.tglrange2).format("YYYY-MM-DD");
            }if(this.jeniskendaraan.length === 0){
                var jenis = '';
            }else{
                var jenis = this.jeniskendaraan.jenis;
            }
            if(this.kota.length === 0){
                var kota = '';
            }else{
                var kota = this.kota;
            }
            if(this.kecamatan.length === 0){
                var kecamatan = '';
            }else{
                var kecamatan = this.kecamatan;
            }
            if(this.kelurahan.length === 0){
                var kelurahan = '';
            }else{
                var kelurahan = this.kelurahan;
            }
            window.open(
                `/export/custom1?tgl1=${this.tglrange1}&tgl2=${this.tglrange2}&jenispendaftaran=${this.jenispendaftaran}&jeniskendaraan=${jenis}&peruntukan=${this.peruntukan}&jbb=${this.jbb}&kota=${kota}&kec=${kecamatan}&kel=${kelurahan}`,
                "_blank",
            );
        },
        printcustom2() {
            if(this.jeniskendaraan.length === 0){
                var jenis = '';
            }else{
                var jenis = this.jeniskendaraan.jenis;
            }
            if(this.kota.length === 0){
                var kota = '';
            }else{
                var kota = this.kota;
            }
            if(this.kecamatan.length === 0){
                var kecamatan = '';
            }else{
                var kecamatan = this.kecamatan;
            }
            if(this.kelurahan.length === 0){
                var kelurahan = '';
            }else{
                var kelurahan = this.kelurahan;
            }
            window.open(
                `/cetak/printcustom2?jeniskendaraan=${jenis}&peruntukan=${this.peruntukan}&jbb=${this.jbb}&kota=${kota}&kec=${kecamatan}&kel=${kelurahan}`,
                "_blank",
            );
        },
        exportcustom2() {
            if(this.jeniskendaraan.length === 0){
                var jenis = '';
            }else{
                var jenis = this.jeniskendaraan.jenis;
            }
            if(this.kota.length === 0){
                var kota = '';
            }else{
                var kota = this.kota;
            }
            if(this.kecamatan.length === 0){
                var kecamatan = '';
            }else{
                var kecamatan = this.kecamatan;
            }
            if(this.kelurahan.length === 0){
                var kelurahan = '';
            }else{
                var kelurahan = this.kelurahan;
            }
            window.open(
                `/export/custom2?jeniskendaraan=${jenis}&peruntukan=${this.peruntukan}&jbb=${this.jbb}&kota=${kota}&kec=${kecamatan}&kel=${kelurahan}`,
                "_blank",
            );
        },
    },
    components: {
        datepicker,
        vSelect,
    },
};
</script>

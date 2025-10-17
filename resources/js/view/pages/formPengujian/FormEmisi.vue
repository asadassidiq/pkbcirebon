<template>
    <div class="row">
        <div class="col-sm-6"
            v-if="identitaskendaraan.bahanbakar == 'SOLAR' || identitaskendaraan.bahanbakar == 'Solar'">
            <div class="form-group">
                <label>EMISI GAS BUANG ASAP (HSU)</label>
                <input type="number" class="form-control  form-control-lg" name="alatuji_emisiasapbahanbakarsolar"
                    @focus="handleFocus('alatuji_emisiasapbahanbakarsolar')" v-model="laikjalan.alatuji_emisiasapbahanbakarsolar"
                    v-bind:style="(identitaskendaraan.jbb <= 3500 && identitaskendaraan.thpembuatan < 2010 && laikjalan.alatuji_emisiasapbahanbakarsolar > 65) || (identitaskendaraan.jbb <= 3500 && identitaskendaraan.thpembuatan >= 2010 && identitaskendaraan.thpembuatan <= 2021 && laikjalan.alatuji_emisiasapbahanbakarsolar > 40) || (identitaskendaraan.jbb <= 3500 && identitaskendaraan.thpembuatan > 2021 && laikjalan.alatuji_emisiasapbahanbakarsolar > 30) || (identitaskendaraan.jbb > 3500 && identitaskendaraan.thpembuatan < 2010 && laikjalan.alatuji_emisiasapbahanbakarsolar > 65) || (identitaskendaraan.jbb > 3500 && identitaskendaraan.thpembuatan >= 2010 && identitaskendaraan.thpembuatan <= 2021 && laikjalan.alatuji_emisiasapbahanbakarsolar > 40) || (identitaskendaraan.jbb > 3500 && identitaskendaraan.thpembuatan > 2021 && laikjalan.alatuji_emisiasapbahanbakarsolar > 35) ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'"
                    @change="check('Emisi Gas Buang Asap (Solar)', laikjalan.alatuji_emisiasapbahanbakarsolar + ' HSU')"
                    v-on:change="hasiluji" />
            </div>
        </div>
        <div class="col-sm-6"
            v-if="identitaskendaraan.bahanbakar == 'BENSIN' || identitaskendaraan.bahanbakar == 'Bensin'">
            <div class="form-group">
                <label>EMISI GAS BUANG CO (%)</label>
                <input type="number" class="form-control  form-control-lg" name="alatuji_emisicobahanbakarbensin"
                    @focus="handleFocus('alatuji_emisicobahanbakarbensin')" v-model="laikjalan.alatuji_emisicobahanbakarbensin"
                    v-bind:style="(isPenumpang(identitaskendaraan.jenis) && identitaskendaraan.thpembuatan < 2007 && laikjalan.alatuji_emisicobahanbakarbensin > 4) || (isPenumpang(identitaskendaraan.jenis) && identitaskendaraan.thpembuatan >= 2007 && identitaskendaraan.thpembuatan <= 2018 && laikjalan.alatuji_emisicobahanbakarbensin > 1) || (isPenumpang(identitaskendaraan.jenis) && identitaskendaraan.thpembuatan > 2018 && laikjalan.alatuji_emisicobahanbakarbensin > 0.5) || (isBarang(identitaskendaraan.jenis) && identitaskendaraan.thpembuatan < 2007 && laikjalan.alatuji_emisicobahanbakarbensin > 4) || (isBarang(identitaskendaraan.jenis) && identitaskendaraan.thpembuatan >= 2007 && identitaskendaraan.thpembuatan <= 2018 && laikjalan.alatuji_emisicobahanbakarbensin > 1) || (isBarang(identitaskendaraan.jenis) && identitaskendaraan.thpembuatan > 2018 && laikjalan.alatuji_emisicobahanbakarbensin > 0.5) ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'"
                    @change="check('Emisi Gas Buang CO (Bensin)', laikjalan.alatuji_emisicobahanbakarbensin + ' %')"
                    v-on:change="hasiluji" />
            </div>
        </div>
        <div class="col-sm-6"
            v-if="identitaskendaraan.bahanbakar == 'BENSIN' || identitaskendaraan.bahanbakar == 'Bensin'">
            <div class="form-group">
                <label>EMISI GAS BUANG HC (Ppm)</label>
                <input type="number" class="form-control  form-control-lg" name="alatuji_emisihcbahanbakarbensin"
                    @focus="handleFocus('alatuji_emisihcbahanbakarbensin')" v-model="laikjalan.alatuji_emisihcbahanbakarbensin"
                    v-bind:style="(isPenumpang(identitaskendaraan.jenis) && identitaskendaraan.thpembuatan < 2007 && laikjalan.alatuji_emisihcbahanbakarbensin > 1000) || (isPenumpang(identitaskendaraan.jenis) && identitaskendaraan.thpembuatan >= 2007 && identitaskendaraan.thpembuatan <= 2018 && laikjalan.alatuji_emisihcbahanbakarbensin > 150) || (isPenumpang(identitaskendaraan.jenis) && identitaskendaraan.thpembuatan > 2018 && laikjalan.alatuji_emisihcbahanbakarbensin > 100) || (isBarang(identitaskendaraan.jenis) && identitaskendaraan.thpembuatan < 2007 && laikjalan.alatuji_emisihcbahanbakarbensin > 1100) || (isBarang(identitaskendaraan.jenis) && identitaskendaraan.thpembuatan >= 2007 && identitaskendaraan.thpembuatan <= 2018 && laikjalan.alatuji_emisihcbahanbakarbensin > 200) || (isBarang(identitaskendaraan.jenis) && identitaskendaraan.thpembuatan > 2018 && laikjalan.alatuji_emisihcbahanbakarbensin > 150) ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'"
                    @change="check('Emisi Gas Buang HC (Bensin)', laikjalan.alatuji_emisihcbahanbakarbensin + ' PPM')"
                    v-on:change="hasiluji" />
            </div>
        </div>
        <!-- <div class="col-sm-12">
            <p class="text-danger">{{ ambangBatas() }}</p>
        </div> -->

        <b-modal ref="my-modal" title="Alasan Penolakan" @ok="submit">
            <div class="form-group">
                <input type="text" class="form-control  form-control-lg"
                    style="text-transform: uppercase;" v-model="catatan.nama" disabled />
                <p class="text-danger" v-if="errors.nama">{{ errors.nama[0] }}</p>
            </div>
            <div class="form-group row">
                <div class="col-12 col-form-label">
                    <div class="checkbox-list">
                        <label class="checkbox" v-for="item in alasan" :key="item.id">
                            <input type="checkbox" :id="item.id" :value="item.alasanpenolakan"
                                v-model="catatan.alasan" />
                            <span></span>
                            {{ item.alasanpenolakan }}
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleSelect1">Rekomendasi Perbaikan <span class="text-danger">*</span></label>
                <select class="form-control" id="exampleSelect1" v-model="catatan.rekomendasi" @change="lain">
                    <option>Perbaikan</option>
                    <option>Penggantian</option>
                    <option>Penyetelan</option>
                    <option>Lain-lain</option>
                </select>
                <input type="text" class="form-control  form-control-lg"
                    style="text-transform: uppercase;" placeholder="Rekomendasi" v-model="catatan.rekomendasi"
                    v-if="lainlain" />
            </div>
        </b-modal>

    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
    data() {
        return {
            lainlain: false,
        };
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState("pos2", {
            identifikasi: state => state.identifikasi,
            dimensi: state => state.dimensi,
            depan: state => state.depan,
            kanan: state => state.kanan,
            kiri: state => state.kiri,
            belakang: state => state.belakang,
            dalam: state => state.dalam,
            laikjalan: state => state.laikjalan,
            catatan: state => state.catatan,
            pendaftaran: state => state.pendaftaran,
            identitaskendaraan: state => state.identitaskendaraan,
            alasan: state => state.alasan,
        }),
    },
    methods: {
        ...mapMutations("pos2", ["CLEAR_FORM", "CLEAR_CATATAN","SET_STATUS","CHECK_HASILUJI"]),
        ...mapActions("pos2", ["submitCatatan", "getCatatan", "getAlasan"]),
        showModal(nama, hasil) {
            this.CLEAR_CATATAN();
            this.catatan.nama = nama;
            this.catatan.hasiluji = hasil;
            this.catatan.pos = 2;
            this.catatan.status = 1;
            this.getAlasan();
            this.getCatatan(this.$route.params.id);
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        lain() {
            if (this.catatan.rekomendasi == 'Lain-lain') {
                this.lainlain = true
                this.catatan.rekomendasi = '';
            } else {
                this.lainlain = false
            }
        },
        check(nama, hasil) {
            if ((this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan < 2010 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 65) || (this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan >= 2010 && this.identitaskendaraan.thpembuatan <= 2021 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 40) || (this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan > 2021 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 30) || (this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan < 2010 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 65) || (this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan >= 2010 && this.identitaskendaraan.thpembuatan <= 2021 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 40) || (this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan > 2021 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 35)) {
                this.catatan.nama = nama;
                this.catatan.hasiluji = hasil;
                this.getAlasan();
                this.getCatatan(this.$route.params.id);
                this.$refs['my-modal'].show()
            }
            else if ((this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007 && this.laikjalan.alatuji_emisicobahanbakarbensin > 4) ||
                (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018 && this.laikjalan.alatuji_emisicobahanbakarbensin > 1) ||
                (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018 && this.laikjalan.alatuji_emisicobahanbakarbensin > 0.5) ||
                (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007 && this.laikjalan.alatuji_emisicobahanbakarbensin > 4) ||
                (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018 && this.laikjalan.alatuji_emisicobahanbakarbensin > 1) ||
                (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018 && this.laikjalan.alatuji_emisicobahanbakarbensin > 0.5)) {
                this.catatan.nama = nama;
                this.catatan.hasiluji = hasil;
                this.getAlasan();
                this.getCatatan(this.$route.params.id);
                this.$refs['my-modal'].show()
            }
            else if (
                (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 1000) ||
                (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 150) ||
                (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 100) ||
                (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 1100) ||
                (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 200) ||
                (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 150)) {
                this.catatan.nama = nama;
                this.catatan.hasiluji = hasil;
                this.getAlasan();
                this.getCatatan(this.$route.params.id);
                this.$refs['my-modal'].show()
            }
        },
        submit() {
            this.submitCatatan(this.$route.params.id).then(() => {
                Swal.fire({
                    title: "",
                    text: "The application has been successfully submitted!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
        },
        hasiluji() {
            this.CHECK_HASILUJI();
        },
        isBarang(value) {
            return typeof value === 'string' &&  (
                value.startsWith("MOBIL BARANG") ||
                value.startsWith("KERETA") ||
                value.startsWith("MOBIL TANGKI") ||
                value.startsWith("MOBIL PENARIK") ||
                value.startsWith("KENDARAAN BERMOTOR RODA TIGA")
            );
        },
        isPenumpang(value) {
            return typeof value === 'string' && (
                value.startsWith("MOBIL PENUMPANG") ||
                value.startsWith("MOBIL BUS") ||
                value.startsWith("KENDARAAN KHUSUS")
            );
        },
        ambangBatas()
        {
            var ambang = '';
            if(this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007)
            {
                ambang = 'Co : 4% & HC : 1000 Ppm';
            }else if(this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018)
            {
                ambang = 'Co : 1% & HC : 150 Ppm';
            }else if(this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018)
            {
                ambang = 'Co : 0.5% & HC : 100 Ppm';
            }else if(this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007)
            {
                ambang = 'Co : 4% & HC : 1100 Ppm';
            }else if(this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018){
                ambang = 'Co : 1% & HC : 200 Ppm';
            }else if(this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018){
                ambang = 'Co : 0.5% & HC : 150 Ppm';
            }else if (this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan < 2010) {
                ambang = '65% HSU';
            }else if (this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan >= 2010 && this.identitaskendaraan.thpembuatan <= 2021) {
                ambang = '40% HSU';
            }else if (this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan > 2021) {
                ambang = '30% HSU';
            }else if (this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan < 2010) {
                ambang = '65% HSU';
            }else if (this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan >= 2010 && this.identitaskendaraan.thpembuatan <= 2021) {
                ambang = '40% HSU';
            }else if (this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan > 2021) {
                ambang = '34% HSU';
            }
            return ambang;
        },
        handleFocus(field) {
            if (this.laikjalan[field] === 0 || this.laikjalan[field] === "0" ) {
            this.laikjalan[field] = '';
        }
        },
    },
    destroyed() {
        this.CLEAR_CATATAN();
        this.CLEAR_FORM();
    },
    created() {
        this.CLEAR_CATATAN();
        this.CLEAR_FORM();
    },
    components: {
    },
};
</script>
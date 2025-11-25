<template>
    <div>
        <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
            <div class="col-md-12 col-sm-12 col-form-label">
                <label><b>Berat Kosong</b></label>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>Jumlah Sumbu : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <input type="number" step="1" min="2" v-model="identitaskendaraan.jumlah_sumbu" class="form-control" />
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>Sumbu I : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalBK" v-model="identitaskendaraan.beratsumbu1" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>Sumbu II : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalBK" v-model="identitaskendaraan.beratsumbu2" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 3">
                <label><b>Sumbu III : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 3">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalBK" v-model="identitaskendaraan.beratsumbu3" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 4">
                <label><b>Sumbu IV : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 4">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalBK" v-model="identitaskendaraan.beratsumbu4" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 5">
                <label><b>Sumbu V : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 5">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalBK" v-model="identitaskendaraan.beratsumbu5" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 6">
                <label><b>Sumbu VI : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 6">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalBK" v-model="identitaskendaraan.beratsumbu6" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 7">
                <label><b>Sumbu VII : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 7">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalBK" v-model="identitaskendaraan.beratsumbu7" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 8">
                <label><b>Sumbu VIII : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 8">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalBK" v-model="identitaskendaraan.beratsumbu8" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 9">
                <label><b>Sumbu IX : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 9">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalBK" v-model="identitaskendaraan.beratsumbu9" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 10">
                <label><b>Sumbu X : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 10">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalBK" v-model="identitaskendaraan.beratsumbu10" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 11">
                <label><b>Sumbu XI : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 11">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalBK" v-model="identitaskendaraan.beratsumbu11" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 12">
                <label><b>Sumbu XII : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label" v-if="identitaskendaraan.jumlah_sumbu >= 12">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalBK" v-model="identitaskendaraan.beratsumbu12" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>Total Sumbu : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <div class="input-group">
                    <input type="number" step="1" min="0" v-model="identitaskendaraan.beratkosong" class="form-control" disabled/>
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-12 col-sm-12 col-form-label">
                <label><b>Daya Angkut</b></label>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>Orang : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalJBI" v-model="identitaskendaraan.dayaangkutorang" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">orang</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>Barang : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="TotalJBI" v-model="identitaskendaraan.dayaangkutbarang" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>JBI : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <div class="input-group">
                    <input type="number" step="1" min="0" @input="checkJBI" v-model="identitaskendaraan.jbi" class="form-control" 
                    v-bind:style="laikjalan.status_dayaangkut == 0 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'"
                    />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>JBKI : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <div class="input-group">
                    <input type="number" step="1" min="0" v-model="identitaskendaraan.jbki" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>MST : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <div class="input-group">
                    <input type="number" step="1" min="0" v-model="identitaskendaraan.mst" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>Kelas Jalan : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <vSelect label="kelasjalan_name" ref="kelasjalanterendah" :options="kelasjalans"
                v-model="identitaskendaraan.kelasjalanterendah" @input="setKelasJalan"></vSelect>
            </div>

            <div class="col-md-12 col-sm-12 col-form-label">
                <label><b>Pemakaian Diijinkan</b></label>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>Ukuran Ban : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <input type="text" v-model="identitaskendaraan.ukuranban" class="form-control" />
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>Konifigurasi Sumbu : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <input type="text" v-model="identitaskendaraan.konfigurasisumburoda" class="form-control" />
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>JBB : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <div class="input-group">
                    <input type="number" step="1" min="0" v-model="identitaskendaraan.jbb" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3 col-form-label">
                <label><b>JBKB : </b></label>
            </div>
            <div class="col-md-9 col-sm-9 col-form-label">
                <div class="input-group">
                    <input type="number" step="1" min="0" v-model="identitaskendaraan.jbkb" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Kg</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Swal from "sweetalert2";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
    data() {
        return {
            lainlain: false,
            coba: [],
        };
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState("pos4", {
            pendaftaran: state => state.pendaftaran,
            identifikasi: state => state.identifikasi,
            dimensi: state => state.dimensi,
            depan: state => state.depan,
            kanan: state => state.kanan,
            kiri: state => state.kiri,
            belakang: state => state.belakang,
            dalam: state => state.dalam,
            laikjalan: state => state.laikjalan,
            catatan: state => state.catatan,
            alasan: state => state.alasan,
            identitaskendaraan: state => state.identitaskendaraan,
            kelasjalans: state => state.kelasjalans,
        }),
    },
    methods: {
        ...mapMutations("pos4", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS"]),
        ...mapActions("pos4", ["submitCatatan", "getCatatan", "getAlasan"]),
        TotalBK()
        {
            var sb1 = this.identitaskendaraan.beratsumbu1 ?? 0;
            var sb2 = this.identitaskendaraan.beratsumbu2 ?? 0;
            var sb3 = this.identitaskendaraan.beratsumbu3 ?? 0;
            var sb4 = this.identitaskendaraan.beratsumbu4 ?? 0;
            var sb5 = this.identitaskendaraan.beratsumbu5 ?? 0;
            var sb6 = this.identitaskendaraan.beratsumbu6 ?? 0;
            var sb7 = this.identitaskendaraan.beratsumbu7 ?? 0;
            var sb8 = this.identitaskendaraan.beratsumbu8 ?? 0;
            var sb9 = this.identitaskendaraan.beratsumbu9 ?? 0;
            var sb10 = this.identitaskendaraan.beratsumbu10 ?? 0;
            var sb11 = this.identitaskendaraan.beratsumbu11 ?? 0;
            var sb12 = this.identitaskendaraan.beratsumbu12 ?? 0;
            this.identitaskendaraan.beratkosong = parseInt(sb1)+parseInt(sb2)+parseInt(sb3)+parseInt(sb4)+parseInt(sb5)+parseInt(sb6)+parseInt(sb7)+parseInt(sb8)+parseInt(sb9)+parseInt(sb10)+parseInt(sb11)+parseInt(sb12);
            this.TotalJBI();
        },
        TotalJBI()
        {
            var orang = this.identitaskendaraan.dayaangkutorang ?? 0;
            var barang = this.identitaskendaraan.dayaangkutbarang ?? 0;
            this.identitaskendaraan.jbi = (parseInt(orang)*60)+parseInt(barang)+parseInt(this.identitaskendaraan.beratkosong);
            this.checkJBI();
        },
        checkJBI()
        {
            if(this.identitaskendaraan.jbi > parseInt(this.identitaskendaraan.jbb))
            {
                this.laikjalan.status_dayaangkut = 0;
            }else{
                this.laikjalan.status_dayaangkut = 1;
            }
            this.hasiluji();
        },
        setKelasJalan(value) {
            this.identitaskendaraan.kelasjalanterendah= value.kelasjalan_name;
            this.identitaskendaraan.idkelasjalanterendah = value.kelasjalan_id;
        },
        hasiluji() {
            if (this.identifikasi.notnkb == '0' || this.identifikasi.nouji == '0' || this.identifikasi.norangkalandasan == '0' || this.identifikasi.nomotorpenggerak == '0' || this.identifikasi.ukuranban == '0' || this.identifikasi.bahan == '0') {
                this.SET_STATUS('0');
            } else if (this.dimensi.panjangkendaraan == '0' || this.dimensi.lebarkendaraan == '0' || this.dimensi.tinggikendaraan == '0' || this.dimensi.panjangbakatautangki == '0' || this.dimensi.tinggibakatautangki == '0' || this.dimensi.julurdepan == '0' || this.dimensi.julurbelakang == '0' || this.dimensi.p == '0' || this.dimensi.a == '0' || this.dimensi.jaraksumbu1_2 == '0' || this.dimensi.jaraksumbu2_3 == '0' || this.dimensi.jaraksumbu3_4 == '0' || this.dimensi.q == '0' || this.dimensi.r == '0' || this.dimensi.b == '0' || this.dimensi.jarakantaradindingterluar == '0' || this.dimensi.groundclearance == '0' || this.dimensi.lebarpintu == '0' || this.dimensi.tinggipintu == '0' || this.dimensi.tinggianaktangga == '0' || this.dimensi.lebaranaktangga == '0' || this.dimensi.lebarlorong == '0' || this.dimensi.tinggitempatberdiri == '0' || this.dimensi.lebartempatduduk == '0' || this.dimensi.jaraktempatduduk == '0' || this.dimensi.lebarpintudarurat == '0' || this.dimensi.panjangakseskeluar == '0' || this.dimensi.lebarakseskeluar == '0' || this.dimensi.jarakantarbumper == '0') {
                this.SET_STATUS('0');
            } else if (this.depan.kacadepan == '0' || this.depan.penyemprotair == '0' || this.depan.penghapuskaca == '0' || this.depan.bodidepan == '0' || this.depan.lamputandabatas == '0' || this.depan.lampuutamadekat == '0' || this.depan.lampuutamajauh == '0' || this.depan.lampupenunjukarah == '0' || this.depan.lampuposisidepan == '0' || this.depan.lampukabut == '0' || this.depan.kondisitempatnkbdepan == '0') {
                this.SET_STATUS('0');
            }
            else if (this.kanan.kacasampingkanan == '0' || this.kanan.kacaspion == '0' || this.kanan.pintusampingkanan == '0' || this.kanan.bodikanan == '0' || this.kanan.apctkanan == '0' || this.kanan.kompresorudara == '0' || this.kanan.bautdanmurroda == '0' || this.kanan.kondisidanukuranban == '0' || this.kanan.perisaikolong == '0' || this.kanan.tutuptangki == '0' || this.kanan.jaraksumbu2_3 == '0' || this.kanan.jaraksumbu3_4 == '0' || this.kanan.q == '0' || this.kanan.r == '0' || this.kanan.lamputandabatassamping == '0' || this.kanan.apar == '0' || this.kanan.rodakelima == '0' || this.kanan.kakipenompangtempelan == '0' || this.kanan.alatperangkaitempelan == '0') {
                this.SET_STATUS('0');
            }
            else if (this.belakang.apctbelakang == '0' || this.belakang.lampuposisibelakang == '0' || this.belakang.lampupenunjukarah == '0' || this.belakang.lampurem == '0' || this.belakang.lampumundur == '0' || this.belakang.lamputnkb == '0' || this.belakang.kondisitempatpemasangantnkb == '0' || this.belakang.lamputandabatas == '0' || this.belakang.kondisirodacadangan == '0' || this.belakang.spakbor == '0' || this.belakang.sistempembuangan == '0') {
                this.SET_STATUS('0');
            }
            else if (this.kiri.kacasampingkiri == '0' || this.kiri.kacaspionkiri == '0' || this.kiri.kacaspionkiri == '0' || this.kiri.bodikiri == '0' || this.kiri.apctkiri == '0' || this.kiri.kompresorudara == '0' || this.kiri.bautdanmurroda == '0' || this.kiri.kondisidanukuranban == '0' || this.kiri.perisaikolong == '0' || this.kiri.tutuptangki == '0' || this.kiri.lamputandabatassamping == '0' || this.kiri.rodakelima == '0' || this.kiri.kakipenompangtempelan == '0' || this.kiri.alatperangkaitempelan == '0') {
                this.SET_STATUS('0');
            }
            else if (this.dalam.ruangkemudi == '0' || this.dalam.tempatduduk == '0' || this.dalam.dashboard == '0' || this.dalam.speedometer == '0' || this.dalam.instrumenpanel == '0' || this.dalam.alatcontrollampu == '0' || this.dalam.tabirmatahari == '0' || this.dalam.pandangankedepan == '0' || this.dalam.rodakemudi == '0' || this.dalam.batangkemudi == '0' || this.dalam.sabukkeselamatan == '0' || this.dalam.perlengkapan == '0' || this.dalam.remparkir == '0' || this.dalam.pedalremkaki == '0' || this.dalam.remgasbuang == '0' || this.dalam.sistemhampa == '0') {
                this.SET_STATUS('0');
            }
            else if ((this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan < 2010 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 65) || (this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan >= 2010 && this.identitaskendaraan.thpembuatan <= 2021 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 40) || (this.identitaskendaraan.jbb <= 3500 && this.identitaskendaraan.thpembuatan > 2021 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 30) || (this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan < 2010 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 65) || (this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan >= 2010 && this.identitaskendaraan.thpembuatan <= 2021 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 40) || (this.identitaskendaraan.jbb > 3500 && this.identitaskendaraan.thpembuatan > 2021 && this.laikjalan.alatuji_emisiasapbahanbakarsolar > 35)) {
                this.laikjalan.status_emisisolar = '0';
                this.SET_STATUS('0');
            }
            else if ((this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007 && this.laikjalan.alatuji_emisicobahanbakarbensin > 4) ||
                (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018 && this.laikjalan.alatuji_emisicobahanbakarbensin > 1) ||
                (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018 && this.laikjalan.alatuji_emisicobahanbakarbensin > 0.5) ||
                (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007 && this.laikjalan.alatuji_emisicobahanbakarbensin > 4) ||
                (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018 && this.laikjalan.alatuji_emisicobahanbakarbensin > 1) ||
                (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018 && this.laikjalan.alatuji_emisicobahanbakarbensin > 0.5) ||
                (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 1000) ||
                (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 150) ||
                (this.isPenumpang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 100) ||
                (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan < 2007 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 1100) ||
                (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan >= 2007 && this.identitaskendaraan.thpembuatan <= 2018 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 200) ||
                (this.isBarang(this.identitaskendaraan.jenis) && this.identitaskendaraan.thpembuatan > 2018 && this.laikjalan.alatuji_emisihcbahanbakarbensin > 150)) {
                this.laikjalan.status_emisibensin = '0';
                this.SET_STATUS('0');
            }
            else if(this.laikjalan.alatuji_kedalamanalurban < 1) {
                this.SET_STATUS('0');
            }
            else if(this.laikjalan.status_dayaangkut == 0) {
                this.SET_STATUS('0');
            }
            else {
                this.SET_STATUS('1');
            }
            console.log(this.laikjalan.status_dayaangkut)
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
    },
    destroyed() {
        this.CLEAR_CATATAN();
    },
    created() {
        this.CLEAR_CATATAN();
        this.TotalBK();
    },
    components: {
        vSelect,
    },
};
</script>
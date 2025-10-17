<template>
    <div class="card card-custom" id="kt_card_3">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">Pemereriksaan Uji Visual Kendaraan & Ban</h3>
            </div>
            <div class="card-toolbar">
                <b-button v-b-toggle.collapse-3 class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
                    <i class="ki ki-arrow-down icon-nm"></i>
                </b-button>
                <button class="btn btn-info btn-sm mr-1" @click.prevent="back">
                    <i class="fas fa-arrow-left"></i> Prev
                </button>
                <button class="btn btn-warning btn-sm mr-1" @click.prevent="next">
                    <i class="fas fa-arrow-right"></i> Next
                </button>
            </div>
        </div>
        <b-collapse visible id="collapse-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-2 text-center">
                        <div class="form-group">
                            <label> No Uji</label>
                            <input type="text" class="form-control  form-control-lg text-center"
                                name="nouji" readonly placeholder="No Uji" v-model="identitaskendaraan.nouji" />
                        </div>
                    </div>
                    <div class="col-sm-2 text-center">
                        <div class="form-group">
                            <label>No Kendaraan</label>
                            <input type="text" class="form-control  form-control-lg text-center"
                                name="nokend" readonly placeholder=" No Kendaraan" v-model="identitaskendaraan.noregistrasikendaraan
                                    " />
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>Nama</label>
                            <input type="text" class="form-control  form-control-lg text-center"
                                name="nama" readonly placeholder="nama" v-model="identitaskendaraan.nama" />
                        </div>
                    </div>
                    <div class="col-sm-2 text-center">
                        <div class="form-group">
                            <label>Th. Pembuatan</label>
                            <input type="number" class="form-control  form-control-lg text-center"
                                name="thpembuatan" placeholder="Tahun Pembuatan"
                                v-model="identitaskendaraan.thpembuatan" />
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>JBB</label>
                            <input type="number" class="form-control  form-control-lg text-center"
                                name="jbb" readonly placeholder="JBB" v-model="identitaskendaraan.jbb" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>Merek</label>
                            <input type="text" class="form-control  form-control-lg text-center"
                                name="merek" readonly placeholder="Jenis" v-model="identitaskendaraan.merek" />
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>Jenis</label>
                            <input type="text" class="form-control  form-control-lg text-center"
                                name="jenis" readonly placeholder="Jenis" v-model="identitaskendaraan.jenis" />
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>No Mesin</label>
                            <input type="text" class="form-control  form-control-lg text-center"
                                name="nomesin" placeholder="No Mesin" v-model="identitaskendaraan.nomesin" />
                            <p class="text-danger" v-if="errors.ukuranban">
                                {{ errors.ukuranban[0] }}
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>No Rangka</label>
                            <input type="text" class="form-control  form-control-lg text-center"
                                name="nomesin" placeholder="No Rangka" v-model="identitaskendaraan.norangka" />
                            <p class="text-danger" v-if="errors.norangka">
                                {{ errors.norangka[0] }}
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>Ukuran Ban</label>
                            <input type="text" class="form-control  form-control-lg text-center"
                                name="ukuranban" placeholder="Ukuran Ban" v-model="identitaskendaraan.ukuranban" />
                            <p class="text-danger" v-if="errors.ukuranban">
                                {{ errors.ukuranban[0] }}
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>Bahan Bakar</label>
                            <input type="text" class="form-control  form-control-lg text-center"
                                name="rumahrumah" placeholder="Bahan Bakar"
                                v-model="identitaskendaraan.bahanbakar" />
                            <p class="text-danger" v-if="errors.bahanbakar">
                                {{ errors.bahanbakar[0] }}
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>Tempat Duduk</label>
                            <input type="text" class="form-control  form-control-lg text-center"
                                name="dayaangkutorang" placeholder="Tempat Duduk"
                                v-model="identitaskendaraan.dayaangkutorang" />
                            <p class="text-danger" v-if="errors.dayaangkutorang">
                                {{ errors.dayaangkutorang[0] }}
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>Warna</label>
                            <input type="text" class="form-control  form-control-lg text-center"
                                name="warna" placeholder="Warna" v-model="identitaskendaraan.warna" />
                            <p class="text-danger" v-if="errors.warna">
                                {{ errors.warna[0] }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </b-collapse>
        <hr />
        <div class="card-body">

            <div class="card card-custom">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label" v-bind:style="identifikasi.notnkb == '0' ||
                                identifikasi.nouji == '0' ||
                                identifikasi.norangkalandasan == '0' ||
                                identifikasi.nomotorpenggerak == '0'
                                ? 'background-color: #DC143C;'
                                : 'background-color: #FFFFFF;'
                            ">
                            Identifikasi Kendaraan
                        </h3>
                    </div>
                    <div class="card-toolbar">
                        <b-button v-b-toggle.collapse-identifikasi
                            class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
                            <i class="ki ki-arrow-down icon-nm"></i>
                        </b-button>
                    </div>
                </div>
                <b-collapse id="collapse-identifikasi">
                    <div class="card-body">
                        <identfikasi-form></identfikasi-form>
                    </div>
                </b-collapse>
            </div>

            <div class="card card-custom">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label" v-bind:style="dimensi.panjangkendaraan == '0' ||
                                dimensi.lebarkendaraan == '0' ||
                                dimensi.tinggikendaraan == '0' ||
                                dimensi.panjangbakatautangki == '0' ||
                                dimensi.tinggibakatautangki == '0' ||
                                dimensi.julurdepan == '0' ||
                                dimensi.julurbelakang == '0' ||
                                dimensi.p == '0' ||
                                dimensi.a == '0' ||
                                dimensi.jaraksumbu1_2 == '0' ||
                                dimensi.jaraksumbu2_3 == '0' ||
                                dimensi.jaraksumbu3_4 == '0' ||
                                dimensi.q == '0' ||
                                dimensi.r == '0' ||
                                dimensi.b == '0' ||
                                dimensi.jarakantaradindingterluar == '0' ||
                                dimensi.groundclearance == '0' ||
                                dimensi.lebarpintu == '0' ||
                                dimensi.tinggipintu == '0' ||
                                dimensi.tinggianaktangga == '0' ||
                                dimensi.lebaranaktangga == '0' ||
                                dimensi.lebarlorong == '0' ||
                                dimensi.tinggitempatberdiri == '0' ||
                                dimensi.lebartempatduduk == '0' ||
                                dimensi.jaraktempatduduk == '0' ||
                                dimensi.lebarpintudarurat == '0' ||
                                dimensi.panjangakseskeluar == '0' ||
                                dimensi.lebarakseskeluar == '0' ||
                                dimensi.jarakantarbumper == '0'
                                ? 'background-color: #DC143C;'
                                : 'background-color: #FFFFFF;'
                            ">
                            Dimensi Kendaraan
                        </h3>
                    </div>
                    <div class="card-toolbar">
                        <b-button v-b-toggle.collapse-dimensi
                            class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
                            <i class="ki ki-arrow-down icon-nm"></i>
                        </b-button>
                    </div>
                </div>
                <b-collapse id="collapse-dimensi">
                    <div class="card-body">
                        <dimensi-form></dimensi-form>
                    </div>
                </b-collapse>
            </div>

            <div class="card card-custom">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label" v-bind:style="depan.kacadepan == '0' ||
                                depan.penyemprotair == '0' ||
                                depan.penghapuskaca == '0' ||
                                depan.bodidepan == '0' ||
                                depan.lamputandabatas == '0' ||
                                depan.lampuutamadekat == '0' ||
                                depan.lampuutamajauh == '0' ||
                                depan.lampupenunjukarah == '0' ||
                                depan.lampuposisidepan == '0' ||
                                depan.lampukabut == '0' ||
                                depan.kondisitempatnkbdepan == '0'
                                ? 'background-color: #DC143C;'
                                : 'background-color: #FFFFFF;'
                            ">
                            Bagian Depan Kendaraan
                        </h3>
                    </div>
                    <div class="card-toolbar">
                        <b-button v-b-toggle.collapse-depan
                            class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
                            <i class="ki ki-arrow-down icon-nm"></i>
                        </b-button>
                    </div>
                </div>
                <b-collapse id="collapse-depan">
                    <div class="card-body">
                        <depan-form></depan-form>
                    </div>
                </b-collapse>
            </div>

            <div class="card card-custom">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label" v-bind:style="kanan.kacasampingkanan == '0' ||
                                kanan.kacaspion == '0' ||
                                kanan.pintusampingkanan == '0' ||
                                kanan.bodikanan == '0' ||
                                kanan.apctkanan == '0' ||
                                kanan.kompresorudara == '0' ||
                                kanan.bautdanmurroda == '0' ||
                                kanan.kondisidanukuranban == '0' ||
                                kanan.perisaikolong == '0' ||
                                kanan.tutuptangki == '0' ||
                                kanan.jaraksumbu2_3 == '0' ||
                                kanan.jaraksumbu3_4 == '0' ||
                                kanan.q == '0' ||
                                kanan.r == '0' ||
                                kanan.lamputandabatassamping == '0' ||
                                kanan.apar == '0' ||
                                kanan.rodakelima == '0' ||
                                kanan.kakipenompangtempelan == '0' ||
                                kanan.alatperangkaitempelan == '0'
                                ? 'background-color: #DC143C;'
                                : 'background-color: #FFFFFF;'
                            ">
                            Bagian Samping Kanan Kendaraan
                        </h3>
                    </div>
                    <div class="card-toolbar">
                        <b-button v-b-toggle.collapse-kanan
                            class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
                            <i class="ki ki-arrow-down icon-nm"></i>
                        </b-button>
                    </div>
                </div>
                <b-collapse id="collapse-kanan">
                    <div class="card-body">
                        <kanan-form></kanan-form>
                    </div>
                </b-collapse>
            </div>

            <div class="card card-custom">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label" v-bind:style="belakang.apctbelakang == '0' ||
                                belakang.lampuposisibelakang == '0' ||
                                belakang.lampupenunjukarah == '0' ||
                                belakang.lampurem == '0' ||
                                belakang.lampumundur == '0' ||
                                belakang.lamputnkb == '0' ||
                                belakang.kondisitempatpemasangantnkb == '0' ||
                                belakang.lamputandabatas == '0' ||
                                belakang.kondisirodacadangan == '0' ||
                                belakang.spakbor == '0' ||
                                belakang.sistempembuangan == '0'
                                ? 'background-color: #DC143C;'
                                : 'background-color: #FFFFFF;'
                            ">
                            Bagian Belakang Kendaraan
                        </h3>
                    </div>
                    <div class="card-toolbar">
                        <b-button v-b-toggle.collapse-belakang
                            class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
                            <i class="ki ki-arrow-down icon-nm"></i>
                        </b-button>
                    </div>
                </div>
                <b-collapse id="collapse-belakang">
                    <div class="card-body">
                        <belakang-form></belakang-form>
                    </div>
                </b-collapse>
            </div>

            <div class="card card-custom">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label" v-bind:style="kiri.kacasampingkiri == '0' ||
                                kiri.kacaspionkiri == '0' ||
                                kiri.kacaspionkiri == '0' ||
                                kiri.bodikiri == '0' ||
                                kiri.apctkiri == '0' ||
                                kiri.kompresorudara == '0' ||
                                kiri.bautdanmurroda == '0' ||
                                kiri.kondisidanukuranban == '0' ||
                                kiri.perisaikolong == '0' ||
                                kiri.tutuptangki == '0' ||
                                kiri.lamputandabatassamping == '0' ||
                                kiri.rodakelima == '0' ||
                                kiri.kakipenompangtempelan == '0' ||
                                kiri.alatperangkaitempelan == '0'
                                ? 'background-color: #DC143C;'
                                : 'background-color: #FFFFFF;'
                            ">
                            Bagian Samping Kiri Kendaraan
                        </h3>
                    </div>
                    <div class="card-toolbar">
                        <b-button v-b-toggle.collapse-kiri
                            class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
                            <i class="ki ki-arrow-down icon-nm"></i>
                        </b-button>
                    </div>
                </div>
                <b-collapse id="collapse-kiri">
                    <div class="card-body">
                        <kiri-form></kiri-form>
                    </div>
                </b-collapse>
            </div>

            <div class="card card-custom">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label" v-bind:style="dalam.ruangkemudi == '0' ||
                                dalam.tempatduduk == '0' ||
                                dalam.dashboard == '0' ||
                                dalam.speedometer == '0' ||
                                dalam.instrumenpanel == '0' ||
                                dalam.alatcontrollampu == '0' ||
                                dalam.tabirmatahari == '0' ||
                                dalam.pandangankedepan == '0' ||
                                dalam.rodakemudi == '0' ||
                                dalam.batangkemudi == '0' ||
                                dalam.sabukkeselamatan == '0' ||
                                dalam.perlengkapan == '0' ||
                                dalam.remparkir == '0' ||
                                dalam.pedalremkaki == '0' ||
                                dalam.remgasbuang == '0' ||
                                dalam.sistemhampa == '0'
                                ? 'background-color: #DC143C;'
                                : 'background-color: #FFFFFF;'
                            ">
                            Bagian Dalam Kendaraan
                        </h3>
                    </div>
                    <div class="card-toolbar">
                        <b-button v-b-toggle.collapse-dalam
                            class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
                            <i class="ki ki-arrow-down icon-nm"></i>
                        </b-button>
                    </div>
                </div>
                <b-collapse id="collapse-dalam">
                    <div class="card-body">
                        <dalam-form></dalam-form>
                    </div>
                </b-collapse>
            </div>
            
            <div class="card card-custom">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label" v-bind:style="laikjalan.alatuji_kedalamanalurban < 1
                                ? 'background-color: #DC143C;'
                                : 'background-color: #FFFFFF;'
                            ">
                            Ban
                        </h3>
                    </div>
                    <div class="card-toolbar">
                        <b-button v-b-toggle.collapse-ban class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
                            <i class="ki ki-arrow-down icon-nm"></i>
                        </b-button>
                    </div>
                </div>
                <b-collapse id="collapse-ban">
                    <div class="card-body">
                        <ban-form></ban-form>
                    </div>
                </b-collapse>
            </div>

            <div class="form-group row">
                <div class="col-sm-12">
                    <h3>HASIL PENGUJIAN</h3>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <br />
                        <div class="radio-inline">
                            <label class="radio radio-success">
                                <input type="radio" disabled v-model="status_lulusuji" value="1" />
                                <span></span>
                                Ya
                            </label>
                            <label class="radio radio-danger">
                                <input type="radio" disabled v-model="status_lulusuji" value="0" />
                                <span></span>
                                Tidak
                            </label>
                        </div>
                        <p class="text-danger" v-if="errors.pos1">
                            {{ errors.pos1[0] }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-6">
                    <button class="btn btn-primary" style="width: 100%" @click.prevent="submit">
                        <i class="fa fa-save"></i> Save
                    </button>
                </div>
                <div class="col-sm-6">
                    <button class="btn btn-warning" style="width: 100%" @click.prevent="close">
                        <i class="fa fa-close"></i> Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
import FormIdentifikasi from "../formPengujian/FormIdentifikasi.vue";
import FormDimensi from "../formPengujian/FormDimensi.vue";
import FormDepan from "../formPengujian/FormDepan.vue";
import FormKanan from "../formPengujian/FormKanan.vue";
import FormBelakang from "../formPengujian/FormBelakang.vue";
import FormKiri from "../formPengujian/FormKiri.vue";
import FormDalam from "../formPengujian/FormDalam.vue";
import FormBan from "../formPengujian/FormBan.vue";

export default {
    data() {
        return {
            image: "no image.jpg",
            size: {
                width: 200,
                height: 200,
            },
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Pos" },
            { title: "Pengujian" },
        ]);
    },
    created() {
        this.getIdentitaskendaraan(this.$route.params.id).then(() => {
            this.editPos(this.$route.params.id).then(() => {
                this.hasiluji();
            });
        });
    },
    methods: {
        ...mapActions("pos1", [
            "submitPos",
            "getIdentitaskendaraan",
            "editPos",
            "CLEAR_FORM",
        ]),
        ...mapMutations("pos1", ["CLEAR_FORM", "CLEAR_CATATAN","SET_STATUS","CHECK_HASILUJI"]),
        submit() {
            this.submitPos(this.$route.params.id).then(() => {
                Swal.fire({
                    title: "",
                    text: "The application has been successfully submitted!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
        },
        close() {
            this.$router.go(-1);
        },
        back() {
            this.$router.push({
                name: "pos1.pengujian",
                params: { id: this.$route.params.id },
            });
        },
        next() {
            this.$router.push({
                name: "pos2.pengujian",
                params: { id: this.$route.params.id },
            });
        },
        uploadfoto() {
            window.open(
                "/upload/" + this.$route.params.id + "/fotokendaraan",
                "_blank",
            );
        },
        hasiluji() {
            this.CHECK_HASILUJI();
        },
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState({
            identitaskendaraan: (state) => state.pos1.identitaskendaraan,
            pengujian: (state) => state.pos1.pengujian,
            pendaftaran: (state) => state.pos1.pendaftaran,
            identifikasi: (state) => state.pos1.identifikasi,
            dimensi: (state) => state.pos1.dimensi,
            depan: (state) => state.pos1.depan,
            kanan: (state) => state.pos1.kanan,
            kiri: (state) => state.pos1.kiri,
            belakang: (state) => state.pos1.belakang,
            dalam: (state) => state.pos1.dalam,
            laikjalan: (state) => state.pos1.laikjalan,
            status_lulusuji: (state) => state.pos1.status_lulusuji,
        }),
        ...mapGetters(["currentUserPersonalInfo"]),
    },
    components: {
        "identfikasi-form": FormIdentifikasi,
        "dimensi-form": FormDimensi,
        "depan-form": FormDepan,
        "kanan-form": FormKanan,
        "belakang-form": FormBelakang,
        "kiri-form": FormKiri,
        "dalam-form": FormDalam,
        "ban-form": FormBan,
    },
};
</script>

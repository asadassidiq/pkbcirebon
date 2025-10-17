<template>
    <div class="card card-custom" id="kt_card_3">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">Kendaraan</h3>
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
                            <input type="text" class="form-control  form-control-lg text-center" name="nouji" readonly
                                placeholder="No Uji" v-model="identitaskendaraan.nouji" />
                        </div>
                    </div>
                    <div class="col-sm-2 text-center">
                        <div class="form-group">
                            <label>No Kendaraan</label>
                            <input type="text" class="form-control  form-control-lg text-center" name="nokend" readonly
                                placeholder=" No Kendaraan" v-model="identitaskendaraan.noregistrasikendaraan" />
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>Nama</label>
                            <input type="text" class="form-control  form-control-lg text-center" name="nama" readonly
                                placeholder="nama" v-model="identitaskendaraan.nama" />
                        </div>
                    </div>
                    <div class="col-sm-2 text-center">
                        <div class="form-group">
                            <label>Th. Pembuatan</label>
                            <input type="number" class="form-control  form-control-lg text-center" name="thpembuatan"
                                placeholder="Tahun Pembuatan" v-model="identitaskendaraan.thpembuatan" />
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>Bahan Bakar</label>
                            <input type="text" class="form-control  form-control-lg text-center" name="bahanbakar"
                                readonly placeholder="JBB" v-model="identitaskendaraan.bahanbakar" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>Merek</label>
                            <input type="text" class="form-control  form-control-lg text-center" name="merek" readonly
                                placeholder="Jenis" v-model="identitaskendaraan.merek" />
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>Jenis</label>
                            <input type="text" class="form-control  form-control-lg text-center" name="jenis" readonly
                                placeholder="Jenis" v-model="identitaskendaraan.jenis" />
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>No Mesin</label>
                            <input type="text" class="form-control  form-control-lg text-center" name="nomesin"
                                placeholder="No Mesin" v-model="identitaskendaraan.nomesin" />
                            <p class="text-danger" v-if="errors.ukuranban">{{ errors.ukuranban[0] }}</p>
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <div class="form-group">
                            <label>JBB</label>
                            <input type="text" class="form-control  form-control-lg text-center" name="jbb"
                                placeholder="JBB" v-model="identitaskendaraan.jbb" />
                            <p class="text-danger" v-if="errors.jbb">{{ errors.jbb[0] }}</p>
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
                        <h3 class="card-label" v-bind:style="laikjalan.status_remparkir == 0 || laikjalan.status_remparkir == 0
                            ? 'background-color: #DC143C;'
                            : 'background-color: #FFFFFF;'
                            ">
                            Rem
                        </h3>
                    </div>
                    <div class="card-toolbar">
                        <b-button v-b-toggle.collapse-emisi
                            class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
                            <i class="ki ki-arrow-down icon-nm"></i>
                        </b-button>
                    </div>
                </div>
                <b-collapse id="collapse-emisi" visible>
                    <div class="card-body">
                        <posRem-form></posRem-form>
                    </div>
                </b-collapse>
            </div>
            <div class="card card-custom">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label" v-bind:style="laikjalan.alatuji_penunjukkecepatan < 36 || laikjalan.alatuji_penunjukkecepatan > 46
                            ? 'background-color: #DC143C;'
                            : 'background-color: #FFFFFF;'
                            ">
                            AKURASI PENUNJUK KECEPATAN/SPEEDOMETER (Km/Jam)
                        </h3>
                    </div>
                    <div class="card-toolbar">
                        <b-button v-b-toggle.collapse-emisi
                            class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
                            <i class="ki ki-arrow-down icon-nm"></i>
                        </b-button>
                    </div>
                </div>
                <b-collapse id="collapse-emisi" visible>
                    <div class="card-body">
                        <posSpeed-form></posSpeed-form>
                    </div>
                </b-collapse>
            </div>
            
            <div class="card card-custom">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label">Foto Kendaraan Kendaraan</h3>
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
                        <div class="row">
                            <div class="col-md-3 col-sm-12 text-center">
                                <img v-bind="size" :src="'/normal_images/' +
                                    identitaskendaraan.nouji +
                                    '-tampakdepan.jpg'
                                    " />
                                <p>Tampak Depan</p>
                            </div>
                            <div class="col-md-3 col-sm-12 text-center">
                                <img v-bind="size" :src="'/normal_images/' +
                                    identitaskendaraan.nouji +
                                    '-tampakbelakang.jpg'
                                    " />
                                <p>Tampak Belakang</p>
                            </div>
                            <div class="col-md-3 col-sm-12 text-center">
                                <img v-bind="size" :src="'/normal_images/' +
                                    identitaskendaraan.nouji +
                                    '-tampakkanan.jpg'
                                    " />
                                <p>Tampak Kanan</p>
                            </div>
                            <div class="col-md-3 col-sm-12 text-center">
                                <img v-bind="size" :src="'/normal_images/' +
                                    identitaskendaraan.nouji +
                                    '-tampakkiri.jpg'
                                    " />
                                <p>Tampak Kiri</p>
                            </div>
                            <div class="col-md-12 col-sm-12 text-center">
                                <a class="btn btn-sm btn-warning" @click.prevent="uploadfoto"><i
                                        class="flaticon2-refresh"></i>Upload
                                    Foto
                                </a>
                            </div>
                        </div>
                    </div>
                </b-collapse>
            </div>

            <div class="col-sm-12">
                <h3>HASIL PENGUJIAN</h3>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <br>
                    <div class="radio-inline">
                        <label class="radio radio-success">
                            <input type="radio" disabled v-model="pendaftaran.pos4" value="1" />
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" disabled v-model="pendaftaran.pos4" value="0" />
                            <span></span>
                            Tidak
                        </label>
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-6">
                    <button class="btn btn-primary" style="width:100%" @click.prevent="submit">
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
import FormSpeed from "../formPengujian/FormSpeedometer.vue";
import FormRem from "../formPengujian/FormRem.vue";

export default {
    data() {
        return {};
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Pos" },
            { title: "Pengujian" }
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
        ...mapMutations("pos4", ["CLEAR_FORM", "CLEAR_CATATAN","CHECK_HASILUJI"]),
        ...mapActions("pos4", ["submitPos", "getIdentitaskendaraan", "editPos"]),
        submit() {
            this.submitPos(this.$route.params.id).then(() => {
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
        close() {
            this.$router.go(-1);
        },
        back() {
            this.$router.push({
                name: "pos3.pengujian",
                params: { id: this.$route.params.id },
            });
        },
        next() {
            this.$router.push({
                name: "verif.pengujian",
                params: { id: this.$route.params.id },
            });
        },
        uploadfoto() {
            window.open(
                "/upload/" + this.$route.params.id + "/fotokendaraan",
                "_blank",
            );
        },
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState({
            identitaskendaraan: state => state.pos4.identitaskendaraan,
            pendaftaran: state => state.pos4.pendaftaran,
            laikjalan: state => state.pos4.laikjalan,
        }),
        ...mapGetters(["currentUserPersonalInfo"]),
    },
    components: {
        "posRem-form": FormRem,
        "posSpeed-form": FormSpeed,
    },
};
</script>

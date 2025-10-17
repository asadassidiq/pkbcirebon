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
                        <h3 class="card-label" v-bind:style="laikjalan.status_emisibensin < 1 || laikjalan.status_emisisolar < 1
                            ? 'background-color: #DC143C;'
                            : 'background-color: #FFFFFF;'
                            ">
                            Emisi
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
                        <emisi-form></emisi-form>
                    </div>
                </b-collapse>
            </div>
            
            <div class="card card-custom">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label" v-bind:style="laikjalan.status_kebisingan < 1
                                ? 'background-color: #DC143C;'
                                : 'background-color: #FFFFFF;'
                            ">
                            Kebisingan Suara
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
                        <pos-form></pos-form>
                    </div>
                </b-collapse>
            </div>

            <div class="card card-custom">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label" v-bind:style="bawah.rangkalandasan < 1 || bawah.motorpenggerak < 1 || bawah.sistempenerusdaya < 1 || bawah.sistemkemudi < 1
                                || bawah.sistemsuspensi < 1 || bawah.sistemroda < 1 || bawah.sistemrem < 1
                                ? 'background-color: #DC143C;'
                                : 'background-color: #FFFFFF;'
                            ">
                            Bagian Bawah
                        </h3>
                    </div>
                    <div class="card-toolbar">
                        <b-button v-b-toggle.collapse-bawah
                            class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
                            <i class="ki ki-arrow-down icon-nm"></i>
                        </b-button>
                    </div>
                </div>
                <b-collapse id="collapse-bawah">
                    <div class="card-body">
                        <bawah-form></bawah-form>
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
                            <input type="radio" disabled v-model="pendaftaran.pos2" value="1" />
                            <span></span>
                            Ya
                        </label>
                        <label class="radio radio-danger">
                            <input type="radio" disabled v-model="pendaftaran.pos2" value="0" />
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
import Form from "../formPengujian/FormKebisingan.vue";
import FormEmisi from "../formPengujian/FormEmisi.vue";
import FormBawah from "../formPengujian/FormBawah.vue";

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
        ...mapMutations("pos2", ["CLEAR_FORM", "CLEAR_CATATAN","CHECK_HASILUJI"]),
        ...mapActions("pos2", ["submitPos", "getIdentitaskendaraan", "editPos", "CLEAR_FORM"]),
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
                name: "pos1.pengujian",
                params: { id: this.$route.params.id },
            });
        },
        next() {
            this.$router.push({
                name: "pos3.pengujian",
                params: { id: this.$route.params.id },
            });
        },
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState({
            identitaskendaraan: state => state.pos2.identitaskendaraan,
            pendaftaran: state => state.pos2.pendaftaran,
            laikjalan: state => state.pos2.laikjalan,
            bawah: state => state.pos2.bawah,
        }),
        ...mapGetters(["currentUserPersonalInfo"]),
    },
    components: {
        "pos-form": Form,
        "emisi-form": FormEmisi,
        "bawah-form": FormBawah,
    },
};
</script>

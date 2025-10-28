<template>
    <div class="row">
        <div class="col-sm-4">
            <div class="form-group">
                <label>Uji Visual, Dimensi, Bagian Bawah dan Ban</label>
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos1" value="1" />
                        <span></span>
                        Lulus
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos1" value="0" />
                        <span></span>
                        Tidak Lulus
                    </label>
                    <router-link :to="{ name: 'pos1.pengujian' }" class="btn btn-sm btn-warning"><i
                            class="flaticon2-refresh"></i>Revisi
                    </router-link>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Hasil Uji</label>
                <div class="hasil-uji">
                    <vue-marked class="ms-5" :source="pengujian.hasilujipos1" :html="true">
                    </vue-marked>
                </div>
                <!-- <textarea class="form-control " v-model="pengujian.hasilujipos1" rows="3"
                    disabled="disabled"></textarea> -->
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Catatan</label>
                <textarea class="form-control " v-model="catatanpos.pos1" rows="3" disabled="disabled"></textarea>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group">
                <label>Kebisingan</label>
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos2" value="1" />
                        <span></span>
                        Lulus
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos2" value="0" />
                        <span></span>
                        Tidak Lulus
                    </label>
                    <router-link :to="{ name: 'pos2.pengujian' }" class="btn btn-sm btn-warning"><i
                            class="flaticon2-refresh"></i>Revisi
                    </router-link>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Hasil Uji</label>
                <div class="hasil-uji">
                    <vue-marked class="ms-5" :source="pengujian.hasilujipos2" :html="true">
                    </vue-marked>
                </div>

                <!-- <textarea class="form-control " v-model="pengujian.hasilujipos2" rows="3"
                    disabled="disabled"></textarea> -->
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Catatan</label>
                <textarea class="form-control " v-model="catatanpos.pos2" rows="3" disabled="disabled"></textarea>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group">
                <label>Emisi</label>
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos3" value="1" />
                        <span></span>
                        Lulus
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos3" value="0" />
                        <span></span>
                        Tidak Lulus
                    </label>
                    <router-link :to="{ name: 'pos3.pengujian' }" class="btn btn-sm btn-warning"><i
                            class="flaticon2-refresh"></i>Revisi
                    </router-link>
                </div>
                <p class="text-danger" v-if="errors.pos3">
                    {{ errors.pos3[0] }}
                </p>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Hasil Uji</label>
                <div class="hasil-uji">
                    <vue-marked class="ms-5" :source="pengujian.hasilujipos3" :html="true">
                    </vue-marked>
                </div>

                <!-- <textarea class="form-control " v-model="pengujian.hasilujipos3" rows="3"
                    disabled="disabled"></textarea> -->
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Catatan</label>
                <textarea class="form-control " v-model="catatanpos.pos3" rows="3" disabled="disabled"></textarea>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group">
                <label>Lampu</label>
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos4" value="1" />
                        <span></span>
                        Lulus
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos4" value="0" />
                        <span></span>
                        Tidak Lulus
                    </label>
                    <router-link :to="{ name: 'pos4.pengujian' }" class="btn btn-sm btn-warning"><i
                            class="flaticon2-refresh"></i>Revisi
                    </router-link>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Hasil Uji</label>
                <div class="hasil-uji">
                    <vue-marked class="ms-5" :source="pengujian.hasilujipos4" :html="true">
                    </vue-marked>
                </div>
                <!-- <textarea class="form-control " v-model="pengujian.hasilujipos4" rows="3"
                    disabled="disabled"></textarea> -->
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Catatan</label>
                <textarea class="form-control " v-model="catatanpos.pos4" rows="3" disabled="disabled"></textarea>
            </div>
        </div>
        <!-- <div class="col-sm-4">
            <div class="form-group">
                <label>Sideslip</label>
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos5" value="1" />
                        <span></span>
                        Lulus
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos5" value="0" />
                        <span></span>
                        Tidak Lulus
                    </label>
                    <router-link :to="{ name: 'pos5.pengujian' }" class="btn btn-sm btn-warning"><i
                            class="flaticon2-refresh"></i>Revisi
                    </router-link>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Hasil Uji</label>
                <textarea class="form-control " v-model="pengujian.hasilujipos5" rows="3"
                    disabled="disabled"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Catatan</label>
                <textarea class="form-control " v-model="catatanpos.pos5" rows="3" disabled="disabled"></textarea>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group">
                <label>Timbangan</label>
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos6" value="1" />
                        <span></span>
                        Lulus
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos6" value="0" />
                        <span></span>
                        Tidak Lulus
                    </label>
                    <router-link :to="{ name: 'pos6.pengujian' }" class="btn btn-sm btn-warning"><i
                            class="flaticon2-refresh"></i>Revisi
                    </router-link>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Hasil Uji</label>
                <textarea class="form-control " v-model="pengujian.hasilujipos6" rows="3"
                    disabled="disabled"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Catatan</label>
                <textarea class="form-control " v-model="catatanpos.pos6" rows="3" disabled="disabled"></textarea>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group">
                <label>Rem</label>
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos7" value="1" />
                        <span></span>
                        Lulus
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos7" value="0" />
                        <span></span>
                        Tidak Lulus
                    </label>
                    <router-link :to="{ name: 'pos7.pengujian' }" class="btn btn-sm btn-warning"><i
                            class="flaticon2-refresh"></i>Revisi
                    </router-link>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Hasil Uji</label>
                <textarea class="form-control " v-model="pengujian.hasilujipos7" rows="3"
                    disabled="disabled"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Catatan</label>
                <textarea class="form-control " v-model="catatanpos.pos7" rows="3" disabled="disabled"></textarea>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group">
                <label>Speedometer</label>
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos8" value="1" />
                        <span></span>
                        Lulus
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" disabled="disabled" v-model="pengujian.pos8" value="0" />
                        <span></span>
                        Tidak Lulus
                    </label>
                    <router-link :to="{ name: 'pos8.pengujian' }" class="btn btn-sm btn-warning"><i
                            class="flaticon2-refresh"></i>Revisi
                    </router-link>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Hasil Uji</label>
                <textarea class="form-control " v-model="pengujian.hasilujipos8" rows="3"
                    disabled="disabled"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Catatan</label>
                <textarea class="form-control " v-model="catatanpos.pos8" rows="3" disabled="disabled"></textarea>
            </div>
        </div> -->
        <div class="col-sm-12">
            <hr />
        </div>
        <div class="col-sm-12">
            <div class="form-group">
                <label><b>Jenis Cetak Blue</b></label>
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" v-model="pengujian.jenis_cetak" value="1" />
                        <span></span>
                        Full Cycle
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" v-model="pengujian.jenis_cetak" value="0" />
                        <span></span>
                        Non Full Cycle
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label><b>Hasil Keseluruhan</b></label>
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" v-model="pengujian.verif" value="1" />
                        <span></span>
                        Lulus
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" v-model="pengujian.verif" value="0" />
                        <span></span>
                        Tidak Lulus
                    </label>
                </div>
                <p class="text-danger" v-if="errors.verif">
                    {{ errors.verif[0] }}
                </p>
            </div>
            <div class="form-group">
                <label for="exampleTextarea">Catatan</label>
                <textarea class="form-control " v-model="pengujian.catatanverif" rows="3"></textarea>
            </div>
        </div>
    </div>
</template>
<style>
.hasil-uji {
    min-height: 250px;
    overflow-y: scroll;
    border: 1px solid #E4E6EF;
    border-radius: 6px;
    padding: 5px;
    background-color: #f5f5f5;
}
</style>
<script>
import datepicker from "vuejs-datepicker";
import { en, id } from "vuejs-datepicker/dist/locale";
import Swal from "sweetalert2";
import moment from "moment";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import VueMarkdown from 'vue-markdown-v2/src/VueMarkdown';
// var VueMarkdown = require('vue-markdown-v2/src/VueMarkdown');

export default {
    data() {
        return {
            id: id,
            sktl: "2",
        };
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState("verif", {
            pengujian: (state) => state.pengujian,
            identitaskendaraan: (state) => state.identitaskendaraan,
            kuotas: (state) => state.kuota,
            catatanpos: (state) => state.catatanpos,
        }),
        ...mapGetters(["currentUserPersonalInfo"]),
    },
    methods: {
        ...mapMutations("verif", ["CLEAR_FORM"]),
        ...mapActions("verif", ["submitVerif", "getKuota", "getCatatanPos"]),
        submit() {
            this.submitVerif(this.$route.params.id).then(() => {
                Swal.fire({
                    title: "",
                    text: "The application has been successfully submitted!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.$router.push({ name: "verif.data" });
            });
        },

        printsktl(id) {
            if (this.sktl == 0) {
                window.open(
                    "/cetak/" + this.$route.params.id + "/sktl",
                    "_blank",
                );
            } else {
                window.open(
                    "/cetak/" + this.$route.params.id + "/lhp",
                    "_blank",
                );
            }
        },
    },
    destroyed() {
        this.CLEAR_FORM();
    },
    created() {
        this.CLEAR_FORM();
        this.getKuota();
        this.getCatatanPos(this.$route.params.id);
    },
    components: {
        datepicker,
        "vue-marked": VueMarkdown,
    },
};
</script>

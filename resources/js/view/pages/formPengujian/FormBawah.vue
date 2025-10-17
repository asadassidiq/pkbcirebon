<template>
    <div>
        <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
            <label class="col-3 col-form-label">Sistem Kemudi</label>
            <div class="col-3 col-form-label">
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.sistemkemudi" value="1" />
                        <span></span>
                        Ya
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.sistemkemudi" value="0" />
                        <span></span>
                        Tidak
                    </label>
                </div>
            </div>
            <div class="col-6 col-form-label">
                <button class="btn btn-danger btn-sm" :disabled="bawah.sistemkemudi == '1'"
                    @click="showModal('Sistem Kemudi', '-')">
                    <i class="far fa-window-close"></i> Alasan Penolakan
                </button>
            </div>
        </div>

        <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
            <label class="col-3 col-form-label">Sistem Suspensi</label>
            <div class="col-3 col-form-label">
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.sistemsuspensi" value="1" />
                        <span></span>
                        Ya
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.sistemsuspensi" value="0" />
                        <span></span>
                        Tidak
                    </label>
                </div>
            </div>
            <div class="col-6 col-form-label">
                <button class="btn btn-danger btn-sm" :disabled="bawah.sistemsuspensi == '1'"
                    @click="showModal('Sistem Suspensi', '-')">
                    <i class="far fa-window-close"></i> Alasan Penolakan
                </button>
            </div>
        </div>

        <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
            <label class="col-3 col-form-label">Sistem Rem</label>
            <div class="col-3 col-form-label">
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.sistemrem" value="1" />
                        <span></span>
                        Ya
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.sistemrem" value="0" />
                        <span></span>
                        Tidak
                    </label>
                </div>
            </div>
            <div class="col-6 col-form-label">
                <button class="btn btn-danger btn-sm" :disabled="bawah.sistemrem == '1'"
                    @click="showModal('Sistem Rem', '-')">
                    <i class="far fa-window-close"></i> Alasan Penolakan
                </button>
            </div>
        </div>

        <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
            <label class="col-3 col-form-label">Sistem Roda</label>
            <div class="col-3 col-form-label">
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.sistemroda" value="1" />
                        <span></span>
                        Ya
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.sistemroda" value="0" />
                        <span></span>
                        Tidak
                    </label>
                </div>
            </div>
            <div class="col-6 col-form-label">
                <button class="btn btn-danger btn-sm" :disabled="bawah.sistemroda == '1'"
                    @click="showModal('Sistem Roda', '-')">
                    <i class="far fa-window-close"></i> Alasan Penolakan
                </button>
            </div>
        </div>

        <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
            <label class="col-3 col-form-label">Rangka Landasan</label>
            <div class="col-3 col-form-label">
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.rangkalandasan" value="1" />
                        <span></span>
                        Ya
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.rangkalandasan" value="0" />
                        <span></span>
                        Tidak
                    </label>
                </div>
            </div>
            <div class="col-6 col-form-label">
                <button class="btn btn-danger btn-sm" :disabled="bawah.rangkalandasan == '1'"
                    @click="showModal('Rangka Landasan', '-')">
                    <i class="far fa-window-close"></i> Alasan Penolakan
                </button>
            </div>
        </div>

        <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
            <label class="col-3 col-form-label">Sistem Penerus Daya</label>
            <div class="col-3 col-form-label">
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.sistempenerusdaya" value="1" />
                        <span></span>
                        Ya
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.sistempenerusdaya" value="0" />
                        <span></span>
                        Tidak
                    </label>
                </div>
            </div>
            <div class="col-6 col-form-label">
                <button class="btn btn-danger btn-sm" :disabled="bawah.sistempenerusdaya == '1'"
                    @click="showModal('Sistem Penerus Daya', '-')">
                    <i class="far fa-window-close"></i> Alasan Penolakan
                </button>
            </div>
        </div>

        <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
            <label class="col-3 col-form-label">Motor Penggerak</label>
            <div class="col-3 col-form-label">
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.motorpenggerak" value="1" />
                        <span></span>
                        Ya
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" v-on:change="hasilujiTeknis" v-model="bawah.motorpenggerak" value="0" />
                        <span></span>
                        Tidak
                    </label>
                </div>
            </div>
            <div class="col-6 col-form-label">
                <button class="btn btn-danger btn-sm" :disabled="bawah.motorpenggerak == '1'"
                    @click="showModal('Motor Penggerak', '-')">
                    <i class="far fa-window-close"></i> Alasan Penolakan
                </button>
            </div>
        </div>

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
            bawah: state => state.bawah,
            laikjalan: state => state.laikjalan,
            catatan: state => state.catatan,
            alasan: state => state.alasan,
            pendaftaran: state => state.pendaftaran,
            identitaskendaraan: state => state.identitaskendaraan
        }),
    },
    methods: {
        ...mapMutations("pos2", ["CLEAR_FORM", "CLEAR_CATATAN","CHECK_HASILUJI"]),
        ...mapActions("pos2", ["submitCatatan", "getCatatan", "getAlasan","SET_STATUS"]),
        showModal(nama, hasil) {
            this.CLEAR_CATATAN();
            this.catatan.nama = nama;
            this.catatan.hasiluji = hasil;
            this.catatan.pos = 2;
            this.catatan.status = '1';
            this.getAlasan();
            this.getCatatan(this.$route.params.id).then(() => {
                console.log(this.catatan)
            });
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        lain() {
            if (this.catatan.rekomendasi == 'Lain-lain') {
                this.lainlain = true
            } else {
                this.lainlain = false
            }
        },
        submit() {
            this.submitCatatan(this.$route.params.id).then(() => {
                Swal.fire({
                    title: "",
                    text: "The application has been successfully submitted!",
                    icon: "success",
                    confirmButtonClass: "btn btn-secondary"
                });
            });
        },
        hasilujiTeknis() {
            this.CHECK_HASILUJI();
        }
    },
    destroyed() {
        this.CLEAR_CATATAN();
        this.CLEAR_FORM();
    },
    created() {
        this.CLEAR_CATATAN();
        this.CLEAR_FORM();
        this.hasilujiTeknis();
    },
    components: {
    },
};
</script>
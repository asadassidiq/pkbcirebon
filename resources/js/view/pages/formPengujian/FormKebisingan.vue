<template>
    <div>
        <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
            <div class="col-6 col-form-label">
                <div class="input-group">
                    <input type="number" ref="alatuji_tingkatkebisingan" min="0" v-model="laikjalan.alatuji_tingkatkebisingan"
                        @focus="handleFocus('alatuji_tingkatkebisingan')" name="alatuji_tingkatkebisingan"
                        @input="hasilujilajur" class="form-control" />
                    <div class="input-group-append"><span class="input-group-text">Db</span></div>
                </div>
            </div>
            <div class="col-3 col-form-label">
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" disabled v-model="laikjalan.status_kebisingan"
                            value="1" />
                        <span></span>
                        Ya
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" disabled v-model="laikjalan.status_kebisingan"
                            value="0" />
                        <span></span>
                        Tidak
                    </label>
                </div>
            </div>
            <div class="col-3 col-form-label">
                <button class="btn btn-danger btn-sm" :disabled="laikjalan.status_kebisingan == '1'"
                    @click="showModal('Kebisingan suara', laikjalan.alatuji_tingkatkebisingan + ' Db')">
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
            coba: [],
        };
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState("pos2", {
            laikjalan: state => state.laikjalan,
            catatan: state => state.catatan,
            pendaftaran: state => state.pendaftaran,
            alasan: state => state.alasan,
        }),
    },
    methods: {
        ...mapMutations("pos2", ["CLEAR_FORM", "CLEAR_CATATAN", "SET_STATUS","CHECK_HASILUJI"]),
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
                    showConfirmButton: false,
                    timer: 1500
                });
            });
        },
        hasilujilajur() {
            this.CHECK_HASILUJI();
        },
        handleFocus(field) {
            if (this.laikjalan[field] === 0 || this.laikjalan[field] === "0" ) {
            this.laikjalan[field] = '';
        }
        },
    },
    destroyed() {
        this.CLEAR_CATATAN();
    },
    created() {
        this.CLEAR_CATATAN();
    },
    components: {
    },
};
</script>
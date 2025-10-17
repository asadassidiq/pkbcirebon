<template>
    <div class="row">
        <div class="col-sm-6">
            <div class="form-group">
                <label>Side Slip (mm/m)</label>
                <input type="number" class="form-control  form-control-lg" name="alatuji_kincuprodadepan"
                    @focus="handleFocus('alatuji_kincuprodadepan')" v-model="laikjalan.alatuji_kincuprodadepan"
                    v-bind:style="laikjalan.alatuji_kincuprodadepan > 5 || laikjalan.alatuji_kincuprodadepan < -5 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'"
                    @input="hasiluji" />
            </div>
        </div>

        <div class="col-sm-6">
            <div class="form-group">
                <button class="btn btn-danger btn-sm" style="margin-top:35px"
                    :disabled="laikjalan.status_kincuprodadepan == '1'"
                    @click="showModal('Kincup roda depan', laikjalan.alatuji_kincuprodadepan + ' MM/M')">
                    <i class="far fa-window-close"></i> Alasan Penolakan
                </button>
            </div>
        </div>

        <b-modal ref="my-modal" title="Catatan Penolakan" @ok="submit">
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
                    style="text-transform: uppercase;" v-model="catatan.rekomendasi" v-if="lainlain" />
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
        ...mapState("pos3", {
            catatan: state => state.catatan,
            pendaftaran: state => state.pendaftaran,
            pengujian: state => state.pengujian,
            laikjalan: state => state.laikjalan,
            alasan: state => state.alasan,
        }),
    },
    methods: {
        ...mapMutations("pos3", ["CLEAR_FORM", "CLEAR_CATATAN","CHECK_HASILUJI"]),
        ...mapActions("pos3", ["submitCatatan", "getCatatan", "getAlasan"]),
        showModal(nama, hasil) {
            this.CLEAR_CATATAN();
            this.catatan.nama = nama;
            this.catatan.hasiluji = hasil;
            this.catatan.pos = 3;
            this.catatan.status = '1';
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
        check(nama, hasil) {
            if (this.laikjalan.alatuji_penunjukkecepatan < 36 || this.laikjalan.alatuji_penunjukkecepatan > 46) {
                this.catatan.nama = nama;
                this.catatan.hasiluji = hasil;
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
        handleFocus(field) {
            if (this.laikjalan[field] === 0 || this.laikjalan[field] === "0" ) {
                this.laikjalan[field] = '';
            }
        },
        hasiluji() {
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
        this.hasiluji();
    },
    components: {
    },
};
</script>
<template>
    <div class="row">
        <div class="col-sm-4">
            <div class="form-group">
                <label>Intensitas Kanan (cd)</label>
                <input type="number" class="form-control  form-control-lg" name="alatuji_lampuutamakekuatanpancarlampukanan"
                    @focus="handleFocus('alatuji_lampuutamakekuatanpancarlampukanan')" placeholder="Intensitas kanan"
                    v-model="laikjalan.alatuji_lampuutamakekuatanpancarlampukanan"
                    v-bind:style="laikjalan.alatuji_lampuutamakekuatanpancarlampukanan < 12000 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'"
                    @input="hasiluji" />
                <p class="text-danger" v-if="errors.alatuji_lampuutamakekuatanpancarlampukanan">{{
                    errors.alatuji_lampuutamakekuatanpancarlampukanan[0] }}</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group">
                <label>Intensitas Kiri (cd)</label>
                <input type="number" class="form-control  form-control-lg" name="alatuji_lampuutamakekuatanpancarlampukiri"
                    @focus="handleFocus('alatuji_lampuutamakekuatanpancarlampukiri')" placeholder="Intensitas Kiri"
                    v-model="laikjalan.alatuji_lampuutamakekuatanpancarlampukiri"
                    v-bind:style="laikjalan.alatuji_lampuutamakekuatanpancarlampukiri < 12000 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'"
                    @input="hasiluji" />
                <p class="text-danger" v-if="errors.alatuji_lampuutamakekuatanpancarlampukiri">{{
                    errors.alatuji_lampuutamakekuatanpancarlampukiri[0] }}</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group" style="margin-top:35px">
                <button class="btn btn-danger btn-sm" :disabled="laikjalan.status_intensitaslampu == '1'"
                    @click="showModal('Intensitas lampu', 'kanan : ' + laikjalan.alatuji_lampuutamakekuatanpancarlampukanan + 'cd, Kiri : ' + laikjalan.alatuji_lampuutamakekuatanpancarlampukiri + 'cd')">
                    <i class="far fa-window-close"></i> Alasan Penolakan
                </button>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group">
                <label>Arah Kanan (degree/menit)</label>
                <input type="number" class="form-control  form-control-lg" name="alatuji_lampuutamapenyimpanganlampukanan"
                    @focus="handleFocus('alatuji_lampuutamapenyimpanganlampukanan')"  placeholder="Arah kanan" step="0.01"
                    v-model="laikjalan.alatuji_lampuutamapenyimpanganlampukanan"
                    v-bind:style="laikjalan.alatuji_lampuutamapenyimpanganlampukanan > 0.34 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'"
                    @input="hasiluji" />
                <p class="text-danger" v-if="errors.alatuji_lampuutamapenyimpanganlampukanan">{{
                    errors.alatuji_lampuutamapenyimpanganlampukanan[0] }}</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="form-group">
                <label>Arah Kiri (degree/menit)</label>
                <input type="number" class="form-control  form-control-lg" name="alatuji_lampuutamapenyimpanganlampukiri"
                    @focus="handleFocus('alatuji_lampuutamapenyimpanganlampukiri')" placeholder="Arah Kiri" step="0.01"
                    v-model="laikjalan.alatuji_lampuutamapenyimpanganlampukiri"
                    v-bind:style="laikjalan.alatuji_lampuutamapenyimpanganlampukiri > 1.09 ? 'background-color: #DC143C;' : 'background-color: #F3F6F9;'"
                    @input="hasiluji" />
                <p class="text-danger" v-if="errors.alatuji_lampuutamapenyimpanganlampukiri">{{
                    errors.alatuji_lampuutamapenyimpanganlampukiri[0] }}</p>
            </div>
        </div>

        <div class="col-sm-4">
            <div class="form-group" style="margin-top:35px">
                <button class="btn btn-danger btn-sm" :disabled="laikjalan.status_penyimpanganlampu == '1'"
                    @click="showModal('Penyimpangan lampu', 'Kanan : ' + laikjalan.alatuji_lampuutamapenyimpanganlampukanan + ' degree, Kiri : ' + laikjalan.alatuji_lampuutamapenyimpanganlampukiri + ' degree')">
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
            laikjalan: state => state.laikjalan,
            catatan: state => state.catatan,
            alasan: state => state.alasan,
            pendaftaran: state => state.pendaftaran,
            identitaskendaraan: state => state.identitaskendaraan
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
            if (this.laikjalan.alatuji_lampuutamapenyimpanganlampukiri > 1.09 && nama == 'Arah Kiri') {
                this.catatan.nama = nama;
                this.catatan.hasiluji = hasil;
                this.getCatatan(this.$route.params.id);
                this.$refs['my-modal'].show()
            } else if (this.laikjalan.alatuji_lampuutamapenyimpanganlampukanan > 0.34 && nama == 'Arah Kanan') {
                this.catatan.nama = nama;
                this.catatan.hasiluji = hasil;
                this.getCatatan(this.$route.params.id);
                this.$refs['my-modal'].show()
            } else if (this.laikjalan.alatuji_lampuutamakekuatanpancarlampukanan < 12000 && nama == 'INTENSITAS KANAN') {
                this.catatan.nama = nama;
                this.catatan.hasiluji = hasil;
                this.getCatatan(this.$route.params.id);
                this.$refs['my-modal'].show()
            } else if (this.laikjalan.alatuji_lampuutamakekuatanpancarlampukiri < 12000 && nama == 'INTENSITAS KIRI') {
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
                    confirmButtonClass: "btn btn-secondary"
                });
            });
        },
        hasiluji() {
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
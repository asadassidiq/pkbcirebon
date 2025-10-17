<template>
  <div>
    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <div class="col-md-3 col-sm-12 col-form-label">
          <label><b>Kedalaman Alur Ban : </b></label>
      </div>
      <div class="col-md-3 col-sm-12 col-form-label">
        <div class="input-group">
          <input type="number" ref="alatuji_kedalamanalurban" @focus="handleFocus('alatuji_kedalamanalurban')"  step="0.1" min="0" max="500" @input="bancheck" v-model="laikjalan.alatuji_kedalamanalurban" class="form-control"/>
          <div class="input-group-append"><span class="input-group-text">mm</span></div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujilajur" disabled v-model="laikjalan.status_alurban" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujilajur" disabled v-model="laikjalan.status_alurban" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="laikjalan.status_alurban == '1'" @click="showModal('Kedalaman alur ban',laikjalan.alatuji_kedalamanalurban)">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>  

  <b-modal ref="my-modal" title="Alasan Penolakan" @ok="submit">
      <div class="form-group">
        <input
          type="text"
          class="form-control  form-control-lg"
          style="text-transform: uppercase;"
          v-model="catatan.nama"
          disabled
        />
        <p class="text-danger" v-if="errors.nama">{{ errors.nama[0] }}</p>
      </div>
      <div class="form-group row">
        <div class="col-12 col-form-label">
            <div class="checkbox-list">
                <label class="checkbox" v-for="item in alasan" :key="item.id">
                    <input type="checkbox" :id="item.id" :value="item.alasanpenolakan" v-model="catatan.alasan"/>
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
    ...mapState("pos1", {
      pendaftaran: state => state.pendaftaran,
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
      identitaskendaraan: state => state.identitaskendaraan,
    }),
  },
  methods: {
    ...mapMutations("pos1", ["CLEAR_FORM","CLEAR_CATATAN","SET_STATUS","CHECK_HASILUJI"]),
    ...mapActions("pos1", ["submitCatatan","getCatatan","getAlasan"]),
      showModal(nama,hasil) {
        this.CLEAR_CATATAN();
        this.catatan.nama = nama;
        this.catatan.hasiluji = hasil;
        this.catatan.pos = 1;
        this.catatan.status = 1;
        this.getAlasan();
        this.getCatatan(this.$route.params.id);
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      lain(){
        if(this.catatan.rekomendasi == 'Lain-lain'){
          this.lainlain = true
        }else{
          this.lainlain = false
        }
      },
      check(nama, hasil){
        if(this.laikjalan.alatuji_kedalamanalurban<1){
            this.catatan.nama = nama;
            this.catatan.hasiluji = hasil;
            this.catatan.pos = 1;
            this.catatan.status = 1;
            this.getCatatan(this.$route.params.id);
            this.$refs['my-modal'].show()
        }
      },
      submit(){
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

      bancheck(){
        if(this.laikjalan.alatuji_kedalamanalurban < 0){
          this.laikjalan.alatuji_kedalamanalurban = 0;
        }else if(this.laikjalan.alatuji_kedalamanalurban < 1 && this.laikjalan.alatuji_kedalamanalurban.length > 0){
          this.laikjalan.status_alurban = '0';
          this.hasilujilajur();
        }else{
          this.laikjalan.status_alurban = '1';
          this.hasilujilajur();
        }
      },

      hasilujilajur(){
        this.CHECK_HASILUJI();
      },
      handleFocus(field) {
          if (this.laikjalan[field] === 0 || this.laikjalan[field] === "0") {
              this.laikjalan[field] = '';
          }
      },
  },
  destroyed() {
    this.CLEAR_CATATAN();
  },
  created() {
    this.CLEAR_CATATAN();
    this.bancheck();
  },
  components: {
  },
};
</script>
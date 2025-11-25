<template>
  <div>
    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Nomor TNKB</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio"  v-on:change="hasilujiidentifikasi" v-model="identifikasi.notnkb" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio"  v-on:change="hasilujiidentifikasi('Nomor TNKB','-')" v-model="identifikasi.notnkb" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="identifikasi.notnkb == '1' " @click="showModal('Nomor TNKB','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
      <p class="text-danger" v-if="errors.notnkb">{{ errors.notnkb[0] }}</p>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Nomor Uji</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiidentifikasi" v-model="identifikasi.nouji" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiidentifikasi('Nomor Uji','-')" v-model="identifikasi.nouji" value="0" />
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="identifikasi.nouji == '1' " @click="showModal('Nomor Uji','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
      <p class="text-danger" v-if="errors.nouji">{{ errors.nouji[0] }}</p>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Nomor Rangka</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiidentifikasi" v-model="identifikasi.norangkalandasan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiidentifikasi('Nomor Rangka Landasan','-')" v-model="identifikasi.norangkalandasan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="identifikasi.norangkalandasan == '1'" @click="showModal('Nomor Rangka Landasan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
      <p class="text-danger" v-if="errors.norangkalandasan">{{ errors.norangkalandasan[0] }}</p>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Nomor Mesin</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiidentifikasi" v-model="identifikasi.nomotorpenggerak" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiidentifikasi('Nomor Motor Penggerak','-')" v-model="identifikasi.nomotorpenggerak" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="identifikasi.nomotorpenggerak == '1'"  @click="showModal('Nomor Motor Penggerak','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
      <p class="text-danger" v-if="errors.nomotorpenggerak">{{ errors.nomotorpenggerak[0] }}</p>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Ukuran Ban</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiidentifikasi" v-model="identifikasi.ukuranban" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiidentifikasi('Ukuran Ban','-')" v-model="identifikasi.ukuranban" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="identifikasi.ukuranban == '1'"  @click="showModal('Ukuran Ban','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
      <p class="text-danger" v-if="errors.ukuranban">{{ errors.ukuranban[0] }}</p>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Bahan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiidentifikasi" v-model="identifikasi.bahan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiidentifikasi('Bahan','-')" v-model="identifikasi.bahan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="identifikasi.bahan == '1'"  @click="showModal('Bahan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
      <p class="text-danger" v-if="errors.bahan">{{ errors.bahan[0] }}</p>
    </div>
    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Bahan</label>
      <div class="col-9 col-form-label">
        <input
            type="text"
            class="form-control  form-control-lg"
            name="jenisrumah"
            list="jenisrumahrumah"
            v-model="identifikasi.jenisrumah"
            multiple
          />
        <datalist id="jenisrumahrumah">
            <option v-for="jenisrumahrumah in jenisrumahrumah"  :value="jenisrumahrumah">{{jenisrumahrumah}}</option>
        </datalist>
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
                <label class="checkbox">
                    <input type="checkbox"
                        v-model="lainnyaChecked"
                    />
                    <span></span>
                    Alasan Lain
                </label>

                <!-- Input text muncul kalau checkbox dicentang -->
                <input
                    v-if="lainnyaChecked"
                    type="text"
                    class="form-control mt-2"
                    v-model="inputLainnya"
                    @input="updateAlasanLain"
                    placeholder="Isi alasan lainnya..."
                >
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
      jenisrumahrumah:["Besi Plat","Besi Kayu","Bordes","Alumunium","Pagar Besi","Pagar Stenlis"],
      coba: [],
      lainnyaChecked: false,
      inputLainnya: ""
    };
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("pos1", {
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
        this.getCatatan(this.$route.params.id).then(() => {
          this.initEdit();
        });
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
        if(this.pengujian.alatuji_kedalamanalurban<1){
            this.catatan.nama = nama;
            this.catatan.hasiluji = hasil;
            this.catatan.pos = 1;
            this.catatan.status = 1;
            this.getCatatan(this.$route.params.id).then(() => {
                this.initEdit();
            });
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
      hasilujiidentifikasi(name,hasil){
        this.CHECK_HASILUJI();
      },
      initEdit() {
          // cari yang diawali Lainnya:
          const lain = this.catatan.alasan.find(item => item.startsWith("Lainnya:"));

          if (lain) {
          this.lainnyaChecked = true;
          this.inputLainnya = lain.replace("Lainnya: ", ""); // ambil isi text saja
          }
      },
      updateAlasanLain() {
          // hapus alasan lama yang berbasis "Lainnya:"
          this.catatan.alasan = this.catatan.alasan.filter(item => !item.startsWith("Lainnya:"))

          if (this.inputLainnya.trim() !== "") {
          // tambahkan alasan baru
          this.catatan.alasan.push("Lainnya: " + this.inputLainnya)
          }
      }
  },
  watch: {
  },
  destroyed() {
    this.CLEAR_CATATAN();
  },
  created() {
    this.CLEAR_CATATAN();
    this.hasilujiidentifikasi();
    this.pendaftaran.pos1 = '1';
  },
  components: {
  },
  watch: {
      lainnyaChecked(val) {
          if (!val) {
          // checkbox Lainnya dicabut → hapus dari alasan
          this.inputLainnya = ""
          this.catatan.alasan = this.catatan.alasan.filter(item => !item.startsWith("Lainnya:"))
          }
      }
  }
};
</script>
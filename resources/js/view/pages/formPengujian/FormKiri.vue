<template>
  <div>
    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Kaca Samping Kiri</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.kacasampingkiri" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Kaca Samping Kiri','-')" v-model="kiri.kacasampingkiri" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.kacasampingkiri == '1'" @click="showModal('Kaca Samping Kiri','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Kaca Spion Kiri</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.kacaspionkiri" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Kaca Spion Kiri','-')" v-model="kiri.kacaspionkiri" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.kacaspionkiri == '1'" @click="showModal('Kaca Spion Kiri','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Pintu Samping Kiri</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.pintusampingkiri" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Pintu Samping Kiri','-')" v-model="kiri.pintusampingkiri" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.pintusampingkiri == '1'" @click="showModal('Pintu Samping Kiri','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Bodi Kiri</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.bodikiri" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Bodi Kiri','-')" v-model="kiri.bodikiri" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.bodikiri == '1'" @click="showModal('Bodi Kiri','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">APCT Kiri</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.apctkiri" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('APCT Bagian Kiri','-')" v-model="kiri.apctkiri" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.apctkiri == '1'" @click="showModal('APCT Bagian Kiri','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Kompresor Udara</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.kompresorudara" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Kompresor Udara Kiri','-')" v-model="kiri.kompresorudara" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.kompresorudara == '1'" @click="showModal('Kompresor Udara Kiri','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Baut dan Mur Roda</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.bautdanmurroda" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Baut dan Mur Roda Kiri','-')" v-model="kiri.bautdanmurroda" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.bautdanmurroda == '1'" @click="showModal('Baut dan Mur Roda Kiri','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Kondisi dan Ukuran Ban</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.kondisidanukuranban" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Kondisi dan Ukuran Ban Kiri','-')" v-model="kiri.kondisidanukuranban" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.kondisidanukuranban == '1'" @click="showModal('Kondisi dan Ukuran Ban Kiri','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Perisai Kolong</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.perisaikolong" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Perisai Kolong Kiri','-')" v-model="kiri.perisaikolong" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.perisaikolong == '1'" @click="showModal('Perisai Kolong Kiri','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Tutup Tangki</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.tutuptangki" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Tutup Tangki Kiri','-')" v-model="kiri.tutuptangki" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.tutuptangki == '1'" @click="showModal('Tutup Tangki Kiri','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Lampu Tanda Batas Samping</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.lamputandabatassamping" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Lampu Tanda Batas Samping Kiri','-')" v-model="kiri.lamputandabatassamping" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.lamputandabatassamping == '1'" @click="showModal('Lampu Tanda Batas Samping Kiri','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Roda Kelima</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.rodakelima" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Roda Kelima Kiri','-')" v-model="kiri.rodakelima" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.rodakelima == '1'" @click="showModal('Roda Kelima Kiri','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Kaki Penompang Tempelan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.kakipenompangtempelan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Kaki Penompang Tempelan Kiri','-')" v-model="kiri.kakipenompangtempelan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.kakipenompangtempelan == '1'" @click="showModal('Kaki Penompang Tempelan Kiri','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Alat Perangkai Tempelan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kiri.alatperangkaitempelan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Alat Perangkai Tempelan Kiri','-')" v-model="kiri.alatperangkaitempelan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kiri.alatperangkaitempelan == '1'" @click="showModal('Alat Perangkai Tempelan Kiri','-')">
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
        this.getCatatan(this.$route.params.id);
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
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
      hasilujiTeknis(name,hasil){
        this.CHECK_HASILUJI();
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
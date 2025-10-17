<template>
  <div>
    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Kaca Samping Kanan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.kacasampingkanan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Kaca Samping Kanan','-')" v-model="kanan.kacasampingkanan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.kacasampingkanan == '1'" @click="showModal('Kaca Samping Kanan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Kaca Spion Kanan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.kacaspion" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Kaca Spion Kanan','-')" v-model="kanan.kacaspion" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.kacaspion == '1'" @click="showModal('Kaca Spion Kanan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Pintu Samping Kanan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.pintusampingkanan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Pintu Samping Kanan','-')" v-model="kanan.pintusampingkanan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.pintusampingkanan == '1'" @click="showModal('Pintu Samping Kanan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Bodi Kanan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.bodikanan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Bodi Kanan','-')" v-model="kanan.bodikanan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.bodikanan == '1'" @click="showModal('Bodi Kanan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">APCT Kanan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.apctkanan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('APCT Bagian Kanan','-')" v-model="kanan.apctkanan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.apctkanan == '1'" @click="showModal('APCT Bagian Kanan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Kompresor Udara</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.kompresorudara" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Kompresor Udara Kanan','-')" v-model="kanan.kompresorudara" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.kompresorudara == '1'" @click="showModal('Kompresor Udara Kanan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Baut dan Mur Roda</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.bautdanmurroda" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Baut dan Mur Roda Kanan','-')" v-model="kanan.bautdanmurroda" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.bautdanmurroda == '1'" @click="showModal('Baut dan Mur Roda Kanan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Kondisi dan Ukuran Ban</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.kondisidanukuranban" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Kondisi dan Ukuran Ban Kanan','-')" v-model="kanan.kondisidanukuranban" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.kondisidanukuranban == '1'" @click="showModal('Kondisi dan Ukuran Ban Kanan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Perisai Kolong</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.perisaikolong" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Perisai Kolong Kanan','-')" v-model="kanan.perisaikolong" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.perisaikolong == '1'" @click="showModal('Perisai Kolong Kanan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Tutup Tangki</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.tutuptangki" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Tutup Tangki Kanan','-')" v-model="kanan.tutuptangki" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.tutuptangki == '1'" @click="showModal('Tutup Tangki Kanan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Lampu Tanda Batas Samping</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.lamputandabatassamping" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Lampu Tanda Batas Samping Kanan','-')" v-model="kanan.lamputandabatassamping" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.lamputandabatassamping == '1'" @click="showModal('Lampu Tanda Batas Samping Kanan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">APAR</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.apar" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Apar','-')" v-model="kanan.apar" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.apar == '1'" @click="showModal('Apar','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Roda Kelima</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.rodakelima" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Roda Kelima Kanan','-')" v-model="kanan.rodakelima" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.rodakelima == '1'" @click="showModal('Roda Kelima Kanan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Kaki Penompang Tempelan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.kakipenompangtempelan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknisshowModal('Kaki Penompang Tempelan Kanan','-')" v-model="kanan.kakipenompangtempelan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.kakipenompangtempelan == '1'" @click="showModal('Kaki Penompang Tempelan Kanan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Alat Perangkai Tempelan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="kanan.alatperangkaitempelan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Alat Perangkai Tempelan Kanan','-')" v-model="kanan.alatperangkaitempelan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="kanan.alatperangkaitempelan == '1'" @click="showModal('Alat Perangkai Tempelan Kanan','-')">
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
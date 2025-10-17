<template>
  <div>
    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">APCT</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="belakang.apctbelakang" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('APCT Bagian Belakang','-')" v-model="belakang.apctbelakang" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="belakang.apctbelakang == '1'" @click="showModal('APCT Bagian Belakang','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Lampu Tanda Batas Belakang</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="belakang.lampuposisibelakang" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Lampu Tanda Batas Belakang','-')" v-model="belakang.lampuposisibelakang" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="belakang.lampuposisibelakang == '1'" @click="showModal('Lampu Tanda Batas Belakang','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Lampu Penunjuk Arah</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="belakang.lampupenunjukarah" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Lampu Penunjuk Arah Belakang','-')" v-model="belakang.lampupenunjukarah" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="belakang.lampupenunjukarah == '1'" @click="showModal('Lampu Penunjuk Arah Belakang','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Lampu Rem</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="belakang.lampurem" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Lampu Rem','-')" v-model="belakang.lampurem" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="belakang.lampurem == '1'" @click="showModal('Lampu Rem','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Lampu Mundur</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="belakang.lampumundur" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Lampu Mundur','-')" v-model="belakang.lampumundur" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="belakang.lampumundur == '1'" @click="showModal('Lampu Mundur','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Lampu TNKB</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="belakang.lamputnkb" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Lampu TNKB','-')" v-model="belakang.lamputnkb" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="belakang.lamputnkb == '1'" @click="showModal('Lampu TNKB','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <!-- <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Kondisi tempat pemasangan TNKB</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="belakang.kondisitempatpemasangantnkb" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Kondisi tempat pemasangan TNKB','-')" v-model="belakang.kondisitempatpemasangantnkb" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="belakang.kondisitempatpemasangantnkb == '1'" @click="showModal('Kondisi tempat pemasangan TNKB','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div> -->

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Lampu Tanda Batas</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="belakang.lamputandabatas" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Lampu Tanda Batas Belakang','-')" v-model="belakang.lamputandabatas" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="belakang.lamputandabatas == '1'" @click="showModal('Lampu Tanda Batas Belakang','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Kondisi Roda Cadangan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="belakang.kondisirodacadangan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Kondisi Roda Cadangan','-')" v-model="belakang.kondisirodacadangan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="belakang.kondisirodacadangan == '1'" @click="showModal('Kondisi Roda Cadangan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Spakbor</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="belakang.spakbor" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknisshowModal('Spakbor','-')" v-model="belakang.spakbor" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="belakang.spakbor == '1'" @click="showModal('Spakbor','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Sistem Pembuangan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="belakang.sistempembuangan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Sistem Pembuangan','-')" v-model="belakang.sistempembuangan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="belakang.sistempembuangan == '1'" @click="showModal('Sistem Pembuangan','-')">
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
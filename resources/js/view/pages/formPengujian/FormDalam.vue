<template>
  <div>
    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Ruang Kemudi</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.ruangkemudi" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Ruang Kemudi','-')" v-model="dalam.ruangkemudi" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.ruangkemudi == '1'" @click="showModal('Ruang Kemudi','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Tempat Duduk</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.tempatduduk" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Tempat Duduk','-')" v-model="dalam.tempatduduk" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.tempatduduk == '1'" @click="showModal('Tempat Duduk','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Dashboard</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.dashboard" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Dashboard','-')" v-model="dalam.dashboard" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.dashboard == '1'" @click="showModal('Dashboard','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Speedometer</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.speedometer" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Speedometer','-')" v-model="dalam.speedometer" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.speedometer == '1'" @click="showModal('Speedometer','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Instrumen Panel</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.instrumenpanel" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Instrumen Panel','-')" v-model="dalam.instrumenpanel" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.instrumenpanel == '1'" @click="showModal('Instrumen Panel','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Alat Control Lampu</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.alatcontrollampu" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Alat Control Lampu','-')" v-model="dalam.alatcontrollampu" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.alatcontrollampu == '1'" @click="showModal('Alat Control Lampu','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Tabir Matahari</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.tabirmatahari" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Tabir Matahari','-')" v-model="dalam.tabirmatahari" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.tabirmatahari == '1'" @click="showModal('Tabir Matahari','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Pandangan Kedepan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.pandangankedepan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Pandangan Kedepan','-')" v-model="dalam.pandangankedepan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.pandangankedepan == '1'" @click="showModal('Pandangan Kedepan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Roda Kemudi</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.rodakemudi" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Roda Kemudi','-')" v-model="dalam.rodakemudi" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.rodakemudi == '1'" @click="showModal('Roda Kemudi','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Batang Kemudi</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.batangkemudi" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Batang Kemudi','-')" v-model="dalam.batangkemudi" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.batangkemudi == '1'" @click="showModal('Batang Kemudi','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Sabuk Keselamatan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.sabukkeselamatan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Sabuk Keselamatan','-')" v-model="dalam.sabukkeselamatan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.sabukkeselamatan == '1'" @click="showModal('Sabuk Keselamatan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Perlengkapan</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.perlengkapan" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Perlengkapan','-')" v-model="dalam.perlengkapan" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.perlengkapan == '1'" @click="showModal('Perlengkapan','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Rem Parkir</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.remparkir" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Rem Parkir','-')" v-model="dalam.remparkir" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.remparkir == '1'" @click="showModal('Rem Parkir','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Pedal Rem Kaki</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.pedalremkaki" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Pedal Rem Kaki','-')" v-model="dalam.pedalremkaki" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.pedalremkaki == '1'" @click="showModal('Pedal Rem Kaki','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Rem Gas Buang</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.remgasbuang" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Rem Gas Buang','-')" v-model="dalam.remgasbuang" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.remgasbuang == '1'" @click="showModal('Rem Gas Buang','-')">
          <i class="far fa-window-close"></i> Alasan Penolakan
        </button>
      </div>
    </div>

    <div class="form-group row" style="margin:0px;border-bottom: 1px solid">
      <label class="col-3 col-form-label">Sistem Hampa/Booster</label>
      <div class="col-3 col-form-label">
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-on:change="hasilujiTeknis" v-model="dalam.sistemhampa" value="1"/>
              <span></span>
              Ya
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-on:change="hasilujiTeknis('Sistem Hampa','-')" v-model="dalam.sistemhampa" value="0"/>
              <span></span>
              Tidak
          </label>
        </div>
      </div>
      <div class="col-6 col-form-label">
        <button class="btn btn-danger btn-sm" :disabled="dalam.sistemhampa == '1'" @click="showModal('Sistem Hampa','-')">
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
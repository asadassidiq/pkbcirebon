<template>
  <div>
    <div class="form-group">
      <label for>Jenis</label>
      <input
        type="text"
        class="form-control"
        v-model="jenis.jenis"
      />
    </div>
    <div class="form-group">
      <label for>Klasifikasi</label>
      <select class="form-control form-select-sm" v-model="jenis.klasifikasis_id" aria-label=".form-select-lg example">
      <option value="2">MOBIL PENUMPANG</option>
      <option value="3">MOBIL BUS</option>
      <option value="4">MOBIL BARANG</option>
      <option value="5">KERETA GANDENG</option>
      <option value="6">KERETA TEMPELAN</option>
      <option value="7">KENDARAAN KHUSUS</option>
      <option value="8">KENDARAAN RODA 3</option>
      <option value="9">SEPEDA MOTOR</option>
    </select>
    </div>
    <div class="form-group">
      <label for>Kementrian</label>
      <select class="form-control form-select-sm" v-model="jenis.jeniskendaraan" aria-label=".form-select-lg example">
      <option value="Mobil Penumpang Sedan">Mobil Penumpang Sedan</option>
      <option value="Mobil Penumpang Bukan Sedan">Mobil Penumpang Bukan Sedan</option>
      <option value="Mobil Bus Kecil">Mobil Bus Kecil</option>
      <option value="Mobil Bus Sedang">Mobil Bus Sedang</option>
      <option value="Mobil Bus Besar">Mobil Bus Besar</option>
      <option value="Mobil Bus Maxi">Mobil Bus Maxi</option>
      <option value="Mobil Bus Gandeng">Mobil Bus Gandeng</option>
      <option value="Mobil Bus Tempel">Mobil Bus Tempel</option>
      <option value="Mobil Bus Tingkat">Mobil Bus Tingkat</option>
      <option value="Mobil Barang Bak Terbuka">Mobil Barang Bak Terbuka</option>
      <option value="Mobil Barang Bak Tertutup">Mobil Barang Bak Tertutup</option>
      <option value="Mobil Tangki">Mobil Tangki</option>
      <option value="Mobil Penarik">Mobil Penarik</option>
      <option value="Kereta Gandeng Bak Terbuka">Kereta Gandeng Bak Terbuka</option>
      <option value="Kereta Gandeng Bak Tertutup">Kereta Gandeng Bak Tertutup</option>
      <option value="Kereta Gandeng Tangki">Kereta Gandeng Tangki</option>
      <option value="Kereta Tempelan Bak Terbuka">Kereta Tempelan Bak Terbuka</option>
      <option value="Kereta Tempelan Bak Tertutup">Kereta Tempelan Bak Tertutup</option>
      <option value="Kereta Tempelan Tangki">Kereta Tempelan Tangki</option>
      <option value="Kendaraan Bermotor Roda Tiga Angkutan Barang Bak Muatan Terbuka">Kendaraan Bermotor Roda Tiga Angkutan Barang Bak Muatan Terbuka</option>
      <option value="Kendaraan Bermotor Roda Tiga Angkutan Barang Bak Muatan Tertutup">Kendaraan Bermotor Roda Tiga Angkutan Barang Bak Muatan Tertutup</option>
      <option value="Kendaraan Bermotor Roda Tiga Angkutan Penumpang">Kendaraan Bermotor Roda Tiga Angkutan Penumpang</option>
      <option value="Kendaraan Bermotor Roda Tiga Angkutan Barang Tangki">Kendaraan Bermotor Roda Tiga Angkutan Barang Tangki</option>
      <option value="Kendaraan Khusus">Kendaraan Khusus</option>
    </select>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("jenis", {
      jenis: state => state.jenis
    }),
  },
  methods: {
    ...mapMutations("jenis", ["CLEAR_FORM"]),
  },
  destroyed() {
    this.CLEAR_FORM();
  },
  created() {
    this.CLEAR_FORM();
  },
  components: {
  },
};
</script>
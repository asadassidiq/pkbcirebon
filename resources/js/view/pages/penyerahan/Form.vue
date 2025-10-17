<template>
  <div>
    <div class="form-group">
      <label for>Nama Penerima</label>
      <input
        type="text"
        class="form-control"
        v-model="penyerahan.namapenerima"
      />
    </div>
    <div class="form-group">
      <label for>Nomor Telepon</label>
      <input
        type="text"
        class="form-control"
        v-model="penyerahan.notelppenerima"
      />
    </div>
    <div class="form-group">
      <label for>Nomor Identitas Penerima</label>
      <input
        type="text"
        class="form-control"
        v-model="penyerahan.noidentitaspenerima"
      />
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
    ...mapState("penyerahan", {
      penyerahan: state => state.penyerahan
    }),
  },
  methods: {
    ...mapMutations("penyerahan", ["CLEAR_FORM"]),
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
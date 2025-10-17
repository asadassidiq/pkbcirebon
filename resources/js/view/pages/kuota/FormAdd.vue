<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="form-group">
        <label for>Kuota Hari Normal Pagi</label>
        <input
          type="number"
          min="0"
          class="form-control"
          v-model="setkuota.kuotapaginormal"
        />
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label for>Kuota Hari Normal Siang</label>
        <input
          type="number"
          min="0"
          class="form-control"
          v-model="setkuota.kuotasiangnormal"
        />
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label for>Kuota Hari Jumat Pagi</label>
        <input
          type="number"
          min="0"
          class="form-control"
          v-model="setkuota.kuotapagijumat"
        />
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label for>Kuota Hari Jumat Siang</label>
        <input
          type="number"
          min="0"
          class="form-control"
          v-model="setkuota.kuotasiangjumat"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["errors"]),
    ...mapState("kuota", {
      setkuota: state => state.setkuota
    }),
  },
  methods: {
    ...mapMutations("kuota", ["CLEAR_FORM"]),
  },
  destroyed() {
    this.CLEAR_FORM();
  },
  created() {
    this.CLEAR_FORM();
  }
};
</script>
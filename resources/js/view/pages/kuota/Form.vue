<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-group">
        <label for>Tanggal</label>
        <input
          type="text"
          class="form-control"
          v-model="kuota.tanggal"
          disabled
        />
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label for>Kuota Pagi</label>
        <input
          type="number"
          min="0"
          class="form-control"
          v-model="kuota.kuotapagi"
        />
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label for>Kuota Siang</label>
        <input
          type="number"
          min="0"
          class="form-control"
          v-model="kuota.kuotasiang"
        />
      </div>
    </div>

    <div class="col-sm-6">
        <div class="form-group">
          <label for>Tersedia Kuota Pagi</label>
          <input
            type="number"
            min="0"
            class="form-control"
            v-model="kuota.tersediapagi"
          />
        </div>
    </div>
    <div class="col-sm-6">
        <div class="form-group">
          <label for>Tersedia Kuota Siang</label>
          <input
            type="number"
            min="0"
            class="form-control"
            v-model="kuota.tersediasiang"
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
      kuota: state => state.kuota
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
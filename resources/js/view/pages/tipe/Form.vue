<template>
  <div>
    <div class="form-group">
      <label for>Merek</label>
      <select class="form-control" v-model="tipe.merek_id" aria-label="Merek">
        <option v-for="merek in mereks" :key="merek.id" :value="merek.id">{{merek.merek}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for>Tipe</label>
      <input
        type="text"
        class="form-control"
        v-model="tipe.tipe"
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
    ...mapState("tipe", {
      tipe: state => state.tipe,
      mereks: state => state.mereks
    }),
  },
  methods: {
    ...mapMutations("tipe", ["CLEAR_FORM"]),
    ...mapActions("tipe", ["getMereks"]),
  },
  destroyed() {
    this.CLEAR_FORM();
  },
  created() {
    this.CLEAR_FORM();
    this.getMereks();
  },
  components: {
  },
};
</script>
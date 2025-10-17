<template>
  <div>
  <div class="form-group">
      <label for>Tanggal</label>
      <datepicker input-class="form-control" v-model="harilibur.tanggal" :language="id" ></datepicker>
    </div>
    <div class="form-group">
      <label for>Hari Libur</label>
      <input
        type="text"
        class="form-control"
        v-model="harilibur.nama"
      />
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import datepicker from 'vuejs-datepicker';
import {en, id} from 'vuejs-datepicker/dist/locale';
export default {
  data() {
    return {
      id: id,
    };
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("harilibur", {
      harilibur: state => state.harilibur
    }),
  },
  methods: {
    ...mapMutations("harilibur", ["CLEAR_FORM"]),
  },
  destroyed() {
    this.CLEAR_FORM();
  },
  created() {
    this.CLEAR_FORM();
  },
  components: {
    datepicker
  },
};
</script>
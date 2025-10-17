<template>
  <div>
    <div class="form-group">
      <label for>Merek</label>
      <input
        type="text"
        class="form-control"
        v-model="merek.merek"
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
    ...mapState("merek", {
      merek: state => state.merek
    }),
  },
  methods: {
    ...mapMutations("merek", ["CLEAR_FORM"]),
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
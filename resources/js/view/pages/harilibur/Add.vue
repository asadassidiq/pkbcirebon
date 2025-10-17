<template>
  <div class="card card-custom" id="kt_card_3">
   <div class="card-header">
    <div class="card-title">
     <h3 class="card-label">Kendaraan</h3>
    </div>
    <div class="card-toolbar">
      <button class="btn btn-primary btn-sm" @click.prevent="submit">
        <i class="fa fa-save"></i> Save
      </button>
    </div>
   </div>
   <div class="card-body">
      <add-form></add-form>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";
import { mapActions, mapState, mapMutations } from "vuex";
import Form from "./Form.vue";

export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "HariLibur" },
      { title: "Add" }
    ]);
  },
  created() {
  },
  methods: {
    ...mapActions("harilibur", ["submitHariLibur","CLEAR_FORM"]),
    submit() {
      this.submitHariLibur().then(() => {
        Swal.fire({
          title: "",
          text: "The application has been successfully submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
          this.$router.push({ name: "harilibur.data" });
      });
    },
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState({
      harilibur: state => state.harilibur.harilibur,
    }),
  },
  components: {
    "add-form": Form
  },
};
</script>

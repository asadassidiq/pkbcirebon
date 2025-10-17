<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-body">
        <div class="card-heading">
          <h3 class="panel-title">Edit</h3>
        </div>
        <div class="panel-body">
          <edit-form></edit-form>
          <div class="form-group">
            <button class="btn btn-primary btn-sm" @click.prevent="submit">
              <i class="fa fa-save"></i> Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Swal from "sweetalert2";
import Form from "./Form.vue";
export default {
  created() {
    this.editJenis(this.$route.params.id);
  },
  methods: {
    ...mapActions("jenis", ["editJenis", "updateJenis"]),
    submit() {
      this.updateJenis(this.$route.params.id).then(() => {
        Swal.fire({
          title: "",
          text: "The application has been successfully edit!",
          icon: "success",
          confirmButtonClass: "btn btn-secondary"
        });
        this.$router.push({ name: "jenis.data" });
      });
    }
  },
  components: {
    "edit-form": Form
  }
};
</script>

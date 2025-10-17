<template>
  <div class="col-md-12">
    <div class="card card-custom">
      <div class="card-header">
        <div class="card-title">
          <h3 class="card-label">Kendaraan</h3>
        </div>
        <div class="card-toolbar">
          <b-button v-b-toggle.collapse-3 class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
            <i class="ki ki-arrow-down icon-nm"></i>
          </b-button>
          <b-button class="btn btn-icon btn-circle btn-sm btn-danger mr-1" @click.prevent="close">
            <i class="far fa-window-close icon-nm"></i>
          </b-button>
        </div>
      </div>
      <b-collapse visible id="collapse-3">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <div class="form-group">
                <label> No Uji</label>
                <input type="text" class="form-control form-control-solid form-control-lg" name="width" readonly
                  placeholder="No Uji" v-model="identitaskendaraan.nouji" />
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
                <label>No Kendaraan</label>
                <input type="text" class="form-control form-control-solid form-control-lg" name="width" readonly
                  placeholder=" No Kendaraan" v-model="identitaskendaraan.noregistrasikendaraan" />
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
                <label>Th. Pembuatan</label>
                <input type="text" class="form-control form-control-solid form-control-lg" name="width" readonly
                  v-model="identitaskendaraan.thpembuatan" />
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
                <label> JBB </label>
                <input type="text" class="form-control form-control-solid form-control-lg" name="length" readonly
                  placeholder="JBB" v-model="identitaskendaraan.jbb" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <div class="form-group">
                <label>Merek</label>
                <input type="text" class="form-control form-control-solid form-control-lg" name="width" readonly
                  placeholder="merek" v-model="identitaskendaraan.merek" />
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
                <label> Jenis </label>
                <input type="text" class="form-control form-control-solid form-control-lg" name="width" readonly
                  placeholder="Jenis" v-model="identitaskendaraan.jenis" />
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
                <label>No. Mesin</label>
                <input type="text" class="form-control form-control-solid form-control-lg" name="length" readonly
                  placeholder="nomesin" v-model="identitaskendaraan.nomesin" />
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
                <label> No, Rangka </label>
                <input type="text" class="form-control form-control-solid form-control-lg" name="length" readonly
                  placeholder="No Rangka" v-model="identitaskendaraan.norangka" />
              </div>
            </div>
          </div>
        </div>
      </b-collapse>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="card-heading">
          <h3 class="panel-title">Edit Penyerahan</h3>
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
    this.editPenyerahan(this.$route.params.id);
  },
  methods: {
    ...mapActions("penyerahan", ["editPenyerahan", "updatePenyerahan"]),
    submit() {
      this.updatePenyerahan(this.$route.params.id).then(() => {
        Swal.fire({
          title: "",
          text: "The application has been successfully edit!",
          icon: "success",
          confirmButtonClass: "btn btn-secondary"
        });
        this.$router.push({ name: "penyerahan.data" });
      });
    },
    close() {
      this.$router.push({ name: "penyerahan.data" });
    },
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState({
      identitaskendaraan: state => state.penyerahan.identitaskendaraan,
    }),
  },
  components: {
    "edit-form": Form
  }
};
</script>

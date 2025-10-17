<template>
  <div class="card card-custom">
    <div class="card-header">
      <div class="card-title">
        <span class="card-icon">
          <i class="flaticon2-lorry text-primary"></i>
        </span>
        <h3 class="card-label">Pengujian POS 1</h3>
      </div>
      <div class="card-toolbar">
        <div class="row">
          <div class="col-6">
            <b-form-datepicker id="example-datepicker" v-model="tgl" locale="id"></b-form-datepicker>
          </div>
          <div class="col-4">
            <input class="form-control" type="text" placeholder="serach" v-model="search" />
          </div>
          <div class="col-2">
            <a class="btn btn-sm btn-icon btn-light-info mr-2" @click.prevent="reload" title="reload data"><i
                class="flaticon2-reload"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="row table-responsive">
        <div class="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Jenis Pendaftaran</th>
                <th>No Uji</th>
                <th>No Kendaraan</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pendaftaran, index) in pos1.pendaftarans
                .data" :key="pendaftaran.uuid">
                <td>{{ index+1 }}</td>
                <td>{{ pendaftaran.keterangan }}</td>
                <td>{{ pendaftaran.nouji }}</td>
                <td>{{ pendaftaran.noregistrasikendaraan }}</td>
                <td>
                  <router-link :to="{
                    name: 'pos1.pengujian',
                    params: { id: pendaftaran.uuid },
                  }">
                    <i class="fa fa-edit text-success"></i>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="pull-right">
        <div class="overflow-auto">
          <b-pagination v-model="page" :total-rows="pos1.pendaftarans.total" :per-page="pos1.pendaftarans.per_page"
            aria-controls="pendaftarans" v-if="
              pos1.pendaftarans.data &&
              pos1.pendaftarans.data.length > 0
            "></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";
export default {
  created() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    this.tgl = today;
  },
  data() {
    return {
      search: "",
      tgl: "",
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Pendaftaran" },
      { title: "Data" },
    ]);
  },
  computed: {
    ...mapState(["pos1"]),
    page: {
      get() {
        return this.$store.state.pos1.page;
      },
      set(val) {
        this.$store.commit("pos1/SET_PAGE", val);
      },
    },
  },
  watch: {
    page() {
      this.getPendaftarans();
    },
    search() {
      this.getPendaftarans(this.search);
    },
    tgl() {
      this.$store.commit("pos1/SET_TGL", this.customFormatter(this.tgl));
      this.getPendaftarans(this.search);
    },
  },
  methods: {
    ...mapActions("pos1", ["getPendaftarans"]),
    customFormatter(today) {
      return today;
    },
    reload() {
      this.getPendaftarans(this.search);
    },
  },
  components: {},
};
</script>

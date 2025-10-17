<template>
  <div class="card card-custom">
    <div class="card-header">
      <div class="card-title">
        <span class="card-icon">
          <i class="flaticon2-lorry text-primary"></i>
        </span>
        <h3 class="card-label">Penyerahan</h3>
      </div>
      <div class="card-toolbar">
        <div class="row">
          <div class="col-5">
            <datepicker input-class="form-control" v-model="tgl" :language="id"></datepicker>
          </div>
          <div class="col-5">
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
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>No</th>
              <th>No Kendaraan</th>
              <th>No Uji</th>
              <th>Nama</th>
              <th>Nama Penerima</th>
              <th>Waktu</th>
              <th>Jenis Pendaftaran</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="penyerahan in penyerahan.penyerahans.data" :key="penyerahan.uuid">
              <td>{{ penyerahan.noantrian }}</td>
              <td>{{ penyerahan.noregistrasikendaraan }}</td>
              <td>{{ penyerahan.nouji }}</td>
              <td>{{ penyerahan.nama }}</td>
              <td>{{ penyerahan.namapenerima }}</td>
              <td>{{ penyerahan.waktu }}</td>
              <td>{{ penyerahan.keterangan }}</td>
              <td>
                <router-link :to="{ name: 'penyerahan.edit', params: { id: penyerahan.uuid } }">
                  <i class="fa fa-edit text-success"></i>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card-footer">
      <div class="pull-right">
        <div class="overflow-auto">
          <b-pagination v-model="page" :total-rows="penyerahan.penyerahans.total"
            :per-page="penyerahan.penyerahans.per_page" aria-controls="penyerahans"
            v-if="penyerahan.penyerahans.data && penyerahan.penyerahans.data.length > 0"></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import datepicker from 'vuejs-datepicker';
import { en, id } from 'vuejs-datepicker/dist/locale';
import moment from 'moment';
import { mapState, mapActions } from "vuex";
export default {
  created() {
    // this.getPenyerahans();
    var CurrentDate = moment().format("MM-DD-YYYY");
    this.tgl = CurrentDate;
  },
  data() {
    return {
      // users: {}
      search: "",
      tgl: "",
      id: id,
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Penyerahan" },
      { title: "Data" }
    ]);
  },
  computed: {
    ...mapState(["penyerahan"]),
    page: {
      get() {
        return this.$store.state.penyerahan.page;
      },
      set(val) {
        this.$store.commit("penyerahan/SET_PAGE", val);
      }
    }
  },
  watch: {
    page() {
      this.getPenyerahans();
    },
    search() {
      this.getPenyerahans(this.search);
    },
    tgl() {
      this.$store.commit("penyerahan/SET_TGL", this.customFormatter(this.tgl));
      this.getPenyerahans(this.search);
    },
  },
  methods: {
    ...mapActions("penyerahan", ["getPenyerahans", "editPendaftaran"]),
    customFormatter(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    reload() {
      this.getPenyerahans(this.search);
    },
  },
  components: {
    datepicker
  },
};
</script>
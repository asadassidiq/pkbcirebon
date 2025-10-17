<template>
  <div class="card card-custom">
    <div class="card-header">
      <div class="card-title">
        <span class="card-icon">
          <i class="flaticon2-lorry text-primary"></i>
        </span>
        <h3 class="card-label">Monitoring</h3>
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
        <div class="col-md-12 table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Jenis Pendaftaran</th>
                <th>No Uji</th>
                <th>No Kendaraan</th>
                <th>Posisi</th>
                <th>Pos 1</th>
                <th>Pos 2</th>
                <th>Pos 3</th>
                <th>Pos 4</th>
                <th>Verif</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="monitoring, index in monitoring.monitorings.data" :key="monitoring.uuid">
                <td>{{ index+1 }}</td>
                <td>{{ monitoring.keterangan }}</td>
                <td>{{ monitoring.nouji }}</td>
                <td>{{ monitoring.noregistrasikendaraan }}</td>
                <td v-if="monitoring.posisi == 0">Menunggu Uji</td>
                <td v-else-if="monitoring.posisi < 5">{{ 'POS ' + monitoring.posisi }}</td>
                <td v-else-if="monitoring.posisi == 5">Verif</td>
                <td v-else-if="monitoring.posisi == 6">Cetak</td>
                <td v-else-if="monitoring.posisi == 7">Diserahkan</td>
                <td v-else>Selesai</td>
                <td v-if="monitoring.pos1 == 0">
                  <a href="javascript:void(0)"><i class="flaticon-circle text-danger"></i></a>
                </td>
                <td v-else-if="monitoring.pos1 == 1">
                  <a href="javascript:void(0)"><i class="flaticon2-correct text-success"></i></a>
                </td>
                <td v-else>
                  <a href="javascript:void(0)"><i class="flaticon2-line text-dark"></i></a>
                </td>
                <td v-if="monitoring.pos2 == 0">
                  <a href="javascript:void(0)"><i class="flaticon-circle text-danger"></i></a>
                </td>
                <td v-else-if="monitoring.pos2 == 1">
                  <a href="javascript:void(0)"><i class="flaticon2-correct text-success"></i></a>
                </td>
                <td v-else>
                  <a href="javascript:void(0)"><i class="flaticon2-line text-dark"></i></a>
                </td>
                <td v-if="monitoring.pos3 == 0">
                  <a href="javascript:void(0)"><i class="flaticon-circle text-danger"></i></a>
                </td>
                <td v-else-if="monitoring.pos3 == 1">
                  <a href="javascript:void(0)"><i class="flaticon2-correct text-success"></i></a>
                </td>
                <td v-else>
                  <a href="javascript:void(0)"><i class="flaticon2-line text-dark"></i></a>
                </td>
                <td v-if="monitoring.pos4 == 0">
                  <a href="javascript:void(0)"><i class="flaticon-circle text-danger"></i></a>
                </td>
                <td v-else-if="monitoring.pos4 == 1">
                  <a href="javascript:void(0)"><i class="flaticon2-correct text-success"></i></a>
                </td>
                <td v-else>
                  <a href="javascript:void(0)"><i class="flaticon2-line text-dark"></i></a>
                </td>
                <td v-if="monitoring.posverif == 0">
                  <a href="javascript:void(0)"><i class="flaticon-circle text-danger"></i></a>
                </td>
                <td v-else-if="monitoring.posverif == 1">
                  <a href="javascript:void(0)"><i class="flaticon2-correct text-success"></i></a>
                </td>
                <td v-else>
                  <a href="javascript:void(0)"><i class="flaticon2-line text-dark"></i></a>
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
          <b-pagination v-model="page" :total-rows="monitoring.monitorings.total"
            :per-page="monitoring.monitorings.per_page" aria-controls="monitorings"
            v-if="monitoring.monitorings.data && monitoring.monitorings.data.length > 0"></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";
import { mapState, mapActions } from "vuex";
export default {
  created() {
    // this.getMonitorings();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    this.tgl = today;
  },
  data() {
    return {
      // users: {}
      search: "",
      tgl: "",
      idbilling: "",
      result: '',
      error: ''
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Monitoring" },
      { title: "Data" }
    ]);
  },
  computed: {
    ...mapState(["monitoring"]),
    page: {
      get() {
        return this.$store.state.monitoring.page;
      },
      set(val) {
        this.$store.commit("monitoring/SET_PAGE", val);
      }
    }
  },
  watch: {
    page() {
      this.getMonitorings();
    },
    search() {
      this.getMonitorings(this.search);
    },
    tgl() {
      this.$store.commit("monitoring/SET_TGL", this.customFormatter(this.tgl));
      this.getMonitorings(this.search);
    }
  },
  methods: {
    ...mapActions("monitoring", ["getMonitorings"]),
    deleteMonitoring(id) {

    },
    customFormatter(today) {
      return today;
    },
    print(id) {
      window.open('/cetak/' + id + '/permohonan', "_blank");
    },
    reload() {
      this.getMonitorings(this.search);
    }

  },
  components: {

  },
};
</script>
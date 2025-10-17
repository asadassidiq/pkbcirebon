<template>
  <div class="card card-custom">
    <div class="card-header">
      <div class="card-title">
        <span class="card-icon">
          <i class="flaticon2-lorry text-primary"></i>
        </span>
        <h3 class="card-label">Datapengujian</h3>
      </div>
      <div class="card-toolbar">
        <div class="row">
          <div class="col-5">
            <datepicker input-class="form-control" v-model="tgl" :language="id" ></datepicker>
          </div>
          <div class="col-6">
            <input class="form-control" type="text"  placeholder="serach" v-model="search"  />
          </div>
          <div class="col-1">
            <a
              class="btn btn-sm btn-icon btn-light-info mr-2"
              @click.prevent="reload"
              title="reload data"
              ><i class="flaticon2-reload"></i>
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
                        <th>Status Penerbitan</th>
                        <th>No Uji</th>
                        <th>No Kendaraan</th>
                        <th>Kartu</th>
                        <th>RFID</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="datapengujian,index in datapengujian.datapengujians.data" :key="datapengujian.idx">
                      <td>{{ index+1 }}</td>
                      <td>{{ datapengujian.keterangan }}</td>
                      <td>{{ datapengujian.nouji }}</td>
                      <td>{{ datapengujian.noregistrasikendaraan }}</td>
                      <td>{{ datapengujian.nokendalikartu }}</td>
                      <td>{{ datapengujian.rfid }}</td>
                      <td>
                        <!-- <router-link :to="{ name: 'datapengujian.edit', params: {id: datapengujian.idx} }">
                          <i class="fa fa-edit text-success"></i>
                        </router-link>/ -->
                        <a href="javascript:void(0)" v-if="datapengujian.nokendalikartu === null" @click="setundoVerifikator(datapengujian.idx)">
                          <i class="fas fa-undo text-warning"></i>
                        </a>
                        <span v-if="datapengujian.nokendalikartu === null">/</span>
                        <a href="javascript:void(0)" v-b-modal.modal-scrollable>
                          <i class="fa fa-save text-info" @click.prevent="setidx(datapengujian.idx)"></i>
                        </a>
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
            <b-pagination
              v-model="page"
              :total-rows="datapengujian.datapengujians.total"
              :per-page="datapengujian.datapengujians.per_page"
              aria-controls="datapengujians"
              v-if="datapengujian.datapengujians.data && datapengujian.datapengujians.data.length > 0"
            ></b-pagination>
          </div>
      </div>
  </div>

  <b-modal id="modal-scrollable" scrollable ok-only @ok="sumbitNoSertifikat">
    <div class="form-group">
        <label>No Kartu</label>
        <input
          type="text"
          class="form-control form-control-lg"
          name="nokendalikartu"
          placeholder="No Kartu"
          v-model="nosertifikat.nokendalikartu"
        />
    </div>
    <div class="form-group">
        <label>No RIFD</label>
        <input
          type="text"
          class="form-control form-control-lg"
          name="rfid"
          placeholder="No RFID"
          v-model="nosertifikat.rfid"
        />
    </div>
    <div class="form-group">
        <label>Kartu</label>
        <div class="radio-inline">
          <label class="radio radio-success">
              <input type="radio" v-model="nosertifikat.perso" value="1"/>
              <span></span>
              Baru
          </label>
          <label class="radio radio-danger">
              <input type="radio" v-model="nosertifikat.perso" value="0" />
              <span></span>
              Lama
          </label>
        </div>
    </div>
</b-modal>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import datepicker from 'vuejs-datepicker';
import {en, id} from 'vuejs-datepicker/dist/locale';
import moment from 'moment';
import Swal from "sweetalert2";
import { mapState, mapActions } from "vuex";
export default {
  created() {
    // this.getDatapengujians();
    var CurrentDate = moment().format("MM-DD-YYYY");
    this.tgl=CurrentDate;
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
      { title: "Datapengujian" },
      { title: "Data" }
    ]);
  },
  computed: {
    ...mapState(["datapengujian"]),
    page: {
      get() {
        return this.$store.state.datapengujian.page;
      },
      set(val) {
        this.$store.commit("datapengujian/SET_PAGE", val);
      }
    },
    ...mapState("datapengujian", {
      nosertifikat: state => state.nosertifikat,
    }),

  },
  watch: {
    page() {
      this.getDatapengujians();
    },
    search() {
      this.getDatapengujians(this.search);
    },
    tgl(){
      this.$store.commit("datapengujian/SET_TGL", this.customFormatter(this.tgl));
      this.getDatapengujians(this.search);
    }
  },
  methods: {
    ...mapActions("datapengujian", ["getDatapengujians", "removeDatapengujian","editDatapengujian","updateNosertifikat","getNosertifikat","setUndoVerif"]),
    deleteDatapengujian(id) {
      
    },
    reload(){
      this.getDatapengujians(this.search);
    },
    customFormatter(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    setidx(id){
      this.nosertifikat.idx = id;
      this.getNosertifikat(id);
    },
    setundoVerifikator(id){
      this.setUndoVerif(id).then(() => {
        Swal.fire({
                    icon: 'success',
                    title: 'Berhasil Kembali ke verifikator',
                    showConfirmButton: false,
                    timer: 1500
                  })
            this.getDatapengujians();
      });
    },
    sumbitNoSertifikat(){
      this.updateNosertifikat(this.nosertifikat.idx).then(() => {
          Swal.fire({
                    icon: 'success',
                    title: 'Success Save',
                    showConfirmButton: false,
                    timer: 1500
                  })
            this.getDatapengujians();
      })
    },
  },
  components: {
    datepicker
  },
};
</script>
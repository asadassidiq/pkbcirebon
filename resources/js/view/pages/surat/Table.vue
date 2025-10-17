<template>
  <div class="card card-custom">
    <div class="card-header">
      <div class="card-title">
        <span class="card-icon">
          <i class="flaticon2-lorry text-primary"></i>
        </span>
        <h3 class="card-label">Persuratan</h3>
      </div>
      <div class="card-toolbar">
        <div class="row">
          
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-4">
          <b-form-datepicker id="example-datepicker" v-model="tgl" locale="id"></b-form-datepicker>
        </div>
        <div class="col-4">
          <select class="form-control" v-model="jenis">
            <option value="1">Numpang Uji Keluar</option>
            <option value="2">Mutasi Keluar</option>
            <option value="5">Semua</option>
          </select>
        </div>
        <div class="col-3">
          <input class="form-control" type="text" placeholder="serach" v-model="search" />
        </div>
        <div class="col-1">
          <a class="btn btn-sm btn-icon btn-light-info mr-2" @click.prevent="reload" title="reload data"><i
              class="flaticon2-reload"></i>
          </a>
        </div>
      </div>
      <div class="row table-responsive">
        <div class="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>No. Surat</th>
                <th>Jenis Surat</th>
                <th>No Uji</th>
                <th>No Kendaraan</th>
                <th>Status Kementrian</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pendaftaran, index in surat.pendaftarans.data" :key="pendaftaran.uuid">
                <td>{{ index+1 }}</td>
                <td>{{ pendaftaran.keterangan }}</td>
                <td>{{ pendaftaran.nosurat }}</td>
                <td>{{ pendaftaran.nouji }}</td>
                <td>{{ pendaftaran.noregistrasikendaraan }}</td>
                
                <td v-if="pendaftaran.status_cetak == 0">belum dikirim</td>
                <td v-else-if="pendaftaran.status_cetak == '1'">terkirim</td>
                <td v-else>Menunggu</td>
                <td>
                  <div v-if="user.role == 'KEPALA'" >
                    <router-link :to="{ name: 'verif2.verifikasi', params: { id: pendaftaran.uuid } }">
                      <i class="fa fa-edit text-success"></i>
                    </router-link>
                  </div>
                  <div v-else>
                    <router-link :to="{ name: 'pendaftaran.edit', params: { id: pendaftaran.uuid } }">
                      <i class="fa fa-edit text-success"></i>
                    </router-link>
                    <a href="javascript:void(0)" @click="sendPendaftaran(pendaftaran.uuid,pendaftaran.nouji)">
                      <i class="fas fa-paper-plane text-danger"></i>
                    </a>
                    <a href="javascript:void(0)" @click="print(pendaftaran.uuid)">
                      <i class="fa fa-print text-info"></i>
                    </a>
                  </div>
                  
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
                  :total-rows="surat.pendaftarans.total"
                  :per-page="surat.pendaftarans.per_page"
                  aria-controls="pendaftarans"
                  v-if="
                      surat.pendaftarans.data &&
                      surat.pendaftarans.data.length > 0
                  "
              ></b-pagination>
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
  data() {
    return {
      user: [],
      search: "",
      status:"4",
      jenis:"5",
      tgl: "",
    };
  },
  created() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    this.tgl = today;
    this.user = this.$store.state.profile.user_personal_info;
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Pendaftaran" },
      { title: "Persuratan" }
    ]);
  },
  computed: {
    ...mapState(["surat"]),
    page: {
      get() {
        return this.$store.state.surat.page;
      },
      set(val) {
        this.$store.commit("surat/SET_PAGE", val);
      }
    }
  },
  watch: {
    page() {
      this.getPendaftarans();
    },
    search() {
      this.getPendaftarans(this.search);
    },
    tgl() {
      this.$store.commit("surat/SET_TGL", this.customFormatter(this.tgl));
      this.getPendaftarans(this.search);
    },
    status() {
      this.$store.commit("surat/SET_STATUS", this.status);
      this.getPendaftarans(this.search);
    },
    jenis() {
      this.$store.commit("surat/SET_JENIS", this.jenis);
      this.getPendaftarans(this.search);
    }
  },
  methods: {
    ...mapActions("surat", ["getPendaftarans","sendDataPendaftaran","getTTE"]),
    sendPendaftaran(id,nouji) {
      Swal.fire({
              title: "Kirim Pendaftaran?",
              text: "Anda yakin mengirim data ini!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Iya, kirim ini!",
          }).then((result) => {
              if (result.isConfirmed) {
                  let payload = {
                      id: id,
                      nouji: nouji
                  };
                  this.sendDataPendaftaran(payload).then(() => {
                      Swal.fire(
                          "Sent!",
                          "Pendaftaran sudah terkirim.",
                          "success",
                      );
                      this.getPendaftarans();
                  });
              }
          });
    },
    customFormatter(today) {
      return today;
    },
    print(id) {
      window.open('/cetak/' + id + '/surat', "_blank");
    },
    checkSurat(id)
    {
      if(id == null || id == ''){
        Swal.fire({
            icon: "error",
            title: "Status",
            text: 'Dokumen TTE belum tersedia !!',
        }).then((result) => {
            if (result.isConfirmed) {
            };
        });
      }else{
        this.getTTE(id);
      }
    },
    reload() {
      this.getPendaftarans(this.search);
    },
  },
  components: {

  },
};
</script>
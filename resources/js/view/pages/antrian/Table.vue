<template>
	<div class="card card-custom">
		<div class="card-header">
			<div class="card-title">
				<span class="card-icon">
					<i class="flaticon2-lorry text-primary"></i>
				</span>
				<h3 class="card-label">Antrian</h3>
			</div>
			<div class="card-toolbar">
				<div class="row">
					<div class="col-5">
            <b-form-datepicker id="example-datepicker" v-model="tgl" locale="id"></b-form-datepicker>
					</div>
					<div class="col-3">
						<input class="form-control" type="text"  placeholder="serach" v-model="search"  />
					</div>
          <div class="col-1">
                <button class="btn btn-sm btn-icon btn-light-danger mr-2" data-toggle="tooltip" title="Scan with Camera" type="button" v-b-modal.modal-scrollable><i class="flaticon2-photo-camera"></i></button>
          </div>
          <div class="col-1">
                <button class="btn btn-sm btn-icon btn-light-danger mr-2" data-toggle="tooltip" title="Scan with Scanner" type="button" v-b-modal.modal-scrollable2><i class="flaticon2-copy"></i></button>
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
                        <th>Jenis Pendaftaran</th>
                        <th>No Uji</th>
                        <th>No Kendaraan</th>
                        <th>Modify</th>
    				        </tr>
    				    </thead>
    				    <tbody>
    				        <tr v-for="antrian,index in antrian.antrians.data" :key="antrian.id">
                      <td>{{ index+1 }}</td>
                      <td>{{ antrian.keterangan }}</td>
                      <td>{{ antrian.nouji }}</td>
                      <td>{{ antrian.noregistrasikendaraan }}</td>
                      <td>
                        <a href="javascript:void(0)" @click="edit(antrian.id)" v-b-modal.modal-scrollable3>
                          <i class="fa fa-edit text-success"></i>
                        </a>/
                        <a href="javascript:void(0)" @click="print(antrian.id)">
                          <i class="fa fa-print text-info"></i>
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
                :total-rows="antrian.antrians.total"
                :per-page="antrian.antrians.per_page"
                aria-controls="antrians"
                v-if="antrian.antrians.data && antrian.antrians.data.length > 0"
              ></b-pagination>
            </div>
        </div>
    </div>
        <b-modal id="modal-scrollable" scrollable ok-only>
           <p class="error">{{ error }}</p>
        	<qrcode-stream @decode="onDecode" @init="onInit" />
  		</b-modal>


        <b-modal id="modal-scrollable2" scrollable ok-only>
          <div class="form-group">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="width"
                placeholder="Scan"
                v-model="idbilling"
                @change="caridata()"
              />
            </div>
      </b-modal>

        <b-modal id="modal-scrollable3" @ok="updateData">
          <div class="form-group">
            <label>Tanggal Pendaftaran</label>
            <b-form-datepicker id="example-datepicker" v-model="identitaskendaraan.tglpendaftaran" locale="id"></b-form-datepicker>
          </div>
          <div class="form-group">
            <label>Jenis Pendaftaran</label>
            <select class="form-control" v-model="identitaskendaraan.kodepenerbitans_id">
             <option selected="selected" value="1">Daftar Baru</option>
                <option value="2">Perpanjangan</option>
                <option value="3">Rusak</option>
                <option value="4">Hilang</option>
                <option value="5">Numpang Uji Masuk</option>
                <option value="9">Numpang Uji Keluar</option>
                <option value="6">Mutasi Masuk</option>
                <option value="10">Mutasi Keluar</option>
                <option value="7">Uji Ulang</option>
              </select>
          </div>
          <div class="form-group" v-if="identitaskendaraan.kodepenerbitans_id == 2">
            <label> No Uji</label>
            <input
              type="text"
              class="form-control form-control-solid form-control-lg"
              placeholder="No Uji"
              v-model="identitaskendaraan.nouji"
            />
          </div>
          <div class="form-group" v-if="identitaskendaraan.kodepenerbitans_id == 5 || identitaskendaraan.kodepenerbitans_id == 6">
            <label>Daerah Asal</label>
            <vSelect label="area_name" :options="kodewilayahs" v-model="identitaskendaraan.kodewilayah"></vSelect>
          </div>
      </b-modal>
	</div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";
import { QrcodeStream } from 'vue-qrcode-reader';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  created() {
    this.getAntrians();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
	  this.tgl=today;
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
      { title: "Antrian" },
      { title: "Data" }
    ]);
  },
  computed: {
    ...mapState(["antrian"]),
    ...mapState("antrian", {
      identitaskendaraan: state => state.identitaskendaraan,
      kodewilayahs: state => state.kodewilayahs
    }),
    page: {
      get() {
        return this.$store.state.antrian.page;
      },
      set(val) {
        this.$store.commit("antrian/SET_PAGE", val);
      }
    }
  },
  watch: {
    page() {
      this.getAntrians();
    },
    search() {
      this.getAntrians(this.search);
    },
    tgl(){
      this.$store.commit("antrian/SET_TGL", this.customFormatter(this.tgl));
      this.getAntrians(this.search);
    }
  },
  methods: {
    ...mapActions("antrian", ["getAntrians","getBilling","getPendaftaran","getKodewilayahs","updateAntrian","setAntrian"]),
    ...mapMutations("antrian", ["CLEAR_FORM"]),
    deleteAntrian(id) {
      
    },
    customFormatter(today) { 
      return today;
    },
    print(id){
        window.open('/cetak/'+id+'/permohonan', "_blank");
    },
    reload(){
      this.getAntrians(this.search);
    },
    edit(id){
      this.getKodewilayahs();
      this.getPendaftaran(id);
    },
    updateData(){
        this.updateAntrian(this.identitaskendaraan.id).then(() => {
            Swal.fire({
              title: "",
              text: "Berhasil Update",
              icon: "success",
              showConfirmButton: false,
          timer: 1500
            });
            this.reload();
        });
    },

    caridata(){
        this.getBilling(this.idbilling).then(() => {
          if(this.antrian.pendaftaran.pendaftaran_id.length == 0){
            Swal.fire({
              title: "",
              text: "barcode id tidak ditemukan",
              icon: "warning",
              showConfirmButton: false,
          timer: 1500
            });
          }else if(this.antrian.pendaftaran.status == 0){
            Swal.fire({
              title: "",
              text: "masih menunggu pembayaran",
              icon: "warning",
              showConfirmButton: false,
          timer: 1500
            });
          }else if(this.antrian.pendaftaran.tglpendaftaran != this.antrian.pendaftaran.tglbayar){
            Swal.fire({
              title: "",
              text: "kendaraan tidak terjadwal hari ini",
              icon: "warning",
              showConfirmButton: false,
          timer: 1500
            });
          }else if(this.antrian.pendaftaran.datastatus == false){
            Swal.fire({
              title: "",
              text: "Daat Belum Lengkap",
              icon: "warning",
              showConfirmButton: false,
          timer: 1500
            });
            this.$router.push({ name: "pendaftaran.edit", params: {id: this.antrian.pendaftaran.pendaftaran_id} });
          }
          else if(this.antrian.pendaftaran.status == 1){
             Swal.fire({
              title: "",
              text: "barcode id ditemukan",
              icon: "success",
              showConfirmButton: false,
          timer: 1500
            });
            this.setAntrian(this.antrian.pendaftaran.pendaftaran_id);
          }
          this.idbilling = "";
          this.CLEAR_FORM();
        });

    },
    
    onDecode (result) {
      console.log(result)
      this.idbilling = result
      this.getBilling(result).then(() => {
          if(this.antrian.pendaftaran.pendaftaran_id.length == 0){
            Swal.fire({
              title: "",
              text: "barcode id tidak ditemukan",
              icon: "warning",
              showConfirmButton: false,
          timer: 1500
            });
          }else if(this.antrian.pendaftaran.status == 0){
            Swal.fire({
              title: "",
              text: "masih menunggu pembayaran",
              icon: "warning",
              showConfirmButton: false,
          timer: 1500
            });
          }else if(this.antrian.pendaftaran.tglpendaftaran != this.antrian.pendaftaran.tglbayar){
            Swal.fire({
              title: "",
              text: "kendaraan tidak terjadwal hari ini",
              icon: "warning",
              showConfirmButton: false,
          timer: 1500
            });
          }else if(this.antrian.pendaftaran.datastatus == false){
            Swal.fire({
              title: "",
              text: "Daat Belum Lengkap",
              icon: "warning",
              showConfirmButton: false,
          timer: 1500
            });
            this.$router.push({ name: "pendaftaran.edit", params: {id: this.antrian.pendaftaran.pendaftaran_id} });
          }
          else if(this.antrian.pendaftaran.status == 1){
             Swal.fire({
              title: "",
              text: "barcode id ditemukan",
              icon: "success",
              showConfirmButton: false,
          timer: 1500
            });
            this.setAntrian(this.antrian.pendaftaran.pendaftaran_id);
          }
          this.idbilling = "";
          this.CLEAR_FORM();
        });
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permission"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        } else if (error.name === 'InsecureContextError') {
          this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    }
  },
  components: {
    vSelect,
    QrcodeStream
  },
};
</script>
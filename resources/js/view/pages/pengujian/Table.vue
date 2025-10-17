<template>
	<div class="card card-custom">
		<div class="card-header">
			<div class="card-title">
				<span class="card-icon">
					<i class="flaticon2-lorry text-primary"></i>
				</span>
				<h3 class="card-label">Pengujian</h3>
			</div>
			<div class="card-toolbar">
				<div class="row">
					<div class="col-5">
						<input class="form-control" type="text" placeholder="Tanggal"  />
					</div>
					<div class="col-5">
						<input class="form-control" type="text"  placeholder="serach" />
					</div>
					<div class="col-2">
						<router-link
				            :to="{ name: 'pengujian.add' }"
				            class="btn btn-sm btn-icon btn-light-success mr-2"
				        ><i class="flaticon2-add"></i>
				        </router-link>
					</div>
				</div>
				
			</div>
		</div>
		<div class="card-body">
		    <div class="row">
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
				    	<tr>
				    		<td>1</td>
				    		<td>Daftar Baru</td>
				    		<td>YK 0001</td>
				    		<td>AB 5555 YK</td>
				    		<td>
				    			<router-link :to="{ name: 'pendaftaran.edit' }">
			                    <i class="fa fa-edit blue"></i>
				                  </router-link>
				    		</td>
				    	</tr>
				    	<tr>
				    		<td>2</td>
				    		<td>Perpanjangan</td>
				    		<td>YK 0002</td>
				    		<td>AB 5666 YK</td>
				    		<td>
				                  <b-button v-b-modal.modal-4 class="btn btn-sm btn-icon btn-light-success mr-2"><i class="flaticon2-add"></i></b-button>
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
				</div>
            </div>
        </div>
        <b-modal id="modal-4" title="Konfirmasi" @ok="handleOkFinishing">
          <div class="form-group row">
            <div class="col-12">
            	Jika sudah yakin untuk Verifikasi data kendaraan silahakan klik OK
            </div>
          </div>
        </b-modal>
	</div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.getPendaftarans();
  },
  data() {
    return {
      // users: {}
      search: ""
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Pendaftaran" },
      { title: "Pengujian" }
    ]);
  },
  computed: {
    ...mapState(["pendaftaran"]),
    page: {
      get() {
        return this.$store.state.pendaftaran.page;
      },
      set(val) {
        this.$store.commit("pendaftaran/SET_PAGE", val);
      }
    }
  },
  watch: {
    page() {
      this.getPendaftarans();
    },
    search() {
      this.getPendaftarans(this.search);
    }
  },
  methods: {
    ...mapActions("pendaftaran", ["getPendaftarans", "removePendaftaran"]),
    deletePendaftaran(id) {
      
    }
  }
};
</script>
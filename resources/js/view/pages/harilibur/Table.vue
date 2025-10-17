<template>
	<div class="card card-custom">
		<div class="card-header">
			<div class="card-title">
				<span class="card-icon">
					<i class="flaticon2-lorry text-primary"></i>
				</span>
				<h3 class="card-label">HariLibur</h3>
			</div>
			<div class="card-toolbar">
				<div class="row">
					<div class="col-6">
						<input class="form-control" type="text"  placeholder="serach" v-model="search"  />
					</div>
					<div class="col-6">
						<router-link
				            :to="{ name: 'harilibur.add' }"
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
		                    <th>Tanggal</th>
				            <th>Nama</th>
		                    <th>Modify</th>
				        </tr>
				    </thead>
				    <tbody>
				        <tr v-for="harilibur,index in harilibur.hariliburs.data" :key="harilibur.id">
		                    <td>{{ index+1 }}</td>
		                    <td>{{ harilibur.tanggal }}</td>
		                    <td>{{ harilibur.nama }}</td>
		                    <td>
		                      <router-link :to="{ name: 'harilibur.edit', params: {id: harilibur.id} }">
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
              		<b-pagination
		                v-model="page"
		                :total-rows="harilibur.hariliburs.total"
		                :per-page="harilibur.hariliburs.per_page"
		                aria-controls="hariliburs"
		                v-if="harilibur.hariliburs.data && harilibur.hariliburs.data.length > 0"
		              ></b-pagination>
				</div>
            </div>
          </div>
	</div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import datepicker from 'vuejs-datepicker';
import {en, id} from 'vuejs-datepicker/dist/locale';
import moment from 'moment';
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.getHariLiburs();
	
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
      id: id,
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "HariLibur" },
      { title: "Data" }
    ]);
  },
  computed: {
    ...mapState(["harilibur"]),
    page: {
      get() {
        return this.$store.state.harilibur.page;
      },
      set(val) {
        this.$store.commit("harilibur/SET_PAGE", val);
      }
    }
  },
  watch: {
    page() {
      this.getHariLiburs();
    },
    search() {
      this.getHariLiburs(this.search);
    },
    tgl(){
      this.$store.commit("harilibur/SET_TGL", this.customFormatter(this.tgl));
      this.getHariLiburs(this.search);
    }
  },
  methods: {
    ...mapActions("harilibur", ["getHariLiburs", "removeHariLibur"]),
    deleteHariLibur(id) {
      
    },
    customFormatter(today) { 
      return today;
    },
  },
  components: {
    datepicker
  },
};
</script>
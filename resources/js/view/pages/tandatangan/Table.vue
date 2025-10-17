<template>
	<div class="card card-custom">
		<div class="card-header">
			<div class="card-title">
				<span class="card-icon">
					<i class="flaticon2-lorry text-primary"></i>
				</span>
				<h3 class="card-label">Tandatangan</h3>
			</div>
			<div class="card-toolbar">
				<div class="row">
					<div class="col-12">
						<input class="form-control" type="text"  placeholder="serach" v-model="search"  />
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
				            <th>Nama</th>
				            <th>Tanda Tangan</th>
		                    <th>Modify</th>
				        </tr>
				    </thead>
				    <tbody>
				        <tr v-for="tandatangan,index in tandatangan.tandatangans.data" :key="tandatangan.id">
		                    <td>{{ index+1 }}</td>
		                    <td>{{ tandatangan.name }}</td>
		                    <td>{{ tandatangan.nama }}</td>
		                    <td>
		                      <router-link :to="{ name: 'tandatangan.edit', params: {id: tandatangan.id} }">
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
		                :total-rows="tandatangan.tandatangans.total"
		                :per-page="tandatangan.tandatangans.per_page"
		                aria-controls="tandatangans"
		                v-if="tandatangan.tandatangans.data && tandatangan.tandatangans.data.length > 0"
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
    this.getTandatangans();
  },
  data() {
    return {
      // tandatangans: {}
      search: "",
      tgl: "",
      id: id,
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Tandatangan" },
      { title: "Data" }
    ]);
  },
  computed: {
    ...mapState(["tandatangan"]),
    page: {
      get() {
        return this.$store.state.tandatangan.page;
      },
      set(val) {
        this.$store.commit("tandatangan/SET_PAGE", val);
      }
    }
  },
  watch: {
    page() {
      this.getTandatangans();
    },
    search() {
      this.getTandatangans(this.search);
    },
    tgl(){
      this.$store.commit("tandatangan/SET_TGL", this.customFormatter(this.tgl));
      this.getTandatangans(this.search);
    }
  },
  methods: {
    ...mapActions("tandatangan", ["getTandatangans", "removeTandatangan"]),
    deleteTandatangan(id) {
      
    },
  },
  components: {
    datepicker
  },
};
</script>
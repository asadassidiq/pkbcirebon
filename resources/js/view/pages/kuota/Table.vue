<template>
	<div class="card card-custom">
		<div class="card-header">
			<div class="card-title">
				<span class="card-icon">
					<i class="flaticon2-lorry text-primary"></i>
				</span>
				<h3 class="card-label">Kuota</h3>
			</div>
			<div class="card-toolbar">
				<div class="row">
					<div class="col-6">
						<input class="form-control" type="text" placeholder="serach" v-model="search" />
					</div>
					<div class="col-6">
						<router-link :to="{ name: 'kuota.add' }" class="btn btn-sm btn-icon btn-light-success mr-2"><i
								class="flaticon2-add"></i>
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
								<th class="text-center">Kuota Pagi-Siang</th>
								<th class="text-center">Tersedia Pagi-Siang</th>
								<th class="text-center">Modify</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="kuota, index in kuota.kuotas.data" :key="kuota.id">
								<td>{{ index + 1 }}</td>
								<td>{{ customFormatter2(kuota.tanggal) }}</td>
								<td class="text-center">
									<button class="btn btn-danger btn-sm" type="button" v-if="kuota.kuotapagi == '0'">{{
										kuota.kuotapagi }}</button>
									<button class="btn btn-success btn-sm" type="button" v-if="kuota.kuotapagi > 0">{{
										kuota.kuotapagi }}</button>
									-
									<button class="btn btn-success btn-sm" type="button" v-if="kuota.kuotasiang > 0">{{
										kuota.kuotasiang }}</button>
									<button class="btn btn-danger btn-sm" type="button" v-if="kuota.kuotasiang == '0'">{{
										kuota.kuotasiang }}</button>
								</td>
								<td class="text-center">
									<button class="btn btn-danger btn-sm" type="button" v-if="kuota.tersediapagi == '0'">{{
										kuota.tersediapagi }}</button>
									<button class="btn btn-success btn-sm" type="button" v-if="kuota.tersediapagi > 0">{{
										kuota.tersediapagi }}</button>
									-
									<button class="btn btn-danger btn-sm" type="button" v-if="kuota.tersediasiang == '0'">{{
										kuota.tersediasiang }}</button>
									<button class="btn btn-success btn-sm" type="button" v-if="kuota.tersediasiang > 0">{{
										kuota.tersediasiang }}</button>
								</td>
								<td>
									<router-link :to="{ name: 'kuota.edit', params: { id: kuota.id } }">
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
					<b-pagination v-model="page" :total-rows="kuota.kuotas.total" :per-page="kuota.kuotas.per_page"
						aria-controls="kuotas" v-if="kuota.kuotas.data && kuota.kuotas.data.length > 0"></b-pagination>
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
		this.getKuotas();

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
			id: id,
		};
	},
	mounted() {
		this.$store.dispatch(SET_BREADCRUMB, [
			{ title: "Kuota" },
			{ title: "Data" }
		]);
	},
	computed: {
		...mapState(["kuota"]),
		page: {
			get() {
				return this.$store.state.kuota.page;
			},
			set(val) {
				this.$store.commit("kuota/SET_PAGE", val);
			}
		}
	},
	watch: {
		page() {
			this.getKuotas();
		},
		search() {
			this.getKuotas(this.search);
		},
		tgl() {
			this.$store.commit("kuota/SET_TGL", this.customFormatter(this.tgl));
			this.getKuotas(this.search);
		}
	},
	methods: {
		...mapActions("kuota", ["getKuotas", "removeKuota"]),
		deleteKuota(id) {

		},
		customFormatter(today) {
			return today;
		},
		customFormatter2(date) {
			let n;
			var day = moment(date).format('dddd');
			var date = moment(date).format('DD-MM-YYYY');
			switch (day) {
				case 'Sunday':
					n = 'Minggu';
					break;
				case 'Monday':
					n = 'Senin';
					break;
				case 'Tuesday':
					n = 'Selasa';
					break;
				case 'Wednesday':
					n = 'Rabu';
					break;
				case 'Thursday':
					n = 'Kamis';
					break;
				case 'Friday':
					n = 'Jumat';
					break;
				case 'Saturday':
					n = 'Sabtu';
					break;
			}
			return n + ', ' + date;
		},
	},
	components: {
		datepicker
	},
};
</script>
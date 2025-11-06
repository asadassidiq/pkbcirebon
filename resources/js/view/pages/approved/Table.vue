<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-lorry text-primary"></i>
                </span>
                <h3 class="card-label">Approved</h3>
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
                        <a class="btn btn-sm btn-icon btn-light-info mr-2" @click.prevent="reload"
                            title="reload data"><i class="flaticon2-reload"></i>
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
                            <th>Jenis Pendaftaran</th>
                            <th>Jenis Pengajuan</th>
                            <th>Status</th>
                            <th>Approved</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="approved in approved.approveds.data" :key="approved.uuid">
                            <td>{{ approved.noantrian }}</td>
                            <td>{{ approved.noregistrasikendaraan }}</td>
                            <td>{{ approved.nouji }}</td>
                            <td>{{ approved.nama }}</td>
                            <td>{{ approved.keterangan }}</td>
                            <td>{{ approved.type }}</td>
                            
                            <td v-if="approved.approved == '2'">Ditolak</td>
                            <td v-else-if="approved.approved == '1'">Approved</td>
                            <td v-else>Menunggu</td>
                            <td>{{ approved.name }}</td>
                            <td>
                                <router-link :to="{ name: 'approved.approved', params: { id: approved.uuid } }">
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
                    <b-pagination v-model="page" :total-rows="approved.approveds.total"
                        :per-page="approved.approveds.per_page" aria-controls="approveds"
                        v-if="approved.approveds.data && approved.approveds.data.length > 0"></b-pagination>
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
        // this.getApproveds();
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
            { title: "Approved" },
            { title: "Data" }
        ]);
    },
    computed: {
        ...mapState(["approved"]),
        page: {
            get() {
                return this.$store.state.approved.page;
            },
            set(val) {
                this.$store.commit("approved/SET_PAGE", val);
            }
        }
    },
    watch: {
        page() {
            this.getApproveds();
        },
        search() {
            this.getApproveds(this.search);
        },
        tgl() {
            this.$store.commit("approved/SET_TGL", this.customFormatter(this.tgl));
            this.getApproveds(this.search);
        },
    },
    methods: {
        ...mapActions("approved", ["getApproveds", "editPendaftaran"]),
        customFormatter(date) {
            return moment(date).format('YYYY-MM-DD');
        },
        reload() {
            this.getApproveds(this.search);
        },
    },
    components: {
        datepicker
    },
};
</script>
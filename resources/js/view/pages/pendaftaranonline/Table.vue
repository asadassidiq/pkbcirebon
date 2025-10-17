<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-lorry text-primary"></i>
                </span>
                <h3 class="card-label">Pendaftaran Online</h3>
            </div>
            <div class="card-toolbar">
                <div class="row">

                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <b-form-datepicker id="example-datepicker" v-model="tgl" locale="id"></b-form-datepicker>
                </div>
                <div class="col-3">
                    <select class="form-control" v-model="status">
                        <option value="1">Belum Verifikasi</option>
                        <option value="2">Verifikasi</option>
                        <option value="3">Semua</option>
                    </select>
                </div>
                <div class="col-4">
                    <input class="form-control" type="text" placeholder="serach" v-model="search" />
                </div>
                <div class="col-2">
                    <router-link
                        :to="{ name: 'pendaftaranonline.add' }"
                        class="btn btn-sm btn-icon btn-light-success mr-2"
                        ><i class="flaticon2-add"></i>
                    </router-link>

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
                                <th>Jenis Pendaftaran</th>
                                <th>No Uji</th>
                                <th>No Kendaraan</th>
                                <th>Waktu</th>
                                <th>Status</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="pendaftaran, index in pendaftaranonline.pendaftaranonlines.data" :key="pendaftaran.uuid">
                                <td>{{ index + 1 }}</td>
                                <td>{{ pendaftaran.keterangan }}</td>
                                <td>{{ pendaftaran.nouji }}</td>
                                <td>{{ pendaftaran.noregistrasikendaraan }}</td>
                                <td v-if="pendaftaran.waktu == '1'">Pagi</td>
                                <td v-else>Siang</td>
                                <td v-if="pendaftaran.status == '1'">terverifikasi</td>
                                <td v-else>belum diverifikasi</td>
                                <td>
                                    <router-link v-if="pendaftaran.status == '0'"
                                        :to="{ name: 'pendaftaranonline.approving', params: { id: pendaftaran.uuid } }">
                                        <i class="far fa-check-square text-success"></i>
                                    </router-link>
                                    <a href="javascript:void(0)" @click="print(pendaftaran.uuid)">
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
                    <b-pagination v-model="page" :total-rows="pendaftaranonline.pendaftaranonlines.total"
                        :per-page="pendaftaranonline.pendaftaranonlines.per_page" aria-controls="pendaftaranonlines" v-if="
                            pendaftaranonline.pendaftaranonlines.data &&
                            pendaftaranonline.pendaftaranonlines.data.length > 0
                        "></b-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            search: "",
            status: "3",
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
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Pendaftaran" },
            { title: "Online" }
        ]);
    },
    computed: {
        ...mapState(["pendaftaranonline"]),
        page: {
            get() {
                return this.$store.state.pendaftaranonline.page;
            },
            set(val) {
                this.$store.commit("pendaftaranonline/SET_PAGE", val);
            }
        }
    },
    watch: {
        page() {
            this.getPendaftaranOnlines();
        },
        search() {
            this.getPendaftarans(this.search);
        },
        tgl() {
            this.$store.commit("pendaftaranonline/SET_TGL", this.customFormatter(this.tgl));
            this.getPendaftaranOnlines(this.search);
        },
        status() {
            this.$store.commit("pendaftaranonline/SET_STATUS", this.status);
            this.getPendaftaranOnlines(this.search);
        },
    },
    methods: {
        ...mapActions("pendaftaranonline", ["getPendaftaranOnlines"]),
        deletePendaftaran(id) {

        },
        customFormatter(today) {
            return today;
        },
        print(id) {
            window.open('/cetak/' + id + '/pendaftaranonline', "_blank");
        },
        reload() {
            this.getPendaftaranOnlines(this.search);
        },
    },
    components: {

    },
};
</script>
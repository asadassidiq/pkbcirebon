<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-lorry text-primary"></i>
                </span>
                <h3 class="card-label">Perseorangan</h3>
            </div>
            <div class="card-toolbar">
                <div class="row">
                    <div class="col-7">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="serach"
                            v-model="search"
                        />
                    </div>
                    <div class="col-5">
                        <a
                            class="btn btn-sm btn-icon btn-light-info"
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
                                <th>Nama Akun</th>
                                <th>No Telp</th>
                                <th>Email</th>
                                <th>Jumlah Kendaraan</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(perseorangan, index) in perseorangan
                                    .perseorangans.data"
                                :key="perseorangan.id"
                            >
                                <td>{{ index + 1 }}</td>
                                <td>{{ perseorangan.name }}</td>
                                <td>{{ perseorangan.telepon }}</td>
                                <td>{{ perseorangan.email }}</td>
                                <td>
                                    {{ perseorangan.total_kendaraan ?? 0 }}
                                    <router-link
                                        :to="{
                                            name: 'perseorangan.datakendaraan',
                                            params: { id: perseorangan.uuid },
                                        }"
                                    >
                                        <i class="fa fa-edit text-success"></i>
                                    </router-link>
                                </td>
                                <td>
                                    <router-link
                                        :to="{
                                            name: 'perseorangan.edit',
                                            params: { id: perseorangan.uuid },
                                        }"
                                    >
                                        <i class="fa fa-eye text-success"></i>
                                    </router-link>
                                    <a
                                        href="javascript:void(0)"
                                        @click="
                                            deletePerseorangan(perseorangan.uuid)
                                        "
                                        data-toggle="tooltip"
                                        title="Hapus Perseorangan"
                                    >
                                        <i class="fas fa-trash text-danger"></i>
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
                        :total-rows="perseorangan.perseorangans.total"
                        :per-page="perseorangan.perseorangans.per_page"
                        aria-controls="perseorangans"
                        v-if="
                            perseorangan.perseorangans.data &&
                            perseorangan.perseorangans.data.length > 0
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
import { mapState,mapGetters,mapActions } from "vuex";
export default {
    created() {
        this.getPerseorangans(this.search);
    },
    data() {
        return {
            search: "",
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Perseorangan" },
            { title: "Data" },
        ]);
    },
    computed: {
        ...mapGetters(["currentNotifInfo"]),
        ...mapState(["perseorangan"]),
        page: {
            get() {
                return this.$store.state.perseorangan.page;
            },
            set(val) {
                this.$store.commit("perseorangan/SET_PAGE", val);
            },
        },
    },
    watch: {
        page() {
            this.getPerseorangans(this.search);
        },
        search() {
            this.getPerseorangans(this.search);
        },
    },
    methods: {
        ...mapActions("perseorangan", [
            "getPerseorangans",
            "removePerseorangan",
            "editPerseorangan",
        ]),
        deletePerseorangan(id) {
            Swal.fire({
                title: "Hapus Perseorangan?",
                text: "Anda yakin hapus data ini!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Iya, hapus ini!",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.removePerseorangan(id).then(() => {
                        Swal.fire(
                            "Deleted!",
                            "Perseorangan sudah terhapus.",
                            "success",
                        );
                        this.getPerseorangans();
                    });
                }
            });
        },
        caridata() {
            this.editPerseorangan(this.perseorangan.perseorangan.id).then(() => {
                this.$router.push({
                    name: "perseorangan.edit",
                    params: { id: this.perseorangan.perseorangan.id },
                });
            });
        },
        print(id) {
            window.open("/cetak/" + id + "/permohonan", "_blank");
        },
        reload() {
            this.getPerseorangans(this.search);
        },
    },
    components: {
        
    },
};
</script>

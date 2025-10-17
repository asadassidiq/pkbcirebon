<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-lorry text-primary"></i>
                </span>
                <h3 class="card-label">Jenis</h3>
            </div>
            <div class="card-toolbar">
                <div class="row">
                    <div class="col-9">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="serach"
                            v-model="search"
                        />
                    </div>
                    <div class="col-1 mr-2">
                        <router-link
                            :to="{ name: 'jenis.add' }"
                            class="btn btn-sm btn-icon btn-light-success"
                            ><i class="flaticon2-add"></i>
                        </router-link>
                    </div>
                    <div class="col-1">
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
            <div class="row">
                <div class="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Jenis</th>
                                <th>Klasifikasi</th>
                                <th>Kementrian</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(jenis, index) in jenis.jeniss.data"
                                :key="jenis.id"
                            >
                                <td>{{ index + 1 }}</td>
                                <td>{{ jenis.jenis }}</td>
                                <td>{{ jenis.klasifikasis }}</td>
                                <td>{{ jenis.jeniskendaraan }}</td>
                                <td>
                                    <router-link
                                        :to="{
                                            name: 'jenis.edit',
                                            params: { id: jenis.id },
                                        }"
                                    >
                                        <i class="fa fa-edit text-success"></i>
                                    </router-link>
                                    <a
                                        href="javascript:void(0)"
                                        @click="deleteJenis(jenis.id)"
                                        data-toggle="tooltip"
                                        title="Hapus Pendaftaran"
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
                        :total-rows="jenis.jeniss.total"
                        :per-page="jenis.jeniss.per_page"
                        aria-controls="jeniss"
                        v-if="jenis.jeniss.data && jenis.jeniss.data.length > 0"
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
    created() {
        this.getJeniss();
    },
    data() {
        return {
            // users: {}
            search: "",
            tgl: "",
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Jenis" },
            { title: "Data" },
        ]);
    },
    computed: {
        ...mapState(["jenis"]),
        page: {
            get() {
                return this.$store.state.jenis.page;
            },
            set(val) {
                this.$store.commit("jenis/SET_PAGE", val);
            },
        },
    },
    watch: {
        page() {
            this.getJeniss();
        },
        search() {
            this.getJeniss(this.search);
        },
    },
    methods: {
        ...mapActions("jenis", ["getJeniss", "removeJenis"]),
        deleteJenis(id) {
            Swal.fire({
                title: "Hapus Jenis?",
                text: "Anda yakin hapus data ini!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Iya, hapus ini!",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.removeJenis(id).then(() => {
                        Swal.fire(
                            "Deleted!",
                            "Jenis sudah terhapus.",
                            "success",
                        );
                        this.getJeniss();
                    });
                }
            });
        },
        reload() {
            this.getJeniss();
        },
    },
    components: {},
};
</script>

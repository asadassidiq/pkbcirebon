<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-lorry text-primary"></i>
                </span>
                <h3 class="card-label">Tipe</h3>
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
                            :to="{ name: 'tipe.add' }"
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
                                <th>Merek</th>
                                <th>Tipe</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(tipe, index) in tipe.tipes.data"
                                :key="tipe.id"
                            >
                                <td>{{ index + 1 }}</td>
                                <td>{{ tipe.merek }}</td>
                                <td>{{ tipe.tipe }}</td>
                                <td>
                                    <router-link
                                        :to="{
                                            name: 'tipe.edit',
                                            params: { id: tipe.id },
                                        }"
                                    >
                                        <i class="fa fa-edit text-success"></i>
                                    </router-link>
                                    <a
                                        href="javascript:void(0)"
                                        @click="deleteTipe(tipe.id)"
                                        data-toggle="tooltip"
                                        title="Hapus Data"
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
                        :total-rows="tipe.tipes.total"
                        :per-page="tipe.tipes.per_page"
                        aria-controls="tipes"
                        v-if="tipe.tipes.data && tipe.tipes.data.length > 0"
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
        this.getTipes();
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
            { title: "Tipe" },
            { title: "Data" },
        ]);
    },
    computed: {
        ...mapState(["tipe"]),
        page: {
            get() {
                return this.$store.state.tipe.page;
            },
            set(val) {
                this.$store.commit("tipe/SET_PAGE", val);
            },
        },
    },
    watch: {
        page() {
            this.getTipes();
        },
        search() {
            this.getTipes(this.search);
        },
    },
    methods: {
        ...mapActions("tipe", ["getTipes", "removeTipe"]),
        deleteTipe(id) {
            Swal.fire({
                title: "Hapus Tipe?",
                text: "Anda yakin hapus data ini!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Iya, hapus ini!",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.removeTipe(id).then(() => {
                        Swal.fire(
                            "Deleted!",
                            "Tipe sudah terhapus.",
                            "success",
                        );
                        this.getTipes();
                    });
                }
            });
        },
        reload() {
            this.getTipes();
        },
    },
    components: {},
};
</script>

<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-lorry text-primary"></i>
                </span>
                <h3 class="card-label">Merek</h3>
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
                            :to="{ name: 'merek.add' }"
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
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(merek, index) in merek.mereks.data"
                                :key="merek.id"
                            >
                                <td>{{ index + 1 }}</td>
                                <td>{{ merek.merek }}</td>
                                <td>
                                    <router-link
                                        :to="{
                                            name: 'merek.edit',
                                            params: { id: merek.id },
                                        }"
                                    >
                                        <i class="fa fa-edit text-success"></i>
                                    </router-link>
                                    <a
                                        href="javascript:void(0)"
                                        @click="deleteMerek(merek.id)"
                                        data-toggle="tooltip"
                                        title="Hapus Merek"
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
                        :total-rows="merek.mereks.total"
                        :per-page="merek.mereks.per_page"
                        aria-controls="mereks"
                        v-if="merek.mereks.data && merek.mereks.data.length > 0"
                    ></b-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2";
export default {
    created() {
        this.getMereks();
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
            { title: "Merek" },
            { title: "Data" },
        ]);
    },
    computed: {
        ...mapState(["merek"]),
        page: {
            get() {
                return this.$store.state.merek.page;
            },
            set(val) {
                this.$store.commit("merek/SET_PAGE", val);
            },
        },
    },
    watch: {
        page() {
            this.getMereks();
        },
        search() {
            this.getMereks(this.search);
        },
    },
    methods: {
        ...mapActions("merek", ["getMereks", "removeMerek"]),
        deleteMerek(id) {
            Swal.fire({
                title: "Hapus Merek?",
                text: "Anda yakin hapus data ini!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Iya, hapus ini!",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.removeMerek(id).then(() => {
                        Swal.fire(
                            "Deleted!",
                            "Merek sudah terhapus.",
                            "success",
                        );
                        this.getMereks();
                    });
                }
            });
        },
        reload() {
            this.getMereks();
        },
    },
    components: {},
};
</script>

<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-lorry text-primary"></i>
                </span>
                <h3 class="card-label">User</h3>
            </div>
            <div class="card-toolbar">
                <div class="row">
                    <div class="col-6">
                        <input class="form-control" type="text" placeholder="serach" v-model="search" />
                    </div>
                    <div class="col-6">
                        <router-link :to="{ name: 'user.add' }" class="btn btn-sm btn-icon btn-light-success mr-2"><i
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
                                <th>Nama</th>
                                <th>Role</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in user.users.data" :key="user.uuid">
                                <td>{{ index + 1 }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.role }}</td>
                                <td>
                                    <router-link :to="{
                                        name: 'user.edit',
                                        params: { id: user.uuid },
                                    }">
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
                    <b-pagination v-model="page" :total-rows="user.users.total" :per-page="user.users.per_page"
                        aria-controls="users" v-if="user.users.data && user.users.data.length > 0"></b-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import moment from "moment";
import { mapState, mapActions } from "vuex";
export default {
    created() {
        this.getUsers();
    },
    data() {
        return {
            // users: {}
            search: "",
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "User" },
            { title: "Data" },
        ]);
    },
    computed: {
        ...mapState(["user"]),
        page: {
            get() {
                return this.$store.state.user.page;
            },
            set(val) {
                this.$store.commit("user/SET_PAGE", val);
            },
        },
    },
    watch: {
        page() {
            this.getUsers();
        },
        search() {
            this.getUsers(this.search);
        },
    },
    methods: {
        ...mapActions("user", ["getUsers", "removeUser"]),
        deleteUser(id) { },
    },
    components: {
    },
};
</script>

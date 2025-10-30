<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <div class="card-heading">
                    <h3 class="panel-title">Edit User</h3>
                </div>
                <div class="panel-body">
                    <edit-form></edit-form>
                    <div class="form-group">
                        <button class="btn btn-primary btn-sm" @click.prevent="submit">
                            <i class="fa fa-save"></i> Update
                        </button>
                        <button class="btn btn-danger btn-sm" @click.prevent="back">
                            <i class="fa fa-arrow-left"></i> Kembali
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Swal from "sweetalert2";
import Form from "./Form1.vue";
export default {
    data() {
        return {
            statusUpdateKey: false,
        };
    },
    created() {
        this.editUser(this.$route.params.id).then(() => {
        });
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState("user", {
            user: state => state.user,
            pass: state => state.pass,
        }),
    },
    methods: {
        ...mapActions("user", ["editUser", "updateUser"]),
        submit() {
            this.updateUser(this.$route.params.id).then(() => {
                Swal.fire({
                    title: "",
                    text: "The application has been successfully edit!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
                this.$router.push({ name: "user.data" });
            });
        },
        back() {
            this.$router.push({ name: "user.data" });
        },
    },
    components: {
        "edit-form": Form
    }
};
</script>

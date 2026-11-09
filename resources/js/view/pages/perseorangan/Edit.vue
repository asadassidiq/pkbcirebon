<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <div class="card-heading">
                    <h3 class="panel-title">Edit Data Perseorangan</h3>
                </div>
                <div class="panel-body">
                    <edit-form></edit-form>
                    <div class="form-group">
                        <router-link :to="{ name: 'perseorangan.data' }" class="btn btn-secondary btn-sm">
                            <i class="fa fa-arrow-left"></i> Kembali
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Swal from "sweetalert2";
import Form from "./Form.vue";
export default {
    created() {
        this.editPerseorangan(this.$route.params.id);
    },
    methods: {
        ...mapActions("perseorangan", ["editPerseorangan", "updatePerseorangan"]),
        submit() {
            this.updatePerseorangan(this.$route.params.id).then(() => {
                Swal.fire({
                    title: "",
                    text: "The application has been successfully updated!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
                this.$router.push({ name: "perseorangan.data" });
            });
        }
    },
    components: {
        "edit-form": Form
    }
};
</script>

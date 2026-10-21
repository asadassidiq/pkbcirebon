<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-truck text-primary"></i>
                </span>
                <h3 class="card-label">Data Kendaraan</h3>
            </div>

            <div class="card-toolbar">
                <div class="row">
                    <div class="col-sm-8">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="serach"
                            v-model="search"
                        />
                    </div>
                    <div class="col-sm-1 mr-2">
                        <button
                            type="button"
                            class="btn btn-sm btn-icon btn-light-success"
                            @click="openAddModal"
                            title="Tambah data kendaraan"
                        >
                            <i class="flaticon2-add"></i>
                        </button>
                    </div>
                    <div class="col-sm-1 mr-2">
                        <a
                            class="btn btn-sm btn-icon btn-light-info"
                            @click.prevent="reload"
                            title="reload data"
                            ><i class="flaticon2-reload"></i>
                        </a>
                    </div>
                    <div class="col-sm-1">
                        <router-link
                            class="btn btn-sm btn-icon btn-light-primary"
                            :to="{ name: 'perusahaan.data', params: { id: perusahaanId } }"
                            title="Kembali ke data perusahaan"
                        >
                            <i class="flaticon2-back"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Plat Nomor</th>
                        <th>Nomor Uji</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(kendaraan, index) in perusahaan.kendaraans.data">
                        <td>{{ index + 1 }}</td>
                        <td>{{ kendaraan.noregistrasikendaraan }}</td>
                        <td>{{ kendaraan.nouji }}</td>
                        <td>
                            <button class="btn btn-sm btn-icon btn-light-success" @click="editKendaraan(kendaraan.id)">
                                <i class="fa fa-eye text-success"></i>
                            </button>
                            <button class="btn btn-sm btn-icon btn-light-danger" @click="deleteKendaraan(kendaraan.id)">
                                <i class="fas fa-trash text-danger"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="card-footer">
            <div class="pull-right">
                <div class="overflow-auto">
                    <b-pagination
                        v-model="page"
                        :total-rows="perusahaan.kendaraans.total"
                        :per-page="perusahaan.kendaraans.per_page"
                        aria-controls="perusahaans"
                        v-if="
                            perusahaan.kendaraans.data &&
                            perusahaan.kendaraans.data.length > 0
                        "
                    ></b-pagination>
                </div>
            </div>
        </div>

        <div
            v-if="showAddModal"
            class="modal d-block"
            tabindex="-1"
            role="dialog"
            style="background: rgba(0,0,0,0.3);"
        >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Tambah Kendaraan</h5>
                        <button type="button" class="close" @click="closeAddModal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="noregistrasikendaraan">Plat Nomor</label>
                                <input type="text" class="form-control" id="noregistrasikendaraan" v-model="newKendaraan.noregistrasikendaraan">
                            </div>
                            <div class="form-group">
                                <label for="nouji">Nomor Uji</label>
                                <input type="text" class="form-control" id="nouji" v-model="newKendaraan.nouji">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" @click="closeAddModal">Batal</button>
                        <button type="button" class="btn btn-primary" @click="submitKendaraan">Simpan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    data() {
        return {
            search: '',
            showAddModal: false,
        };
    },
    created() {
        const id = this.$route && this.$route.params ? this.$route.params.id : null;
        if (id) {
            this.getDatakendaraanOnline(id);
            console.log(this.kendaraans);
        }
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState("perusahaan", {
            perusahaan: state => state.perusahaan,
            newKendaraan: state => state.newKendaraan,
        }),
    },
    methods: {
        ...mapActions("perusahaan", ["getDatakendaraanOnline", "storeDatakendaraanOnline", "updateDatakendaraanOnline"]),
        reload() {
            const id = this.$route && this.$route.params ? this.$route.params.id : null;
            if (id) {
                this.getDatakendaraanOnline(id);
            }
        },
        openAddModal() {
            this.showAddModal = true;
        },
        closeAddModal() {
            this.showAddModal = false;
        },
        submitKendaraan() {
            this.newKendaraan.uuid = this.$route && this.$route.params ? this.$route.params.id : null;
            this.storeDatakendaraanOnline().then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Berhasil",
                    text: "Data kendaraan berhasil disimpan",
                });
                this.closeAddModal();
                this.reload();
            });
        },
        updateKendaraan(id) {
            this.newKendaraan.uuid = this.$route && this.$route.params ? this.$route.params.id : null;
            this.updateDatakendaraanOnline(id).then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Berhasil",
                    text: "Data kendaraan berhasil diperbarui",
                });
                this.closeAddModal();
                this.reload();
            });
        }
    },
};
</script>
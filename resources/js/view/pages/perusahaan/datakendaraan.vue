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
                    <div class="col-sm-9">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="serach"
                            v-model="search"
                        />
                    </div>
                    <div class="col-sm-2">
                        <button
                            type="button"
                            class="btn btn-sm btn-icon btn-light-success mr-2"
                            @click="openAddModal"
                            title="Tambah data kendaraan"
                        >
                            <i class="flaticon2-add"></i>
                        </button>

                        <a
                            class="btn btn-sm btn-icon btn-light-info mr-2"
                            @click.prevent="reload"
                            title="reload data"
                            ><i class="flaticon2-reload"></i>
                        </a>
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
                    <tr v-for="(kendaraan, index) in kendaraans" :key="kendaraan.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ kendaraan.plat_nomor }}</td>
                        <td>{{ kendaraan.nomor_uji }}</td>
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
    watch: {
        "$route.params.id": {
            immediate: true,
            handler(id) {
                if (id) {
                    this.getDatakendaraanOnline(id);
                }
            },
        },
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState("perusahaan", {
            perusahaan: state => state.perusahaan,
            kendaraans: state => state.kendaraans,
            newKendaraan: state => state.newKendaraan,
        }),
    },
    methods: {
        ...mapActions("perusahaan", ["getDatakendaraanOnline", "storeDatakendaraanOnline", "updateDatakendaraanOnline"]),
        reload() {
            const id = this.$route.params.id;
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
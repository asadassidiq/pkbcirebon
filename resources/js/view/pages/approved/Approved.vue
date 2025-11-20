<template>
    <div class="card card-custom card-sticky" id="kt_page_sticky_card">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">Kendaraan</h3>
            </div>
            <div class="card-toolbar">
                
            </div>
        </div>
        <b-collapse visible id="collapse-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label>Jenis Pendaftaran</label>
                            <input type="text" class="form-control  form-control-lg" name="width"
                                readonly v-model="identitaskendaraan.keterangan" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label> No Uji</label>
                            <input type="text" class="form-control  form-control-lg" name="width"
                                readonly placeholder="No Uji" v-model="identitaskendaraan.nouji" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label>No Kendaraan</label>
                            <input type="text" class="form-control  form-control-lg" name="width"
                                readonly placeholder=" No Kendaraan"
                                v-model="identitaskendaraan.noregistrasikendaraan" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label>No Rangka</label>
                            <input type="text" class="form-control form-control-solid form-control-lg" name="width"
                                readonly v-model="identitaskendaraan.norangka" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label>No Mesin</label>
                            <input type="text" class="form-control form-control-solid form-control-lg" name="width"
                                readonly v-model="identitaskendaraan.nomesin" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label>Merek</label>
                            <input type="text" class="form-control form-control-solid form-control-lg" name="width"
                                readonly placeholder="merek" v-model="identitaskendaraan.merek" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label>Tipe</label>
                            <input type="text" class="form-control form-control-solid form-control-lg" name="width"
                                readonly placeholder="tipe" v-model="identitaskendaraan.tipe" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label> Jenis </label>
                            <input type="text" class="form-control form-control-solid form-control-lg" name="width"
                                readonly placeholder="Jenis" v-model="identitaskendaraan.jenis" />
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label> Alasan </label>
                            <textarea class="form-control" rows="4" v-model="textareaAlasan"
                                readonly></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <hr />
                <div class="row" v-if="approved.type == 'Perubahan Data'">
                    <div class="col-sm-12">
                        <table class="table table-bordered">
                            <thead class="bg-warning text-white">
                                <tr>
                                <th>Field</th>
                                <th>Data Lama</th>
                                <th>Data Baru</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in approved.proposed_data" :key="index">
                                <td>{{ item.field }}</td>
                                <td class="text-danger">{{ item.lama }}</td>
                                <td class="text-success">{{ item.baru }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label><b>Persetujuan</b></label>
                            <div class="radio-inline">
                                <label class="radio radio-success">
                                <input type="radio" v-model="approved.approved" value="1" :disabled="!user.ap" />
                                <span></span>
                                Disetujui
                                </label>
                                <label class="radio radio-danger">
                                <input type="radio" v-model="approved.approved" value="2" :disabled="!user.ap" />
                                <span></span>
                                Ditolak
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea">Catatan</label>
                            <textarea class="form-control " v-model="approved.approval_notes" rows="3" :disabled="!user.ap"></textarea>
                        </div>
                    </div>
                    
                    <div class="col-12 text-right">
                        <button class="btn btn-sm btn-light-warning mr-2" @click="goBack">Close</button>
                        <button class="btn btn-primary btn-sm" v-if="user.ap == true" @click.prevent="submit">
                        <i class="fa fa-save"></i> Submit
                        </button>
                    </div>
                </div>
            </div>
        </b-collapse>
        <hr />
        <b-card 
            no-body 
            style="width: 100%; height: 120vh;"
            >
            <b-tabs card style="height: 100%;">
                <b-tab title="Preview Kartu Induk" active>
                <b-card-text class="p-0 d-flex flex-column" style="height: calc(100vh - 100px);">
                    <iframe
                    :src="`${iframeUrl}/cetak/${identitaskendaraan.uuid}/kartuinduk`"
                    style="flex: 1; width: 100%; border: none;"
                    ></iframe>
                </b-card-text>
                </b-tab>

                <b-tab title="Preview Surat" 
                v-if="[
                    'Numpang Uji Keluar', 
                    'Mutasi Keluar'
                ].includes(identitaskendaraan.keterangan)">
                <b-card-text class="p-0 d-flex flex-column" style="height: calc(100vh - 100px);">
                    <iframe
                    :src="`${iframeUrl}/cetak/${$identitaskendaraan.puuid}/surat`"
                    style="flex: 1; width: 100%; border: none;"
                    ></iframe>
                </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
    data() {
        return {
            user:[],
            textareaAlasan: "",
            image: 'no image.jpg',
            showPass: false,
            timestamp: Date.now(),
            iframeUrl: document.querySelector('meta[name="app-url"]').getAttribute('content'),
            size: {
                width: 200,
                height: 200,
            }
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Verifikasi" },
            { title: "Persizinan" }
        ]);
    },
    created() {
        this.editApproved(this.$route.params.id).then(() => {
            this.applySelection();
        });
        this.user = this.$store.state.profile.user_personal_info;
    },
    methods: {
        ...mapActions("approved", ["getIdentitaskendaraan", "editApproved","updateApproved"]),
        submit(){
            this.updateApproved(this.$route.params.id).then(() => {
                Swal.fire({
                    title: "",
                    text: "Berhasil Lanjut",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                    });
                    this.$router.push({ name: "approved.data" });
                });
        },
        applySelection() {
            this.textareaAlasan = this.identitaskendaraan.alasan.join("\n• ");
            if (this.textareaAlasan !== "") {
                this.textareaAlasan = "• " + this.textareaAlasan;
            }
        },
        goBack() {
            this.$router.go(-1);
        },
        togglePass() {
            this.showPass = !this.showPass;
        }
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState({
            identitaskendaraan: state => state.approved.identitaskendaraan,
            approved: state => state.approved.approved,
        }),
    },
    components: {
    },
};
</script>

<template>
    <div class="card card-custom card-sticky" id="kt_page_sticky_card">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">Kendaraan</h3>
            </div>
            <div class="card-toolbar">
                <button class="btn btn-sm btn-light-warning mr-2" @click="goBack">Close</button>
            </div>
        </div>
        <b-collapse visible id="collapse-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>Jenis Pendaftaran</label>
                            <input type="text" class="form-control  form-control-lg" name="width"
                                readonly v-model="identitaskendaraan.keterangan" />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label> No Uji</label>
                            <input type="text" class="form-control  form-control-lg" name="width"
                                readonly placeholder="No Uji" v-model="identitaskendaraan.nouji" />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>No Kendaraan</label>
                            <input type="text" class="form-control  form-control-lg" name="width"
                                readonly placeholder=" No Kendaraan"
                                v-model="identitaskendaraan.noregistrasikendaraan" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class=" col-4" v-if="identitaskendaraan.keterangan == 'Numpang Uji Keluar' || identitaskendaraan.keterangan == 'Mutasi Keluar' || identitaskendaraan.keterangan == 'Persetujuan Numpang Uji Masuk'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_stnk" v-model="surat.v_stnk" :true-value="1" :false-value="0" :disabled="user.role == 'KEPALA'"/>
                                <span></span>
                                STNK asli dan masih berlaku
                            </label>
                        </div>
                    </div>
                    <div class="col-4"v-if="identitaskendaraan.keterangan == 'Mutasi Keluar'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_kartuinduk" v-model="surat.v_kartuinduk" :true-value="1" :false-value="0"/>
                                <span></span>
                                Kartu Induk Pemeriksaan 
                            </label>
                        </div>
                    </div>
                    <div class="col-4" v-if="identitaskendaraan.keterangan == 'Numpang Uji Keluar' || identitaskendaraan.keterangan == 'Mutasi Keluar' || identitaskendaraan.keterangan == 'Persetujuan Numpang Uji Masuk'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_smartcard" v-model="surat.v_smartcard" :true-value="1" :false-value="0" :disabled="user.role == 'KEPALA'"/>
                                <span></span>
                                Kartu Uji
                            </label>
                        </div>
                    </div>
                    <div class="col-4" v-if="identitaskendaraan.keterangan == 'Mutasi Keluar'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_srut" v-model="surat.v_srut" :true-value="1" :false-value="0" :disabled="user.role == 'KEPALA'"/>
                                <span></span>
                                SRUT
                            </label>
                        </div>
                    </div>
                    <div class="col-4" v-if="identitaskendaraan.keterangan == 'Mutasi Keluar'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_riwayat" v-model="surat.v_riwayat" :true-value="1" :false-value="0" :disabled="user.role == 'KEPALA'"/>
                                <span></span>
                                Riwayat dan Dokumen Pendukung Lainnya 
                            </label>
                        </div>
                    </div>
                    
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label><b>Persetujuan Verifikator</b></label>
                            <div class="radio-inline">
                                <label class="radio radio-success">
                                <input type="radio" v-model="surat.posapproved" value="1" />
                                <span></span>
                                Disetujui
                                </label>
                                <label class="radio radio-danger">
                                <input type="radio" v-model="surat.posapproved" value="0" />
                                <span></span>
                                Ditolak
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea">Catatan</label>
                            <textarea class="form-control " v-model="surat.catatan" rows="3"></textarea>
                        </div>
                    </div>

                    <div class="col-sm-4" v-if="user.role == 'KEPALA'">
                        <div class="form-group">
                            <label>Pass Key</label>
                            <div class="input-group">
                                <input
                                :type="showPass ? 'text' : 'password'"
                                class="form-control form-control-lg"
                                v-model="surat.passkey"
                                name="fake_passkey"
                                autocomplete="off"
                                />
                                <div class="input-group-append">
                                <span class="input-group-text" @click="togglePass">
                                    <i :class="showPass ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-12 text-right">
                        <button class="btn btn-primary btn-sm" @click.prevent="submit">
                        <i class="fa fa-save"></i> Submit
                        </button>
                    </div>
                </div>
            </div>
        </b-collapse>
        <hr />
        <div class="card-body">
            <!-- <approved-form></approved-form> -->
            <div style="width: 100%; height: 100vh;">
                <iframe
                :src="iframeUrl+'/cetak/'+identitaskendaraan.uuid+'/kartuinduk'"
                style="width: 100%; height: 100%; border: none;"
                ></iframe>
            </div>
        </div>
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
        this.editApproved(this.$route.params.id);
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
            surat: state => state.approved.surat,
        }),
    },
    components: {
    },
};
</script>

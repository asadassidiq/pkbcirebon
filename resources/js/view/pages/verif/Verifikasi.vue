<template>
    <div class="card card-custom card-sticky" id="kt_page_sticky_card">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">Kendaraan</h3>
            </div>
            <div class="card-toolbar">
                <router-link :to="{ name: 'pendaftaran.edit', params: { id: this.$route.params.id } }" v-if="user.role == 'PENGUJI' || user.role == 'ADMIN'"
                    class="btn btn-sm btn-light-success">Datakendaraan
                </router-link>
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
                                <input type="radio" v-model="surat.posverif" value="1" />
                                <span></span>
                                Disetujui
                                </label>
                                <label class="radio radio-danger">
                                <input type="radio" v-model="surat.posverif" value="0" />
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
        <div class="card-body" v-if="identitaskendaraan.keterangan == 'Numpang Uji Keluar' || identitaskendaraan.keterangan == 'Mutasi Keluar' || identitaskendaraan.keterangan == 'Laporan Pemeriksaan Kendaraan'">
            <!-- <verif-form></verif-form> -->
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
            { title: "Verifikator" },
            { title: "Persuratan" }
        ]);
    },
    created() {
        this.getIdentitaskendaraan(this.$route.params.id);
        this.editVerif2(this.$route.params.id);
        this.user = this.$store.state.profile.user_personal_info;
    },
    methods: {
        ...mapActions("verif", ["getIdentitaskendaraan", "editVerif2","submitApprove","submitApproving"]),
        submit(){
            if(this.user.role == 'KEPALA'){
                if(this.surat.passkey.length == 0){
                    Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: 'Akses ditolak. Anda tidak memiliki izin!!',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.$refs.passkey.focus()
                            };
                        });
                }else{
                    this.submitApproving(this.$route.params.id).then(() => {
                    Swal.fire({
                        title: "",
                        text: "Berhasil, silahkan cetak Surat",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                        });
                        this.goBack();
                    });
                }
            }else{
                this.submitApprove(this.$route.params.id).then(() => {
                Swal.fire({
                    title: "",
                    text: "Berhasil Lanjut ke Kepala UPT",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                    });
                    this.$router.push({ name: "verif.data" });
                });
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
            identitaskendaraan: state => state.verif.identitaskendaraan,
            surat: state => state.verif.surat,
        }),
    },
    components: {
    },
};
</script>

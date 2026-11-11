<template>
    <div class="card card-custom card-sticky" id="kt_page_sticky_card">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">Data Kendaraan</h3>
            </div>
        </div>
        <b-collapse visible id="collapse-3">
            <div class="card-body">
                <div class="row compact-form-row">
                    <div class="col-sm-4">
                        <div class="form-group">
                        <label>Tanggal Pendaftaran</label>
                        <b-form-datepicker id="tglpendaftaranonline" v-model="pendaftaranonline.tglpendaftaran"
                            locale="id" :disabled="true"></b-form-datepicker>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label class="text-warning">Jenis Pelayanan</label>
                            <select class="form-control" v-model="pendaftaranonline.keterangan">
                                <option selected="selected" value="Uji Pertama">Uji Pertama</option>
                                <option value="Uji Berkala">Uji Berkala</option>
                                <option value="Numpang Uji Masuk">Numpang Uji Masuk</option>
                                <option value="Numpang Uji Keluar">Numpang Uji Keluar</option>
                                <option value="Mutasi Masuk">Mutasi Masuk</option>
                                <option value="Mutasi Keluar">Mutasi Keluar</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label> No Uji</label>
                            <input type="text" class="form-control  form-control-lg" name="nouji"
                                readonly placeholder="No Uji" v-model="pendaftaranonline.nouji" />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>No Kendaraan</label>
                            <input type="text" class="form-control  form-control-lg" name="noregistrasikendaraan"
                                readonly placeholder=" No Kendaraan"
                                v-model="pendaftaranonline.noregistrasikendaraan" :disabled="true"/>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>Nama Pemohon</label>
                            <input type="text" class="form-control  form-control-lg" name="namapemohon"
                                readonly placeholder="Nama Pemohon"
                                v-model="pendaftaranonline.namapemohon" :disabled="true"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="pendaftaranonline.status_data == '1'">
                        <div class="form-group">
                            <label>Nama Pemilik</label>
                            <input type="text" class="form-control  form-control-lg" name="nama"
                                readonly placeholder="Nama"
                                v-model="pendaftaranonline.nama" :disabled="true"/>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>No Identitas Pemilik</label>
                            <input type="text" class="form-control  form-control-lg" name="noidentitaspemilik"
                                readonly placeholder="No Identitas Pemilik"
                                v-model="pendaftaranonline.noidentitaspemilik" :disabled="true"/>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>No Telp</label>
                            <input type="text" class="form-control  form-control-lg" name="notelp"
                                readonly placeholder="No Telp"
                                v-model="pendaftaranonline.notelp" :disabled="true"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="pendaftaranonline.status_data == '1'">
                        <div class="form-group">
                            <label>Merek</label>
                            <input type="text" class="form-control  form-control-lg" name="merek"
                                readonly v-model="pendaftaranonline.merek"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="pendaftaranonline.status_data == '1'">
                        <div class="form-group">
                            <label>Tipe</label>
                            <input type="text" class="form-control  form-control-lg" name="tipe"
                                readonly v-model="pendaftaranonline.tipe"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="pendaftaranonline.status_data == '1'">
                        <div class="form-group">
                            <label>Jenis</label>
                            <input type="text" class="form-control  form-control-lg" name="jenis"
                                readonly v-model="pendaftaranonline.jenis"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="pendaftaranonline.status_data == '1'">
                        <div class="form-group">
                            <label>Model</label>
                            <input type="text" class="form-control  form-control-lg" name="subjenis"
                                readonly v-model="pendaftaranonline.subjenis"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="pendaftaranonline.status_data == '1'">
                        <div class="form-group">
                            <label>No Rangka</label>
                            <input type="text" class="form-control  form-control-lg" name="norangka"
                                readonly v-model="pendaftaranonline.norangka"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="pendaftaranonline.status_data == '1'">
                        <div class="form-group">
                            <label>No Mesin</label>
                            <input type="text" class="form-control  form-control-lg" name="nomesin"
                                readonly v-model="pendaftaranonline.nomesin"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="pendaftaranonline.status_data == '1'">
                        <div class="form-group">
                            <label>Tahun Pembuatan</label>
                            <input type="text" class="form-control  form-control-lg" name="thpembuatan"
                                readonly v-model="pendaftaranonline.thpembuatan"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="pendaftaranonline.thpembuatan > 2019">
                        <div class="form-group">
                            <label class="text-warning">No Sertifikat Registrasi</label>
                            <input type="text" class="form-control  form-control-lg" name="nosertifikatreg"
                                v-model="pendaftaranonline.nosertifikatreg"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="pendaftaranonline.thpembuatan > 2019">
                        <div class="form-group">
                            <label class="text-warning">Tgl Sertifikat Registrasi</label>
                            <b-form-datepicker id="tglsertifikatreg" v-model="pendaftaranonline.tglsertifikatreg"
                                locale="id"></b-form-datepicker>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label class="text-warning">Tgl STNK</label>
                            <b-form-datepicker id="tgl_registrasikendaraan" v-model="pendaftaranonline.tgl_registrasikendaraan"
                                locale="id"></b-form-datepicker>
                        </div>
                    </div>
                    <div class="col-sm-4" >
                        <div class="form-group">
                            <label class="text-warning">No Antrian</label>
                            <input type="number" min="0" max="999" class="form-control  form-control-lg" name="noantrian"
                                v-model="pendaftaranonline.noantrian"/>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label class="text-warning">Catatan Pendaftaran</label>
                            <textarea class="form-control  form-control-lg" name="catatan"
                                v-model="pendaftaranonline.catatan"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-12" v-if="pendaftaranonline.status_data == '2'">
                        <div class="form-group">
                            <label>Catatan Sistem</label>
                            <textarea class="form-control  form-control-lg" name="catatansistem"
                                readonly v-model="pendaftaranonline.catatansistem"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-12 text-center">
                        <h3 v-if="pendaftaranonline.status_data == '0'" class="text-danger">Data Kendaraan Belum terdata di Database</h3>
                        <h3 v-else-if="pendaftaranonline.status_data == '2'" class="text-danger">Data Kendaraan tidak lengkap di Database</h3>
                        <h3 v-else-if="pendaftaranonline.status_data == '1'" class="text-success">Data Kendaraan terdata di Database</h3>
                    </div>
                </div>
            </div>
            <div class="hr-with-text">
                <span>Verifikasi Kelengkapan Berkas</span>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class=" col-4">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_stnk" v-model="pendaftaranonline.v_stnk" :true-value="1" :false-value="0"/>
                                <span></span>
                                STNK asli yang masih berlaku
                            </label>
                        </div>
                    </div>
                    <div class="col-4" v-if="pendaftaranonline.keterangan == 'Numpang Uji Keluar' || pendaftaranonline.keterangan == 'Uji Berkala' || pendaftaranonline.keterangan == 'Rusak' || pendaftaranonline.keterangan == 'Mutasi Masuk'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_smartcard" v-model="pendaftaranonline.v_smartcard" :true-value="1" :false-value="0"/>
                                <span></span>
                                Kartu Uji
                            </label>
                        </div>
                    </div>
                    <div class="col-4" v-if="pendaftaranonline.keterangan == 'Uji Pertama'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_srut" v-model="pendaftaranonline.v_srut" :true-value="1" :false-value="0"/>
                                <span></span>
                                SRUT
                            </label>
                        </div>
                    </div>
                    <div class="col-4" v-if="pendaftaranonline.keterangan == 'Mutasi Masuk'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_riwayat" v-model="pendaftaranonline.v_suratketerangan" :true-value="1" :false-value="0"/>
                                <span></span>
                                Surat rekomendasi mutasi dari unit pengujian daerah asal
                            </label>
                        </div>
                    </div>
                    <div class="col-4" v-if="pendaftaranonline.keterangan == 'Numpang Uji Masuk'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_riwayat" v-model="pendaftaranonline.v_suratketerangan" :true-value="1" :false-value="0"/>
                                <span></span>
                                Surat rekomendasi numpang uji dari unit pengujian daerah asal
                            </label>
                        </div>
                    </div>
                    
                    <div class="col-12 text-right">
                        <button class="btn btn-sm btn-light-danger mr-2" @click="goBack">Close</button>

                        <button class="btn btn-primary btn-sm mr-2" @click.prevent="submit(1)" v-if="pendaftaranonline.status_data == 1">
                        <i class="fa fa-save"></i> Simpan
                        </button>
                        <button class="btn btn-warning btn-sm mr-2" @click.prevent="submit(0)" v-if="pendaftaranonline.status_data == 0 || pendaftaranonline.status_data == 2">
                        <i class="fa fa-save"></i> Simpan dan Lengkapi data
                        </button>
                        <button class="btn btn-warning btn-sm mr-2" @click.prevent="submit(2)">
                        <i class="fa fa-save"></i> Simpan dan Perubahan data
                        </button>
                        <button class="btn btn-danger btn-sm mr-2" @click.prevent="$bvModal.show('reschedule')">
                        <i class="fa fa-calendar"></i> Reschedule
                        </button>
                        
                    </div>
                </div>
            </div>
        </b-collapse>
        <b-modal id="reschedule" title="Reschedule" @ok="submitReschedule">
            <div class="form-group">
                <label for="reschedule-date">Tanggal Pendaftaran Online akan diubah</label>
                <b-form-datepicker id="tglpendaftaran" v-model="pendaftaranonline.tglpendaftaran"
                locale="id"></b-form-datepicker>
            </div>
            <div>
                <label for="catatan">Catatan Pendaftaran</label>
                <textarea class="form-control" id="catatan" v-model="pendaftaranonline.catatan"></textarea>
            </div>
        </b-modal>
    </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
    data() {
        return {
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Verifikasi Kendaraan" },
            { title: "Pendaftaran Online" }
        ]);
    },
    created() {
        this.editPendaftaranOnline(this.$route.params.id);
    },
    methods: {
        ...mapActions("pendaftaranonline", ["editPendaftaranOnline","submitApprove","reschedulePendaftaranOnline","complateDataandApprove"]),
        checkBerkas() {
            if(this.pendaftaranonline.keterangan == 'Uji Pertama'){
                if(!this.pendaftaranonline.v_stnk || !this.pendaftaranonline.v_srut) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Berkas belum lengkap',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    return false;
                }
            }else if(this.pendaftaranonline.keterangan == 'Uji Berkala'){
                if(!this.pendaftaranonline.v_stnk || !this.pendaftaranonline.v_smartcard) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Berkas belum lengkap',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    return false;
                }
            }else if(this.pendaftaranonline.keterangan == 'Numpang Uji Masuk'){
                if(!this.pendaftaranonline.v_stnk || !this.pendaftaranonline.v_smartcard || !this.pendaftaranonline.v_suratketerangan) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Berkas belum lengkap',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    return false;
                }
            }else if(this.pendaftaranonline.keterangan == 'Mutasi Masuk'){
                if(!this.pendaftaranonline.v_stnk || !this.pendaftaranonline.v_smartcard || !this.pendaftaranonline.v_suratketerangan) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Berkas belum lengkap',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    return false;
                }
            }else if(this.pendaftaranonline.keterangan == 'Numpang Uji Keluar'){
                if(!this.pendaftaranonline.v_stnk || !this.pendaftaranonline.v_smartcard) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Berkas belum lengkap',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    return false;
                }
            }else if(this.pendaftaranonline.keterangan == 'Mutasi Keluar'){
                if(!this.pendaftaranonline.v_stnk || !this.pendaftaranonline.v_smartcard) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Berkas belum lengkap',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    return false;
                }
            }
            return true;
        },
        submit(status){
            if(!this.checkBerkas()) return;
            if(status == 2 || status == 0){
                this.complateDataandApprove().then(() => {
                    if(this.statusProcess)
                        this.$router.push({ name: "pendaftaran.edit",params: { id: this.pendaftaranonline.uuid } });
                });
            }else if(status == 1){
                this.complateDataandApprove().then(() => {
                    if(this.statusProcess)
                        this.$router.push({ name: "pendaftaranonline.data" });
                });
            }else {
                Swal.fire({
                    icon: 'warning',
                    title: 'error',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        submitReschedule() {
            this.reschedulePendaftaranOnline().then(() => {
                if(this.statusProcess)
                    this.$router.push({ name: "pendaftaranonline.data" });
            });
        },
        goBack() {
            this.$router.go(-1);
        },
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState({
            pendaftaranonline: state => state.pendaftaranonline.pendaftaranonline,
            statusProcess: state => state.pendaftaranonline.statusProcess,
            uuid: state => state.pendaftaranonline.uuid,
        }),
    },
    components: {
    },
};
</script>

<style scoped>
.compact-form-row > [class*="col-"] {
    margin-bottom: 0.025rem;
}

.compact-form-row .form-group {
    margin-bottom: 0.025rem;
}

.compact-form-row label {
    margin-bottom: 0.05rem;
}
</style>

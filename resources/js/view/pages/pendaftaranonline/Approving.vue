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
                            <label>Jenis Pelayanan</label>
                            <input type="text" class="form-control  form-control-lg" name="keterangan"
                                readonly v-model="pendaftaranonline.keterangan" />
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
                    <div class="col-sm-12" v-if="pendaftaranonline.status_data == '2'">
                        <div class="form-group">
                            <label>Catatan</label>
                            <textarea class="form-control  form-control-lg" name="catatan"
                                readonly v-model="pendaftaranonline.catatan"></textarea>
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
                                <input type="checkbox" name="v_stnk" v-model="pendaftaranonline.v_stnk" :true-value="1" :false-value="0" :disabled="true"
                                />
                                <span></span>
                                STNK asli dan masih berlaku
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
                                Surat keterangan / persetujuan mutasi dari daerah asal dan kelengkapannya
                            </label>
                        </div>
                    </div>
                    <div class="col-4" v-if="pendaftaranonline.keterangan == 'Numpang Uji Masuk'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_riwayat" v-model="pendaftaranonline.v_suratketerangan" :true-value="1" :false-value="0"/>
                                <span></span>
                                Surat keterangan / persetujuan Numpang uji dari daerah asal 
                            </label>
                        </div>
                    </div>
                    
                    <div class="col-12 text-right">
                        <button class="btn btn-sm btn-light-warning mr-2" @click="goBack">Close</button>

                        <button class="btn btn-primary btn-sm" @click.prevent="submit">
                        <i class="fa fa-save"></i> Submit
                        </button>
                    </div>
                </div>
            </div>
        </b-collapse>
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
        ...mapActions("pendaftaranonline", ["editPendaftaranOnline","submitApprove"]),
        submit(){
            this.submitApprove().then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    console.log(this.uuid);
                    this.$router.push({ name: "pendaftaran.edit",params: { id: this.uuid } });
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
            uuid: state => state.pendaftaranonline.uuid,
        }),
    },
    components: {
    },
};
</script>

<style scoped>
.compact-form-row > [class*="col-"] {
    margin-bottom: 0.45rem;
}

.compact-form-row .form-group {
    margin-bottom: 0.4rem;
}

.compact-form-row label {
    margin-bottom: 0.25rem;
}
</style>

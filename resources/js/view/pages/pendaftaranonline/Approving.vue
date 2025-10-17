<template>
    <div class="card card-custom card-sticky" id="kt_page_sticky_card">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">Data Kendaraan</h3>
            </div>
        </div>
        <b-collapse visible id="collapse-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                        <label>Tanggal Pendaftaran</label>
                        <b-form-datepicker id="tglpendaftaranonline" v-model="approve.tglpendaftaran"
                            locale="id" :disabled="true"></b-form-datepicker>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>Jenis Pendaftaran</label>
                            <input type="text" class="form-control  form-control-lg" name="keterangan"
                                readonly v-model="approve.keterangan" />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                        <label>Waktu</label>
                        <select class="form-control" v-model="approve.waktu" :disabled="true">
                            <option value="1">Pagi</option>
                            <option value="2">Siang</option>
                        </select>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label> No Uji</label>
                            <input type="text" class="form-control  form-control-lg" name="nouji"
                                readonly placeholder="No Uji" v-model="approve.nouji" />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>No Kendaraan</label>
                            <input type="text" class="form-control  form-control-lg" name="noregistrasikendaraan"
                                readonly placeholder=" No Kendaraan"
                                v-model="approve.noregistrasikendaraan" :disabled="true"/>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>Nama Pemohon</label>
                            <input type="text" class="form-control  form-control-lg" name="namapemohon"
                                readonly placeholder="Nama Pemohon"
                                v-model="approve.namapemohon" :disabled="true"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="approve.status_data == '1'">
                        <div class="form-group">
                            <label>Nama Pemilik</label>
                            <input type="text" class="form-control  form-control-lg" name="nama"
                                readonly placeholder="Nama"
                                v-model="approve.nama" :disabled="true"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="approve.status_data == '1'">
                        <div class="form-group">
                            <label>Alamat</label>
                            <input type="text" class="form-control  form-control-lg" name="alamat"
                                readonly placeholder="Alamat"
                                v-model="approve.alamat" :disabled="true"/>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>No Telp</label>
                            <input type="text" class="form-control  form-control-lg" name="notelp"
                                readonly placeholder="No Telp"
                                v-model="approve.notelp" :disabled="true"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="approve.status_data == '1'">
                        <div class="form-group">
                            <label>Merek</label>
                            <input type="text" class="form-control  form-control-lg" name="merek"
                                readonly v-model="approve.merek"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="approve.status_data == '1'">
                        <div class="form-group">
                            <label>Tipe</label>
                            <input type="text" class="form-control  form-control-lg" name="tipe"
                                readonly v-model="approve.tipe"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="approve.status_data == '1'">
                        <div class="form-group">
                            <label>Jenis</label>
                            <input type="text" class="form-control  form-control-lg" name="jenis"
                                readonly v-model="approve.jenis"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="approve.status_data == '1'">
                        <div class="form-group">
                            <label>Model</label>
                            <input type="text" class="form-control  form-control-lg" name="subjenis"
                                readonly v-model="approve.jenis"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="approve.status_data == '1'">
                        <div class="form-group">
                            <label>No Rangka</label>
                            <input type="text" class="form-control  form-control-lg" name="norangka"
                                readonly v-model="approve.norangka"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="approve.status_data == '1'">
                        <div class="form-group">
                            <label>No Mesin</label>
                            <input type="text" class="form-control  form-control-lg" name="nomesin"
                                readonly v-model="approve.nomesin"/>
                        </div>
                    </div>
                    <div class="col-sm-4" v-if="approve.status_data == '1'">
                        <div class="form-group">
                            <label>Tahun Pembuatan</label>
                            <input type="text" class="form-control  form-control-lg" name="thpembuatan"
                                readonly v-model="approve.thpembuatan"/>
                        </div>
                    </div>
                    <div class="col-sm-12 text-center">
                        <h3 v-if="approve.status_data == '0'" class="text-danger">Data Kendaraan Belum terdata di Database</h3>
                        <h3 v-if="approve.status_data == '1'" class="text-success">Data Kendaraan terdata di Database</h3>
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
                                <input type="checkbox" name="v_stnk" v-model="approve.v_stnk" :true-value="1" :false-value="0" :disabled="true"
                                />
                                <span></span>
                                STNK asli dan masih berlaku
                            </label>
                        </div>
                    </div>
                    <div class="col-4" v-if="approve.keterangan == 'Numpang Uji Keluar' || approve.keterangan == 'Uji Berkala' || approve.keterangan == 'Rusak' || approve.keterangan == 'Mutasi Masuk'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_smartcard" v-model="approve.v_smartcard" :true-value="1" :false-value="0"/>
                                <span></span>
                                Kartu Uji
                            </label>
                        </div>
                    </div>
                    <div class="col-4" v-if="approve.keterangan == 'Uji Pertama'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_srut" v-model="approve.v_srut" :true-value="1" :false-value="0"/>
                                <span></span>
                                SRUT
                            </label>
                        </div>
                    </div>
                    <div class="col-4" v-if="approve.keterangan == 'Mutasi Masuk'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_riwayat" v-model="approve.v_suratketerangan" :true-value="1" :false-value="0"/>
                                <span></span>
                                Surat keterangan / persetujuan mutasi dari daerah asal dan kelengkapannya
                            </label>
                        </div>
                    </div>
                    <div class="col-4" v-if="approve.keterangan == 'Numpang Uji Masuk'">
                        <div class="checkbox-list">
                            <label class="checkbox">
                                <input type="checkbox" name="v_riwayat" v-model="approve.v_suratketerangan" :true-value="1" :false-value="0"/>
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
            approve: state => state.pendaftaranonline.approve,
            uuid: state => state.pendaftaranonline.uuid,
        }),
    },
    components: {
    },
};
</script>

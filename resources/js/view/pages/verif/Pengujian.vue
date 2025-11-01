<template>
    <div class="card card-custom card-sticky" id="kt_page_sticky_card">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">Kendaraan</h3>
            </div>
            <div class="card-toolbar">
                <router-link :to="{
                    name: 'datakendaraan.edit',
                    params: { id: identitaskendaraan.uuid },
                }" class="btn btn-sm btn-light-success">Datakendaraan
                </router-link>
                <b-button v-b-toggle.collapse-3 class="btn btn-icon btn-circle btn-sm btn-light-primary mr-1">
                    <i class="ki ki-arrow-down icon-nm"></i>
                </b-button>
                <button class="btn btn-primary btn-sm" @click.prevent="showModalVerif">
                    <i class="fa fa-save"></i> Save
                </button>
            </div>
        </div>
        <b-collapse visible id="collapse-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label> No Uji</label>
                            <input type="text" class="form-control form-control-solid form-control-lg" name="width"
                                readonly placeholder="No Uji" v-model="identitaskendaraan.nouji" />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>No Kendaraan</label>
                            <input type="text" class="form-control form-control-solid form-control-lg" name="width"
                                readonly placeholder=" No Kendaraan" v-model="identitaskendaraan.noregistrasikendaraan
                                    " />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>Jenis Pendaftaran</label>
                            <input type="text" class="form-control form-control-solid form-control-lg" name="width"
                                readonly v-model="identitaskendaraan.keterangan" />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>No Rangka</label>
                            <input type="text" class="form-control form-control-solid form-control-lg" name="width"
                                readonly v-model="identitaskendaraan.norangka" />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label>No Mesin</label>
                            <input type="text" class="form-control form-control-solid form-control-lg" name="width"
                                readonly v-model="identitaskendaraan.nomesin" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label> JBB </label>
                            <input type="text" class="form-control form-control-solid form-control-lg" name="length"
                                readonly placeholder="JBB" v-model="identitaskendaraan.jbb" />
                        </div>
                    </div>
                </div>
                <div class="row">
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
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label> Peruntukan</label>
                            <input type="text" class="form-control form-control-solid form-control-lg" name="length"
                                readonly placeholder="Peruntukan" v-model="identitaskendaraan.peruntukan" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12">
                        <h2>Foto Kendaraan Belum Verif</h2>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center">
                        <img v-bind="size" :src="'/tmp_images/' +
                            identitaskendaraan.nouji +
                            '-tampakdepan.jpg?r=' + timestamp"
                            @error="fotoKosong1 = true"
                            @load="fotoKosong1 = false"/>
                        <p>Tampak Depan</p>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center">
                        <img v-bind="size" :src="'/tmp_images/' +
                            identitaskendaraan.nouji +
                            '-tampakbelakang.jpg?r=' + timestamp
                            " />
                        <p>Tampak Belakang</p>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center">
                        <img v-bind="size" :src="'/tmp_images/' +
                            identitaskendaraan.nouji +
                            '-tampakkanan.jpg?r=' + timestamp
                            " />
                        <p>Tampak Kanan</p>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center">
                        <img v-bind="size" :src="'/tmp_images/' +
                            identitaskendaraan.nouji +
                            '-tampakkiri.jpg?r=' + timestamp
                            " />
                        <p>Tampak Kiri</p>
                    </div>
                </div><div class="row">
                    <div class="col-sm-12">
                        <h2>Foto Kendaraan Verif</h2>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center">
                        <img v-bind="size" :src="'/normal_images/' +
                            identitaskendaraan.nouji +
                            '-tampakdepan.jpg?r=' + timestamp"
                            @error="fotoKosong2 = true"
                            @load="fotoKosong2 = false"
                            />
                        <p>Tampak Depan</p>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center">
                        <img v-bind="size" :src="'/normal_images/' +
                            identitaskendaraan.nouji +
                            '-tampakbelakang.jpg?r=' + timestamp
                            " />
                        <p>Tampak Belakang</p>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center">
                        <img v-bind="size" :src="'/normal_images/' +
                            identitaskendaraan.nouji +
                            '-tampakkanan.jpg?r=' + timestamp
                            " />
                        <p>Tampak Kanan</p>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center">
                        <img v-bind="size" :src="'/normal_images/' +
                            identitaskendaraan.nouji +
                            '-tampakkiri.jpg?r=' + timestamp
                            " />
                        <p>Tampak Kiri</p>
                    </div>
                    <div class="col-md-12 col-sm-12 text-center">
                        <a
                            class="btn btn-sm btn-primary"
                            @click.prevent="uploadfoto"
                            ><i class="flaticon2-refresh"></i>Upload Foto
                        </a>
                        <button
                            class="btn btn-sm btn-warning"
                            @click.prevent="ulangiFotoKendaraan"
                        >
                            <i class="flaticon2-refresh"></i>Ulangi Foto
                        </button>
                    </div>
                </div>
            </div>
        </b-collapse>
        <hr />
        <div class="card-body">
            <verif-form></verif-form>
        </div>
    
        <b-modal id="modal-scrollable" ref="modal-scrollable" ok-only @ok="print">
            <div
                class="form-group row"
                style="margin-left: 25%; margin-right: 25%"
            >
                <div class="radio-inline">
                    <label class="radio radio-success">
                        <input type="radio" v-model="sktl" value="1" />
                        <span></span>
                        CETAK LHP
                    </label>
                    <label class="radio radio-success">
                        <input type="radio" v-model="sktl" value="2" />
                        <span></span>
                        CETAK PENOLAKAN
                    </label>
                    <label class="radio radio-danger">
                        <input type="radio" v-model="sktl" value="0" />
                        <span></span>
                        TUNDA
                    </label>
                </div>
            </div>
            <div
                class="form-group row"
                style="margin-left: 25%; margin-right: 25%"
                v-if="sktl == 0"
            >
                <label>Cetak SKTL</label>
                <select
                    class="form-control"
                    style="width: 100%"
                    v-model="pengujian.tglujiulang"
                >
                    <option
                        v-for="kuota in kuotas"
                        :key="kuota.id"
                        :value="kuota.tanggal"
                    >
                        {{ kuota.tanggal }}
                    </option>
                </select>
            </div>
        </b-modal>
    </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";
import { mapActions, mapState, mapMutations } from "vuex";
import FormVerif from "./Form.vue";

export default {
    data() {
        return {
            image: "no image.jpg",
            sktl: 0,
            timestamp: Date.now(),
            fotoKosong1: false, 
            fotoKosong2: false, 
            size: {
                width: 200,
                height: 200,
            },
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Verifikator" },
            { title: "Pengujian" },
        ]);
    },
    created() {
        this.getIdentitaskendaraan(this.$route.params.id).then(() => {
            this.editVerif(this.$route.params.id).then(() => {
            this.getKuota();
            });
        });
    },
    methods: {
        ...mapActions("verif", [
            "submitVerif",
            "getIdentitaskendaraan",
            "editVerif",
            "ulangiFoto",
            "getKuota",
        ]),
        
        async submit() {
            if (this.fotoKosong1 && this.fotoKosong2) {
                Swal.fire({
                icon: 'warning',
                title: 'Foto tidak ditemukan!',
                text: 'Silakan lengkapi foto kendaraan terlebih dahulu.',
                });
                return;
            }
            this.submitVerif(this.$route.params.id).then(() => {
                Swal.fire({
                    title: "",
                    text: "The application has been successfully submitted!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.$router.push({ name: "verif.data" });
            });
        },
        showModalVerif() {
            if(this.pengujian.verif == 0){
                this.$refs['modal-scrollable'].show()
            }else{
                this.submit();
            }
        },
        print(id) {
            this.submitVerif(this.$route.params.id).then(() => {
                Swal.fire({
                    title: "",
                    text: "The application has been successfully submitted!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                
                if (this.sktl == 0) {
                    window.open(
                        "/cetak/" + this.$route.params.id + "/sktl",
                        "_blank",
                    );
                } else if (this.sktl == 1) {
                    window.open(
                        "/cetak/" + this.$route.params.id + "/lhp",
                        "_blank",
                    );
                } else if (this.sktl == 2) {
                    window.open(
                        "/cetak/" + this.$route.params.id + "/penolakan",
                        "_blank",
                    );
                }
                this.$router.push({ name: "verif.data" });
            });
        },
        uploadfoto() {
            window.open(
                "/upload/" + this.$route.params.id + "/fotokendaraan",
                "_blank",
            );
        },
        ulangiFotoKendaraan() {
            this.ulangiFoto(this.$route.params.id).then(() => {
                Swal.fire({
                    title: "",
                    text: "Data Kendaraan Sudah kembali ke Pos Foto",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
        },
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState({
            identitaskendaraan: (state) => state.verif.identitaskendaraan,
            kuotas: (state) => state.verif.kuota,
            pengujian: (state) => state.verif.pengujian,
        }),
    },
    components: {
        "verif-form": FormVerif,
    },
};
</script>

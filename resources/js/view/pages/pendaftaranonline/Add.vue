<template>
    <div class="card card-custom">
        <div class="card-body p-0">
            <!--begin: Wizard-->
            <div class="wizard wizard-1" id="kt_wizard_v1" data-wizard-state="step-first" data-wizard-clickable="true">
                <!--begin: Wizard Nav-->
                <div class="wizard-nav border-bottom">
                    <div class="wizard-steps p-8 p-lg-10">
                        <div class="wizard-step" data-wizard-type="step" data-wizard-state="current">
                            <div class="wizard-label">
                                <i class="wizard-icon flaticon-list"></i>
                                <h3 class="wizard-title">Pendaftaran Online</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end: Wizard Nav-->

                <!--begin: Wizard Identitas-->
                <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
                    <div class="col-sm-12 col-xsm-7">
                        <!--begin: Wizard Form-->
                        <!-- <form class="form" id="kt_form"> -->
                            <!--begin: Wizard Step 1-->
                            <div class="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                                <div class="row">
                                    <div class="col-sm-12" style="background-color: #ffc107;">
                                        <table class="table">
                                            <tbody>
                                                <tr style="border: none !important">
                                                    <td colspan="2" style="border: none !important;font-weight: bold"> Informasi Kuota Pendaftaran pada :</td>
                                                </tr>
                                                <tr style="border: none !important">
                                                    <td style="border: none !important;width: 10%;">Tanggal</td>
                                                    <td style="border: none !important;width: 90%;font-weight: bold">: {{ kuota.tanggal }}</td>
                                                </tr>
                                                <tr style="border: none !important">
                                                    <td style="border: none !important;width: 10%;">Pagi</td>
                                                    <td style="border: none !important;width: 90%;font-weight: bold">: {{ kuota.tersediapagi }}</td>
                                                </tr>
                                                <tr style="border: none !important">
                                                    <td style="border: none !important;width: 10%;">Siang</td>
                                                    <td style="border: none !important;width: 90%;font-weight: bold">: {{ kuota.tersediasiang }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>Tanggal Pendaftaran</label>
                                            <b-form-datepicker id="tglpendaftaranonline" v-model="pendaftaranonline.tglpendaftaran"
                                                locale="id" :min="today" :max="maxDate" @input="reloadKuota"></b-form-datepicker>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>Jenis Pendaftaran</label>
                                            <select class="form-control" v-model="pendaftaranonline.kodepenerbitans_id">
                                                <option value="1">Uji Pertama</option>
                                                <option value="2">Uji Berkala</option>
                                                <option value="3">Rusak</option>
                                                <option value="4">Hilang</option>
                                                <option value="5">Numpang Uji Masuk</option>
                                                <option value="9">Numpang Uji Keluar</option>
                                                <option value="6">Mutasi Masuk</option>
                                                <option value="10">Mutasi Keluar</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>Waktu</label>
                                            <select class="form-control" v-model="pendaftaranonline.waktu">
                                                <option value="1">Pagi</option>
                                                <option value="2">Siang</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label> No Uji</label>
                                            <input type="text" class="form-control  form-control-lg text-uppercase"
                                                name="nouji" placeholder="No Uji" v-model="pendaftaranonline.nouji" />
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>No Kendaraan</label>
                                            <input type="text" class="form-control  form-control-lg text-uppercase"
                                                name="noregistrasikendaraan" placeholder=" No Kendaraan"
                                                v-model="pendaftaranonline.noregistrasikendaraan" />
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label> Nama Pemohon</label>
                                            <input type="text" class="form-control  form-control-lg"
                                                placeholder="Nama Pemohon" v-model="pendaftaranonline.namapemohon" />
                                            <p class="text-danger" v-if="errors.namapemohon">{{ errors.namapemohon[0] }}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label> No Telp Pemohon</label>
                                            <input type="text" class="form-control  form-control-lg"
                                                placeholder="No Telp Pemohon" v-model="pendaftaranonline.notelp" />
                                            <p class="text-danger" v-if="errors.notelp">{{ errors.notelp[0] }}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!--end: Wizard Step 1-->

                            <!--begin: Wizard Actions -->
                            <div class="d-flex justify-content-end border-top pt-10">
                                <div>
                                    <button v-on:click="submit"
                                        class="btn btn-success font-weight-bold text-uppercase px-9 py-4">
                                        Submit
                                    </button>
                                </div>
                            </div>
                            <!--end: Wizard Actions -->
                        <!-- </form> -->
                        <!--end: Wizard Form-->
                    </div>
                </div>
                <!--end: Wizard Body-->
            </div>
        </div>
        <!--end: Wizard-->

    </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import moment from 'moment';
import Swal from "sweetalert2";
import { mapActions, mapState, mapMutations } from "vuex";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
    data() {
        const today = new Date();
        const max = new Date();
        max.setMonth(today.getMonth() + 1);
        return {
            disabled1: 1,
            disabled2: 1,
            isActive: true,
            statuschecking: true,
            today: new Date().toISOString().substr(0, 10),
            maxDate: max.toISOString().substr(0, 10) 
        };
    },
    name: "Wizard-1",
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Pendaftaran Online" },
            { title: "Add" }
        ]);

        // Initialize form wizard
        const wizard = new KTWizard("kt_wizard_v1", {
            startStep: 1, // initial active step number
            clickableSteps: true // allow step clicking
        });

        // Validation before going to next page
        wizard.on("beforeNext", function (/*wizardObj*/) {
            // validate the form and use below function to stop the wizard's step
            // wizardObj.stop();
        });

        // Change event
        wizard.on("change", function (/*wizardObj*/) {
            setTimeout(() => {
                KTUtil.scrollTop();
            }, 500);
        });
    },
    created() {
        this.CLEAR_FORM();
        // this.getKodewilayahs();

        var CurrentDate = moment().format("YYYY-MM-DD");
        this.pendaftaranonline.tglpendaftaran = CurrentDate;
        this.reloadKuota();
    },
    methods: {
        ...mapMutations("pendaftaranonline", ["CLEAR_FORM"]),
        ...mapActions("pendaftaranonline", ["getKodewilayahs", "submitPendaftaranOnline","checkKuota"]),
        submit() {
            this.submitPendaftaranOnline().then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.$router.push({ name: "pendaftaranonline.data" });
            });
        },
        customFormatter(today) {
            return today;
        },
        reloadKuota()
        {
            this.checkKuota(this.pendaftaranonline.tglpendaftaran);
        },
        handleFocus(field) {
            if (this.pendaftaranonline[field] === 0 || this.pendaftaranonline[field] === "0") {
                this.pendaftaranonline[field] = '';
            }
        },
    },
    destroyed() {
        this.CLEAR_FORM();
    },
    computed: {
        ...mapState(["errors"]),
        ...mapState("pendaftaranonline", {
            pendaftaranonline: state => state.pendaftaranonline,
            kuota: state => state.kuota,
        }),
        disabled() {
            return this.state === 'disabled'
        },
        readonly() {
            return this.state === 'readonly'
        },
    },
    components: {
        vSelect
    },
};
</script>

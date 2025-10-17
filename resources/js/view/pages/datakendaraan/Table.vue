<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-lorry text-primary"></i>
                </span>
                <h3 class="card-label">Data Kendaraan</h3>
            </div>
            <div class="card-toolbar">
                <div class="row">
                    <div class="col-5">
                        <select
                            class="form-control"
                            v-model="status"
                            @click="setStatus()"
                        >
                            <option selected="selected">SEMUA</option>
                            <option>MIMIKA</option>
                            <option>AKTIF</option>
                            <option>TIDAK AKTIF</option>
                            <option>NU MASUK</option>
                            <option>MUTASI KELUAR</option>
                        </select>
                    </div>
                    <div class="col-5">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="serach"
                            v-model="search"
                        />
                    </div>
                    <div class="col-2">
                        <router-link
                            :to="{ name: 'datakendaraan.add' }"
                            class="btn btn-sm btn-icon btn-light-success mr-2"
                            ><i class="flaticon2-add"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-12">
                    <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>No Uji</th>
                                <th>No Kendaraan</th>
                                <th>Nama</th>
                                <th>Merek</th>
                                <th>Tipe</th>
                                <th>Jenis</th>
                                <th>No Rangka</th>
                                <th>No Mesin</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="datakendaraan in datakendaraan
                                    .datakendaraans.data"
                                :key="datakendaraan.id"
                            >
                                <td>{{ datakendaraan.nouji }}</td>
                                <td>
                                    {{ datakendaraan.noregistrasikendaraan }}
                                </td>
                                <td>{{ datakendaraan.nama }}</td>
                                <td>{{ datakendaraan.merek }}</td>
                                <td>{{ datakendaraan.tipe }}</td>
                                <td>{{ datakendaraan.jenis }}</td>
                                <td>{{ datakendaraan.norangka }}</td>
                                <td>{{ datakendaraan.nomesin }}</td>
                                <td>
                                    <router-link
                                        :to="{
                                            name: 'datakendaraan.edit',
                                            params: { id: datakendaraan.uuid },
                                        }"
                                    >
                                        <i class="fa fa-edit text-success"></i>
                                    </router-link>
                                    <a
                                        href="javascript:void(0)"
                                        @click="print(datakendaraan.uuid)"
                                    >
                                        <i class="fa fa-print text-info"></i>
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        @click="
                                            deleteDatakendaraan(
                                                datakendaraan.uuid,
                                            )
                                        "
                                        data-toggle="tooltip"
                                        title="Hapus Data Kendaraan"
                                    >
                                        <i class="fas fa-trash text-danger"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <div class="pull-right">
                <div class="overflow-auto">
                    <b-pagination
                        v-model="page"
                        :total-rows="datakendaraan.datakendaraans.total"
                        :per-page="datakendaraan.datakendaraans.per_page"
                        aria-controls="datakendaraans"
                        v-if="
                            datakendaraan.datakendaraans.data &&
                            datakendaraan.datakendaraans.data.length > 0
                        "
                    ></b-pagination>
                </div>
            </div>
        </div>

        <b-modal
            v-model="show"
            id="modal-scrollable"
            @ok="truedeleteDatakendaraan"
        >
            <div class="form-group">
                <label for>Password</label>
                <input
                    type="password"
                    class="form-control"
                    v-model="datakendaraan.password2"
                />
            </div>
        </b-modal>

        <b-modal id="modal-detail" ref="modal-detail" size="lg">
            <v-text-field
                v-model="search1"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            <v-data-table
                :headers="headers"
                :search="search1"
                :items="pendaftarandetail"
                :items-per-page="5"
                class="elevation-1"
            >
                <template v-slot:item.tglpendaftaran="{ item }">
                    {{ customTgl2(item.tglpendaftaran) }}
                </template>
                <template v-slot:item.masaberlakuuji="{ item }">
                    {{ customTgl1(item.masaberlakuuji) }}
                </template>
                <template v-slot:item.statuslulusuji="{ item }">
                    <v-chip
                        color="green"
                        text-color="white"
                        v-if="item.statuslulusuji == '1'"
                    >
                        Lulus Uji
                    </v-chip>
                    <v-chip
                        color="red"
                        text-color="white"
                        v-if="item.statuslulusuji == '0'"
                    >
                        Tidak Lulus Uji
                    </v-chip>
                </template>
                <template v-slot:item.cetak="{ item }">
                    <a v-if="item.id >= '78868'" href="javascript:void(0)" @click="printlhp(item.id)">
                        <i class="fa fa-print text-info"></i>
                    </a>
                </template>
            </v-data-table>
        </b-modal>

        <!-- <b-modal id="bv-modal-example" hide-footer>
            <template #modal-title>
                Total Datakendaraan {{ datakendaraan.total }}
            </template>
            <div class="text-center">
                <li
                    v-for="n in Math.ceil(parseInt(datakendaraan.total) / 2000)"
                >
                    <a
                        href="javascript:void(0)"
                        :style="{ width: 100 + '%' }"
                        v-if="n == 1"
                        class="btn btn-icon btn-success"
                        @click="exportDataKendaraan(n)"
                    >
                        <i class="far fa-file-excel"></i>1 - 2000
                    </a>
                    <a
                        href="javascript:void(0)"
                        :style="{ width: 100 + '%' }"
                        v-else-if="n == 2"
                        class="btn btn-icon btn-success"
                        @click="exportDataKendaraan(n)"
                    >
                        <i class="far fa-file-excel"></i>2000 - 4000
                    </a>
                    <a
                        href="javascript:void(0)"
                        :style="{ width: 100 + '%' }"
                        v-else-if="n == 3"
                        class="btn btn-icon btn-success"
                        @click="exportDataKendaraan(n)"
                    >
                        <i class="far fa-file-excel"></i>4000 - 6000
                    </a>
                    <a
                        href="javascript:void(0)"
                        :style="{ width: 100 + '%' }"
                        v-else-if="n == 4"
                        class="btn btn-icon btn-success"
                        @click="exportDataKendaraan(n)"
                    >
                        <i class="far fa-file-excel"></i>6000 - 8000
                    </a>
                    <a
                        href="javascript:void(0)"
                        :style="{ width: 100 + '%' }"
                        v-else-if="n == 5"
                        class="btn btn-icon btn-success"
                        @click="exportDataKendaraan(n)"
                    >
                        <i class="far fa-file-excel"></i>8000 - 10000
                    </a>
                </li>
                <li>
                    <a
                        href="javascript:void(0)"
                        :style="{ width: 100 + '%' }"
                        class="btn btn-icon btn-success"
                        @click="exportDataTamanKendaraan()"
                    >
                        <i class="far fa-file-excel"></i>Taman Kendaraan
                    </a>
                </li>
            </div>
            <b-button
                class="mt-3"
                block
                @click="$bvModal.hide('bv-modal-example')"
                >Close</b-button
            >
        </b-modal> -->
    </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2";
export default {
    created() {
        this.getDatakendaraans();
        // this.getTotalDatakendaraan();
    },
    data() {
        return {
            // users: {}
            search: "",
            status: "SEMUA",
            show: false,
            show1: false,
            id: "",
            search1: "",
            headers: [
                { text: "Tgl Pendaftaran", value: "tglpendaftaran" },
                { text: "Masa Berlaku Uji", value: "masaberlakuuji" },
                { text: "No Kendaraan", value: "noregistrasikendaraan" },
                { text: "No Uji", value: "nouji" },
                { text: "Status Uji", value: "statuslulusuji" },
                { text: "Cetak", value: "cetak" },
            ],
        };
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{ title: "Data Kendaraan" }]);
    },
    computed: {
        ...mapState(["datakendaraan"]),
        page: {
            get() {
                return this.$store.state.datakendaraan.page;
            },
            set(val) {
                this.$store.commit("datakendaraan/SET_PAGE", val);
            },
        },

        ...mapState("datakendaraan", {
            pendaftarandetail: (state) => state.pendaftarandetail,
        }),
    },
    watch: {
        page() {
            this.getDatakendaraans(this.search);
        },
        search() {
            this.getDatakendaraans(this.search);
        },
    },
    methods: {
        ...mapActions("datakendaraan", [
            "getDatakendaraans",
            "removeDatakendaraan",
            "getTotalDatakendaraan",
            "getPendaftaranDetail",
        ]),
        deleteDatakendaraan(id) {
            this.show = true;
            this.id = id;
        },
        setStatus() {
            this.$store.commit("datakendaraan/SET_STATUS", this.status);
            this.getDatakendaraans(this.search);
        },
        showDetail(id) {
            this.getPendaftaranDetail(id).then(() => {
                this.$refs["modal-detail"].show();
            });
        },
        truedeleteDatakendaraan() {
            if (this.datakendaraan.password2 == this.datakendaraan.password1) {
                this.removeDatakendaraan(this.id).then(() => {
                    Swal.fire({
                        title: "",
                        text: "The application has been successfully Deleted!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.getDatakendaraans();
                    this.show = false;
                    this.datakendaraan.password2 = "";
                });
            } else {
                Swal.fire({
                    title: "",
                    text: "Password Tidak Sesuai!",
                    icon: "error",
                    heightAuto: false,
                });
                this.datakendaraan.password2 = "";
            }
        },
        print(id) {
            window.open("/cetak/" + id + "/kartuinduk");
        },
        customTgl1(tgl) {
            if (tgl) {
                if (tgl.length > 7) {
                    var data =
                        tgl.substr(0, 2) +
                        "-" +
                        tgl.substr(2, 2) +
                        "-" +
                        tgl.substr(4, 4);
                    return data;
                }
            } else {
                return tgl;
            }
        },
        customTgl2(tgl) {
            if (tgl) {
                if (tgl.length > 7) {
                    var data =
                        tgl.substr(8, 2) +
                        "-" +
                        tgl.substr(5, 2) +
                        "-" +
                        tgl.substr(0, 4);
                    return data;
                }
            } else {
                return $tgl;
            }
        },
        exportDataKendaraan(i) {
            var tot = parseInt(this.$store.state.datakendaraan.total);
            var a = parseInt(Math.ceil(tot / 2000));
            window.open("/cetak/" + i + "/" + "datekendaraanexport");
        },
        exportDataTamanKendaraan() {
            window.open("/cetak/" + 1 + "/" + "tamankendaraanexport");
        },
        printlhp(id){
            window.open('/cetak/'+id+'/lhp', "_blank");
        },
    },
};
</script>

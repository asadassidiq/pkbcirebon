import { uuid } from "vue-uuid/dist/index.js";
import ApprovalsService from "../approvals.service";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
  // CORE
  approvalRequests: [],
  selectedSchemaID: "",
  selectedOriginalData: {},
  selectedProposedData: {},
  keysLabel: [],
  rejectNotes: "",

  // FILTER
  filter: {
    tgl: new Date(),
    status: "pending",
  },

  responeBlue: {
    status: "",
    code: "",
    message: "",
    data: [],
  },
  carinouji: "",
  carinokendaraan: "",
  carinorangka: "",
  password1: "@Lupakatasandi",
  password2: "",
  status: "SEMUA",
  page: 1,
};

export const mutations = {
  ASSING_DATA(state, payload) {
    state.approvalRequests = payload;
  },
  ASSING_DATADETAIL(state, payload) {
    state.selectedSchemaID = payload.id;
    state.selectedOriginalData =
      typeof payload.original_data === "string"
        ? JSON.parse(payload.original_data)
        : payload.original_data;
    state.selectedProposedData =
      typeof payload.proposed_data === "string"
        ? JSON.parse(payload.proposed_data)
        : payload.proposed_data;
  },
  ASSIGN_KEYS_LABEL(state, payload) {
    state.keysLabel = payload;
  },
  RESET_DATADETAIL(state) {
    state.selectedSchemaID = "";
    state.selectedOriginalData = {};
    state.selectedProposedData = {};
    state.keysLabel = [];
  },
  REWRITE_NOTES(state, payload) {
    state.rejectNotes = payload;
  },
  SET_STATUS(state, payload) {
    state.status = payload;
  },
  SET_TGL(state, payload) {
    state.filter.tgl = payload;
  },
};

export const actions = {
  fetchApprovalRequests({ commit, state }, filter) {
    return new Promise((resolve, reject) => {
      ApprovalsService.getPendingApprovalRequests(filter)
        .then((response) => {
          console.log(response);
          commit("ASSING_DATA", response.data.result);
          resolve(response.data);
        })
        .catch((error) => {
          console.error(error);
          if (
            error
              .toString()
              .includes(
                "Error: [KTs] ApiService Error: Request failed with status code 403"
              )
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.history.back();
              }
            });
          }
        });
    });
  },
  viewDetails({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      ApprovalsService.getApprovalRequestDetails(payload)
        .then((response) => {
          commit("ASSING_DATADETAIL", response.data.result);
          commit(
            "ASSIGN_KEYS_LABEL",
            actions.handleKeyLabel(response.data.result.jumlah_sumbu)
          );

          resolve(response.data);
        })
        .catch((error) => {
          if (
            error
              .toString()
              .includes(
                "Error: [KTs] ApiService Error: Request failed with status code 403"
              )
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.history.back();
              }
            });
          }
        });
    });
  },
  handleKeyLabel(jumlah_sumbu) {
    return [
      // 'identitaskendaraan_id': 'ID Kendaraan',

      // Ukuran Utama
      {
        fieldKey: "panjangkendaraan",
        fieldLabel: "Panjang Kendaraan (mm)",
        visible: true,
      },
      {
        fieldKey: "lebarkendaraan",
        fieldLabel: "Lebar Kendaraan (mm)",
        visible: true,
      },
      {
        fieldKey: "tinggikendaraan",
        fieldLabel: "Tinggi Kendaraan (mm)",
        visible: true,
      },
      {
        fieldKey: "julurdepan",
        fieldLabel: "Julur Depan (mm)",
        visible: true,
      },
      {
        fieldKey: "julurbelakang",
        fieldLabel: "Julur Belakang (mm)",
        visible: true,
      },
      {
        fieldKey: "bahan",
        fieldLabel: "Jenis Rumah-rumah",
        visible: true,
      },

      // Dimensi Bak / Tangki
      {
        fieldKey: "panjangbakatautangki",
        fieldLabel: "Panjang Bak atau Tangki Muatan (mm)",
        visible: true,
      },
      {
        fieldKey: "lebarbakatautangki",
        fieldLabel: "Lebar Bak atau Tangki Muatan (mm)",
        visible: true,
      },
      {
        fieldKey: "tinggibakatautangki",
        fieldLabel: "Tinggi Bak atau Tangki Muatan (mm)",
        visible: true,
      },

      // Jarak Sumbu
      {
        fieldKey: "jumlah_sumbu",
        fieldLabel: "Jumlah Sumbu",
        visible: true,
      },
      {
        fieldKey: "jaraksumbu1_2",
        fieldLabel: "Jarak Sumbu I-II (mm)",
        visible: true,
      },

      {
        fieldKey: "jaraksumbu2_3",
        fieldLabel: "Jarak Sumbu II-III (mm)",
        visible: jumlah_sumbu > 2,
      },
      {
        fieldKey: "jaraksumbu3_4",
        fieldLabel: "Jarak Sumbu III-IV (mm)",
        visible: jumlah_sumbu > 3,
      },
      {
        fieldKey: "jaraksumbu4_5",
        fieldLabel: "Jarak Sumbu IV-V (mm)",
        visible: jumlah_sumbu > 4,
      },
      {
        fieldKey: "jaraksumbu5_6",
        fieldLabel: "Jarak Sumbu V-VI (mm)",
        visible: jumlah_sumbu > 5,
      },
      {
        fieldKey: "jaraksumbu6_7",
        fieldLabel: "Jarak Sumbu VI-VII (mm)",
        visible: jumlah_sumbu > 6,
      },
      {
        fieldKey: "jaraksumbu7_8",
        fieldLabel: "Jarak Sumbu VII-VIII (mm)",
        visible: jumlah_sumbu > 7,
      },
      {
        fieldKey: "jaraksumbu8_9",
        fieldLabel: "Jarak Sumbu VIII-IX (mm)",
        visible: jumlah_sumbu > 8,
      },
      {
        fieldKey: "jaraksumbu9_10",
        fieldLabel: "Jarak Sumbu IX-X (mm)",
        visible: jumlah_sumbu > 9,
      },
      {
        fieldKey: "jaraksumbu10_11",
        fieldLabel: "Jarak Sumbu X-XI (mm)",
        visible: jumlah_sumbu > 10,
      },
      {
        fieldKey: "jaraksumbu11_12",
        fieldLabel: "Jarak Sumbu XI-XII (mm)",
        visible: jumlah_sumbu > 11,
      },
      {
        fieldKey: "a",
        fieldLabel: "Wheelbase (mm)",
        visible: true,
      },
      {
        fieldKey: "p",
        fieldLabel: "P (mm)",
        visible: true,
      },
      {
        fieldKey: "q",
        fieldLabel: "Q(mm)",
        visible: true,
      },
      {
        fieldKey: "r",
        fieldLabel: "R(mm)",
        visible: true,
      },

      // 'b':'',

      // Berat Kosong
      {
        fieldKey: "beratsumbu1",
        fieldLabel: "Berat Sumbu 1(Kg)",
        visible: true,
      },
      {
        fieldKey: "beratsumbu2",
        fieldLabel: "Berat Sumbu 2(Kg)",
        visible: true,
      },
      {
        fieldKey: "beratsumbu3",
        fieldLabel: "Berat Sumbu 3(Kg)",
        visible: jumlah_sumbu > 3,
      },
      {
        fieldKey: "beratsumbu4",
        fieldLabel: "Berat Sumbu 4(Kg)",
        visible: jumlah_sumbu > 4,
      },
      {
        fieldKey: "beratsumbu5",
        fieldLabel: "Berat Sumbu 5(Kg)",
        visible: jumlah_sumbu > 5,
      },
      {
        fieldKey: "beratsumbu6",
        fieldLabel: "Berat Sumbu 6(Kg)",
        visible: jumlah_sumbu > 6,
      },
      {
        fieldKey: "beratsumbu7",
        fieldLabel: "Berat Sumbu 7(Kg)",
        visible: jumlah_sumbu > 7,
      },
      {
        fieldKey: "beratsumbu8",
        fieldLabel: "Berat Sumbu 8(Kg)",
        visible: jumlah_sumbu > 8,
      },
      {
        fieldKey: "beratsumbu9",
        fieldLabel: "Berat Sumbu 9(Kg)",
        visible: jumlah_sumbu > 9,
      },
      {
        fieldKey: "beratsumbu10",
        fieldLabel: "Berat Sumbu 10(Kg)",
        visible: jumlah_sumbu > 10,
      },
      {
        fieldKey: "beratsumbu11",
        fieldLabel: "Berat Sumbu 11(Kg)",
        visible: jumlah_sumbu > 11,
      },
      {
        fieldKey: "beratsumbu12",
        fieldLabel: "Berat Sumbu 12(Kg)",
        visible: jumlah_sumbu > 12,
      },
      {
        fieldKey: "beratkosong",
        fieldLabel: "Berat Kosong",
        visible: true,
      },

      // Daya Angkut
      {
        fieldKey: "dayaangkutorang",
        fieldLabel: "Daya Angkut Orang (Orang)",
        visible: true,
      },
      {
        fieldKey: "dayaangkutbarang",
        fieldLabel: "Daya Angkut Barang (Kg)",
        visible: true,
      },
      {
        fieldKey: "kelasjalanterendah",
        fieldLabel: "Kelas Jalan Terendah",
        visible: true,
      },
      {
        fieldKey: "jbb",
        fieldLabel: "JBB",
        visible: true,
      },
      {
        fieldKey: "jbkb",
        fieldLabel: "JBKB",
        visible: true,
      },
      {
        fieldKey: "jbi",
        fieldLabel: "JBI",
        visible: true,
      },
      {
        fieldKey: "jbki",
        fieldLabel: "JBKI",
        visible: true,
      },
      {
        fieldKey: "mst",
        fieldLabel: "MST (KG)",
        visible: true,
      },

      // Catatan Rubah Bentuk
      {
        fieldKey: "catatanrubahbentuk",
        fieldLabel: "Catatan Rubah Bentuk",
        visible: true,
      },

      // UNUSED
      // 'konfigurasisumburoda': 'Konfigurasi Sumbur Roda',
      // 'ukuranban': 'Ukuran Ban',
      // 'idkelasjalanterendah',
      // 'posisinomeruji',
      // 'rumahrumah',
      // 'lebarpintu',
      // 'tinggipintu',
      // 'tinggianaktangga',
      // 'lebaranaktangga',
      // 'lebarlorong',
      // 'tinggitempatberdiri',
      // 'lebartempatduduk',
      // 'jaraktempatduduk',
      // 'lebarpintudarurat',
      // 'panjangakseskeluar',
      // 'lebarakseskeluar',
      // 'jarakantarbumper',
      // 'volume',
      // 'jenismuatan',
      // 'beratjenismuatan',
    ];
  },

  approveRequest(state, payload) {
    return new Promise((resolve, reject) => {
      ApprovalsService.approveDatakendaraanUpdate(payload)
        .then((response) => {
          Swal.fire({
            title: "",
            text: "Permintaan pembaruan data kendaraan disetujui",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            resolve(response.data);
            window.location.reload();
          });
        })
        .catch((error) => {
          if (
            error
              .toString()
              .includes(
                "Error: [KTs] ApiService Error: Request failed with status code 403"
              )
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.history.back();
              }
            });
          }
        });
    });
  },

  rejectRequest({ dispatch, commit, state }, id) {
    return new Promise((resolve, reject) => {
      ApprovalsService.rejectDatakendaraanUpdate(id, {
        notes: new String(state.rejectNotes),
      })
        .then((response) => {
          Swal.fire({
            title: "",
            text: "Permintaan pembaruan data kendaraan ditolak",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            resolve(response.data);
            window.location.reload();
          });
        })
        .catch((error) => {
          if (
            error
              .toString()
              .includes(
                "Error: [KTs] ApiService Error: Request failed with status code 403"
              )
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            });
          }
        });
    });
  },
};
export const getters = {
  getEventById: (state) => (id) => {
    return state.datakendaraans.find(
      (datakendaraan) => datakendaraan.id === id
    );
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

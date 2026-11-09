import PerseoranganService from "../perseorangan.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    perseorangans: [],
    kendaraans: [],
    perseorangan: {
        uuid: "",
        no_identitas:"",
        name:"",
        email: "",
        telepon: "",
        provinsi: "",
        kabupaten: "",
        kecamatan: "",
        kelurahan: "",
        alamat: "",
        file_formulir: ""
    },
    newKendaraan: {
        uuid: "",
        noregistrasikendaraan: "",
        nouji: ""
    },
    carinouji:"",
    page: 1
};

export const mutations = {
    ASSING_DATA(state, perseorangans) {
        state.perseorangans = perseorangans;
    },
    ASSING_DATA_KENDARAAN(state, kendaraan) {
        state.kendaraans = kendaraan;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.perseorangan = {
            uuid: payload.uuid,
            no_identitas:payload.no_identitas,
            name:payload.name,
            email: payload.email,
            telepon: payload.telepon,
            provinsi: payload.provinsi,
            kabupaten: payload.kabupaten,
            kecamatan: payload.kecamatan,
            kelurahan: payload.kelurahan,
            alamat: payload.alamat,
            file_formulir: payload.file_formulir
        };
    },
    ASSIGN_KENDARAAN_FORM(state, payload) {
        state.newKendaraan = {
            uuid: payload.uuid,
            noregistrasikendaraan: payload.noregistrasikendaraan,
            nouji: payload.nouji
        };
    },
    CLEAR_KENDARAAN_FORM(state) {
        state.newKendaraan = {
            uuid: "",
            noregistrasikendaraan: "",
            nouji: ""
        };
    },
    CLEAR_FORM(state) {
        state.perseorangan= {
            uuid: "",
            no_identitas:"",
            name:"",
            email: "",
            telepon: "",
            provinsi: "",
            kabupaten: "",
            kecamatan: "",
            kelurahan: "",
            alamat: "",
            file_formulir: ""
        };
    },
};

export const actions = {
    getPerseorangans({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            PerseoranganService.getPerseorangans(state.page, '1', search)
                .then(response => {
                    commit("ASSING_DATA", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                    if (error == 'Error: [KTs] ApiService Error: Request failed with status code 403') {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: 'Akses ditolak. Anda tidak memiliki izin!!',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.history.back();
                            };
                        });
                    }
                });
        });
    },
    getDatakendaraanOnline({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PerseoranganService.getDatakendaraanOnline(payload)
                .then(response => {
                    commit("ASSING_DATA_KENDARAAN", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.response.data.messages,
                        });
                    }else if (error == 'Error: [KTs] ApiService Error: Request failed with status code 403') {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: 'Akses ditolak. Anda tidak memiliki izin!!',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.history.back();
                            };
                        });
                    }
                });
        });
    },
    editKendaraan({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PerseoranganService.getKendaraan(payload)
                .then(response => {
                    commit("ASSIGN_KENDARAAN_FORM", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.response.data.messages,
                        });
                    }else if (error == 'Error: [KTs] ApiService Error: Request failed with status code 403') {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: 'Akses ditolak. Anda tidak memiliki izin!!',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.history.back();
                            };
                        });
                    }
                });
        });
    }, 
    updateDatakendaraanOnline({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            PerseoranganService.updateDatakendaraanOnline(id, state.newKendaraan)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.response.data.messages,
                        });
                    }
                });
        });
    },
    storeDatakendaraanOnline({ state, commit }) {
        return new Promise((resolve, reject) => {
            PerseoranganService.storeDatakendaraanOnline(state.newKendaraan)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.response.data.messages,
                        });
                    }
                });
        });
    },
    editPerseorangan({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PerseoranganService.getPerseorangan(payload)
                .then(response => {
                    commit("ASSIGN_FORM", response.data.result);
                    resolve(response.data);
                    // console.log("run edit");
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.response.data.messages,
                        });
                    }else if (error == 'Error: [KTs] ApiService Error: Request failed with status code 403') {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: 'Akses ditolak. Anda tidak memiliki izin!!',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.history.back();
                            };
                        });
                    }
                });
        });
    },
    updatePerseorangan({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            PerseoranganService.updatePerseorangan(id, state.perseorangan)
                .then(response => {
                    // commit("CLEAR_FORM");
                    resolve(response.data);
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.response.data.messages,
                        });
                    }
                });
        });
    },
};
export const getters = {
    getEventById: state => id => {
        return state.perseorangans.find(perseorangan => perseorangan.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

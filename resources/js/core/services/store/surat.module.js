import PendaftaranService from "../surat.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    pendaftarans: [],
    filter: {
        tgl: "",
        status:"",
        jenis:"",
    },
    page: 1
};

export const mutations = {
    ASSING_DATA(state, pendaftarans) {
        state.pendaftarans = pendaftarans;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },

    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },

    SET_STATUS(state, payload) {
        state.filter.status = payload;
    },

    SET_JENIS(state, payload) {
        state.filter.jenis = payload;
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: "",
            status:"",
            jenis:"",
        };
    },
};

export const actions = {
    getPendaftarans({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            PendaftaranService.getPendaftarans(state.page,state.filter.tgl,state.filter.status,state.filter.jenis, search)
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
    sendDataPendaftaran({ dispatch }, payload) {
        return new Promise((resolve, reject) => {
            PendaftaranService.sendDataPendaftaran(payload.id,payload.nouji)
                .then(response => {
                    dispatch("getPendaftarans").then(() => resolve());
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
    getTTE({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PendaftaranService.checkTTE(payload)
                .then(response => {
                    // commit("ASSING_DATA", response.data.result);
                    if(response.data.status != false){
                        Swal.fire({
                            title: "",
                            text: response.data.message,
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                    resolve(response.data);
                })
                .catch(error => {
                    if (error == 'Error: [KTs] ApiService Error: Request failed with status code 400') {
                        
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: 'Surat belum di tandatangani',
                        });
                    }
                    else if (error == 'Error: [KTs] ApiService Error: Request failed with status code 404') {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: 'Surat belum di tandatangani',
                        });
                    }
                    else if (error.response.status == false) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.response.data.messages,
                        });
                    }
                    else if (error == 'Error: [KTs] ApiService Error: Request failed with status code 403') {
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
};
export const getters = {
    getEventById: state => id => {
        return state.pendaftarans.find(pendaftaran => pendaftaran.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

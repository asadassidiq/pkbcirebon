import PerusahaanService from "../perusahaan.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    perusahaans: [],
    perusahaansudah: [],
    perusahaan: {
        pendaftaran_id:"",
        namapenerima:"",
        notelppenerima: "",
        noidentitaspenerima: "",
    },
    carinouji:"",
    page: 1
};

export const mutations = {
    ASSING_DATA(state, perusahaans) {
        state.perusahaans = perusahaans;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.perusahaan = {
            pendaftaran_id:"",
            namapenerima:payload.namapenerima ,
            noidentitaspenerima: payload.noidentitaspenerima,
            notelppenerima: payload.notelppenerima,
        };
    },
    CLEAR_FORM(state) {
        state.perusahaan= {
            pendaftaran_id:"",
            namapenerima:"",
            noidentitaspenerima:"",
            notelppenerima: "",
        };
    },
};

export const actions = {
    getPerusahaans({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            PerusahaanService.getPerusahaans(state.page, '2', search)
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
    editPerusahaan({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PerusahaanService.getPerusahaan(payload)
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
    updatePerusahaan({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            PerusahaanService.updatePerusahaan(id, state.perusahaan)
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
        return state.perusahaans.find(perusahaan => perusahaan.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

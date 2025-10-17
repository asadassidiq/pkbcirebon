import RegonlineService from "../regonline.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    regonlines: [],
    filter: {
        tgl: ""
    },
    pendaftaran: {
        pendaftaran_id:"",
        tglpendaftaran: "",
        tglbayar:"",
        kodepenerbitans_id: "",
        status: "",
    },
    pendaftaran_id :"",
    page: 1
};

export const mutations = {
    ASSING_DATA(state, pendaftarans) {
        state.regonlines = pendaftarans;
    },
    SET_PENDAFTARANID(state, payload){
            state.pendaftaran_id  = payload;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    CLEAR_FORM(state) {
        state.pendaftaran_id= "";
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getRegOnlines({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            RegonlineService.getRegOnlines(state.page,state.filter.tgl, search)
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
    getBilling({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            RegonlineService.getBilling(payload)
                .then(response => {
                    commit("SET_PENDAFTARANID", response.data);
                    resolve(response.data);
                    // console.log("run edit");
                })
                .catch(error => {
                    console.log(error.message);
                });
        });
    },
    getRegOnlineVerif({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            RegonlineService.getRegOnlineVerif(payload)
                .then(response => {
                    commit("SET_PENDAFTARANID", response.data.result);
                    resolve(response);
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
                    };
                });
        });
    },
    updatePendaftaran({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            RegonlineService.updatePendaftaran(id, state.pendaftaran)
                .then(response => {
                    // commit("CLEAR_FORM");
                    resolve(response.data);
                    // console.log("sukses update");
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        commit("SET_ERRORS", error.response.data.errors, {
                            root: true
                        });
                        // console.log(error.response.data.errors)
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

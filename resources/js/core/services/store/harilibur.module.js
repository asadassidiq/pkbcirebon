import HariLiburService from "../harilibur.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    hariliburs: [],
    filter: {
        tgl: ""
    },
    harilibur: {
        tanggal:"",
        nama:"",
    },
    page: 1
};

export const mutations = {
    ASSING_DATA(state, hariliburs) {
        state.hariliburs = hariliburs;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.harilibur = {
            tanggal:payload.tanggal ,
            nama:payload.nama ,
        };
    },
    CLEAR_FORM(state) {
        state.harilibur= {
            tanggal:"",
            nama:"",
        };
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getHariLiburs({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            HariLiburService.getHariLiburs(state.page,state.filter.tgl, search)
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
    submitHariLibur({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            HariLiburService.postHariLibur(state.harilibur)
                .then(response => {
                    commit("ASSIGN_FORM", response.data.result);
                    resolve(response.data);
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
    editHariLibur({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            HariLiburService.getHariLibur(payload)
                .then(response => {
                    commit("ASSIGN_FORM", response.data.result);
                    resolve(response.data);
                    // console.log("run edit");
                })
                .catch(error => {
                    console.log(error.message);
                });
        });
    },
    updateHariLibur({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            HariLiburService.updateHariLibur(id, state.harilibur)
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
    removeHariLibur({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            HariLiburService.deleteHariLibur(id)
                .then(response => {
                    dispatch("getHariLiburs").then(() => resolve());
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
        return state.hariliburs.find(harilibur => harilibur.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

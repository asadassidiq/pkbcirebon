import TandatanganService from "../tandatangan.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    tandatangans: [],
    users: [],
    filter: {
        tgl: ""
    },
    tandatangan: {
        name:"",
        user_id:"",
    },
    page: 1
};

export const mutations = {
    ASSING_DATA(state, tandatangans) {
        state.tandatangans = tandatangans;
    },
    DATA_USER(state, users){
        state.users = users;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.tandatangan = {
            name:payload.name ,
            user_id:payload.user_id ,
        };
    },
    CLEAR_FORM(state) {
        state.tandatangan= {
            name:"",
            user_id:"",
        };
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getTandatangans({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            TandatanganService.getTandatangans(state.page, search)
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
    submitTandatangan({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            TandatanganService.postTandatangan(state.tandatangan)
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
    editTandatangan({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            TandatanganService.getTandatangan(payload)
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
    updateTandatangan({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            TandatanganService.updateTandatangan(id, state.tandatangan)
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
    removeTandatangan({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            TandatanganService.deleteTandatangan(id)
                .then(response => {
                    dispatch("getTandatangans").then(() => resolve());
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
    getUsers({ commit, state }) {
        return TandatanganService.getUsers().then(response => {
            commit("DATA_USER", response.data.result);
            // console.log(response.data.data)
        });
    },
};
export const getters = {
    getEventById: state => id => {
        return state.tandatangans.find(tandatangan => tandatangan.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

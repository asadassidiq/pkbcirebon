import JenisService from "../jenis.service.js";
export const namespaced = true;

export const state = {
    jeniss: [],
    filter: {
        tgl: ""
    },
    jenis: {
        jenis:"",
        klasifikasis_id:"",
        jeniskendaraan:"",
    },
    page: 1
};

export const mutations = {
    ASSING_DATA(state, jeniss) {
        state.jeniss = jeniss;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.jenis = {
            jenis:payload.jenis ,
            klasifikasis_id:payload.klasifikasis_id ,
            jeniskendaraan:payload.jeniskendaraan,
        };
    },
    CLEAR_FORM(state) {
        state.jenis= {
            jenis:"",
            klasifikasis_id:"",
            jeniskendaraan:"",
        };
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getJeniss({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            JenisService.getJeniss(state.page, search)
                .then(response => {
                    commit("ASSING_DATA", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                    // console.log('There was an error:', error.response)
                    const notification = {
                        type: "error",
                        message:
                            "There was a problem fetching events: " +
                            error.message
                    };
                    // dispatch("notification/add", notification, { root: true });
                });
        });
    },
    submitJenis({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            JenisService.postJenis(state.jenis)
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
    editJenis({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            JenisService.getJenis(payload)
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
    updateJenis({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            JenisService.updateJenis(id, state.jenis)
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
    removeJenis({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            JenisService.deleteJenis(id)
                .then(response => {
                    dispatch("getJeniss").then(() => resolve());
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
        return state.jeniss.find(jenis => jenis.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

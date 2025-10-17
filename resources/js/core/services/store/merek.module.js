import MerekService from "../merek.service.js";
export const namespaced = true;

export const state = {
    mereks: [],
    filter: {
        tgl: ""
    },
    merek: {
        merek :"",
    },
    page: 1
};

export const mutations = {
    ASSING_DATA(state, mereks) {
        state.mereks = mereks;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.merek = {
            merek: payload.merek,
        };
    },
    CLEAR_FORM(state) {
        state.merek= {
            merek :"",
        };
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getMereks({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            MerekService.getMereks(state.page, search)
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
    submitMerek({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            MerekService.postMerek(state.merek)
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
    editMerek({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            MerekService.getMerek(payload)
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
    updateMerek({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            MerekService.updateMerek(id, state.merek)
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
    removeMerek({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            MerekService.deleteMerek(id)
                .then(response => {
                    dispatch("getMereks").then(() => resolve());
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
        return state.mereks.find(merek => merek.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

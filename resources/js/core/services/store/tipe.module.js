import TipeService from "../tipe.service.js";
export const namespaced = true;

export const state = {
    tipes: [],
    mereks: [],
    filter: {
        tgl: ""
    },
    tipe: {
        merek_id  :"",
        tipe :"",
    },
    page: 1
};

export const mutations = {
    ASSING_DATA(state, tipes) {
        state.tipes = tipes;
    },
    ASSING_DATAMEREK(state, mereks) {
        state.mereks = mereks;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.tipe = {
            merek_id:payload.merek_id ,
            tipe: payload.tipe,
        };
    },
    CLEAR_FORM(state) {
        state.tipe= {
            merek_id  :"",
            tipe :"",
        };
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getTipes({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            TipeService.getTipes(state.page,state.filter.tgl, search)
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
    submitTipe({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            TipeService.postTipe(state.tipe)
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
    editTipe({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            TipeService.getTipe(payload)
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
    updateTipe({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            TipeService.updateTipe(id, state.tipe)
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
    removeTipe({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            TipeService.deleteTipe(id)
                .then(response => {
                    dispatch("getTipes").then(() => resolve());
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
    getMereks({ commit, state }) {
        return TipeService.getMereks().then(response => {
            commit("ASSING_DATAMEREK", response.data.result);
            // console.log(response.data.data)
        });
    },
};
export const getters = {
    getEventById: state => id => {
        return state.tipes.find(tipe => tipe.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

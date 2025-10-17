import Pos1Service from "../foto.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    pendaftarans: [],
    pendaftaransFoto: [],
    filter: {
        tgl: ""
    },
    page: 1
};

export const mutations = {
    ASSING_DATA(state, pendaftarans) {
        state.pendaftarans = pendaftarans;
    },
    ASSING_DATATERFOTO(state, pendaftaransFoto) {
        state.pendaftaransFoto = pendaftaransFoto;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getPendaftarans({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            Pos1Service.getPendaftarans(state.page,state.filter.tgl, search)
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
    getPendaftaransFoto({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            Pos1Service.getPendaftaransFoto(state.page,state.filter.tgl, search)
                .then(response => {
                    commit("ASSING_DATATERFOTO", response.data.result);
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

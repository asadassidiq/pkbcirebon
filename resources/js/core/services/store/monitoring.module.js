import MonitoringService from "../monitoring.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    monitorings: [],
    filter: {
        tgl: ""
    },
    pendaftaran_id :"",
    page: 1
};

export const mutations = {
    ASSING_DATA(state, pendaftarans) {
        state.monitorings = pendaftarans;
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
    getMonitorings({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            MonitoringService.getMonitorings(state.page,state.filter.tgl, search)
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

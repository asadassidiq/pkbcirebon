import KuotaService from "../kuota.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    kuotas: [],
    filter: {
        tgl: ""
    },
    kuota: {
        tanggal:"",
        kuotapagi:"",
        kuotasiang:"",
        tersediapagi:"",
        tersediasiang:"",
    },
    setkuota: {
        kuotapaginormal:"",
        kuotasiangnormal:"",
        kuotapagijumat:"",
        kuotasiangjumat:"",
    },
    page: 1
};

export const mutations = {
    ASSING_DATA(state, kuotas) {
        state.kuotas = kuotas;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.kuota = {
            tanggal:payload.tanggal ,
            kuotapagi:payload.kuotapagi ,
            kuotasiang:payload.kuotasiang ,
            tersediapagi:payload.tersediapagi ,
            tersediasiang: payload.tersediasiang,
        };
    },
    CLEAR_FORM(state) {
        state.kuota= {
            tanggal:"",
            kuotapagi:"",
            kuotasiang:"",
            tersediapagi:"",
            tersediasiang:"",
        };
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getKuotas({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            KuotaService.getKuotas(state.page,state.filter.tgl, search)
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
    submitKuota({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            KuotaService.postKuota(state.setkuota)
                .then(response => {
                    // commit("ASSIGN_FORM", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                });
        });
    },
    editKuota({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            KuotaService.getKuota(payload)
                .then(response => {
                    commit("ASSIGN_FORM", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                    console.log(error.message);
                });
        });
    },
    updateKuota({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            KuotaService.updateKuota(id, state.kuota)
                .then(response => {
                    commit("CLEAR_FORM");
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
    removeKuota({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            KuotaService.deleteKuota(id)
                .then(response => {
                    dispatch("getKuotas").then(() => resolve());
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
        return state.kuotas.find(kuota => kuota.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

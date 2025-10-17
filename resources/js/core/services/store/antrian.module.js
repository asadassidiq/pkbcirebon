import AntrianService from "../antrian.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    antrians: [],
    kodewilayahs: [],
    filter: {
        tgl: ""
    },
    pendaftaran: {
        pendaftaran_id:"",
        tglpendaftaran: "",
        tglbayar:"",
        kodepenerbitans_id: "",
        status: "",
        datastatus:"",
    },
    identitaskendaraan : {
        id:"",
        tglpendaftaran:"",
        kodepenerbitans_id:"",
        nouji:"",
        kodewilayah:"",
        kodewilayahasal:"",
    },
    pendaftaran_id :"",
    page: 1
};

export const mutations = {
    DATA_KODEWILAYAH(state, kodewilayahs){
        state.kodewilayahs = kodewilayahs;
    },
    ASSING_DATA(state, pendaftarans) {
        state.antrians = pendaftarans;
    },
    SET_PENDAFTARANID(state, payload){
        state.pendaftaran = {
            pendaftaran_id  : payload.pendaftaran_id,
            tglpendaftaran  : payload.tglpendaftaran,
            tglbayar        : payload.tglbayar,
            status          : payload.status,
            datastatus            : payload.statusdata,
        };
    },
    ASSIGN_FORM(state, payload) {
        state.identitaskendaraan = {
            id                  : payload.identitaskendaraan_id,
            tglpendaftaran      : payload.tglpendaftaran ,
            kodepenerbitans_id  : payload.kodepenerbitans_id,
            nouji               : payload.nouji,
            kodewilayah         : payload.kodewilayah,
            kodewilayahasal     : payload.kodewilayahasal,
        };
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    CLEAR_FORM(state) {
        state.pendaftaran= {
            id:"",
            identitaskendaraan_id:"",
            tglpendaftaran: "",
            tglbayar:"",
            kodepenerbitans_id: "",
            datastatus: "",
        };
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getAntrians({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            AntrianService.getAntrians(state.page,state.filter.tgl, search)
                .then(response => {
                    commit("ASSING_DATA", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                    // console.log('There was an error:', error.response)
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
    setAntrian({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            AntrianService.setAntrian(payload)
                .then(response => {
                    // commit("ASSIGN_FORM", response.data.result);
                    resolve(response.data);
                    // console.log("run edit");
                })
                .catch(error => {
                    console.log(error.message);
                });
        });
    },
    getPendaftaran({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            AntrianService.getAntrian(payload)
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
    getBilling({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            AntrianService.getBilling(payload)
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
    getKodewilayahs({ commit, state }) {
        return AntrianService.getKodewilayahs().then(response => {
            commit("DATA_KODEWILAYAH", response.data.result);
            // console.log(response.data.data)
        });
    },
    updateAntrian({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            AntrianService.updateAntrian(id, state.identitaskendaraan)
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

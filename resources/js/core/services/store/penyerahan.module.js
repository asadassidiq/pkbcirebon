import PenyerahanService from "../penyerahan.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    penyerahans: [],
    penyerahansudah: [],
    filter: {
        tgl: "",
        kodepenerbitan: "",
    },
    penyerahan: {
        pendaftaran_id:"",
        namapenerima:"",
        notelppenerima: "",
        noidentitaspenerima: "",
    },
    identitaskendaraan: {
        nouji:"",
        noregistrasikendaraan:"",
        noidentitaspemilik:"",
        merek:"",
        jenis:"",
        model:"",
        nomesin:"",
        thpembuatan:"",
        jbb:"",
        norangka:"",
    },
    carinouji:"",
    page: 1
};

export const mutations = {
    ASSING_DATA(state, penyerahans) {
        state.penyerahans = penyerahans;
    },
    ASSING_DATA_SUDAH(state, penyerahansudah) {
        state.penyerahansudah = penyerahansudah;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.penyerahan = {
            pendaftaran_id:"",
            namapenerima:payload.namapenerima ,
            noidentitaspenerima: payload.noidentitaspenerima,
            notelppenerima: payload.notelppenerima,
        };
        state.identitaskendaraan = {
            merek      : payload.merek,
            nouji: payload.nouji,
            noregistrasikendaraan : payload.noregistrasikendaraan,
            noidentitaspemilik: payload.noidentitaspemilik,
            nomesin : payload.nomesin,
            thpembuatan : payload.thpembuatan,
            jenis : payload.jenis,
            model : payload.model,
            jbb   : payload.jbb,
            norangka : payload.norangka,
        };
        if(state.penyerahan.noidentitaspenerima  === null){
            state.penyerahan.noidentitaspenerima = payload.noidentitaspemilik;
        }
    },
    CLEAR_FORM(state) {
        state.penyerahan= {
            pendaftaran_id:"",
            namapenerima:"",
            noidentitaspenerima:"",
            notelppenerima: "",
        };
        state.identitaskendaraan= {
            nouji:"",
            noregistrasikendaraan:"",
            noidentitaspemilik:"",
            merek:"",
            jenis:"",
            model:"",
            nomesin:"",
            thpembuatan:"",
            jbb:"",
            norangka:"",
        }
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getPenyerahans({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            PenyerahanService.getPenyerahans(state.page,state.filter.tgl, search)
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
    getPenyerahanSudah({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            PenyerahanService.getPenyerahanSudah(state.page,state.filter.tgl,state.filter.kodepenerbitan, search)
                .then(response => {
                    commit("ASSING_DATA_SUDAH", response.data.result);
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
    editPenyerahan({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PenyerahanService.getPenyerahan(payload)
                .then(response => {
                    commit("ASSIGN_FORM", response.data.result);
                    resolve(response.data);
                    // console.log("run edit");
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.response.data.messages,
                        });
                    }else if (error == 'Error: [KTs] ApiService Error: Request failed with status code 403') {
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
    updatePenyerahan({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            PenyerahanService.updatePenyerahan(id, state.penyerahan)
                .then(response => {
                    // commit("CLEAR_FORM");
                    resolve(response.data);
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.response.data.messages,
                        });
                    }
                });
        });
    },
};
export const getters = {
    getEventById: state => id => {
        return state.penyerahans.find(penyerahan => penyerahan.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

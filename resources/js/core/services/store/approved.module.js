import { uuid } from "vue-uuid/dist/index.js";
import ApprovedService from "../approved.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    approveds: [],
    approvedsudah: [],
    filter: {
        tgl: "",
        kodepenerbitan: "",
    },
    approved: {
        proposed_data:[],
        approved:"",
        approval_notes: "",
        type:"",
    },
    identitaskendaraan: {
        uuid: "",
        nouji:"",
        noregistrasikendaraan:"",
        merek:"",
        tipe:"",
        jenis:"",
        subjenis:"",
        nomesin:"",
        thpembuatan:"", 
        jbb:"",
        norangka:"",
        peruntukan:"",
        keterangan:"",
        alasan:[],
    },
    carinouji:"",
    page: 1
};

export const mutations = {
    ASSING_DATA(state, approveds) {
        state.approveds = approveds;
    },
    ASSING_DATA_SUDAH(state, approvedsudah) {
        state.approvedsudah = approvedsudah;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.approved = {
            proposed_data: typeof payload.proposed_data === "string" ? JSON.parse(payload.proposed_data) : payload.proposed_data,
            approved: payload.approved,
            approval_notes: payload.approval_notes,
            type: payload.type,
        };
        state.identitaskendaraan = {
            uuid: payload.uuid,
            merek      : payload.merek,
            tipe: payload.tipe,
            nouji: payload.nouji,
            noregistrasikendaraan : payload.noregistrasikendaraan,
            nomesin : payload.nomesin,
            thpembuatan : payload.thpembuatan,
            jenis : payload.jenis,
            subjenis : payload.subjenis,
            jbb   : payload.jbb,
            norangka : payload.norangka,
            peruntukan : payload.peruntukan,
            keterangan: payload.keterangan,
            alasan : [],
        };
        if(state.approved.noidentitaspenerima  === null){
            state.approved.noidentitaspenerima = payload.noidentitaspemilik;
        }
        if(payload.alasan !== null && payload.alasan  !== undefined && payload.alasan  !== ""){
            try {
                state.identitaskendaraan.alasan = JSON.parse(payload.alasan);
            } catch (e) {
                state.identitaskendaraan.alasan = []; 
            }
        }
    },
    CLEAR_FORM(state) {
        state.approved= {
            proposed_data:[],
            approved:"",
            approval_notes:"",
            type:"",
        };
        state.identitaskendaraan= {
            uuid: "",
            nouji:"",
            noregistrasikendaraan:"",
            merek:"",
            tipe:"",
            jenis:"",
            subjenis:"",
            nomesin:"",
            thpembuatan:"",
            jbb:"",
            norangka:"",
            peruntukan:"",
            keterangan:"",
            alasan:[],
        }
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getApproveds({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            ApprovedService.getApproveds(state.page,state.filter.tgl, search)
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
    editApproved({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            ApprovedService.getApproved(payload)
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
    updateApproved({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            ApprovedService.updateApproved(id, state.approved)
                .then(response => {
                    // commit("CLEAR_FORM");
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
                            };
                        });
                    }

                    else if (error.response.status == 422) {
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
        return state.approveds.find(approved => approved.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

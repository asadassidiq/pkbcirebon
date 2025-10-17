import PosService from "../pengujian.service.js";
import Swal from "sweetalert2";
export const namespaced = true;
var userid = ""

export const state = {
    pendaftarans: [],
    pendaftaransLulus: [],
    pendaftaransTLulus: [],
    posisi:"3",
    filter: {
        tgl: ""
    },
    pendaftaran : {
        pos3:"0",
    },
    identitaskendaraan: {
        nouji:"",
        noregistrasikendaraan:"",
        nama:"",
        merek:"",
        jenis:"",
        nomesin:"",
        thpembuatan:"",
        bahanbakar:"",
        jbb:"",
        norangka:"",
    },
    laikjalan : {
        pendaftaran_id:"",
        alatuji_lampuutamakekuatanpancarlampukanan:"0",
        alatuji_lampuutamakekuatanpancarlampukiri:"0",
        alatuji_lampuutamapenyimpanganlampukanan:"0",
        alatuji_lampuutamapenyimpanganlampukiri:"0",
        alatuji_kincuprodadepan:"0",
        status_kincuprodadepan:"1",
        status_intensitaslampu:"1",
        status_penyimpanganlampu:"1",
    },
    catatan : {
        pendaftaran_id:"",
        nama : "",
        hasiluji: "",
        alasan: [],
        rekomendasi : "",
        pos: "",
        status:"",
    },
    alasan: [],
    page: 1
};

export const mutations = {
    ASSING_DATA(state, pendaftarans) {
        state.pendaftarans = pendaftarans;
    },
    ASSING_DATALULUS(state, pendaftaransLulus) {
        state.pendaftaransLulus = pendaftaransLulus;
    },
    ASSING_DATATLULUS(state, pendaftaransTLulus) {
        state.pendaftaransTLulus = pendaftaransTLulus;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSING_ALASAN(state, alasan) {
        state.alasan = alasan;
    },
    ASSIGN_CATATAN(state, payload){
        state.catatan = {
            pendaftaran_id: payload.pendaftaran_id,
            nama:   payload.nama,
            hasiluji: state.catatan.hasiluji,
            alasan: payload.alasan,
            rekomendasi: payload.rekomendasi,
            pos: payload.pos,
            status: '1',
        }
    },
    ASSIGN_PENDAFTARAN(state, payload) {
        state.pendaftaran = {
            pos3 : payload.pos3,
        }
    },
    ASSIGN_PENGUJIAN(state, payload) {
        state.laikjalan = {
            pendaftaran_id: payload.pendaftaran_id,
            alatuji_lampuutamakekuatanpancarlampukanan:payload.alatuji_lampuutamakekuatanpancarlampukanan,
            alatuji_lampuutamakekuatanpancarlampukiri:payload.alatuji_lampuutamakekuatanpancarlampukiri,
            alatuji_lampuutamapenyimpanganlampukanan:payload.alatuji_lampuutamapenyimpanganlampukanan,
            alatuji_lampuutamapenyimpanganlampukiri:payload.alatuji_lampuutamapenyimpanganlampukiri,
            alatuji_kincuprodadepan:payload.alatuji_kincuprodadepan,
            status_kincuprodadepan:payload.status_kincuprodadepan,
            status_intensitaslampu:payload.status_intensitaslampu,
            status_penyimpanganlampu:payload.status_penyimpanganlampu,
        };
    },
    ASSIGN_FORM(state, payload) {
        state.identitaskendaraan = {
            nama      : payload.nama,
            nouji: payload.nouji,
            noregistrasikendaraan : payload.noregistrasikendaraan,
            merek : payload.merek,
            jenis : payload.jenis,
            nomesin : payload.nomesin,
            norangka : payload.norangka,
            jbb   : payload.jbb,
            bahanbakar : payload.bahanbakar,
            thpembuatan: payload.thpembuatan,
        };
    },
    CHECK_HASILUJI(state){
        if (state.laikjalan.alatuji_lampuutamakekuatanpancarlampukanan < 12000) {
            state.pendaftaran.pos3 = '0';
            state.laikjalan.status_intensitaslampu = '0';
        } else if (state.laikjalan.alatuji_lampuutamakekuatanpancarlampukiri < 12000) {
            state.pendaftaran.pos3 = '0';
            state.laikjalan.status_intensitaslampu = '0';
        } else {
            state.laikjalan.status_intensitaslampu = '1';
        }

        if (state.laikjalan.alatuji_lampuutamapenyimpanganlampukiri > 1.09) {
            state.pendaftaran.pos3 = '0';
            state.laikjalan.status_penyimpanganlampu = '0';
        } else if (state.laikjalan.alatuji_lampuutamapenyimpanganlampukanan > 0.34) {
            state.laikjalan.status_penyimpanganlampu = '0';
            state.pendaftaran.pos3 = '0';
            state.laikjalan.status_penyimpanganlampu = '0';
        }else {
            state.laikjalan.status_penyimpanganlampu = '1';
        }

        if(state.laikjalan.alatuji_kincuprodadepan > 5 || state.laikjalan.alatuji_kincuprodadepan < -5) {
            state.pendaftaran.pos3 = '0';
            state.laikjalan.status_kincuprodadepan = '0';
        }else{
            state.laikjalan.status_kincuprodadepan = '1';
        }

        if(state.laikjalan.status_intensitaslampu == '1' && state.laikjalan.status_penyimpanganlampu == '1' && state.laikjalan.status_kincuprodadepan == '1')
        {
            state.pendaftaran.pos3 = '1';

        }
    },
    CLEAR_FORM(state) {
        state.laikjalan = {
            pendaftaran_id:"", 
            alatuji_lampuutamakekuatanpancarlampukanan:"0",
            alatuji_lampuutamakekuatanpancarlampukiri:"0",
            alatuji_lampuutamapenyimpanganlampukanan:"0",
            alatuji_lampuutamapenyimpanganlampukiri:"0",
            alatuji_kincuprodadepan:"0",
            status_kincuprodadepan:"1",
            status_intensitaslampu:"1",
            status_penyimpanganlampu:"1",
        };
        state.pendaftaran = {
            pos3:"0",
        };
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },

    CLEAR_CATATAN(state){
        state.catatan = {
            pendaftaran_id:"",
            nama : "",
            hasiluji: "",
            alasan : [],
            rekomendasi : "",
            pos:"",
            status:"1",
        };
    },
};

export const actions = {
    getPendaftarans({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        let status = '';
        return new Promise((resolve, reject) => {
            PosService.getPendaftarans(state.page,state.filter.tgl,state.posisi,status,search)
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
    getPendaftaransLulus({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        let status = '1';
        return new Promise((resolve, reject) => {
            PosService.getPendaftarans(state.page,state.filter.tgl,state.posisi,status,search)
                .then(response => {
                    commit("ASSING_DATALULUS", response.data.result);
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
    getPendaftaransTLulus({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        let status = '0';
        return new Promise((resolve, reject) => {
            PosService.getPendaftarans(state.page,state.filter.tgl,state.posisi,status,search)
                .then(response => {
                    commit("ASSING_DATATLULUS", response.data.result);
                    resolve(response.data);
                    console.log('response.data.result')
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
    getIdentitaskendaraan({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PosService.getIdentitaskendaraan(payload)
                .then(response => {
                    commit("ASSIGN_FORM", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                    // console.log(error.message);
                });
        });
    },
    getAlasan({ commit, state }) {
        return new Promise((resolve, reject) => {
            PosService.getAlasan(state.catatan.nama)
                .then(response => {
                    commit("ASSING_ALASAN", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                });
        });
    },
    getCatatan({ commit, state }, id) {
        return new Promise((resolve, reject) => {
            PosService.getCatatan(id,state.catatan.nama)
                .then(response => {
                    if(response.data.result == 'kosong'){

                    }else{
                        commit("ASSIGN_CATATAN", response.data.result);
                    }
                    resolve(response.data);
                })
                .catch(error => {
                });
        });
    },
    submitCatatan({ dispatch, commit, state }, id) {
        state.catatan.pendaftaran_id = id;
        return new Promise((resolve, reject) => {
            PosService.postCatatan(state.catatan)
                .then(response => {
                    commit("ASSIGN_CATATAN", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                });
        });
    },
    submitPos({ dispatch, commit, state }, id) {
        var data = [];
        state.laikjalan.pendaftaran_id = id;
        data.push(id,state.pendaftaran,state.laikjalan)
        return new Promise((resolve, reject) => {
            PosService.postPos(data,state.posisi)
                .then(response => {
                    commit("ASSIGN_PENGUJIAN", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                });
        });
    },
    editPos({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PosService.getPos(payload,state.posisi)
                .then(response => {
                    commit("ASSIGN_PENGUJIAN", response.data.result);
                    commit("ASSIGN_PENDAFTARAN", response.data.result);
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

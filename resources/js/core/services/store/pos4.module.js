import PosService from "../pengujian.service.js";
import Swal from "sweetalert2";
export const namespaced = true;
var userid = ""

export const state = {
    pendaftarans: [],
    pendaftaransLulus: [],
    pendaftaransTLulus: [],
    posisi:"4",
    filter: {
        tgl: ""
    },
    pendaftaran : {
        pos4:"0",
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
        jumlah_sumbu: "2",
        beratkosong: "0",
        beratsumbu1: "0",
        beratsumbu2: "0",
        beratsumbu3: "0",
        beratsumbu4: "0",
        beratsumbu5: "0",
        beratsumbu6: "0",
        beratsumbu7: "0",
        beratsumbu8: "0",
        beratsumbu9: "0",
        beratsumbu10: "0",
        beratsumbu11: "0",
        beratsumbu12: "0",
    },
    laikjalan : {
        pendaftaran_id:"",
        alatuji_remutamatotalgayapengereman:"0",
        alatuji_remparkirtotalgayapengereman:"0",
        berats1:"0",
        berats2:"0",
        berats3:"0",
        berats4:"0",
        berats5:"0",
        berats6:"0",
        berats7:"0",
        berats8:"0",
        berats9:"0",
        berats10:"0",
        berats11:"0",
        berats12:"0",
        gayaremkiri1:"0",
        gayaremkiri2:"0",
        gayaremkiri3:"0",
        gayaremkiri4:"0",
        gayaremkiri5:"0",
        gayaremkiri6:"0",
        gayaremkiri7:"0",
        gayaremkiri8:"0",
        gayaremkiri9:"0",
        gayaremkiri10:"0",
        gayaremkiri11:"0",
        gayaremkiri12:"0",
        gayaremkanan1:"0",
        gayaremkanan2:"0",
        gayaremkanan3:"0",
        gayaremkanan4:"0",
        gayaremkanan5:"0",
        gayaremkanan6:"0",
        gayaremkanan7:"0",
        gayaremkanan8:"0",
        gayaremkanan9:"0",
        gayaremkanan10:"0",
        gayaremkanan11:"0",
        gayaremkanan12:"0",
        alatuji_remutamaselisihgayapengeremanrodakirikanan1:"0",
        alatuji_remutamaselisihgayapengeremanrodakirikanan2:"0",
        alatuji_remutamaselisihgayapengeremanrodakirikanan3:"0",
        alatuji_remutamaselisihgayapengeremanrodakirikanan4:"0",
        alatuji_remparkirtangan:"0",
        alatuji_remparkirkaki:"0",
        alatuji_gayapengeremanparkirkanan:"0",
        alatuji_gayapengeremanparkirkiri:"0",
        alatuji_penunjukkecepatan:"0",
        status_speedometer:"1",
        status_remkanan:"0",
        status_remkiri:"0",
        status_remparkir:"0",
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
            pos4 : payload.pos4,
        }
    },
    ASSIGN_PENGUJIAN(state, payload) {
        state.laikjalan = {
            pendaftaran_id: payload.pendaftaran_id,
            alatuji_remutamatotalgayapengereman:payload.alatuji_remutamatotalgayapengereman,
            alatuji_remparkirtotalgayapengereman:payload.alatuji_remparkirtotalgayapengereman,
            berats1:payload.berats1,
            berats2:payload.berats2,
            berats3:payload.berats3,
            berats4:payload.berats4,
            berats5:payload.berats5,
            berats6:payload.berats6,
            berats7:payload.berats7,
            berats8:payload.berats8,
            berats9:payload.berats9,
            berats10:payload.berats10,
            berats11:payload.berats11,
            berats12:payload.berats12,
            gayaremkiri1:payload.gayaremkiri1,
            gayaremkiri2:payload.gayaremkiri2,
            gayaremkiri3:payload.gayaremkiri3,
            gayaremkiri4:payload.gayaremkiri4,
            gayaremkiri5:payload.gayaremkiri5,
            gayaremkiri6:payload.gayaremkiri6,
            gayaremkiri7:payload.gayaremkiri7,
            gayaremkiri8:payload.gayaremkiri8,
            gayaremkiri9:payload.gayaremkiri9,
            gayaremkiri10:payload.gayaremkiri10,
            gayaremkiri11:payload.gayaremkiri11,
            gayaremkiri12:payload.gayaremkiri12,
            gayaremkanan1:payload.gayaremkanan1,
            gayaremkanan2:payload.gayaremkanan2,
            gayaremkanan3:payload.gayaremkanan3,
            gayaremkanan4:payload.gayaremkanan4,
            gayaremkanan5:payload.gayaremkanan5,
            gayaremkanan6:payload.gayaremkanan6,
            gayaremkanan7:payload.gayaremkanan7,
            gayaremkanan8:payload.gayaremkanan8,
            gayaremkanan9:payload.gayaremkanan9,
            gayaremkanan10:payload.gayaremkanan10,
            gayaremkanan11:payload.gayaremkanan11,
            gayaremkanan12:payload.gayaremkanan12,
            alatuji_remutamaselisihgayapengeremanrodakirikanan1:payload.alatuji_remutamaselisihgayapengeremanrodakirikanan1,
            alatuji_remutamaselisihgayapengeremanrodakirikanan2:payload.alatuji_remutamaselisihgayapengeremanrodakirikanan2,
            alatuji_remutamaselisihgayapengeremanrodakirikanan3:payload.alatuji_remutamaselisihgayapengeremanrodakirikanan3,
            alatuji_remutamaselisihgayapengeremanrodakirikanan4:payload.alatuji_remutamaselisihgayapengeremanrodakirikanan4,
            alatuji_remutamaselisihgayapengeremanrodakirikanan5:payload.alatuji_remutamaselisihgayapengeremanrodakirikanan5,
            alatuji_remutamaselisihgayapengeremanrodakirikanan6:payload.alatuji_remutamaselisihgayapengeremanrodakirikanan6,
            alatuji_gayapengeremanparkirkanan:payload.alatuji_gayapengeremanparkirkanan,
            alatuji_gayapengeremanparkirkiri:payload.alatuji_gayapengeremanparkirkiri,
            alatuji_remparkirtangan:payload.alatuji_remparkirtangan,
            alatuji_remparkirkaki:payload.alatuji_remparkirkaki,
            alatuji_penunjukkecepatan:payload.alatuji_penunjukkecepatan,
            status_speedometer:payload.status_speedometer,
            status_remkanan:payload.status_remkanan,
            status_remkiri:payload.status_remkiri,
            status_remparkir:payload.status_remparkir,
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
            jumlah_sumbu: payload.jumlah_sumbu,
            beratkosong: payload.beratkosong,
            beratsumbu1: payload.beratsumbu1,
            beratsumbu2: payload.beratsumbu2,
            beratsumbu3: payload.beratsumbu3,
            beratsumbu4: payload.beratsumbu4,
            beratsumbu5: payload.beratsumbu5,
            beratsumbu6: payload.beratsumbu6,
            beratsumbu7: payload.beratsumbu7,
            beratsumbu8: payload.beratsumbu8,
            beratsumbu9: payload.beratsumbu9,
            beratsumbu10: payload.beratsumbu10,
            beratsumbu11: payload.beratsumbu11,
            beratsumbu12: payload.beratsumbu12,
        };
    },
    CHECK_HASILUJI(state){
        if (state.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan1 > 8 || state.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan2 > 8 || state.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan3 > 8 || state.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan4 > 8 || state.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan5 > 8 || state.laikjalan.alatuji_remutamaselisihgayapengeremanrodakirikanan6 > 8) {
            state.pendaftaran.pos4 = '0';
            state.laikjalan.status_remkiri = '0';
            state.laikjalan.status_remkanan = '0';
        } else if (state.pengujian.effsumbu1 < 50 || state.pengujian.effsumbu1 > 100 || state.pengujian.effsumbu2 < 50 || state.pengujian.effsumbu2 > 100) {
            state.pendaftaran.pos4 = '0';
            state.laikjalan.status_remkiri = '0';
            state.laikjalan.status_remkanan = '0';
        } else if (state.laikjalan.alatuji_remparkirtangan < 12) {
            state.pendaftaran.pos4 = '0';
            state.laikjalan.status_remparkir = 0;
        } else if (state.pengujian.totalgayarem < 50) {
            state.pendaftaran.pos4 = '0';
            state.laikjalan.status_remkiri = '0';
            state.laikjalan.status_remkanan = '0';
        } else if (state.laikjalan.alatuji_remparkirtangan < 12) {
            state.pendaftaran.pos4 = '0';
            state.laikjalan.status_remparkir = 0;
        } else if (state.laikjalan.alatuji_penunjukkecepatan < 36 || state.laikjalan.alatuji_penunjukkecepatan > 46) {
            state.pendaftaran.pos4 = '0';
            state.laikjalan.status_speedometer = '0';
        } else {
            state.pendaftaran.pos4 = '1';
            state.laikjalan.status_remparkir = '1';
            state.laikjalan.status_remkiri = '1';
            state.laikjalan.status_remkanan = '1';
            state.laikjalan.status_speedometer = '1';
        }
    },
    CLEAR_FORM(state) {
        state.laikjalan = {
            pendaftaran_id:"",
            alatuji_remutamatotalgayapengereman:"0",
            alatuji_remparkirtotalgayapengereman:"0",
            berats1:"0",
            berats2:"0",
            berats3:"0",
            berats4:"0",
            berats5:"0",
            berats6:"0",
            berats7:"0",
            berats8:"0",
            berats9:"0",
            berats10:"0",
            berats11:"0",
            berats12:"0",
            gayaremkiri1:"0",
            gayaremkiri2:"0",
            gayaremkiri3:"0",
            gayaremkiri4:"0",
            gayaremkiri5:"0",
            gayaremkiri6:"0",
            gayaremkiri7:"0",
            gayaremkiri8:"0",
            gayaremkiri9:"0",
            gayaremkiri10:"0",
            gayaremkiri11:"0",
            gayaremkiri12:"0",
            gayaremkanan1:"0",
            gayaremkanan2:"0",
            gayaremkanan3:"0",
            gayaremkanan4:"0",
            gayaremkanan5:"0",
            gayaremkanan6:"0",
            gayaremkanan7:"0",
            gayaremkanan8:"0",
            gayaremkanan9:"0",
            gayaremkanan10:"0",
            gayaremkanan11:"0",
            gayaremkanan12:"0",
            alatuji_remutamaselisihgayapengeremanrodakirikanan1:"0",
            alatuji_remutamaselisihgayapengeremanrodakirikanan2:"0",
            alatuji_remutamaselisihgayapengeremanrodakirikanan3:"0",
            alatuji_remutamaselisihgayapengeremanrodakirikanan4:"0",
            alatuji_remutamaselisihgayapengeremanrodakirikanan5:"0",
            alatuji_remutamaselisihgayapengeremanrodakirikanan6:"0",
            alatuji_remparkirtangan:"0",
            alatuji_remparkirkaki:"0",
            alatuji_gayaremparkirtangan:"0",
            alatuji_gayaremparkirkaki:"0",
            alatuji_gayapengeremanparkirkanan:"0",
            alatuji_gayapengeremanparkirkiri:"0",
            alatuji_penunjukkecepatan:"0",
            status_speedometer:"1",
            status_remkanan:"0",
            status_remkiri:"0",
            status_remparkir:"0",
        };
        state.pendaftaran = {
            pos4:"0",
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
                    // console.log("run edit");
                })
                .catch(error => {
                    console.log(error.message);
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

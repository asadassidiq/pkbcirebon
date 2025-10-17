import PosService from "../pengujian.service.js";
import Swal from "sweetalert2";
export const namespaced = true;
export const state = {
    pendaftarans: [],
    pendaftaransLulus: [],
    pendaftaransTLulus: [],
    posisi:"2",
    filter: {
        tgl: ""
    },
    pendaftaran : {
        pos2:"0",
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
        alatuji_tingkatkebisingan:"0",
        alatuji_emisiasapbahanbakarsolar:"0",
        alatuji_emisicobahanbakarbensin:"0",
        alatuji_emisihcbahanbakarbensin:"0",
        status_emisibensin:"1",
        status_emisisolar:"1",
        status_kebisingan:"0",
    },
    bawah : {
        pendaftaran_id:"",
        rangkalandasan:"1",
        motorpenggerak:"1",
        sistempenerusdaya:"1",
        sistemkemudi:"1",
        sistemsuspensi:"1",
        sistemroda:"1",
        sistemrem:"1",
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
            pos2 : payload.pos2,
        }
    },
    ASSIGN_PENGUJIAN(state, payload) {
        state.laikjalan = {
            pendaftaran_id: payload.pendaftaran_id,
            alatuji_tingkatkebisingan:payload.alatuji_tingkatkebisingan,
            alatuji_emisiasapbahanbakarsolar:payload.alatuji_emisiasapbahanbakarsolar,
            alatuji_emisicobahanbakarbensin:payload.alatuji_emisicobahanbakarbensin,
            alatuji_emisihcbahanbakarbensin:payload.alatuji_emisihcbahanbakarbensin,
            status_kebisingan:payload.status_kebisingan,
        };
    },
    ASSIGN_BAWAH(state, payload) {
        if(payload.rangkalandasan == "0" || payload.rangkalandasan== "1"){
            state.bawah = {
                pendaftaran_id: payload.pendaftaran_id,
                rangkalandasan:payload.rangkalandasan,
                motorpenggerak:payload.motorpenggerak,
                sistempenerusdaya:payload.sistempenerusdaya,
                sistemkemudi:payload.sistemkemudi,
                sistemsuspensi:payload.sistemsuspensi,
                sistemroda:payload.sistemroda,
                sistemrem:payload.sistemrem,
            };
        }else{
            state.bawah = {
                pendaftaran_id: payload.pendaftaran_id,
                rangkalandasan:"1",
                motorpenggerak:"1",
                sistempenerusdaya:"1",
                sistemkemudi:"1",
                sistemsuspensi:"1",
                sistemroda:"1",
                sistemrem:"1",
            };
        }
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
        const isBarang = (value) => {
            return typeof value === 'string' && (
                value.startsWith("MOBIL BARANG") ||
                value.startsWith("KERETA") ||
                value.startsWith("MOBIL TANGKI") ||
                value.startsWith("MOBIL PENARIK") ||
                value.startsWith("KENDARAAN BERMOTOR RODA TIGA")
            );
        };

        const isPenumpang = (value) => {
            return typeof value === 'string' && (
                value.startsWith("MOBIL PENUMPANG") ||
                value.startsWith("MOBIL BUS") ||
                value.startsWith("KENDARAAN KHUSUS")
            );
        };

        if(state.bawah.rangkalandasan == '0' || state.bawah.motorpenggerak == '0' || state.bawah.sistempenerusdaya == '0' || state.bawah.sistemkemudi == '0' || state.bawah.sistemsuspensi == '0' || state.bawah.sistemroda == '0' || state.bawah.sistemrem == '0'){
            state.pendaftaran.pos2 = 0;
        }
        else if ((state.identitaskendaraan.jbb <= 3500 && state.identitaskendaraan.thpembuatan < 2010 && state.laikjalan.alatuji_emisiasapbahanbakarsolar > 65) || (state.identitaskendaraan.jbb <= 3500 && state.identitaskendaraan.thpembuatan >= 2010 && state.identitaskendaraan.thpembuatan <= 2021 && state.laikjalan.alatuji_emisiasapbahanbakarsolar > 40) || (state.identitaskendaraan.jbb <= 3500 && state.identitaskendaraan.thpembuatan > 2021 && state.laikjalan.alatuji_emisiasapbahanbakarsolar > 30) || (state.identitaskendaraan.jbb > 3500 && state.identitaskendaraan.thpembuatan < 2010 && state.laikjalan.alatuji_emisiasapbahanbakarsolar > 65) || (state.identitaskendaraan.jbb > 3500 && state.identitaskendaraan.thpembuatan >= 2010 && state.identitaskendaraan.thpembuatan <= 2021 && state.laikjalan.alatuji_emisiasapbahanbakarsolar > 40) || (state.identitaskendaraan.jbb > 3500 && state.identitaskendaraan.thpembuatan > 2021 && state.laikjalan.alatuji_emisiasapbahanbakarsolar > 35)) {
            state.laikjalan.status_emisisolar = '0';
            state.pendaftaran.pos2 = 0;
        }
        else if ((isPenumpang(state.identitaskendaraan.jenis) && state.identitaskendaraan.thpembuatan < 2007 && state.laikjalan.alatuji_emisicobahanbakarbensin > 4) ||
            (isPenumpang(state.identitaskendaraan.jenis) && state.identitaskendaraan.thpembuatan >= 2007 && state.identitaskendaraan.thpembuatan <= 2018 && state.laikjalan.alatuji_emisicobahanbakarbensin > 1) ||
            (isPenumpang(state.identitaskendaraan.jenis) && state.identitaskendaraan.thpembuatan > 2018 && state.laikjalan.alatuji_emisicobahanbakarbensin > 0.5) ||
            (isBarang(state.identitaskendaraan.jenis) && state.identitaskendaraan.thpembuatan < 2007 && state.laikjalan.alatuji_emisicobahanbakarbensin > 4) ||
            (isBarang(state.identitaskendaraan.jenis) && state.identitaskendaraan.thpembuatan >= 2007 && state.identitaskendaraan.thpembuatan <= 2018 && state.laikjalan.alatuji_emisicobahanbakarbensin > 1) ||
            (isBarang(state.identitaskendaraan.jenis) && state.identitaskendaraan.thpembuatan > 2018 && state.laikjalan.alatuji_emisicobahanbakarbensin > 0.5) ||
            (isPenumpang(state.identitaskendaraan.jenis) && state.identitaskendaraan.thpembuatan < 2007 && state.laikjalan.alatuji_emisihcbahanbakarbensin > 1000) ||
            (isPenumpang(state.identitaskendaraan.jenis) && state.identitaskendaraan.thpembuatan >= 2007 && state.identitaskendaraan.thpembuatan <= 2018 && state.laikjalan.alatuji_emisihcbahanbakarbensin > 150) ||
            (isPenumpang(state.identitaskendaraan.jenis) && state.identitaskendaraan.thpembuatan > 2018 && state.laikjalan.alatuji_emisihcbahanbakarbensin > 100) ||
            (isBarang(state.identitaskendaraan.jenis) && state.identitaskendaraan.thpembuatan < 2007 && state.laikjalan.alatuji_emisihcbahanbakarbensin > 1100) ||
            (isBarang(state.identitaskendaraan.jenis) && state.identitaskendaraan.thpembuatan >= 2007 && state.identitaskendaraan.thpembuatan <= 2018 && state.laikjalan.alatuji_emisihcbahanbakarbensin > 200) ||
            (isBarang(state.identitaskendaraan.jenis) && state.identitaskendaraan.thpembuatan > 2018 && state.laikjalan.alatuji_emisihcbahanbakarbensin > 150)) {
            state.laikjalan.status_emisibensin = '0';
            state.pendaftaran.pos2 = 0;
        }
        else if(state.laikjalan.alatuji_tingkatkebisingan < 83 || state.laikjalan.alatuji_tingkatkebisingan > 118){
                state.laikjalan.status_kebisingan = '0';
                state.pendaftaran.pos2 = '0';
            }
        else {
            state.pendaftaran.pos2 = 1;
            state.laikjalan.status_emisibensin = '1';
            state.laikjalan.status_emisisolar = '1';
            state.laikjalan.status_kebisingan = '1';
        }
    },
    CLEAR_FORM(state) {
        state.laikjalan = {
            pendaftaran_id:"",
            alatuji_tingkatkebisingan:"0",
            alatuji_emisiasapbahanbakarsolar:"0",
            alatuji_emisicobahanbakarbensin:"0",
            alatuji_emisihcbahanbakarbensin:"0",
            status_emisibensin:"1",
            status_emisisolar:"1",
            status_kebisingan:"0",
        };
        state.bawah = {
            pendaftaran_id:"",
            rangkalandasan:"1",
            motorpenggerak:"1",
            sistempenerusdaya:"1",
            sistemkemudi:"1",
            sistemsuspensi:"1",
            sistemroda:"1",
            sistemrem:"1",
        };
        state.pendaftaran = {
            pos2:"0",
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
        state.bawah.pendaftaran_id = id;
        data.push(id,state.pendaftaran,state.laikjalan,state.bawah)
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
    isBarang(value) {
        return typeof value === 'string' &&  (
            value.startsWith("MOBIL BARANG") ||
            value.startsWith("KERETA") ||
            value.startsWith("MOBIL TANGKI") ||
            value.startsWith("MOBIL PENARIK") ||
            value.startsWith("KENDARAAN BERMOTOR RODA TIGA")
        );
    },
    isPenumpang(value) {
        return typeof value === 'string' && (
            value.startsWith("MOBIL PENUMPANG") ||
            value.startsWith("MOBIL BUS") ||
            value.startsWith("KENDARAAN KHUSUS")
        );
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

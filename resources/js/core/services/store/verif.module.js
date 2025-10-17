import VerifService from "../verif.service.js";
import Swal from "sweetalert2";
export const namespaced = true;
var userid = "";

export const state = {
    pendaftarans: [],
    pendaftaransLulus: [],
    hasiluji:[],
    pendaftaransVerif2: [],
    pendaftaransLulusVerif2: [],
    pendaftaransTLulus: [],
    kuota: [],
    catatanpos: [],
    posisi:"9",
    filter: {
        tgl: ""
    },
    identitaskendaraan: {
        uuid:"",
        nouji:"",
        noregistrasikendaraan:"",
        nama:"",
        jenis:"",
        peruntukan:"",
        keterangan:"",
        jbb:"",
        bahanbakar:"",
        merek:"",
        tipe:"",
        norangka:"",
        nomesin:""
    },
    pengujian : {
        pos1:"0",
        catatanpos1:"",
        hasilujipos1:"",
        pos2:"0",
        catatanpos2:"",
        hasilujipos2:"",
        pos3:"0",
        catatanpos3:"",
        hasilujipos3:"",
        pos4:"0",
        catatanpos4:"",
        hasilujipos4:"",
        pos5:"0",
        catatanpos5:"",
        hasilujipos5:"",
        pos6:"0",
        catatanpos6:"",
        hasilujipos6:"",
        pos7:"0",
        catatanpos7:"",
        hasilujipos7:"",
        pos8:"0",
        catatanpos8:"",
        hasilujipos8:"",
        verif:"0",
        catatanverif:"",
        tglujiulang:"",
        user_verif:"",
        jenis_cetak:"0"
    },
    pengujian2 : {
        pos1:"0",
        catatanpos1:"",
        hasilujipos1:"",
        pos2:"0",
        catatanpos2:"",
        hasilujipos2:"",
        pos3:"0",
        catatanpos3:"",
        hasilujipos3:"",
        verif:"0",
        catatanverif:"",
        tglujiulang:"",
        user_verif2:"",
    },
    surat: {
        v_stnk:"0",
        v_kartuinduk:"0",
        v_srut:"0",
        v_smartcard:"0",
        v_riwayat:"0",
        catatan:"0",
        status_cetak:"0",
        posverif:"0",
        passkey:"",
        keterangan:"",
    },
    page: 1
};

export const mutations = {
    ASSING_DATA(state, pendaftarans) {
        state.pendaftarans = pendaftarans;
    },
    ASSING_DATALULUS(state, pendaftaransLulus) {
        state.pendaftaransLulus = pendaftaransLulus;
    },
    ASSING_DATAHASILUJI(state, hasiluji) {
        state.hasiluji = hasiluji;
    },
    ASSING_DATAVERIF2(state, pendaftaransVerif2) {
        state.pendaftaransVerif2 = pendaftaransVerif2;
    },
    ASSING_DATALULUSVERIF2(state, pendaftaransLulusVerif2) {
        state.pendaftaransLulusVerif2 = pendaftaransLulusVerif2;
    },
    ASSING_DATATLULUS(state, pendaftaransTLulus) {
        state.pendaftaransTLulus = pendaftaransTLulus;
    },
    ASSING_KUOTA(state, kuota) {
        state.kuota = kuota;
    },
    ASSING_CATATANPOS(state, catatanpos) {
        state.catatanpos = catatanpos;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_PENGUJIAN(state, payload) {
        state.pengujian = {
            pendaftaran_id: payload.pendaftaran_id,
            identitaskendaraan_id:payload.identitaskendaraan_id,
            pos1:payload.pos1,
            catatanpos1:payload.catatanpos1,
            hasilujipos1:"Kedalaman alur ban : "+payload.alatuji_kedalamanalurban+"mm",
            pos2:payload.pos2,
            catatanpos2:payload.catatanpos2,
            hasilujipos2:"klakson : "+payload.alatuji_tingkatkebisingan+"Db",
            pos3:payload.pos3,
            catatanpos3:payload.catatanpos3,
            hasilujipos3:"",
            pos4:payload.pos4,
            catatanpos4:payload.catatanpos4,
            hasilujipos4:"Intensitas Lampu Utama Kanan : "+payload.alatuji_lampuutamakekuatanpancarlampukanan+"Cd, Intensitas Lampu Utama Kiri : "+payload.alatuji_lampuutamakekuatanpancarlampukiri+"Cd",
            pos5:payload.pos5,
            catatanpos5:payload.catatanpos5,
            hasilujipos5:"sideslip : "+payload.alatuji_kincuprodadepan+"mm/Km",
            pos6:payload.pos6,
            catatanpos6:payload.catatanpos6,
            hasilujipos6:"",
            pos7:payload.pos7,
            catatanpos7:payload.catatanpos7,
            hasilujipos7:"eff rem Parkir : "+payload.alatuji_remparkirtangan+"%",
            pos8:payload.pos8,
            catatanpos8:payload.catatanpos8,
            hasilujipos8:"speedometer : "+payload.alatuji_penunjukkecepatan+"Km/Jam",
            verif:payload.verif,
            catatanverif:payload.catatanverif,
            tglujiulang:payload.tglujiulang,
            jenis_cetak:"0"
        };

        if(payload.pos1 == '1' && payload.pos2 == '1' && payload.pos3 == '1')
            state.pengujian.verif = '1';
        else if(payload.verif == '1'){
            state.pengujian.verif = '1';
        }
        else
            state.pengujian.verif = '0';

        if(state.identitaskendaraan.bahanbakar.toUpperCase() == "SOLAR"){
            state.pengujian.hasilujipos3 = "KETEBALAN ASAP : "+payload.alatuji_emisiasapbahanbakarsolar+" HSU";
        }else if(state.identitaskendaraan.bahanbakar.toUpperCase() == "BENSIN"){
            state.pengujian.hasilujipos3 = "CO : "+payload.alatuji_emisicobahanbakarbensin+"%, HC : "+payload.alatuji_emisihcbahanbakarbensin+"Ppm";
        }
        var i = 0;
        var kiri = 0; var kanan = 0; var total = 0; var effsumbu1 = 0;
        var beratSumbu = "";
        if(payload.berats1 > 0)
        {
            kiri  = payload.gayaremkiri1;
            kanan = payload.gayaremkanan1;
            total = parseInt(kiri)+parseInt(kanan);
            effsumbu1 = Math.ceil((total/payload.berats1)*100);
            i = 1;
            beratSumbu = "Berat Sumbu 1 : "+payload.berats1+"Kg";
        }
        var kiri = 0; var kanan = 0; var total = 0; var effsumbu2 = 0;
        if(payload.berats2 > 0)
        {
            kiri  = payload.gayaremkiri2;
            kanan = payload.gayaremkanan2;
            total = parseInt(kiri)+parseInt(kanan);
            effsumbu2 = Math.ceil((total/payload.berats2)*100);
            i = 2;
            beratSumbu = beratSumbu+"Berat Sumbu 2 : "+payload.berats2+"Kg";
        }
        var kiri = 0; var kanan = 0; var total = 0; var effsumbu3 = 0;
        if(payload.berats3 > 0)
        {
            kiri  = payload.gayaremkiri3;
            kanan = payload.gayaremkanan3;
            total = parseInt(kiri)+parseInt(kanan);
            effsumbu3 = Math.ceil((total/payload.berats3)*100);
            i = 3;
            beratSumbu = beratSumbu+"Berat Sumbu 3 : "+payload.berats3+"Kg";
        }
        var kiri = 0; var kanan = 0; var total = 0; var effsumbu4 = 0;
        if(payload.berats4 > 0)
        {
            kiri  = payload.gayaremkiri4;
            kanan = payload.gayaremkanan4;
            total = parseInt(kiri)+parseInt(kanan);
            effsumbu4 = Math.ceil((total/payload.berats4)*100);
            i = 4;
            beratSumbu = beratSumbu+"Berat Sumbu 4 : "+payload.berats4+"Kg";
        }
        var kiri = 0; var kanan = 0; var total = 0; var effsumbu4 = 0;
        if(payload.berats5 > 0)
        {
            kiri  = payload.gayaremkiri5;
            kanan = payload.gayaremkanan5;
            total = parseInt(kiri)+parseInt(kanan);
            effsumbu5 = Math.ceil((total/payload.berats5)*100);
            i = 5;
            beratSumbu = beratSumbu+"Berat Sumbu 5 : "+payload.berats5+"Kg";
        }
        var kiri = 0; var kanan = 0; var total = 0; var effsumbu4 = 0;
        if(payload.berats6 > 0)
        {
            kiri  = payload.gayaremkiri6;
            kanan = payload.gayaremkanan6;
            total = parseInt(kiri)+parseInt(kanan);
            effsumbu6 = Math.ceil((total/payload.berats6)*100);
            i = 6;
            beratSumbu = beratSumbu+"Berat Sumbu 6 : "+payload.berats6+"Kg";
        }
        if(i > 0){
            state.pengujian.hasilujipos6 = beratSumbu;
            state.pengujian.hasilujipos7 = state.pengujian.hasilujipos7+", EFF Total : "+ (parseInt(effsumbu1)+parseInt(effsumbu2)+parseInt(effsumbu3)+parseInt(effsumbu4)+parseInt(effsumbu5)+parseInt(effsumbu6))/i +"%";
        }
    },
    ASSIGN_PENGUJIAN2(state, payload) {
        state.pengujian2 = {
            pendaftaran_id: payload.pendaftaran_id,
            identitaskendaraan_id:payload.identitaskendaraan_id,
            pos1:payload.pos1,
            catatanpos1:payload.catatanpos1,
            hasilujipos1: "",
            pos2:payload.pos2,
            catatanpos2:payload.catatanpos2,
            hasilujipos2:"Intensitas Lampu Utama Kanan : "+payload.alatuji_lampuutamakekuatanpancarlampukanan+"Cd, Intensitas Lampu Utama Kiri : "+payload.alatuji_lampuutamakekuatanpancarlampukiri+"Cd"+", klakson : "+payload.alatuji_tingkatkebisingan+"Db",
            pos3:payload.pos3,
            catatanpos3:payload.catatanpos3,
            hasilujipos3:"sideslip : "+payload.alatuji_kincuprodadepan+"mm/Km"+", eff rem Parkir : "+payload.alatuji_remparkirtangan+"%"+", speedometer : "+payload.alatuji_penunjukkecepatan+"Km/Jam",
            verif:payload.verif,
            catatanverif:payload.catatanverif,
            tglujiulang:payload.tglujiulang,
        };

        if(payload.pos1 == '1' && payload.pos2 == '1' && payload.pos3 == '1')
            state.pengujian2.verif = '1';
        else if(payload.verif == '1'){
            state.pengujian2.verif = '1';
        }
        else
            state.pengujian2.verif = '0';

        if(state.identitaskendaraan.bahanbakar.toUpperCase() == "SOLAR"){
            state.pengujian.hasilujipos1 = "KETEBALAN ASAP : "+payload.alatuji_emisiasapbahanbakarsolar+" HSU"+", Kedalaman alur ban : "+payload.alatuji_kedalamanalurban+"mm";
        }else if(state.identitaskendaraan.bahanbakar.toUpperCase() == "BENSIN"){
            state.pengujian.hasilujipos1 = "CO : "+payload.alatuji_emisicobahanbakarbensin+"%, HC : "+payload.alatuji_emisihcbahanbakarbensin+"Ppm"+", Kedalaman alur ban : "+payload.alatuji_kedalamanalurban+"mm";
        }
        var i = 0;
        var kiri = 0; var kanan = 0; var total = 0; var effsumbu1 = 0;
        if(payload.berats1 > 0)
        {
            kiri  = payload.gayaremkiri1;
            kanan = payload.gayaremkanan1;
            total = parseInt(kiri)+parseInt(kanan);
            effsumbu1 = Math.ceil((total/payload.berats1)*100);
            i = 1;
        }
        var kiri = 0; var kanan = 0; var total = 0; var effsumbu2 = 0;
        if(payload.berats2 > 0)
        {
            kiri  = payload.gayaremkiri2;
            kanan = payload.gayaremkanan2;
            total = parseInt(kiri)+parseInt(kanan);
            effsumbu2 = Math.ceil((total/payload.berats2)*100);
            i = 2;
        }
        var kiri = 0; var kanan = 0; var total = 0; var effsumbu3 = 0;
        if(payload.berats3 > 0)
        {
            kiri  = payload.gayaremkiri3;
            kanan = payload.gayaremkanan3;
            total = parseInt(kiri)+parseInt(kanan);
            effsumbu3 = Math.ceil((total/payload.berats3)*100);
            i = 3;
        }
        var kiri = 0; var kanan = 0; var total = 0; var effsumbu4 = 0;
        if(payload.berats4 > 0)
        {
            kiri  = payload.gayaremkiri4;
            kanan = payload.gayaremkanan4;
            total = parseInt(kiri)+parseInt(kanan);
            effsumbu4 = Math.ceil((total/payload.berats4)*100);
            i = 4;
        }
        var kiri = 0; var kanan = 0; var total = 0; var effsumbu4 = 0;
        if(payload.berats5 > 0)
        {
            kiri  = payload.gayaremkiri5;
            kanan = payload.gayaremkanan5;
            total = parseInt(kiri)+parseInt(kanan);
            effsumbu5 = Math.ceil((total/payload.berats5)*100);
            i = 5;
        }
        var kiri = 0; var kanan = 0; var total = 0; var effsumbu4 = 0;
        if(payload.berats6 > 0)
        {
            kiri  = payload.gayaremkiri6;
            kanan = payload.gayaremkanan6;
            total = parseInt(kiri)+parseInt(kanan);
            effsumbu6 = Math.ceil((total/payload.berats6)*100);
            i = 6;
        }
        if(i > 0){
            state.pengujian2.hasilujipos3 = state.pengujian2.hasilujipos3+", EFF Total : "+ (parseInt(effsumbu1)+parseInt(effsumbu2)+parseInt(effsumbu3)+parseInt(effsumbu4)+parseInt(effsumbu5)+parseInt(effsumbu6))/i +"%";
        }
    },
    ASSIGN_FORM(state, payload) {
        state.identitaskendaraan = {
            uuid: payload.uuid,
            keterangan: payload.keterangan,
            nama      : payload.nama,
            nouji: payload.nouji,
            noregistrasikendaraan : payload.noregistrasikendaraan,
            peruntukan : payload.peruntukan,
            keterangan : payload.keterangan,
            jenis : payload.jenis,
            jbb   : payload.jbb,
            bahanbakar : payload.bahanbakar,
            merek: payload.merek,
            tipe: payload.tipe,
            norangka: payload.norangka,
            nomesin: payload.nomesin,
        };
        state.surat = {
            v_stnk:payload.v_stnk,
            v_kartuinduk:payload.v_kartuinduk,
            v_srut:payload.v_srut,
            v_smartcard:payload.v_smartcard,
            v_riwayat:payload.v_riwayat,
            catatan:payload.catatan,
            posverif:payload.posverif,
            passkey:"",
            status_cetak:payload.status_cetak,
            keterangan:"",
        };
    },
    CLEAR_FORM(state) {
        state.pengujian = {
            pos1:"0",
            catatanpos1:"",
            hasilujipos1:"",
            pos2:"0",
            catatanpos2:"",
            hasilujipos2:"",
            pos3:"0",
            catatanpos3:"",
            hasilujipos3:"",
            pos4:"0",
            catatanpos4:"",
            hasilujipos4:"",
            pos5:"0",
            catatanpos5:"",
            hasilujipos5:"",
            pos6:"0",
            catatanpos6:"",
            hasilujipos6:"",
            pos7:"0",
            catatanpos7:"",
            hasilujipos7:"",
            pos8:"0",
            catatanpos8:"",
            hasilujipos8:"",
            verif:"0",
            catatanverif:"",
            tglujiulang:"",
            user_verif:"",
            jenis_cetak:"0"
        };
        state.pengujian2 = {
            pos1:"0",
            catatanpos1:"",
            pos2:"0",
            catatanpos2:"",
            pos3:"0",
            catatanpos4:"",
            pos4:"0",
            catatanpos4:"",
            pos5:"0",
            catatanpos5:"",
            pos6:"0",
            catatanpos6:"",
            verif:"0",
            catatanverif:"",
            tglujiulang:"",
            user_verif2:"",
        };
        
        state.surat = {
            v_stnk:"0",
            v_kartuinduk:"0",
            v_srut:"0",
            v_smartcard:"0",
            v_riwayat:"0",
            catatan:"0",
            status_cetak:"0",
            posverif:"0",
            passkey:"",
            keterangan:"",
        };
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
            VerifService.getPendaftarans(state.page,state.filter.tgl, search)
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
        return new Promise((resolve, reject) => {
            VerifService.getPendaftaransLulus(state.page,state.filter.tgl, search)
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
    getHasilUji({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            VerifService.getHasilUji(state.page,state.filter.tgl, search)
                .then(response => {
                    commit("ASSING_DATAHASILUJI", response.data.result);
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
    getPendaftaransVerif2({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            VerifService.getPendaftaransVerif2(state.page,state.filter.tgl, search)
                .then(response => {
                    commit("ASSING_DATAVERIF2", response.data.result);
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
    getPendaftaransLulusVerif2({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            VerifService.getPendaftaransLulusVerif2(state.page,state.filter.tgl, search)
                .then(response => {
                    commit("ASSING_DATALULUSVERIF2", response.data.result);
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
        return new Promise((resolve, reject) => {
            VerifService.getPendaftaransTLulus(state.page,state.filter.tgl, search)
                .then(response => {
                    commit("ASSING_DATATLULUS", response.data.result);
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

    getIdentitaskendaraan({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            VerifService.getIdentitaskendaraan(payload)
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

    getKuota({ commit, state }) {
        return VerifService.cekkuota().then(response => {
            commit("ASSING_KUOTA", response.data.result);
            // console.log(response.data.data)
        });
    },

    getCatatanPos({ commit, state }, payload) {
        return VerifService.getCatatanPos(payload).then(response => {
            commit("ASSING_CATATANPOS", response.data.result);
            // console.log(response.data.data)
        });
    },

    submitVerif({ dispatch, commit, state }, id) {
        state.pengujian.pendaftaran_id = id;
        return new Promise((resolve, reject) => {
            VerifService.postVerif(state.pengujian)
                .then(response => {
                    commit("ASSIGN_PENGUJIAN", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                });
        });
    },
    submitVerif2({ dispatch, commit, state }, id) {
        state.pengujian2.pendaftaran_id = id;
        if (state.pengujian2.verif == '1') {
            state.pengujian2.catatanverif = "";
        }
        return new Promise((resolve, reject) => {
            VerifService.postVerif2(state.pengujian2)
                .then(response => {
                    commit("ASSIGN_PENGUJIAN", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                });
        });
    },
    submitApprove({ dispatch, commit, state }, id) {
        return new Promise((resolve, reject) => {
            state.surat.keterangan = state.identitaskendaraan.keterangan;
            VerifService.approveSurat(id,state.surat)
                .then(response => {
                    // commit("ASSIGN_FORM", response.data.result);
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
                    }else if (error.response.status == 422) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.response.data.messages,
                        });
                        console.log(error.response)
                    }else{
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.response.data.messages,
                        });
                    }
                });
        });
    },
    submitApproving({ dispatch, commit, state }, id) {
        return new Promise((resolve, reject) => {
            state.surat.keterangan = state.identitaskendaraan.keterangan;
            VerifService.approvingSurat(id,state.surat)
                .then(response => {
                    // commit("ASSIGN_FORM", response.data.result);
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
                    }else if (error.response.status == 422) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.response.data.messages,
                        });
                    }else{
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.response.data.messages,
                        });
                    }
                });
        });
    },
    editVerif({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            VerifService.getVerif(payload)
                .then(response => {
                    commit("ASSIGN_PENGUJIAN", response.data.result);
                    resolve(response.data);
                    // console.log("run edit");
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
    editVerif2({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            VerifService.getVerif(payload)
                .then(response => {
                    commit("ASSIGN_PENGUJIAN2", response.data.result);
                    resolve(response.data);
                    // console.log("run edit");
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
    updateVerif({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            VerifService.updateVerif(id, state.pengujian)
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
    ulangiFoto({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            VerifService.ulangiFoto(id)
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
    removeVerif({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            VerifService.deleteVerif(id)
                .then(response => {
                    dispatch("getPendaftarans").then(() => resolve());
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

import DatapengujianService from "../datapengujian.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    datapengujians: [],
    kodewilayahs: [],
    mereks: [],
    tipes: [],
    jeniskendaraan: [],
    kelurahans  : [],
    kecamatans  : [],
    kotas       : [],
    filter: {
        tgl: ""
    },
    datapengujian: {
        statuspenerbitan: "",
        nouji:"",
        nama:"",
        alamat:"",
        noidentitaspemilik:"",
        noregistrasikendaraan:"",
        merek:"",
        tipe:"",
        norangka:"",
        nomesin:"",
        thpembuatan:"",
        bahanbakar:"",
        isisilinder:"0",
        dayamotorpenggerak:"0",
        jenis:"",
        model:"",
        peruntukan:"",
        warna:"",
        kodewilayah:"",
        kodewilayahasal:"",
        nosertifikatreg:"",
        tglsertifikatreg: "",
        jbb:"0",
        jbkb:"0",
        jbi:"0",
        jbki:"0",
        mst:"0",
        konfigurasisumburoda:"",
        ukuranban:"",
        panjangkendaraan:"0",
        lebarkendaraan:"0",
        tinggikendaraan:"0",
        panjangbakatautangki:"0",
        lebarbakatautangki:"0",
        tinggibakatautangki:"0",
        julurdepan:"0",
        julurbelakang:"0",
        jaraksumbu1_2:"0",
        jaraksumbu2_3:"0",
        jaraksumbu3_4:"0",
        dayaangkutorang:"0",
        dayaangkutbarang:"0",
        kelasjalanterendah:"",
        beratkosong:"0",
        tgluji:"",
        masaberlakuuji:"",
        p:"",
        q:"",
        r:"",
        a:"",
        b:"",
        groundclearance:"",
        beratsumbu1:"",
        beratsumbu2:"",
        beratsumbu3:"",
        beratsumbu4:"",
        bahan:"",
        alatuji_emisiasapbahanbakarsolar:"",
        alatuji_emisicobahanbakarbensin:"",
        alatuji_emisihcbahanbakarbensin:"",
        alatuji_remutamatotalgayapengereman:"",
        alatuji_remutamaselisihgayapengeremanrodakirikanan1:"",
        alatuji_remutamaselisihgayapengeremanrodakirikanan2:"",
        alatuji_remutamaselisihgayapengeremanrodakirikanan3:"",
        alatuji_remutamaselisihgayapengeremanrodakirikanan4:"",
        alatuji_remparkirtangan:"",
        alatuji_remparkirkaki:"",
        alatuji_kincuprodadepan:"",
        alatuji_tingkatkebisingan:"",
        alatuji_lampuutamakekuatanpancarlampukanan:"",
        alatuji_lampuutamakekuatanpancarlampukiri:"",
        alatuji_lampuutamapenyimpanganlampukanan:"",
        alatuji_lampuutamapenyimpanganlampukiri:"",
        alatuji_penunjukkecepatan:"",
        alatuji_kedalamanalurban:"",
        idpetugasuji:"",
    },
    nosertifikat:{
        nokendalikartu:"",
        rfid:"",
        perso:"",
        idx:"",
    },
    page: 1
};

export const mutations = {
    ASSING_DATA(state, datapengujians) {
        state.datapengujians = datapengujians;
    },
    DATA_KODEWILAYAH(state, kodewilayahs){
        state.kodewilayahs = kodewilayahs;
    },
    DATA_KECAMATAN(state, kecamatans){
        state.kecamatans = kecamatans;
    },
    DATA_KELURAHAN(state, kelurahans){
        state.kelurahans = kelurahans;
    },
    DATA_KOTA(state, kotas){
        state.kotas = kotas;
    },
    DATA_MEREK(state, mereks){
        state.mereks = mereks;
    },
    DATA_TIPE(state, tipes){
        state.tipes = tipes;
    },
    DATA_JENISKENDARAAN(state, jeniskendaraan){
        state.jeniskendaraan = jeniskendaraan;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.datapengujian = {
            statuspenerbitan: payload.statuspenerbitan,
            nouji:payload.nouji,
            nama: payload.nama,
            alamat: payload.alamat,
            noidentitaspemilik: payload.noidentitaspemilik,
            noregistrasikendaraan: payload.noregistrasikendaraan,
            merek: payload.merek,
            tipe: payload.tipe,
            norangka: payload.norangka,
            nomesin: payload.nomesin,
            thpembuatan: payload.thpembuatan,
            bahanbakar: payload.bahanbakar,
            isisilinder: payload.isisilinder,
            dayamotorpenggerak: payload.dayamotorpenggerak,
            jenis: payload.jenis,
            model:payload.model,
            peruntukan:payload.peruntukan,
            warna:payload.warna,
            kodewilayah: payload.kodewilayah,
            kodewilayahasal: payload.kodewilayahasal,
            nosertifikatreg: payload.nosertifikatreg,
            tglsertifikatreg: payload.tglsertifikatreg.substr(4, 4)+'-'+payload.tglsertifikatreg.substr(2, 2)+'-'+payload.tglsertifikatreg.substr(0, 2),
            jbb: payload.jbb,
            jbkb: payload.jbkb,
            jbi: payload.jbi,
            jbki: payload.jbki,
            mst: payload.mst,
            beratkosong:payload.beratkosong,
            konfigurasisumburoda: payload.konfigurasisumburoda,
            ukuranban: payload.ukuranban,
            panjangkendaraan: payload.panjangkendaraan,
            lebarkendaraan: payload.lebarkendaraan,
            tinggikendaraan: payload.tinggikendaraan,
            panjangbakatautangki: payload.panjangbakatautangki,
            lebarbakatautangki: payload.lebarbakatautangki,
            tinggibakatautangki: payload.tinggibakatautangki,
            julurdepan: payload.julurdepan,
            julurbelakang: payload.julurbelakang,
            jaraksumbu1_2: payload.jaraksumbu1_2,
            jaraksumbu2_3: payload.jaraksumbu2_3,
            jaraksumbu3_4: payload.jaraksumbu3_4,
            dayaangkutorang: payload.dayaangkutorang,
            dayaangkutbarang: payload.dayaangkutbarang,
            kelasjalanterendah: payload.kelasjalanterendah,
            tgluji: payload.tgluji.substr(4, 4)+'-'+payload.tgluji.substr(2, 2)+'-'+payload.tgluji.substr(0, 2),
            masaberlakuuji: payload.masaberlakuuji.substr(4, 4)+'-'+payload.masaberlakuuji.substr(2, 2)+'-'+payload.masaberlakuuji.substr(0, 2),
            p:payload.p,
            q:payload.q,
            r:payload.r,
            a:payload.a,
            b:payload.b,
            groundclearance:payload.groundclearance,
            beratsumbu1:payload.beratsumbu1,
            beratsumbu2:payload.beratsumbu2,
            beratsumbu3:payload.beratsumbu3,
            beratsumbu4:payload.beratsumbu4,
            bahan:payload.bahan,
            alatuji_emisiasapbahanbakarsolar:payload.alatuji_emisiasapbahanbakarsolar,
            alatuji_emisicobahanbakarbensin:payload.alatuji_emisicobahanbakarbensin,
            alatuji_emisihcbahanbakarbensin:payload.alatuji_emisihcbahanbakarbensin,
            alatuji_remutamatotalgayapengereman:payload.alatuji_remutamatotalgayapengereman,
            alatuji_remutamaselisihgayapengeremanrodakirikanan1:payload.alatuji_remutamaselisihgayapengeremanrodakirikanan1,
            alatuji_remutamaselisihgayapengeremanrodakirikanan2:payload.alatuji_remutamaselisihgayapengeremanrodakirikanan2,
            alatuji_remutamaselisihgayapengeremanrodakirikanan3:payload.alatuji_remutamaselisihgayapengeremanrodakirikanan3,
            alatuji_remutamaselisihgayapengeremanrodakirikanan4:payload.alatuji_remutamaselisihgayapengeremanrodakirikanan4,
            alatuji_remparkirtangan:payload.alatuji_remparkirtangan,
            alatuji_remparkirkaki:payload.alatuji_remparkirkaki,
            alatuji_kincuprodadepan:payload.alatuji_kincuprodadepan,
            alatuji_tingkatkebisingan:payload.alatuji_tingkatkebisingan,
            alatuji_lampuutamakekuatanpancarlampukanan:payload.alatuji_lampuutamakekuatanpancarlampukanan,
            alatuji_lampuutamakekuatanpancarlampukiri:payload.alatuji_lampuutamakekuatanpancarlampukiri,
            alatuji_lampuutamapenyimpanganlampukanan:payload.alatuji_lampuutamapenyimpanganlampukanan,
            alatuji_lampuutamapenyimpanganlampukiri:payload.alatuji_lampuutamapenyimpanganlampukiri,
            alatuji_penunjukkecepatan:payload.alatuji_penunjukkecepatan,
            alatuji_kedalamanalurban:payload.alatuji_kedalamanalurban,
            idpetugasuji:payload.idpetugasuji,
        };
    },
    ASSIGN_FORMNOSERTIFIKAT(state, payload){
        state.nosertifikat = {
            nokendalikartu: payload.nokendalikartu,
            rfid:payload.rfid,
            perso: payload.perso,
            idx: state.nosertifikat.idx,
        }
    },
    CLEAR_FORM(state) {
        state.datapengujian= {
            statuspenerbitan: "",
            nouji:"",
            nama:"",
            alamat:"",
            noidentitaspemilik:"",
            noregistrasikendaraan:"",
            merek:"",
            tipe:"",
            norangka:"",
            nomesin:"",
            thpembuatan:"",
            bahanbakar:"",
            isisilinder:"0",
            dayamotorpenggerak:"0",
            jenis:"",
            model:"",
            peruntukan:"",
            warna:"",
            p:"",
            q:"",
            r:"",
            a:"",
            b:"",
            groundclearance:"",
            kodewilayah:"",
            kodewilayahasal:"",
            nosertifikatreg:"",
            tglsertifikatreg: "",
            jbb:"0",
            jbkb:"0",
            jbi:"0",
            jbki:"0",
            mst:"0",
            konfigurasisumburoda:"",
            ukuranban:"",
            panjangkendaraan:"0",
            lebarkendaraan:"0",
            tinggikendaraan:"0",
            panjangbakatautangki:"0",
            lebarbakatautangki:"0",
            tinggibakatautangki:"0",
            julurdepan:"0",
            julurbelakang:"0",
            jaraksumbu1_2:"0",
            jaraksumbu2_3:"0",
            jaraksumbu3_4:"0",
            dayaangkutorang:"0",
            dayaangkutbarang:"0",
            kelasjalanterendah:"",
            beratkosong:"0",
            tgluji:"",
            masaberlakuuji:"",
            beratsumbu1:"",
            beratsumbu2:"",
            beratsumbu3:"",
            beratsumbu4:"",
            bahan:"",
            alatuji_emisiasapbahanbakarsolar:"",
            alatuji_emisicobahanbakarbensin:"",
            alatuji_emisihcbahanbakarbensin:"",
            alatuji_remutamatotalgayapengereman:"",
            alatuji_remutamaselisihgayapengeremanrodakirikanan1:"",
            alatuji_remutamaselisihgayapengeremanrodakirikanan2:"",
            alatuji_remutamaselisihgayapengeremanrodakirikanan3:"",
            alatuji_remutamaselisihgayapengeremanrodakirikanan4:"",
            alatuji_remparkirtangan:"",
            alatuji_remparkirkaki:"",
            alatuji_kincuprodadepan:"",
            alatuji_tingkatkebisingan:"",
            alatuji_lampuutamakekuatanpancarlampukanan:"",
            alatuji_lampuutamakekuatanpancarlampukiri:"",
            alatuji_lampuutamapenyimpanganlampukanan:"",
            alatuji_lampuutamapenyimpanganlampukiri:"",
            alatuji_penunjukkecepatan:"",
            alatuji_kedalamanalurban:"",
            idpetugasuji:"",
        };
    },
    CLEAR_FORMNOSERTIFIKAT(state) {
        state.nosertifikat= {
            nokendalikartu:"",
            rfid:"",
            perso:"",
            idx:"",
        };
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getDatapengujians({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            DatapengujianService.getDatapengujians(state.page,state.filter.tgl, search)
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
    submitDatapengujian({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            DatapengujianService.postDatapengujian(state.datapengujian)
                .then(response => {
                    commit("ASSIGN_FORM", response.data.result);
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
    editDatapengujian({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            DatapengujianService.getDatapengujian(payload)
                .then(response => {
                    commit("ASSIGN_FORM", response.data.result);
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
    getNosertifikat({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            DatapengujianService.getNosertifikat(payload)
                .then(response => {
                    commit("ASSIGN_FORMNOSERTIFIKAT", response.data.result);
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
    setUndoVerif({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            DatapengujianService.setUndoVerif(payload)
                .then(response => {
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
                    }
                });
        });
    },
    updateDatapengujian({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            DatapengujianService.updateDatapengujian(id, state.datapengujian)
                .then(response => {
                    // commit("CLEAR_FORM");
                    resolve(response.data);
                    // console.log("sukses update");
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
    updateNosertifikat({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            DatapengujianService.updateNosertifikat(id, state.nosertifikat)
                .then(response => {
                    commit("CLEAR_FORMNOSERTIFIKAT");
                    resolve(response.data);
                    // console.log("sukses update");
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
    removeDatapengujian({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            DatapengujianService.deleteDatapengujian(id)
                .then(response => {
                    dispatch("getDatapengujians").then(() => resolve());
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
    getKodewilayahs({ commit, state }) {
        return DatapengujianService.getKodewilayahs().then(response => {
            commit("DATA_KODEWILAYAH", response.data.result);
        });
    },
    getKotas({ commit, state }) {
        return DatapengujianService.getKotas().then(response => {
            commit("DATA_KOTA", response.data.result);
        });
    },
    getKecamatans({ commit, state }, payload) {
        return DatapengujianService.getKecamatans(payload).then(response => {
            commit("DATA_KECAMATAN", response.data.result);
        });
    },
    getKelurahans({ commit, state }, payload) {
        return DatapengujianService.getKelurahans(payload).then(response => {
            commit("DATA_KELURAHAN", response.data.result);
        });
    },
    getMereks({ commit, state }) {
        return DatapengujianService.getMereks().then(response => {
            commit("DATA_MEREK", response.data.result);
        });
    },
    getTipes({ commit, state }) {
        return DatapengujianService.getTipes().then(response => {
            commit("DATA_TIPE", response.data.result);
        });
    },
    getJeniskendaraan({ commit, state }) {
        return DatapengujianService.getJeniskendaraan().then(response => {
            commit("DATA_JENISKENDARAAN", response.data.result);
            // console.log(response.data.data)
        });
    },
};
export const getters = {
    getEventById: state => id => {
        return state.datapengujians.find(datapengujian => datapengujian.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

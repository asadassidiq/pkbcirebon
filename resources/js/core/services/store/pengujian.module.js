import PendaftaranService from "../pendaftaran.service.js";
export const namespaced = true;

export const state = {
    pendaftarans: [],
    kodewilayahs: [],
    kodepenerbitans:[],
    mereks: [],
    tipes: [],
    jenis: [],
    filter: {
        tgl: ""
    },
    identitaskendaraan: {
        id: "",
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
        jeniskendaraan:"",
        peruntukan:"",
        kodewilayah:"",
        kodewilayahasal:"",
        nosertifikatreg:"",
        tglsertifikatreg: "",
    },
    datakendaraan: {
        identitaskendaraan_id:"",
        jbb:"0",
        jenis:"",
        peruntukan:"",
        kodewilayah:"",
        kodewilayahasal:"",
        nosertifikatreg:"",
        tglsertifikatreg:"",
        jbkb:"0",
        jbi:"0",
        jbki:"0",
        mst:"0",
        beratkosong:"0",
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
        bahan:"",
        jaraksumbu1_2:"0",
        jaraksumbu2_3:"0",
        jaraksumbu3_4:"0",
        q:"0",
        p:"0",
        dayaangkutorang:"0",
        dayaangkutbarang:"0",
        kelasjalanterendah:"",
    },
    pendaftaran: {
        identitaskendaraan_id:"",
        tglpendaftaran: "",
        tglbayar:"",
        kodepenerbitans_id: "",
    },
    page: 1
};

export const mutations = {
    DATA_KODEWILAYAH(state, kodewilayahs){
        state.kodewilayahs = kodewilayahs;
    },
    DATA_KODEPENERBITAN(state, kodepenerbitans){
        state.kodepenerbitans = kodepenerbitans;
    },
    DATA_MEREK(state, mereks){
        state.mereks = mereks;
    },
    DATA_TIPE(state, tipes){
        state.tipes = tipes;
    },
    DATA_JENIS(state, jenis){
        state.jenis = jenis;
    },
    ASSING_DATA(state, pendaftarans) {
        state.pendaftarans = pendaftarans;
    },
    ASSING_DATAID(state, identitaskendaraan_id){
        state.pendaftaran.identitaskendaraan_id= identitaskendaraan_id;
        state.datakendaraan.identitaskendaraan_id= identitaskendaraan_id;
    },
    ASSING_DATAIDPENDAFTRAN(state, pendaftaran_id){
        state.transaksi.pendaftaran_id= pendaftaran_id;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.pendaftaran = {
            identitaskendaraan_id:payload.identitaskendaraan_id ,
            tglpendaftaran: payload.tglpendaftaran,
            tglbayar:  payload.tglbayar,
            kodepenerbitans_id: payload.kodepenerbitans_id
        };
        state.identitaskendaraan = {
            id: payload.identitaskendaraan_id,
            nouji: payload.nouji,
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
            jeniskendaraan: payload.jeniskendaraan,
            peruntukan: payload.peruntukan,
            kodewilayah: payload.kodewilayah,
            kodewilayahasal: payload.kodewilayahasal,
            nosertifikatreg: payload.nosertifikatreg,
            tglsertifikatreg: payload.tglsertifikatreg,
        };
        state.datakendaraan = {
            identitaskendaraan_id:payload.identitaskendaraan_id ,
            jbb: payload.jbb,
            jenis: payload.jenis,
            peruntukan: payload.peruntukan,
            kodewilayah: payload.kodewilayah,
            kodewilayahasal: payload.kodewilayahasal,
            nosertifikatreg: payload.nosertifikatreg,
            tglsertifikatreg: payload.tglsertifikatreg,
            jbkb: payload.jbkb,
            jbi: payload.jbi,
            jbki: payload.jbi,
            mst: payload.mst,
            beratkosong: payload.beratkosong,
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
            bahan: payload.bahan,
            jaraksumbu1_2: payload.jaraksumbu1_2,
            jaraksumbu2_3: payload.jaraksumbu2_3,
            jaraksumbu3_4: payload.jaraksumbu3_4,
            q: payload.q,
            p: payload.p,
            dayaangkutorang: payload.dayaangkutorang,
            dayaangkutbarang: payload.dayaangkutbarang,
            kelasjalanterendah: payload.kelasjalanterendah,
        };
    },
    CLEAR_FORM(state) {
        state.identitaskendaraan = {
            id: "",
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
            jeniskendaraan:"",
            peruntukan:"",
            kodewilayah:"",
            kodewilayahasal:"",
            nosertifikatreg:"",
            tglsertifikatreg:"",
        };
        state.datakendaraan = {
            identitaskendaraan_id:"",
            jbb:"0",
            jenis:"",
            peruntukan:"",
            kodewilayah:"",
            kodewilayahasal:"",
            nosertifikatreg:"",
            tglsertifikatreg:"",
            jbkb:"0",
            jbi:"0",
            jbki:"0",
            mst:"0",
            beratkosong:"0",
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
            bahan:"0",
            jaraksumbu1_2:"0",
            jaraksumbu2_3:"0",
            jaraksumbu3_4:"0",
            q:"0",
            p:"0",
            dayaangkutorang:"0",
            dayaangkutbarang:"0",
            kelasjalanterendah:"",
        };
        state.pendaftaran= {
            identitaskendaraan_id:"",
            tglpendaftaran: "",
            tglbayar:"",
            kodepenerbitans_id: "",
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
            PendaftaranService.getPendaftarans(state.page,state.filter.tgl, search)
                .then(response => {
                    commit("ASSING_DATA", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                    // console.log('There was an error:', error.response)
                    const notification = {
                        type: "error",
                        message:
                            "There was a problem fetching events: " +
                            error.message
                    };
                    // dispatch("notification/add", notification, { root: true });
                });
        });
    },
    getIdentitaskendaraanNouji({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PendaftaranService.getIdentitaskendaraanNouji(state.identitaskendaraan.nouji)
                .then(response => {
                    commit("ASSIGN_FORM", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                    // console.log('There was an error:', error.response)
                    const notification = {
                        type: "error",
                        message:
                            "There was a problem fetching events: " +
                            error.message
                    };
                    // dispatch("notification/add", notification, { root: true });
                });
        });
    },
    submitPendaftaran({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            PendaftaranService.postPendaftaran(state.pendaftaran)
                .then(response => {
                    commit("ASSING_DATAIDPENDAFTRAN", response.data.result.id);
                    resolve(response.data);
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
    submitIdentitaskendaraan({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            PendaftaranService.postIdentitaskendaraan(state.identitaskendaraan)
                .then(response => {
                    commit("ASSING_DATAID", response.data.result.id);
                    resolve(response.data);
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
    submitDatakendaraan({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            PendaftaranService.postDatakendaraan(state.datakendaraan)
                .then(response => {
                    commit("ASSIGN_FORM", response.data.result);
                    resolve(response.data);
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
    editPendaftaran({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PendaftaranService.getPendaftaran(payload)
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
    updatePendaftaran({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            PendaftaranService.updatePendaftaran(id, state.pendaftaran)
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
    updateIdentitaskendaraan({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            PendaftaranService.updateIdentitaskendaraan(id, state.identitaskendaraan)
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
    updateDatakendaraan({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            PendaftaranService.updateDatakendaraan(id, state.datakendaraan)
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
    removePendaftaran({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            PendaftaranService.deletePendaftaran(id)
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
    getKodewilayahs({ commit, state }) {
        return PendaftaranService.getKodewilayahs().then(response => {
            commit("DATA_KODEWILAYAH", response.data.result);
            // console.log(response.data.data)
        });
    },
    getMereks({ commit, state }) {
        return PendaftaranService.getMereks().then(response => {
            commit("DATA_MEREK", response.data.result);
            // console.log(response.data.data)
        });
    },
    getTipes({ commit, state }) {
        return PendaftaranService.getTipes().then(response => {
            commit("DATA_TIPE", response.data.result);
            // console.log(response.data.data)
        });
    },
    getJenis({ commit, state }) {
        return PendaftaranService.getJenis().then(response => {
            commit("DATA_JENIS", response.data.result);
            // console.log(response.data.data)
        });
    },
    getKodepenerbitans({ commit, state }) {
        return PendaftaranService.getKodepenerbitans().then(response => {
            commit("DATA_KODEPENERBITAN", response.data.result);
            // console.log(response.data.data)
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

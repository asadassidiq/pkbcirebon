import PendaftaranOnlineService from "../pendaftaranonline.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    pendaftaranonlines: [],
    filter: {
        tgl: "",
        status:"",
    }, 
    kuota: {
        tanggal:"",
        kuotapagi:"",
        kuotasiang:"",
        tersediapagi:"",
        tersediasiang:"",
    },
    pendaftaranonline: {
        tglpendaftaran:"",
        kodepenerbitans_id:"",
        nouji:"",
        noregistrasikendaraan:"",
        waktu:"1",
        namapemohon:"",
        notelp:"",
    },
    approve:{
        tglpendaftaran:"",
        keterangan:"",
        kodepenerbitans_id:"",
        nouji:"",
        noregistrasikendaraan:"",
        waktu:"1",
        namapemohon:"",
        nama:"",
        notelp:"",
        alamat:"",
        merek:"",
        tipe:"",
        jenis:"",
        subjenis:"",
        bahanbakar:"",
        norangka:"",
        nomesin:"",
        thpembuatan:"",
        v_stnk:"0",
        v_srut:"0",
        v_smartcard:"0",
        v_suratketerangan:"0",
        status_data:"0",
    },
    uuid:"",
    page: 1
};

export const mutations = {
    ASSING_DATA(state, pendaftaranonlines) {
        state.pendaftaranonlines = pendaftaranonlines;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    SET_STATUS(state, payload) {
        state.filter.status = payload;
    },
    ASSIGN_UUID(state, payload) {
        console.log(payload);
        state.uuid = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.pendaftaranonline = {
            tglpendaftaran:payload.tglpendaftaran ,
            kodepenerbitans_id:payload.kodepenerbitans_id ,
            nouji:payload.nouji ,
            noregistrasikendaraan:payload.noregistrasikendaraan,
            waktu:payload.waktu,
            namapemohon:payload.namapemohon,
            notelp:payload.notelp,
        };
    },
    ASSIGN_FORMAPPROVE(state, payload) {
        state.approve = {
            tglpendaftaran:payload.tglpendaftaran ,
            kodepenerbitans_id:payload.kodepenerbitans_id,
            keterangan:payload.keterangan ,
            nouji:payload.nouji ,
            noregistrasikendaraan:payload.noregistrasikendaraan,
            waktu:payload.waktu,
            namapemohon:payload.namapemohon,
            notelp:payload.notelp,
            nama:payload.nama,
            alamat:payload.alamat,
            merek:payload.merek,
            tipe:payload.tipe,
            jenis:payload.jenis,
            subjenis:payload.subjenis,
            bahanbakar:payload.bahanbakar,
            norangka:payload.norangka,
            nomesin:payload.nomesin,
            thpembuatan:payload.thpembuatan,
            v_stnk:"1",
            v_srut:"1",
            v_smartcard:"1",
            v_suratketerangan:"1",
            status_data:payload.status_data,
        };
    },
    ASSIGN_KUOTA(state, payload) {
        state.kuota = {
            tanggal:payload.tanggal ,
            kuotapagi:payload.kuotapagi ,
            kuotasiang:payload.kuotasiang ,
            tersediapagi:payload.tersediapagi ,
            tersediasiang: payload.tersediasiang,
        };
    },
    ASSIGN_KUOTA1(state) {
        state.kuota = {
            tanggal:state.pendaftaranonline.tglpendaftaran,
            kuotapagi: 0,
            kuotasiang: 0,
            tersediapagi: 0,
            tersediasiang: 0,
        };
    },
    CLEAR_FORM(state) {
        state.pendaftaranonline= {
            tglpendaftaran:"",
            kodepenerbitans_id:"",
            nouji:"",
            noregistrasikendaraan:"",
            waktu:"1",
            namapemohon:"",
            notelp:"",
        };
    },
    CLEAR_KUOTA(state) {
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
            tgl: "",
            status:"",
        };
    },
};

export const actions = {
    getPendaftaranOnlines({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            PendaftaranOnlineService.getPendaftaranOnlines(state.page,state.filter.tgl, search)
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
    submitPendaftaranOnline({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            PendaftaranOnlineService.postPendaftaranOnline(state.pendaftaranonline)
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
                        console.log(error.response)
                    }
                });
        });
    },
    submitApprove({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            PendaftaranOnlineService.postApprove(state.approve)
                .then(response => {
                    commit("ASSIGN_UUID", response.data.result);
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
    editPendaftaranOnline({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PendaftaranOnlineService.getPendaftaranOnline(payload)
                .then(response => {
                    commit("ASSIGN_FORMAPPROVE", response.data.result);
                    resolve(response.data);
                    // console.log("run edit");
                })
                .catch(error => {
                    console.log(error.message);
                });
        });
    },
    updatePendaftaranOnline({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            PendaftaranOnlineService.updatePendaftaranOnline(id, state.pendaftaranonline)
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
    removePendaftaranOnline({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            PendaftaranOnlineService.deletePendaftaranOnline(id)
                .then(response => {
                    dispatch("getPendaftaranOnlines").then(() => resolve());
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
    checkKuota({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PendaftaranOnlineService.checkKuota(payload)
                .then(response => {
                    if(response.data.result == null)
                    {
                    commit("ASSIGN_KUOTA1");
                    }else{
                    commit("ASSIGN_KUOTA", response.data.result);
                    }
                    resolve(response.data);
                })
                .catch(error => {
                    console.log(error.message);
                });
        });
    },
};
export const getters = {
    getEventById: state => id => {
        return state.pendaftaranonlines.find(pendaftaranonline => pendaftaranonline.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

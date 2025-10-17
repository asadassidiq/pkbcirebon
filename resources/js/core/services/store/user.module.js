import UserService from "../user.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    users: [],
    filter: {
        tgl: ""
    },
    user: {
        name:"",
        username:"",
        password:"",
        role:"",
        jabatan:"",
        nip:"",
        nrp:"",
        pangkat:"",
        pf:"",
        ft:"",
        p1:"",
        p2:"",
        p3:"",
        p4:"",
        p5:"",
        p6:"",
        p7:"",
        p8:"",
        v1:"",
        ct:"",
    },
    pass: '',
    page: 1
};

export const mutations = {
    ASSING_DATA(state, users) {
        state.users = users;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.user = {
            name:payload.name,
            username: payload.username,
            password: "",
            role: payload.role,
            jabatan: payload.jabatan,
            nip: payload.nip,
            nrp: payload.nrp,
            pangkat: payload.pangkat,
            pf: payload.pf,
            ft: payload.ft,
            p1: payload.p1,
            p2: payload.p2,
            p3: payload.p3,
            p4: payload.p4,
            p5: payload.p5,
            p6: payload.p6,
            p7: payload.p7,
            p8: payload.p8,
            v1: payload.v1,
            ct: payload.ct,
        };
    },
    CLEAR_FORM(state) {
        state.user= {
            name:"",
            username:"",
            password:"",
            role:"",
            jabatan:"",
            nip:"",
            nrp:"",
            pangkat:"",
            pf:"",
            ft:"",
            p1:"",
            p2:"",
            p3:"",
            p4:"",
            p5:"",
            p6:"",
            p7:"",
            p8:"",
            v1:"",
            ct:"",
        };
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getUsers({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            UserService.getUsers(state.page,state.filter.tgl, search)
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
    submitUser({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            UserService.postUser(state.user)
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
    editUser({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            UserService.getUser(payload)
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
    updateUser({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            UserService.updateUser(id, state.user)
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
                        console.log(error.response)
                    }
                });
        });
    },
    removeUser({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            UserService.deleteUser(id)
                .then(response => {
                    dispatch("getUsers").then(() => resolve());
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
        return state.users.find(user => user.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

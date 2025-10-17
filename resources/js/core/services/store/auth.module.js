import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";
import Swal from "sweetalert2";

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_PASSWORD = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_NOTIF = "setNotif";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";

const state = {
  errors: null,
  notif :{
    foto:"0",
    pos1:"0",
    pos2:"0",
    pos3:"0",
    pos4:"0",
    pos5:"0",
    pos6:"0",
    pos7:"0",
    pos8:"0",
    verif1:"0",
    cetak:"0",
    surat:"0",
    penyerahan:"0",
  },
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  currentNotif(state) {
    return state.notif;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("login", credentials)
        .then(({ data }) => {
          if(data){
            if(data.message == 'Username atau Password tidak sesuai!.'){
              context.commit(SET_ERROR, data.message);
              Swal.fire({
                  title: "",
                  text: data.message,
                  icon: "warning",
                }).then((result) => {
                  if (result.isConfirmed) {
                    location.reload();
                  }
                });
            }else{
              context.commit(SET_AUTH, data);
            }
          }
          resolve(data);
        })
        .catch(({ response }) => {
          Swal.fire({
            title: "",
            text: response.data.message,
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
            heightAuto: false
          });
          // context.commit(SET_ERROR, response.data.message);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("register", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [VERIFY_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("verify")
        .then(({ data }) => {
            if(data.status == "Not authenticated" && state.isAuthenticated == true){
              context.commit(PURGE_AUTH);
              Swal.fire({
                  title: "",
                  text: "Harap Login Ulang, Session telah berakhir!!",
                  icon: "warning",
                }).then((result) => {
                  if (result.isConfirmed) {
                    location.reload();
                  }
                });
            }else{
              context.commit(SET_NOTIF, data);
            }
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_PASSWORD](context, payload) {
    const password = payload;

    return ApiService.put("password", password).then(({ data }) => {
      context.commit(SET_PASSWORD, data);
      return data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user.user;
    state.errors = {};
    JwtService.saveUser(user.user);
    JwtService.saveToken(user.token);
  },
  [SET_PASSWORD](state, password) {
    state.user.password = password;
  },
  [SET_NOTIF](state, notif) {
    state.notif = notif;
    // JwtService.saveNotif(notif);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};

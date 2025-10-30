// action types
export const UPDATE_PERSONAL_INFO = "updateUserPersonalInfo";
export const UPDATE_NOTIF_INFO = "updateNotifInfo";
export const UPDATE_ACCOUNT_INFO = "updateUserAccountInfo";

// mutation types
export const SET_PERSONAL_INFO = "setPersonalInfo";
export const SET_ACCOUNT_INFO = "setAccountInfo";
export const SET_NOTIF_INFO = "setANotifInfo";
export const CLEAR = 'clear';

const state = {
  user_personal_info: {
    photo: "media/users/default.jpg",
    uuid:"",
    name: "",
    username: "",
    role:"",
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
    penyerahan:"0",
  },
};

const getters = {
  currentUserPersonalInfo(state) {
    const user = JSON.parse(window.localStorage.getItem('userPKB'));
    state.user_personal_info.uuid = user.uuid;
    state.user_personal_info.name = user.name;
    state.user_personal_info.username = user.username;
    state.user_personal_info.role = user.role;
    state.user_personal_info.pf = user.pf;
    state.user_personal_info.ct = user.ct;
    state.user_personal_info.ft = user.ft;
    state.user_personal_info.p1 = user.p1;
    state.user_personal_info.p2 = user.p2;
    state.user_personal_info.p3 = user.p3;
    state.user_personal_info.p4 = user.p4;
    state.user_personal_info.p5 = user.p5;
    state.user_personal_info.p6 = user.p6;
    state.user_personal_info.p7 = user.p7;
    state.user_personal_info.p8 = user.p8;
    state.user_personal_info.v1 = user.v1;
    return state.user_personal_info;
  },
  currentNotifInfo(state) {
    const notif = JSON.parse(window.localStorage.getItem('notifPKB'));
    state.notif.foto = notif.foto;
    state.notif.pos1 = notif.pos1;
    state.notif.pos2 = notif.pos2;
    state.notif.pos3 = notif.pos3;
    state.notif.pos4 = notif.pos4;
    state.notif.pos5 = notif.pos5;
    state.notif.pos6 = notif.pos6;
    state.notif.pos7 = notif.pos7;
    state.notif.pos8 = notif.pos8;
    state.notif.verif1 = notif.verif1;
    state.notif.cetak = notif.cetak;
    state.notif.penyerahan = notif.penyerahan;
    return state.notif;
  },

  currentUserAccountInfo(state) {
    return state.user_account_info;
  },

  currentUserPhoto(state) {
    return state.user_personal_info.photo;
  }
};

const actions = {
  [UPDATE_PERSONAL_INFO](context, payload) {
    context.commit(SET_PERSONAL_INFO, payload);
  },
  [UPDATE_NOTIF_INFO](context, payload) {
    context.commit(SET_NOTIF_INFO, payload);
  },
  [UPDATE_ACCOUNT_INFO](context, payload) {
    context.commit(SET_ACCOUNT_INFO, payload);
  }
};

const mutations = {
  [SET_PERSONAL_INFO](state, user_personal_info) {
    state.user_personal_info = user_personal_info;
  },
  [SET_NOTIF_INFO](state, notif) {
    state.notif = notif;
  },
  [CLEAR](state) {
        state.user_personal_info = {
          photo: "media/users/default.jpg",
          uuid: "",
          name: "",
          username: "",
          role:"",
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
        
        state.notif = {
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
          penyerahan:"0",
        };
    },
};

export default {
  state,
  actions,
  mutations,
  getters
};

import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import htmlClass from "./htmlclass.module";
import config from "./config.module";
import breadcrumbs from "./breadcrumbs.module";
import profile from "./profile.module";
import pendaftaran from "./pendaftaran.module";
import pendaftaranonline from "./pendaftaranonline.module";
import surat from "./surat.module";
import foto from "./foto.module";
import pos1 from "./pos1.module";
import pos2 from "./pos2.module";
import pos3 from "./pos3.module";
import pos4 from "./pos4.module";
import verif from "./verif.module";
import kuota from "./kuota.module";
import harilibur from "./harilibur.module";
import datakendaraan from "./datakendaraan.module";
import user from "./user.module";
import datapengujian from "./datapengujian.module";
import antrian from "./antrian.module";
import regonline from "./regonline.module";
import monitoring from "./monitoring.module";
import tandatangan from "./tandatangan.module";
import penyerahan from "./penyerahan.module";
import approvals from "./datakendaraan_approval.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    htmlClass,
    config,
    breadcrumbs,
    profile,
    pendaftaran,
    pendaftaranonline,
    surat,
    foto,
    pos1,
    pos2,
    pos3,
    pos4,
    verif,
    penyerahan,
    kuota,
    harilibur,
    user,
    datapengujian,
    datakendaraan,
    approvals,
    antrian,
    regonline,
    monitoring,
    tandatangan,
  },
  state: {
    errors: [],
    message: "",
  },
  mutations: {
    SET_ERRORS(state, payload) {
      state.errors = payload;
    },
    CLEAR_ERRORS(state) {
      state.errors = [];
    },
    SET_MESSAGE(state, payload) {
      state.message = payload;
    },
    CLEAR_MESSAGE(state) {
      state.message = "";
    },
  },
});

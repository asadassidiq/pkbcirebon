import VerifService from "../verif.service.js";
import Swal from "sweetalert2";
export const namespaced = true;
var userid = "";

const hideCatatan = (catatan, posStatus, laikjalan) => {
  // LOGGER.info(JSON.stringify(posStatus));
  const result = Object.fromEntries(
    Object.keys(catatan).map((key) => {
      if (posStatus[key] == 0) return [key, catatan[key]];

      return [key, ""];
    })
  );

  return result;
};

const isValid = (payload) => {
  if (
    payload.pos1 == "1" &&
    payload.pos2 == "1" &&
    payload.pos3 == "1" &&
    payload.pos4 == "1"
  ) {
    return "1";
  } else if (
    payload.posverif != null &&
    payload.posverif != undefined &&
    payload.posverif == "1"
  ) {
    return "1";
  } else {
    return "0";
  }
};

const countEff = (berat, kiri, kanan) => {
  if (berat > 0) {
    const total = (kiri || 0) + (kanan || 0);
    const eff = Math.ceil((total / berat) * 100);
    const penyimpangan = Math.ceil(
      (Math.abs((kiri || 0) - (kanan || 0)) / berat) * 100
    );
    return { eff, penyimpangan };
  }
  return { eff: 0, penyimpangan: 0 };
};

const formatPos1 = (payload) => {
  let hasil = `**BAN**
- Kedalaman Alur Ban  : ${payload.alatuji_kedalamanalurban}mm`;

  return hasil;
};

const formatPos2 = (payload, identitaskendaraan) => {
  // kebisingan, emisi, and parts under from pos 2
  let field = [
    {
      label: "Tingkat Kebisingan",
      value: payload.alatuji_tingkatkebisingan,
      suffix: "Db",
      category: "kebisingan",
    },
  ];

  switch (identitaskendaraan.bahanbakar.toUpperCase()) {
    case "SOLAR":
      field = [
        ...field,
        {
          label: "Emisi Gas Buang Asap (HSU)",
          value: payload.alatuji_emisiasapbahanbakarsolar,
          suffix: "HSU",
          category: "emisi",
        },
      ];
      break;
    case "BENSIN":
      field = [
        ...field,
        {
          label: "Emisi Gas Buang CO (%)",
          value: payload.alatuji_emisicobahanbakarbensin,
          suffix: "%",
          category: "emisi",
        },
        {
          label: "Emisi Gas Buang HC (Ppm)",
          value: payload.alatuji_emisihcbahanbakarbensin,
          suffix: "Ppm",
          category: "emisi",
        },
      ];
      break;
    default:
      break;
  }

  let hasil = `**KEBISINGAN**
${field
  .filter((item) => item.category === "kebisingan")
  .map(
    (item) => `- ${item.label}: ${item.value}${item.suffix ? item.suffix : ""}`
  )
  .join("\n")}

**EMISI**
${field
  .filter((item) => item.category === "emisi")
  .map(
    (item) => ` - ${item.label}: ${item.value}${item.suffix ? item.suffix : ""}`
  )
  .join("\n")}
`;

  return hasil;
};

const formatPos3 = (payload) => {
  let field = [];

  // SIDESLIP --------------------------------------------------------------------------------------------------------
  const sideslip = parseInt(payload.alatuji_kincuprodadepan);
  field.push({
    label: ` - ${
      sideslip <= 5 && sideslip >= -5
        ? `<i class="flaticon2-correct text-success"></i>`
        : `<i class="flaticon-circle text-danger"></i>`
    } Side Slip`,
    value: sideslip,
    suffix: "mm/Km",
    category: "sideslip",
  });
  // -----------------------------------------------------------------------------------------------------------------
  // LAMPU -----------------------------------------------------------------------------------------------------------

  const lampusField = {
    alatuji_lampuutamakekuatanpancarlampukanan: "Intensitas Kanan (cd)",
    alatuji_lampuutamakekuatanpancarlampukiri: "Intensitas Kiri (cd)",
    alatuji_lampuutamapenyimpanganlampukanan: "Arah Kanan (degree/menit)",
    alatuji_lampuutamapenyimpanganlampukiri: "Arah Kiri (degree/menit)",
  };

  for (const key in lampusField) {
    const value = payload[key];
    let status = "1";
    if (key === "alatuji_lampuutamakekuatanpancarlampukanan" && value < 12000) {
      status = "0";
    }
    if (key === "alatuji_lampuutamakekuatanpancarlampukiri" && value < 12000) {
      status = "0";
    }
    if (key === "alatuji_lampuutamapenyimpanganlampukanan" && value > 0.34) {
      status = "0";
    }
    if (key === "alatuji_lampuutamapenyimpanganlampukiri" && value > 1.09) {
      status = "0";
    }

    const icon =
      status == "1"
        ? `<i class="flaticon2-correct text-success"></i>`
        : `<i class="flaticon-circle text-danger"></i>`;
    field.push({
      label: `${icon} ${lampusField[key]}`,
      value: value,
      suffix: key.includes("penyimpangan") ? "(degree/menit)" : "cd",
      category: "lampu",
    });
  }
  // -----------------------------------------------------------------------------------------------------------------

  let hasil = `**Lampu**
${field
  .filter((item) => item.category === "lampu")
  .map(
    (item) => `${item.label}: ${item.value}${item.suffix ? item.suffix : ""}`
  )
  .join("\n")}

**Sideslip**
${field
  .filter((item) => item.category === "sideslip")
  .map(
    (item) => `${item.label}: ${item.value}${item.suffix ? item.suffix : ""}`
  )
  .join("\n")}
  `;

  return hasil;
};

const formatPos4 = (payload) => {
  let field = [];
  // BRAKE COMPUTE ------------------------------------------------------------------------------------------------
  const eff1 = countEff(
    parseFloat(payload.berats1),
    parseFloat(payload.gayaremkiri1),
    parseFloat(payload.gayaremkanan1)
  );
  const effsumbu1 = eff1.eff;

  const eff2 = countEff(
    parseFloat(payload.berats2),
    parseFloat(payload.gayaremkiri2),
    parseFloat(payload.gayaremkanan2)
  );
  const effsumbu2 = eff2.eff;

  const eff3 = countEff(
    parseFloat(payload.berats3),
    parseFloat(payload.gayaremkiri3),
    parseFloat(payload.gayaremkanan3)
  );
  const effsumbu3 = eff3.eff;

  const eff4 = countEff(
    parseFloat(payload.berats4),
    parseFloat(payload.gayaremkiri4),
    parseFloat(payload.gayaremkanan4)
  );
  const effsumbu4 = eff4.eff;

  const eff5 = countEff(
    parseFloat(payload.berats5),
    parseFloat(payload.gayaremkiri5),
    parseFloat(payload.gayaremkanan5)
  );
  const effsumbu5 = eff5.eff;

  const eff6 = countEff(
    parseFloat(payload.berats6),
    parseFloat(payload.gayaremkiri6),
    parseFloat(payload.gayaremkanan6)
  );
  const effsumbu6 = eff6.eff;

  const allEff = [
    effsumbu1,
    effsumbu2,
    effsumbu3,
    effsumbu4,
    effsumbu5,
    effsumbu6,
  ];
  const validEff = allEff.filter((e) => e > 0);
  const totalEff =
    validEff.length > 0
      ? validEff.reduce((a, b) => a + b, 0) / validEff.length
      : 0;

  field.push({
    label: "Total Eff Rem",
    value: totalEff,
    suffix: "%",
    category: "brake",
  });
  field.push({
    label: "Total Gaya Rem",
    value: payload.alatuji_remutamatotalgayapengereman,
    suffix: "KG",
    category: "brake",
  });
  field.push({
    label: "Total Rem Parkir",
    value: payload.alatuji_remparkirtotalgayapengereman,
    suffix: "",
    category: "brake",
  });
  // -----------------------------------------------------------------------------------------------------------------
  // SPEEDOMETER -----------------------------------------------------------------------------------------------------
  const speedometer = parseInt(payload.alatuji_penunjukkecepatan);
  field.push({
    label: `${
      speedometer >= 36 && speedometer <= 46
        ? `<i class="flaticon2-correct text-success"></i>`
        : `<i class="flaticon-circle text-danger"></i>`
    } Speedometer`,
    value: speedometer,
    suffix: "Km/Jam",
    category: "speedometer",
  });
  // -----------------------------------------------------------------------------------------------------------------

  let hasil = `**Brake**
${field
  .filter((x) => x.category === "brake")
  .map((x) => `${x.label}: ${x.value} ${x.suffix}`)
  .join("\n")}

**Speedometer**
${field
  .filter((x) => x.category === "speedometer")
  .map((x) => `${x.label}: ${x.value} ${x.suffix}`)
  .join("\n")}
  `;

  return hasil;
};

const formatPosDisplayResult = (hasil, identitaskendaraan, pos) => {
  switch (pos) {
    case 1:
      return formatPos1(hasil);
    case 2:
      return formatPos2(hasil, identitaskendaraan);
    case 3:
      return formatPos3(hasil);
    case 4:
      return formatPos4(hasil);
    default:
      return hasil.posverif;
  }
};

export const state = {
  pendaftarans: [],
  pendaftaransLulus: [],
  hasiluji: [],
  pendaftaransVerif2: [],
  pendaftaransLulusVerif2: [],
  pendaftaransTLulus: [],
  kuota: [],
  catatanpos: [],
  posisi: "9",
  filter: {
    tgl: "",
  },
  identitaskendaraan: {
    uuid: "",
    nouji: "",
    noregistrasikendaraan: "",
    nama: "",
    jenis: "",
    peruntukan: "",
    keterangan: "",
    jbb: "",
    bahanbakar: "",
    merek: "",
    tipe: "",
    norangka: "",
    nomesin: "",
  },
  pengujian: {
    pos1: "0",
    catatanpos1: "",
    hasilujipos1: "",
    pos2: "0",
    catatanpos2: "",
    hasilujipos2: "",
    pos3: "0",
    catatanpos3: "",
    hasilujipos3: "",
    pos4: "0",
    catatanpos4: "",
    hasilujipos4: "",
    pos5: "0",
    catatanpos5: "",
    hasilujipos5: "",
    pos6: "0",
    catatanpos6: "",
    hasilujipos6: "",
    pos7: "0",
    catatanpos7: "",
    hasilujipos7: "",
    pos8: "0",
    catatanpos8: "",
    hasilujipos8: "",
    verif: "0",
    catatanverif: "",
    tglujiulang: "",
    user_verif: "",
    jenis_cetak: "0",
  },
  pengujian2: {
    pos1: "0",
    catatanpos1: "",
    hasilujipos1: "",
    pos2: "0",
    catatanpos2: "",
    hasilujipos2: "",
    pos3: "0",
    catatanpos3: "",
    hasilujipos3: "",
    verif: "0",
    catatanverif: "",
    tglujiulang: "",
    user_verif2: "",
  },
  surat: {
    v_stnk: "0",
    v_kartuinduk: "0",
    v_srut: "0",
    v_smartcard: "0",
    v_riwayat: "0",
    catatan: "0",
    status_cetak: "0",
    posverif: "0",
    passkey: "",
    keterangan: "",
  },
  page: 1,
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
      ...state.pengujian,
      ...payload,
    };

    // console.log(state.pengujian);

    // state.pengujian = {
    //   pendaftaran_id: payload.pendaftaran_id,
    //   identitaskendaraan_id: payload.identitaskendaraan_id,
    //   pos1: payload.pos1,
    //   catatanpos1: payload.catatanpos1,
    //   hasilujipos1:
    //     "Kedalaman alur ban : " + payload.alatuji_kedalamanalurban + "mm",
    //   pos2: payload.pos2,
    //   catatanpos2: payload.catatanpos2,
    //   hasilujipos2: "klakson : " + payload.alatuji_tingkatkebisingan + "Db",
    //   pos3: payload.pos3,
    //   catatanpos3: payload.catatanpos3,
    //   hasilujipos3: "",
    //   pos4: payload.pos4,
    //   catatanpos4: payload.catatanpos4,
    //   hasilujipos4:
    //     "Intensitas Lampu Utama Kanan : " +
    //     payload.alatuji_lampuutamakekuatanpancarlampukanan +
    //     "Cd, Intensitas Lampu Utama Kiri : " +
    //     payload.alatuji_lampuutamakekuatanpancarlampukiri +
    //     "Cd",
    //   pos5: payload.pos5,
    //   catatanpos5: payload.catatanpos5,
    //   hasilujipos5: "sideslip : " + payload.alatuji_kincuprodadepan + "mm/Km",
    //   pos6: payload.pos6,
    //   catatanpos6: payload.catatanpos6,
    //   hasilujipos6: "",
    //   pos7: payload.pos7,
    //   catatanpos7: payload.catatanpos7,
    //   hasilujipos7: "eff rem Parkir : " + payload.alatuji_remparkirtangan + "%",
    //   pos8: payload.pos8,
    //   catatanpos8: payload.catatanpos8,
    //   hasilujipos8:
    //     "speedometer : " + payload.alatuji_penunjukkecepatan + "Km/Jam",
    //   verif: payload.verif,
    //   catatanverif: payload.catatanverif,
    //   tglujiulang: payload.tglujiulang,
    //   jenis_cetak: "0",
    // };

    // if (payload.pos1 == "1" && payload.pos2 == "1" && payload.pos3 == "1")
    //   state.pengujian.verif = "1";
    // else if (payload.verif == "1") {
    //   state.pengujian.verif = "1";
    // } else state.pengujian.verif = "0";

    // if (state.identitaskendaraan.bahanbakar.toUpperCase() == "SOLAR") {
    //   state.pengujian.hasilujipos3 =
    //     "KETEBALAN ASAP : " + payload.alatuji_emisiasapbahanbakarsolar + " HSU";
    // } else if (state.identitaskendaraan.bahanbakar.toUpperCase() == "BENSIN") {
    //   state.pengujian.hasilujipos3 =
    //     "CO : " +
    //     payload.alatuji_emisicobahanbakarbensin +
    //     "%, HC : " +
    //     payload.alatuji_emisihcbahanbakarbensin +
    //     "Ppm";
    // }
    // var i = 0;
    // var kiri = 0;
    // var kanan = 0;
    // var total = 0;
    // var effsumbu1 = 0;
    // var beratSumbu = "";
    // if (payload.berats1 > 0) {
    //   kiri = payload.gayaremkiri1;
    //   kanan = payload.gayaremkanan1;
    //   total = parseInt(kiri) + parseInt(kanan);
    //   effsumbu1 = Math.ceil((total / payload.berats1) * 100);
    //   i = 1;
    //   beratSumbu = "Berat Sumbu 1 : " + payload.berats1 + "Kg";
    // }
    // var kiri = 0;
    // var kanan = 0;
    // var total = 0;
    // var effsumbu2 = 0;
    // if (payload.berats2 > 0) {
    //   kiri = payload.gayaremkiri2;
    //   kanan = payload.gayaremkanan2;
    //   total = parseInt(kiri) + parseInt(kanan);
    //   effsumbu2 = Math.ceil((total / payload.berats2) * 100);
    //   i = 2;
    //   beratSumbu = beratSumbu + "Berat Sumbu 2 : " + payload.berats2 + "Kg";
    // }
    // var kiri = 0;
    // var kanan = 0;
    // var total = 0;
    // var effsumbu3 = 0;
    // if (payload.berats3 > 0) {
    //   kiri = payload.gayaremkiri3;
    //   kanan = payload.gayaremkanan3;
    //   total = parseInt(kiri) + parseInt(kanan);
    //   effsumbu3 = Math.ceil((total / payload.berats3) * 100);
    //   i = 3;
    //   beratSumbu = beratSumbu + "Berat Sumbu 3 : " + payload.berats3 + "Kg";
    // }
    // var kiri = 0;
    // var kanan = 0;
    // var total = 0;
    // var effsumbu4 = 0;
    // if (payload.berats4 > 0) {
    //   kiri = payload.gayaremkiri4;
    //   kanan = payload.gayaremkanan4;
    //   total = parseInt(kiri) + parseInt(kanan);
    //   effsumbu4 = Math.ceil((total / payload.berats4) * 100);
    //   i = 4;
    //   beratSumbu = beratSumbu + "Berat Sumbu 4 : " + payload.berats4 + "Kg";
    // }
    // var kiri = 0;
    // var kanan = 0;
    // var total = 0;
    // var effsumbu4 = 0;
    // if (payload.berats5 > 0) {
    //   kiri = payload.gayaremkiri5;
    //   kanan = payload.gayaremkanan5;
    //   total = parseInt(kiri) + parseInt(kanan);
    //   effsumbu5 = Math.ceil((total / payload.berats5) * 100);
    //   i = 5;
    //   beratSumbu = beratSumbu + "Berat Sumbu 5 : " + payload.berats5 + "Kg";
    // }
    // var kiri = 0;
    // var kanan = 0;
    // var total = 0;
    // var effsumbu4 = 0;
    // if (payload.berats6 > 0) {
    //   kiri = payload.gayaremkiri6;
    //   kanan = payload.gayaremkanan6;
    //   total = parseInt(kiri) + parseInt(kanan);
    //   effsumbu6 = Math.ceil((total / payload.berats6) * 100);
    //   i = 6;
    //   beratSumbu = beratSumbu + "Berat Sumbu 6 : " + payload.berats6 + "Kg";
    // }
    // if (i > 0) {
    //   state.pengujian.hasilujipos6 = beratSumbu;
    //   state.pengujian.hasilujipos7 =
    //     state.pengujian.hasilujipos7 +
    //     ", EFF Total : " +
    //     (parseInt(effsumbu1) +
    //       parseInt(effsumbu2) +
    //       parseInt(effsumbu3) +
    //       parseInt(effsumbu4) +
    //       parseInt(effsumbu5) +
    //       parseInt(effsumbu6)) /
    //       i +
    //     "%";
    // }
  },
  ASSIGN_PENGUJIAN2(state, payload) {
    state.pengujian2 = {
      pendaftaran_id: payload.pendaftaran_id,
      identitaskendaraan_id: payload.identitaskendaraan_id,
      pos1: payload.pos1,
      catatanpos1: payload.catatanpos1,
      hasilujipos1: "",
      pos2: payload.pos2,
      catatanpos2: payload.catatanpos2,
      hasilujipos2:
        "Intensitas Lampu Utama Kanan : " +
        payload.alatuji_lampuutamakekuatanpancarlampukanan +
        "Cd, Intensitas Lampu Utama Kiri : " +
        payload.alatuji_lampuutamakekuatanpancarlampukiri +
        "Cd" +
        ", klakson : " +
        payload.alatuji_tingkatkebisingan +
        "Db",
      pos3: payload.pos3,
      catatanpos3: payload.catatanpos3,
      hasilujipos3:
        "sideslip : " +
        payload.alatuji_kincuprodadepan +
        "mm/Km" +
        ", eff rem Parkir : " +
        payload.alatuji_remparkirtangan +
        "%" +
        ", speedometer : " +
        payload.alatuji_penunjukkecepatan +
        "Km/Jam",
      verif: payload.verif,
      catatanverif: payload.catatanverif,
      tglujiulang: payload.tglujiulang,
    };

    if (payload.pos1 == "1" && payload.pos2 == "1" && payload.pos3 == "1")
      state.pengujian2.verif = "1";
    else if (payload.verif == "1") {
      state.pengujian2.verif = "1";
    } else state.pengujian2.verif = "0";

    if (state.identitaskendaraan.bahanbakar.toUpperCase() == "SOLAR") {
      state.pengujian.hasilujipos1 =
        "KETEBALAN ASAP : " +
        payload.alatuji_emisiasapbahanbakarsolar +
        " HSU" +
        ", Kedalaman alur ban : " +
        payload.alatuji_kedalamanalurban +
        "mm";
    } else if (state.identitaskendaraan.bahanbakar.toUpperCase() == "BENSIN") {
      state.pengujian.hasilujipos1 =
        "CO : " +
        payload.alatuji_emisicobahanbakarbensin +
        "%, HC : " +
        payload.alatuji_emisihcbahanbakarbensin +
        "Ppm" +
        ", Kedalaman alur ban : " +
        payload.alatuji_kedalamanalurban +
        "mm";
    }
    var i = 0;
    var kiri = 0;
    var kanan = 0;
    var total = 0;
    var effsumbu1 = 0;
    if (payload.berats1 > 0) {
      kiri = payload.gayaremkiri1;
      kanan = payload.gayaremkanan1;
      total = parseInt(kiri) + parseInt(kanan);
      effsumbu1 = Math.ceil((total / payload.berats1) * 100);
      i = 1;
    }
    var kiri = 0;
    var kanan = 0;
    var total = 0;
    var effsumbu2 = 0;
    if (payload.berats2 > 0) {
      kiri = payload.gayaremkiri2;
      kanan = payload.gayaremkanan2;
      total = parseInt(kiri) + parseInt(kanan);
      effsumbu2 = Math.ceil((total / payload.berats2) * 100);
      i = 2;
    }
    var kiri = 0;
    var kanan = 0;
    var total = 0;
    var effsumbu3 = 0;
    if (payload.berats3 > 0) {
      kiri = payload.gayaremkiri3;
      kanan = payload.gayaremkanan3;
      total = parseInt(kiri) + parseInt(kanan);
      effsumbu3 = Math.ceil((total / payload.berats3) * 100);
      i = 3;
    }
    var kiri = 0;
    var kanan = 0;
    var total = 0;
    var effsumbu4 = 0;
    if (payload.berats4 > 0) {
      kiri = payload.gayaremkiri4;
      kanan = payload.gayaremkanan4;
      total = parseInt(kiri) + parseInt(kanan);
      effsumbu4 = Math.ceil((total / payload.berats4) * 100);
      i = 4;
    }
    var kiri = 0;
    var kanan = 0;
    var total = 0;
    var effsumbu4 = 0;
    if (payload.berats5 > 0) {
      kiri = payload.gayaremkiri5;
      kanan = payload.gayaremkanan5;
      total = parseInt(kiri) + parseInt(kanan);
      effsumbu5 = Math.ceil((total / payload.berats5) * 100);
      i = 5;
    }
    var kiri = 0;
    var kanan = 0;
    var total = 0;
    var effsumbu4 = 0;
    if (payload.berats6 > 0) {
      kiri = payload.gayaremkiri6;
      kanan = payload.gayaremkanan6;
      total = parseInt(kiri) + parseInt(kanan);
      effsumbu6 = Math.ceil((total / payload.berats6) * 100);
      i = 6;
    }
    if (i > 0) {
      state.pengujian2.hasilujipos3 =
        state.pengujian2.hasilujipos3 +
        ", EFF Total : " +
        (parseInt(effsumbu1) +
          parseInt(effsumbu2) +
          parseInt(effsumbu3) +
          parseInt(effsumbu4) +
          parseInt(effsumbu5) +
          parseInt(effsumbu6)) /
          i +
        "%";
    }
  },
  ASSIGN_FORM(state, payload) {
    state.identitaskendaraan = {
      uuid: payload.uuid,
      keterangan: payload.keterangan,
      nama: payload.nama,
      nouji: payload.nouji,
      noregistrasikendaraan: payload.noregistrasikendaraan,
      peruntukan: payload.peruntukan,
      keterangan: payload.keterangan,
      jenis: payload.jenis,
      jbb: payload.jbb,
      bahanbakar: payload.bahanbakar,
      merek: payload.merek,
      tipe: payload.tipe,
      norangka: payload.norangka,
      nomesin: payload.nomesin,
    };
    state.surat = {
      v_stnk: payload.v_stnk,
      v_kartuinduk: payload.v_kartuinduk,
      v_srut: payload.v_srut,
      v_smartcard: payload.v_smartcard,
      v_riwayat: payload.v_riwayat,
      catatan: payload.catatan,
      posverif: payload.posverif,
      passkey: "",
      status_cetak: payload.status_cetak,
      keterangan: "",
    };
  },
  CLEAR_FORM(state) {
    state.pengujian = {
      pos1: "0",
      catatanpos1: "",
      hasilujipos1: "",
      pos2: "0",
      catatanpos2: "",
      hasilujipos2: "",
      pos3: "0",
      catatanpos3: "",
      hasilujipos3: "",
      pos4: "0",
      catatanpos4: "",
      hasilujipos4: "",
      pos5: "0",
      catatanpos5: "",
      hasilujipos5: "",
      pos6: "0",
      catatanpos6: "",
      hasilujipos6: "",
      pos7: "0",
      catatanpos7: "",
      hasilujipos7: "",
      pos8: "0",
      catatanpos8: "",
      hasilujipos8: "",
      verif: "0",
      catatanverif: "",
      tglujiulang: "",
      user_verif: "",
      jenis_cetak: "0",
    };
    state.pengujian2 = {
      pos1: "0",
      catatanpos1: "",
      pos2: "0",
      catatanpos2: "",
      pos3: "0",
      catatanpos4: "",
      pos4: "0",
      catatanpos4: "",
      pos5: "0",
      catatanpos5: "",
      pos6: "0",
      catatanpos6: "",
      verif: "0",
      catatanverif: "",
      tglujiulang: "",
      user_verif2: "",
    };

    state.surat = {
      v_stnk: "0",
      v_kartuinduk: "0",
      v_srut: "0",
      v_smartcard: "0",
      v_riwayat: "0",
      catatan: "0",
      status_cetak: "0",
      posverif: "0",
      passkey: "",
      keterangan: "",
    };
  },

  CLEAR_FILTER(state) {
    state.filter = {
      tgl: "",
    };
  },
};

export const actions = {
  getPendaftarans({ commit, state }, payload) {
    let search = typeof payload != "undefined" ? payload : "";
    return new Promise((resolve, reject) => {
      VerifService.getPendaftarans(state.page, state.filter.tgl, search)
        .then((response) => {
          commit("ASSING_DATA", response.data.result);
          resolve(response.data);
        })
        .catch((error) => {
          if (
            error ==
            "Error: [KTs] ApiService Error: Request failed with status code 403"
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.history.back();
              }
            });
          }
        });
    });
  },
  getPendaftaransLulus({ commit, state }, payload) {
    let search = typeof payload != "undefined" ? payload : "";
    return new Promise((resolve, reject) => {
      VerifService.getPendaftaransLulus(state.page, state.filter.tgl, search)
        .then((response) => {
          commit("ASSING_DATALULUS", response.data.result);
          resolve(response.data);
        })
        .catch((error) => {
          if (
            error ==
            "Error: [KTs] ApiService Error: Request failed with status code 403"
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.history.back();
              }
            });
          }
        });
    });
  },
  getHasilUji({ commit, state }, payload) {
    let search = typeof payload != "undefined" ? payload : "";
    return new Promise((resolve, reject) => {
      VerifService.getHasilUji(state.page, state.filter.tgl, search)
        .then((response) => {
          commit("ASSING_DATAHASILUJI", response.data.result);
          resolve(response.data);
        })
        .catch((error) => {
          if (
            error ==
            "Error: [KTs] ApiService Error: Request failed with status code 403"
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.history.back();
              }
            });
          }
        });
    });
  },
  getPendaftaransVerif2({ commit, state }, payload) {
    let search = typeof payload != "undefined" ? payload : "";
    return new Promise((resolve, reject) => {
      VerifService.getPendaftaransVerif2(state.page, state.filter.tgl, search)
        .then((response) => {
          commit("ASSING_DATAVERIF2", response.data.result);
          resolve(response.data);
        })
        .catch((error) => {
          if (
            error ==
            "Error: [KTs] ApiService Error: Request failed with status code 403"
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.history.back();
              }
            });
          }
        });
    });
  },
  getPendaftaransLulusVerif2({ commit, state }, payload) {
    let search = typeof payload != "undefined" ? payload : "";
    return new Promise((resolve, reject) => {
      VerifService.getPendaftaransLulusVerif2(
        state.page,
        state.filter.tgl,
        search
      )
        .then((response) => {
          commit("ASSING_DATALULUSVERIF2", response.data.result);
          resolve(response.data);
        })
        .catch((error) => {
          if (
            error ==
            "Error: [KTs] ApiService Error: Request failed with status code 403"
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.history.back();
              }
            });
          }
        });
    });
  },
  getPendaftaransTLulus({ commit, state }, payload) {
    let search = typeof payload != "undefined" ? payload : "";
    return new Promise((resolve, reject) => {
      VerifService.getPendaftaransTLulus(state.page, state.filter.tgl, search)
        .then((response) => {
          commit("ASSING_DATATLULUS", response.data.result);
          resolve(response.data);
        })
        .catch((error) => {
          if (
            error ==
            "Error: [KTs] ApiService Error: Request failed with status code 403"
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.history.back();
              }
            });
          }
        });
    });
  },

  getIdentitaskendaraan({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      VerifService.getIdentitaskendaraan(payload)
        .then((response) => {
          commit("ASSIGN_FORM", response.data.result);
          resolve(response.data);
          // console.log("run edit");
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  },

  getKuota({ commit, state }) {
    return VerifService.cekkuota().then((response) => {
      commit("ASSING_KUOTA", response.data.result);
      // console.log(response.data.data)
    });
  },

  getCatatanPos({ commit, state }, payload) {
    return VerifService.getCatatanPos(payload).then((response) => {
      commit("ASSING_CATATANPOS", response.data.result);
      // console.log(response.data.data)
    });
  },

  submitVerif({ dispatch, commit, state }, id) {
    state.pengujian.pendaftaran_id = id;
    return new Promise((resolve, reject) => {
      VerifService.postVerif(state.pengujian)
        .then((response) => {
          commit("ASSIGN_PENGUJIAN", response.data.result);
          resolve(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  },
  submitVerif2({ dispatch, commit, state }, id) {
    state.pengujian2.pendaftaran_id = id;
    if (state.pengujian2.verif == "1") {
      state.pengujian2.catatanverif = "";
    }
    return new Promise((resolve, reject) => {
      VerifService.postVerif2(state.pengujian2)
        .then((response) => {
          commit("ASSIGN_PENGUJIAN", response.data.result);
          resolve(response.data);
        })
        .catch((error) => {});
    });
  },
  submitApprove({ dispatch, commit, state }, id) {
    return new Promise((resolve, reject) => {
      state.surat.keterangan = state.identitaskendaraan.keterangan;
      VerifService.approveSurat(id, state.surat)
        .then((response) => {
          // commit("ASSIGN_FORM", response.data.result);
          resolve(response.data);
        })
        .catch((error) => {
          if (
            error ==
            "Error: [KTs] ApiService Error: Request failed with status code 403"
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.history.back();
              }
            });
          } else if (error.response.status == 422) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.messages,
            });
            console.log(error.response);
          } else {
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
      VerifService.approvingSurat(id, state.surat)
        .then((response) => {
          // commit("ASSIGN_FORM", response.data.result);
          resolve(response.data);
        })
        .catch((error) => {
          if (
            error ==
            "Error: [KTs] ApiService Error: Request failed with status code 403"
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.history.back();
              }
            });
          } else if (error.response.status == 422) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.messages,
            });
          } else {
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
        .then((response) => {
          const payload = response.data.result;

          payload.hasilujipos1 = formatPosDisplayResult(
            payload,
            state.identitaskendaraan,
            1
          );
          payload.hasilujipos2 = formatPosDisplayResult(
            payload,
            state.identitaskendaraan,
            2
          );
          payload.hasilujipos3 = formatPosDisplayResult(
            payload,
            state.identitaskendaraan,
            3
          );
          payload.hasilujipos4 = formatPosDisplayResult(
            payload,
            state.identitaskendaraan,
            4
          );
          payload.verif = isValid(payload);

          commit(
            "ASSING_CATATANPOS",
            hideCatatan(
              state.catatanpos,
              {
                pos1: payload.pos1,
                pos2: payload.pos2,
                pos3: payload.pos3,
                pos4: payload.pos4,
                pos5: payload.pos5,
                pos6: payload.pos6,
                pos7: payload.pos7,
              },
              payload
            )
          );
          commit("ASSIGN_PENGUJIAN", payload);

          resolve(response.data);
          // console.log("run edit");
        })
        .catch((error) => {
          console.error(error);
          if (
            error ==
            "Error: [KTs] ApiService Error: Request failed with status code 403"
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.history.back();
              }
            });
          }
        });
    });
  },
  editVerif2({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      VerifService.getVerif(payload)
        .then((response) => {
          commit("ASSIGN_PENGUJIAN2", response.data.result);
          resolve(response.data);
          // console.log("run edit");
        })
        .catch((error) => {
          if (
            error ==
            "Error: [KTs] ApiService Error: Request failed with status code 403"
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Akses ditolak. Anda tidak memiliki izin!!",
            }).then((result) => {
              if (result.isConfirmed) {
                window.history.back();
              }
            });
          }
        });
    });
  },
  updateVerif({ state, commit }, id) {
    return new Promise((resolve, reject) => {
      VerifService.updateVerif(id, state.pengujian)
        .then((response) => {
          // commit("CLEAR_FORM");
          resolve(response.data);
          // console.log("sukses update");
        })
        .catch((error) => {
          if (error.response.status == 422) {
            commit("SET_ERRORS", error.response.data.errors, {
              root: true,
            });
            // console.log(error.response.data.errors)
          }
        });
    });
  },
  ulangiFoto({ state, commit }, id) {
    return new Promise((resolve, reject) => {
      VerifService.ulangiFoto(id)
        .then((response) => {
          // commit("CLEAR_FORM");
          resolve(response.data);
          // console.log("sukses update");
        })
        .catch((error) => {
          if (error.response.status == 422) {
            commit("SET_ERRORS", error.response.data.errors, {
              root: true,
            });
            // console.log(error.response.data.errors)
          }
        });
    });
  },
  removeVerif({ dispatch }, id) {
    return new Promise((resolve, reject) => {
      VerifService.deleteVerif(id)
        .then((response) => {
          dispatch("getPendaftarans").then(() => resolve());
        })
        .catch((error) => {
          if (error.response.status == 422) {
            commit("SET_ERRORS", error.response.data.errors, {
              root: true,
            });
            // console.log(error.response.data.errors)
          }
        });
    });
  },
};
export const getters = {
  getEventById: (state) => (id) => {
    return state.pendaftarans.find((pendaftaran) => pendaftaran.id === id);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};


import { uuid } from "vue-uuid/dist/index.js";
import DatakendaraanService from "../datakendaraan.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    datakendaraans: [],
    riwayatuji: [],
    kodewilayahs: [],
    kelurahans  : [],
    kecamatans  : [],
    kotas       : [],
    kodepenerbitans:[],
    pendaftarandetail: [],
    total: "",
    kodepenerbitans:[],
    mereks: [],
    tipes: [],
    varians:[],
    jenis: [],
    subjenis:[],
    fuels:[],
    kelasjalans:[],
    jeniskendaraan: [],
    filter: {
        tgl: ""
    },
    datakendaraan: {
        uuid:"",
        nouji:"",
        nama:"",
        alamat:"",
        kelurahan:"",
        kecamatan:"",
        kota:"",
        nosuratkehilangan:"",
        noidentitaspemilik:"",
        noregistrasikendaraan:"",
        tgl_registrasikendaraan:"",
        merek:"",
        mereklama:"",
        tipe:"",
        tipelama:"",
        varian:"",
        norangka:"",
        nomesin:"",
        thpembuatan:"",
        bahanbakar:"",
        isisilinder:"0",
        dayamotorpenggerak:"0",
        jenis:"",
        jenislama:"",
        subjenis:"",
        model:"",
        peruntukan:"",
        kodewilayah:"",
        wilayah:"",
        kodewilayahasal:"",
        wilayahasal:"",
        nosertifikatreg:"",
        tglsertifikatreg: "",
        rancang: "",
        tempat: "",
        masaberlakuuji: "",
        penguji:"",
        nrp:"",
        nokendaraanbaru: "",
        namapemilikbaru: "",
        alamatpemilikbaru: "",
        warna: "",
        tmk: "",
        idmerek:"",
        idtipe:"",
        idvarian:"",
        idbahanbakar:"",
        idjenis:"",
        idsubjenis:"",
        idkodewilayah:"",
        idkodewilayahasal:"",
        pendaftaran_id:"",
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
        jumlah_sumbu:"2",
        jaraksumbu1_2:"0",
        jaraksumbu2_3:"0",
        jaraksumbu3_4:"0",
        jaraksumbu4_5:"0",
        jaraksumbu5_6:"0",
        jaraksumbu6_7:"0",
        jaraksumbu7_8:"0",
        jaraksumbu8_9:"0",
        jaraksumbu9_10:"0",
        jaraksumbu10_11:"0",
        jaraksumbu11_12:"0",
        q:"0",
        p:"0",
        r:"0",
        a:"0",
        b:"0",
        dayaangkutorang:"0",
        dayaangkutbarang:"0",
        kelasjalanterendah:"",
        idkelasjalan:"",
        beratsumbu1:"0",
        beratsumbu2:"0",
        beratsumbu3:"0",
        beratsumbu4:"0",
        beratsumbu5:"0",
        beratsumbu6:"0",
        beratsumbu7:"0",
        beratsumbu8:"0",
        beratsumbu9:"0",
        beratsumbu10:"0",
        beratsumbu11:"0",
        beratsumbu12:"0",
        beratkosong:"0",
        catatanrubahbentuk:"",
        bahan:"",
    },
    datavta : {
        nosertifikatreg:"",
        noskdrijen:"",
        merek:"",
        tipe:"",
        jenis:"",
        peruntukan:"",
        norangka:"",
        nomesin:"",
        namaperusahaan:"",
        alamatperusahaan:"",
        penanggungjawab:"",
    },
    responeBlue:{
        status:"",
        code:"",
        message:"",
        data:[],
    },
    carinouji:"",
    carinokendaraan:"",
    carinorangka:"",
    password1:"@Lupakatasandi",
    password2:"",
    status:"SEMUA",
    page: 1
};

export const mutations = {
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
    DATA_KODEPENERBITAN(state, kodepenerbitans){
        state.kodepenerbitans = kodepenerbitans;
    },
    DATA_MEREK(state, mereks){
        state.mereks = mereks;
    },
    DATA_TIPE(state, tipes){
        state.tipes = tipes;
    },
    DATA_VARIAN(state, varians){
        state.varians = varians;
    },
    DATA_JENIS(state, jenis){
        state.jenis = jenis;
    },
    DATA_SUBJENIS(state, subjenis){
        state.subjenis = subjenis;
    },
    DATA_FUELS(state, fuels){
        state.fuels = fuels;
    },
    DATA_KELASJALAN(state, kelasjalans){
        state.kelasjalans = kelasjalans;
    },
    DATA_JENISKENDARAAN(state, jeniskendaraan){
        state.jeniskendaraan = jeniskendaraan;
    },
    ASSING_DATA(state, datakendaraans) {
        state.datakendaraans = datakendaraans;
    },
    ASSING_DATAUJI(state, riwayatuji) {
        state.riwayatuji = riwayatuji;
    },
    ASSING_DATADETAIL(state, pendaftarandetail) {
        state.pendaftarandetail = pendaftarandetail;
    },
    ASSIGN_RESPONVTA(state, payload){
        if(payload.error){
            var stts = false;
        }else{
            var stts = true;
        }
        state.responeBlue = {
            status: stts,
            code: payload.status_code,
            message: payload.message,
            data: payload.data,
        }
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_STATUS(state, payload) {
        state.status = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_FORM(state, payload) {
        state.datakendaraan = {
            uuid:payload.uuid,
            nouji: payload.nouji,
            nama: payload.nama,
            alamat: payload.alamat,
            kelurahan:payload.kelurahan,
            kecamatan:payload.kecamatan,
            kota:payload.kota,
            noidentitaspemilik: payload.noidentitaspemilik,
            noregistrasikendaraan: payload.noregistrasikendaraan,
            tgl_registrasikendaraan:payload.tgl_registrasikendaraan,
            merek: payload.merek,
            tipe: payload.tipe,
            varian: payload.varian,
            norangka: payload.norangka,
            nomesin: payload.nomesin,
            thpembuatan: payload.thpembuatan,
            bahanbakar: payload.bahanbakar,
            isisilinder: payload.isisilinder,
            dayamotorpenggerak: payload.dayamotorpenggerak,
            jenis: payload.jenis,
            subjenis: payload.subjenis,
            model: payload.model,
            peruntukan: payload.peruntukan.toUpperCase(),
            kodewilayah: payload.kodewilayah,
            kodewilayahasal: payload.kodewilayahasal,
            wilayah:"",
            wilayahasal:"",
            nosertifikatreg: payload.nosertifikatreg,
            tglsertifikatreg: payload.tglsertifikatreg,
            rancang : payload.rancang,
            warna: payload.warna,
            tmk: payload.tmk,
            idmerek: payload.idmerek,
            idtipe: payload.idtipe,
            idvarian: payload.idvarian,
            idbahanbakar: payload.idbahanbakar,
            idjenis: payload.idjenis,
            idsubjenis: payload.idsubjenis,
            idkodewilayah: payload.idkodewilayah,
            idkodewilayahasal: payload.idkodewilayahasal,
            jbb: payload.jbb,
            jbkb: payload.jbkb,
            jbi: payload.jbi,
            jbki: payload.jbki,
            mst: payload.mst,
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
            jumlah_sumbu: payload.jumlah_sumbu,
            jaraksumbu1_2: payload.jaraksumbu1_2,
            jaraksumbu2_3: payload.jaraksumbu2_3,
            jaraksumbu3_4: payload.jaraksumbu3_4,
            jaraksumbu4_5: payload.jaraksumbu4_5,
            jaraksumbu5_6: payload.jaraksumbu5_6,
            jaraksumbu6_7: payload.jaraksumbu6_7,
            jaraksumbu7_8: payload.jaraksumbu7_8,
            jaraksumbu8_9: payload.jaraksumbu8_9,
            jaraksumbu9_10: payload.jaraksumbu9_10,
            jaraksumbu10_11: payload.jaraksumbu10_11,
            jaraksumbu11_12: payload.jaraksumbu11_12,
            q: payload.q,
            p: payload.p,
            r: payload.r,
            a: payload.a,
            b: payload.b,
            dayaangkutorang: payload.dayaangkutorang,
            dayaangkutbarang: payload.dayaangkutbarang,
            kelasjalanterendah: payload.kelasjalanterendah,
            idkelasjalan: payload.idkelasjalan,
            beratsumbu1:payload.beratsumbu1,
            beratsumbu2:payload.beratsumbu2,
            beratsumbu3:payload.beratsumbu3,
            beratsumbu4:payload.beratsumbu4,
            beratsumbu5:payload.beratsumbu5,
            beratsumbu6:payload.beratsumbu6,
            beratsumbu7:payload.beratsumbu7,
            beratsumbu8:payload.beratsumbu8,
            beratsumbu9:payload.beratsumbu9,
            beratsumbu10:payload.beratsumbu10,
            beratsumbu11:payload.beratsumbu11,
            beratsumbu12:payload.beratsumbu12,
            beratkosong:payload.beratkosong,
            catatanrubahbentuk:payload.catatanrubahbentuk,
            bahan:payload.bahan,
        };
        if(payload.kodewilayah !== null && payload.kodewilayah  !== undefined && payload.kodewilayah  !== ""){
            var wilayah = state.kodewilayahs.find(function(item) {
                return item.area_code === payload.kodewilayah;
            });
            if (wilayah) {
                state.datakendaraan.wilayah= wilayah.area_name;
                state.datakendaraan.kodewilayah= wilayah.area_code;
                state.datakendaraan.idkodewilayah= wilayah.area_id;
            }
        }
        if(payload.kodewilayahasal !== null && payload.kodewilayahasal  !== undefined && payload.kodewilayahasal  !== ""){
            var wilayah = state.kodewilayahs.find(function(item) {
                return item.area_code === payload.kodewilayahasal;
            });
            if (wilayah) {
                state.datakendaraan.wilayahasal= wilayah.area_name;
                state.datakendaraan.kodewilayahasal= wilayah.area_code;
                state.datakendaraan.idkodewilayahasal= wilayah.area_id;
            }
        }
        if(payload.merek !== null && payload.merek  !== undefined && payload.merek  !== ""){
            var data = state.mereks.find(function(item) {
                return (item.vehicle_brand_name).toUpperCase() === (payload.merek).toUpperCase();
            });

            if(data) {
                state.datakendaraan.merek= data.vehicle_brand_name;
                state.datakendaraan.idmerek= data.vehicle_brand_id;
            }else{
                state.datakendaraan.mereklama = payload.merek;
                state.datakendaraan.merek= "";
                state.datakendaraan.idmerek= "";
            }
        }
        if(payload.tipe !== null && payload.tipe  !== undefined && payload.tipe  !== ""){
            var data = state.tipes.find(function(item) {
                return (item.vehicle_varian_type_name).toUpperCase() === (payload.tipe).toUpperCase();
            });
            if (data) {
                state.datakendaraan.tipe= data.vehicle_varian_type_name;
                state.datakendaraan.idtipe= data.vehicle_varian_type_id;
                const hasilFilter = state.tipes.filter(f => [state.datakendaraan.idmerek].includes(f.vehicle_brand_id));
                state.tipes = hasilFilter;
            }else{
                state.datakendaraan.tipelama= payload.tipe;
                state.datakendaraan.tipe= "";
                state.datakendaraan.idtipe= "";
            }
        }
        if(payload.idvarian !== null && payload.idvarian  !== undefined && payload.idvarian  !== ""){
            const hasilFilter = state.varians.filter(f => [state.datakendaraan.idtipe].includes(f.vehicle_varian_type_id));
            state.varians = hasilFilter;
        }
        if(payload.jenis !== null && payload.jenis  !== undefined && payload.jenis  !== ""){
            var data = state.jenis.find(function(item) {
                return (item.vehicle_type_name).toUpperCase() === (payload.jenis).toUpperCase();
            });
            if (data) {
                state.datakendaraan.jenis= data.vehicle_type_name;
                state.datakendaraan.idtipe= data.vehicle_type_id;
                const hasilFilter = state.subjenis.filter(f => [state.datakendaraan.idtipe].includes(f.vehicle_sub_type_id));
                state.subjenis = hasilFilter;
            }else{
                state.datakendaraan.jenislama= payload.jenis;
                state.datakendaraan.jenis= "";
                state.datakendaraan.idjenis= "";
            }
        }
        if(payload.bahanbakar !== null && payload.bahanbakar  !== undefined && payload.bahanbakar  !== ""){
            var data = state.fuels.find(function(item) {
                return (item.fuel_name).toUpperCase() === (payload.bahanbakar).toUpperCase();
            });
            if (data) {
                state.datakendaraan.bahanbakar= data.fuel_name;
                state.datakendaraan.idbahanbakar= data.fuel_id;
            }else{
                state.datakendaraan.bahanbakar= "";
                state.datakendaraan.idbahanbakar= "";
            }
        }
        if(payload.kelasjalanterendah !== null && payload.kelasjalanterendah  !== undefined && payload.kelasjalanterendah  !== ""){
            var kelasName = payload.kelasjalanterendah;
            if (kelasName.includes("KELAS")) {
            } else {
                if (kelasName.includes("III")) {
                    kelasName = "KELAS III";
                }else if(kelasName.includes("II")){
                    kelasName = "KELAS II";
                }else if(kelasName.includes("I")){
                    kelasName = "KELAS I";
                }
            }
            var data = state.kelasjalans.find(function(item) {
                return (item.kelasjalan_name).toUpperCase() === (kelasName).toUpperCase();
            });
            if (data) {
                state.datakendaraan.kelasjalanterendah= data.kelasjalan_name;
                state.datakendaraan.idkelasjalanterendah= data.kelasjalan_id;
            }else{
                state.datakendaraan.kelasjalanterendah= "";
                state.datakendaraan.idkelasjalanterendah= "";
            }
        }

        if(payload.jumlah_sumbu === null || payload.jumlah_sumbu == "" || payload.jumlah_sumbu == 0 || payload.jumlah_sumbu == "0")
        {
            if(state.datakendaraan.jaraksumbu11_12 > 0){
                state.datakendaraan.jumlah_sumbu = "12";
            }else if(state.datakendaraan.jaraksumbu10_11 > 0){
                state.datakendaraan.jumlah_sumbu = "11";
            }else if(state.datakendaraan.jaraksumbu9_10 > 0){
                state.datakendaraan.jumlah_sumbu = "10";
            }else if(state.datakendaraan.jaraksumbu8_9 > 0){
                state.datakendaraan.jumlah_sumbu = "9";
            }else if(state.datakendaraan.jaraksumbu7_8 > 0){
                state.datakendaraan.jumlah_sumbu = "8";
            }else if(state.datakendaraan.jaraksumbu6_7 > 0){
                state.datakendaraan.jumlah_sumbu = "7";
            }else if(state.datakendaraan.jaraksumbu5_6 > 0){
                state.datakendaraan.jumlah_sumbu = "6";
            }else if(state.datakendaraan.jaraksumbu4_5 > 0){
                state.datakendaraan.jumlah_sumbu = "5";
            }else if(state.datakendaraan.jaraksumbu3_4 > 0){
                state.datakendaraan.jumlah_sumbu = "4";
            }else if(state.datakendaraan.jaraksumbu2_3 > 0){
                state.datakendaraan.jumlah_sumbu = "3";
            }else if(state.datakendaraan.jaraksumbu1_2 > 0){
                state.datakendaraan.jumlah_sumbu = "2";

                if(state.datakendaraan.a === null || state.datakendaraan.a == "" || state.datakendaraan.a == "0"){
                    state.datakendaraan.a = state.datakendaraan.jaraksumbu1_2;
                }
            }
        }
    },
    ASSIGN_FORMNOUJI(state, payload) {
        state.datakendaraan = {
            uuid:payload.uuid,
            nouji: payload.nouji,
            nama: payload.nama,
            alamat: payload.alamat,
            kelurahan:payload.kelurahan,
            kecamatan:payload.kecamatan,
            kota:payload.kota,
            noidentitaspemilik: payload.noidentitaspemilik,
            noregistrasikendaraan: payload.noregistrasikendaraan,
            tgl_registrasikendaraan:payload.tgl_registrasikendaraan,
            merek: payload.merek,
            tipe: payload.tipe,
            varian: payload.varian,
            norangka: payload.norangka,
            nomesin: payload.nomesin,
            thpembuatan: payload.thpembuatan,
            bahanbakar: payload.bahanbakar,
            isisilinder: payload.isisilinder,
            dayamotorpenggerak: payload.dayamotorpenggerak,
            jenis: payload.jenis,
            subjenis: payload.subjenis,
            model: payload.model,
            peruntukan: payload.peruntukan.toUpperCase(),
            kodewilayah: payload.kodewilayah,
            kodewilayahasal: payload.kodewilayahasal,
            wilayah:"",
            wilayahasal:"",
            nosertifikatreg: payload.nosertifikatreg,
            tglsertifikatreg: payload.tglsertifikatreg,
            rancang : payload.rancang,
            warna: payload.warna,
            tmk: payload.tmk,
            idmerek: payload.idmerek,
            idtipe: payload.idtipe,
            idvarian: payload.idvarian,
            idbahanbakar: payload.idbahanbakar,
            idjenis: payload.idjenis,
            idsubjenis: payload.idsubjenis,
            idkodewilayah: payload.idkodewilayah,
            idkodewilayahasal: payload.idkodewilayahasal,
            jbb: payload.jbb,
            jbkb: payload.jbkb,
            jbi: payload.jbi,
            jbki: payload.jbki,
            mst: payload.mst,
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
            jumlah_sumbu: payload.jumlah_sumbu,
            jaraksumbu1_2: payload.jaraksumbu1_2,
            jaraksumbu2_3: payload.jaraksumbu2_3,
            jaraksumbu3_4: payload.jaraksumbu3_4,
            jaraksumbu4_5: payload.jaraksumbu4_5,
            jaraksumbu5_6: payload.jaraksumbu5_6,
            jaraksumbu6_7: payload.jaraksumbu6_7,
            jaraksumbu7_8: payload.jaraksumbu7_8,
            jaraksumbu8_9: payload.jaraksumbu8_9,
            jaraksumbu9_10: payload.jaraksumbu9_10,
            jaraksumbu10_11: payload.jaraksumbu10_11,
            jaraksumbu11_12: payload.jaraksumbu11_12,
            q: payload.q,
            p: payload.p,
            r: payload.r,
            a: payload.a,
            b: payload.b,
            dayaangkutorang: payload.dayaangkutorang,
            dayaangkutbarang: payload.dayaangkutbarang,
            kelasjalanterendah: payload.kelasjalanterendah,
            idkelasjalanterendah: payload.idkelasjalanterendah,
            beratsumbu1:payload.beratsumbu1,
            beratsumbu2:payload.beratsumbu2,
            beratsumbu3:payload.beratsumbu3,
            beratsumbu4:payload.beratsumbu4,
            beratsumbu5:payload.beratsumbu5,
            beratsumbu6:payload.beratsumbu6,
            beratsumbu7:payload.beratsumbu7,
            beratsumbu8:payload.beratsumbu8,
            beratsumbu9:payload.beratsumbu9,
            beratsumbu10:payload.beratsumbu10,
            beratsumbu11:payload.beratsumbu11,
            beratsumbu12:payload.beratsumbu12,
            beratkosong:payload.beratkosong,
            catatanrubahbentuk:payload.catatanrubahbentuk,
            bahan:payload.bahan,
        };  
            if(state.datakendaraan.panjangbakatautangki == 0){
                state.datakendaraan.panjangbakatautangki = payload.panjangbak;
            }
            if(state.datakendaraan.lebarbakatautangki == 0){
                state.datakendaraan.lebarbakatautangki = payload.lebarbak;
            }
            if(state.datakendaraan.tinggibakatautangki == 0){
                state.datakendaraan.tinggibakatautangki = payload.tinggibak;
            }
            if(payload.kodewilayah !== null && payload.kodewilayah  !== undefined && payload.kodewilayah  !== ""){
                var wilayah = state.kodewilayahs.find(function(item) {
                    return item.area_code === payload.kodewilayah;
                });
                if (wilayah) {
                    state.datakendaraan.wilayah= wilayah.area_name;
                    state.datakendaraan.kodewilayah= wilayah.area_code;
                    state.datakendaraan.idkodewilayah= wilayah.area_id;
                }
            }
            if(payload.kodewilayahasal !== null && payload.kodewilayahasal  !== undefined && payload.kodewilayahasal  !== ""){
                var wilayah = state.kodewilayahs.find(function(item) {
                    return item.area_code === payload.kodewilayahasal;
                });
                if (wilayah) {
                    state.datakendaraan.wilayahasal= wilayah.area_name;
                    state.datakendaraan.kodewilayahasal= wilayah.area_code;
                    state.datakendaraan.idkodewilayahasal= wilayah.area_id;
                }
            }
            if(payload.merek !== null && payload.merek  !== undefined && payload.merek  !== ""){
                var data = state.mereks.find(function(item) {
                    return (item.vehicle_brand_name).toUpperCase() === (payload.merek).toUpperCase();
                });
    
                if(data) {
                    state.datakendaraan.merek= data.vehicle_brand_name;
                    state.datakendaraan.idmerek= data.vehicle_brand_id;
                }else{
                    state.datakendaraan.mereklama = payload.merek;
                    state.datakendaraan.merek= "";
                    state.datakendaraan.idmerek= "";
                }
            }
            if(payload.tipe !== null && payload.tipe  !== undefined && payload.tipe  !== ""){
                var data = state.tipes.find(function(item) {
                    return (item.vehicle_varian_type_name).toUpperCase() === (payload.tipe).toUpperCase();
                });
                if (data) {
                    state.datakendaraan.tipe= data.vehicle_varian_type_name;
                    state.datakendaraan.idtipe= data.vehicle_varian_type_id;
                    const hasilFilter = state.tipes.filter(f => [state.datakendaraan.idmerek].includes(f.vehicle_brand_id));
                    state.tipes = hasilFilter;
                }else{
                    state.datakendaraan.tipelama= payload.tipe;
                    state.datakendaraan.tipe= "";
                    state.datakendaraan.idtipe= "";
                }
            }
            if(payload.idvarian !== null && payload.idvarian  !== undefined && payload.idvarian  !== ""){
                const hasilFilter = state.varians.filter(f => [state.pendaftaran.idtipe].includes(f.vehicle_varian_type_id));
                state.varians = hasilFilter;
            }
            if(payload.jenis !== null && payload.jenis  !== undefined && payload.jenis  !== ""){
                var data = state.jenis.find(function(item) {
                    return (item.vehicle_type_name).toUpperCase() === (payload.jenis).toUpperCase();
                });
                if (data) {
                    state.datakendaraan.jenis= data.vehicle_type_name;
                    state.datakendaraan.idtipe= data.vehicle_type_id;
                    const hasilFilter = state.subjenis.filter(f => [state.datakendaraan.idtipe].includes(f.vehicle_sub_type_id));
                    state.subjenis = hasilFilter;
                }else{
                    state.datakendaraan.jenislama= payload.jenis;
                    state.datakendaraan.jenis= "";
                    state.datakendaraan.idjenis= "";
                }
            }
            if(payload.bahanbakar !== null && payload.bahanbakar  !== undefined && payload.bahanbakar  !== ""){
                var data = state.fuels.find(function(item) {
                    return (item.fuel_name).toUpperCase() === (payload.bahanbakar).toUpperCase();
                });
                if (data) {
                    state.datakendaraan.bahanbakar= data.fuel_name;
                    state.datakendaraan.idbahanbakar= data.fuel_id;
                }else{
                    state.datakendaraan.bahanbakar= "";
                    state.datakendaraan.idbahanbakar= "";
                }
            }
            if(payload.kelasjalanterendah !== null && payload.kelasjalanterendah  !== undefined && payload.kelasjalanterendah  !== ""){
                var kelasName = payload.kelasjalanterendah;
                if (kelasName.includes("KELAS")) {
                } else {
                    if (kelasName.includes("III")) {
                        kelasName = "KELAS III";
                    }else if(kelasName.includes("II")){
                        kelasName = "KELAS II";
                    }else if(kelasName.includes("I")){
                        kelasName = "KELAS I";
                    }
                }
                var data = state.kelasjalans.find(function(item) {
                    return (item.kelasjalan_name).toUpperCase() === (kelasName).toUpperCase();
                });
                if (data) {
                    state.datakendaraan.kelasjalanterendah= data.kelasjalan_name;
                    state.datakendaraan.idkelasjalan= data.kelasjalan_id;
                }else{
                    state.datakendaraan.kelasjalanterendah= "";
                    state.datakendaraan.idkelasjalan= "";
                }
            }
    
            if(payload.jumlah_sumbu === null || payload.jumlah_sumbu == "" || payload.jumlah_sumbu == 0 || payload.jumlah_sumbu == "0")
            {
                if(state.datakendaraan.jaraksumbu11_12 > 0){
                    state.datakendaraan.jumlah_sumbu = "12";
                }else if(state.datakendaraan.jaraksumbu10_11 > 0){
                    state.datakendaraan.jumlah_sumbu = "11";
                }else if(state.datakendaraan.jaraksumbu9_10 > 0){
                    state.datakendaraan.jumlah_sumbu = "10";
                }else if(state.datakendaraan.jaraksumbu8_9 > 0){
                    state.datakendaraan.jumlah_sumbu = "9";
                }else if(state.datakendaraan.jaraksumbu7_8 > 0){
                    state.datakendaraan.jumlah_sumbu = "8";
                }else if(state.datakendaraan.jaraksumbu6_7 > 0){
                    state.datakendaraan.jumlah_sumbu = "7";
                }else if(state.datakendaraan.jaraksumbu5_6 > 0){
                    state.datakendaraan.jumlah_sumbu = "6";
                }else if(state.datakendaraan.jaraksumbu4_5 > 0){
                    state.datakendaraan.jumlah_sumbu = "5";
                }else if(state.datakendaraan.jaraksumbu3_4 > 0){
                    state.datakendaraan.jumlah_sumbu = "4";
                }else if(state.datakendaraan.jaraksumbu2_3 > 0){
                    state.datakendaraan.jumlah_sumbu = "3";
                }else if(state.datakendaraan.jaraksumbu1_2 > 0){
                    state.datakendaraan.jumlah_sumbu = "2";
    
                    if(state.datakendaraan.a === null || state.datakendaraan.a == "" || state.datakendaraan.a == "0"){
                        state.datakendaraan.a = state.datakendaraan.jaraksumbu1_2;
                    }
                }
            }
    },
    ASSIGN_FORMDATAVTA(state, payload){
        state.datavta = {
            nosertifikatreg:payload.srut_no,
            noskdrijen:payload.sut_no,
            merek:payload.merk,
            tipe:payload.kendaraan_tipe,
            jenis:payload.jenis_kendaraan,
            peruntukan:payload.peruntukan.toUpperCase(),
            norangka:payload.nomor_chasis,
            nomesin:payload.nomor_mesin,
            namaperusahaan:payload.perusahaan_nama,
            alamatperusahaan:payload.perusahaan_alamat,
            penanggungjawab:payload.perusahaan_penanggungjawab,
        }
    },
    CLEAR_FORM(state) {
        state.datakendaraan = {
            uuid:"",
            nouji:"",
            nama:"",
            alamat:"",
            kelurahan:"",
            kecamatan:"",
            kota:"",
            nosuratkehilangan:"",
            noidentitaspemilik:"",
            noregistrasikendaraan:"",
            tgl_registrasikendaraan:"",
            merek:"",
            tipe:"",
            tipelama:"",
            varian:"",
            norangka:"",
            nomesin:"",
            thpembuatan:"",
            bahanbakar:"",
            isisilinder:"0",
            dayamotorpenggerak:"0",
            jenis:"",
            subjenis:"",
            model:"",
            peruntukan:"",
            kodewilayah:"",
            wilayah:"",
            kodewilayahasal:"",
            wilayahasal:"",
            nosertifikatreg:"",
            tglsertifikatreg: "",
            rancang: "",
            tempat: "",
            masaberlakuuji: "",
            penguji:"",
            nrp:"",
            nokendaraanbaru: "",
            namapemilikbaru: "",
            alamatpemilikbaru: "",
            warna: "",
            tmk: "",
            idmerek:"",
            idtipe:"",
            idvarian:"",
            idbahanbakar:"",
            idjenis:"",
            idsubjenis:"",
            idkodewilayah:"",
            idkodewilayahasal:"",
            pendaftaran_id:"",
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
            jumlah_sumbu:"2",
            jaraksumbu1_2:"0",
            jaraksumbu2_3:"0",
            jaraksumbu3_4:"0",
            jaraksumbu4_5:"0",
            jaraksumbu5_6:"0",
            jaraksumbu6_7:"0",
            jaraksumbu7_8:"0",
            jaraksumbu8_9:"0",
            jaraksumbu9_10:"0",
            jaraksumbu10_11:"0",
            jaraksumbu11_12:"0",
            q:"0",
            p:"0",
            r:"0",
            a:"0",
            b:"0",
            dayaangkutorang:"0",
            dayaangkutbarang:"0",
            kelasjalanterendah:"",
            idkelasjalan:"",
            beratsumbu1:"0",
            beratsumbu2:"0",
            beratsumbu3:"0",
            beratsumbu4:"0",
            beratsumbu5:"0",
            beratsumbu6:"0",
            beratsumbu7:"0",
            beratsumbu8:"0",
            beratsumbu9:"0",
            beratsumbu10:"0",
            beratsumbu11:"0",
            beratsumbu12:"0",
            beratkosong:"0",
            catatanrubahbentuk:"",
            bahan:"",
        };
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },
};

export const actions = {
    getDatakendaraans({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            DatakendaraanService.getDatakendaraans(state.page,state.status, search)
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
    getPendaftaranDetail({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            DatakendaraanService.getPendaftaranDetail(search)
                .then(response => {
                    if(response.data.result === null){
                        commit("ASSING_DATADETAIL", response.data.result);
                    }else{
                        commit("ASSING_DATADETAIL", response.data.result);
                    }
                    resolve(response.data);
                })
                .catch(error => {
                });
        });
    },
    getRiwayatUji({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return new Promise((resolve, reject) => {
            DatakendaraanService.getRiwayatUji(search)
                .then(response => {
                    commit("ASSING_DATAUJI", response.data.result);
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
    submitDatakendaraan({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            DatakendaraanService.postDatakendaraan(state.datakendaraan)
                .then(response => {
                    // commit("ASSIGN_FORM", response.data.result);
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
    editDatakendaraan({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            DatakendaraanService.getDatakendaraan(payload)
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
                    else if (error.response.status == 422) {
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
    updateDatakendaraan({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            DatakendaraanService.updateDatakendaraan(id, state.datakendaraan)
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
    removeDatakendaraan({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            DatakendaraanService.deleteDatakendaraan(id)
                .then(response => {
                    dispatch("getDatakendaraans").then(() => resolve());
                })
                .catch(error => {
                });
        });
    },
    getKotas({ commit, state }) {
        return DatakendaraanService.getKotas().then(response => {
            commit("DATA_KOTA", response.data.result);
        });
    },
    getKecamatans({ commit, state }, payload) {
        return DatakendaraanService.getKecamatans(payload).then(response => {
            commit("DATA_KECAMATAN", response.data.result);
        });
    },
    getKelurahans({ commit, state }, payload) {
        return DatakendaraanService.getKelurahans(state.datakendaraan.kota,payload).then(response => {
            commit("DATA_KELURAHAN", response.data.result);
        });
    },
    getTotalDatakendaraan({ commit, state }) {
        return DatakendaraanService.getTotalDatakendaraan().then(response => {
            commit("DATA_TOTALDATAKENDARAAN", response.data.result);
            // console.log(response.data.data)
        });
    },
    async getKodewilayahs({ commit, state }) {
        return await DatakendaraanService.getKodewilayahs().then(response => {
            commit("DATA_KODEWILAYAH", response.data.result.data);
            // console.log(response.data.data)
        });
    },
    async getMereks({ commit, state }) {
        return await DatakendaraanService.getMereks().then(response => {
            commit("DATA_MEREK", response.data.result.data);
        });
    },
    async getTipes({ commit, state }) {
        return await DatakendaraanService.getTipes(state.datakendaraan.idmerek).then(response => {
            commit("DATA_TIPE", response.data.result.data);
        });
    },
    async getVarians({ commit, state }) {
        return await DatakendaraanService.getVarians(state.datakendaraan.idtipe).then(response => {
            commit("DATA_VARIAN", response.data.result.data);
        });
    },
    async getJenis({ commit, state }) {
        return await DatakendaraanService.getJenis().then(response => {
            commit("DATA_JENIS", response.data.result.data);
        });
    },
    async getSubJenis({ commit, state }) {
        return await DatakendaraanService.getSubJenis(state.datakendaraan.idjenis).then(response => {
            commit("DATA_SUBJENIS", response.data.result.data);
        });
    },
    getJeniskendaraan({ commit, state }) {
        return DatakendaraanService.getJeniskendaraan().then(response => {
            commit("DATA_JENISKENDARAAN", response.data.result);
        });
    },
    async getKodepenerbitans({ commit, state }) {
        return await DatakendaraanService.getVarians().then(response => {
            commit("DATA_KODEPENERBITAN", response.data.result);
        });
    },
    async getFuels({ commit, state }) {
        return await DatakendaraanService.getFuels().then(response => {
            commit("DATA_FUELS", response.data.result.data);
        });
    },
    async getKelasJalans({ commit, state }) {
        return await DatakendaraanService.getKelasJalans().then(response => {
            commit("DATA_KELASJALAN", response.data.result.data);
        });
    },
    async getVTA({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return await DatakendaraanService.getVTA(search).then(response => {
            commit("ASSIGN_RESPONVTA", response.data.result);
            if(response.data.result.error === false){
                commit("ASSIGN_FORMDATAVTA", response.data.result.data);
            }
        });
    },
};
export const getters = {
    getEventById: state => id => {
        return state.datakendaraans.find(datakendaraan => datakendaraan.id === id);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
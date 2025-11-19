import PendaftaranService from "../pendaftaran.service.js";
import Swal from "sweetalert2";
export const namespaced = true;

export const state = {
    pendaftarans: [],
    kodewilayahs: [],
    kelurahans  : [],
    kecamatans  : [],
    kotas       : [],
    kodepenerbitans:[],
    mereks: [],
    tipes: [],
    varians:[],
    jenis: [],
    subjenis:[],
    fuels:[],
    kelasjalans:[],
    jeniskendaraan: [],
    jenismodel: [],
    perubahans: [],
    filter: {
        tgl: ""
    },
    pendaftaran: {
        uuid:"",
        noantrian:"",
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
        masaberlakuuji: "",
        penguji:"",
        nrp:"",
        nokendaraanbaru: "",
        namapemilikbaru: "",
        alamatpemilikbaru: "",
        warna: "",
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
        idkelasjalanterendah:"",
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
        tglpendaftaran: "",
        tglhbsuji:"",
        ketujiterakhir: "",
        tglterakhiruji:"",
        kodepenerbitans_id: "",
        jenispendaftaran: "",
        namapemohon:"",
        alamatpemohon:"",
        notelp:"",
        nosurat:"",
        nosuratdari:"",
        kepada:"Kepala Dinas Perhubungan",
        tujuan:"",
        alasan:[],
        tglpelaksanaan:"",
        masaberlakuuji:"",
        penguji:"",
        nrp:"",
        nokendaraanbaru: "",
        namapemilikbaru: "",
        alamatpemilikbaru: "",
    },
    datalama: {
        uuid:"",
        noantrian:"",
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
        masaberlakuuji: "",
        penguji:"",
        nrp:"",
        nokendaraanbaru: "",
        namapemilikbaru: "",
        alamatpemilikbaru: "",
        warna: "",
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
        idkelasjalanterendah:"",
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
    uuid:"",
    carinouji:"",
    carinokendaraan:"",
    carinorangka:"",
    carikota:"",
    notif : {
        status:"",
        message:"",
    },
    responeBlue:{
        status:"",
        code:"",
        message:"",
        data:[],
    },
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
    DATA_JENISMODEL(state, jenismodel){
        state.jenismodel = jenismodel;
    },
    ASSING_DATA(state, pendaftarans) {
        state.pendaftarans = pendaftarans;
    },
    ASSING_UPDATE(state, payload) {
        state.perubahans = payload;
        state.perubahans.forEach(item => {
            state.pendaftaran[item.field] = item.lama;
        });
    },
    ASSING_DATAID(state, pendaftaran_id){
        state.pendaftaran.pendaftaran_id= pendaftaran_id;
        state.pendaftaran.pendaftaran_id= pendaftaran_id;
    },
    ASSING_DATAIDPENDAFTRAN(state, pendaftaran_id){
        state.transaksi.pendaftaran_id= pendaftaran_id;
    },
    SET_UUID(state, payload) {
        state.uuid = payload;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_NOTIF(state, payload) {
        state.notif = {
            success: payload.success,
            message : payload.message,
        };
    },
    SET_KOTA(state, payload) {
        state.kota = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    ASSIGN_RESPONBLUE(state, payload){
        state.responeBlue = {
            status: payload.status,
            code: payload.code,
            message: payload.message,
            data: payload.data,
        }
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
    ASSIGN_FORM(state, payload) {
        state.pendaftaran = {
            uuid:payload.uuid,
            noantrian:payload.noantrian,
            tglpendaftaran: payload.tglpendaftaran,
            kodepenerbitans_id: payload.kodepenerbitans_id,
            jenispendaftaran:payload.jenispendaftaran,
            nosuratkehilangan:payload.nosuratkehilangan,
            namapemohon: payload.namapemohon,
            alamatpemohon: payload.alamatpemohon,
            notelp: payload.notelp,
            nosurat:payload.nosurat,
            nosuratdari:payload.nosuratdari,
            kepada:payload.kepada,
            tujuan:payload.tujuan,
            alasan:[],
            tglpelaksanaan:payload.tglpelaksanaan,
            masaberlakuuji:payload.masaberlakuuji,
            penguji:payload.penguji,
            nrp:payload.nrp,
            nokendaraanbaru: payload.nokendaraanbaru,
            namapemilikbaru: payload.namapemilikbaru,
            alamatpemilikbaru: payload.alamatpemilikbaru,
            tglhbsuji: payload.tglbayar,
            tglterakhiruji: payload.tgluji,
            ketujiterakhir: payload.jenispendaftaran,
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
            panjangbakatautangki: payload.panjangbakatautangki ?? 0,
            lebarbakatautangki: payload.lebarbakatautangki ?? 0,
            tinggibakatautangki: payload.tinggibakatautangki ?? 0,
            julurdepan: payload.julurdepan,
            julurbelakang: payload.julurbelakang,
            jumlah_sumbu: payload.jumlah_sumbu,
            jaraksumbu1_2: payload.jaraksumbu1_2,
            jaraksumbu2_3: payload.jaraksumbu2_3 ?? 0,
            jaraksumbu3_4: payload.jaraksumbu3_4 ?? 0,
            jaraksumbu4_5: payload.jaraksumbu4_5 ?? 0,
            jaraksumbu5_6: payload.jaraksumbu5_6 ?? 0,
            jaraksumbu6_7: payload.jaraksumbu6_7 ?? 0,
            jaraksumbu7_8: payload.jaraksumbu7_8 ?? 0,
            jaraksumbu8_9: payload.jaraksumbu8_9 ?? 0,
            jaraksumbu9_10: payload.jaraksumbu9_10 ?? 0,
            jaraksumbu10_11: payload.jaraksumbu10_11 ?? 0,
            jaraksumbu11_12: payload.jaraksumbu11_12 ?? 0,
            q: payload.q ?? 0,
            p: payload.p ?? 0,
            r: payload.r ?? 0,
            a: payload.a ?? 0,
            b: payload.b ?? 0,
            dayaangkutorang: payload.dayaangkutorang,
            dayaangkutbarang: payload.dayaangkutbarang,
            kelasjalanterendah: payload.kelasjalanterendah,
            idkelasjalanterendah: payload.idkelasjalanterendah,
            beratsumbu1:payload.beratsumbu1 ?? 0,
            beratsumbu2:payload.beratsumbu2 ?? 0,
            beratsumbu3:payload.beratsumbu3 ?? 0,
            beratsumbu4:payload.beratsumbu4 ?? 0,
            beratsumbu5:payload.beratsumbu5 ?? 0,
            beratsumbu6:payload.beratsumbu6 ?? 0,
            beratsumbu7:payload.beratsumbu7 ?? 0,
            beratsumbu8:payload.beratsumbu8 ?? 0,
            beratsumbu9:payload.beratsumbu9 ?? 0,
            beratsumbu10:payload.beratsumbu10 ?? 0,
            beratsumbu11:payload.beratsumbu11 ?? 0,
            beratsumbu12:payload.beratsumbu12 ?? 0,
            beratkosong:payload.beratkosong ?? 0,
            catatanrubahbentuk:payload.catatanrubahbentuk,
            bahan:payload.bahan,
        };
            if(payload.alasan !== null && payload.alasan  !== undefined && payload.alasan  !== ""){
                const alasanString = payload.alasan;
                state.pendaftaran.alasan = alasanString
                    ? alasanString.split(",").map(a => a.trim()) 
                    : []; 
            }

        
        // setTimeout(() => {
            if(payload.kodewilayah !== null && payload.kodewilayah  !== undefined && payload.kodewilayah  !== ""){
                var wilayah = state.kodewilayahs.find(function(item) {
                    return item.area_code === payload.kodewilayah;
                });
                if (wilayah) {
                    state.pendaftaran.wilayah= wilayah.area_name;
                    state.pendaftaran.kodewilayah= wilayah.area_code;
                    state.pendaftaran.idkodewilayah= wilayah.area_id;
                }
            }else{
                if(payload.kodepenerbitans_id == 1 || payload.kodepenerbitans_id == 2){
                    var wilayah = state.kodewilayahs.find(function(item) {
                        return item.area_code === "DCRBN";
                    });
                    if (wilayah) {
                    console.log(wilayah.area_code);
                        state.pendaftaran.wilayah= wilayah.area_name;
                        state.pendaftaran.kodewilayah= wilayah.area_code;
                        state.pendaftaran.idkodewilayah= wilayah.area_id;
                        state.pendaftaran.wilayahasal= wilayah.area_name;
                        state.pendaftaran.kodewilayahasal= wilayah.area_code;
                        state.pendaftaran.idkodewilayahasal= wilayah.area_id;
                    }
                }else if(payload.kodepenerbitans_id == 5 || payload.kodepenerbitans_id == 6){
                    var wilayah = state.kodewilayahs.find(function(item) {
                        return item.area_code === "DCRBN";
                    });
                    if (wilayah) {
                        state.pendaftaran.wilayah= wilayah.area_name;
                        state.pendaftaran.kodewilayah= wilayah.area_code;
                        state.pendaftaran.idkodewilayah= wilayah.area_id;
                    }
                }
            }

            if(payload.kodewilayahasal !== null && payload.kodewilayahasal  !== undefined && payload.kodewilayahasal  !== ""){
                var wilayah = state.kodewilayahs.find(function(item) {
                    return item.area_code === payload.kodewilayahasal;
                });
                if (wilayah) {
                    state.pendaftaran.wilayahasal= wilayah.area_name;
                    state.pendaftaran.kodewilayahasal= wilayah.area_code;
                    state.pendaftaran.idkodewilayahasal= wilayah.area_id;
                }
            }
            
            if(payload.merek !== null && payload.merek  !== undefined && payload.merek  !== ""){
                var data = state.mereks.find(function(item) {
                    return (item.vehicle_brand_name).toUpperCase() === (payload.merek).toUpperCase();
                });

                if(data) {
                    state.pendaftaran.merek= data.vehicle_brand_name;
                    state.pendaftaran.idmerek= data.vehicle_brand_id;
                    
                    const hasilFilter = state.tipes.filter(f => [state.pendaftaran.idmerek].includes(f.vehicle_brand_id));
                    state.tipes = hasilFilter;
                }else{
                    state.pendaftaran.mereklama = payload.merek;
                    state.pendaftaran.merek= "";
                    state.pendaftaran.idmerek= "";
                }
            }
            if(payload.tipe !== null && payload.tipe  !== undefined && payload.tipe  !== ""){
                var data = state.tipes.find(function(item) {
                    return (item.vehicle_varian_type_name).toUpperCase() === (payload.tipe).toUpperCase();
                });
                if (data) {
                    state.pendaftaran.tipe= data.vehicle_varian_type_name;
                    state.pendaftaran.idtipe= data.vehicle_varian_type_id;
                    const hasilFilter = state.varians.filter(f => [state.pendaftaran.idtipe].includes(f.vehicle_varian_type_id));
                    state.varians = hasilFilter;
                }else{
                    state.pendaftaran.tipelama = payload.tipe;
                    state.pendaftaran.tipe= "";
                    state.pendaftaran.idtipe= "";
                }
            }
            if(payload.jenis !== null && payload.jenis  !== undefined && payload.jenis  !== ""){
                var data = state.jenis.find(function(item) {
                    return (item.vehicle_type_name).toUpperCase() === (payload.jenis).toUpperCase();
                });
                if (data) {
                    state.pendaftaran.jenis= data.vehicle_type_name;
                    state.pendaftaran.idtipe= data.vehicle_type_id;
                    const hasilFilter = state.subjenis.filter(f => [state.pendaftaran.idtipe].includes(f.vehicle_sub_type_id));
                    state.subjenis = hasilFilter;
                }else{
                    state.pendaftaran.jenislama= payload.jenis;
                    state.pendaftaran.jenis= "";
                    state.pendaftaran.idjenis= "";
                }
            }
            if(payload.bahanbakar !== null && payload.bahanbakar  !== undefined && payload.bahanbakar  !== ""){
                var data = state.fuels.find(function(item) {
                    return (item.fuel_name).toUpperCase() === (payload.bahanbakar).toUpperCase();
                });
                if (data) {
                    state.pendaftaran.bahanbakar= data.fuel_name;
                    state.pendaftaran.idbahanbakar= data.fuel_id;
                }else{
                    state.pendaftaran.bahanbakar= "";
                    state.pendaftaran.idbahanbakar= "";
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
                    state.pendaftaran.kelasjalanterendah= data.kelasjalan_name;
                    state.pendaftaran.idkelasjalanterendah= data.kelasjalan_id;
                }else{
                    state.pendaftaran.kelasjalanterendah= "";
                    state.pendaftaran.idkelasjalanterendah= "";
                }
            }
            
            if(payload.jumlah_sumbu === null || payload.jumlah_sumbu == "" || payload.jumlah_sumbu == 0 || payload.jumlah_sumbu == "0")
            {
                if(state.pendaftaran.jaraksumbu11_12 > 0){
                    state.pendaftaran.jumlah_sumbu = "12";
                }else if(state.pendaftaran.jaraksumbu10_11 > 0){
                    state.pendaftaran.jumlah_sumbu = "11";
                }else if(state.pendaftaran.jaraksumbu9_10 > 0){
                    state.pendaftaran.jumlah_sumbu = "10";
                }else if(state.pendaftaran.jaraksumbu8_9 > 0){
                    state.pendaftaran.jumlah_sumbu = "9";
                }else if(state.pendaftaran.jaraksumbu7_8 > 0){
                    state.pendaftaran.jumlah_sumbu = "8";
                }else if(state.pendaftaran.jaraksumbu6_7 > 0){
                    state.pendaftaran.jumlah_sumbu = "7";
                }else if(state.pendaftaran.jaraksumbu5_6 > 0){
                    state.pendaftaran.jumlah_sumbu = "6";
                }else if(state.pendaftaran.jaraksumbu4_5 > 0){
                    state.pendaftaran.jumlah_sumbu = "5";
                }else if(state.pendaftaran.jaraksumbu3_4 > 0){
                    state.pendaftaran.jumlah_sumbu = "4";
                }else if(state.pendaftaran.jaraksumbu2_3 > 0){
                    state.pendaftaran.jumlah_sumbu = "3";
                }else if(state.pendaftaran.jaraksumbu1_2 > 0){
                    state.pendaftaran.jumlah_sumbu = "2";
                    if(state.pendaftaran.a === null || state.pendaftaran.a == "" || state.pendaftaran.a == "0"){
                        state.pendaftaran.a = state.pendaftaran.jaraksumbu1_2;
                    }
                }
            }
            state.datalama = {
                uuid:state.pendaftaran.uuid,
                nouji: state.pendaftaran.nouji,
                nama: state.pendaftaran.nama,
                alamat: state.pendaftaran.alamat,
                kelurahan:state.pendaftaran.kelurahan,
                kecamatan:state.pendaftaran.kecamatan,
                kota:state.pendaftaran.kota,
                noidentitaspemilik: state.pendaftaran.noidentitaspemilik,
                noregistrasikendaraan: state.pendaftaran.noregistrasikendaraan,
                tgl_registrasikendaraan:state.pendaftaran.tgl_registrasikendaraan,
                merek: state.pendaftaran.merek,
                tipe: state.pendaftaran.tipe,
                varian: state.pendaftaran.varian,
                norangka: state.pendaftaran.norangka,
                nomesin: state.pendaftaran.nomesin,
                thpembuatan: state.pendaftaran.thpembuatan,
                bahanbakar: state.pendaftaran.bahanbakar,
                isisilinder: state.pendaftaran.isisilinder,
                dayamotorpenggerak: state.pendaftaran.dayamotorpenggerak,
                jenis: state.pendaftaran.jenis,
                subjenis: state.pendaftaran.subjenis,
                model: state.pendaftaran.model,
                peruntukan: state.pendaftaran.peruntukan.toUpperCase(),
                kodewilayah: state.pendaftaran.kodewilayah,
                kodewilayahasal: state.pendaftaran.kodewilayahasal,
                nosertifikatreg: state.pendaftaran.nosertifikatreg,
                tglsertifikatreg: state.pendaftaran.tglsertifikatreg,
                rancang : state.pendaftaran.rancang,
                warna: state.pendaftaran.warna,
                idmerek: state.pendaftaran.idmerek,
                idtipe: state.pendaftaran.idtipe,
                idvarian: state.pendaftaran.idvarian,
                idbahanbakar: state.pendaftaran.idbahanbakar,
                idjenis: state.pendaftaran.idjenis,
                idsubjenis: state.pendaftaran.idsubjenis,
                idkodewilayah: state.pendaftaran.idkodewilayah,
                idkodewilayahasal: state.pendaftaran.idkodewilayahasal,
                jbb: state.pendaftaran.jbb,
                jbkb: state.pendaftaran.jbkb,
                jbi: state.pendaftaran.jbi,
                jbki: state.pendaftaran.jbki,
                mst: state.pendaftaran.mst,
                konfigurasisumburoda: state.pendaftaran.konfigurasisumburoda,
                ukuranban: state.pendaftaran.ukuranban,
                panjangkendaraan: state.pendaftaran.panjangkendaraan,
                lebarkendaraan: state.pendaftaran.lebarkendaraan,
                tinggikendaraan: state.pendaftaran.tinggikendaraan,
                panjangbakatautangki: state.pendaftaran.panjangbakatautangki ?? 0,
                lebarbakatautangki: state.pendaftaran.lebarbakatautangki ?? 0,
                tinggibakatautangki: state.pendaftaran.tinggibakatautangki ?? 0,
                julurdepan: state.pendaftaran.julurdepan,
                julurbelakang: state.pendaftaran.julurbelakang,
                jumlah_sumbu: state.pendaftaran.jumlah_sumbu,
                jaraksumbu1_2: state.pendaftaran.jaraksumbu1_2,
                jaraksumbu2_3: state.pendaftaran.jaraksumbu2_3 ?? 0,
                jaraksumbu3_4: state.pendaftaran.jaraksumbu3_4 ?? 0,
                jaraksumbu4_5: state.pendaftaran.jaraksumbu4_5 ?? 0,
                jaraksumbu5_6: state.pendaftaran.jaraksumbu5_6 ?? 0,
                jaraksumbu6_7: state.pendaftaran.jaraksumbu6_7 ?? 0,
                jaraksumbu7_8: state.pendaftaran.jaraksumbu7_8 ?? 0,
                jaraksumbu8_9: state.pendaftaran.jaraksumbu8_9 ?? 0,
                jaraksumbu9_10: state.pendaftaran.jaraksumbu9_10 ?? 0,
                jaraksumbu10_11: state.pendaftaran.jaraksumbu10_11 ?? 0,
                jaraksumbu11_12: state.pendaftaran.jaraksumbu11_12 ?? 0,
                q: state.pendaftaran.q ?? 0,
                p: state.pendaftaran.p ?? 0,
                r: state.pendaftaran.r ?? 0,
                a: state.pendaftaran.a ?? 0,
                b: state.pendaftaran.b ?? 0,
                dayaangkutorang: state.pendaftaran.dayaangkutorang,
                dayaangkutbarang: state.pendaftaran.dayaangkutbarang,
                kelasjalanterendah: state.pendaftaran.kelasjalanterendah,
                idkelasjalanterendah: state.pendaftaran.idkelasjalanterendah,
                beratsumbu1:state.pendaftaran.beratsumbu1 ?? 0,
                beratsumbu2:state.pendaftaran.beratsumbu2 ?? 0,
                beratsumbu3:state.pendaftaran.beratsumbu3 ?? 0,
                beratsumbu4:state.pendaftaran.beratsumbu4 ?? 0,
                beratsumbu5:state.pendaftaran.beratsumbu5 ?? 0,
                beratsumbu6:state.pendaftaran.beratsumbu6 ?? 0,
                beratsumbu7:state.pendaftaran.beratsumbu7 ?? 0,
                beratsumbu8:state.pendaftaran.beratsumbu8 ?? 0,
                beratsumbu9:state.pendaftaran.beratsumbu9 ?? 0,
                beratsumbu10:state.pendaftaran.beratsumbu10 ?? 0,
                beratsumbu11:state.pendaftaran.beratsumbu11 ?? 0,
                beratsumbu12:state.pendaftaran.beratsumbu12 ?? 0,
                beratkosong:state.pendaftaran.beratkosong ?? 0,
                catatanrubahbentuk:state.pendaftaran.catatanrubahbentuk,
                bahan:state.pendaftaran.bahan,
        };
        // }, 500);
    },
    ASSIGN_FORMNOUJI(state, payload) {
        state.pendaftaran = {
            noantrian:state.pendaftaran.noantrian,
            tglpendaftaran: state.pendaftaran.tglpendaftaran,
            kodepenerbitans_id: state.pendaftaran.kodepenerbitans_id,
            nosurat: state.pendaftaran.nosurat,
            nosuratdari: state.pendaftaran.nosuratdari,
            kepada:"Kepala",
            tglhbsuji: payload.tglbayar,
            tglterakhiruji: payload.tgluji,
            ketujiterakhir: payload.jenispendaftaran,
            nouji: payload.nouji,
            nama: payload.nama,
            alamat: payload.alamat,
            kelurahan:payload.kelurahan,
            kecamatan:payload.kecamatan,
            kota:payload.kota,
            noidentitaspemilik: payload.noidentitaspemilik,
            noregistrasikendaraan: payload.noregistrasikendaraan,
            tgl_registrasikendaraan: payload.tgl_registrasikendaraan,
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
            warna : payload.warna,
            tmk : payload.tmk,
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
            panjangbakatautangki: payload.panjangbakatautangki ?? 0,
            lebarbakatautangki: payload.lebarbakatautangki ?? 0,
            tinggibakatautangki: payload.tinggibakatautangki ?? 0,
            julurdepan: payload.julurdepan,
            julurbelakang: payload.julurbelakang,
            bahan: payload.bahan,
            jumlah_sumbu: payload.jumlah_sumbu,
            jaraksumbu1_2: payload.jaraksumbu1_2,
            jaraksumbu2_3: payload.jaraksumbu2_3 ?? 0,
            jaraksumbu3_4: payload.jaraksumbu3_4 ?? 0,
            jaraksumbu4_5: payload.jaraksumbu4_5 ?? 0,
            jaraksumbu5_6: payload.jaraksumbu5_6 ?? 0,
            jaraksumbu6_7: payload.jaraksumbu6_7 ?? 0,
            jaraksumbu7_8: payload.jaraksumbu7_8 ?? 0,
            jaraksumbu8_9: payload.jaraksumbu8_9 ?? 0,
            jaraksumbu9_10: payload.jaraksumbu9_10 ?? 0,
            jaraksumbu10_11: payload.jaraksumbu10_11 ?? 0,
            jaraksumbu11_12: payload.jaraksumbu11_12 ?? 0,
            q: payload.q ?? 0,
            p: payload.p ?? 0,
            r: payload.r ?? 0,
            a: payload.a ?? 0,
            b: payload.b ?? 0,
            dayaangkutorang: payload.dayaangkutorang,
            dayaangkutbarang: payload.dayaangkutbarang,
            kelasjalanterendah: payload.kelasjalanterendah,
            idkelasjalanterendah: payload.idkelasjalanterendah,
            beratsumbu1:payload.beratsumbu1 ?? 0,
            beratsumbu2:payload.beratsumbu2 ?? 0,
            beratsumbu3:payload.beratsumbu3 ?? 0,
            beratsumbu4:payload.beratsumbu4 ?? 0,
            beratsumbu5:payload.beratsumbu5 ?? 0,
            beratsumbu6:payload.beratsumbu6 ?? 0,
            beratsumbu7:payload.beratsumbu7 ?? 0,
            beratsumbu8:payload.beratsumbu8 ?? 0,
            beratsumbu9:payload.beratsumbu9 ?? 0,
            beratsumbu10:payload.beratsumbu10 ?? 0,
            beratsumbu11:payload.beratsumbu11 ?? 0,
            beratsumbu12:payload.beratsumbu12 ?? 0,
            beratkosong:payload.beratkosong ?? 0,
            catatanrubahbentuk:payload.catatanrubahbentuk,
            bahan:payload.bahan,
        };  
            if(typeof(payload.tglsertifikatreg) === 'undefined'){
                state.pendaftaran.tglsertifikatreg = null;
            }
            if(typeof(payload.nosertifikatreg) === 'undefined'|| payload.nosertifikatreg === null){
                state.pendaftaran.nosertifikatreg = 0;
            }
            if(typeof(payload.noidentitaspemilik) === 'undefined'|| payload.noidentitaspemilik === null){
                state.pendaftaran.noidentitaspemilik = 0;
            }
            if(typeof(payload.rancang) === 'undefined'|| payload.rancang === null){
                state.pendaftaran.rancang = 0;
            }
            
            
        // setTimeout(() => {
            if(payload.kodewilayah !== null && payload.kodewilayah  !== undefined && payload.kodewilayah  !== ""){
                var wilayah = state.kodewilayahs.find(function(item) {
                    return item.area_code === payload.kodewilayah;
                });
                if (wilayah) {
                    state.pendaftaran.wilayah= wilayah.area_name;
                    state.pendaftaran.kodewilayah= wilayah.area_code;
                    state.pendaftaran.idkodewilayah= wilayah.area_id;
                }
            }
            if(payload.kodewilayahasal !== null && payload.kodewilayahasal  !== undefined && payload.kodewilayahasal  !== ""){
                var wilayah = state.kodewilayahs.find(function(item) {
                    return item.area_code === payload.kodewilayahasal;
                });
                if (wilayah) {
                    state.pendaftaran.wilayahasal= wilayah.area_name;
                    state.pendaftaran.kodewilayahasal= wilayah.area_code;
                    state.pendaftaran.idkodewilayahasal= wilayah.area_id;
                }
            }
            if(payload.merek !== null && payload.merek  !== undefined && payload.merek  !== ""){
                var data = state.mereks.find(function(item) {
                    return (item.vehicle_brand_name).toUpperCase() === (payload.merek).toUpperCase();
                });
                if (data) {
                    state.pendaftaran.merek= data.vehicle_brand_name;
                    state.pendaftaran.idmerek= data.vehicle_brand_id;
                    const hasilFilter = state.tipes.filter(f => [state.pendaftaran.idmerek].includes(f.vehicle_brand_id));
                    state.tipes = hasilFilter;
                }else{
                    state.pendaftaran.mereklama= payload.merek
                    state.pendaftaran.merek= "";
                    state.pendaftaran.idmerek= "";
                }
            }
            if(payload.tipe !== null && payload.tipe  !== undefined && payload.tipe  !== ""){
                var data = state.tipes.find(function(item) {
                    return (item.vehicle_varian_type_name).toUpperCase() === (payload.tipe).toUpperCase();
                });
                if (data) {
                    state.pendaftaran.tipe= data.vehicle_varian_type_name;
                    state.pendaftaran.idtipe= data.vehicle_varian_type_id;
                    const hasilFilter = state.varians.filter(f => [state.pendaftaran.idtipe].includes(f.vehicle_varian_type_id));
                    state.varians = hasilFilter;
                }else{
                    state.pendaftaran.tipelama= payload.tipe;
                    state.pendaftaran.tipe= "";
                    state.pendaftaran.idtipe= "";
                }
            }
            if(payload.jenis !== null && payload.jenis  !== undefined && payload.jenis  !== ""){
                var data = state.jenis.find(function(item) {
                    return (item.vehicle_type_name).toUpperCase() === (payload.jenis).toUpperCase();
                });
                if (data) {
                    state.pendaftaran.jenis= data.vehicle_type_name;
                    state.pendaftaran.idtipe= data.vehicle_type_id;
                    const hasilFilter = state.subjenis.filter(f => [state.pendaftaran.idtipe].includes(f.vehicle_sub_type_id));
                    state.subjenis = hasilFilter;
                }else{
                    state.pendaftaran.jenislama= payload.jenis;
                    state.pendaftaran.jenis= "";
                    state.pendaftaran.idjenis= "";
                }
            }
            if(payload.bahanbakar !== null && payload.bahanbakar  !== undefined && payload.bahanbakar  !== ""){
                var data = state.fuels.find(function(item) {
                    return (item.fuel_name).toUpperCase() === (payload.bahanbakar).toUpperCase();
                });
                if (data) {
                    state.pendaftaran.bahanbakar= data.fuel_name;
                    state.pendaftaran.idbahanbakar= data.fuel_id;
                }else{
                    state.pendaftaran.bahanbakar= "";
                    state.pendaftaran.idbahanbakar= "";
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
                    state.pendaftaran.kelasjalanterendah= data.kelasjalan_name;
                    state.pendaftaran.idkelasjalanterendah= data.kelasjalan_id;
                }else{
                    state.pendaftaran.kelasjalanterendah= "";
                    state.pendaftaran.idkelasjalanterendah= "";
                }
            }
            
            if(payload.jumlah_sumbu === null || payload.jumlah_sumbu == "" || payload.jumlah_sumbu == 0 || payload.jumlah_sumbu == "0")
            {
                    if(state.pendaftaran.jaraksumbu11_12 > 0){
                        state.pendaftaran.jumlah_sumbu = "12";
                    }else if(state.pendaftaran.jaraksumbu10_11 > 0){
                        state.pendaftaran.jumlah_sumbu = "11";
                    }else if(state.pendaftaran.jaraksumbu9_10 > 0){
                        state.pendaftaran.jumlah_sumbu = "10";
                    }else if(state.pendaftaran.jaraksumbu8_9 > 0){
                        state.pendaftaran.jumlah_sumbu = "9";
                    }else if(state.pendaftaran.jaraksumbu7_8 > 0){
                        state.pendaftaran.jumlah_sumbu = "8";
                    }else if(state.pendaftaran.jaraksumbu6_7 > 0){
                        state.pendaftaran.jumlah_sumbu = "7";
                    }else if(state.pendaftaran.jaraksumbu5_6 > 0){
                        state.pendaftaran.jumlah_sumbu = "6";
                    }else if(state.pendaftaran.jaraksumbu4_5 > 0){
                        state.pendaftaran.jumlah_sumbu = "5";
                    }else if(state.pendaftaran.jaraksumbu3_4 > 0){
                        state.pendaftaran.jumlah_sumbu = "4";
                    }else if(state.pendaftaran.jaraksumbu2_3 > 0){
                        state.pendaftaran.jumlah_sumbu = "3";
                    }else if(state.pendaftaran.jaraksumbu1_2 > 0){
                        state.pendaftaran.jumlah_sumbu = "2";
                        if(state.pendaftaran.a === null || state.pendaftaran.a == "" || state.pendaftaran.a == "0"){
                            state.pendaftaran.a = state.pendaftaran.jaraksumbu1_2;
                        }
                    }
                }
            // }, 500);
            state.pendaftaran.kodewilayahasal = 'DCRBN';
            
            state.datalama = {
                uuid:state.pendaftaran.uuid,
                nouji: state.pendaftaran.nouji,
                nama: state.pendaftaran.nama,
                alamat: state.pendaftaran.alamat,
                kelurahan:state.pendaftaran.kelurahan,
                kecamatan:state.pendaftaran.kecamatan,
                kota:state.pendaftaran.kota,
                noidentitaspemilik: state.pendaftaran.noidentitaspemilik,
                noregistrasikendaraan: state.pendaftaran.noregistrasikendaraan,
                tgl_registrasikendaraan:state.pendaftaran.tgl_registrasikendaraan,
                merek: state.pendaftaran.merek,
                tipe: state.pendaftaran.tipe,
                varian: state.pendaftaran.varian,
                norangka: state.pendaftaran.norangka,
                nomesin: state.pendaftaran.nomesin,
                thpembuatan: state.pendaftaran.thpembuatan,
                bahanbakar: state.pendaftaran.bahanbakar,
                isisilinder: state.pendaftaran.isisilinder,
                dayamotorpenggerak: state.pendaftaran.dayamotorpenggerak,
                jenis: state.pendaftaran.jenis,
                subjenis: state.pendaftaran.subjenis,
                model: state.pendaftaran.model,
                peruntukan: state.pendaftaran.peruntukan.toUpperCase(),
                kodewilayah: state.pendaftaran.kodewilayah,
                kodewilayahasal: state.pendaftaran.kodewilayahasal,
                nosertifikatreg: state.pendaftaran.nosertifikatreg,
                tglsertifikatreg: state.pendaftaran.tglsertifikatreg,
                rancang : state.pendaftaran.rancang,
                warna: state.pendaftaran.warna,
                idmerek: state.pendaftaran.idmerek,
                idtipe: state.pendaftaran.idtipe,
                idvarian: state.pendaftaran.idvarian,
                idbahanbakar: state.pendaftaran.idbahanbakar,
                idjenis: state.pendaftaran.idjenis,
                idsubjenis: state.pendaftaran.idsubjenis,
                idkodewilayah: state.pendaftaran.idkodewilayah,
                idkodewilayahasal: state.pendaftaran.idkodewilayahasal,
                jbb: state.pendaftaran.jbb,
                jbkb: state.pendaftaran.jbkb,
                jbi: state.pendaftaran.jbi,
                jbki: state.pendaftaran.jbki,
                mst: state.pendaftaran.mst,
                konfigurasisumburoda: state.pendaftaran.konfigurasisumburoda,
                ukuranban: state.pendaftaran.ukuranban,
                panjangkendaraan: state.pendaftaran.panjangkendaraan,
                lebarkendaraan: state.pendaftaran.lebarkendaraan,
                tinggikendaraan: state.pendaftaran.tinggikendaraan,
                panjangbakatautangki: state.pendaftaran.panjangbakatautangki ?? 0,
                lebarbakatautangki: state.pendaftaran.lebarbakatautangki ?? 0,
                tinggibakatautangki: state.pendaftaran.tinggibakatautangki ?? 0,
                julurdepan: state.pendaftaran.julurdepan,
                julurbelakang: state.pendaftaran.julurbelakang,
                jumlah_sumbu: state.pendaftaran.jumlah_sumbu,
                jaraksumbu1_2: state.pendaftaran.jaraksumbu1_2,
                jaraksumbu2_3: state.pendaftaran.jaraksumbu2_3 ?? 0,
                jaraksumbu3_4: state.pendaftaran.jaraksumbu3_4 ?? 0,
                jaraksumbu4_5: state.pendaftaran.jaraksumbu4_5 ?? 0,
                jaraksumbu5_6: state.pendaftaran.jaraksumbu5_6 ?? 0,
                jaraksumbu6_7: state.pendaftaran.jaraksumbu6_7 ?? 0,
                jaraksumbu7_8: state.pendaftaran.jaraksumbu7_8 ?? 0,
                jaraksumbu8_9: state.pendaftaran.jaraksumbu8_9 ?? 0,
                jaraksumbu9_10: state.pendaftaran.jaraksumbu9_10 ?? 0,
                jaraksumbu10_11: state.pendaftaran.jaraksumbu10_11 ?? 0,
                jaraksumbu11_12: state.pendaftaran.jaraksumbu11_12 ?? 0,
                q: state.pendaftaran.q ?? 0,
                p: state.pendaftaran.p ?? 0,
                r: state.pendaftaran.r ?? 0,
                a: state.pendaftaran.a ?? 0,
                b: state.pendaftaran.b ?? 0,
                dayaangkutorang: state.pendaftaran.dayaangkutorang,
                dayaangkutbarang: state.pendaftaran.dayaangkutbarang,
                kelasjalanterendah: state.pendaftaran.kelasjalanterendah,
                idkelasjalanterendah: state.pendaftaran.idkelasjalanterendah,
                beratsumbu1:state.pendaftaran.beratsumbu1 ?? 0,
                beratsumbu2:state.pendaftaran.beratsumbu2 ?? 0,
                beratsumbu3:state.pendaftaran.beratsumbu3 ?? 0,
                beratsumbu4:state.pendaftaran.beratsumbu4 ?? 0,
                beratsumbu5:state.pendaftaran.beratsumbu5 ?? 0,
                beratsumbu6:state.pendaftaran.beratsumbu6 ?? 0,
                beratsumbu7:state.pendaftaran.beratsumbu7 ?? 0,
                beratsumbu8:state.pendaftaran.beratsumbu8 ?? 0,
                beratsumbu9:state.pendaftaran.beratsumbu9 ?? 0,
                beratsumbu10:state.pendaftaran.beratsumbu10 ?? 0,
                beratsumbu11:state.pendaftaran.beratsumbu11 ?? 0,
                beratsumbu12:state.pendaftaran.beratsumbu12 ?? 0,
                beratkosong:state.pendaftaran.beratkosong ?? 0,
                catatanrubahbentuk:state.pendaftaran.catatanrubahbentuk,
                bahan:state.pendaftaran.bahan,
        };
    },  
    ASSIGN_FORMBULE(state, payload) {
        state.pendaftaran.kodepenerbitans_id = payload.issuance_id,
        state.pendaftaran.tglpendaftaran = payload.created_at,
        state.pendaftaran.nouji= payload.exam_code;
        state.pendaftaran.nama= payload.owner_name;
        state.pendaftaran.alamat= payload.owner_address;
        state.pendaftaran.noidentitaspemilik= payload.owner_nik;
        state.pendaftaran.noregistrasikendaraan= payload.nonrkb;
        state.pendaftaran.idmerek= payload.vehicle_brand_id;
        state.pendaftaran.idtipe= payload.vehicle_varian_type_id;
        state.pendaftaran.idvarian= payload.vehicle_varian_id;
        state.pendaftaran.norangka= payload.norangka;
        state.pendaftaran.nomesin= payload.nomesin;
        state.pendaftaran.thpembuatan= payload.thpembuatan;
        state.pendaftaran.idbahanbakar= payload.fuel_id;
        state.pendaftaran.isisilinder= payload.isisilinder;
        state.pendaftaran.dayamotorpenggerak= payload.dayamotorpenggerak;
        state.pendaftaran.idjenis= payload.vehicle_type_id;
        state.pendaftaran.idsubjenis= payload.vehicle_sub_id;
        state.pendaftaran.jbb= payload.jbb;

        state.pendaftaran.nosertifikatreg= payload.certificate_number;
        state.pendaftaran.tglsertifikatreg= payload.certificate_date;
        state.pendaftaran.jbkb= payload.jbkb;
        state.pendaftaran.jbi= payload.jbi;
        state.pendaftaran.jbki= payload.jbki;
        state.pendaftaran.mst= payload.mst;
        state.pendaftaran.konfigurasisumburoda= payload.konfigurasisumburoda;
        state.pendaftaran.ukuranban= payload.ukuranban;
        state.pendaftaran.panjangkendaraan= payload.panjangkendaraan;
        state.pendaftaran.lebarkendaraan= payload.lebarkendaraan;
        state.pendaftaran.tinggikendaraan= payload.tinggikendaraa;
        state.pendaftaran.panjangbakatautangki= payload.panjangbakatautangki;
        state.pendaftaran.lebarbakatautangki= payload.lebarbakatautangki;
        state.pendaftaran.tinggibakatautangki= payload.tinggibakatautangki;
        state.pendaftaran.julurdepan= payload.julurdepan;
        state.pendaftaran.julurbelakang= payload.julurbelakang;
        state.pendaftaran.jaraksumbu1_2= payload.jaraksumbu1_2;
        state.pendaftaran.jaraksumbu2_3= payload.jaraksumbu2_3;
        state.pendaftaran.jaraksumbu3_4= payload.jaraksumbu3_4;
        state.pendaftaran.dayaangkutorang= payload.dayaangkutorang;
        state.pendaftaran.dayaangkutbarang= payload.dayaangkutbarang;
        state.pendaftaran.idkelasjalan= payload.kelasjalan_id;
        state.pendaftaran.beratkosong= payload.beratkosong;
        if(payload.area_id !== null && payload.area_id  !== undefined && payload.area_id  !== ""){
            var wilayah = state.kodewilayahs.find(function(item) {
                return item.area_id === payload.area_id;
            });
            if (wilayah) {
                state.pendaftaran.wilayah= wilayah.area_name;
                state.pendaftaran.kodewilayah= wilayah.area_code;
                state.pendaftaran.idkodewilayah= wilayah.area_id;
            }
        }
        if(payload.area_from_id !== null && payload.area_from_id  !== undefined && payload.area_from_id  !== ""){
            var wilayah = state.kodewilayahs.find(function(item) {
                return item.area_id === payload.area_from_id;
            });
            if (wilayah) {
                state.pendaftaran.wilayahasal= wilayah.area_name;
                state.pendaftaran.kodewilayahasal= wilayah.area_code;
                state.pendaftaran.idkodewilayahasal= wilayah.area_id;
            }
        }
        if(payload.vehicle_brand_id !== null && payload.vehicle_brand_id  !== undefined && payload.vehicle_brand_id  !== ""){
            var data = state.mereks.find(function(item) {
                return item.vehicle_brand_id === payload.vehicle_brand_id;
            });
            if (data) {
                state.pendaftaran.merek= data.vehicle_brand_name;
                state.pendaftaran.idmerek= data.vehicle_brand_id;
            }else{
                state.pendaftaran.merek= "";
                state.pendaftaran.idmerek= "";
            }
        }
        if(payload.vehicle_type_id !== null && payload.vehicle_type_id  !== undefined && payload.vehicle_type_id  !== ""){
            var data = state.tipeBlue.find(function(item) {
                return item.vehicle_type_id === payload.vehicle_type_id;
            });
            if (data) {
                state.pendaftaran.tipe= data.vehicle_varian_type_name;
                state.pendaftaran.idtipe= data.vehicle_varian_type_id;
            }else{
                // state.pendaftaran.tipe= "";
                // state.pendaftaran.idtipe= "";
            }
        }
        if(payload.fuel_id !== null && payload.fuel_id  !== undefined && payload.fuel_id  !== ""){
            var data = state.fuels.find(function(item) {
                return item.fuel_id === payload.fuel_id;
            });
            if (data) {
                state.pendaftaran.bahanbakar= data.fuel_name;
                state.pendaftaran.idbahanbakar= data.fuel_id;
            }else{
                state.pendaftaran.bahanbakar= "";
                state.pendaftaran.idbahanbakar= "";
            }
        }
        if(payload.kelasjalan_id !== null && payload.kelasjalan_id  !== undefined && payload.kelasjalan_id  !== ""){
            var data = state.kelasjalan.find(function(item) {
                return item.kelasjalan_id === payload.kelasjalan_id;
            });
            if (data) {
                state.pendaftaran.kelasjalanterendah= data.kelasjalan_name;
                state.pendaftaran.idkelasjalan= data.kelasjalan_id;
            }else{
                state.pendaftaran.kelasjalanterendah= "";
                state.pendaftaran.idkelasjalan= "";
            }
        }
    },
    ASSIGN_FORMVTA(state, payload) {
        state.pendaftaran.merek = payload.merk;
        state.pendaftaran.norangka= payload.nomor_chasis;
        state.pendaftaran.nomesin= payload.nomor_mesin;
        if(payload.tahun_pembuatan !== null && payload.tahun_pembuatan  !== undefined && payload.tahun_pembuatan  !== ""){
            state.pendaftaran.thpembuatan= payload.tahun_pembuatan.replace(/\./g, "");
        }
        if(payload.isi_silinder !== null && payload.isi_silinder  !== undefined && payload.isi_silinder  !== ""){
            state.pendaftaran.idbahanbakar= payload.bahan_bakar_id;
            var foundFuel = state.fuels.find(function(item) {
                return item.fuel_id === payload.bahan_bakar_id;
            });
            if (foundFuel) {
                state.pendaftaran.bahanbakar= foundFuel.fuel_name;
            }
        }
        if(payload.isi_silinder !== null && payload.isi_silinder  !== undefined && payload.isi_silinder  !== ""){
            state.pendaftaran.isisilinder= payload.isi_silinder.replace(/\./g, "");
        }
        state.pendaftaran.dayamotorpenggerak= parseInt(payload.daya_motor);
        if(payload.jbb !== null && payload.jbb  !== undefined && payload.jbb  !== ""){
            state.pendaftaran.jbb= payload.jbb.replace(/\./g, "");
        }
        state.pendaftaran.nosertifikatreg= payload.srut_no;
        state.pendaftaran.tglsertifikatreg= payload.srut_tanggal;
        if(payload.jbkb !== null && payload.jbkb  !== undefined && payload.jbkb  !== ""){
            state.pendaftaran.jbkb= payload.jbkb.replace(/\./g, "");
        }
        if(payload.jbi !== null && payload.jbi  !== undefined && payload.jbi  !== ""){
            state.pendaftaran.jbi= payload.jbi.replace(/\./g, "");
        }
        if(payload.jbki !== null && payload.jbki  !== undefined && payload.jbki  !== ""){
            state.pendaftaran.jbki= payload.jbki.replace(/\./g, "");
        }
        state.pendaftaran.ukuranban= payload.ukuran_ban_s1;
        if(payload.panjang_total !== null && payload.panjang_total  !== undefined && payload.panjang_total  !== ""){
            state.pendaftaran.panjangkendaraan= payload.panjang_total.replace(/\./g, "");
        }
        if(payload.lebar_total !== null && payload.lebar_total  !== undefined && payload.lebar_total  !== ""){
            state.pendaftaran.lebarkendaraan= payload.lebar_total.replace(/\./g, "");
        }
        if(payload.tinggi_total !== null && payload.tinggi_total  !== undefined && payload.tinggi_total  !== ""){
            state.pendaftaran.tinggikendaraan= payload.tinggi_total.replace(/\./g, "");
        }
        if(payload.dimensi_bak_tangki !== null && payload.dimensi_bak_tangki  !== undefined && payload.dimensi_bak_tangki  !== ""){
            var dimensions = payload.dimensi_bak_tangki.split(" X ");
            var length = dimensions[0];
            var width = dimensions[1];
            var height = dimensions[2]; 
            
            state.pendaftaran.panjangbakatautangki= length;
            state.pendaftaran.lebarbakatautangki= width;
            state.pendaftaran.tinggibakatautangki= height;
        }
        if(payload.julur_depan !== null && payload.julur_depan  !== undefined && payload.julur_depan  !== ""){
            state.pendaftaran.julurdepan= payload.julur_depan.replace(/\./g, "");
        }
        if(payload.julur_belakang !== null && payload.julur_belakang  !== undefined && payload.julur_belakang  !== ""){
            state.pendaftaran.julurbelakang= payload.julur_belakang.replace(/\./g, "");
        }
        if(payload.jarak_sumbu_12 !== null && payload.jarak_sumbu_12  !== undefined && payload.jarak_sumbu_12  !== ""){
            state.pendaftaran.jaraksumbu1_2= payload.jarak_sumbu_12.replace(/\./g, "");
        }
        if(payload.jarak_sumbu_23 !== null && payload.jarak_sumbu_23  !== undefined && payload.jarak_sumbu_23  !== ""){
            state.pendaftaran.jaraksumbu2_3= payload.jarak_sumbu_23.replace(/\./g, "");
        }
        if(payload.jarak_sumbu_34 !== null && payload.jarak_sumbu_34  !== undefined && payload.jarak_sumbu_34  !== ""){
            state.pendaftaran.jaraksumbu3_4= payload.jarak_sumbu_34.replace(/\./g, "");
        }
        if(payload.daya_angkut_orang !== null && payload.daya_angkut_orang  !== undefined && payload.daya_angkut_orang  !== ""){
            state.pendaftaran.dayaangkutorang= payload.daya_angkut_orang;
        }
        if(payload.daya_angkut_barang !== null && payload.daya_angkut_barang  !== undefined && payload.daya_angkut_barang  !== ""){
            state.pendaftaran.dayaangkutbarang= payload.daya_angkut_barang.replace(/\./g, "");
        }
        state.pendaftaran.idkelasjalan= payload.kelas_jalan_id;
        if(payload.berat_kosong_total !== null && payload.berat_kosong_total  !== undefined && payload.berat_kosong_total  !== ""){
            state.pendaftaran.beratkosong= payload.berat_kosong_total.replace(/\./g, "");
        }
    },
    CLEAR_FORM(state) {
        state.pendaftaran = {
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
            tglsertifikatreg:"",
            rancang:"",
            warna:"",
            tmk:"",
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
            bahan:"0",
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
            idkelasjalanterendah:"",
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
            tglpendaftaran: "",
            kodepenerbitans_id: "",
            jenispendaftaran: "",
            namapemohon:"",
            alamatpemohon:"",
            notelp:"",
            nosurat:"",
            nosuratdari:"",
            kepada:"Kepala",
            tujuan:"",
            alasan:[],
            tglpelaksanaan:"",
            tglhbsuji: "",
            tglterakhiruji: "",
            ketujiterakhir: "",
        };
        
        state.datalama = {
            uuid:"",
            noantrian:"",
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
            idkelasjalanterendah:"",
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
        state.notif= "";
        state.perubahans= [];
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
        state.uuid = "";
    },

    CLEAR_NOTIF(state) {
        state.notif = {
            success:"",
            message:"",
        };
    },
    
    CLEAR_RESPONBLUE(state){
        state.responeBlue = {
            status: "",
            code:   "",
            message: "",
            data: [],
        }
    }
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
    getIdentitaskendaraanNouji({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PendaftaranService.getIdentitaskendaraanNouji(state.pendaftaran.nouji)
                .then(response => {
                    resolve(response.data);
                    if (response.data.result != false) {
                        commit("ASSIGN_FORMNOUJI", response.data.result);
                        state.carinouji = 1;
                    }else{
                        var nouji = state.pendaftaran.nouji;
                        var kode = state.pendaftaran.kodepenerbitans_id;
                        var nosuratkehilangan = state.pendaftaran.nosuratkehilangan;
                        var tglpendaftaran = state.pendaftaran.tglpendaftaran;
                        var nosurat = state.pendaftaran.nosurat;
                        var noantrian = state.pendaftaran.noantrian;
                        commit("CLEAR_FORM");
                        state.pendaftaran.nouji = nouji;
                        state.pendaftaran.kodepenerbitans_id = kode;
                        state.pendaftaran.nosurat = nosurat;
                        state.pendaftaran.noantrian = noantrian;
                        state.pendaftaran.nosuratkehilangan = nosuratkehilangan;
                        state.pendaftaran.tglpendaftaran = tglpendaftaran;
                        state.carinouji = 0;
                    }
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
    getNouji({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PendaftaranService.getCheckNouji(state.pendaftaran.nouji)
                .then(response => {
                    resolve(response.data);
                    if (response.data.result != false) {
                        state.carinouji = 1;
                    }else{
                        state.carinouji = 0;
                    }
                })
                .catch(error => {
                });
        });
    },
    getNokendaraan({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PendaftaranService.getNokendaraan(state.pendaftaran.noregistrasikendaraan)
                .then(response => {
                    resolve(response.data);
                    if (response.data.result != false) {
                        state.carinokendaraan = 1;
                    }else{
                        state.carinokendaraan = 0;
                    }
                })
                .catch(error => {
                });
        });
    },
    getNorangka({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PendaftaranService.getNorangka(state.pendaftaran.norangka)
                .then(response => {
                    resolve(response.data);
                    if (response.data.result != false) {
                        state.carinorangka = 1;
                    }else{
                        state.carinorangka = 0;
                    }
                })
                .catch(error => {
                });
        });
    },
    submitPendaftaran({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            if(state.pendaftaran.kodepenerbitans_id == 1 || state.pendaftaran.kodepenerbitans_id == 2){
                    var wilayah = state.kodewilayahs.find(function(item) {
                        return item.area_code === "DCRBN";
                    });
                    if (wilayah) {
                        state.pendaftaran.kodewilayah= wilayah.area_code;
                        state.pendaftaran.idkodewilayah= wilayah.area_id;
                        state.pendaftaran.kodewilayahasal= wilayah.area_code;
                        state.pendaftaran.idkodewilayahasal= wilayah.area_id;
                    }
            }else if(state.pendaftaran.kodepenerbitans_id == 5 || state.pendaftaran.kodepenerbitans_id == 6){
                var wilayah = state.kodewilayahs.find(function(item) {
                    return item.area_code === "DCRBN";
                });
                if (wilayah) {
                    state.pendaftaran.kodewilayah= wilayah.area_code;
                    state.pendaftaran.idkodewilayah= wilayah.area_id;
                }
            }
            PendaftaranService.postPendaftaran(state.pendaftaran, state.perubahans)
                .then(response => {
                    // console.log(response);
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
    submitPendaftaran2({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            PendaftaranService.postPendaftaran2(state.pendaftaran)
                .then(response => {
                    // console.log(response);
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
    editPendaftaran({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PendaftaranService.getPendaftaran(payload)
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
    updatePendaftaran({ state, commit }, id) {
        return new Promise((resolve, reject) => {
            PendaftaranService.updatePendaftaran(id, state.pendaftaran, state.perubahans)
                .then(response => {
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
    removePendaftaran({ dispatch }, id) {
        return new Promise((resolve, reject) => {
            PendaftaranService.deletePendaftaran(id)
                .then(response => {
                    dispatch("getPendaftarans").then(() => resolve());
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
    setNoSurat({ commit, state }) {
        return PendaftaranService.setNoSurat().then(response => {
            state.pendaftaran.nosurat = response.data.result; 
            // console.log(response.data.data)
        });
    },
    getKotas({ commit, state }) {
        return PendaftaranService.getKotas().then(response => {
            commit("DATA_KOTA", response.data.result);
        });
    },
    getKecamatans({ commit, state }, payload) {
        return PendaftaranService.getKecamatans(payload).then(response => {
            commit("DATA_KECAMATAN", response.data.result);
        });
    },
    getKelurahans({ commit, state }, payload) {
        return PendaftaranService.getKelurahans(state.pendaftaran.kota, payload).then(response => {
            commit("DATA_KELURAHAN", response.data.result);
        });
    },
    async getKodewilayahs({ commit, state }) {
        return await PendaftaranService.getKodewilayahs().then(response => {
            commit("DATA_KODEWILAYAH", response.data.result.data);
            // console.log(response.data.data)
        });
    },
    async getMereks({ commit, state }) {
        return await PendaftaranService.getMereks().then(response => {
            commit("DATA_MEREK", response.data.result.data);
        });
    },
    async getTipes({ commit, state }) {
        return await PendaftaranService.getTipes(state.pendaftaran.idmerek).then(response => {
            commit("DATA_TIPE", response.data.result.data);
        });
    },
    async getVarians({ commit, state }) {
        return await PendaftaranService.getVarians(state.pendaftaran.idtipe).then(response => {
            commit("DATA_VARIAN", response.data.result.data);
        });
    },
    async getJenis({ commit, state }) {
        return await PendaftaranService.getJenis().then(response => {
            commit("DATA_JENIS", response.data.result.data);
        });
    },
    async getSubJenis({ commit, state }) {
        return await PendaftaranService.getSubJenis(state.pendaftaran.idjenis).then(response => {
            commit("DATA_SUBJENIS", response.data.result.data);
        });
    },
    getJeniskendaraan({ commit, state }) {
        return PendaftaranService.getJeniskendaraan().then(response => {
            commit("DATA_JENISKENDARAAN", response.data.result);
        });
    },
    async getJenisModel({ commit, state }) {
        return await PendaftaranService.getJenisModel().then(response => {
            commit("DATA_JENISMODEL", response.data.result);
        });
    },
    async getKodepenerbitans({ commit, state }) {
        return await PendaftaranService.getVarians().then(response => {
            commit("DATA_KODEPENERBITAN", response.data.result);
        });
    },
    async getFuels({ commit, state }) {
        return await PendaftaranService.getFuels().then(response => {
            commit("DATA_FUELS", response.data.result.data);
        });
    },
    async getKelasJalans({ commit, state }) {
        return await PendaftaranService.getKelasJalans().then(response => {
            commit("DATA_KELASJALAN", response.data.result.data);
        });
    },
    async getVTA({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        return await PendaftaranService.getVTA(search).then(response => {
            commit("ASSIGN_RESPONVTA", response.data.result);
            if(response.data.result.error === false){
                commit("ASSIGN_FORMDATAVTA", response.data.result.data);
                commit("ASSIGN_FORMVTA", response.data.result.data);
            }
        });
    },
    async checkNU({ commit, state }, payload) {
        let nouji = typeof payload != "undefined" ? payload : "";
        let kodepenerbitans_id = 5;
        return await PendaftaranService.checkUJI(nouji,kodepenerbitans_id).then(response => {
            commit("ASSIGN_RESPONBLUE", response.data.result);
            if(response.data.result.status){
                commit("ASSIGN_FORMBULE", response.data.result.data);
            }
        });
    },
    async checkMU({ commit, state }, payload) {
        let nouji = typeof payload != "undefined" ? payload : "";
        let kodepenerbitans_id = 6;
        return await PendaftaranService.checkUJI(nouji,kodepenerbitans_id).then(response => {
            commit("ASSIGN_RESPONBLUE", response.data.result);
            if(response.data.result.status){
                commit("ASSIGN_FORMBULE", response.data.result.data);
            }
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

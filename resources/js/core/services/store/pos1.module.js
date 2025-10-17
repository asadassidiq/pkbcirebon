import PosService from "../pengujian.service.js";
import Swal from "sweetalert2";
export const namespaced = true;
var userid = "";

export const state = {
    pendaftarans: [],
    pendaftaransLulus: [],
    pendaftaransTLulus: [],
    filter: {
        tgl: ""
    },
    status_lulusuji : "0",
    posisi:"1",
    pendaftaran : {
        pos1:"0",
    },
    identitaskendaraan: {
        nouji:"",
        noregistrasikendaraan:"",
        merek:"",
        jenis:"",
        nomesin:"",
        thpembuatan:"",
        bahanbakar:"",
        jbb:"",
        norangka:"",
        panjangkendaraan:"0",
        lebarkendaraan:"0",
        tinggikendaraan:"0",
        panjangbakatautangki:"0",
        lebarbakatautangki:"0",
        tinggibakatautangki:"0",
        julurdepan:"0",
        julurbelakang:"0",
        p:"0",
        a:"0",
        jumlah_sumbu:"2",
        jaraksumbu1_2:"0",
        jaraksumbu2_3:"0",
        jaraksumbu3_4:"0",
        jaraksumbu5_6:"0",
        jaraksumbu6_7:"0",
        jaraksumbu7_8:"0",
        jaraksumbu8_9:"0",
        jaraksumbu9_10:"0",
        jaraksumbu10_11:"0",
        jaraksumbu11_12:"0",
        q:"0",
        r:"0",
        b:"0",
        jarakantaradindingterluar:"0",
        groundclearance:"0",
        lebarpintu:"0",
        tinggipintu:"0",
        tinggianaktangga:"0",
        lebaranaktangga:"0",
        lebarlorong:"0",
        tinggitempatberdiri:"0",
        lebartempatduduk:"0",
        jaraktempatduduk:"0",
        lebarpintudarurat:"0",
        panjangakseskeluar:"0",
        lebarakseskeluar:"0",
        jarakantarbumper:"0",
        volume:"0",
        jenismuatan:"",
        beratjenismuatan:"0",
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
        jbkb:"0",
        jbi:"0",
        jbki:"0",
        dayaangkutorang:"0",
        dayaangkutbarang:"0",
        kelasjalanterendah:"",
        mst:"0",
        konfigurasisumburoda:"",
        ukuranban:"",
        posisinomeruji:"",
        bahan:"",
        rumahrumah:"",
        warna:"",
    },
    dimensi: {
        pendaftaran_id:"",
        panjangkendaraan:"1",
        lebarkendaraan:"1",
        tinggikendaraan:"1",
        panjangbakatautangki:"1",
        lebarbakatautangki:"1",
        tinggibakatautangki:"1",
        julurdepan:"1",
        julurbelakang:"1",
        p:"1",
        a:"1",
        jaraksumbu1_2:"1",
        jaraksumbu2_3:"1",
        jaraksumbu3_4:"1",
        jaraksumbu4_5:"1",
        jaraksumbu5_6:"1",
        jaraksumbu6_7:"1",
        jaraksumbu7_8:"1",
        jaraksumbu8_9:"1",
        jaraksumbu9_10:"1",
        jaraksumbu10_11:"1",
        jaraksumbu11_12:"1",
        q:"1",
        r:"1",
        b:"1",
        jarakantaradindingterluar:"",
        groundclearance:"1",
        lebarpintu:"1",
        tinggipintu:"1",
        tinggianaktangga:"1",
        lebaranaktangga:"1",
        lebarlorong:"1",
        tinggitempatberdiri:"1",
        lebartempatduduk:"1",
        jaraktempatduduk:"1",
        lebarpintudarurat:"1",
        panjangakseskeluar:"1",
        lebarakseskeluar:"1",
        jarakantarbumper:"1",
        volume:"1",
        jenismuatan:"",
        beratjenismuatan:"1",
        panjangkendaraan:"1",
        nilai_panjangkendaraan:"0",
        nilai_lebarkendaraan:"0",
        nilai_tinggikendaraan:"0",
        nilai_panjangbakatautangki:"0",
        nilai_lebarbakatautangki:"0",
        nilai_tinggibakatautangki:"0",
        nilai_julurdepan:"0",
        nilai_julurbelakang:"0",
        nilai_p:"0",
        nilai_a:"0",
        nilai_jaraksumbu1_2:"0",
        nilai_jaraksumbu2_3:"0",
        nilai_jaraksumbu3_4:"0",
        nilai_jaraksumbu4_5:"0",
        nilai_jaraksumbu5_6:"0",
        nilai_jaraksumbu6_7:"0",
        nilai_jaraksumbu7_8:"0",
        nilai_jaraksumbu8_9:"0",
        nilai_jaraksumbu9_10:"0",
        nilai_jaraksumbu10_11:"0",
        nilai_jaraksumbu11_12:"0",
        nilai_q:"0",
        nilai_r:"0",
        nilai_b:"0",
        nilai_jarakantaradindingterluar:"0",
        nilai_groundclearance:"0",
        nilai_lebarpintu:"0",
        nilai_tinggipintu:"0",
        nilai_tinggianaktangga:"0",
        nilai_lebaranaktangga:"0",
        nilai_lebarlorong:"0",
        nilai_tinggitempatberdiri:"0",
        nilai_lebartempatduduk:"0",
        nilai_jaraktempatduduk:"0",
        nilai_lebarpintudarurat:"0",
        nilai_panjangakseskeluar:"0",
        nilai_lebarakseskeluar:"0",
        nilai_jarakantarbumper:"0",
        nilai_volume:"0",
        nilai_beratjenismuatan:"0",
    },
    identifikasi : {
        pendaftaran_id:"",
        notnkb: "1",
        nouji: "1",
        norangkalandasan: "1",
        nomotorpenggerak: "1",
        ukuranban: "1",
        bahan: "1",
        jenisbahan:"",
    },
    depan: {
        pendaftaran_id:"",
        kacadepan:"1",
        penyemprotair:"1",
        penghapuskaca:"1",
        bodidepan:"1",
        lamputandabatas:"1",
        lampuutamadekat:"1",
        lampuutamajauh:"1",
        lampupenunjukarah:"1",
        lampuposisidepan:"1",
        lampukabut:"1",
        kondisitempatnkbdepan:"1"
    },
    kanan : {
        pendaftaran_id:"",
        kacasampingkanan:"1",
        kacaspion:"1",
        pintusampingkanan:"1",
        bodikanan:"1",
        apctkanan:"1",
        kompresorudara:"1",
        bautdanmurroda:"1",
        kondisidanukuranban:"1",
        perisaikolong:"1",
        tutuptangki:"1",
        lamputandabatassamping:"1",
        apar:"1",
        rodakelima:"1",
        kakipenompangtempelan:"1",
        alatperangkaitempelan:"1",
    },
    belakang : {
        pendaftaran_id:"",
        apctbelakang:"1",
        lampuposisibelakang:"1",
        lampupenunjukarah:"1",
        lampurem:"1",
        lampumundur:"1",
        lamputnkb:"1",
        kondisitempatpemasangantnkb:"1",
        lamputandabatas:"1",
        kondisirodacadangan:"1",
        spakbor:"1",
        sistempembuangan:"1",
    },
    kiri : {
        pendaftaran_id:"",
        kacasampingkiri:"1",
        kacaspionkiri:"1",
        kacaspionkiri:"1",
        pintusampingkiri:"1",
        bodikiri:"1",
        apctkiri:"1",
        kompresorudara:"1",
        bautdanmurroda:"1",
        kondisidanukuranban:"1",
        perisaikolong:"1",
        tutuptangki:"1",
        lamputandabatassamping:"1",
        rodakelima:"1",
        kakipenompangtempelan:"1",
        alatperangkaitempelan:"1",
    },
    dalam : {
        pendaftaran_id:"",
        ruangkemudi:"1",
        tempatduduk:"1",
        dashboard:"1",
        speedometer:"1",
        instrumenpanel:"1",
        alatcontrollampu:"1",
        tabirmatahari:"1",
        pandangankedepan:"1",
        rodakemudi:"1",
        batangkemudi:"1",
        sabukkeselamatan:"1",
        perlengkapan:"1",
        remparkir:"1",
        pedalremkaki:"1",
        remgasbuang:"1",
        sistemhampa:"1",
    },
    laikjalan : {
        pendaftaran_id:"",
        alatuji_kedalamanalurban:"0",
        status_alurban:"1",
    },
    catatan : {
        pendaftaran_id:"",
        nama : "",
        hasiluji: "",
        alasan: [],
        rekomendasi : "",
        pos: "",
        status:"",
    },
    alasan: [],
    page: 1
};

export const mutations = {
    ASSING_DATA(state, pendaftarans) {
        state.pendaftarans = pendaftarans;
    },
    ASSING_DATALULUS(state, pendaftaransLulus) {
        state.pendaftaransLulus = pendaftaransLulus;
    },
    ASSING_DATATLULUS(state, pendaftaransTLulus) {
        state.pendaftaransTLulus = pendaftaransTLulus;
    },
    SET_PAGE(state, payload) {
        state.page = payload;
    },
    SET_TGL(state, payload) {
        state.filter.tgl = payload;
    },
    SET_STATUS(state, payload) {
        state.status_lulusuji = payload;
    },
    ASSIGN_CATATAN(state, payload){
        state.catatan = {
            pendaftaran_id: '0',
            nama:   payload.nama,
            hasiluji: state.catatan.hasiluji,
            alasan: payload.alasan,
            rekomendasi: payload.rekomendasi,
            pos: payload.pos,
            status: '1',
        }
    },
    ASSIGN_PENDAFTARAN(state, payload) {
        state.pendaftaran = {
            pos1 : payload.pos1,
        }
    },
    ASSIGN_DIMENSI(state, payload) {
        state.dimensi = {
            pendaftaran_id: payload.pendaftaran_id,
            panjangkendaraan:payload.panjangkendaraan,
            lebarkendaraan:payload.lebarkendaraan,
            tinggikendaraan: payload.tinggikendaraan,
            panjangbakatautangki: payload.panjangbakatautangki,
            lebarbakatautangki:payload.lebarbakatautangki,
            tinggibakatautangki:payload.tinggibakatautangki,
            julurdepan:payload.julurdepan,
            julurbelakang:payload.julurbelakang,
            p:payload.p,
            a:payload.a,
            jaraksumbu1_2:payload.jaraksumbu1_2,
            jaraksumbu2_3:payload.jaraksumbu2_3,
            jaraksumbu3_4:payload.jaraksumbu3_4,
            jaraksumbu4_5:payload.jaraksumbu4_5,
            jaraksumbu5_6:payload.jaraksumbu5_6,
            jaraksumbu6_7:payload.jaraksumbu6_7,
            jaraksumbu7_8:payload.jaraksumbu7_8,
            jaraksumbu8_9:payload.jaraksumbu8_9,
            jaraksumbu9_10:payload.jaraksumbu9_10,
            jaraksumbu10_11:payload.jaraksumbu10_11,
            jaraksumbu11_12:payload.jaraksumbu11_12,
            q:payload.q,
            r:payload.r,
            b:payload.b,
            jarakantaradindingterluar:payload.jarakantaradindingterluar,
            groundclearance:payload.groundclearance,
            lebarpintu:payload.lebarpintu,
            tinggipintu:payload.tinggipintu,
            tinggianaktangga:payload.tinggianaktangga,
            lebaranaktangga:payload.lebaranaktangga,
            lebarlorong:payload.lebarlorong,
            tinggitempatberdiri:payload.tinggitempatberdiri,
            lebartempatduduk:payload.lebartempatduduk,
            jaraktempatduduk:payload.jaraktempatduduk,
            lebarpintudarurat:payload.lebarpintudarurat,
            panjangakseskeluar:payload.panjangakseskeluar,
            lebarakseskeluar:payload.lebarakseskeluar,
            jarakantarbumper:payload.jarakantarbumper,
            volume:payload.volume,
            jenismuatan:payload.jenismuatan,
            beratjenismuatan:payload.beratjenismuatan,
            panjangkendaraan:payload.panjangkendaraan,
            nilai_panjangkendaraan:payload.nilai_panjangkendaraan,
            nilai_lebarkendaraan:payload.nilai_lebarkendaraan,
            nilai_tinggikendaraan:payload.nilai_tinggikendaraan,
            nilai_panjangbakatautangki:payload.nilai_panjangbakatautangki,
            nilai_lebarbakatautangki:payload.nilai_lebarbakatautangki,
            nilai_tinggibakatautangki:payload.nilai_tinggibakatautangki,
            nilai_julurdepan:payload.nilai_julurdepan,
            nilai_julurbelakang:payload.nilai_julurbelakang,
            nilai_p:payload.nilai_p,
            nilai_a:payload.nilai_a,
            nilai_jaraksumbu1_2:payload.nilai_jaraksumbu1_2,
            nilai_jaraksumbu2_3:payload.nilai_jaraksumbu2_3,
            nilai_jaraksumbu3_4:payload.nilai_jaraksumbu3_4,
            nilai_jaraksumbu4_5:payload.nilai_jaraksumbu4_5,
            nilai_jaraksumbu5_6:payload.nilai_jaraksumbu5_6,
            nilai_jaraksumbu6_7:payload.nilai_jaraksumbu6_7,
            nilai_jaraksumbu7_8:payload.nilai_jaraksumbu7_8,
            nilai_jaraksumbu8_9:payload.nilai_jaraksumbu8_9,
            nilai_jaraksumbu9_10:payload.nilai_jaraksumbu9_10,
            nilai_jaraksumbu10_11:payload.nilai_jaraksumbu10_11,
            nilai_jaraksumbu11_12:payload.nilai_jaraksumbu11_12,
            nilai_q:payload.nilai_q,
            nilai_r:payload.nilai_r,
            nilai_b:payload.nilai_b,
            nilai_jarakantaradindingterluar:payload.nilai_jarakantaradindingterluar,
            nilai_groundclearance:payload.nilai_groundclearance,
            nilai_lebarpintu:payload.nilai_lebarpintu,
            nilai_tinggipintu:payload.nilai_tinggipintu,
            nilai_tinggianaktangga:payload.nilai_tinggianaktangga,
            nilai_lebaranaktangga:payload.nilai_lebaranaktangga,
            nilai_lebarlorong:payload.nilai_lebarlorong,
            nilai_tinggitempatberdiri:payload.nilai_tinggitempatberdiri,
            nilai_lebartempatduduk:payload.nilai_lebartempatduduk,
            nilai_jaraktempatduduk:payload.nilai_jaraktempatduduk,
            nilai_lebarpintudarurat:payload.nilai_lebarpintudarurat,
            nilai_panjangakseskeluar:payload.nilai_panjangakseskeluar,
            nilai_lebarakseskeluar:payload.nilai_lebarakseskeluar,
            nilai_jarakantarbumper:payload.nilai_jarakantarbumper,
            nilai_volume:payload.nilai_volume,
            nilai_beratjenismuatan:payload.nilai_beratjenismuatan,
        };
    },
    ASSIGN_IDENTIFIKASI(state, payload) {
        state.identifikasi = {
            pendaftaran_id:payload.pendaftaran_id,
            notnkb: payload.notnkb,
            nouji: payload.nouji,
            norangkalandasan: payload.norangkalandasan,
            nomotorpenggerak: payload.nomotorpenggerak,
            ukuranban:payload.ukuranban,
            bahan:payload.bahan,
            jenisbahan:payload.jenisbahan,
        };
    },
    ASSIGN_DEPAN(state, payload) {
        state.depan = {
            pendaftaran_id: payload.pendaftaran_id,
            kacadepan:payload.kacadepan,
            penyemprotair:payload.penyemprotair,
            penghapuskaca:payload.penghapuskaca,
            bodidepan:payload.bodidepan,
            lamputandabatas:payload.lamputandabatas,
            lampuutamadekat:payload.lampuutamadekat,
            lampuutamajauh:payload.lampuutamajauh,
            lampupenunjukarah:payload.lampupenunjukarah,
            lampuposisidepan:payload.lampuposisidepan,
            lampukabut:payload.lampukabut,
            kondisitempatnkbdepan:payload.kondisitempatnkbdepan
        };
    },
    ASSIGN_KANAN(state, payload) {
        state.kanan = {
            pendaftaran_id: payload.pendaftaran_id,
            kacasampingkanan:payload.kacasampingkanan,
            kacaspion:payload.kacaspion,
            pintusampingkanan:payload.pintusampingkanan,
            bodikanan:payload.bodikanan,
            apctkanan:payload.apctkanan,
            kompresorudara:payload.kompresorudara,
            bautdanmurroda:payload.bautdanmurroda,
            kondisidanukuranban:payload.kondisidanukuranban,
            perisaikolong:payload.perisaikolong,
            tutuptangki:payload.tutuptangki,
            lamputandabatassamping:payload.lamputandabatassamping,
            apar:payload.apar,
            rodakelima:payload.rodakelima,
            kakipenompangtempelan:payload.kakipenompangtempelan,
            alatperangkaitempelan:payload.alatperangkaitempelan,
        };
    },
    ASSIGN_BELAKANG(state, payload) {
        state.belakang = {
            pendaftaran_id: payload.pendaftaran_id,
            apctbelakang:payload.apctbelakang,
            lampuposisibelakang:payload.lampuposisibelakang,
            lampupenunjukarah:payload.lampupenunjukarah,
            lampurem:payload.lampurem,
            lampumundur:payload.lampumundur,
            lamputnkb:payload.lamputnkb,
            kondisitempatpemasangantnkb:payload.kondisitempatpemasangantnkb,
            lamputandabatas:payload.lamputandabatas,
            kondisirodacadangan:payload.kondisirodacadangan,
            spakbor:payload.spakbor,
            sistempembuangan:payload.sistempembuangan,
        };
    },
    ASSIGN_KIRI(state, payload) {
        state.kiri = {
            pendaftaran_id: payload.pendaftaran_id,
            kacasampingkiri:payload.kacasampingkiri,
            kacaspionkiri:payload.kacaspionkiri,
            pintusampingkiri:payload.pintusampingkiri,
            bodikiri:payload.bodikiri,
            apctkiri:payload.apctkiri,
            kompresorudara:payload.kompresorudara,
            bautdanmurroda:payload.bautdanmurroda,
            kondisidanukuranban:payload.kondisidanukuranban,
            perisaikolong:payload.perisaikolong,
            tutuptangki:payload.tutuptangki,
            lamputandabatassamping:payload.lamputandabatassamping,
            rodakelima:payload.rodakelima,
            kakipenompangtempelan:payload.kakipenompangtempelan,
            alatperangkaitempelan:payload.alatperangkaitempelan,
        };
    },
    ASSIGN_DALAM(state, payload) {
        state.dalam = {
            pendaftaran_id: payload.pendaftaran_id,
            ruangkemudi:payload.ruangkemudi,
            tempatduduk:payload.tempatduduk,
            dashboard:payload.dashboard,
            speedometer:payload.speedometer,
            instrumenpanel:payload.instrumenpanel,
            alatcontrollampu:payload.alatcontrollampu,
            tabirmatahari:payload.tabirmatahari,
            pandangankedepan:payload.pandangankedepan,
            rodakemudi:payload.rodakemudi,
            batangkemudi:payload.batangkemudi,
            sabukkeselamatan:payload.sabukkeselamatan,
            perlengkapan:payload.perlengkapan,
            remparkir:payload.remparkir,
            pedalremkaki:payload.pedalremkaki,
            remgasbuang:payload.remgasbuang,
            sistemhampa:payload.sistemhampa,
        };
    },
    ASSIGN_LAIKJALAN(state, payload) {
        state.laikjalan = {
            pendaftaran_id: payload.pendaftaran_id,
            alatuji_kedalamanalurban:payload.alatuji_kedalamanalurban,
            status_alurban:payload.status_alurban,
        };
    },
    CHECK_HASILUJI(state) {
        if(state.identifikasi.notnkb == '0' || state.identifikasi.nouji == '0' || state.identifikasi.norangkalandasan == '0' || state.identifikasi.nomotorpenggerak == '0' || state.identifikasi.ukuranban == '0' || state.identifikasi.bahan == '0')
        {
            state.pendaftaran.pos1 = 0;
        } 
        else if(state.dimensi.panjangkendaraan == '0' || state.dimensi.lebarkendaraan == '0' || state.dimensi.tinggikendaraan == '0' || state.dimensi.panjangbakatautangki == '0' || state.dimensi.tinggibakatautangki == '0' || state.dimensi.julurdepan == '0' || state.dimensi.julurbelakang == '0' || state.dimensi.p == '0' || state.dimensi.a == '0' || state.dimensi.jaraksumbu1_2 == '0' || state.dimensi.jaraksumbu2_3 == '0' || state.dimensi.jaraksumbu3_4 == '0' || state.dimensi.q == '0' || state.dimensi.r == '0' || state.dimensi.b == '0' || state.dimensi.jarakantaradindingterluar == '0' || state.dimensi.groundclearance == '0' || state.dimensi.lebarpintu == '0' || state.dimensi.tinggipintu == '0' || state.dimensi.tinggianaktangga == '0' || state.dimensi.lebaranaktangga == '0' || state.dimensi.lebarlorong == '0' || state.dimensi.tinggitempatberdiri == '0' || state.dimensi.lebartempatduduk == '0' || state.dimensi.jaraktempatduduk == '0' || state.dimensi.lebarpintudarurat == '0' || state.dimensi.panjangakseskeluar == '0' || state.dimensi.lebarakseskeluar == '0' || state.dimensi.jarakantarbumper == '0')
        {
            state.pendaftaran.pos1 = 0;
        }
        else if (state.depan.kacadepan == '0' || state.depan.penyemprotair == '0' || state.depan.penghapuskaca == '0' || state.depan.bodidepan == '0' || state.depan.lamputandabatas == '0' || state.depan.lampuutamadekat == '0' || state.depan.lampuutamajauh == '0' || state.depan.lampupenunjukarah == '0' || state.depan.lampuposisidepan == '0' || state.depan.lampukabut == '0' || state.depan.kondisitempatnkbdepan == '0') {
            state.pendaftaran.pos1 = 0;
        }
        else if (state.kanan.kacasampingkanan == '0' || state.kanan.kacaspion == '0' || state.kanan.pintusampingkanan == '0' || state.kanan.bodikanan == '0' || state.kanan.apctkanan == '0' || state.kanan.kompresorudara == '0' || state.kanan.bautdanmurroda == '0' || state.kanan.kondisidanukuranban == '0' || state.kanan.perisaikolong == '0' || state.kanan.tutuptangki == '0' || state.kanan.jaraksumbu2_3 == '0' || state.kanan.jaraksumbu3_4 == '0' || state.kanan.q == '0' || state.kanan.r == '0' || state.kanan.lamputandabatassamping == '0' || state.kanan.apar == '0' || state.kanan.rodakelima == '0' || state.kanan.kakipenompangtempelan == '0' || state.kanan.alatperangkaitempelan == '0') {
            state.pendaftaran.pos1 = 0;
        }
        else if (state.belakang.apctbelakang == '0' || state.belakang.lampuposisibelakang == '0' || state.belakang.lampupenunjukarah == '0' || state.belakang.lampurem == '0' || state.belakang.lampumundur == '0' || state.belakang.lamputnkb == '0' || state.belakang.kondisitempatpemasangantnkb == '0' || state.belakang.lamputandabatas == '0' || state.belakang.kondisirodacadangan == '0' || state.belakang.spakbor == '0' || state.belakang.sistempembuangan == '0') {
            state.pendaftaran.pos1 = 0;
        }
        else if (state.kiri.kacasampingkiri == '0' || state.kiri.kacaspionkiri == '0' || state.kiri.kacaspionkiri == '0' || state.kiri.bodikiri == '0' || state.kiri.apctkiri == '0' || state.kiri.kompresorudara == '0' || state.kiri.bautdanmurroda == '0' || state.kiri.kondisidanukuranban == '0' || state.kiri.perisaikolong == '0' || state.kiri.tutuptangki == '0' || state.kiri.lamputandabatassamping == '0' || state.kiri.rodakelima == '0' || state.kiri.kakipenompangtempelan == '0' || state.kiri.alatperangkaitempelan == '0') {
            state.pendaftaran.pos1 = 0;
        }
        else if (state.dalam.ruangkemudi == '0' || state.dalam.tempatduduk == '0' || state.dalam.dashboard == '0' || state.dalam.speedometer == '0' || state.dalam.instrumenpanel == '0' || state.dalam.alatcontrollampu == '0' || state.dalam.tabirmatahari == '0' || state.dalam.pandangankedepan == '0' || state.dalam.rodakemudi == '0' || state.dalam.batangkemudi == '0' || state.dalam.sabukkeselamatan == '0' || state.dalam.perlengkapan == '0' || state.dalam.remparkir == '0' || state.dalam.pedalremkaki == '0' || state.dalam.remgasbuang == '0' || state.dalam.sistemhampa == '0') {
            state.pendaftaran.pos1 = 0;
        }
        else if(state.laikjalan.alatuji_kedalamanalurban < 1) {
            state.pendaftaran.pos1 = 0;
        }
        else {
            state.pendaftaran.pos1 = 1;
            state.laikjalan.status_alurban = '1';
        }
    },
    ASSIGN_FORM(state, payload) {
        state.identitaskendaraan = {
            merek      : payload.merek,
            nouji: payload.nouji,
            noregistrasikendaraan : payload.noregistrasikendaraan,
            nama: payload.nama,
            nomesin : payload.nomesin,
            thpembuatan : payload.thpembuatan,
            jenis : payload.jenis,
            jbb   : payload.jbb,
            norangka : payload.norangka,
            bahanbakar: payload.bahanbakar,
            panjangkendaraan: payload.panjangkendaraan,
            lebarkendaraan: payload.lebarkendaraan,
            tinggikendaraan: payload.tinggikendaraan,
            panjangbakatautangki: payload.panjangbakatautangki,
            lebarbakatautangki: payload.lebarbakatautangki,
            tinggibakatautangki: payload.tinggibakatautangki,
            julurdepan:payload.julurdepan,
            julurbelakang:payload.julurbelakang,
            p:payload.p,
            a:payload.a,
            jumlah_sumbu: payload.jumlah_sumbu,
            jaraksumbu1_2:payload.jaraksumbu1_2,
            jaraksumbu2_3:payload.jaraksumbu2_3,
            jaraksumbu3_4:payload.jaraksumbu3_4,
            jaraksumbu5_6:payload.jaraksumbu5_6,
            jaraksumbu6_7:payload.jaraksumbu6_7,
            jaraksumbu7_8:payload.jaraksumbu7_8,
            jaraksumbu8_9:payload.jaraksumbu8_9,
            jaraksumbu9_10:payload.jaraksumbu9_10,
            jaraksumbu10_11:payload.jaraksumbu10_11,
            jaraksumbu11_12:payload.jaraksumbu11_12,
            q:payload.q,
            r:payload.r,
            b:payload.b,
            jarakantaradindingterluar:payload.jarakantaradindingterluar,
            groundclearance:payload.groundclearance,
            lebarpintu:payload.lebarpintu,
            tinggipintu:payload.tinggipintu,
            tinggianaktangga:payload.tinggianaktangga,
            lebaranaktangga:payload.lebaranaktangga,
            lebarlorong:payload.lebarlorong,
            tinggitempatberdiri:payload.tinggitempatberdiri,
            lebartempatduduk:payload.lebartempatduduk,
            jaraktempatduduk:payload.jaraktempatduduk,
            lebarpintudarurat:payload.lebarpintudarurat,
            panjangakseskeluar:payload.panjangakseskeluar,
            lebarakseskeluar:payload.lebarakseskeluar,
            jarakantarbumper:payload.jarakantarbumper,
            volume:payload.volume,
            jenismuatan:payload.jenismuatan,
            beratjenismuatan:payload.beratjenismuatan,
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
            jbkb: payload.jbkb,
            jbi: payload.jbi,
            jbki: payload.jbki,
            dayaangkutorang: payload.dayaangkutorang,
            dayaangkutbarang: payload.dayaangkutbarang,
            kelasjalanterendah : payload.kelasjalanterendah,
            mst: payload.mst,
            konfigurasisumburoda: payload.konfigurasisumburoda,
            ukuranban: payload.ukuranban,
            posisinomeruji : payload.posisinomeruji,
            bahan:payload.bahan,
            rumahrumah:payload.rumahrumah,
            warna:payload.warna,
        };
    },

    CLEAR_FORM(state) {
        state.pendaftaran = {
            pos1:"0",
            pos2:"0",
            pos3:"0",
            user_pos1:"",
        };
        state.identitaskendaraan= {
            nama: "",
            nouji:"",
            noregistrasikendaraan:"",
            merek:"",
            jenis:"",
            nomesin:"",
            thpembuatan:"",
            jbb:"",
            norangka:"",
            bahanbakar:"",
            panjangkendaraan:"0",
            lebarkendaraan:"0",
            tinggikendaraan:"0",
            panjangbakatautangki:"0",
            lebarbakatautangki:"0",
            tinggibakatautangki:"0",
            julurdepan:"0",
            julurbelakang:"0",
            p:"0",
            a:"0",
            jaraksumbu1_2:"0",
            jaraksumbu2_3:"0",
            jaraksumbu3_4:"0",
            q:"0",
            r:"0",
            b:"0",
            jarakantaradindingterluar:"0",
            groundclearance:"0",
            lebarpintu:"0",
            tinggipintu:"0",
            tinggianaktangga:"0",
            lebaranaktangga:"0",
            lebarlorong:"0",
            tinggitempatberdiri:"0",
            lebartempatduduk:"0",
            jaraktempatduduk:"0",
            lebarpintudarurat:"0",
            panjangakseskeluar:"0",
            lebarakseskeluar:"0",
            jarakantarbumper:"0",
            volume:"0",
            jenismuatan:"",
            beratjenismuatan:"0",
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
            jbkb:"0",
            jbi:"0",
            jbki:"0",
            dayaangkutorang:"0",
            dayaangkutbarang:"0",
            kelasjalanterendah:"",
            mst:"0",
            konfigurasisumburoda:"",
            ukuranban:"",
            bahan:"",
            rumahrumah:"",
            warna:"",
        };
        state.dimensi = {
            panjangkendaraan:"1",
            lebarkendaraan:"1",
            tinggikendaraan:"1",
            panjangbakatautangki:"1",
            lebarbakatautangki:"1",
            tinggibakatautangki:"1",
            julurdepan:"1",
            julurbelakang:"1",
            p:"1",
            a:"1",
            jaraksumbu1_2:"1",
            jaraksumbu2_3:"1",
            jaraksumbu3_4:"1",
            jaraksumbu5_6:"1",
            jaraksumbu6_7:"1",
            jaraksumbu7_8:"1",
            jaraksumbu8_9:"1",
            jaraksumbu9_10:"1",
            jaraksumbu10_11:"1",
            jaraksumbu11_12:"1",
            q:"1",
            r:"1",
            b:"1",
            jarakantaradindingterluar:"1",
            groundclearance:"1",
            lebarpintu:"1",
            tinggipintu:"1",
            tinggianaktangga:"1",
            lebaranaktangga:"1",
            lebarlorong:"1",
            tinggitempatberdiri:"1",
            lebartempatduduk:"1",
            jaraktempatduduk:"1",
            lebarpintudarurat:"1",
            panjangakseskeluar:"1",
            lebarakseskeluar:"1",
            jarakantarbumper:"1",
            volume:"1",
            jenismuatan:"",
            beratjenismuatan:"1",
            nilai_panjangkendaraan:"0",
            nilai_lebarkendaraan:"0",
            nilai_tinggikendaraan:"0",
            nilai_panjangbakatautangki:"0",
            nilai_lebarbakatautangki:"0",
            nilai_tinggibakatautangki:"0",
            nilai_julurdepan:"0",
            nilai_julurbelakang:"0",
            nilai_p:"0",
            nilai_a:"0",
            nilai_jaraksumbu1_2:"0",
            nilai_jaraksumbu2_3:"0",
            nilai_jaraksumbu3_4:"0",
            nilai_jaraksumbu5_6:"0",
            nilai_jaraksumbu6_7:"0",
            nilai_jaraksumbu7_8:"0",
            nilai_jaraksumbu8_9:"0",
            nilai_jaraksumbu9_10:"0",
            nilai_jaraksumbu10_11:"0",
            nilai_jaraksumbu11_12:"0",
            nilai_q:"0",
            nilai_r:"0",
            nilai_b:"0",
            nilai_jarakantaradindingterluar:"0",
            nilai_groundclearance:"0",
            nilai_lebarpintu:"0",
            nilai_tinggipintu:"0",
            nilai_tinggianaktangga:"0",
            nilai_lebaranaktangga:"0",
            nilai_lebarlorong:"0",
            nilai_tinggitempatberdiri:"0",
            nilai_lebartempatduduk:"0",
            nilai_jaraktempatduduk:"0",
            nilai_lebarpintudarurat:"0",
            nilai_panjangakseskeluar:"0",
            nilai_lebarakseskeluar:"0",
            nilai_jarakantarbumper:"0",
            nilai_volume:"0",
            nilai_beratjenismuatan:"0",
        };
        state.identifikasi = {
            notnkb: "1",
            nouji: "1",
            norangkalandasan: "1",
            nomotorpenggerak: "1",
            ukuranban: "1",
            bahan: "1",
            jenisbahan:"",
        };
        state.depan = {
            kacadepan:"1",
            penyemprotair:"1",
            penghapuskaca:"1",
            bodidepan:"1",
            lamputandabatas:"1",
            lampuutamadekat:"1",
            lampuutamajauh:"1",
            lampupenunjukarah:"1",
            lampuposisidepan:"1",
            lampukabut:"1",
            kondisitempatnkbdepan:"1"
        };
        state.kanan = {
            kacasampingkanan:"1",
            kacaspion:"1",
            pintusampingkanan:"1",
            bodikanan:"1",
            apctkanan:"1",
            kompresorudara:"1",
            bautdanmurroda:"1",
            kondisidanukuranban:"1",
            perisaikolong:"1",
            tutuptangki:"1",
            lamputandabatassamping:"1",
            apar:"1",
            rodakelima:"1",
            kakipenompangtempelan:"1",
            alatperangkaitempelan:"1",
        };
        state.belakang = {
            apctbelakang:"1",
            lampuposisibelakang:"1",
            lampupenunjukarah:"1",
            lampurem:"1",
            lampumundur:"1",
            lamputnkb:"1",
            kondisitempatpemasangantnkb:"1",
            lamputandabatas:"1",
            kondisirodacadangan:"1",
            spakbor:"1",
            sistempembuangan:"1",
        };
        state.kiri = {
            kacasampingkiri:"1",
            kacaspionkiri:"1",
            pintusampingkiri:"1",
            bodikiri:"1",
            apctkiri:"1",
            kompresorudara:"1",
            bautdanmurroda:"1",
            kondisidanukuranban:"1",
            perisaikolong:"1",
            tutuptangki:"1",
            lamputandabatassamping:"1",
            rodakelima:"1",
            kakipenompangtempelan:"1",
            alatperangkaitempelan:"1",
        };
        state.dalam = {
            ruangkemudi:"1",
            tempatduduk:"1",
            dashboard:"1",
            speedometer:"1",
            instrumenpanel:"1",
            alatcontrollampu:"1",
            tabirmatahari:"1",
            pandangankedepan:"1",
            rodakemudi:"1",
            batangkemudi:"1",
            sabukkeselamatan:"1",
            perlengkapan:"1",
            remparkir:"1",
            pedalremkaki:"1",
            remgasbuang:"1",
            sistemhampa:"1",
        };
        state.laikjalan = {
            alatuji_kedalamanalurban:"0",
            status_alurban:"1",
        };
    },

    CLEAR_FILTER(state) {
        state.filter = {
            tgl: ""
        };
    },

    CLEAR_CATATAN(state){
        state.catatan = {
            nama : "",
            hasiluji: "",
            alasan : [],
            rekomendasi : "",
            pos:"",
        };
    },
};

export const actions = {
    getPendaftarans({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        let status = '';
        return new Promise((resolve, reject) => {
            PosService.getPendaftarans(state.page,state.filter.tgl,state.posisi,status,search)
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
    getPendaftaransLulus({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        let status = '1';
        return new Promise((resolve, reject) => {
            PosService.getPendaftarans(state.page,state.filter.tgl,state.posisi,status,search)
                .then(response => {
                    commit("ASSING_DATALULUS", response.data.result);
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
    getPendaftaransTLulus({ commit, state }, payload) {
        let search = typeof payload != "undefined" ? payload : "";
        let status = '0';
        return new Promise((resolve, reject) => {
            PosService.getPendaftarans(state.page,state.filter.tgl,state.posisi,status,search)
                .then(response => {
                    commit("ASSING_DATATLULUS", response.data.result);
                    resolve(response.data);
                    console.log('response.data.result')
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
    getIdentitaskendaraan({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PosService.getIdentitaskendaraan(payload)
                .then(response => {
                    commit("ASSIGN_FORM", response.data.result);
                    resolve(response.data);
                    // console.log("run edit");
                })
                .catch(error => {
                    // console.log(error.message);
                });
        });
    },
    getAlasan({ commit, state }) {
        return new Promise((resolve, reject) => {
            PosService.getAlasan(state.catatan.nama)
                .then(response => {
                    commit("ASSING_ALASAN", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                });
        });
    },
    getCatatan({ commit, state }, id) {
        return new Promise((resolve, reject) => {
            PosService.getCatatan(id,state.catatan.nama)
                .then(response => {
                    if(response.data.result == 'kosong'){

                    }else{
                        commit("ASSIGN_CATATAN", response.data.result);
                    }
                    resolve(response.data);
                })
                .catch(error => {
                });
        });
    },
    submitCatatan({ dispatch, commit, state }, id) {
        state.catatan.pendaftaran_id = id;
        return new Promise((resolve, reject) => {
            PosService.postCatatan(state.catatan)
                .then(response => {
                    commit("ASSIGN_CATATAN", response.data.result);
                    resolve(response.data);
                })
                .catch(error => {
                });
        });
    },
    submitPos({ dispatch, commit, state }, id) {
        state.pendaftaran.pos1 = state.status_lulusuji;
        state.identifikasi.pendaftaran_id = id;
        state.dimensi.pendaftaran_id = id;
        state.kanan.pendaftaran_id = id;
        state.kiri.pendaftaran_id = id;
        state.depan.pendaftaran_id = id;
        state.belakang.pendaftaran_id = id;
        state.dalam.pendaftaran_id = id;
        state.laikjalan.pendaftaran_id = id;
        var data = [];
        data.push(id, state.identitaskendaraan, state.identifikasi, state.dimensi, state.kanan, state.kiri);
        data.push(state.depan, state.belakang, state.dalam, state.laikjalan, state.pendaftaran)
        return new Promise((resolve, reject) => {
            PosService.postPos(data,state.posisi)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    console.log(error);
                    // }
                });
        });
    },
    editPos({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            PosService.getPos(payload,state.posisi)
                .then(response => {
                    if(response.data.result.notnkb == "0" || response.data.result.notnkb == "1"){
                        commit("ASSIGN_DIMENSI", response.data.result);
                        commit("ASSIGN_IDENTIFIKASI", response.data.result);
                        commit("ASSIGN_DEPAN", response.data.result);
                        commit("ASSIGN_KANAN", response.data.result);
                        commit("ASSIGN_BELAKANG", response.data.result);
                        commit("ASSIGN_KIRI", response.data.result);
                        commit("ASSIGN_DALAM", response.data.result);
                        commit("ASSIGN_BAWAH", response.data.result);
                        commit("ASSIGN_LAIKJALAN", response.data.result);
                    }
                    commit("ASSIGN_PENDAFTARAN", response.data.result);
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

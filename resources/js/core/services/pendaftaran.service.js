import ApiService from "./api.service.js";
export default {
    getPendaftaranPage(page = 1) {
        return ApiService.get("/pendaftaran?page=" + page);
    },
    getPendaftarans(page, tgl, search) {
        return ApiService.get(`/pendaftaran?page=${page}&t=${tgl}&q=${search}`);
    },
    getPendaftaran(id) {
        return ApiService.get(`/pendaftaran/${id}`);
    },
    getIdentitaskendaraanNouji(nouji) {
        return ApiService.get(`/identitaskendaraan/nouji?nouji=${nouji}`);
    },
    getCheckNouji(nouji) {
        return ApiService.get(`/identitaskendaraan/check?nouji=${nouji}`);
    },
    getNokendaraan(nokendaraan) {
        return ApiService.get(
            `/identitaskendaraan/nokendaraan?nokendaraan=${nokendaraan}`,
        );
    },
    getNorangka(norangka) {
        return ApiService.get(
            `/identitaskendaraan/norangka?norangka=${norangka}`,
        );
    },
    getKotas() {
        return ApiService.get("/kota/name");
    },
    getKecamatans(kota) {
        return ApiService.get(`/kecamatan/name?kota=${kota}`);
    },
    getKelurahans(kota, kecamatan) {
        return ApiService.get(
            `/kelurahan/name?kota=${kota}&kecamatan=${kecamatan}`,
        );
    },
    getKodewilayahs() {
        return ApiService.get(`/bluecore?p=area`);
    },
    getMereks() {
        return ApiService.get(`/bluecore?p=merk`);
    },    
    getTipes(id) {
        return ApiService.get(`/bluecore?p=variantype&i=${id}`);
    },    
    getVarians(id) {
        return ApiService.get(`/bluecore?p=varian&i=${id}`);
    },
    getJenis() {
        return ApiService.get(`/bluecore?p=vehicletype`);
    },
    getSubJenis(id) {
        return ApiService.get(`/bluecore?p=subvehicletype&i=${id}`);
    },
    getJeniskendaraan() {
        return ApiService.get("/jeniskendaraan/name");
    },
    getKodepenerbitans() {
        return ApiService.get("/kodepenerbitans/name");
    },
    getKelasJalans() {
        return ApiService.get(`/bluecore?p=kelasjalan`);
    },
    getFuels() {
        return ApiService.get(`/bluecore?p=fuel`);
    },
    getVTA(search) {
        return ApiService.get(`/vta?s=${search}`);
    },
    sendNU(id,nouji,search,keyword) {
        return ApiService.get(`/bluecore?p=insertexam&i=${id}&n=${nouji}&s=${search}&k=${keyword}`);
    },
    checkUJI(nouji,search) {
        return ApiService.get(`/bluecore?p=checkpengujiankeluar&n=${nouji}&s=${search}`);
    },
    sendMU(id,nouji,search,keyword) {
        return ApiService.get(`/bluecore?p=insertexam&i=${id}&n=${nouji}&s=${search}&k=${keyword}`);
    },
    postPendaftaran(pendaftaran) {
        return ApiService.post("/pendaftaran", pendaftaran);
    },
    postPendaftaran2(pendaftaran) {
        return ApiService.post("/pendaftaran2", pendaftaran);
    },
    deletePendaftaran(id) {
        return ApiService.delete(`/pendaftaran/${id}`);
    },
    updatePendaftaran(id, data) {
        return ApiService.put(`/pendaftaran/${id}`, data);
    },
    updateIdentitaskendaraan(id, data) {
        return ApiService.put(`/identitaskendaraan/${id}`, data);
    },
    updateDatakendaraan(id, data) {
        return ApiService.put(`/datakendaraan/${id}`, data);
    },
    setNoSurat() {
        return ApiService.get("/nosurat");
    },
};

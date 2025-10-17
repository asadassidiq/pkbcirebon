import ApiService from "./api.service.js";
export default {
    getDatakendaraanPage(page = 1) {
        return ApiService.get("/datakendaraan?page=" + page);
    },
    getDatakendaraans(page,status,search) {
        return ApiService.get(`/datakendaraan?page=${page}&s=${status}&q=${search}`);
    },
    getPendaftaranDetail(search) {
        return ApiService.get(`/pendaftaran/detail?q=${search}`);
    },
    getTotalDatakendaraan() {
        return ApiService.get("/datakendaraan/total");
    },
    getDatakendaraan(id) {
        return ApiService.get(`/identitaskendaraan/${id}`);
    },
    getRiwayatUji(search) {
        return ApiService.get(`/riwayatuji/${search}`);
    },
    getDetailRiwayatUji(id) {
        return ApiService.get(`/riwayatuji/detail/${id}`);
    },
    getIdentitaskendaraanNouji(nouji) {
        return ApiService.get(`/identitaskendaraan/nouji?nouji=${nouji}`);
    },
    getKodewilayahs() {
        return ApiService.get("/kodewilayah/name");
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
    postDatakendaraan(datakendaraan) {
        return ApiService.post("/datakendaraan", datakendaraan);
    },
    deleteDatakendaraan(id) {
        return ApiService.delete(`/datakendaraan/${id}`);
    },
    updateDatakendaraan(id, data) {
        return ApiService.put(`/datakendaraan/${id}`, data);
    },
};

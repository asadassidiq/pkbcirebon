import ApiService from "./api.service.js";
export default {
    getDatapengujianPage(page = 1) {
        return ApiService.get("/datapengujian?page=" + page);
    },
    getDatapengujians(page,tgl,search) {
        return ApiService.get(`/datapengujian?page=${page}&t=${tgl}&q=${search}`);
    },
    getDatapengujian(id) {
        return ApiService.get(`/datapengujian/${id}`);
    },
    getKodewilayahs() {
        return ApiService.get("/kodewilayah/name");
    },
    getJeniskendaraan() {
        return ApiService.get("/jeniskendaraan/name");
    },
    getMereks() {
        return ApiService.get("/merek/name");
    },
    getKotas() {
        return ApiService.get("/kota/name");
    },
    getKecamatans(kota) {
        return ApiService.get(`/kecamatan/name?kota=${kota}`);
    },
    getKelurahans(kecamatan) {
        return ApiService.get(`/kelurahan/name?kecamatan=${kecamatan}`);
    },
    getTipes() {
        return ApiService.get("/tipe/name");
    },
    postDatapengujian(datapengujian) {
        return ApiService.post("/datapengujian", datapengujian);
    },
    deletedatapengujian(id) {
        return ApiService.delete(`/datapengujian/${id}`);
    },
    updateDatapengujian(id, data) {
        return ApiService.put(`/datapengujian/${id}`, data);
    },
    updateNosertifikat(id, data) {
        return ApiService.put(`/datapengujian/${id}/nosertifikat`, data);
    },
    getNosertifikat(id) {
        return ApiService.get(`/datapengujian/nosertifikat/${id}`);
    },
    setUndoVerif(id) {
        return ApiService.get(`/datapengujian/undoverif/${id}`);
    },
};

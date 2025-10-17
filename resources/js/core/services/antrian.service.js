import ApiService from "./api.service.js";
export default {
    getAntrianPage(page = 1) {
        return ApiService.get("/antrian?page=" + page);
    },
    getAntrians(page,tgl,search) {
        return ApiService.get(`/antrian?page=${page}&t=${tgl}&q=${search}`);
    },
    getAntrian(id) {
        return ApiService.get(`/pendaftaran/${id}`);
    },
    updateAntrian(id, data) {
        return ApiService.put(`/antrian/${id}`, data);
    },
    setAntrian(id, data) {
        return ApiService.get(`/antrian/${id}`, data);
    },
    getBilling(id){
        return ApiService.get(`/transaksi/billing/${id}`);
    },
    getKodewilayahs() {
        return ApiService.get("/kodewilayah/name");
    },
};

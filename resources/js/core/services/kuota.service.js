import ApiService from "./api.service.js";
export default {
    getKuotaPage(page = 1) {
        return ApiService.get("/kuota?page=" + page);
    },
    getKuotas(page,tgl,search) {
        return ApiService.get(`/kuota?page=${page}&t=${tgl}&q=${search}`);
    },
    getKuota(id) {
        return ApiService.get(`/kuota/${id}`);
    },
    postKuota(kuota) {
        return ApiService.post("/kuota", kuota);
    },
    deletekuota(id) {
        return ApiService.delete(`/kuota/${id}`);
    },
    updateKuota(id, data) {
        return ApiService.put(`/kuota/${id}`, data);
    },
};

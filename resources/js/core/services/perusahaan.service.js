import ApiService from "./api.service.js";
export default {
    getPerusahaanPage(page = 1) {
        return ApiService.get("/perusahaan?page=" + page);
    },
    getPerusahaans(page,tipe,search) {
        return ApiService.get(`/perusahaan?page=${page}&t=${tipe}&q=${search}`);
    },
    getPerusahaan(id) {
        return ApiService.get(`/perusahaan/${id}`);
    },
    updatePerusahaan(id, data) {
        return ApiService.put(`/perusahaan/${id}`, data);
    },
    getDatakendaraanOnline(id) {
        return ApiService.get(`/perusahaan/${id}`);
    },
    storeDatakendaraanOnline(data) {
        return ApiService.post(`/perusahaan`, data);
    },
    updateDatakendaraanOnline(id, data) {
        return ApiService.put(`/perusahaan/${id}`, data);
    }
};

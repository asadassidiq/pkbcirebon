import ApiService from "./api.service.js";
export default {
    getPerseoranganPage(page = 1) {
        return ApiService.get("/perseorangan?page=" + page);
    },
    getPerseorangans(page,tipe,search) {
        return ApiService.get(`/perseorangan?page=${page}&t=${tipe}&q=${search}`);
    },
    getPerseorangan(id) {
        return ApiService.get(`/perseorangan/user/${id}`);
    },
    updatePerseorangan(id, data) {
        return ApiService.put(`/perseorangan/${id}`, data);
    },
    getDatakendaraanOnline(id) {
        return ApiService.get(`/perseorangan/${id}`);
    },
    storeDatakendaraanOnline(data) {
        return ApiService.post(`/perseorangan`, data);
    },
    updateDatakendaraanOnline(id, data) {
        return ApiService.put(`/perseorangan/${id}`, data);
    }
};

import ApiService from "./api.service.js";
export default {
    getHariLiburPage(page = 1) {
        return ApiService.get("/harilibur?page=" + page);
    },
    getHariLiburs(page,tgl,search) {
        return ApiService.get(`/harilibur?page=${page}&t=${tgl}&q=${search}`);
    },
    getHariLibur(id) {
        return ApiService.get(`/harilibur/${id}`);
    },
    postHariLibur(harilibur) {
        return ApiService.post("/harilibur", harilibur);
    },
    deleteharilibur(id) {
        return ApiService.delete(`/harilibur/${id}`);
    },
    updateHariLibur(id, data) {
        return ApiService.put(`/harilibur/${id}`, data);
    },
};

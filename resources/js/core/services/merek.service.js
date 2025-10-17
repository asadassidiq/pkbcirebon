import ApiService from "./api.service.js";
export default {
    getMerekPage(page = 1) {
        return ApiService.get("/merek?page=" + page);
    },
    getMereks(page,search) {
        return ApiService.get(`/merek?page=${page}&q=${search}`);
    },
    getMerek(id) {
        return ApiService.get(`/merek/${id}`);
    },
    postMerek(merek) {
        return ApiService.post("/merek", merek);
    },
    deleteMerek(id) {
        return ApiService.delete(`/merek/${id}`);
    },
    updateMerek(id, data) {
        return ApiService.put(`/merek/${id}`, data);
    },
};

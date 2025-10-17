import ApiService from "./api.service.js";
export default {
    getJenisPage(page = 1) {
        return ApiService.get("/jenis?page=" + page);
    },
    getJeniss(page,search) {
        return ApiService.get(`/jenis?page=${page}&q=${search}`);
    },
    getJenis(id) {
        return ApiService.get(`/jenis/${id}`);
    },
    postJenis(jenis) {
        return ApiService.post("/jenis", jenis);
    },
    deleteJenis(id) {
        return ApiService.delete(`/jenis/${id}`);
    },
    updateJenis(id, data) {
        return ApiService.put(`/jenis/${id}`, data);
    },
};

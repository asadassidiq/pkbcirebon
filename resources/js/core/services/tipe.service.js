import ApiService from "./api.service.js";
export default {
    getTipePage(page = 1) {
        return ApiService.get("/tipe?page=" + page);
    },
    getTipes(page,tgl,search) {
        return ApiService.get(`/tipe?page=${page}&t=${tgl}&q=${search}`);
    },
    getTipe(id) {
        return ApiService.get(`/tipe/${id}`);
    },
    postTipe(tipe) {
        return ApiService.post("/tipe", tipe);
    },
    deleteTipe(id) {
        return ApiService.delete(`/tipe/${id}`);
    },
    updateTipe(id, data) {
        return ApiService.put(`/tipe/${id}`, data);
    },
    getMereks() {
        return ApiService.get("/merek/name");
    },
};

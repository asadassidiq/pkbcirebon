import ApiService from "./api.service.js";
export default {
    getTandatanganPage(page = 1) {
        return ApiService.get("/tandatangan?page=" + page);
    },
    getTandatangans(page,search) {
        return ApiService.get(`/tandatangan?page=${page}&q=${search}`);
    },
    getTandatangan(id) {
        return ApiService.get(`/tandatangan/${id}`);
    },
    postTandatangan(tandatangan) {
        return ApiService.post("/tandatangan", tandatangan);
    },
    deletetandatangan(id) {
        return ApiService.delete(`/tandatangan/${id}`);
    },
    updateTandatangan(id, data) {
        return ApiService.put(`/tandatangan/${id}`, data);
    },
    getUsers() {
        return ApiService.get("/user/name");
    },
};

import ApiService from "./api.service.js";
export default {
    getApprovedPage(page = 1) {
        return ApiService.get("/approved?page=" + page);
    },
    getApproveds(page,tgl,search) {
        return ApiService.get(`/approved?page=${page}&t=${tgl}&q=${search}`);
    },
    getApproved(id) {
        return ApiService.get(`/approved/${id}`);
    },
    updateApproved(id, data) {
        return ApiService.put(`/approved/${id}`, data);
    },
};

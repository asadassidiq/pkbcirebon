import ApiService from "./api.service.js";
export default {
    getPendaftaranOnlinePage(page = 1) {
        return ApiService.get("/pendaftaranonline?page=" + page);
    },
    getPendaftaranOnlines(page,tgl,search) {
        return ApiService.get(`/pendaftaranonline?page=${page}&t=${tgl}&q=${search}`);
    },
    getPendaftaranOnline(id) {
        return ApiService.get(`/pendaftaranonline/${id}`);
    },
    postPendaftaranOnline(pendaftaranonline) {
        return ApiService.post("/pendaftaranonline", pendaftaranonline);
    },
    postApprove(approve) {
        return ApiService.post("/pendaftaranonline/approve", approve);
    },
    deletependaftaranonline(id) {
        return ApiService.delete(`/pendaftaranonline/${id}`);
    },
    updatePendaftaranOnline(id, data) {
        return ApiService.put(`/pendaftaranonline/${id}`, data);
    },
    checkKuota(tgl) {
        return ApiService.get(`/kuota/cekkuota1?t=${tgl}`);
    },
};

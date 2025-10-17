import ApiService from "./api.service.js";
export default {
    getPenyerahanPage(page = 1) {
        return ApiService.get("/penyerahan?page=" + page);
    },
    getPenyerahans(page,tgl,search) {
        return ApiService.get(`/penyerahan?page=${page}&t=${tgl}&q=${search}`);
    },
    getPenyerahanSudah(page,tgl,search) {
        return ApiService.get(`/penyerahan/sudah?page=${page}&t=${tgl}&q=${search}`);
    },
    getPenyerahan(id) {
        return ApiService.get(`/penyerahan/${id}`);
    },
    updatePenyerahan(id, data) {
        return ApiService.put(`/penyerahan/${id}`, data);
    },
};

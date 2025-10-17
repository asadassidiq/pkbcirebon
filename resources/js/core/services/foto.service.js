import ApiService from "./api.service.js";
export default {
    getPendaftaranPage(page = 1) {
        return ApiService.get("/foto?page=" + page);
    },
    getPendaftarans(page,tgl,search) {
        return ApiService.get(`/foto?page=${page}&t=${tgl}&q=${search}`);
    },
    getPendaftaransFoto(page,tgl,search) {
        return ApiService.get(`/foto/terfoto?page=${page}&t=${tgl}&q=${search}`);
    },
};

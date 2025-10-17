import ApiService from "./api.service.js";
export default {
    getAntrianPage(page = 1) {
        return ApiService.get("/regonline?page=" + page);
    },
    getRegOnlines(page,tgl,search) {
        return ApiService.get(`/regonline?page=${page}&t=${tgl}&q=${search}`);
    },
    getRegOnline(id) {
        return ApiService.get(`/regonline/${id}`);
    },
    getRegOnlineVerif(id) {
        return ApiService.get(`/regonline/verif/${id}`);
    },
    updateRegOnline(id, data) {
        return ApiService.put(`/regonline/${id}`, data);
    },
    getBilling(id){
        return ApiService.get(`/transaksi/billing/${id}`);
    }
};

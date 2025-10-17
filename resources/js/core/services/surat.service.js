import ApiService from "./api.service.js";
export default {
    getPendaftaranPage(page = 1) {
        return ApiService.get("/surat?page=" + page);
    },
    getPendaftarans(page,tgl,status,jenis,search) {
        return ApiService.get(`/surat?page=${page}&t=${tgl}&s=${status}&j=${jenis}&q=${search}`);
    },
    getPendaftaran(id) {
        return ApiService.get(`/surat/${id}`);
    },
    checkTTE(id) {
        return ApiService.get(`/surat/checktte/${id}`);
    },
    sendDataPendaftaran(id,nouji,search,keyword){
        return ApiService.get(`/bluecore?p=insertexam&i=${id}&n=${nouji}&s=${search}&k=${keyword}`);
    }
};

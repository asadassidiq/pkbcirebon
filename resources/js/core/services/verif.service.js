import ApiService from "./api.service.js";
export default {
    getPendaftaranPage(page = 1) {
        return ApiService.get("/verif?page=" + page);
    },
    getPendaftarans(page,tgl,search) {
        return ApiService.get(`/verif?page=${page}&t=${tgl}&q=${search}`);
    },
    getPendaftaransLulus(page,tgl,search) {
        return ApiService.get(`/verif/lulus?page=${page}&t=${tgl}&q=${search}`);
    },
    getPendaftaransTLulus(page,tgl,search) {
        return ApiService.get(`/verif/tlulus?page=${page}&t=${tgl}&q=${search}`);
    },
    getHasilUji(page,tgl,search) {
        return ApiService.get(`/hasiluji?page=${page}&t=${tgl}&q=${search}`);
    },
    getVerif(id) {
        return ApiService.get(`/verif/${id}`);
    },
    getIdentitaskendaraan(id) {
        return ApiService.get(`/identitaskendaraan/pos/${id}`);
    },
    postVerif(verif) {
        return ApiService.post("/verif", verif);
    },
    deleteVerif(id) {
        return ApiService.delete(`/verif/${id}`);
    },
    updateVerif(id, data) {
        return ApiService.put(`/verif/${id}`, data);
    },
    approveSurat(id, data) {
        return ApiService.put(`/verif/approvesurat/${id}`, data);
    },
    approvingSurat(id, data) {
        return ApiService.put(`/surat/approving/${id}`, data);
    },
    ulangiFoto(id) {
        return ApiService.put(`/pendaftaran/ulangifoto/${id}`);
    },

    getPendaftaranPageVerif2(page = 1) {
        return ApiService.get("/verif/verif2?page=" + page);
    },
    getPendaftaransVerif2(page,tgl,search) {
        return ApiService.get(`/verif/verif2?page=${page}&t=${tgl}&q=${search}`);
    },
    getPendaftaransLulusVerif2(page,tgl,search) {
        return ApiService.get(`/verif/lulusverif2?page=${page}&t=${tgl}&q=${search}`);
    },
    postVerif2(verif2) {
        return ApiService.post("/verif/verif2", verif2);
    },
    cekkuota(){
        return ApiService.get("/kuota/cekkuota");
    },
    getCatatanPos(id) {
        return ApiService.get(`/catatan/pos/${id}`);
    },
};

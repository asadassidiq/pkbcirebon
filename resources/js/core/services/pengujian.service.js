import ApiService from "./api.service.js";
export default {
  getPendaftaranPage(page = 1) {
    return ApiService.get("/pengujian?page=" + page);
  },
  getPendaftarans(page, tgl, ps, status, search) {
    return ApiService.get(
      `/pengujian?page=${page}&t=${tgl}&ps=${ps}&st=${status}&q=${search}`
    );
  },
  getPos(id, ps) {
    return ApiService.get(`/pengujian/${id}?ps=${ps}`);
  },
  getIdentitaskendaraan(id, ps) {
    return ApiService.get(`/identitaskendaraan/pos/${id}?ps=${ps}`);
  },
  postPos(data, ps) {
    return ApiService.post(`/pengujian?ps=${ps}`, data);
  },
  getCatatan(id, nama) {
    return ApiService.get(`/catatan/name/${id}?nama=${nama}`);
  },
  getAlasan(item) {
    return ApiService.get(`/catatan/alasan?item=${item}`);
  },
  postCatatan(catatan) {
    return ApiService.post("/catatan", catatan);
  },
};

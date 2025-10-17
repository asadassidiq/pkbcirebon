import ApiService from "./api.service.js";
export default {
    getMonitoringsPage(page = 1) {
        return ApiService.get("/monitoring?page=" + page);
    },
    getMonitorings(page,tgl,search) {
        return ApiService.get(`/monitoring?page=${page}&t=${tgl}&q=${search}`);
    },
};

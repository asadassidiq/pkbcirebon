import ApiService from "./api.service.js";
export default {
    getUserPage(page = 1) {
        return ApiService.get("/user?page=" + page);
    },
    getUsers(page,tgl,search) {
        return ApiService.get(`/user?page=${page}&t=${tgl}&q=${search}`);
    },
    getUser(id) {
        return ApiService.get(`/user/${id}`);
    },
    postUser(user) {
        return ApiService.post("/user", user);
    },
    deleteuser(id) {
        return ApiService.delete(`/user/${id}`);
    },
    updateUser(id, data) {
        return ApiService.put(`/user/${id}`, data);
    },
};

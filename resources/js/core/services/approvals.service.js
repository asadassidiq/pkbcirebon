import ApiService from "./api.service";

export default {
  getPendingApprovalRequests(params) {
    return ApiService.get(
      `/datakendaraan/approvals/pending?tgl=${new Date(
        params.tgl
      ).toISOString()}&status=${params.status}`
    );
  },

  getRejectedApprovalRequests() {
    return ApiService.get("/datakendaraan/approvals/rejected");
  },

  getApprovedApprovalRequests() {
    return ApiService.get("/datakendaraan/approvals/approved");
  },

  getApprovalRequestDetails(id) {
    return ApiService.get(`/datakendaraan/approvals/${id}`);
  },

  approveDatakendaraanUpdate(id) {
    return ApiService.post(`/datakendaraan/approvals/${id}/approve`);
  },

  rejectDatakendaraanUpdate(id, params) {
    return ApiService.post(`/datakendaraan/approvals/${id}/reject`, params);
  },
};

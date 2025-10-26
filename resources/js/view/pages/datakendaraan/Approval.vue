<template>
    <div class="card card-custom">
        <div class="card-header">
            <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon2-lorry text-primary"></i>
                </span>
                <h3 class="card-label">Permintaan Perubahan Data</h3>
            </div>
            <div class="card-toolbar">
                <div class="row">
                    <div class="col-4">
                        <!-- <b-form-datepicker id="tgl-picker" v-model="filter.tgl" locale="id" dropleft /> -->
                        <datepicker input-class="form-control" v-model="filter.tgl" :language="id"></datepicker>
                    </div>
                    <div class="col-4">
                        <select class="form-control" v-model="filter.status" @change="handleChangeStatus">
                            <option value="pending">Menunggu</option>
                            <option value="rejected">Ditolak</option>
                            <option value="approved">Disetujui</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <a class="btn btn-sm btn-icon btn-light-info mr-2" @click.prevent="reload"
                            title="reload data"><i class="flaticon2-reload"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive" v-if="approvalRequests && approvalRequests.length > 0">
                <table class="table table-head-custom table-vertical-center">
                    <thead>
                        <tr>
                            <th>No Uji</th>
                            <th>No Kendaraan</th>
                            <th>Requested By</th>
                            <th>Status</th>
                            <th>Requested At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="request in approvalRequests" :key="request.id">
                            <td>{{ request.datakendaraan.identity_taskendaraan.nouji }}</td>
                            <td>{{ request.datakendaraan.identity_taskendaraan.noregistrasikendaraan }}</td>
                            <td>{{ request.requested_by ? request.requested_by.name : 'N/A' }}</td>
                            <td>
                                <b-badge variant="success" v-if="request.status == 'approved'">
                                    <template #badge>
                                        <span>Disetujui</span>
                                    </template>
                                    <span>Disetujui</span>
                                </b-badge>
                                <b-badge variant="danger" v-else-if="request.status == 'rejected'">
                                    <template #badge>
                                        <span>Ditolak</span>
                                    </template>
                                    <span>Ditolak</span>
                                </b-badge>
                                <b-badge variant="warning" v-else-if="request.status == 'pending'">
                                    <template #badge>
                                        <span>Menunggu</span>
                                    </template>
                                    <span>Menunggu</span>
                                </b-badge>
                                <b-badge variant="secondary" v-else>
                                    <template #badge>
                                        <span>Unknown</span>
                                    </template>
                                    <span>Unknown</span>
                                </b-badge>
                            </td>
                            <td>{{ (new Date(request.created_at)).toLocaleDateString('id-ID', {
                                dateStyle: 'medium',
                            }) }}</td>
                            <td>
                                <!-- Actions buttons will go here -->
                                <button class="btn btn-sm btn-primary mr-2" @click="toggleDetail(request.id)">
                                    Details
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else class="text-center mt-5">
                Tidak ada permintaan yang belum disetujui.
            </div>
        </div>
        <b-modal ref="diff-viewer-modal" title="Detail Perubahan" size="xl" hide-footer>
            <perfect-scrollbar class="offcanvas-content pr-5 mr-n5 scroll"
                style="max-height: 75vh; position: relative;">

                <DiffViewer :original-data="selectedOriginalData" :proposed-data="selectedProposedData"
                    :keysLabel="keysLabel" />
            </perfect-scrollbar>
            <div class="text-right mt-2" v-if="canApprove">
                <b-button variant="primary" @click="approveRequest(selectedSchemaID)">
                    <i class="fa fa-check-circle"></i> Setujui
                </b-button>
                <b-button variant="danger" @click="() => $refs['reject-diff-modal'].toggle()">
                    <i class="fa fa-times-circle"></i> Tolak
                </b-button>
            </div>
            <b-modal ref="reject-diff-modal" id="reject-diff-modal" title="Detail Perubahan"
                @ok="submitReject(selectedSchemaID)">
                <div class="form-group">
                    <label for>Alasan Penolakan</label>
                    <textarea class="form-control" v-model="rejectNotes" rows="3"></textarea>
                </div>
            </b-modal>
        </b-modal>
    </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import DiffViewer from './DiffViewer.vue';
import datepicker from 'vuejs-datepicker';
import Swal from 'sweetalert2';
import { mapActions, mapMutations, mapState } from 'vuex/dist/vuex.common.js';
import { id } from 'vuejs-datepicker/dist/locale';

export default {
    name: 'DatakendaraanApproval',
    components: {
        DiffViewer,
        datepicker,
    },
    data() {
        return {
            loading: false,
            error: null,
            id: id,
        };
    },
    mounted() {
        this.fetchApprovalRequests(this.filter);

        this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Data Kendaraan" },
            { title: "Permintaan Perubahan " },
        ]);
    },
    methods: {
        ...mapActions('approvals', [
            'fetchApprovalRequests',
            'viewDetails',
            'approveRequest',
            'rejectRequest',
        ]),
        ...mapMutations('approvals', [
            'REWRITE_NOTES',
        ]),
        toggleDetail(id) {
            this.viewDetails(id);
            this.$refs['diff-viewer-modal'].show();
        },
        submitReject(id) {
            this.rejectRequest(id)
            this.$refs['reject-diff-modal'].toggle();
            this.$refs['diff-viewer-modal'].toggle();
        },
        handleChangeStatus(status) {
            this.$store.commit("approvals/SET_STATUS", status);
        },
        handleChangeTgl(tgl) {
            this.$store.commit("approvals/SET_TGL", tgl);
        },
        reload() {
            this.fetchApprovalRequests(this.filter);
        },
    },
    computed: {
        ...mapState('approvals', {
            approvalRequests: state => state.approvalRequests,
            selectedSchemaID: state => state.selectedSchemaID,
            selectedProposedData: state => state.selectedProposedData,
            selectedOriginalData: state => state.selectedOriginalData,
            keysLabel: state => state.keysLabel,
            notes: state => state.rejectNotes,
            filter: state => state.filter,
        }),
        ...mapState('profile', {
            user: state => state.user_personal_info,
        }),
        canApprove() {
            const userRole = this.$store.state.profile.user_personal_info.role;
            const target = this.approvalRequests.find(ar => ar.id == this.selectedSchemaID);
            const isModifyable = !target ? false : target.status == 'pending';

            return ['KEPALA', 'ADMIN'].includes(userRole) && isModifyable;
        },
        rejectNotes: {
            get() {
                return this.notes;
            },
            set(val) {
                this.REWRITE_NOTES(val);
            },
        }
    }
};
</script>
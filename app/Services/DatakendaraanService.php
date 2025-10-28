<?php

namespace App\Services;

use App\Models\Datakendaraan;
use App\Models\DatakendaraanApprovalRequest;
use App\Repositories\DatakendaraanRepository;
use App\Repositories\IdentitaskendaraanRepository;
use App\Traits\apiJsonReturnTrait;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class DatakendaraanService
{
    protected $repoDatakendaraan, $repoIden;
    use apiJsonReturnTrait;

    public function __construct(
        DatakendaraanRepository $repoDatakendaraan,
        IdentitaskendaraanRepository $repoIden,
    ) {
        $this->repoIden = $repoIden;
        $this->repoDatakendaraan = $repoDatakendaraan;
    }

    public function getAllDatakendaraan()
    {
        return $this->repoDatakendaraan->getAll();
    }

    public function getDatakendaraan($id)
    {
        return $this->repoDatakendaraan->getDatakendaraan($id);
    }

    public function getTotalDatakendaraan()
    {
        return $this->repoDatakendaraan->getTotalDatakendaraan();
    }

    public function getDatakendaraanid($id)
    {
        return $this->repoDatakendaraan->getDatakendaraanid($id);
    }

    public function getDatakendaraanidentitas($id)
    {
        return $this->repoDatakendaraan->getDatakendaraanidentitas($id);
    }

    public function getKartuInduk($id)
    {
        return $this->repoDatakendaraan->getKartuInduk($id);
    }

    public function getListPengujian($id)
    {
        return $this->repoDatakendaraan->getListPengujian($id);
    }

    public function getListNU($id)
    {
        return $this->repoDatakendaraan->getListNU($id);
    }

    public function getListMU($id)
    {
        return $this->repoDatakendaraan->getListMU($id);
    }

    public function getListCatatan($id)
    {
        return $this->repoDatakendaraan->getListCatatan($id);
    }

    public function create($request)
    {
        $checkData = $this->repoIden->checkNouji($request->nouji);
        if ($checkData === true) {
            return $this->error(false, 'no uji sudah dipakai kendaraan lain', '', 422);
        }

        $checkNorangka = $this->repoIden->checkNorangka($request->nouji, $request->norangka);
        if ($checkNorangka === true) {
            return $this->error(false, 'no rangka sudah dipakai kendaraan lain', '', 422);
        }

        $dataIden = $this->repoIden->createIdentitaskendaraan($request->all());
        if ($dataIden) {
            $request->merge([
                'identitaskendaraan_id'     => $dataIden->id,
            ]);
            $dataKendaraan = $this->repoDatakendaraan->createDatakendaraan($request->all());
            return $this->success(true, 'Success Create', '', 200);
        } else {
            return $this->error(false, 'something errors', '', 422);
        }
    }

    protected function findByUUID($uuid)
    {
        $query = $this->repoDatakendaraan->getQueryIdentity();
        return $query->where('uuid', $uuid)->first();
    }

    public function update($request, $id)
    {
        try {
            $queryDatakendaraan = $this->repoDatakendaraan->getQueryDataKendaraan();

            $datakendaraan = Datakendaraan::find($id);

            if (!$datakendaraan) {
                $identity = $this->findByUUID($id);

                $datakendaraan = $queryDatakendaraan->where('identitaskendaraan_id', $identity->id)->first();
            }

            $originalData = $datakendaraan->toArray();
            $proposedData = $request->all();

            $approvalRequest = DatakendaraanApprovalRequest::create([
                'datakendaraan_id' => $datakendaraan->id,
                'requested_by_user_id' => Auth::id(),
                'original_data' => json_encode($originalData),
                'proposed_data' => json_encode($proposedData),
                'status' => 'pending',
            ]);

            return [true, $approvalRequest];
        } catch (\Exception $e) {
            Log::error(json_encode([
                'type' => 'error',
                'context' => 'DatakendaraanService::update',
                'message' => $e->getMessage(),
                'data' => $request->all(),
                'details' => [
                    'line' => $e->getLine(),
                    'file' => $e->getFile(),
                    'trace' => $e->getTraceAsString(),
                ],
            ]));
            return [false, $e->getMessage()];
        }
    }

    public function delete($id)
    {
        return $this->repoDatakendaraan->deleteDatakendaraan($id);
    }

    public function riwayatUji($id)
    {
        return $this->repoDatakendaraan->riwayatUji($id);
    }

    public function detailRiwayatuji($id)
    {
        return $this->repoDatakendaraan->detailRiwayatuji($id);
    }

    public function updateData()
    {
        return $this->repoDatakendaraan->updateData();
    }

    public function updateData2()
    {
        return $this->repoDatakendaraan->updateData2();
    }

    public function getApprovalRequest($tgl, $status)
    {
        return DatakendaraanApprovalRequest::with(['datakendaraan.identityTaskendaraan', 'requestedBy'])
            ->where('created_at', 'LIKE', "$tgl%")
            ->where('status', $status)
            ->get();
    }

    public function getApprovalRequestDetails($id)
    {
        return DatakendaraanApprovalRequest::with(['datakendaraan', 'requestedBy'])
            ->findOrFail($id);
    }

    public function approveDatakendaraanUpdate($id)
    {
        try {
            $approvalRequest = DatakendaraanApprovalRequest::findOrFail($id);

            if ($approvalRequest->status !== 'pending') {
                return [false, "Status permintaan pembaruan data kendaraan tidak berlaku"];
            }

            $datakendaraan = Datakendaraan::findOrFail($approvalRequest->datakendaraan_id);
            $datakendaraan->update(json_decode($approvalRequest->proposed_data, true));
            $datakendaraan->save();

            $approvalRequest->status = 'approved';
            $approvalRequest->approved_by_user_id = Auth::id();
            $approvalRequest->save();

            return [true, $datakendaraan];
        } catch (\Exception $e) {
            Log::error(json_encode([
                'type' => 'error',
                'context' => 'DatakendaraanService::update',
                'message' => $e->getMessage(),
                'data' => $approvalRequest->all(),
                'details' => [
                    'line' => $e->getLine(),
                    'file' => $e->getFile(),
                    'trace' => $e->getTraceAsString(),
                ],
            ]));
            return [false, $e->getMessage()];
        }
    }

    public function rejectDatakendaraanUpdate($id, $notes)
    {
        $approvalRequest = DatakendaraanApprovalRequest::findOrFail($id);

        if ($approvalRequest->status !== 'pending') {
            return $this->error(false, 'Approval request is not pending.', null, 400);
        }

        $approvalRequest->status = 'rejected';
        $approvalRequest->approved_by_user_id = Auth::id();
        $approvalRequest->approval_notes = $notes;
        $approvalRequest->save();

        return $this->success(true, 'Datakendaraan update request rejected.', $approvalRequest, 200);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\PendaftaranOnlineService;
use App\Http\Requests\PendaftaranOnline\PendaftaranStoreRequest;
use App\Http\Requests\PendaftaranOnline\PendaftaranApproveRequest;
use Barryvdh\DomPDF\Facade\Pdf;

class PendaftaranOnlineController 
{
    use apiJsonReturnTrait;
    protected $pendaftaranOnlineService;

    public function __construct(PendaftaranOnlineService $pendaftaranOnlineService)
    {
        $this->pendaftaranOnlineService = $pendaftaranOnlineService;
    }
    public function index()
    {
        $data = $this->pendaftaranOnlineService->getAll();
        return $this->returnJson($data);
    }

    public function store(Request $request)
    {
        $data = $this->pendaftaranOnlineService->create($request);
        return $data;
    }

    public function approve(PendaftaranApproveRequest $request)
    {
        $data = $this->pendaftaranOnlineService->approve($request);
        return $data;
    }

    public function getPendaftaranDetail($id)
    {
        $data = $this->pendaftaranOnlineService->getPendaftaranDetail($id);
        return $this->returnJson($data);
    }

    // public function update(PendaftaranUpdateRequest $request, $id)
    // {
    //     $data = $this->pendaftaranOnlineService->update($request, $id);
    //     return $this->returnJson($request, 'Pendaftaran Online Updated');
    // }
    public function cetak($id)
    {

        $path_logoKab = public_path() . '/img/kota.png';
        $path_logoDishub = public_path() . '/img/dishub.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        $logodishub = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoDishub));

        $data = $this->pendaftaranOnlineService->getPendaftaranDetail($id);

        $data = [
            'data' => $data,
            'logokab'    => $logokab,
            'logodishub'   => $logodishub,
        ];
        $pdf = PDF::loadView('cetak.bukti-pdf', $data);
        return $pdf->stream('BUKTI PESANAN PENDAFTARAN UJI.pdf');
    }
}

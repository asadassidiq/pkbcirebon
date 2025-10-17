<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\PendaftaranService;

class OnlineController extends Controller
{
    use apiJsonReturnTrait;
    protected $pendaftaranService;

    public function __construct(PendaftaranService $pendaftaranService)
    {
        $this->pendaftaranService = $pendaftaranService;
    }
    public function index()
    {
        $data = $this->pendaftaranService->getOnline();
        return $this->returnJson($data);
    }

    public function getPendaftaran($id)
    {
        $data = $this->pendaftaranService->getPendaftaran($id);
        return $this->returnJson($data);
    }

    public function update(Request $request, $id)
    {
        $data = $this->pendaftaranService->update($request, $id);
        // $data = $request->jenispendaftaran;
        return $this->returnJson($data, 'Pendaftaran Updated');
    }

    public function cetak($id)
    {
        $kendaraan = $this->pendaftaranService->getPendaftaran($id);
        return view('cetak.permohonan', compact('kendaraan'));
    }
}

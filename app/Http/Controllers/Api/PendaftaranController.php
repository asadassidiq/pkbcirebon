<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\PendaftaranService;
use App\Http\Requests\Pendaftaran\PendaftaranStoreRequest;
use App\Http\Requests\Pendaftaran\PendaftaranStore2Request;
use App\Http\Requests\Pendaftaran\PendaftaranUpdateRequest;
use App\Http\Requests\Pendaftaran\PendaftaranUpdate2Request;
use App\Http\Requests\Penyerahan\PenyerahanStoreRequest;
use Barryvdh\DomPDF\Facade\Pdf;
// use PDF;
use App\Traits\CryptHelper;

use Illuminate\Support\Str;

class PendaftaranController extends Controller
{
    use apiJsonReturnTrait;
    protected $pendaftaranService;

    public function __construct(PendaftaranService $pendaftaranService)
    {
        $this->pendaftaranService = $pendaftaranService;
    }

    public function index()
    {
        $data = $this->pendaftaranService->getAllPendaftaran();
        return $this->returnJson($data);
    }

    public function getAllPenyerahan()
    {
        $data = $this->pendaftaranService->getAllPenyerahan();
        return $this->returnJson($data);
    }

    public function Monitor()
    {
        return view('monitoring');
    }

    public function getMonitoring()
    {
        $data = $this->pendaftaranService->getMonitoring();
        return response()->json([
            'data'  => $data,
        ], '200');;
    }

    public function getPendaftaran($id)
    {
        $data = $this->pendaftaranService->getPendaftaran($id);
        return $this->returnJson($data);
    }

    public function getPenyerahan($id)
    {
        $data = $this->pendaftaranService->getPenyerahan($id);
        return $this->returnJson($data);
    }

    public function getPendaftaranDetail()
    {
        $data = $this->pendaftaranService->getPendaftaranDetail();
        return $this->returnJson($data);
    }

    public function approveOnline($id){
        $data = $this->pendaftaranService->approveOnline($id);
        return $this->returnJson(($data));
    }

    public function store(PendaftaranStoreRequest $request)
    {
        $data = $this->pendaftaranService->create($request);
        return $data;
    }

    public function update(PendaftaranUpdateRequest $request, $id)
    {
        $data = $this->pendaftaranService->update($request, $id);
        return $data;
    }

    public function getApproved($id)
    {
        $data = $this->pendaftaranService->getApproved($id);
        return $this->returnJson($data);
    }

    public function getAllApproved()
    {
        $data = $this->pendaftaranService->getAllApproved();
        return $this->returnJson($data);
    }

    public function updateApproved(Request $request, $id)
    {
        $key = 'solusiteknikindonesiaxsimbok';
        $user = auth()->user();
        $decrypted = CryptHelper::decrypt($user->ap, $key);
        $checkPs = $user->username . 'approvedok';
        if ($checkPs !== $decrypted) {
            if ($request->expectsJson()) {
                return response()->json([
                    'status' => 403,
                    'message' => 'Akses ditolak. Anda tidak memiliki izin.',
                ], 403);
            }
            // abort(403, 'Anda tidak memiliki akses ke halaman ini.');
        }
        $data = $this->pendaftaranService->updateApproved($request, $id);
        return $this->returnJson($data);
    }

    public function store2(PendaftaranStore2Request $request)
    {
        $data = $this->pendaftaranService->create2($request);
        return $data;
    }

    public function storePenyerahan(Request $request, $id)
    {
        $data = $this->pendaftaranService->createPenyerahan($request, $id);
        return $this->returnJson($data, 'Success');
    }

    public function ulangiFoto($id)
    {
        $data = $this->pendaftaranService->ulangiFoto($id);
        return $this->returnJson($data, 'Ulangi Foto');
    }

    public function delete($id)
    {
        $data = $this->pendaftaranService->delete($id);
        return $this->returnJson('', 'Pendaftaran Deleted');
    }

    public function cetak($id)
    {
        $kendaraan = $this->pendaftaranService->getPendaftaran($id);

        $qr = $kendaraan['uuid'];
        if ($qr === NULL) {
            $base64 = '';
        } else {
            $base64 = '';
        }
        $data = [
            'kendaraan' => $kendaraan,
            'base64'    => $base64,
        ];
        $pdf = PDF::loadView('cetak.permohonan-pdf', $data);
        return $pdf->stream('Surat Permohonan Uji.pdf');
    }


    public function formulir($id)
    {
        $kendaraan = $this->pendaftaranService->getPendaftaran($id);

        $qr = $kendaraan['uuid'];
        if ($qr === NULL) {
            $base64 = '';
        } else {
            $base64 = '';
        }
        $path_logoKab = public_path() . '/img/kota.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        $data = [
            'kendaraan' => $kendaraan,
            'base64'    => $base64,
            'logokab'  => $logokab,
        ];
        $pdf = PDF::loadView('cetak.formulir', $data);
        return $pdf->stream('Formulir Uji.pdf');
    }
}

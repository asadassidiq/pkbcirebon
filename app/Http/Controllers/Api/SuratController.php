<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\RepositoryTrait;
use App\Traits\ApiException;
use App\Services\SuratService;
use App\Models\Kodewilayah;
use App\Models\Tandatangan;
// use PDF;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Http\Requests\Surat\SuratUpdateRequest;
use Illuminate\Support\Facades\Storage;

use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel\ErrorCorrectionLevel;
use Endroid\QrCode\Writer\PngWriter;


class SuratController extends Controller
{
    use apiJsonReturnTrait;
    use RepositoryTrait;
    protected $suratService;

    public function __construct(SuratService $suratService)
    {
        $this->suratService = $suratService;
    }
    public function index()
    {
        $data = $this->suratService->getAllPendaftaran();
        return $this->returnJson($data);
    }

    public function getPendaftaran($id)
    {
        $data = $this->suratService->getPendaftaran($id);
        return $this->returnJson($data);
    }

    public function setNoSurat(){
        $data = $this->suratService->setNoSurat();
        return $this->returnJson($data);
    }

    public function approving(SuratUpdateRequest $request, $id)
    {
        $data = $this->suratService->logTTE($id,$request);
        return $this->returnJson($data);
    }

    public function callback(Request $request,$id){
        // if (!$request->has('id') || !$request->hasFile('file')) {
        if (!$request->has('id') || !$request->hasFile('file')) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Data tidak lengkap (document_id / file)',
            ], 400);
        }
        $data = $this->suratService->callback($request,$id);
        return $this->returnJson($data);
    }

    public function checkTTE($id)
    {
        $data = $this->suratService->checkTTE($id);
        return $data;
    }

    public function cetak($id)
    {
        $path = storage_path('app/public/arsip/signed-'.$id.'.pdf');
        // dd($path);
        if (file_exists($path)) {
            return response()->file($path);
        }
        $path_logoKab = public_path() . '/img/kota.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));

        $kendaraan = $this->suratService->getPendaftaran($id);
        $ttd = Tandatangan::select('users.name','nip','nrp','jabatan','pangkat')->Join('users','users.id','=','tandatangan.user_id')->where('tandatangan.name','Persuratan')->first();
        if($kendaraan){
            if($kendaraan->kodepenerbitans_id == '9'){
                $view = 'cetak.numpanguji-pdf';
                $file = 'Surat Numpang Uji Keluar.pdf';
            }elseif($kendaraan->kodepenerbitans_id == '10'){
                $view = 'cetak.mutasi-pdf';
                $file = 'Surat Mutasi Uji Keluar.pdf';
            }elseif($kendaraan->kodepenerbitans_id == '11'){
                $view = 'cetak.permohonannumpanguji-pdf';
                $file = 'Persetujuan Rekomendasi Numpang Uji.pdf';
            }elseif($kendaraan->kodepenerbitans_id == '12'){
                $view = 'cetak.laporanpemeriksaan-pdf';
                $file = 'Laporan Pemeriksaan Kendaraan.pdf';
            }else{
                return abort(404, 'Page not found1');
            }
            // if($kendaraan->document_id != null || $kendaraan->document_id !=''){
                $shortID = $this->uuidToBase62($id);
                $url = config('app.url').'/arsip/'.$shortID;
                $qrcode = $this->qrcode($url);
            // }
        }else{
            return abort(404, 'Page not found2');
        }
        $data = [
            'kendaraan' => $kendaraan,
            'ttd'       => $ttd,
            'logokab'  => $logokab,
            'qrcode'    => $qrcode
        ];
        $pdf = PDF::loadView($view, $data);
        return $pdf->stream($file)->header('Content-Type','application/pdf');
        // return $dokumen = $this->suratService->dokumen($id)->stream($file)->header('Content-Type','application/pdf');
    }

    public function showArsip($id)
    {
        $dokumen_id = $this->base62ToUuid($id);
        $path = storage_path('app/public/arsip/signed-'.$dokumen_id.'.pdf');
        // dd($path);
        if (!file_exists($path)) {
            abort(404);
        }
        return response()->file($path);
    }

}

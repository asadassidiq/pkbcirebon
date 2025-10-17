<?php

namespace App\Services;

use App\Repositories\SuratRepository;
use App\Models\Tandatangan;
// use PDF;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Traits\apiJsonReturnTrait;
use Illuminate\Support\Facades\Storage;
use App\Traits\RepositoryTrait;
use Illuminate\Support\Facades\Http;

class SuratService
{
    protected $repoSurat;
    use apiJsonReturnTrait;
    use RepositoryTrait;

    public function __construct(SuratRepository $repoSurat)
    {
        $this->repoSurat = $repoSurat;
    }

    public function getAllPendaftaran()
    {
        return $this->repoSurat->getAll();
    }

    public function getPendaftaran($id)
    {
        return $this->repoSurat->getPendaftaran($id);
    }

    public function getLastPendaftaran($id)
    {
        return $this->repoSurat->getLastPendaftaran($id);
    }

    public function setNoSurat(){
        return $this->repoSurat->setNoSurat();
    }

    public function logTTE($id,$respon){
        return $this->repoSurat->logTTE($id,$respon);
    }

    public function checkSurat($id)
    {
        return $this->repoSurat->checkSurat($id);
    }

    public function setDokumenid($id,$documemt_id)
    {
        return $this->repoSurat->setDokumenid($id,$documemt_id);
    }

    public function dokumen($id)
    {
        $path_logoKab = public_path() . '/img/kota.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));

        $kendaraan = $this->repoSurat->getPendaftaran($id);
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
                return false;
            }
            $shortID = $this->uuidToBase62($id);
            $url = config('app.url').'/arsip/'.$shortID;
            $qrcode = $this->qrcode($url);
        }else{
            return false;
        }
        $data = [
            'kendaraan' => $kendaraan,
            'ttd'       => $ttd,
            'logokab'  => $logokab,
            'qrcode'    => $qrcode
        ];
        $pdf = PDF::loadView($view, $data);
        return $pdf->output();
        // return $pdf;
    }

    public function callback($request,$id)
    {
        $file = $request->file('file');
        $path = $file->storeAs('public/arsip', "signed-{$id}.pdf");
        return $this->repoSurat->callback($request,$id);
    }

    public function checkTTE($id)
    {
        // $token = 'J5sp8xeCaZEwWoFqtPB941PoeM6nVKYBIOYQkrP1LpUX';
        $token = 'jfJIi1FsdFIUWXLqjRNV6EYs6aCWMpnbJzQoJsXMkG0';
        $response = Http::withToken($token)->accept('*/*')->get("https://bantarastg.dev.inidev.my.id/internal/v1/tte/signeddocument/" . $id);
        if ($response === false) {
            return $this->error(false, 'Gagal menghubungi layanan TTE', '', 500);
        }

        $contentType = $response->header('Content-Type');
        if (str_contains($contentType, 'application/pdf')) {
            $check = $this->repoSurat->checkTTE($id);
            if ($check != false) {
                if ($response === false) {
                    return $this->error(false, 'Gagal mengunduh file', '', 500);
                }
            }
            $filename = 'signed-' . $check . '.pdf';
            Storage::put("public/arsip/$filename", $response->body()); // simpan ke storage Laravel

            $save =  response()->file(storage_path("app/public/arsip/$filename"));
            return $this->success(true,'Data TTE ditemukan, File berhasil disimpan','',200);
        } else {
            $data = $response->json();
            return $this->error(false, 'Data TTE tidak ditemukan atau response tidak valid', '', 400);
        }

    }

}

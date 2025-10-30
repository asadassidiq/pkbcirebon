<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\DatakendaraanService;
use App\Http\Requests\Datakendaraan\DatakendaraanStoreRequest;
use App\Http\Requests\Datakendaraan\DatakendaraanUpdateRequest;
// use PDF;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Log;
use QrCode;

class DatakendaraanController extends Controller
{
    use apiJsonReturnTrait;
    protected $datakendaraanService;

    public function __construct(DatakendaraanService $datakendaraanService)
    {
        $this->datakendaraanService = $datakendaraanService;
    }
    public function index()
    {
        $data = $this->datakendaraanService->getAllDatakendaraan();
        return $this->returnJson($data);
    }

    public function getTotalDatakendaraan()
    {
        $data = $this->datakendaraanService->getTotalDatakendaraan();
        return $this->returnJson($data);
    }

    public function getDatakendaraan($id)
    {
        $data = $this->datakendaraanService->getDatakendaraan($id);
        return $this->returnJson($data);
    }

    public function store(DatakendaraanStoreRequest $request)
    {
        $data = $this->datakendaraanService->create($request);
        return $this->returnJson($data, 'Datakendaraan Created');
    }

    public function update(DatakendaraanUpdateRequest $request, $id)
    {
        $response = $this->datakendaraanService->update($request, $id);
        if ($response[0]) {
            $responseBack = $this->success(true, 'Approval request created successfully', $response[1], 200);
            return $this->returnJson($responseBack, 'Datakendaraan update request created successfully. Awaiting approval.');
        }

        $responseBack = $this->error(false, 'Gagal membuat permintaan pembaruan data kendaraan.', $response[1], 422);
        return $this->returnJson($responseBack, 'Gagal membuat permintaan pembaruan data kendaraan.', 422);
    }

    public function delete($id)
    {
        $data = $this->datakendaraanService->delete($id);
        // print_r($id);
        return $this->returnJson($data);
    }

    public function detailRiwayatuji($id)
    {
        $data = $this->datakendaraanService->detailRiwayatuji($id);
        return $this->returnJson($data);
    }

    public function riwayatUji($id)
    {
        $data = $this->datakendaraanService->riwayatUji($id);
        return $this->returnJson($data);
    }

    public function updateData()
    {
        $data = $this->datakendaraanService->updateData();
        return $this->returnJson($data);
    }

    public function upLaikJalan()
    {
        $data = $this->datakendaraanService->upLaikJalan();
        return $this->returnJson($data);
    }

    public function updateData2()
    {
        $data = $this->datakendaraanService->updateData2();
        return $this->returnJson($data);
    }

    public function does_url_exists($url)
    {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_NOBODY => true,
            CURLOPT_TIMEOUT => 5,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_SSL_VERIFYPEER => false, // jika URL HTTPS tanpa sertifikat valid
        ]);
        curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        return $httpCode === 200;
    }

    public function showThumbnail($path)
    {
        if (!file_exists($path)) {
            abort(404, 'File not found.');
        }

        return response()->file($path, [
            'Content-Type' => 'image/jpeg',
        ]);
    }

    public function cetak($id)
    {
        $tglcetak = date_create(date("d-m-Y"));
        $tglcetak = date_format($tglcetak, "d-m-Y");
        $data = $this->datakendaraanService->getKartuInduk($id);
        if ($data) {
            $uji  = $this->datakendaraanService->getListPengujian($data->identitaskendaraan_id);
            $nu  = $this->datakendaraanService->getListNU($data->identitaskendaraan_id);
            $mu  = $this->datakendaraanService->getListMU($data->identitaskendaraan_id);
            $catatan  = $this->datakendaraanService->getListCatatan($data->identitaskendaraan_id);
        } else {
            return "Something Error";
        }

        // $qr = env('APP_URL').'/cetak/'.$id.'/kartuinduk';
        // $qrcode = QrCode::format('png')->size(88)->generate($qr,public_path() . '/qrcode/' .$id.'_kartuinduk.png');
        // $path = env('APP_URL') . '/qrcode/'.$id.'_kartuinduk.png';
        // $type = pathinfo($path, PATHINFO_EXTENSION);
        // $data1 = file_get_contents($path);
        // $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data1);
        $base64 = '';

        $pathbg = env('APP_URL') . '/img/kota.png';
        $typebg = pathinfo($pathbg, PATHINFO_EXTENSION);
        $bg = file_get_contents($pathbg);
        $base64bg = 'data:image/' . $typebg . ';base64,' . base64_encode($bg);

        $image1 = public_path('thumbnail_images/' . $data['nouji'] . '-tampakdepan.jpg');
        $image2 = public_path('thumbnail_images/' . $data['nouji'] . '-tampakkanan.jpg');
        $image3 = public_path('thumbnail_images/' . $data['nouji'] . '-tampakbelakang.jpg');
        $image4 = public_path('thumbnail_images/' . $data['nouji'] . '-tampakkiri.jpg');

        $noimage =  env('APP_URL') . '/img/noimage.jpg';
        $typenoimage = pathinfo($noimage, PATHINFO_EXTENSION);
        $imgno = file_get_contents($noimage);
        $base64imgno = 'data:image/' . $typenoimage . ';base64,' . base64_encode($imgno);

        if (file_exists($image1)) {
            $typeimg1 = pathinfo($image1, PATHINFO_EXTENSION);
            $img1 = file_get_contents($image1);
            $base64img1 = 'data:image/' . $typeimg1 . ';base64,' . base64_encode($img1);
        } else {
            $base64img1 = $base64imgno;
        }
        if (file_exists($image2)) {
            $typeimg2 = pathinfo($image2, PATHINFO_EXTENSION);
            $img2 = file_get_contents($image2);
            $base64img2 = 'data:image/' . $typeimg2 . ';base64,' . base64_encode($img2);
        } else {
            $base64img2 = $base64imgno;
        }
        if (file_exists($image3)) {
            $typeimg3 = pathinfo($image3, PATHINFO_EXTENSION);
            $img3 = file_get_contents($image3);
            $base64img3 = 'data:image/' . $typeimg3 . ';base64,' . base64_encode($img3);
        } else {
            $base64img3 = $base64imgno;
        }
        if (file_exists($image4)) {
            $typeimg4 = pathinfo($image4, PATHINFO_EXTENSION);
            $img4 = file_get_contents($image4);
            $base64img4 = 'data:image/' . $typeimg4 . ';base64,' . base64_encode($img4);
        } else {
            $base64img4 = $base64imgno;
        }
        // if ($data->klasifikasis_id == '2') {
        //     return view('cetak.kartu.mobilpenumpang', ['tglcetak' => $tglcetak, 'data' => $data, 'uji' => $uji]);
        // }elseif ($data->klasifikasis_id == '3') {
        //     return view('cetak.kartu.mobilbus', ['tglcetak' => $tglcetak, 'data' => $data, 'uji' => $uji]);
        // }elseif ($data->klasifikasis_id == '4') {
        //     return view('cetak.kartu.mobilbarang', ['tglcetak' => $tglcetak, 'data' => $data, 'uji' => $uji]);
        // }else{
        //     return view('cetak.kartu.kereta', ['tglcetak' => $tglcetak, 'data' => $data, 'uji' => $uji]);
        // }

        // return view('cetak.kartu.kartu', ['tglcetak' => $tglcetak, 'data' => $data, 'uji' => $uji, 'nu' => $nu, 'mu' => $mu,'catatan' => $catatan, 'base64' => $base64, 'base64bg' => $base64bg, 'base64img1' => $base64img1, 'base64img2' => $base64img2, 'base64img3' => $base64img3, 'base64img4' => $base64img4]);

        $pdf = PDF::loadView('cetak.kartu.kartu', ['tglcetak' => $tglcetak, 'data' => $data, 'uji' => $uji, 'nu' => $nu, 'mu' => $mu, 'catatan' => $catatan, 'base64' => $base64, 'base64bg' => $base64bg, 'base64img1' => $base64img1, 'base64img2' => $base64img2, 'base64img3' => $base64img3, 'base64img4' => $base64img4]);
        $pdf->setPaper('A4', 'potrait');

        return $pdf->stream('KARTU INDUK-' . $data['nouji'] . '.pdf')->header('Content-Type', 'application/pdf');
        // return $pdf->download('KARTU INDUK-'.$data['nouji'].'.pdf');
    }

    public function cetakKartu($id){
        $tglcetak = date_create(date("d-m-Y"));
        $tglcetak= date_format($tglcetak,"d-m-Y");
        $data = $this->datakendaraanService->getKartuInduk($id);
        if($data){
            // $uji  = $this->datakendaraanService->getListPengujian($data->identitaskendaraan_id);
            // $nu  = $this->datakendaraanService->getListNU($data->identitaskendaraan_id);
            // $mu  = $this->datakendaraanService->getListMU($data->identitaskendaraan_id);
            // $catatan  = $this->datakendaraanService->getListCatatan($data->identitaskendaraan_id);
        }else{
            return "Something Error";
        }
            
        if($data){
            $pengujian = $this->datakendaraanService->getPengujianKartu($data->identitaskendaraan_id);
            $persuratan = $this->datakendaraanService->getPersuratan($data->identitaskendaraan_id);
            $combined = $pengujian->merge($persuratan);

            // Urutkan berdasarkan tanggal
            $sorted = $combined->sortBy('tglpendaftaran');
            
            // Jika perlu mengembalikan koleksi yang telah diurutkan sebagai array
            $finalResult = $sorted->values()->all();

            if($data->idjenis >= 0){
                if(strpos($data->jenis, "MOBIL BARANG") !== false){
                    return view('cetak.kartu.mobilbarang', ['tglcetak' => $tglcetak, 'data' => $data, 'pengujian'=> $finalResult]);
                }elseif(strpos($data->jenis, "MOBIL PENUMPANG") !== false){
                    return view('cetak.kartu.mobilpenumpang', ['tglcetak' => $tglcetak, 'data' => $data, 'pengujian'=> $finalResult]);
                }elseif(strpos($data->jenis, "MOBIL BUS") !== false){
                    return view('cetak.kartu.mobilbus', ['tglcetak' => $tglcetak, 'data' => $data, 'pengujian'=> $finalResult]);
                }else{
                    return view('cetak.kartu.kereta', ['tglcetak' => $tglcetak, 'data' => $data, 'pengujian'=> $finalResult]);
                }
            }else{
                $klasifikasi = $this->datakendaraanService->getKlasifikasi($data->model);
                if ($klasifikasi->klasifikasis_id == '2') {
                    return view('cetak.kartu.mobilpenumpang', ['tglcetak' => $tglcetak, 'data' => $data, 'pengujian'=> $finalResult]);
                }elseif ($klasifikasi->klasifikasis_id == '3') {
                    return view('cetak.kartu.mobilbus', ['tglcetak' => $tglcetak, 'data' => $data, 'pengujian'=> $finalResult]);
                }elseif ($klasifikasi->klasifikasis_id == '4') {
                    return view('cetak.kartu.mobilbarang', ['tglcetak' => $tglcetak, 'data' => $data, 'pengujian'=> $finalResult]);
                }else{
                    return view('cetak.kartu.kereta', ['tglcetak' => $tglcetak, 'data' => $data, 'pengujian'=> $finalResult]);
                }
            }
        }
    }

    public function getPendingRequests()
    {
        try {
            $tgl = date_create(request()->input('tgl', 'now'))->format('Y-m-d');
            $status = request()->input('status', 'pending');

            $status = rtrim($status, '/');

            $data = $this->datakendaraanService->getApprovalRequest($tgl, $status)->toArray();
            return $this->returnJson($data);
        } catch (\Exception $e) {
            Log::error(json_encode([
                'type' => 'error',
                'context' => 'DatakendaraanController::getPendingRequests',
                'message' => $e->getMessage(),
                'data' => [],
                'details' => [
                    'line' => $e->getLine(),
                    'file' => $e->getFile(),
                    'trace' => $e->getTraceAsString(),
                ],
            ]));
            return $this->returnJson(null, $e->getMessage(), 500);
        }
    }

    public function getApprovalRequest($id)
    {
        try {
            $data = $this->datakendaraanService->getApprovalRequestDetails($id);
            return $this->returnJson($data);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return $this->returnJson(null, 'Approval request not found.', 404);
        } catch (\Exception $e) {
            return $this->returnJson(null, $e->getMessage(), 500);
        }
    }

    public function approveRequest($id)
    {
        try {
            $response = $this->datakendaraanService->approveDatakendaraanUpdate($id);
            if ($response[0]) {
                return $this->success(true, 'Data kendaraan berhasil diperbarui dan disetujui.', $response[1], 200);
            }

            return $this->error(false, 'Gagal mengubah data kendaraan.', $response[1], 400);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return $this->returnJson(null, 'Tidak dapat menemukan permintaan pembaruan data kendaraan.', 404);
        } catch (\Exception $e) {
            return $this->returnJson(null, $e->getMessage(), 500);
        }
    }

    public function rejectRequest(Request $request, $id)
    {
        $request->validate([
            'notes' => 'required|string|max:255',
        ]);

        try {
            $response = $this->datakendaraanService->rejectDatakendaraanUpdate($id, $request->input('notes'));

            return $response;
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return $this->returnJson(null, 'Approval request not found.', 404);
        } catch (\Exception $e) {
            return $this->returnJson(null, $e->getMessage(), 500);
        }
    }
}

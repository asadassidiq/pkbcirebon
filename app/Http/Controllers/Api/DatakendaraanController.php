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
        $data = $this->datakendaraanService->update($request, $id);
        return $this->returnJson($data, 'Datakendaraan Update');
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

    public function updateData(){
        $data = $this->datakendaraanService->updateData();
        return $this->returnJson($data);
    }

    public function updateData2(){
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

    public function cetak($id){
        $tglcetak = date_create(date("d-m-Y"));
        $tglcetak= date_format($tglcetak,"d-m-Y");
        $data = $this->datakendaraanService->getKartuInduk($id);
        if($data){
            $uji  = $this->datakendaraanService->getListPengujian($data->identitaskendaraan_id);
            $nu  = $this->datakendaraanService->getListNU($data->identitaskendaraan_id);
            $mu  = $this->datakendaraanService->getListMU($data->identitaskendaraan_id);
            $catatan  = $this->datakendaraanService->getListCatatan($data->identitaskendaraan_id);
        }else{
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
        
        $image1 = public_path('thumbnail_images/' . $data['nouji'].'-tampakdepan.jpg');
        $image2 = public_path('thumbnail_images/' . $data['nouji'].'-tampakkanan.jpg');
        $image3 = public_path('thumbnail_images/' . $data['nouji'].'-tampakbelakang.jpg');
        $image4 = public_path('thumbnail_images/' . $data['nouji'].'-tampakkiri.jpg');

        $noimage =  env('APP_URL') . '/img/noimage.jpg';
        $typenoimage = pathinfo($noimage, PATHINFO_EXTENSION);
        $imgno = file_get_contents($noimage);
        $base64imgno = 'data:image/' . $typenoimage . ';base64,' . base64_encode($imgno);

        if (file_exists($image1)){
            $typeimg1 = pathinfo($image1, PATHINFO_EXTENSION);
            $img1 = file_get_contents($image1);
            $base64img1 = 'data:image/' . $typeimg1 . ';base64,' . base64_encode($img1);
        }else{
            $base64img1 = $base64imgno;
        }
        if (file_exists($image2)){
            $typeimg2 = pathinfo($image2, PATHINFO_EXTENSION);
            $img2 = file_get_contents($image2);
            $base64img2 = 'data:image/' . $typeimg2 . ';base64,' . base64_encode($img2);
        }else{
            $base64img2 = $base64imgno;
        }  
        if (file_exists($image3)){
            $typeimg3 = pathinfo($image3, PATHINFO_EXTENSION);
            $img3 = file_get_contents($image3);
            $base64img3 = 'data:image/' . $typeimg3 . ';base64,' . base64_encode($img3);
        }else{
            $base64img3 = $base64imgno;
        }   
        if (file_exists($image4)){
            $typeimg4 = pathinfo($image4, PATHINFO_EXTENSION);
            $img4 = file_get_contents($image4);
            $base64img4 = 'data:image/' . $typeimg4 . ';base64,' . base64_encode($img4);
        }else{
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
        
        $pdf = PDF::loadView('cetak.kartu.kartu',['tglcetak' => $tglcetak, 'data' => $data, 'uji' => $uji, 'nu' => $nu, 'mu' => $mu,'catatan' => $catatan, 'base64' => $base64, 'base64bg' => $base64bg, 'base64img1' => $base64img1, 'base64img2' => $base64img2, 'base64img3' => $base64img3, 'base64img4' => $base64img4]);
        $pdf->setPaper('A4', 'potrait');

        return $pdf->stream('KARTU INDUK-'.$data['nouji'].'.pdf')->header('Content-Type','application/pdf');
        // return $pdf->download('KARTU INDUK-'.$data['nouji'].'.pdf');
    }
}


<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\VerifService;
use App\Services\SuratService;
use App\Http\Requests\Verif\VerifStoreRequest;
use App\Http\Requests\Verif\VerifUpdateRequest;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Http;
// use Image;
use Intervention\Image\ImageManagerStatic as Image;
use App\Models\Pendaftaran;
use App\Models\Pengujian;
use App\Models\Tandatangan;
use App\Models\Fotomentah;
use App\Models\User;
use App\Models\FotoKendaraan;
use DateTime;
use App\Http\Requests\Surat\SuratUpdateRequest;

use function PHPUnit\Framework\isEmpty;

class VerifController extends Controller
{
    use apiJsonReturnTrait;
    protected $verifService,$suratService;

    public function __construct(VerifService $verifService , SuratService $suratService)
    {
        $this->verifService = $verifService;
        $this->suratService = $suratService;
    }

    public function index()
    {
        $data = $this->verifService->getAllVerif();
        return $this->returnJson($data);
    }

    public function getMonitoring()
    {
        $data = $this->verifService->getMonitoring();
        return $this->returnJson($data);
    }

    public function lulus()
    {
        $data = $this->verifService->getAllLulusVerif();
        return $this->returnJson($data);
    }

    public function indexverif2()
    {
        $data = $this->verifService->getAllVerif2();
        return $this->returnJson($data);
    }

    public function lulusverif2()
    {
        $data = $this->verifService->getAllLulusVerif2();
        return $this->returnJson($data);
    }

    public function tlulus()
    {
        $data = $this->verifService->getAllTLulusVerif();
        return $this->returnJson($data);
    }

    public function getVerif($id)
    {
        $data = $this->verifService->getVerif($id);
        return $this->returnJson($data);
    }

    public function getData($id)
    {
        $data = $this->verifService->getData($id);
        return $this->returnJson($data);
    }

    public function storeVerif2(VerifStoreRequest $request)
    {
        $user = auth()->user();
        $check = $this->verifService->checkid($request->pendaftaran_id);
        if ($check->kodepenerbitans_id <= 7) {
            $nouji = Pendaftaran::select('nouji')->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('pendaftarans.id', $check['id'])->first()->nouji;
            try{
                $this->saveFoto($check['id'],$nouji);
            }catch(\Exception $e){
            }
        } else {
            $nouji = 'sukses';
        }
        if ($check) {
            $request->merge([
                'statuslulusuji' => $request->verif,
                'idpenguji'    => $user['id'],
            ]);
            $data = $this->verifService->update($request, $check->id);
            if ($check->kodepenerbitans_id == '12') {
                $check->posverif2      = $request->verif;
                $check->user_posverif2 = $user['id'];
                $check->posisi = '6';
                $check->save();
            } elseif ($request->verif == '1') {
                $data = $this->verifService->setDatapengujian($check['id'],$request->jenis_cetak);
                $check->posverif2      = $request->verif;
                $check->user_posverif2 = $user['id'];
                $check->posisi = '6';
                $check->save();
            }elseif ($request->verif == '0') {
                // $data = $this->verifService->setDatapengujian($check['id']);
                $check->posverif2      = $request->verif;
                $check->user_posverif2 = $user['id'];
                $check->posisi = '7';
                $check->save();
            }
        }
        return $this->returnJson($check);
    }

    public function store(VerifStoreRequest $request)
    {
        $user = auth()->user();
        $check = $this->verifService->checkid($request->pendaftaran_id);
        $status_check = false;
        if ($check->kodepenerbitans_id <= 7) {
            $nouji = Pendaftaran::select('nouji')->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('pendaftarans.id', $check['id'])->first()->nouji;
            try{
                $this->saveFoto($check['id'],$nouji);
            }catch(\Exception $e){
            }
        } else {
            $nouji = 'sukses';
        }

        if($check){
            if($check->idx > 0){
                $status_check = true;
            }else{
                $status_check = false;
            }
        }

        if ($status_check) {
            $request->merge([
                'statuslulusuji' => $request->verif,
                'idpenguji'    => $user['id'],
            ]);
            $data = $this->verifService->update($request, $check->id);
            if ($data) {
                if ($check->pos1 == 0) {
                    $ps = 1;
                } elseif ($check->pos2 == 0) {
                    $ps = 2;
                } elseif ($check->pos3 == 0) {
                    $ps = 3;
                } elseif ($check->pos4 == 0) {
                    $ps = 4;
                } elseif ($check->posverif == 0) {
                    $ps = 5;
                } elseif ($check->posverif == 1) {
                    $ps = 6;
                } else {
                    $ps = 5;
                }
                $check->posverif      = $request->verif;
                $check->user_posverif = $user['id'];
                $check->posisi = $ps;
                $check->save();
            }
            
            // try{
            //     $this->saveFoto($check['id'],$nouji);
            // }catch(\Exception $e){
            // }

            return $this->returnJson(true, 'Verif Updated');
        } else {
            $request->merge([
                'statuslulusuji' => $request->verif,
                'idpenguji'    => $user['id'],
            ]);

            $data = $this->verifService->create($request->all());
            if ($data) {
                $check = $this->verifService->checkid($request->pendaftaran_id);
                if ($check) {
                    if ($check->pos1 == 0) {
                        $ps = 1;
                    } elseif ($check->pos2 == 0) {
                        $ps = 2;
                    } elseif ($check->pos3 == 0) {
                        $ps = 3;
                    } elseif ($check->pos4 == 0) {
                        $ps = 4;
                    } elseif ($check->posverif == 0) {
                        $ps = 4;
                    } elseif ($check->posverif == 1) {
                        $ps = 6;
                    } else {
                        $ps = 5;
                    }
                    $check->posverif      = $request->verif;
                    $check->user_posverif = $user['id'];
                    $check->posisi = $ps;
                    $check->save();
                }
            }

            // if ($data && $check->kodepenerbitans_id != '12') {
            //     $nouji = Pendaftaran::select('nouji')->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('pendaftarans.id', $check['id'])->first()->nouji;
                
            //     try{
            //         $this->saveFoto($check['id'],$nouji);
            //     }catch(\Exception $e){
            //     }
            // } else {
            //     $nouji = 'sukses';
            // }
            return $this->returnJson(true, 'Verif Created');
        }
    }

    public function update(VerifUpdateRequest $request, $id)
    {
        $data = $this->verifService->update($request, $id);
        return $this->returnJson($data, 'Verif Updated1');
    }

    public function approveSurat(SuratUpdateRequest $request, $id)
    {
        $data = $this->verifService->approveSurat($request, $id);
        if($data){
        }
        return $this->returnJson($data, 'approve Surat');
    }

    public function delete($id)
    {
        $data = $this->verifService->delete($id);
        return $this->returnJson('', 'Verif Deleted');
    }

    public function cetaklhp($id)
    {
        $check = $this->verifService->checkid($id);
        $data = $this->verifService->getData($check['id']);
        if ($data) {
            if ($data->tgluji) {
                $tglcreate = date_create(substr($data->tgluji, 4, 4) . '-' . substr($data->tgluji, 2, 2) . '-' . substr($data->tgluji, 0, 2));
                $hari = date_format($tglcreate, "d");
                $bulan = date_format($tglcreate, "m");
                $tahun = date_format($tglcreate, "Y");
            } else {
                $tglcreate = date("Y-m-d");
                $hari = date("d");
                $bulan = date("m");
                $tahun = date("Y");
            }
        } else {
            $tglcreate = date("Y-m-d");
            $hari = date("d");
            $bulan = date("m");
            $tahun = date("Y");
        }

        switch ($bulan) {
            case 1:
                $bulan_ini = "Januari";
                break;

            case 2:
                $bulan_ini = "Febuari";
                break;

            case 3:
                $bulan_ini = "Maret";
                break;

            case 4:
                $bulan_ini = "April";
                break;

            case 5:
                $bulan_ini = "Mei";
                break;

            case 6:
                $bulan_ini = "Juni";
                break;

            case 7:
                $bulan_ini = "Juli";
                break;

            case 8:
                $bulan_ini = "Agustus";
                break;

            case 9:
                $bulan_ini = "September";
                break;

            case 10:
                $bulan_ini = "Oktober";
                break;

            case 11:
                $bulan_ini = "November";
                break;

            case 12:
                $bulan_ini = "Desember";
                break;

            default:
                $bulan_ini = "Tidak di ketahui";
                break;
        }
        $tgluji = $hari . ' ' . $bulan_ini . ' ' . $tahun;
        if ($data) {
            $path_logoKab = public_path() . '/img/kota.png';
            $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
            $ttd = User::select('users.name', 'nip', 'nrp', 'jabatan')->where('id', $data->idpenguji)->first();
        $data = [
            'data' => $data,
            'tgluji'   => $tgluji,
            'ttd'       => $ttd,
            'logokab'  => $logokab,
        ];
        $pdf = PDF::loadView('cetak.lhp-pdf', $data);
        return $pdf->stream('LHP.pdf')->header('Content-Type','application/pdf');
        // return view('cetak.lhp', ['tgluji' => $tgluji, 'data' => $data, 'ttd' => $ttd]);
        }
    }

    public function cetaksktl($id)
    {
        $check = $this->verifService->checkid($id);
        $path_logoKab = public_path() . '/img/kota.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        if($check){
            $data = $this->verifService->getData($check['id']);
            $catatan = $this->verifService->getCatatan($check['id']);
            if($data){ 
                $ttd = $this->verifService->getTTD($data['idpenguji']);
                $data = [
                    'data' => $data,
                    'catatan' => $catatan, 
                    'ttd'     => $ttd,
                    'logokab'  => $logokab,
                ];
                $pdf = PDF::loadView('cetak.sktl-pdf', $data);
                return $pdf->stream('SKTL.pdf')->header('Content-Type','application/pdf');
            }
        }
    }

    public function cetakPenolakan($id)
    {
        $check = $this->verifService->checkid($id);
        $path_logoKab = public_path() . '/img/kota.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        if($check){
            $data = $this->verifService->getData($check['id']);
            $catatan = $this->verifService->getCatatan($check['id']);
            if($data){ 
                $ttd = $this->verifService->getTTD($data['idpenguji']);
                $data = [
                    'data' => $data,
                    'catatan' => $catatan, 
                    'ttd'     => $ttd,
                    'logokab'  => $logokab,
                ];
                $pdf = PDF::loadView('cetak.penolakan-pdf', $data);
                return $pdf->stream('Penolakan.pdf')->header('Content-Type','application/pdf');
            }
        }
    }

    public function saveFoto($id,$nouji)
    {
        $imagePaths = [
            'depan'    => public_path() . '/tmp_images/' . $nouji . '-tampakdepan.jpg',
            'kanan'    => public_path() . '/tmp_images/' . $nouji . '-tampakkanan.jpg',
            'belakang' => public_path() . '/tmp_images/' . $nouji . '-tampakbelakang.jpg',
            'kiri'     => public_path() . '/tmp_images/' . $nouji . '-tampakkiri.jpg',
        ];

        $thumbnailPaths = [];
        foreach ($imagePaths as $key => $originalPath) {
            $thumbPath = public_path() . '/thumbnail_images/' . $nouji . '-tampak' . $key . '.jpg';
            $thumbnailPaths[$key] = $thumbPath;

            if (file_exists($originalPath)) {
                if (file_exists($thumbPath)) {
                    unlink($thumbPath);
                }
                Image::make($originalPath)->save($thumbPath, 8);
                //unlink($originalPath);
            }
        }
        $normalPaths = [];
        foreach ($imagePaths as $key => $originalPath) {
            $norPath = public_path() . '/normal_images/' . $nouji . '-tampak' . $key . '.jpg';
            $normalPaths[$key] = $norPath;

            if (file_exists($originalPath)) {
                if (file_exists($norPath)) {
                    unlink($norPath);
                }
                Image::make($originalPath)->save($norPath, 60);
                unlink($originalPath);
            }
        }

        $fotoMentah = Fotomentah::where('nouji', $nouji)->first();
        if (empty($fotoMentah)) {
            // Only create if at least one thumbnail exists, assuming all should exist if any do.
            // This condition might need refinement based on business logic if partial uploads are allowed.
            if (file_exists($thumbnailPaths['kiri'])) {
                Fotomentah::create([
                    'nouji'                => $nouji,
                    'fotodepanmentah'      => file_get_contents($thumbnailPaths['depan']),
                    'fotobelakangmentah'   => file_get_contents($thumbnailPaths['belakang']),
                    'fotokananmentah'      => file_get_contents($thumbnailPaths['kanan']),
                    'fotokirimentah'       => file_get_contents($thumbnailPaths['kiri']),
                    'statuskompres'        => '0',
                ]);
            }
        } else {
            // Update existing record if thumbnails exist
            if (file_exists($thumbnailPaths['depan'])) {
                $fotoMentah->fotodepanmentah    = file_get_contents($thumbnailPaths['depan']);
                $fotoMentah->fotobelakangmentah = file_get_contents($thumbnailPaths['belakang']);
                $fotoMentah->fotokananmentah    = file_get_contents($thumbnailPaths['kanan']);
                $fotoMentah->fotokirimentah     = file_get_contents($thumbnailPaths['kiri']);
                $fotoMentah->save();
            }
        }

        return true;
    }

    public function fotoTest($id)
    {
        $data = Pendaftaran::select('nouji')->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('pendaftarans.id', $id)->first();
        $oriPath4 = public_path() . '/normal_images/' . $data['nouji'] . '-tampakkiri.jpg';
        echo "Last access: " . date("F Y", fileatime($oriPath4));

        for ($i = 1; $i < 6; $i++) {
            $oriPath = public_path() . '/normal_images/' . $data['nouji'] . '-' . $i . '-tampakkiri.jpg';
        }
    }
}

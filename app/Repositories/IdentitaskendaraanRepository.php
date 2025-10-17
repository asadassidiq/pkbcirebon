<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Identitaskendaraan;
use App\Models\Datakendaraan;
use App\Models\Pendaftaran;
use App\Models\Datalama;
use App\Models\LaikJalan;
use DB;
use DateTime;

use function PHPUnit\Framework\isEmpty;

class IdentitaskendaraanRepository
{
    use RepositoryTrait;

    protected $model, $model1, $model2;

    public function __construct(Identitaskendaraan $model, Pendaftaran $model1, Datakendaraan $model2)
    {
        $this->model = $model;
        $this->model1 = $model1;
        $this->model2 = $model2;
    }

    public function getAll()
    {

        $data = $this->model
            ->join('datakendaraans', 'datakendaraans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->orderBy('pendaftaran.id', 'DESC');
        if (request()->q != '') {
            $data = $data->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . request()->q . '%')
                ->orWhere('identitaskendaraans.nouji', 'LIKE', '%' . request()->q . '%');
        }

        return $data->paginate(10);
    }

    public function getIdentitaskendaraan($id)
    {
        $data = $this->model
            // ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            // ->Leftjoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')
            ->LeftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', '=', 'identitaskendaraans.id');
        // $data = $data->find($id);
        $data = $data->where('identitaskendaraans.uuid',$id)->first();
        return $data;
    }

    public function getIdentitaskendaraanid($id)
    {
        $data = $this->model1->select('identitaskendaraan_id')->where('pendaftarans.id', $id)->first();
        // ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id');

        return $data;
    }

    public function getIdentitaskendaraanPos($id)
    {
        $data = $this->model1
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
            ->leftjoin('persuratan', 'persuratan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', '=', 'identitaskendaraans.id');

        $data = $data->where('pendaftarans.uuid', $id);

        return $data->first();
    }

    public function getNokendaraan()
    {
        $data = $this->model->select('identitaskendaraans.id', 'nouji')
            ->LeftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->LeftJoin('pendaftarans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id');
        // ->LeftJoin('pengujians','pengujians.pendaftaran_id','=','pendaftarans.id');
        $nokendaraan = str_replace("/", "", request()->nokendaraan);
        $data = $data->where('noregistrasikendaraan', $nokendaraan)->first();
        if (!is_null($data)) {
            $lastKode = $this->model1->select('kodepenerbitans_id')->whereNotIn('kodepenerbitans_id', ['3', '4', '7', '12'])->where('identitaskendaraan_id', $data->id)->orderBy('tglpendaftaran', 'DESC')->first();
            if ($lastKode) {
                if ($lastKode->kodepenerbitans_id == '5') {
                    return false;
                } else {
                    return $data;
                }
            }
        } else {
            return false;
        }
    }

    public function getNorangka($norangka,$id)
    {
        $pend = $this->model1->select('identitaskendaraan_id')->where('pendaftarans.id',$id)->first();
        $data = $this->model->select('identitaskendaraans.id', 'norangka')
            ->LeftJoin('pendaftarans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id');
        if(isEmpty($norangka)){
            $norangka = str_replace("/", "", request()->norangka);
        }
        if(isEmpty($id)){
            $data->where('identitaskendaraan_id','!=', $pend->identitaskendaraan_id);
        }
        $data = $data->where('norangka', $norangka)->first();
        if (!is_null($data)) {
            $lastKode = $this->model1->select('kodepenerbitans_id')->whereNotIn('kodepenerbitans_id', ['3', '4', '7', '12'])->where('identitaskendaraan_id', $data->id)->orderBy('tglpendaftaran', 'DESC')->first();
            if ($lastKode) {
                if ($lastKode->kodepenerbitans_id == '5') {
                    return false;
                } else {
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    public function checkNouji($nouji)
    {
        $data = $this->model->select('identitaskendaraans.id', 'nouji','uuid')->where('nouji', $nouji)->first();
        if (!is_null($data)) {
            return true;
        } 
        return false;
    }

    public function getUUID($nouji)
    {
        $data = $this->model->select('identitaskendaraans.id', 'nouji','uuid')->where('nouji', $nouji)->first();
        if (!is_null($data)) {
            return $data;
        } 
        return $data;
    }

    public function checkNorangka($nouji,$norangka)
    {
        $data = $this->model->select('identitaskendaraans.id', 'nouji','uuid')->where('norangka',$norangka)->where('nouji','!=', $nouji)->first();
        if (!is_null($data)) {
            return true;
        } 
        return false;
    }

    public function getNouji($nouji,$id)
    {
        $pend = $this->model1->select('identitaskendaraan_id')->where('pendaftarans.id',$id)->first();
        $data = $this->model->select('identitaskendaraans.id', 'nouji')
            ->LeftJoin('pendaftarans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id');
        if(isEmpty($nouji)){
            $nouji = str_replace("/", "", request()->nouji);
        }
        if(isEmpty($id)){
            $data->where('identitaskendaraan_id','!=', $pend->identitaskendaraan_id);
        }
        $data = $data->where('nouji', $nouji)->first();
        if (!is_null($data)) {
            $lastKode = $this->model1->select('kodepenerbitans_id')->whereNotIn('kodepenerbitans_id', ['3', '4', '7', '12'])->where('identitaskendaraan_id', $data->id)->orderBy('tglpendaftaran', 'DESC')->first();
            if ($lastKode) {
                if ($lastKode->kodepenerbitans_id == '5') {
                    return false;
                } else {
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    public function getIdentitaskendaraanNouji()
    {
        $data = $this->model
            ->LeftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->LeftJoin('pendaftarans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id');
        // ->LeftJoin('pengujians','pengujians.pendaftaran_id','=','pendaftarans.id');
        $nouji = str_replace("/", "", request()->nouji);
        $data = $data->where('nouji', $nouji)->first();

        if (!is_null($data)) {
            $tglpendaftaran = date_create($data->tglpendaftaran);
            $tglpendaftaran = date_format($tglpendaftaran, "Y-m-d");
            $masaberlakuuji = $this->model->select('kodepenerbitans_id', 'masaberlakuuji', 'tgluji')->join('pendaftarans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')->join('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('pendaftarans.identitaskendaraan_id', $data->identitaskendaraan_id)->where('statuslulusuji', '1')->orderBy('tglpendaftaran', 'DESC')->first();
            if (!empty($masaberlakuuji)) {
                $tgluji = $masaberlakuuji->tgluji;
                $kodepenerbitans_id = $masaberlakuuji->kodepenerbitans_id;
                if (strlen($tgluji) == 7) {
                    $tgluji = '0' . $tgluji;
                    $tgluji = substr($tgluji, 4, 4) . '-' . substr($tgluji, 2, 2) . '-' . substr($tgluji, 0, 2);
                } elseif (strlen($tgluji) < 7) {
                    $tgluji = $tglpendaftaran;
                } else {
                    $tgluji = substr($tgluji, 4, 4) . '-' . substr($tgluji, 2, 2) . '-' . substr($tgluji, 0, 2);
                }

                $masaberlakuuji = $masaberlakuuji->masaberlakuuji;
                if (strlen($masaberlakuuji) == 7) {
                    $masaberlakuuji = '0' . $masaberlakuuji;
                } else {
                    $masaberlakuuji = substr($masaberlakuuji, 4, 4) . '-' . substr($masaberlakuuji, 2, 2) . '-' . substr($masaberlakuuji, 0, 2);
                }
            }

            if (empty($tgluji)) {
                $tgluji = '';
            }
            if (empty($masaberlakuuji)) {
                $masaberlakuuji = '';
            }
            if (empty($kodepenerbitans_id)) {
                $kodepenerbitans_id = '';
            }
            // $data->jenispendaftaran = $kodepenerbitans_id;
            $data->tglbayar = $masaberlakuuji;
            $data->tgluji = $tgluji;

            return $data;
        } else {
            return false;
        }
    }

    public function getCheck($request)
    {
        $request = str_replace("/", "", $request);
        $data = $this->model;
        $data = $data->orderBy('id', 'DESC')->where('nouji', $request);

        $data =  $data->first();

        if ($data) {
            $lastKode = $this->model1->select('kodepenerbitans_id')->whereNotIn('kodepenerbitans_id', ['3', '4', '7', '12'])->where('identitaskendaraan_id', $data->id)->orderBy('tglpendaftaran', 'DESC')->first();
            if ($lastKode) {
                if ($lastKode->kodepenerbitans_id == '5') {
                    return false;
                } else {
                    return $data;
                }
            }
        } else {
            return false;
        }
    }
    
    public function getCheckNouji($request)
    {
        $data = $this->model;
        $data = $data->orderBy('id', 'DESC')->where('nouji', $request);

        $data =  $data->first();

        if ($data) {
            return $data;
        } else {
            return false;
        }
    }

    public function createIdentitaskendaraan($request)
    {
        $data = $this->model->create($request);
        if ($data) {
            // $kend = Datakendaraan::create([
            //     'identitaskendaraan_id'     => $data->id,
            // ]);
            try{
                $this->upStatusKendaraan($data->id);
            }catch(\Exception $e){
            }
        }
        return $data;
    }

    public function updateIdentitaskendaraan($request, $id)
    {
        $update = $this->model->where('uuid',$id)->first();
        $update->update($request->all());

        if ($update->save()) {
            if ($update) {
                $check = Datakendaraan::where('identitaskendaraan_id', $update->id)->first();
                if (!$check) {
                    $kend = Datakendaraan::create([
                        'identitaskendaraan_id'     => $update->id,
                    ]);
                }
                try{
                    $this->upStatusKendaraan($update->id);
                }catch(\Exception $e){
                }
            }
            return $update;
        }
        return false;
    }

    public function deleteIdentitaskendaraan($id)
    {
        $delete = $this->model->where('id', $id);
        $delete->delete();
        return $delete;
    }

    public function upStatusKendaraan($id)
    {
        $stskend = null;
        $inkend = null;
        $outkend = null;
        $stsPend = $this->model2->select('id','kodepenerbitans_id','tglpendaftaran')->where('identitaskendaraan_id',$id)->orderBy('tglpendaftaran','DESC')->first();
        $inPend = $this->model2->select('id','kodepenerbitans_id','tglpendaftaran')->where('identitaskendaraan_id',$id)->where('kodepenerbitans_id','1')->orderBy('tglpendaftaran','ASC')->first();
        $outPend = $this->model2->select('id','kodepenerbitans_id','tglpendaftaran')->where('identitaskendaraan_id',$id)->where('kodepenerbitans_id','10')->orderBy('tglpendaftaran','ASC')->first();
        if($outPend){
            $outkend = $outPend->tglpendaftaran;
        }
        if($inPend){
            $inkend = $inPend->tglpendaftaran;
        }else{
            $inPend2 = $this->model2->select('id','kodepenerbitans_id','tglpendaftaran','idx')->where('identitaskendaraan_id',$id)->orderBy('tglpendaftaran','ASC')->first();
            if($inPend2){
                $inkend = $inPend2->tglpendaftaran;
            }
        }
        if($stsPend){
            $chckuji = LaikJalan::select('pendaftaran_id','tgluji','masaberlakuuji','statuslulusuji')->where('pendaftaran_id',$stsPend->id)->first();
            if($chckuji){
                if(strlen($chckuji->masaberlakuuji) == 8 && $chckuji->statuslulusuji == 1){
                    $d = substr($chckuji->masaberlakuuji,0,2);
                    $m = substr($chckuji->masaberlakuuji,2,2);
                    $y = substr($chckuji->masaberlakuuji,4,4);
                    $masaberlakuuji = $y.'-'.$m.'-'.$d;
                    $now = date('Y-m-d');
                    if($masaberlakuuji <= $now){
                        $stskend = '0';
                    }elseif($masaberlakuuji >= $now){
                        $stskend = '1';
                    }
                }else{
                    $stsPend2 = $this->model2->select('pendaftaran_id','tgluji','masaberlakuuji','statuslulusuji')->join('laikjalan','laikjalan.pendaftaran_id','=','pendaftarans.id')->where('statuslulusuji','1')->where('identitaskendaraan_id',$id)->orderBy('tglpendaftaran','DESC')->first();
                    if($stsPend2){
                        $d = substr($chckuji->masaberlakuuji,0,2);
                        $m = substr($chckuji->masaberlakuuji,2,2);
                        $y = substr($chckuji->masaberlakuuji,4,4);
                        $masaberlakuuji = $y.'-'.$m.'-'.$d;
                        $now = date('Y-m-d');
                        if($masaberlakuuji <= $now){
                            $stskend = '0';
                        }elseif($masaberlakuuji >= $now){
                            $stskend = '1';
                        }
                    }else{
                        // $stskend = '0';
                    }
                }
            }else{
                if($stsPend->kodepenerbitans_id == 9){
                    $masaberlakuuji = $stsPend->tglpendaftaran;
                    $now = date('Y-m-d');
                    $date1 = new DateTime($masaberlakuuji);
                    $date2 = new DateTime($now);
                    $interval = $date1->diff($date2);
                    if($interval->m > 6  || $interval->y >= 1){
                        $stskend = '0';
                    }else{
                        $stskend = '1';
                    }
                }elseif($stsPend->kodepenerbitans_id == 10){
                    $stskend = '5';
                }elseif($stsPend->kodepenerbitans_id == 5){
                    $stskend = '2';
                }else{
                    $stskend = '7';
                }
            }
        } 

        $update = $this->model->where('id',$id)->first();
        $update->statuskendaraan = $stskend;
        $update->tglterdaftar = $inkend;
        $update->tglout = $outkend;
        $update->save();

        return true;
    }

    public function setDefault($request)
    {
        $dataIden = $this->model->create([
            'nouji'                   => $request->nouji,
            'nama'                    => null,
            'alamat'                  => null,
            'kota'                    => null,
            'kecamatan'               => null,
            'kelurahan'               => null,
            'nohp'                    => null,
            'noidentitaspemilik'      => null,
            'noregistrasikendaraan'   => $request->noregistrasikendaraan,
            'tgl_registrasikendaraan' => null,
            'nosertifikatreg'         => '0',
            'tglsertifikatreg'        => null,
            'merek'                   => null,
            'tipe'                    => null,
            'varian'                  => null,
            'norangka'                => null,
            'nomesin'                 => null,
            'thpembuatan'             => null,
            'bahanbakar'              => null,
            'isisilinder'             => null,
            'dayamotorpenggerak'      => null,
            'jenis'                   => null,
            'subjenis'                => null,
            'model'                   => null,
            'rancang'                 => null,
            'peruntukan'              => null,
            'warna'                   => null,
            'kodewilayah'             => null,
            'kodewilayahasal'         => null,
            'idkepaladinas'           => null,
            'iddirektur'              => null,
            'idmerek'                 => null,
            'idtipe'                  => null,
            'idvarian'                => null,
            'idbahanbakar'            => null,
            'idjenis'                 => null,
            'idsubjenis'              => null,
            'idkodewilayah'           => null,
            'idkodewilayahasal'       => null,
            'statuskendaraan'         => null,
            'tglterdaftar'            => now(),
            'tglberlakuuji'           => null,
            'tglout'                  => null,
        ]);
        if($dataIden)
        {
            $kend = Datakendaraan::create([
                        'identitaskendaraan_id'     => $dataIden->id,
                        'jbb'                   => '0',
                        'jbkb'                  => '0',
                        'jbi'                   => '0',
                        'jbki'                  => '0',
                        'mst'                   => '0',
                        'konfigurasisumburoda' => null,
                        'ukuranban'             => null,
                        'panjangkendaraan'      => '0',
                        'lebarkendaraan'        => '0',
                        'tinggikendaraan'       => '0',
                        'panjangbakatautangki'  => '0',
                        'lebarbakatautangki'    => '0',
                        'tinggibakatautangki'   => '0',
                        'julurdepan'            => '0',
                        'julurbelakang'         => '0',
                        'groundclearance'       => '0',
                        'jumlah_sumbu'          => 2,
                        'jaraksumbu1_2'         => '0',
                        'jaraksumbu2_3'         => '0',
                        'jaraksumbu3_4'         => '0',
                        'jaraksumbu4_5'         => '0',
                        'jaraksumbu5_6'         => '0',
                        'jaraksumbu6_7'         => '0',
                        'jaraksumbu7_8'         => '0',
                        'jaraksumbu8_9'         => '0',
                        'jaraksumbu9_10'        => '0',
                        'jaraksumbu10_11'       => '0',
                        'jaraksumbu11_12'       => '0',
                        'q'                     => '0',
                        'a'                     => '0',
                        'r'                     => '0',
                        'b'                     => '0',
                        'p'                     => '0',
                        'dayaangkutorang'       => 0,
                        'dayaangkutbarang'      => 0,
                        'kelasjalanterendah'    => null,
                        'idkelasjalanterendah'  => null,
                        'beratkosong'           => 0,
                        'beratsumbu1'           => 0,
                        'beratsumbu2'           => 0,
                        'beratsumbu3'           => 0,
                        'beratsumbu4'           => 0,
                        'beratsumbu5'           => 0,
                        'beratsumbu6'           => 0,
                        'beratsumbu7'           => 0,
                        'beratsumbu8'           => 0,
                        'beratsumbu9'           => 0,
                        'beratsumbu10'          => 0,
                        'beratsumbu11'          => 0,
                        'beratsumbu12'          => 0,
                        'lebarpintu'            => '0',
                        'tinggipintu'           => '0',
                        'tinggianaktangga'      => '0',
                        'lebaranaktangga'       => '0',
                        'lebarlorong'           => '0',
                        'tinggitempatberdiri'   => '0',
                        'lebartempatduduk'      => '0',
                        'jaraktempatduduk'      => '0',
                        'lebarpintudarurat'     => '0',
                        'panjangakseskeluar'    => '0',
                        'lebarakseskeluar'      => '0',
                        'jarakantarbumper'      => '0',
                        'volume'                => '0',
                        'jenismuatan'           => null,
                        'beratjenismuatan'      => '0',
                        'posisinomeruji'        => null,
                        'catatanrubahbentuk'    => null,
                        'bahan'                 => null,
                        'rumahrumah'            => null,
                    ]);
        }

        return $dataIden->id;
    }
}

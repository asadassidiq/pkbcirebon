<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pendaftaran;
use App\Models\Numpanguji;
use App\Models\Persuratan;
use App\Models\Logtte;
use DB;
use Illuminate\Support\Facades\Request;

class SuratRepository
{
    use RepositoryTrait;

    protected $model,$modelS,$modelLog;

    public function __construct(Pendaftaran $model,Persuratan $modelS, Logtte $modelLog)
    {
        $this->model = $model;
        $this->modelS = $modelS;
        $this->modelLog = $modelLog;
    }

    public function getAll()
    {
        $data = $this->model
            ->select('pendaftarans.noantrian','pendaftarans.uuid','kodepenerbitans.keterangan','identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan','persuratan.document_id','nosurat','status_cetak','posisi','posverif')
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->join('kodepenerbitans','pendaftarans.kodepenerbitans_id','=','kodepenerbitans.id')
            ->leftjoin('persuratan','persuratan.pendaftaran_id','=','pendaftarans.id')
            // ->whereIn('pendaftarans.kodepenerbitans_id',['9','10','11','12'])
            ->where('pendaftarans.tglpendaftaran',request()->t)
            ->orderBy('pendaftarans.noantrian','DESC');
        $search = str_replace("/", "", request()->q);
        $status = request()->s;
        $kode = request()->j;
        if($status != ''){
            if($status == 1){
                $data = $data->where(function ($query) use ($search) {
                $query->where('pendaftarans.posverif2', null)
                    ->orWhere('persuratan.status_cetak', null);
                });
            }
            elseif($status == 2){
                $data = $data->where(function ($query) use ($search) {
                $query->where('pendaftarans.posverif2', 0);
                });
            }
            elseif($status ==3){
                $data = $data->where(function ($query) use ($search) {
                $query->where('persuratan.status_cetak', 1);
                });
            }
        }
        if($kode != ''){
            if($kode == '1'){
                $data = $data->where(function ($query) use ($search) {
                $query->where('pendaftarans.kodepenerbitans_id', '9');
                });
            }
            elseif($kode == '2'){
                $data = $data->where(function ($query) use ($search) {
                $query->where('pendaftarans.kodepenerbitans_id', '10');
                });
            }
            elseif($kode == '3'){
                $data = $data->where(function ($query) use ($search) {
                $query->where('pendaftarans.kodepenerbitans_id', '11');
                });
            }elseif($kode == '4'){
                $data = $data->where(function ($query) use ($search) {
                $query->where('pendaftarans.kodepenerbitans_id', '12');
                });
            }else{
                $data = $data->where(function ($query) use ($search) {
                $query->whereIn('pendaftarans.kodepenerbitans_id',['9','10','11','12']);
                });
            }
        }else{
            $data = $data->where(function ($query) use ($search) {
                $query->whereIn('pendaftarans.kodepenerbitans_id',['9','10','11','12']);
                });
        }
        
        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('identitaskendaraans.nouji','LIKE','%'. $search . '%');
                });
        }

        return $data->paginate(10);
    }

    public function getPendaftaran($id)
    {
        $data = $this->model
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->leftjoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->leftjoin('persuratan', 'persuratan.pendaftaran_id', '=', 'pendaftarans.id');
        $data = $data->where('pendaftarans.uuid', $id);
        
        return $data->first();
    }
    public function checkSurat($id)
    {
        $data = $this->modelS->where('pendaftaran_id', $id)->first();
        return $data;
    }

    public function setDokumenid($id,$document_id)
    {
        $data = $this->modelS->where('pendaftaran_id', $id)->first();
        if($data)
        {
            $data->document_id = $document_id;
            $data->save();
        }
        return $data;
    }

    public function getLastPendaftaran($id)
    {
        $data = $this->model->where('uuid',$id)->first();
        $tglpendaftaran = date_create($data->tglpendaftaran);
        $tglpendaftaran = date_format($tglpendaftaran,"Y-m-d");
        $data = $this->model->select('kodepenerbitans_id','masaberlakuuji','tgluji','idpenguji','penguji.nama','penguji.nrp')->join('laikjalan','laikjalan.pendaftaran_id','=','pendaftarans.id')->leftJoin('penguji','penguji.idx','laikjalan.idpenguji')->where('pendaftarans.identitaskendaraan_id',$data->identitaskendaraan_id)->whereDate('tglpendaftaran','<',$data->tglpendaftaran)->where('statuslulusuji','1')->orderBy('tglpendaftaran','DESC')->first();
        if(!empty($data)){
            $tgluji = $data->tgluji;
            if(strlen($tgluji) == 7){
                $tgluji = '0'.$tgluji;
                $tgluji = substr($tgluji,4,4).'-'.substr($tgluji,2,2).'-'.substr($tgluji,0,2);
            }elseif(strlen($tgluji) < 7){
                $tgluji = $tglpendaftaran;
            }else{
                $tgluji = substr($tgluji,4,4).'-'.substr($tgluji,2,2).'-'.substr($tgluji,0,2);
            }

            $masaberlakuuji = $data->masaberlakuuji;
            if(strlen($masaberlakuuji) == 7){
                $masaberlakuuji = '0'.$masaberlakuuji;
            }else{
                $masaberlakuuji = substr($masaberlakuuji,4,4).'-'.substr($masaberlakuuji,2,2).'-'.substr($masaberlakuuji,0,2);
            }

            $data->masaberlakuuji = $masaberlakuuji;
            $data->tgluji         = $tgluji;
        }
        return $data;
    }

    public function setNoSurat(){
        $default = '551.21';
        $totYear = $this->modelS::whereYear('created_at',date('Y'))->count()+(int)1;
        $totMonth = $this->modelS::whereMonth('created_at',date('m'))->whereYear('created_at',date('Y'))->count()+(int)1;
        switch (date("m")) {
                    case '01':
                        $bln = 'I';
                        break;
                    case '02':
                        $bln = 'II';
                        break;
                    case '03':
                        $bln = 'III';
                        break;
                    case '04':
                        $bln = 'IV';
                        break;
                    case '05':
                        $bln = 'V';
                        break;
                    case '06':
                        $bln = 'VI';
                        break;
                    case '07':
                        $bln = 'VII';
                        break;
                    case '08':
                        $bln = 'VIII';
                        break;
                    case '09':
                        $bln = 'IX';
                        break;
                    case '10':
                        $bln = 'X';
                        break;
                    case '11':
                        $bln = 'XI';
                        break;
                    case '12':
                        $bln = 'XII';
                        break;
                    default:
                        break;
                }
        $data = $default.'/'.$totYear.'/'.$totMonth.'/'.$bln.'/'.date('Y');
        return $data;
    }

    public function createSurat($request)
    {
        $data = $this->modelS->create($request);
    }

    public function updateSurat($id, $request)
    {
        $update = $this->modelS->where('pendaftaran_id',$id)->first();
        if($update){
            $update->update($request->all());
        }
        return $update;
    }

    public function logTTE($id,$respon)
    {
        $user = auth()->user();
        $data = $this->model->where('uuid', $id)->first();
        if($data){
            $updateS = $this->modelS->where('pendaftaran_id', $data->id)->first();
            if($updateS){
                // $updateS->catatan = $request->catatan;
                // $updateS->status_cetak = $request->status_cetak;
                // if($updateS->save()){
                    $log = new $this->modelLog;
                    $log->pendaftaran_id = $data->id;
                    $log->user_id = $user['id'];
                    $log->ip = Request::ip();
                    $log->respon = $respon;
                    $log->save();
                    // $log = $this->modelLog::create([
                    //     'pendaftaran_id' => $updateS->pendaftaran_id,
                    //     'user_id' => $user['id'],
                    //     'ip' => Request::ip(),
                    //     'respon' => $respon,
                    // ]);

                    return true;
                // }
            }
        }
        return false;
    }

    public function callback($request,$id)
    {
        $document = $this->modelS->where('document_id', $request->input('id'))->first();
        if ($document) {
            $document->status_cetak = '1';
            $document->save();
            return true;
        }
        return false;
    }
    

    public function checkTTE($id)
    {
        $document = $this->modelS->where('document_id', $id)->first();
        if ($document) {
            $document->status_cetak = '1';
            if($document->save())
            {
                $uuid = $this->model->select('uuid')->where('id',$document->pendaftaran_id)->first();
                if($uuid)
                {
                    return $uuid->uuid;
                }
            }
        }
        return false;
    }

}

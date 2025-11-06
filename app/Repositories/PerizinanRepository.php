<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Perizinan;
use App\Models\Pendaftaran;
use DB;

class PerizinanRepository
{
    use RepositoryTrait;

    protected $model,$modelPendaftaran;

    public function __construct(Perizinan $model, Pendaftaran $modelPendaftaran)
    {
        $this->model = $model;
        $this->modelPendaftaran = $modelPendaftaran;
    }

    public function getAll()
    {
        $data = $this->model
            ->join('pendaftarans', 'perizinans.pendaftaran_id', '=', 'pendaftarans.id')
            ->orderBy('perizinans.tglpendaftaran','ASC');
        $search = str_replace("/", "", request()->q);
        
        if ($search != '') {
            $data = $data->where('perizinans.nouji', 'LIKE', '%' . $search . '%');
        }
        return $data->paginate(10);
    }

    public function getCekPerizinan()
    {
        $tgl = date("Y-m-d");
        $data = $this->model
            ->where('perizinans.tanggal','>=',$tgl)
            ->orderBy('perizinans.tanggal','ASC');
        return $data->paginate(10);
    }

    public function getPerizinan($id)
    {
        $data = $this->model->find($id);
        return $data;
    }

    public function getPerizinanName()
    {
        $data = $this->model->orderBy('id', 'ASC');

        if(request()->merek != '' && request()->merek != 'undefined'   ){
            $data = $data->where('id', request()->merek);
        }
        return $data->get();
    }

    public function create($request)
    {
        $data = $this->model->create($request);
        if($data){
            $this->upPosisi($request['pendaftaran_id'],'0');
            return $data;
        }
        return false;
    }

    public function upPosisi($id,$request)
    {
        $update = $this->modelPendaftaran->where('id',$id)->first();
        if($update){
            $update->posisi = $request;
            $update->foto = null;
            if ($update->save()) {
                return true;
            }
        }
        
        return false;
    }

    public function updatePerizinan($id,$request)
    {
        $user = auth()->user();
        $dataId = $this->modelPendaftaran->where('uuid',$id)->first();
        if(!$dataId){
            return false;
        }
        $update = $this->model->where('pendaftaran_id',$dataId->id)->first();
        if($update){
            $update->approved       = $request->approved;
            $update->approval_notes = $request->approval_notes;
            $update->user_approved = $user->id;
            if($update->save()){
                if($dataId->kodepenerbitans_id == '10' || $dataId->kodepenerbitans_id == '9'){
                    $dataId->posisi = 6;
                }else{
                    $dataId->posisi = 1;  
                }
                if ($dataId->save()) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }
}

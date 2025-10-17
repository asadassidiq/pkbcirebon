<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Catatan;
use App\Models\Alasan;
use App\Models\Pendaftaran;
use DB;

class CatatanRepository
{
    use RepositoryTrait;

    protected $model,$modelalasan,$model1;

    public function __construct(Catatan $model,Alasan $modelalasan,Pendaftaran $model1)
    {
        $this->model = $model;
        $this->model1 = $model1;
        $this->modelalasan = $modelalasan;
    }

    public function getAll()
    {
        $data = $this->model
            ->orderBy('catatan.id','ASC');
        $search = str_replace("/", "", request()->q);
        
        if ($search != '') {
            $data = $data->where('catatan.name', 'LIKE', '%' . $search . '%');
        }
        return $data->paginate(10);
    }

    public function checkid($id){
        $data = $this->model1->where('uuid',$id)->first();
        return $data;
    }

    public function getCatatan($id,$nama)
    {
        $data = $this->model->where('pendaftaran_id',$id)->where('alasan', $nama);
        return $data->get();
    }

    public function getCatatanPos($id,$pos){
        $data = $this->model->where('pendaftaran_id',$id)->where('status','1')->where('pos',$pos);
        return $data->get();
    }

    public function getCountCatatanName($id)
    {
        $data = $this->model->where('pendaftaran_id',$id)->where('status','1')->where('nama', str_replace("/", "", request()->nama))->count('alasan');
        return $data;
    }

    public function getCatatanName($id)
    {
        $data = $this->model->where('pendaftaran_id',$id)->where('status','1')->where('nama', str_replace("/", "", request()->nama))->get();
        $alasan = array();
        foreach ($data as $list) {
            $arr = $list->alasan;
            array_push($alasan, $arr);
        }

        if(count($data) > 0){
            $return = array(
                    'pendaftaran_id' => $data[0]->pendaftaran_id,
                    'nama' => $data[0]->nama,
                    'hasiluji' => $data[0]->hasiluji,
                    'alasan' => $alasan,
                    'rekomendasi' => $data[0]->rekomendasi,
                    'pos' => $data[0]->pos,
                );
        }else{
            $return = 'kosong';
        }
        return $return;
    }

    public function getAlasan()
    {
        $data = $this->modelalasan->where('itempemeriksaan', str_replace("/", "", request()->item));
        return $data->get();
    }

    public function create($request)
    {
        return $this->model->insert($request);
    }

    public function updateCatatan($id,$request)
    {
        $update = $this->model->where('pendaftaran_id',$id)->where('nama',$request['nama'])->first();
        $update->update($request);

        if ($update->save()) {
            return true;
        }
        return false;
    }

    public function delete($id)
    {
        $delete = $this->model->where('pendaftaran_id',$id)->where('nama', str_replace("/", "", request()->nama))->delete();
        return $delete;
    }
}

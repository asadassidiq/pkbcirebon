<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Kecamatan;
use DB;

class KecamatanRepository
{
    use RepositoryTrait;

    protected $model;

    public function __construct(Kecamatan $model)
    {
        $this->model = $model;
    }

    public function getAllPaginate()
    {
       
        $data = $this->model
                     ->select('districts.id','districts.nama','regencies.nama as kota')
                     ->join('regencies','regencies.id','=','districts.kab_id');
        
        $search = str_replace("/", "", request()->q);
        
        if ($search != '') {
            $data = $data->where('districts.nama', 'LIKE', '%' . $search . '%')->orWhere('regencies.nama', 'LIKE', '%' . $search . '%');
        }

        return $data->orderBy('districts.nama','ASC')->paginate(10);
    }

    public function getAll()
    {
        $data = $this->model->orderBy('districts.nama','ASC');

        return $data->get();
    }

    public function getKecamatan($id)
    {
        $data = $this->model->find($id);
        return $data;
    }

    public function getKecamatanName()
    {
        $data = $this->model->select('districts.nama','districts.id')->join('regencies','regencies.id','=','districts.kab_id')->orderBy('districts.nama', 'ASC');

        $search = str_replace("/", "", request()->kota);
        if($search != '' && $search != 'undefined'){
            $data = $data->where('regencies.nama', $search);
        }
        return $data->get();
    }

    public function create($request)
    {
        return $this->model->create($request);
    }

    public function update($id,$request)
    {
        $update = $this->model->find($id);
        $update->update($request->all());

        if ($update->save()) {
            return true;
        }
        return false;
    }

    public function delete($id)
    {
        $delete = $this->model->where('id', $id);
        $delete->delete();
        return $delete;
    }
}

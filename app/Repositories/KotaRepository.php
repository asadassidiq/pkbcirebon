<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Kota;
use DB;

class KotaRepository
{
    use RepositoryTrait;

    protected $model;

    public function __construct(Kota $model)
    {
        $this->model = $model;
    }

    public function getAllPaginate()
    {
       
        $data = $this->model;
        
        $search = str_replace("/", "", request()->q);
        
        if ($search != '') {
            $data = $data->where('regencies.nama', 'LIKE', '%' . $search . '%');
        }

        return $data->orderBy('regencies.nama','ASC')->paginate(10);
    }

    public function getAll()
    {
        $data = $this->model->orderBy('regencies.nama','ASC');

        return $data->get();
    }

    public function getKota($id)
    {
        $data = $this->model->find($id);
        return $data;
    }

    public function getKotaName()
    {
        $data = $this->model->select('id','nama')->orderBy('id', 'ASC');

        if(request()->regencies != '' && request()->regencies != 'undefined'   ){
            $data = $data->where('nama', request()->regencies);
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

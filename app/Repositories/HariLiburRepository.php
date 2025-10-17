<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\HariLibur;
use DB;

class HariLiburRepository
{
    use RepositoryTrait;

    protected $model;

    public function __construct(HariLibur $model)
    {
        $this->model = $model;
    }

    public function getAll()
    {
       
        $data = $this->model
            ->orderBy('hari_libur.tanggal','ASC');
        $search = str_replace("/", "", request()->q);
        
        if ($search != '') {
            $data = $data->where('hari_libur.tanggal', 'LIKE', '%' . $search . '%');
        }
        return $data->paginate(10);
    }

    public function getCekHariLibur()
    {
        $tgl = date("Y-m-d");
        $data = $this->model
            ->where('hari_libur.tanggal','>=',$tgl)
            ->orderBy('hari_libur.tanggal','ASC');
        return $data->paginate(10);
    }

    public function getHariLibur($id)
    {
        $data = $this->model->find($id);
        return $data;
    }

    public function getHariLiburName()
    {
        $data = $this->model->orderBy('id', 'ASC');

        if(request()->merek != '' && request()->merek != 'undefined'   ){
            $data = $data->where('id', request()->merek);
        }
        return $data->get();
    }

    public function create($request)
    {
        return $this->model->create($request);
    }

    public function updateHariLibur($id,$request)
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

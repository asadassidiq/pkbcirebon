<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Perizinan;
use DB;

class PerizinanRepository
{
    use RepositoryTrait;

    protected $model;

    public function __construct(Perizinan $model)
    {
        $this->model = $model;
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
        return $this->model->create($request);
    }

    public function updatePerizinan($id,$request)
    {
        $update = $this->model->find($id);
        $update->update($request->all());

        if ($update->save()) {
            return true;
        }
        return false;
    }
}

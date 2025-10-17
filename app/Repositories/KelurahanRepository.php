<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Kelurahan;
use App\Models\Kecamatan;
use App\Models\Kota;
use DB;

class KelurahanRepository
{
    use RepositoryTrait;

    protected $model,$modelKota,$modelKec;

    public function __construct(Kelurahan $model, Kota $modelKota, Kecamatan $modelKec)
    {
        $this->model = $model;
        $this->modelKec = $modelKec;
        $this->modelKota = $modelKota;
    }

    public function getAllPaginate()
    {

        $data = $this->model
            ->select('villages.id', 'villages.nama', 'districts.nama as districts')
            ->join('districts', 'districts.id', '=', 'villages.kec_id');

        $search = str_replace("/", "", request()->q);

        if ($search != '') {
            $data = $data->where('villages.nama', 'LIKE', '%' . $search . '%')->orWhere('districts.nama', 'LIKE', '%' . $search . '%');;
        }

        return $data->orderBy('villages.nama', 'ASC')->paginate(10);
    }

    public function getAll()
    {
        $data = $this->model->orderBy('villages.nama', 'ASC');

        return $data->get();
    }

    public function getKelurahan($id)
    {
        $data = $this->model->find($id);
        return $data;
    }

    public function getKelurahanName()
    {
        $search = str_replace("/", "", request()->kecamatan);
        $idKab = $this->modelKota->select('id')->where('regencies.nama', request()->kota)->first();
        if($idKab){
            $idKec = $this->modelKec->select('id')->where('kab_id', $idKab->id)->where('nama',$search)->first();
        }
        $data = $this->model->select('villages.nama')->where('kec_id', $idKec->id)->orderBy('villages.nama', 'ASC');

        return $data->get();
    }

    public function create($request)
    {
        return $this->model->create($request);
    }

    public function update($id, $request)
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

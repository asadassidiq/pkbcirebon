<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tandatangan;
use DB;

class TandatanganRepository
{
    use RepositoryTrait;

    protected $model;

    public function __construct(Tandatangan $model)
    {
        $this->model = $model;
    }

    public function getAll()
    {
        $data = $this->model->select('tandatangan.id','tandatangan.name','users.name as nama')->Join('users','users.id','=','tandatangan.user_id');
        
        $search = str_replace("/", "", request()->q);

        if ($search != '') {
            $data = $data->where('tandatangan.name', 'LIKE', '%' . $search . '%');
        }

        return $data->paginate(10);
    }

    public function getTandatangan($id)
    {
        $data = $this->model->find($id);
        return $data;
    }

    public function getTandatanganName()
    {
        $data = $this->model->select('tandatangan.id','tandatangan.name','users.name as nama')->LeftJoin('users','users.id','=','tandatangan.user_id')->orderBy('id', 'ASC');

        if(request()->tandatangan != '' && request()->tandatangan != 'undefined'   ){
            $data = $data->where('id', request()->tandatangan);
        }
        return $data->get();
    }

    public function createTandatangan($request)
    {
        return $this->model->create($request);
    }

    public function updateTandatangan($request, $id)
    {
        $update = $this->model->where('id',$id)->first();;
        $update->user_id = $request->user_id;

        if ($update->save()) {
            return true;
        }
        return false;
    }

    public function deleteTandatangan($id)
    {
        $delete = $this->model->where('id', $id);
        $delete->delete();
        return $delete;
    }
}

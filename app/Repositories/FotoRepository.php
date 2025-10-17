<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pengujian;
use App\Models\Pendaftaran;
use DB;

class FotoRepository
{
    use RepositoryTrait;

    protected $model,$model1;

    public function __construct(Pengujian $model, Pendaftaran $model1)
    {
        $this->model = $model;
        $this->model1 = $model1;
    }

    public function getAll()
    {
        $data = $this->model1
            ->select('pendaftarans.noantrian','pendaftarans.uuid','kodepenerbitans.keterangan','identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan')
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->join('kodepenerbitans','pendaftarans.kodepenerbitans_id','=','kodepenerbitans.id')
            ->where('pendaftarans.foto','0')
            ->where('pendaftarans.tglpendaftaran',request()->t)
            ->where('pendaftarans.kodepenerbitans_id','<','9')
            ->orderBy('pendaftarans.id','DESC');
        $search = str_replace("/", "", request()->q);
        
        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('identitaskendaraans.nouji','LIKE','%'. $search . '%');
                });
        }

        return $data->paginate(10);
    }

    public function getAllFoto()
    {
        $data = $this->model1
            ->select('pendaftarans.noantrian','pendaftarans.uuid','kodepenerbitans.keterangan','identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan')
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->join('kodepenerbitans','pendaftarans.kodepenerbitans_id','=','kodepenerbitans.id')
            ->where('pendaftarans.foto','1')
            ->where('pendaftarans.tglpendaftaran',request()->t)
            ->where('pendaftarans.kodepenerbitans_id','<','9')
            ->orderBy('pendaftarans.id','DESC');
        $search = str_replace("/", "", request()->q);
        
        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('identitaskendaraans.nouji','LIKE','%'. $search . '%');
                });
        }

        return $data->paginate(10);
    }
}

<?php

namespace App\Repositories;

use App\Models\UserOnline;
use App\Models\DatakendaraanOnline;
use Illuminate\Support\Facades\DB;
class UserOnlineRepository
{
    protected $model, $model1;

    public function __construct(UserOnline $model, DatakendaraanOnline $model1)
    {
        $this->model = $model;
        $this->model1 = $model1;
    }

    public function getAll()
    {
        $tipe = request()->t;
        if($tipe == 1){
            $tipe = 'perseorangan';
        } elseif($tipe == 2){
            $tipe = 'perusahaan';
        }
        $data = $this->model->select('uuid','no_identitas', 'name', 'nama_badan_usaha', 'email', 'telepon','provinsi', 'kabupaten', 'kecamatan', 'kelurahan', 'alamat', DB::raw('SUM(datakendaraan_online.id) as total_kendaraan') );
        $data = $data->leftjoin('datakendaraan_online', 'users_pkb.uuid', '=', 'datakendaraan_online.user_id');
        $data = $data->where('users_pkb.tipe_akun', $tipe);
        $search = str_replace("/", "", request()->q);

        if ($search != '') {
            $data = $data->where('users_pkb.nama_badan_usaha', 'LIKE', '%' . $search . '%');
            $data = $data->orWhere('users_pkb.name', 'LIKE', '%' . $search . '%');
        }

        return $data->groupBy('users_pkb.id')->paginate(10);
    }

    public function getDatakendaraanOnline(string $id)
    {
        $data = $this->model1->select('noregistrasikendaraan', 'nouji','status')->where('user_id', $id);
        $search = str_replace("/", "", request()->q);
        if ($search != '') {
            $data = $data->where('noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                        ->orWhere('nouji', 'LIKE', '%' . $search . '%');
        }
        return $data->paginate(10);
    }

    public function storeDatakendaraanOnline(array $data)
    {
        return $this->model1->create($data);
    }

    public function updateDatakendaraanOnline(string $id, array $data)
    {
        return $this->model1->where('user_id', $id)->update($data);
    }

}
<?php

namespace App\Repositories;

use App\Models\UserOnline;

class UserOnlineRepository
{
    protected $model;

    public function __construct(UserOnline $model)
    {
        $this->model = $model;
    }

    

    public function getAll()
    {
        $tipe = request()->t;
        if($tipe == 1){
            $tipe = 'perseorangan';
        } elseif($tipe == 2){
            $tipe = 'perusahaan';
        }
        $data = $this->model->select('no_identitas', 'name', 'nama_badan_usaha', 'email', 'telepon','provinsi', 'kabupaten', 'kecamatan', 'kelurahan', 'alamat');
        $data = $data->where('users_pkb.tipe_akun', $tipe);
        $search = str_replace("/", "", request()->q);

        if ($search != '') {
            $data = $data->where('users_pkb.nama_badan_usaha', 'LIKE', '%' . $search . '%');
            $data = $data->orWhere('users_pkb.name', 'LIKE', '%' . $search . '%');
        }

        return $data->paginate(10);
    }


}
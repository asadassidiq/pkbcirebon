<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Kuota;
use App\Models\HariLibur;
use DB;

class KuotaRepository
{
    use RepositoryTrait;

    protected $model;

    public function __construct(Kuota $model)
    {
        $this->model = $model;
    }

    public function getAll()
    {

        $data = $this->model
            ->orderBy('kuota.tanggal', 'ASC');
        $search = str_replace("/", "", request()->q);

        if ($search != '') {
            $data = $data->where('kuota.tanggal', 'LIKE', '%' . $search . '%');
        }
        return $data->paginate(10);
    }

    public function getCekKuota()
    {
        $tgl = date("Y-m-d");
        $data = $this->model
            ->where('kuota.tanggal', '>=', $tgl)
            // ->where('kuota.tersediapagi', '>', 0)
            ->orderBy('kuota.tanggal', 'ASC')
            ->limit(20);
        return $data->get();
    }

    public function getCekKuota1()
    {
        $tgl = str_replace("/", "", request()->t);
        $data = $this->model
            ->where('kuota.tanggal', $tgl);
        return $data->first();
    }

    public function checkKuota($tgl,$waktu)
    {
        if($waktu == '1'){
            $data = $this->model->where('tanggal',$tgl)->first();
            if($data)
            {
                if($data->tersediapagi == 0)
                {
                    return false;
                }
                return true;
            }
        }elseif($waktu == '2'){
            $data = $this->model->where('tanggal',$tgl)->first();
            if($data)
            {
                if($data->tersediasiang == 0)
                {
                    return false;
                }
                return true;
            }
        }else{
            return false;
        }
        return false;
    }

    public function getKuota($id)
    {
        $data = $this->model->find($id);
        return $data;
    }

    public function getKuotaName()
    {
        $data = $this->model->orderBy('id', 'ASC');

        if (request()->merek != '' && request()->merek != 'undefined') {
            $data = $data->where('id', request()->merek);
        }
        return $data->get();
    }

    public function storeKuota($request)
    {
        $year = date('Y') . '-12-31';
        $next_year = strtotime($year);
        $current_time = time();
        $datenow = date('Y-m-d');
        $check = $this->model->where('tanggal', $datenow)->first();
        // $data = false;
        while ($current_time < $next_year) {
            $current_time = strtotime('+1 day', $current_time);
            $day = date('D', $current_time);
            $hrlibur = HariLibur::where('tanggal', date('Y-m-d', $current_time))->first();

            if ($hrlibur) {
                $data = $this->model->where('tanggal', date('Y-m-d', $current_time))->first();
                if ($hrlibur) {
                    $data = $this->model->create([
                        'tanggal'       => date('Y-m-d', $current_time),
                        'kuotapagi'         => '0',
                        'kuotasiang'         => '0',
                        'tersediapagi'      => '0',
                        'tersediasiang'      => '0',
                    ]);
                } else {
                    $data->kuotapagi = '0';
                    $data->kuotasiang = '0';
                    $data->tersediapagi = '0';
                    $data->tersediasiang = '0';
                    $data->save();
                }
            } elseif ($day == 'Sat' || $day == 'Sun') {
                $data = true;
            } elseif ($day == 'Fri') {
                if ($check) {
                    $data = $this->model->where('tanggal', date('Y-m-d', $current_time))->first();
                    if($data){
                        if($request->kuotapagijumat >= $data->kuotapagi){
                            $tersediapagi = (int)$data->tersediapagi + ((int)$request->kuotapagijumat - (int)$data->kuotapagi);
                        }else{
                            $tersediapagi = (int)$data->tersediapagi - (int)$data->kuotapagi - (int)$request->kuotapagijumat;
                        }
                        if($request->kuotasiangjumat >= $data->kuotasiang){
                            $tersediasiang = (int)$data->tersediasiang + ((int)$request->kuotasiangjumat - (int)$data->kuotasiang);
                        }else{
                            $tersediasiang = (int)$data->tersediasiang - (int)$data->kuotasiang - (int)$request->kuotasiangjumat;
                        }
                    }else{
                        $tersediapagi = $request->kuotapagijumat;
                        $tersediasiang = $request->kuotasiangjumat;
                    }
                    $data->kuotapagi = $request->kuotapagijumat;
                    $data->kuotasiang = $request->kuotasiangjumat;
                    $data->tersediapagi = $tersediapagi;
                    $data->tersediasiang = $tersediasiang;
                    $data->save();
                } else {
                    $data = $this->model->create([
                        'tanggal'       => date('Y-m-d', $current_time),
                        'kuotapagi'         => $request->kuotapagijumat,
                        'kuotasiang'         => $request->kuotasiangjumat,
                        'tersediapagi'      => $request->kuotapagijumat,
                        'tersediasiang'      => $request->kuotasiangjumat,
                    ]);
                }
            } else {
                if ($check) {
                    $data = $this->model->where('tanggal', date('Y-m-d', $current_time))->first();
                    if($data){
                        if($request->kuotapaginormal >= $data->kuotapagi){
                            $tersediapagi = (int)$data->tersediapagi + ((int)$request->kuotapaginormal - (int)$data->kuotapagi);
                        }else{
                            $tersediapagi = (int)$data->tersediapagi - (int)$data->kuotapagi - (int)$request->kuotapaginormal;
                        }
                        if($request->kuotasiangnormal >= $data->kuotasiang){
                            $tersediasiang = (int)$data->tersediasiang + ((int)$request->kuotasiangnormal - (int)$data->kuotasiang);
                        }else{
                            $tersediasiang = (int)$data->tersediasiang - (int)$data->kuotasiang - (int)$request->kuotasiangnormal;
                        }
                    }else{
                        $tersediapagi = $request->kuotapaginormal;
                        $tersediasiang = $request->kuotasiangnormal;
                    }
                    $data->kuotapagi = $request->kuotapaginormal;
                    $data->kuotasiang = $request->kuotasiangnormal;
                    $data->tersediapagi = $tersediapagi;
                    $data->tersediasiang = $tersediasiang;
                    $data->save();
                } else {
                    $data = $this->model->create([
                        'tanggal'       => date('Y-m-d', $current_time),
                        'kuotapagi'         => $request->kuotapaginormal,
                        'kuotasiang'         => $request->kuotasiangnormal,
                        'tersediapagi'      => $request->kuotapaginormal,
                        'tersediasiang'      =>$request->kuotasiangnormal,
                    ]);
                }
            }
        }
        return $data;
    }

    public function updateKuota($id, $request)
    {
        $update = $this->model->where('id', $id)->first();
        $update->update($request);

        if ($update->save()) {
            return true;
        }
        return false;
    }

    public function reductionKuota($tgl,$waktu)
    {
        $update = $this->model->where('tanggal', $tgl)->first();
        if($update)
        {
            if($waktu == '1')
            {
                $update->tersediapagi = (int)$update->tersediapagi - (int)1;
            }
            if($waktu == '2')
            {
                $update->tersediasiang = (int)$update->tersediasiang - (int)1;
            }
            $update->save();
        }
    }

    public function delete($id)
    {
        $delete = $this->model->where('id', $id);
        $delete->delete();
        return $delete;
    }
}

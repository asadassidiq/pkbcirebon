<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pendaftaran;
use App\Models\Identitaskendaraan;
use App\Models\Kuota;
use App\Models\PendaftaransOnline;
use App\Models\Persuratan;
use DB;

class PendaftaranOnlineRepository
{
    use RepositoryTrait;

    protected $model,$modelOnline,$modelPenyerahan,$modelIden;

    public function __construct(Pendaftaran $model, PendaftaransOnline $modelOnline, Identitaskendaraan $modelIden)
    {
        $this->model = $model;
        $this->modelIden = $modelIden;
        $this->modelOnline = $modelOnline;
    }

    public function getAll()
    {

        $data = $this->modelOnline
            ->select('pendaftaransonline.uuid', 'kodepenerbitans.keterangan', 'pendaftaransonline.nouji', 'pendaftaransonline.noregistrasikendaraan', 'pendaftaransonline.status')
            ->join('kodepenerbitans', 'pendaftaransonline.kodepenerbitans_id', '=', 'kodepenerbitans.id')
            ->where('pendaftaransonline.tglpendaftaran', request()->t)
            ->orderBy('pendaftaransonline.id', 'ASC');
        $search = str_replace("/", "", request()->q);
        $status = request()->s;
        if ($status != '') {
            $data = $data->where(function ($query) use ($status) {
                $query->where('pendaftaransonline.status', $status);
            });
        }
        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('pendaftaransonline.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('pendaftaransonline.nouji', 'LIKE', '%' . $search . '%');
            });
        }
        return $data->paginate(10);
    }

    public function getPendaftaranDetail($id)
    {
        $data = $this->modelOnline->where('uuid', $id)->join('kodepenerbitans', 'pendaftaransonline.kodepenerbitans_id', '=', 'kodepenerbitans.id')->first();
        $arr = array(
            'kodepenerbitans_id' => $data->kodepenerbitans_id,
            'keterangan' => $data->keterangan,
            'waktu' => $data->waktu,
            'tglpendaftaran' => $data->tglpendaftaran,
            'nouji' => $data->nouji,
            'noregistrasikendaraan' => $data->noregistrasikendaraan,
            'bahanbakar'    => '',
            'nomesin'       => '',
            'norangka'      => '',
            'nama'          => '',
            'alamat'        => '',
            'merek'         => '',
            'tipe'          => '',
            'jenis'         => '',
            'subjenis'      => '',
            'thpembuatan'   => '',
            'status_data'   => '0',
        );
        if($data)
        {
            $iden = $this->modelIden->where('nouji',$data->nouji)->first();
            if($iden){
                $arr = array(
                    'kodepenerbitans_id' => $data->kodepenerbitans_id,
                    'keterangan' => $data->keterangan,
                    'waktu' => $data->waktu,
                    'tglpendaftaran' => $data->tglpendaftaran,
                    'nouji' => $data->nouji,
                    'noregistrasikendaraan' => $iden->noregistrasikendaraan,
                    'bahanbakar'    => $iden->bahanbakar,
                    'nomesin'       => $iden->nomesin,
                    'norangka'      => $iden->norangka,
                    'nama'          => $iden->nama,
                    'alamat'        => $iden->alamat,
                    'merek'         => $iden->merek,
                    'tipe'          => $iden->tipe,
                    'jenis'         => $iden->jenis,
                    'subjenis'      => $iden->subjenis,
                    'thpembuatan'   => $iden->thpembuatan,
                    'status_data'   => '1',
                );
                return $arr;
            }
            return $arr;
        }
        return $arr;
    }

    public function checkPendaftaranOnline($tgl,$nouji)
    {
        $oneWeekBefore = date('Y-m-d', strtotime('-1 week', strtotime($tgl)));
        $oneWeekAfter  = date('Y-m-d', strtotime('+1 week', strtotime($tgl)));
        $data = $this->modelOnline->whereBetween('tglpendaftaran',[$oneWeekBefore,$oneWeekAfter])->where('nouji',$nouji)->count();
        if($data)
        {
            if($data == 0){
                return true;
            }else{
                return false;
            }
        }
        return true;
    }

    public function createPendaftaranOnline($request)
    {
        return $this->modelOnline->create($request->all());
    }

    public function approve($request)
    {
        $update = $this->modelOnline->where('tglpendaftaran',$request->tglpendaftaran)->where('nouji',$request->nouji)->first();
        if($update)
        {
            $update->status = '1';
            $update->save();
        }
        return true;
    }

    public function updatePendaftaranOnline($id,$request)
    {
        $update = $this->modelOnline->find($id);
        $update->update($request->all());

        if ($update->save()) {
            return true;
        }
        return false;
    }

    public function delete($id)
    {
        $delete = $this->modelOnline->where('id', $id);
        $delete->delete();
        return $delete;
    }
}
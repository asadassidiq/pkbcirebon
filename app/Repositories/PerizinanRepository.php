<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Perizinan;
use App\Models\Pendaftaran;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class PerizinanRepository
{
    use RepositoryTrait;

    protected $model,$modelPendaftaran;

    public function __construct(Perizinan $model, Pendaftaran $modelPendaftaran)
    {
        $this->model = $model;
        $this->modelPendaftaran = $modelPendaftaran;
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
        $data = $this->model->create($request);
        if($data){
            $this->upPosisi($request['pendaftaran_id'],'0');
            return $data;
        }
        return false;
    }

    public function upPosisi($id,$request)
    {
        $update = $this->modelPendaftaran->where('id',$id)->first();
        if($update){
            if($update->posisi == null){
                $update->posisi = $request;
                $update->foto = null;
                if ($update->save()) {
                    return true;
                }
            }
            return true;
        }
        
        return false;
    }

    public function updatePerizinan($id,$request)
    {
        $user = auth()->user();
        $update = $this->model->where('uuid',$id)->first();
        if($update){
            $update->approved       = $request->approved;
            $update->approval_notes = $request->approval_notes;
            $update->approved_by_user_id = $user->id;
            if($update->save()){
                $dataId = $this->model->where('id',$update->pendaftaran_id)->first();
                if(!$dataId){
                    return false;
                }
                if($dataId->kodepenerbitans_id == '10' || $dataId->kodepenerbitans_id == '9'){
                    $dataId->posisi = 6;
                }else{
                    $dataId->posisi = 1;  
                }
                if ($dataId->save()) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }

    public function updateDatakendaraan($id,$request)
    {
        DB::beginTransaction();
        // try {
            // ambil data join
            $pendaftaran = DB::table('pendaftarans')
                ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
                ->join('datakendaraans', 'datakendaraans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
                ->select(
                    'pendaftarans.id as pendaftaran_id',
                    'identitaskendaraans.id as identitas_id',
                    'datakendaraans.id as data_id'
                )
                ->where('pendaftarans.uuid', $id)
                ->first();

            if (!$pendaftaran) {
                return response()->json(['message' => 'Data tidak ditemukan'], 404);
            }

            // ambil log perubahan
            $logs = $request;
            foreach ($logs as $log) {
                $field = $log['field'];
                $baru  = $log['baru'];

                // cek kolom ada di tabel mana
                if (Schema::hasColumn('identitaskendaraans', $field)) {
                    DB::table('identitaskendaraans')
                        ->where('id', $pendaftaran->identitas_id)
                        ->update([$field => $baru]);
                } elseif (Schema::hasColumn('datakendaraans', $field)) {
                    DB::table('datakendaraans')
                        ->where('id', $pendaftaran->data_id)
                        ->update([$field => $baru]);
                }
            }

            DB::commit();
        // }catch (\Exception $e) {
        // DB::rollBack();
        //     return response()->json([
        //         'success' => false,
        //         'messages' => 'Gagal approve: ' . $e->getMessage(),
        //     ], 500);
        // }
    }
}

<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pendaftaran;
use App\Models\Identitaskendaraan;
use App\Models\Kuota;
use App\Models\PendaftaransOnline;
use App\Models\Persuratan;
use App\Models\UserOnline;
use DB;

class PendaftaranOnlineRepository
{
    use RepositoryTrait;

    protected $model,$modelOnline,$modelPenyerahan,$modelIden,$modelUserOnline;

    public function __construct(Pendaftaran $model, PendaftaransOnline $modelOnline, Identitaskendaraan $modelIden, UserOnline $modelUserOnline)
    {
        $this->model = $model;
        $this->modelIden = $modelIden;
        $this->modelOnline = $modelOnline;
        $this->modelUserOnline = $modelUserOnline;
    }

    public function getAll()
    {

        $data = $this->modelOnline
            ->select('bookings.uuid','bookings.kode_booking','bookings.tanggal', 'bookings.nomor_uji as nouji', 'bookings.nomor_polisi as noregistrasikendaraan','bookings.jenis_uji', 'bookings.status')
            // ->join('kodepenerbitans', 'bookings.kodepenerbitans_id', '=', 'kodepenerbitans.id')
            ->where('bookings.tanggal', request()->t)
            ->orderBy('bookings.created_at', 'ASC');
        $search = str_replace("/", "", request()->q);
        $status = request()->s;
        if ($status != '') {
            $data = $data->where(function ($query) use ($status) {
                $query->where('bookings.status', $status);
            });
        }
        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('bookings.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('bookings.nouji', 'LIKE', '%' . $search . '%');
            });
        }
        return $data->paginate(10);
    }

    public function getPendaftaranDetail($id)
    {
        $data = $this->modelOnline->where('uuid', $id)->first();

        if(!$data){
            return null;
        }

        $noidentitaspemilik = $this->modelUserOnline->where('id', $data->user_id)->value('no_identitas') ?? '0000000000000000';

        $arr = array(
            // 'kodepenerbitans_id' => $data->kodepenerbitans_id,
            'uuid' => $data->uuid,
            'kode_booking' => $data->kode_booking,
            'keterangan' => $this->replaceJenisPenerbitan($data->jenis_uji),
            'tglpendaftaran' => $data->tanggal,
            'nouji' => $data->nomor_uji,
            'noregistrasikendaraan' => $data->nomor_polisi,
            'noidentitaspemilik' => $noidentitaspemilik,
            'nama'    => $data->nama_pemilik,
            'namapemohon'       => $data->pemohon_nama,
            'notelp'      => $data->pemohon_telepon,
            'merek'         => '',
            'tipe'          => '',
            'jenis'         => '',
            'subjenis'      => '',
            'nomesin'       => '',
            'norangka'      => '',
            'nosertifikatreg' => '',
            'tglsertifikatreg' => '',
            'tgl_registrasikendaraan' => '',
            'status_data'   => '0',
            'catatan'       => 'data belum lengkap',
        );
        if($data)
        {
            $iden = $this->modelIden->select('merek','tipe','jenis','subjenis','nomesin','norangka')->where('nouji',$data->nomor_uji)->first();
            if($iden){
                $status_data = $this->checkStatusData($iden);
                $catatan = $this->checkMessageData($iden);
                $arr = array(
                    'uuid' => $data->uuid,
                    'kode_booking' => $data->kode_booking,
                    'keterangan' => $this->replaceJenisPenerbitan($data->jenis_uji),
                    'tglpendaftaran' => $data->tanggal,
                    'nouji' => $data->nomor_uji,
                    'noregistrasikendaraan' => $data->nomor_polisi,
                    'noidentitaspemilik' => $noidentitaspemilik,
                    'nama'    => $data->nama_pemilik,
                    'namapemohon'       => $data->pemohon_nama,
                    'notelp'      => $data->pemohon_telepon,
                    'merek'         => $iden->merek,
                    'tipe'          => $iden->tipe,
                    'jenis'         => $iden->jenis,
                    'subjenis'      => $iden->subjenis,
                    'nomesin'       => $iden->nomesin,
                    'norangka'      => $iden->norangka,
                    'nosertifikatreg' => $iden->nosertifikatreg ?? '',
                    'tglsertifikatreg' => $iden->tglsertifikatreg ?? '',
                    'tgl_registrasikendaraan' => $iden->tgl_registrasikendaraan ?? '',
                    'status_data'   => $status_data,
                    'catatan'       => $catatan,
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

    private function checkStatusData($iden)
    {
        if($iden->merek == '' || $iden->idmerek == '' || $iden->tipe == '' || $iden->idtipe == '' || $iden->idvarian == '' || $iden->idjenis == '' || $iden->idsubjenis == '' || $iden->idbahanbakar == '' || $iden->jenis == '' || $iden->subjenis == '' || $iden->nomesin == '' || $iden->norangka == ''){
            return '2';
        }elseif($iden->merek == null || $iden->idmerek == null || $iden->tipe == null || $iden->idtipe == null || $iden->idvarian == null || $iden->idjenis == null || $iden->idsubjenis == null || $iden->idbahanbakar == null || $iden->jenis == null || $iden->subjenis == null || $iden->nomesin == null || $iden->norangka == null){
            return '2';
        }
        return '1';
    }

    private function checkMessageData($data){
        $message = '';
        if($data->merek == '' || $data->idmerek == '')
            $message .= 'Merek tidak boleh kosong. ';
        if($data->tipe == '' || $data->idtipe == '')
            $message .= 'Tipe tidak boleh kosong. ';
        if($data->idvarian == '')
            $message .= 'Varian tidak boleh kosong. ';
        if($data->idjenis == '')
            $message .= 'Jenis tidak boleh kosong. ';
        if($data->idsubjenis == '')
            $message .= 'Subjenis tidak boleh kosong. ';
        if($data->idbahanbakar == '')
            $message .= 'Bahan Bakar tidak boleh kosong. ';
        if($data->jenis == '')
            $message .= 'Jenis tidak boleh kosong. ';
        if($data->subjenis == '')
            $message .= 'Subjenis tidak boleh kosong. ';
        if($data->nomesin == '')
            $message .= 'Nomor Mesin tidak boleh kosong. ';
        if($data->norangka == '')
            $message .= 'Nomor Rangka tidak boleh kosong. ';

        return $message;
    }

    private function replaceJenisPenerbitan($data)
    {
        if($data == 'uji_pertama')
            return 'Uji Pertama';
        if($data == 'uji_berkala')
            return 'Uji Berkala';
        if($data == 'numpang_uji_masuk')
            return 'Numpang Uji Masuk';
        if($data == 'numpang_uji_keluar')
            return 'Numpang Uji Keluar';
        if($data == 'mutasi_masuk')
            return 'Mutasi Masuk';
        if($data == 'mutasi_keluar')
            return 'Mutasi Keluar';
        return $data;
    }
}
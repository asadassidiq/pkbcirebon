<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pendaftaran;
use App\Models\Identitaskendaraan;
use App\Models\Datakendaraan;
use App\Models\Kuota;
use App\Models\PendaftaransOnline;
use App\Models\Persuratan;
use App\Models\UserOnline;
use DB;

class PendaftaranOnlineRepository
{
    use RepositoryTrait;

    protected $model,$modelOnline,$modelPenyerahan,$modelIden,$modelUserOnline,$modelDataKendaraan;

    public function __construct(Pendaftaran $model, PendaftaransOnline $modelOnline, Identitaskendaraan $modelIden, UserOnline $modelUserOnline, Datakendaraan $modelDataKendaraan)
    {
        $this->model = $model;
        $this->modelIden = $modelIden;
        $this->modelOnline = $modelOnline;
        $this->modelUserOnline = $modelUserOnline;
        $this->modelDataKendaraan = $modelDataKendaraan;
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
            'thpembuatan' => '',
            'nosertifikatreg' => '',
            'tglsertifikatreg' => '',
            'tgl_registrasikendaraan' => '',
            'status_data'   => '0',
            'catatansistem'       => 'data belum lengkap',
        );
        if($data)
        {
            $iden = $this->modelIden->select('nama','merek','tipe','jenis','subjenis','nomesin','norangka','idmerek','idtipe','idvarian','idjenis','idsubjenis','idbahanbakar')->where('nouji',$data->nomor_uji)->first();
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
                    'nama'    => $iden->nama,
                    'namapemohon'       => $data->pemohon_nama,
                    'notelp'      => $data->pemohon_telepon,
                    'merek'         => $iden->merek,
                    'tipe'          => $iden->tipe,
                    'jenis'         => $iden->jenis,
                    'subjenis'      => $iden->subjenis,
                    'nomesin'       => $iden->nomesin,
                    'norangka'      => $iden->norangka,
                    'thpembuatan' => $iden->thpembuatan ?? '',
                    'nosertifikatreg' => $iden->nosertifikatreg ?? '',
                    'tglsertifikatreg' => $iden->tglsertifikatreg ?? '',
                    'tgl_registrasikendaraan' => $iden->tgl_registrasikendaraan ?? '',
                    'status_data'   => $status_data,
                    'catatansistem'       => $catatan,
                );
                return $arr;
            }
            return $arr;
        }
        return $arr;
    }

    public function complateDataandApprove($request)
    {
        $update = $this->modelOnline->where('uuid',$request->uuid)->first();
        if($update)
        {
            $createPendaftaran = $this->createPendaftaran($request);
            return true;
        }
        return 'Data tidak ditemukan';
    }

    private function createPendaftaran($re)
    {
        $identitaskendaraan_id = $this->modelIden->where('nouji',$re->nouji)->first()->id;
        if(!$identitaskendaraan_id) {
            $createIden = $this->modelIden->create([
                'nouji' => $re->nouji,
                'merek' => $re->merek,
                'tipe' => $re->tipe,
                'jenis' => $re->jenis,
                'subjenis' => $re->subjenis,
                'nomesin' => $re->nomesin,
                'norangka' => $re->norangka,
                'thpembuatan' => $re->thpembuatan ?? '',
                'nosertifikatreg' => $re->nosertifikatreg ?? '',
                'tglsertifikatreg' => $re->tglsertifikatreg ?? '',
                'tgl_registrasikendaraan' => $re->tgl_registrasikendaraan ?? '',
            ]);
            if(!$createIden) {
                $createDatakendaraan = $this->modelDataKendaraan->create([
                    'identitaskendaraan_id' => $createIden->id
                ]);
                
            }
        }
        $posisi = 0;
        if($re->status_data == 1){
            $posisi = 1; 
        }
        $arrData = array(
            'uuid' => $re->uuid,
            'identitaskendaraan_id' => $identitaskendaraan_id,
            'kodepenerbitans_id' => $this->returnKodePenerbitan($re->jenis_uji),
            'tglpendaftaran' => $re->tglpendaftaran ?? '',
            'namapemohon' => $re->namapemohon ?? '',
            'notelp' => $re->notelp ?? '',
            'status' => 1,
            'verif' => 1,
            'posisi' => $posisi,
            'jenispendaftaran' => 'on',
            'noantrian' => $re->noantrian ?? '',
        );

        $createPendaftaran = $this->model->create($arrData);
        $updateBooking = $this->modelOnline->where('uuid', $re->uuid)->first();
        if($updateBooking) {
            $updateBooking->status = 'hadir';
            $updateBooking->nomor_antrian = $re->noantrian;
            $updateBooking->catatan = $re->catatan;
            $updateBooking->save();
        }

        return true;
    }

    public function reschedule($request)
    {
        $update = $this->modelOnline->where('uuid',$request->uuid)->first();
        if($update)
        {
            $kuota = $this->checkKuota($request->tglpendaftaran);
            if($kuota < 3) { // Assuming the maximum quota is 10
                $update->tglpendaftaran = $request->tglpendaftaran;
                $update->catatan = $request->catatan;
                $update->save();
                return 'Tanggal pendaftaran berhasil diubah';
            } else {
                return 'Kuota untuk tanggal tersebut sudah penuh';
            }
        }
        return 'Data tidak ditemukan';
    }

    private function checkKuota($tgl)
    {
        $count = $this->modelOnline->where('tglpendaftaran', $tgl)->count();
        return $count;
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

    private function checkMessageData($iden){
        $message = '';
        if($iden->merek == '' || $iden->idmerek == '')
            $message .= 'Merek tidak boleh kosong. ';
        if($iden->tipe == '' || $iden->idtipe == '')
            $message .= 'Tipe tidak boleh kosong. ';
        if($iden->idvarian == '')
            $message .= 'Varian tidak boleh kosong. ';
        if($iden->idjenis == '')
            $message .= 'Jenis tidak boleh kosong. ';
        if($iden->idsubjenis == '')
            $message .= 'Subjenis tidak boleh kosong. ';
        if($iden->idbahanbakar == '')
            $message .= 'Bahan Bakar tidak boleh kosong. ';
        if($iden->jenis == '')
            $message .= 'Jenis tidak boleh kosong. ';
        if($iden->subjenis == '')
            $message .= 'Subjenis tidak boleh kosong. ';
        if($iden->nomesin == '')
            $message .= 'Nomor Mesin tidak boleh kosong. ';
        if($iden->norangka == '')
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

    private function returnKodepenerbitan($data)
    {
        if($data == 'uji_pertama')
            return '1';
        if($data == 'uji_berkala')
            return '2';
        if($data == 'numpang_uji_masuk')
            return '5';
        if($data == 'numpang_uji_keluar')
            return '9';
        if($data == 'mutasi_masuk')
            return '6';
        if($data == 'mutasi_keluar')
            return '10';
        return '0';
    }
}
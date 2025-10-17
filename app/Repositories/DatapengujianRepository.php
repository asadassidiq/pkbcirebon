<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Datapengujian;
use App\Models\Pendaftaran;
use App\Models\Identitaskendaraan;
use App\Models\Datakendaraan;
use App\Models\LaikJalan;
use DB;

class DatapengujianRepository
{
    use RepositoryTrait;

    protected $model, $model1, $modelIden, $modelDatakend, $modelLaikJalan;

    public function __construct(Datapengujian $model, Pendaftaran $model1, Identitaskendaraan $modelIden, Datakendaraan $modelDatakend, LaikJalan $modelLaikJalan )
    {
        $this->model = $model;
        $this->model1 = $model1;
        $this->modelIden = $modelIden;
        $this->modelDatakend = $modelDatakend;
        $this->modelLaikJalan = $modelLaikJalan;
    }

    public function getAll()
    {

        $tgl = date_format(date_create(request()->t),"dmY");
        $data = $this->model
            ->select('datapengujian.idx','kodepenerbitans.keterangan','datapengujian.nouji', 'datapengujian.noregistrasikendaraan','nokendalikartu','rfid','datetimepersovisual','datetimecetaksertifikat','datetimepersorfid')
            ->join('kodepenerbitans','datapengujian.statuspenerbitan','=','kodepenerbitans.id')
            ->where('datapengujian.tgluji',$tgl)
            ->orderBy('datapengujian.idx','DESC');
        $search = str_replace("/", "", request()->q);
        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('nouji', 'LIKE', '%' . $search . '%');
            });
        }

        return $data->paginate(10);
    }

    public function getDatapengujian($id)
    {
        // $data = $this->model->where('idx',$id)->first();
        $data = $this->model1->select('datapengujian.idx', 'datapengujian.statuspenerbitan', 'datapengujian.nouji', 'datapengujian.nama', 'datapengujian.alamat', 'datapengujian.noidentitaspemilik', 'datapengujian.nosertifikatreg', 'datapengujian.tglsertifikatreg', 'datapengujian.noregistrasikendaraan', 'datapengujian.norangka', 'datapengujian.nomesin', 'datapengujian.merek', 'datapengujian.tipe', 'datapengujian.jenis', 'datapengujian.thpembuatan', 'datapengujian.bahanbakar', 'datapengujian.isisilinder', 'datapengujian.dayamotorpenggerak', 'datapengujian.jbb', 'datapengujian.jbkb', 'datapengujian.jbi', 'datapengujian.jbki', 'datapengujian.mst', 'datapengujian.beratkosong', 'datapengujian.konfigurasisumburoda', 'datapengujian.ukuranban', 'datapengujian.panjangkendaraan', 'datapengujian.lebarkendaraan', 'datapengujian.tinggikendaraan', 'datapengujian.panjangbakatautangki', 'datapengujian.lebarbakatautangki', 'datapengujian.tinggibakatautangki', 'datapengujian.julurdepan', 'datapengujian.julurbelakang', 'datapengujian.jaraksumbu1_2', 'datapengujian.jaraksumbu2_3', 'datapengujian.jaraksumbu3_4', 'datapengujian.dayaangkutorang', 'datapengujian.dayaangkutbarang', 'datapengujian.kelasjalanterendah', 'datapengujian.kodewilayah', 'datapengujian.kodewilayahasal', 'datapengujian.masaberlakuuji', 'datapengujian.tgluji', 'datapengujian.statuslulusuji', 'datapengujian.alatuji_emisiasapbahanbakarsolar', 'datapengujian.alatuji_emisicobahanbakarbensin', 'datapengujian.alatuji_emisihcbahanbakarbensin','datapengujian.alatuji_remutamatotalgayapengereman', 'datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan1', 'datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan2', 'datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan3', 'datapengujian.alatuji_remutamaselisihgayapengeremanrodakirikanan4', 'datapengujian.alatuji_remparkirtangan', 'datapengujian.alatuji_remparkirkaki','datapengujian.alatuji_kincuprodadepan', 'datapengujian.alatuji_tingkatkebisingan', 'datapengujian.alatuji_lampuutamakekuatanpancarlampukanan', 'datapengujian.alatuji_lampuutamakekuatanpancarlampukiri', 'datapengujian.alatuji_lampuutamapenyimpanganlampukanan', 'datapengujian.alatuji_lampuutamapenyimpanganlampukiri', 'datapengujian.alatuji_penunjukkecepatan', 'datapengujian.alatuji_kedalamanalurban', 'identitaskendaraans.model', 'identitaskendaraans.peruntukan', 'identitaskendaraans.warna', 'datakendaraans.p', 'datakendaraans.q', 'datakendaraans.r', 'datakendaraans.a', 'datakendaraans.b', 'datakendaraans.beratsumbu1', 'datakendaraans.beratsumbu2', 'datakendaraans.beratsumbu3', 'datakendaraans.beratsumbu4', 'datakendaraans.groundclearance', 'datakendaraans.bahan','datapengujian.idpetugasuji')
                ->join('datapengujian','datapengujian.idx','=','pendaftarans.idx')
                ->join('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')
                ->join('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')
                ->where('pendaftarans.idx',$id)->first();
        return $data;
    }

    public function getDatapengujianName()
    {
        $data = $this->model->orderBy('id', 'ASC');

        if(request()->merek != '' && request()->merek != 'undefined'   ){
            $data = $data->where('id', request()->merek);
        }
        return $data->get();
    }

    public function create($request)
    {
        return $this->model->create($request);
    }

    public function nosertifikat($id, $request){
        $update = $this->model->find($id);
        $update->nokendalikartu = $request->nokendalikartu;
        $update->rfid = $request->rfid;
        $update->perso = $request->perso;
        if ($update->save()) {
            $upPend = $this->model1::where('idx',$update->idx)->orderBy('tglpendaftaran','DESC')->first();
            $upPend->posisi = '11';
            if ($upPend->save()){
                return true;
            }
        }
        return false;
    }

    public function getnosertifikat($id){
        $data = $this->model
                ->select('nokendalikartu','rfid','perso')
                ->find($id);
        return $data;
    }

    public function undoVerif($id){
        $update = Pendaftaran::where('idx',$id)->first();
        $update->posisi = '9';
        if ($update->save()) {
            $data = Pendaftaran::where('pendaftarans.idx',$id)->first();
            if($data){
                $delete = $this->model->where('idx', $id)->first();
                $delete->delete();
                $data->idx = '';
                $data->save();
            }
            return true;
        }
        return false;
    }

    public function updateDatapengujian($id,$request)
    {
        $masaberlakuuji=date_create($request['masaberlakuuji']);
        $masaberlakuuji= date_format($masaberlakuuji,"dmY");
        $tgluji=date_create($request['tgluji']);
        $tgluji= date_format($tgluji,"dmY");
        $request['tgluji'] = $tgluji;
        $request['masaberlakuuji'] = $masaberlakuuji;

        $update = $this->model->find($id);
        $update->update($request->all());

        if ($update->save()) {
            $pend = $this->model1->select('id','identitaskendaraan_id')->where('idx',$id)->first();
            if($pend)
            {
                $upIden = $this->modelIden->where('id',$pend->identitaskendaraan_id)->first();
                $upIden->update($request->all());
                $upDatakend = $this->modelDatakend->where('identitaskendaraan_id',$pend->identitaskendaraan_id)->first();
                $upDatakend->update($request->all());
            }
            
            return true;
        }
        return false;
    }

    public function updateData()
    {
        $data = $this->modelIden->select('id','tglterdaftar','tglout')->groupBy('nouji')->get();
        foreach($data as $dt)
        {
            $datapend = $this->model1->select('identitaskendaraan_id','kodepenerbitans_id','tglpendaftaran')
                                    ->whereNotIn('kodepenerbitans_id',[3,4,5,7,9])
                                    ->orderBy('tglpendaftaran','ASC')
                                    ->offset(0)
                                    ->limit(10)
                                    ->get();
            if(count($datapend) > 0)
            {
                foreach($datapend as $dtp)
                {
                    if(is_null($dt->tglterdaftar))
                    {
                        $up =  $this->modelIden->where('id',$dtp->identitaskendaraan_id)->first();
                        if($dtp->kodepenerbitans_id == '10')
                        {
                            $up->tglout = $dtp->tglpendaftaran;
                            $up->save();
                        }else{
                            $up->tglterdaftar =  $dtp->tglpendaftaran;
                            $up->save();
                        }
                    }else{
                        $up =  $this->modelIden->where('id',$dtp->identitaskendaraan_id)->first();
                        if($dtp->kodepenerbitans_id == '10')
                        {
                            $up->tglout = $dtp->tglpendaftaran;
                            $up->save();
                        }
                    } 
                }
            }
        }
    }

    public function delete($id)
    {
        $delete = $this->model->where('idx', $id);
        $delete->delete();
        return $delete;
    }
}

<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Identitaskendaraan;
use App\Models\Identitaskendaraan1;
use App\Models\Datakendaraan;
use App\Models\Datakendaraan1;
use App\Models\Pendaftaran;
use App\Models\Pendaftaran1;
use App\Models\Kelasjalan;
use App\Models\Merek;
use App\Models\Bc_Tipe;
use App\Models\Bahanbakar;
use App\Models\Datapengujian;
use App\Models\JenisModel;
use App\Models\Pengujian;
use App\Models\TamanKendaraan;
use App\Models\LaikJalan;
use App\Models\Jenis;
use App\Utils;
use DB;
use DateTime;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Exception;
use Illuminate\Support\Facades\Request;

class DatakendaraanRepository
{
  use RepositoryTrait;

  protected $model, $model1, $model2, $model3, $model4;

  public function __construct(
    Identitaskendaraan $model,
    Datakendaraan $model1,
    Pendaftaran $model2,
    Identitaskendaraan1 $model3,
    protected Utils $utils,
  ) {
    $this->model = $model;
    $this->model1 = $model1;
    $this->model2 = $model2;
    $this->model3 = $model3;
  }

  public function getQueryIdentity()
  {
    return $this->model->query();
  }

  public function getQueryDataKendaraan()
  {
    return $this->model1->query();
  }

  public function getAll()
  {
    $data = $this->model
      ->select('identitaskendaraans.uuid', 'nouji', 'noregistrasikendaraan', 'nama', 'merek', 'tipe', 'jenis', 'model', 'statuskendaraan', 'norangka', 'nomesin')
      ->groupBy('identitaskendaraans.nouji')
      ->orderBy('identitaskendaraans.id', 'DESC')
      ->limit('100');
    $search = str_replace("/", "", request()->q);

    if (request()->s != '') {
      if (request()->s == 'SEMUA') {
      } elseif (request()->s == env('APP_WILAYAH')) {
        // $data = $data->where('identitaskendaraans.statuskendaraan', '1')->where('identitaskendaraans.statuskendaraan', '3');
        $data = $data->where('identitaskendaraans.nouji', 'LIKE', 'EB%');
      } elseif (request()->s == 'AKTIF') {
        $data = $data->where('identitaskendaraans.statuskendaraan', '1');
      } elseif (request()->s == 'TIDAK AKTIF') {
        $data = $data->where('identitaskendaraans.statuskendaraan', '0');
      } elseif (request()->s == 'NU MASUK') {
        $data = $data->where('identitaskendaraans.statuskendaraan', '2');
      }
      // elseif (request()->s == 'MUTASI MASUK') {
      //     $data = $data->where('identitaskendaraans.statuskendaraan', '3');
      // } elseif (request()->s == 'NU KELUAR') {
      //     $data = $data->where('identitaskendaraans.statuskendaraan', '4');
      // } 
      elseif (request()->s == 'MUTASI KELUAR') {
        $data = $data->where('identitaskendaraans.statuskendaraan', '5');
      }
    }
    if ($search != '') {
      $data = $data->where(function ($query) use ($search) {
        $query->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
          ->orWhere('identitaskendaraans.nouji', 'LIKE', '%' . $search . '%')
          ->orWhere('identitaskendaraans.norangka', 'LIKE', '%' . $search . '%')
          ->orWhere('identitaskendaraans.nama', 'LIKE', '%' . $search . '%')
          ->orWhere('identitaskendaraans.merek', 'LIKE', '%' . $search . '%')
          ->orWhere('identitaskendaraans.tipe', 'LIKE', '%' . $search . '%')
          ->orWhere('identitaskendaraans.jenis', 'LIKE', '%' . $search . '%')
          // ->orWhere('identitaskendaraans.subjenis', 'LIKE', '%' . $search . '%')
          ->orWhere('identitaskendaraans.nomesin', 'LIKE', '%' . $search . '%');
      });
    }

    return $data->paginate(10);
  }
  
  public function getJenisModel()
  {
      return JenisModel::all();
  }

  public function getDatakendaraan($id)
  {
    $data = $this->model->find($id);
    $data = $this->utils->repairMissingUUID($data);

    return $data;
  }

  public function getTotalDatakendaraan()
  {
    $data = $this->model->count();
    return $data;
  }

  public function getDatakendaraanid($id)
  {
    $data = $this->model1->where('identitaskendaraan_id', $id);
    return $data->first();
  }

  public function getDatakendaraanidentitas($id)
  {
    $data = $this->model2->leftJoin('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id');
    $data = $data->where('pendaftarans.id', $id);

    return $data->first();
  }

  public function getKartuInduk($id)
  {
    $data = $this->model
      // ->Leftjoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')
      ->join('datakendaraans', 'datakendaraans.identitaskendaraan_id', '=', 'identitaskendaraans.id');
    $data = $data->where('identitaskendaraans.uuid', $id);

    return $data->first();
  }

  public function getKlasifikasi($jenis)
  {
      $data = Jenis::select('klasifikasis_id')->where('jenis', $jenis)->first();
      return $data;
  }

  public function getListPengujian($id)
  {
    $data = $this->model2
      // ->Join('pendaftarans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
      ->Join('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id');
    // ->leftJoin('datapengujian', 'datapengujian.idx', '=', 'pendaftarans.idx');
    $data = $data->where('laikjalan.statuslulusuji', '1')->where('pendaftarans.identitaskendaraan_id', $id)->groupBy('pendaftarans.id')->orderBy('pendaftarans.id', 'ASC');

    return $data->get();
  }

  public function getListNU($id)
  {
    $data = $this->model2
      ->join('persuratan', 'persuratan.pendaftaran_id', '=', 'pendaftarans.id')->where('pendaftarans.identitaskendaraan_id', $id)->where('pendaftarans.kodepenerbitans_id', '9');
    return $data->get();
  }


  public function getListMU($id)
  {
    $data = $this->model2
      ->join('persuratan', 'persuratan.pendaftaran_id', '=', 'pendaftarans.id')->where('pendaftarans.identitaskendaraan_id', $id)->whereIn('pendaftarans.kodepenerbitans_id', ['6', '10']);
    return $data->get();
  }

  public function getListCatatan($id)
  {
    $data = $this->model2
      ->join('catatan', 'catatan.pendaftaran_id', '=', 'pendaftarans.id')->where('pendaftarans.identitaskendaraan_id', $id)->where('catatan.status', '0');
    return $data->get();
  }

  public function getPengujianKartu($id)
  {
      // $data = Pendaftaran::leftJoin('pengujians','pengujians.pendaftaran_id','=','pendaftarans.id')->where('statuslulusuji','1')->where('identitaskendaraan_id',$id)->get();
      $data = Pendaftaran::select('pendaftarans.id', 'pendaftarans.tglpendaftaran', 'laikjalan.masaberlakuuji', 'alatuji_remutamatotalgayapengereman', 'alatuji_emisiasapbahanbakarsolar', 'alatuji_emisicobahanbakarbensin', 'alatuji_emisihcbahanbakarbensin', 'alatuji_lampuutamakekuatanpancarlampukiri', 'alatuji_lampuutamakekuatanpancarlampukanan', 'penguji.nama', 'penguji.nrp', 'penguji.tandatangan', 'pendaftarans.kodepenerbitans_id')->leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->leftJoin('penguji', 'penguji.idx', '=', 'laikjalan.idpenguji')->where('identitaskendaraan_id', $id)->where('statuslulusuji', '1')->where('pendaftarans.idx', '>=', '0')->get();
      return $data;
  }

  public function getPersuratan($id)
  {
      $data = Pendaftaran::select('pendaftarans.id', 'kodepenerbitans_id', 'tglpendaftaran','persuratan.*')->leftjoin('persuratan','persuratan.pendaftaran_id','=','pendaftarans.id')->whereIn('kodepenerbitans_id', ['9', '10'])->where('identitaskendaraan_id', $id)->get();
      return $data;
  }

  public function createDatakendaraan($request)
  {
    return $this->model1->create($request);
  }

  public function updateDatakendaraan($request, $id)
  {
    $update = $this->model1->where('identitaskendaraan_id', $id)->first();
    $update->update($request);

    if ($update->save()) {
      return true;
    }
    return false;
  }

  public function riwayatUji($id)
  {
    $identitaskendaraan = Identitaskendaraan::where('uuid', $id)->first();
    if ($identitaskendaraan) {
      $data = $this->model2->select(
        'pendaftarans.uuid',
        'kodepenerbitans.keterangan',
        'pendaftarans.tglpendaftaran',
        'pendaftarans.pos1',
        'pendaftarans.pos2',
        'pendaftarans.pos3',
        'pendaftarans.posverif',
        // 'pendaftarans.posverif2',
        'laikjalan.*'
      )
        ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
        ->join('laikjalan', 'laikjalan.pendaftaran_id', 'pendaftarans.id')
        ->where('identitaskendaraan_id', $identitaskendaraan->id)
        ->orderBy('pendaftarans.tglpendaftaran', 'ASC')
        ->limit(10)
        ->get();
      return $data;
    }
    return null;
  }

  public function detailRiwayatuji($id)
  {
    $data = $this->model2->select(
      'pendaftarans.uuid',
      'kodepenerbitans.keterangan',
      'pendaftarans.tglpendaftaran',
      'pendaftarans.pos1',
      'pendaftarans.pos2',
      'pendaftarans.pos3',
      'pendaftarans.posverif',
      // 'pendaftarans.posverif2',
      'laikjalan.*'
    )
      ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
      ->join('laikjalan', 'laikjalan.pendaftaran_id', 'pendaftarans.id')
      ->where('uuid', $id)
      ->first();
    return $data;
  }

  public function deleteDatakendaraan($id)
  {
    // $delete = $this->model1->where('id', $id);
    // $delete->delete();
    // return $delete;
    $identitaskendaraan = Identitaskendaraan::where('uuid', $id)->first();
    $identitaskendaraans = Identitaskendaraan::where('nouji', $identitaskendaraan['nouji'])->get();
    if ($identitaskendaraans) {
      foreach ($identitaskendaraans as $data) {
        $pendaftarans = Pendaftaran::where('identitaskendaraan_id', $data['id'])->first();
        if ($pendaftarans) {

          $pendaftarans->delete();
          $datakendaraans = Datakendaraan::where('identitaskendaraan_id', $data['id'])->first();
          if ($datakendaraans) {
            $datakendaraans->delete();
          }
          $identitaskendaraan = Identitaskendaraan::where('id', $data['id'])->first();
          $identitaskendaraan->delete();
        } else {
          $datakendaraans = Datakendaraan::where('identitaskendaraan_id', $data['id'])->first();
          if ($datakendaraans) {
            $datakendaraans->delete();
          }
          $identitaskendaraan = Identitaskendaraan::where('id', $data['id'])->first();
          $identitaskendaraan->delete();
        }
      }
    }

    return $identitaskendaraans;
  }

  public function updateData2()
  {
    $tgl1 = request()->t1;
    $tgl2 = str_replace("/", "", request()->t2);
    $data = $this->model2->select('kodepenerbitans_id', 'tglpendaftaran')->whereBetween('tglpendaftaran', [$tgl1, $tgl2])->orderBy('tglpendaftaran', 'ASC')->get();
    if ($data) {
      foreach ($data as $dt) {
        $lastTaman = TamanKendaraan::orderBy('tanggal', 'DESC')->first();
        $checkTaman = TamanKendaraan::where('tanggal', $dt->id->tglpendaftaran)->first();
        if ($dt->id->kodepenerbitans_id == '1' || $dt->id->kodepenerbitans_id == '6') {
          if ($checkTaman) {
            $upTaman = $checkTaman;
            $upTaman->total = (int)$checkTaman->total + 1;
            $upTaman->masuk = (int)$checkTaman->masuk + 1;
            $upTaman->save();
          } else {
            $inTaman = TamanKendaraan::Create([
              'total' => (int)$lastTaman->total + 1,
              'masuk' => 1,
              'keluar' => 0,
              'tanggal' => $dt->id->tglpendaftaran,
            ]);
          }
        } else if ($dt->id->kodepenerbitans_id == '10') {
          if ($checkTaman) {
            $upTaman = $checkTaman;
            $upTaman->total = (int)$checkTaman->total - 1;
            $upTaman->keluar = (int)$checkTaman->keluar + 1;
            $upTaman->save();
          } else {
            $inTaman = TamanKendaraan::Create([
              'total' => (int)$lastTaman->total - 1,
              'masuk' => 0,
              'keluar' => 1,
              'tanggal' => $dt->id->tglpendaftaran,
            ]);
          }
        }
      }
    }

    return true;
  }

  public function updateData1()
  {
    $kendaraan = Identitaskendaraan::join('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->get();
    foreach ($kendaraan as $kend) {
      $merekObj = Merek::where('Merk', $kend->nerek)->first();
      if ($merekObj) {
        $merek = $merekObj->Merk;
        $idmerek = $merekObj->vehicle_brand_id;
      } else {
        $merek = $kend->merek;
        $idmerek = "";
      }
      $tipeObj = Bc_Tipe::where('vehicle_varian_type_name', $kend->tipe)->first();

      if ($tipeObj) {
        $tipe = $tipeObj->vehicle_varian_type_name;
        $idtipe = $tipeObj->vehicle_varian_type_id;
      } else {
        $tipe = $kend->tipe;
        $idtipe = "";
      }
      $bahanbakarObj = Bahanbakar::where('fuel_name', $kend->bahanbakar)->first();
      if ($bahanbakarObj) {
        $bahanbakar = $bahanbakarObj->fuel_name;
        $idbahanbakar = $bahanbakarObj->fuel_id;
      } else {
        $bahanbakar = $kend->bahan_bakar;
        $idbahanbakar = "";
      }
      if ($kend->kelasjalanterendah == 'I' || $kend->kelasjalanterendah == 'II' || $kend->kelasjalanterendah == 'III') {
        $kelasObj = Kelasjalan::where('kelasjalan_code', $kend->kelasjalanterendah)->first();
        if (!is_null($kelasObj)) {
          $kelas = $kelasObj->kelasjalan_name;
          $idkelas = $kelasObj->kelasjalan_id;
        }
      } else {
        $kelas = $kend->kelasjalanterendah;
        $idkelas = "";
      }
      $identitaskendaraan = array(
        'uuid'  => (string) Str::uuid(),
        'nouji' => $kend->nouji,
        'noidentitaspemilik'    => $kend->noidentitaspemilik,
        'nama'  => $kend->nama,
        'alamat' => $kend->alamat,
        'merek'  => $merek,
        'idmerek'  => $idmerek,
        'tipe'   => $tipe,
        'idtipe' => $idtipe,
        'noregistrasikendaraan' => $kend->noregistrasikendaraan,
        'nosertifikatreg' => $kend->nosertifikatreg,
        'tglsertifikatreg' => $kend->tglsertifikatreg,
        'norangka' => $kend->norangka,
        'nomesin' => $kend->nomesin,
        'thpembuatan' => $kend->thpembuatan,
        'bahanbakar' => $bahanbakar,
        'idbahanbakar' => $idbahanbakar,
        'isisilinder' => $kend->isisilinder,
        'dayamotorpenggerak' => $kend->dayamotorpenggerak,
        'jenis' => '',
        'model' => $kend->jenis,
        'peruntukan' => $kend->peruntukan,
        // 'warna' => $kend->warna,
        'statuskendaraan' => '0',
        'idkepaladinas' => $kend->idkepaladinas,
        'iddirektur'    => $kend->iddirektur,
        'kodewilayah'   => $kend->kodewilayah,
        'kodewilayahasal'   => $kend->kodewilayahasal,
      );
      $dataIden = Identitaskendaraan1::create($identitaskendaraan);
      $jumlahsumbu = 2;
      if ($kend->sumbu3 > 0) {
        $jumlahsumbu == 3;
      } elseif ($kend->sumbu4 > 0) {
        $jumlahsumbu == 4;
      }
      if ($dataIden) {
        $datakendaraan = array(
          'identitaskendaraan_id'  => $dataIden->id,
          'jbb' => $kend->jbb,
          'jbkb' => $kend->jbkb,
          'jbi' => $kend->jbi,
          'jbki' => $kend->jbki,
          'mst' => $kend->mst,
          'konfigurasisumburoda' => $kend->konfigurasisumburoda,
          'ukuranban' => $kend->ukuranban,
          'panjangkendaraan' => $kend->panjangkendaraan,
          'lebarkendaraan' => $kend->lebarkendaraan,
          'tinggikendaraan' => $kend->tinggikendaraan,
          'panjangbakatautangki' => $kend->panjangbakatautangki,
          'lebarbakatautangki' => $kend->lebarbakatautangki,
          'tinggibakatautangki' => $kend->tinggibakatautangki,
          'julurdepan' => $kend->julurdepan,
          'julurbelakang' => $kend->julurbelakang,
          'groundclearance' => $kend->groundclearance,
          'jumlah_sumbu' => $jumlahsumbu,
          'jaraksumbu1_2' => $kend->jaraksumbu1_2,
          'jaraksumbu2_3' => $kend->jaraksumbu2_3,
          'jaraksumbu2_3' => $kend->jaraksumbu2_3,
          'q' => $kend->p,
          // 'a',
          // 'r',
          // 'b',
          'p' => $kend->p,
          'dayaangkutorang' => $kend->dayaangkutorang,
          'dayaangkutbarang' => $kend->dayaangkutbarang,
          'kelasjalanterendah' => $kelas,
          'idkelasjalanterendah' => $idkelas,
          'beratkosong' => $kend->beratkosong,
          'beratsumbu1' => $kend->beratsumbu1,
          'beratsumbu2' => $kend->beratsumbu2,
          'beratsumbu3' => $kend->beratsumbu3,
          'beratsumbu4' => $kend->beratsumbu4,
          'volume' => $kend->volume,
          'jenismuatan' => $kend->jenismuatan,
          'bahan' => $kend->bahan,
        );
        $dataIden = Datakendaraan1::create($datakendaraan);
      }
    }
    return count($kendaraan);
  }

  public function updateData()
  {
    $pendaftaran = Pendaftaran::Join('pengujians', 'pengujians.pendaftaran_id', 'pendaftarans.id')->get();
    foreach ($pendaftaran as $pend) {
      $pendaftaran = array(
        'uuid' => '',
        'identitaskendaraan_id' => $pend->identitaskendaraan_id,
        'idx'   => $pend->idx,
        'kodepenerbitans_id'   => $pend->kodepenerbitans_id,
        'tglpendaftaran'    => $pend->tglpendaftaran,
        'tglbayar'  => $pend->tglbayar,
        'namapemohon'   => $pend->namapemohon,
        'alamatpemohon' => $pend->alamatpemohon,
        'notelp'    => $pend->notelp,
        'status'    => $pend->status,
        'verif'     => '1',
        'pos1'      => $pend->pos1,
        'pos2'      => $pend->pos2,
        'user_pos1' => $pend->petugaspos1,
        'user_pos2' => $pend->petugaspos2,
      );
      $dataPend = Pendaftaran::create($pendaftaran);
      if ($dataPend) {
        if ($pend->masaberlakuuji) {
          $masaberlakuuji = date_create($pend->masaberlakuuji);
          $masaberlakuuji = date_format($masaberlakuuji, "dmY");
        } else {
          $masaberlakuuji = '';
        }
        $laik  = array(
          'pendaftaran_id'    => $pend->pendaftaran_id,
          'alatuji_emisiasapbahanbakarsolar' => $pend->alatuji_emisiasapbahanbakarsolar,
          'alatuji_emisicobahanbakarbensin'  => $pend->alatuji_emisicobahanbakarbensin,
          'alatuji_emisicobahanbakarbensin'  => $pend->alatuji_emisicobahanbakarbensin,
          'alatuji_remutamatotalgayapengereman'   => $pend->alatuji_remutamatotalgayapengereman,
          'alatuji_remutamaselisihgayapengeremanrodakirikanan1'   => $pend->alatuji_remutamaselisihgayapengeremanrodakirikanan1,
          'alatuji_remutamaselisihgayapengeremanrodakirikanan2'   => $pend->alatuji_remutamaselisihgayapengeremanrodakirikanan2,
          'alatuji_remutamaselisihgayapengeremanrodakirikanan3'   => $pend->alatuji_remutamaselisihgayapengeremanrodakirikanan3,
          'alatuji_remutamaselisihgayapengeremanrodakirikanan4'   => $pend->alatuji_remutamaselisihgayapengeremanrodakirikanan4,
          'alatuji_remparkirtangan'   => $pend->alatuji_remparkirtangan,
          'alatuji_remparkirkaki' => $pend->alatuji_remparkirkaki,
          'alatuji_kincuprodadepan'   => $pend->alatuji_kincuprodadepan,
          'alatuji_tingkatkebisingan' => $pend->alatuji_tingkatkebisingan,
          'alatuji_lampuutamakekuatanpancarlampukanan'    => $pend->alatuji_lampuutamakekuatanpancarlampukanan,
          'alatuji_lampuutamakekuatanpancarlampukiri' => $pend->alatuji_lampuutamakekuatanpancarlampukiri,
          'alatuji_lampuutamapenyimpanganlampukanan'  => $pend->alatuji_lampuutamapenyimpanganlampukanan,
          'alatuji_lampuutamapenyimpanganlampukiri'   => $pend->alatuji_lampuutamapenyimpanganlampukiri,
          'alatuji_penunjukkecepatan' => $pend->alatuji_penunjukkecepatan,
          'alatuji_kedalamanalurban' => $pend->alatuji_kedalamanalurban,
          'tgluji'   => $pend->tgluji,
          'masaberlakuuji' => $masaberlakuuji,
          'statuslulusuji'    => $pend->statuslulusuji,
          'idpenguji' => $pend->idpenguji,
          'gayaremkiri1' => $pend->gayaremkiris1,
          'gayaremkiri2' => $pend->gayaremkiris2,
          'gayaremkiri3' => $pend->gayaremkiris3,
          'gayaremkiri4' => $pend->gayaremkiris4,
          'gayaremkanan1' => $pend->gayaremkanans1,
          'gayaremkanan2' => $pend->gayaremkanans2,
          'gayaremkanan3' => $pend->gayaremkanans3,
          'gayaremkanan4' => $pend->gayaremkanans4,
        );
        $dataLaik = LaikJalan::create($laik);

        $lastTaman = TamanKendaraan::orderBy('tanggal', 'DESC')->first();
        $checkTaman = TamanKendaraan::where('tanggal', $pend->tglpendaftaran)->first();
        if ($pend->kodepenerbitans_id == '1' || $pend->kodepenerbitans_id == '6') {
          if ($checkTaman) {
            $upTaman = $checkTaman;
            $upTaman->total = (int)$checkTaman->total + 1;
            $upTaman->masuk = (int)$checkTaman->masuk + 1;
            $upTaman->save();
          } else {
            $inTaman = TamanKendaraan::Create([
              'total' => (int)$lastTaman->total + 1,
              'masuk' => 1,
              'keluar' => 0,
              'tanggal' => $pend->tglpendaftaran,
            ]);
          }
        }
        $now = date('Y-m-d');
        if ($pend->masaberlakuuji <= $now) {
          $stskend = '0';
        } elseif ($pend->masaberlakuuji >= $now) {
          $stskend = '1';
        }
        if ($pend->kodepenerbitans_id == '5') {
          $stskend = '2';
        }
        $Iden = Identitaskendaraan1::where('id', $pend->identitaskendaraan_id)->first();
        if ($Iden) {
          $Iden->statuskendaraan = $stskend;
          $Iden->save();
        }
      }
    }
  }

  public function updateData101()
  {
    $data = Datapengujian::orderBy('tgluji', 'asc')->get();
    foreach ($data as $kend) {
      $identitaskendaraan = array(
        'uuid'  => (string) Str::uuid(),
        'nouji' => $kend->nouji,
        'noidentitaspemilik'    => $kend->noidentitaspemilik,
        'nama'  => $kend->nama,
        'alamat' => $kend->alamat,
        'merek'  => $kend->merek,
        'idmerek'  => $kend->vehicle_brand_id,
        'tipe'   => $kend->tipe,
        'idtipe' => $kend->vehicle_varian_type_id,
        'varian' => $kend->varian,
        'idvarian' => $kend->vehicle_varian_id,
        'noregistrasikendaraan' => $kend->noregistrasikendaraan,
        'nosertifikatreg' => $kend->nosertifikatreg,
        'tglsertifikatreg' => $kend->tglsertifikatreg,
        'tgl_registrasikendaraan' => $kend->tglterbitstnk,
        'norangka' => $kend->norangka,
        'nomesin' => $kend->nomesin,
        'thpembuatan' => $kend->thpembuatan,
        'bahanbakar' => $kend->bahanbakar,
        'idbahanbakar' => $kend->fuel_id,
        'isisilinder' => $kend->isisilinder,
        'dayamotorpenggerak' => $kend->dayamotorpenggerak,
        'jenis' => $kend->jenis,
        'idjenis' => $kend->vehicle_type_id,
        'subjenis' => $kend->sub_Varian_kendaraan,
        'idsubjenis' => $kend->vehicle_sub_id,
        // 'model' => $kend->jenis,
        // 'peruntukan' => $kend->peruntukan,
        // 'warna' => $kend->warna,
        'statuskendaraan' => '0',
        'idkepaladinas' => $kend->idkepaladinas,
        'iddirektur'    => $kend->iddirektur,
        'kodewilayah'   => $kend->kodewilayah,
        'kodewilayahasal'   => $kend->kodewilayahasal,
        'idkodewilayah'   => $kend->area_id,
        'idkodewilayahasal'   => $kend->area_from_id,
      );
      $searchCriteria = [
          'nouji' => $kend->nouji,
      ];
      $dataIden = Identitaskendaraan::updateOrCreate($searchCriteria, $identitaskendaraan);
      if ($dataIden) {
        $datakendaraan = array(
          'identitaskendaraan_id'  => $dataIden->id,
          'jbb' => $kend->jbb,
          'jbkb' => $kend->jbkb,
          'jbi' => $kend->jbi,
          'jbki' => $kend->jbki,
          'mst' => $kend->mst,
          'konfigurasisumburoda' => $kend->konfigurasisumburoda,
          'ukuranban' => $kend->ukuranban,
          'panjangkendaraan' => $kend->panjangkendaraan,
          'lebarkendaraan' => $kend->lebarkendaraan,
          'tinggikendaraan' => $kend->tinggikendaraan,
          'panjangbakatautangki' => $kend->panjangbakatautangki,
          'lebarbakatautangki' => $kend->lebarbakatautangki,
          'tinggibakatautangki' => $kend->tinggibakatautangki,
          'julurdepan' => $kend->julurdepan,
          'julurbelakang' => $kend->julurbelakang,
          'groundclearance' => $kend->groundclearance,
          'jumlah_sumbu' => $kend->jumlah_sumbu,
          'jaraksumbu1_2' => $kend->jaraksumbu1_2,
          'jaraksumbu2_3' => $kend->jaraksumbu2_3,
          'jaraksumbu2_3' => $kend->jaraksumbu2_3,
          'jaraksumbu3_4' => $kend->jaraksumbu3_4,
          'jaraksumbu4_5' => $kend->jaraksumbu4_5,
          'jaraksumbu5_6' => $kend->jaraksumbu5_6,
          'jaraksumbu6_7' => $kend->jaraksumbu6_7,
          'jaraksumbu7_8' => $kend->jaraksumbu7_8,
          'jaraksumbu8_9' => $kend->jaraksumbu8_9,
          'jaraksumbu9_10' => $kend->jaraksumbu9_10,
          'jaraksumbu10_11' => $kend->jaraksumbu10_11,
          'jaraksumbu11_12' => $kend->jaraksumbu11_12,
          'q' => 0,
          'a' => $kend->wheel_base,
          'r' => 0,
          'b' => 0,
          'p' => 0,
          'dayaangkutorang' => $kend->dayaangkutorang,
          'dayaangkutbarang' => $kend->dayaangkutbarang,
          'kelasjalanterendah' => $kend->kelasjalanterendah,
          'idkelasjalanterendah' => $kend->kelasjalan_id,
          'beratkosong' => $kend->beratkosong,
          'beratsumbu1' => $kend->alatuji_beratsumbu1,
          'beratsumbu2' => $kend->alatuji_beratsumbu2,
          'beratsumbu3' => $kend->alatuji_beratsumbu3,
          'beratsumbu4' => $kend->alatuji_beratsumbu4,
          'beratsumbu5' => $kend->alatuji_beratsumbu5,
          'beratsumbu6' => $kend->alatuji_beratsumbu6,
          'beratsumbu7' => $kend->alatuji_beratsumbu7,
          'beratsumbu8' => $kend->alatuji_beratsumbu8,
          'beratsumbu9' => $kend->alatuji_beratsumbu9,
          'beratsumbu10' => $kend->alatuji_beratsumbu10,
          'beratsumbu11' => $kend->alatuji_beratsumbu11,
          'beratsumbu12' => $kend->alatuji_beratsumbu12,
          // 'volume' => $kend->volume,
          // 'jenismuatan' => $kend->jenismuatan,
          // 'bahan' => $kend->bahan,
        );
        $dataKendaraanSearchCriteria = [
            'identitaskendaraan_id' => $dataIden->id,
        ];

        $dataKend = Datakendaraan::updateOrCreate($dataKendaraanSearchCriteria, $datakendaraan);
        $dateTimeObj = new DateTime($kend->tgluji);
        $dateTimeObj2 = new DateTime($kend->masaberlakuuji);
        $pendaftaran = array(
          'uuid' => (string) Str::uuid(),
          'identitaskendaraan_id' => $dataIden->id,
          'idx'   => $kend->idx,
          'kodepenerbitans_id'   => $kend->statuspenerbitan,
          'tglpendaftaran'    => $dateTimeObj->format('Y-m-d'),
          'nosuratkehilangan'  => $kend->nosuratkehilangan,
          // 'namapemohon'   => $pend->namapemohon,
          // 'alamatpemohon' => $pend->alamatpemohon,
          // 'notelp'    => $pend->notelp,
          // 'status'    => $pend->status,
          'verif'     => '1',
          'posverif'      => $kend->exam_status_id,
          'user_posverif' => $kend->idpetugasuji,
        );
        $dataPend = Pendaftaran::create($pendaftaran);
        if($dataPend) {
          $laik  = array(
            'pendaftaran_id'    => $dataPend->id,
            'alatuji_emisiasapbahanbakarsolar' => $kend->alatuji_emisiasapbahanbakarsolar,
            'alatuji_emisicobahanbakarbensin'  => $kend->alatuji_emisicobahanbakarbensin,
            'alatuji_emisicobahanbakarbensin'  => $kend->alatuji_emisicobahanbakarbensin,
            'alatuji_remutamatotalgayapengereman'   => $kend->alatuji_remutamatotalgayapengereman,
            'alatuji_remparkirtotalgayapengereman'   => $kend->alatuji_remparkirtotalgayapengereman,
            'alatuji_remutamaselisihgayapengeremanrodakirikanan1'   => $kend->alatuji_remutamaselisihgayapengeremanrodakirikanan1,
            'alatuji_remutamaselisihgayapengeremanrodakirikanan2'   => $kend->alatuji_remutamaselisihgayapengeremanrodakirikanan2,
            'alatuji_remutamaselisihgayapengeremanrodakirikanan3'   => $kend->alatuji_remutamaselisihgayapengeremanrodakirikanan3,
            'alatuji_remutamaselisihgayapengeremanrodakirikanan4'   => $kend->alatuji_remutamaselisihgayapengeremanrodakirikanan4,
            'alatuji_remparkirtangan'   => $kend->alatuji_remparkirtangan,
            'alatuji_remparkirkaki' => $kend->alatuji_remparkirkaki,
            'alatuji_kincuprodadepan'   => $kend->alatuji_kincuprodadepan,
            'alatuji_tingkatkebisingan' => $kend->alatuji_tingkatkebisingan,
            'alatuji_lampuutamakekuatanpancarlampukanan'    => $kend->alatuji_lampuutamakekuatanpancarlampukanan,
            'alatuji_lampuutamakekuatanpancarlampukiri' => $kend->alatuji_lampuutamakekuatanpancarlampukiri,
            'alatuji_lampuutamapenyimpanganlampukanan'  => $kend->alatuji_lampuutamapenyimpanganlampukanan,
            'alatuji_lampuutamapenyimpanganlampukiri'   => $kend->alatuji_lampuutamapenyimpanganlampukiri,
            'alatuji_penunjukkecepatan' => $kend->alatuji_penunjukkecepatan,
            'alatuji_kedalamanalurban' => $kend->alatuji_kedalamanalurban,
            'tgluji'   => $dateTimeObj->format('dmY'),
            'masaberlakuuji' => $dateTimeObj2->format('dmY'),
            'statuslulusuji'    => $kend->exam_status_id,
            'idpenguji' => $kend->idpetugasuji,
          );  
          $dataLaik = LaikJalan::create($laik);

          $lastTaman = TamanKendaraan::orderBy('tanggal', 'DESC')->first();
          $checkTaman = TamanKendaraan::where('tanggal', $dateTimeObj->format('Y-m-d'))->first();
          if ($kend->statuspenerbitan == '1' || $kend->statuspenerbitan == '6') {
            if ($checkTaman) {
              $upTaman = $checkTaman;
              $upTaman->total = (int)$checkTaman->total + 1;
              $upTaman->masuk = (int)$checkTaman->masuk + 1;
              $upTaman->save();
            } else {
              $inTaman = TamanKendaraan::Create([
                'total' => (int)$lastTaman->total + 1,
                'masuk' => 1,
                'keluar' => 0,
                'tanggal' => $dateTimeObj->format('Y-m-d'),
              ]);
            }
          }
          $now = date('Y-m-d');
          if ($dateTimeObj2->format('Y-m-d') <= $now) {
            $stskend = '0';
          } elseif ($dateTimeObj2->format('Y-m-d') >= $now) {
            $stskend = '1';
          }
          if ($kend->statuspenerbitan == '5') {
            $stskend = '2';
          }
          $Iden = Identitaskendaraan::where('id', $dataIden->id)->first();
          if ($Iden) {
            $Iden->statuskendaraan = $stskend;
            $Iden->save();
          }
        }
      }
    }
  }
  public function updateData10()
  {
    $data = Datapengujian::orderBy('tgluji', 'asc')->get();
    foreach ($data as $kend) {
      $identitaskendaraan = array(
        'uuid'  => (string) Str::uuid(),
        'nouji' => $kend->nouji,
        'noidentitaspemilik'    => $kend->noidentitaspemilik,
        'nama'  => $kend->nama,
        'alamat' => $kend->alamat,
        'merek'  => $kend->merek,
        // 'idmerek'  => $kend->vehicle_brand_id,
        'tipe'   => $kend->tipe,
        // 'idtipe' => $kend->vehicle_varian_type_id,
        'varian' => $kend->varian,
        // 'idvarian' => $kend->vehicle_varian_id,
        'noregistrasikendaraan' => $kend->noregistrasikendaraan,
        'nosertifikatreg' => $kend->nosertifikatreg,
        'tglsertifikatreg' => $kend->tglsertifikatreg,
        // 'tgl_registrasikendaraan' => $kend->tglterbitstnk,
        'norangka' => $kend->norangka,
        'nomesin' => $kend->nomesin,
        'thpembuatan' => $kend->thpembuatan,
        'bahanbakar' => $kend->bahanbakar,
        'idbahanbakar' => $kend->fuel_id,
        'isisilinder' => $kend->isisilinder,
        'dayamotorpenggerak' => $kend->dayamotorpenggerak,
        'jenis' => $kend->jenis,
        // 'idjenis' => $kend->vehicle_type_id,
        // 'subjenis' => $kend->sub_Varian_kendaraan,
        // 'idsubjenis' => $kend->vehicle_sub_id,
        // 'model' => $kend->jenis,
        // 'peruntukan' => $kend->peruntukan,
        // 'warna' => $kend->warna,
        'statuskendaraan' => '0',
        'idkepaladinas' => $kend->idkepaladinas,
        'iddirektur'    => $kend->iddirektur,
        'kodewilayah'   => $kend->kodewilayah,
        'kodewilayahasal'   => $kend->kodewilayahasal,
        'idkodewilayah'   => $kend->area_id,
        'idkodewilayahasal'   => $kend->area_from_id,
      );
      $searchCriteria = [
          'nouji' => $kend->nouji,
      ];
      $dataIden = Identitaskendaraan::updateOrCreate($searchCriteria, $identitaskendaraan);
      if ($dataIden) {
        $datakendaraan = array(
          'identitaskendaraan_id'  => $dataIden->id,
          'jbb' => $kend->jbb,
          'jbkb' => $kend->jbkb,
          'jbi' => $kend->jbi,
          'jbki' => $kend->jbki,
          'mst' => $kend->mst,
          'konfigurasisumburoda' => $kend->konfigurasisumburoda,
          'ukuranban' => $kend->ukuranban,
          'panjangkendaraan' => $kend->panjangkendaraan,
          'lebarkendaraan' => $kend->lebarkendaraan,
          'tinggikendaraan' => $kend->tinggikendaraan,
          'panjangbakatautangki' => $kend->panjangbakatautangki,
          'lebarbakatautangki' => $kend->lebarbakatautangki,
          'tinggibakatautangki' => $kend->tinggibakatautangki,
          'julurdepan' => $kend->julurdepan,
          'julurbelakang' => $kend->julurbelakang,
          'groundclearance' => $kend->groundclearance,
          // 'jumlah_sumbu' => $kend->jumlah_sumbu,
          'jaraksumbu1_2' => $kend->jaraksumbu1_2,
          'jaraksumbu2_3' => $kend->jaraksumbu2_3,
          'jaraksumbu2_3' => $kend->jaraksumbu2_3,
          'jaraksumbu3_4' => $kend->jaraksumbu3_4,
          // 'jaraksumbu4_5' => $kend->jaraksumbu4_5,
          // 'jaraksumbu5_6' => $kend->jaraksumbu5_6,
          // 'jaraksumbu6_7' => $kend->jaraksumbu6_7,
          // 'jaraksumbu7_8' => $kend->jaraksumbu7_8,
          // 'jaraksumbu8_9' => $kend->jaraksumbu8_9,
          // 'jaraksumbu9_10' => $kend->jaraksumbu9_10,
          // 'jaraksumbu10_11' => $kend->jaraksumbu10_11,
          // 'jaraksumbu11_12' => $kend->jaraksumbu11_12,
          'q' => 0,
          'a' => $kend->wheel_base,
          'r' => 0,
          'b' => 0,
          'p' => 0,
          'dayaangkutorang' => $kend->dayaangkutorang,
          'dayaangkutbarang' => $kend->dayaangkutbarang,
          'kelasjalanterendah' => $kend->kelasjalanterendah,
          'idkelasjalanterendah' => $kend->kelasjalan_id,
          'beratkosong' => $kend->beratkosong,
          // 'beratsumbu1' => $kend->alatuji_beratsumbu1,
          // 'beratsumbu2' => $kend->alatuji_beratsumbu2,
          // 'beratsumbu3' => $kend->alatuji_beratsumbu3,
          // 'beratsumbu4' => $kend->alatuji_beratsumbu4,
          // 'beratsumbu5' => $kend->alatuji_beratsumbu5,
          // 'beratsumbu6' => $kend->alatuji_beratsumbu6,
          // 'beratsumbu7' => $kend->alatuji_beratsumbu7,
          // 'beratsumbu8' => $kend->alatuji_beratsumbu8,
          // 'beratsumbu9' => $kend->alatuji_beratsumbu9,
          // 'beratsumbu10' => $kend->alatuji_beratsumbu10,
          // 'beratsumbu11' => $kend->alatuji_beratsumbu11,
          // 'beratsumbu12' => $kend->alatuji_beratsumbu12,
          // 'volume' => $kend->volume,
          // 'jenismuatan' => $kend->jenismuatan,
          // 'bahan' => $kend->bahan,
        );
        $dataKendaraanSearchCriteria = [
            'identitaskendaraan_id' => $dataIden->id,
        ];

        $dataKend = Datakendaraan::updateOrCreate($dataKendaraanSearchCriteria, $datakendaraan);
        $dateTimeObj = DateTime::createFromFormat('dmY', $kend->tgluji);
        $dateTimeObj2 = DateTime::createFromFormat('dmY', $kend->masaberlakuuji);
        $pendaftaran = array(
          'uuid' => (string) Str::uuid(),
          'identitaskendaraan_id' => $dataIden->id,
          'idx'   => $kend->idx,
          'kodepenerbitans_id'   => $kend->statuspenerbitan,
          'tglpendaftaran'    => $dateTimeObj->format('Y-m-d'),
          'nosuratkehilangan'  => $kend->nosuratkehilangan,
          // 'namapemohon'   => $pend->namapemohon,
          // 'alamatpemohon' => $pend->alamatpemohon,
          // 'notelp'    => $pend->notelp,
          // 'status'    => $pend->status,
          'verif'     => '1',
          'posverif'      => $kend->statuslulusuji,
          'user_posverif' => $kend->idpetugasuji,
        );
        $dataPend = Pendaftaran::create($pendaftaran);
        if($dataPend) {
          $laik  = array(
            'pendaftaran_id'    => $dataPend->id,
            'alatuji_emisiasapbahanbakarsolar' => $kend->alatuji_emisiasapbahanbakarsolar,
            'alatuji_emisicobahanbakarbensin'  => $kend->alatuji_emisicobahanbakarbensin,
            'alatuji_emisicobahanbakarbensin'  => $kend->alatuji_emisicobahanbakarbensin,
            'alatuji_remutamatotalgayapengereman'   => $kend->alatuji_remutamatotalgayapengereman,
            // 'alatuji_remparkirtotalgayapengereman'   => $kend->alatuji_remparkirtotalgayapengereman,
            'alatuji_remutamaselisihgayapengeremanrodakirikanan1'   => $kend->alatuji_remutamaselisihgayapengeremanrodakirikanan1,
            'alatuji_remutamaselisihgayapengeremanrodakirikanan2'   => $kend->alatuji_remutamaselisihgayapengeremanrodakirikanan2,
            'alatuji_remutamaselisihgayapengeremanrodakirikanan3'   => $kend->alatuji_remutamaselisihgayapengeremanrodakirikanan3,
            'alatuji_remutamaselisihgayapengeremanrodakirikanan4'   => $kend->alatuji_remutamaselisihgayapengeremanrodakirikanan4,
            'alatuji_remparkirtangan'   => $kend->alatuji_remparkirtangan,
            'alatuji_remparkirkaki' => $kend->alatuji_remparkirkaki,
            'alatuji_kincuprodadepan'   => $kend->alatuji_kincuprodadepan,
            'alatuji_tingkatkebisingan' => $kend->alatuji_tingkatkebisingan,
            'alatuji_lampuutamakekuatanpancarlampukanan'    => $kend->alatuji_lampuutamakekuatanpancarlampukanan,
            'alatuji_lampuutamakekuatanpancarlampukiri' => $kend->alatuji_lampuutamakekuatanpancarlampukiri,
            'alatuji_lampuutamapenyimpanganlampukanan'  => $kend->alatuji_lampuutamapenyimpanganlampukanan,
            'alatuji_lampuutamapenyimpanganlampukiri'   => $kend->alatuji_lampuutamapenyimpanganlampukiri,
            'alatuji_penunjukkecepatan' => $kend->alatuji_penunjukkecepatan,
            'alatuji_kedalamanalurban' => $kend->alatuji_kedalamanalurban,
            'tgluji'   => $kend->tgluji,
            'masaberlakuuji' => $kend->masaberlakuuji,
            'statuslulusuji'    => $kend->statuslulusuji,
            'idpenguji' => $kend->idpetugasuji,
          );  
          $dataLaik = LaikJalan::create($laik);

          $lastTaman = TamanKendaraan::orderBy('tanggal', 'DESC')->first();
          $checkTaman = TamanKendaraan::where('tanggal', $dateTimeObj->format('Y-m-d'))->first();
          if ($kend->statuspenerbitan == '1' || $kend->statuspenerbitan == '6') {
            if ($checkTaman) {
              $upTaman = $checkTaman;
              $upTaman->total = (int)$checkTaman->total + 1;
              $upTaman->masuk = (int)$checkTaman->masuk + 1;
              $upTaman->save();
            } else {
              $inTaman = TamanKendaraan::Create([
                'total' => (int)$lastTaman->total + 1,
                'masuk' => 1,
                'keluar' => 0,
                'tanggal' => $dateTimeObj->format('Y-m-d'),
              ]);
            }
          }
          $now = date('Y-m-d');
          if ($dateTimeObj2->format('Y-m-d') <= $now) {
            $stskend = '0';
          } elseif ($dateTimeObj2->format('Y-m-d') >= $now) {
            $stskend = '1';
          }
          if ($kend->statuspenerbitan == '5') {
            $stskend = '2';
          }
          $Iden = Identitaskendaraan::where('id', $dataIden->id)->first();
          if ($Iden) {
            $Iden->statuskendaraan = $stskend;
            $Iden->save();
          }
        }
      }
    }
  }

  public function upLaikJalan()
  {
      // Implement the logic for updating the Laik Jalan status
      $data = LaikJalan::all();
      foreach ($data as $dt) {
          $tgluji = $dt->tgluji;
          if($tgluji && $tgluji != '0000-00-00') {
              try {
                $tanggal_input = DateTime::createFromFormat('dmY', $tgluji);
                $masaberlakuuji = (clone $tanggal_input)->modify('+6 months');
                $masaberlakuuji = $masaberlakuuji->format('dmY');
              } catch (Exception $e) {
                  // Jika format tanggal tidak valid
                  $masaberlakuuji = '';
              }
          } else {
              $masaberlakuuji = '';
          }
          $update = LaikJalan::where('id', $dt->id)->first();
          $update->masaberlakuuji = $masaberlakuuji;
          $update->save();
      }
  }
}

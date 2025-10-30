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
use App\Models\Ujiberkala;
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
    $update->update($request->all());

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

  public function updateData10()
  {
    // $data = User::all();
    // foreach($data as $dt){
    //     $update = User::where('id',$dt->id)->first();
    //     $update->uuid = (string) Str::uuid();
    //     $update->save();
    // }
    // $identitaskendaraan = array();
    // $datakendaraan = array();
    // $kendaraan = Kendaraan::groupBy('no_kendali')->limit(5000)->offset(27500)->get();
    // foreach($kendaraan as $kend){
    //     $merekObj = Merek::where('Merk',$kend->nerek)->first();
    //     if($merekObj){
    //         $merek = $merekObj->Merk;
    //         $idmerek = $merekObj->vehicle_brand_id;
    //     }else{
    //         $merek = $kend->merek;
    //         $idmerek = "";
    //     }
    //     $tipeObj = Bc_Tipe::where('vehicle_varian_type_name', $kend->tipe)->first();

    //     if ($tipeObj) {
    //         $tipe = $tipeObj->vehicle_varian_type_name;
    //         $idtipe = $tipeObj->vehicle_varian_type_id;
    //     } else {
    //         $tipe = $kend->tipe;
    //         $idtipe = "";
    //     }
    //     $bahanbakarObj = Bahanbakar::where('fuel_name',$kend->bahanbakar)->first();
    //     if($bahanbakarObj){
    //         $bahanbakar = $bahanbakarObj->fuel_name;
    //         $idbahanbakar = $bahanbakarObj->fuel_id;
    //     }else{
    //         $bahanbakar = $kend->bahan_bakar;
    //         $idbahanbakar = "";
    //     }

    //     $identitaskendaraan = array(
    //         'uuid'  => (string) Str::uuid(),
    //         'nouji' => $kend->no_kendali,
    //         'nama'  => $kend->pemilik,
    //         'alamat' => $kend->Alamat,
    //         'merek'  => $merek,
    //         'idmerek'  => $idmerek,
    //         'tipe'   => $tipe,
    //         'idtipe' => $idtipe,
    //         'noregistrasikendaraan' => $kend->nomor_ken,
    //         'nosertifikatreg' => $kend->no_sertifikat,
    //         'tglsertifikatreg' => $kend->tgl_sertifikat,
    //         'norangka' => $kend->norangka,
    //         'nomesin' => $kend->nomesin,
    //         'thpembuatan' => $kend->th_buat,
    //         'bahanbakar' => $bahanbakar,
    //         'idbahanbakar' => $idbahanbakar,
    //         'isisilinder' => $kend->silinder,
    //         'dayamotorpenggerak' => $kend->daya,
    //         'jenis' => $kend->namajenis,
    //         'model' => $kend->jenis,
    //         'peruntukan' => $kend->status,
    //         'warna' => $kend->warna,
    //         'statuskendaraan' => '0',
    //     );
    //     $dataIden = Identitaskendaraan::create($identitaskendaraan);
    //     $jumlahsumbu = 2;
    //     if($kend->sumbu3 > 0){
    //         $jumlahsumbu == 3;
    //     }
    //     $pBak = 0;$lBak=0;$tBak=0;
    //     if($kend->panjangbak > 0){
    //         $pBak = $kend->panjangbak;
    //         $lBak = $kend->lebarbak;
    //         $tBak = $kend->tinggibak;
    //     }
    //     if($kend->panjangtangki > 0){
    //         $pBak = $kend->panjangtangki;
    //         $lBak = $kend->lebartangki;
    //         $tBak = $kend->tinggitangki;
    //     }
    //     if($dataIden){
    //         $datakendaraan = array(
    //             'identitaskendaraan_id'  => $dataIden->id,
    //             'jbb' => $kend->jbb,
    //             'jbkb' => $kend->jbkb,
    //             'jbi' => $kend->jbi,
    //             'jbki' => $kend->jbki,
    //             'mst' => $kend->mst,
    //             'konfigurasisumburoda' => $kend->konfsumbu,
    //             'ukuranban' => $kend->sumbuban1,
    //             'panjangkendaraan' => $kend->panjang,
    //             'lebarkendaraan' => $kend->lebar,
    //             'tinggikendaraan' => $kend->tinggi,
    //             'panjangbakatautangki' => $pBak,
    //             'lebarbakatautangki' => $lBak,
    //             'tinggibakatautangki' => $tBak,
    //             'julurdepan' => $kend->julurD,
    //             'julurbelakang' => $kend->julurB,
    //             // 'groundclearance',
    //             'jumlah_sumbu' => $jumlahsumbu,
    //             'jaraksumbu1_2' => $kend->sumbu1,
    //             'jaraksumbu2_3' => $kend->sumbu2,
    //             'jaraksumbu3_4' => $kend->sumbu3,
    //             'q' => $kend->Q,
    //             // 'a',
    //             // 'r',
    //             // 'b',
    //             'p' => $kend->p,
    //             'dayaangkutorang' => $kend->angkutorang,
    //             'dayaangkutbarang' => $kend->angkutbarang,
    //             'kelasjalanterendah',
    //             'idkelasjalanterendah',
    //             'beratkosong' => $kend->totalberat,
    //             'beratsumbu1' => $kend->beratsumbu1,
    //             'beratsumbu2' => $kend->beratsumbu2,
    //             'beratsumbu3' => $kend->beratsumbu3,
    //             'beratsumbu4' => $kend->beratsumbu4,
    //             'volume' => $kend->volumetangki,
    //             'bahan' => $kend->bahanbak,
    //         );
    //         $dataIden = Datakendaraan::create($datakendaraan);
    //     }
    // }
    // return count($data);
    // $kendaraan = Ujiberkala::where('tgldaftar','!=','0000-00-00')->orderBy('tgldaftar','DESC')->limit(5000)->offset(150000)->get();
    $ip = Request::ip();
    dd($ip);
    //         $kode = '9';
    //     }elseif($kend->jenisuji == 5){
    //         $kode = '10';
    //     }elseif($kend->jenisuji == 99){
    //         $kode = '7';
    //     }elseif($kend->jenisuji == 7){
    //         $kode = '11';
    //     }elseif($kend->jenisuji == 8){
    //         $kode = '12';
    //     }

    //     if($kend->statusposdetail == 'L' && $kend->statuspos0 == 'L'){
    //         $pos1 = '1';
    //     }else{
    //         $pos1 = '0';
    //     }
    //     if($kend->statuspos1 == 'L'){
    //         $pos2 = '1';
    //     }else{
    //         $pos2 = '0';
    //     }
    //     if($kend->statuspos2 == 'L'){
    //         $pos3 = '1';
    //     }else{
    //         $pos3 = '0';
    //     }
    //     if($kend->statuspos3 == 'L'){
    //         $verif1 = '1';
    //     }else{
    //         $verif1= '0';
    //     }
    //     if($kend->statuspos4 == 'L'){
    //         $verif2 = '1';
    //     }else{
    //         $verif2= '0';
    //     }

    //     if($identitaskendaraan_id){
    //         if($kode == '1')
    //         {
    //             if(strpos($identitaskendaraan_id->nouuji, "BTL") !== false){
    //             }else{
    //                 $kode = '6';
    //             }
    //         }
    //         $pendaftaran = 
    //             array
    //             (
    //                 'uuid'  => (string) Str::uuid(),
    //                 'identitaskendaraan_id' => $identitaskendaraan_id->id,
    //                 'kodepenerbitans_id'    => $kode,
    //                 'tglpendaftaran'    => $kend->tgldaftar,
    //                 'pos1'              => $pos1,
    //                 'pos2'              => $pos2,
    //                 'pos3'              => $pos3,
    //                 'posverif'          => $verif1,
    //                 'posverif2'         => $verif2,
    //                 'user_pos1'         => $kend->nip_pos0,
    //                 'user_pos2'         => $kend->nip_pos1,
    //                 'user_pos3'         => $kend->nip_pos2,
    //                 'user_posverif'     => $kend->nip_pos3,
    //                 'user_posverif2'    => $kend->nip_pos4,
    //             );
    //         $datauji = Pengujian::where('no_periksa',$kend->no_periksa)->first();
    //         $dataPend = Pendaftaran::create($pendaftaran);

    //         if($datauji && $dataPend){
    //             if(strtoupper($identitaskendaraan_id->bahanbakar) == "SOLAR"){
    //             $solar = $datauji->gas_buang_hc;
    //             $c = 0;
    //             $hc = 0;
    //             }else{
    //                 $solar = 0;
    //                 $c = $datauji->gas_buang_c;
    //                 $hc = $datauji->gas_buang_hc;
    //             }
    //             if($datauji->status == 'L'){
    //                 $statusuji = 1;
    //             }else{
    //                 $statusuji = 0;
    //             }
    //             $pemeriksaan = array(
    //                 'pendaftaran_id' => $dataPend->id,
    //                 'alatuji_emisiasapbahanbakarsolar' => $solar,
    //                 'alatuji_emisicobahanbakarbensin'  => $c,
    //                 'alatuji_emisihcbahanbakarbensin'  => $hc,
    //                 'berats1'   => $datauji->penimbangan_sumbu_1,
    //                 'berats2'   => $datauji->penimbangan_sumbu_2,
    //                 'berats3'   => $datauji->penimbangan_sumbu_3,
    //                 'berats4'   => $datauji->penimbangan_sumbu_4,
    //                 'alatuji_remutamatotalgayapengereman'=> (int)$datauji->pengereman_roda_depan_l+(int)$datauji->pengereman_roda_depan_r+(int)$datauji->pengereman_roda_belakang_1_l+(int)$datauji->pengereman_roda_belakang_1_r+(int)$datauji->pengereman_roda_belakang_2_l+(int)$datauji->pengereman_roda_belakang_2_r+(int)$datauji->pengereman_roda_belakang_3_l+(int)$datauji->pengereman_roda_belakang_3_r,
    //                 'alatuji_remparkirtotalgayapengereman'=>'',
    //                 'gayaremkiri1' => $datauji->pengereman_roda_depan_l,
    //                 'gayaremkanan1' => $datauji->pengereman_roda_depan_r,
    //                 'gayaremkiri2' => $datauji->pengereman_roda_belakang_1_l,
    //                 'gayaremkanan2' => $datauji->pengereman_roda_belakang_1_r,
    //                 'gayaremkiri3' => $datauji->pengereman_roda_belakang_2_l,
    //                 'gayaremkanan3' => $datauji->pengereman_roda_belakang_2_r,
    //                 'gayaremkiri4' => $datauji->pengereman_roda_belakang_3_l,
    //                 'gayaremkanan4' => $datauji->pengereman_roda_belakang_3_r,
    //                 'alatuji_gayapengeremanparkirkiri' => $datauji->pengereman_tangan_l,
    //                 'alatuji_gayapengeremanparkirkanan' => $datauji->pengereman_tangan_r,
    //                 'alatuji_remparkirtangan' => $datauji->rem_tangan,
    //                 'alatuji_remparkirkaki' => $datauji->rem_tangan,
    //                 'alatuji_kincuprodadepan'   => $datauji->kedudukan_roda_nilai,
    //                 'alatuji_tingkatkebisingan' => $datauji->klakson,
    //                 'alatuji_lampuutamakekuatanpancarlampukanan'    => $datauji->lampu_jauh_kanan_c,
    //                 'alatuji_lampuutamakekuatanpancarlampukiri'    => $datauji->lampu_jauh_kiri_c,
    //                 'alatuji_lampuutamapenyimpanganlampukanan'  => str_replace(" | ",".",$datauji->lampu_jauh_kanan_l_r),
    //                 'alatuji_lampuutamapenyimpanganlampukanan'  => str_replace(" | ",".",$datauji->lampu_jauh_kiri_l_r),
    //                 'alatuji_penunjukkecepatan' => $datauji->petunjuk_kecepatan,
    //                 'alatuji_kedalamanalurban'  => $datauji->kedalaman_alur_ban,
    //                 'masaberlakuuji' => date('dmY', strtotime($kend->tglberlaku)),
    //                 'statuslulusuji' => $statusuji,
    //                 'idpenguji' => $kend->nip_pos4,
    //             );
    //             $dataPengujian = LaikJalan::create($pemeriksaan);
    //             if($dataPengujian){
    //                 $statuskend = '2'; // Default

    //             if ($kend->tglberlaku && $kend->tglberlaku != '0000-00-00') {
    //                 try {
    //                     $tanggal_input = new DateTime($kend->tglberlaku);
    //                     $today = new DateTime();
    //                     $tiga_tahun_lalu = (clone $today)->modify('-3 years');

    //                     if ($tanggal_input >= $today) {
    //                         $statuskend = '1';
    //                     } elseif ($tanggal_input > $tiga_tahun_lalu) {
    //                         $statuskend = '0';
    //                     } else {
    //                         $statuskend = '2';
    //                     }
    //                 } catch (Exception $e) {
    //                     // Jika format tanggal tidak valid
    //                     $statuskend = '2';
    //                 }
    //             } else {
    //                 $statuskend = '2';
    //             }

    //                 Identitaskendaraan::where('nouji', $kend->no_kendali)->update([
    //                     'statuskendaraan' => $statuskend,
    //                     'tglterdaftar' => $kend->tgldaftar,
    //                     'tglberlakuuji' => $kend->tglberlaku
    //                 ]);

    //             }
    //         }
    //     }
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

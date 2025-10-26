<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\LaikJalan;
use App\Models\Pendaftaran;
use App\Models\Datapengujian;
use App\Models\Kepaladinas;
use App\Models\Direktur;
use App\Models\Penguji;
use App\Models\Fotomentah;
use App\Models\Catatan;
use App\Models\Mutasi;
use App\Models\Kodewilayah;
use App\Models\Persuratan;
use App\Models\Identitaskendaraan;
use App\Models\UserPKB;
use Intervention\Image\Facades\Image;
use DB;

class VerifRepository
{
    use RepositoryTrait;

    protected $model, $model1, $modelS;

    public function __construct(LaikJalan $model, Pendaftaran $model1, Persuratan $modelS)
    {
        $this->model = $model;
        $this->model1 = $model1;
        $this->modelS = $modelS;
    }

    public function getAll()
    {

        $data = $this->model1
            ->select('pendaftarans.noantrian', 'pendaftarans.uuid', 'kodepenerbitans.keterangan', 'identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan')
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
            ->where('pendaftarans.posisi', '5')
            ->where('pendaftarans.tglpendaftaran', request()->t)
            ->orderBy('pendaftarans.noantrian', 'DESC');
        $search = str_replace("/", "", request()->q);

        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('identitaskendaraans.nouji', 'LIKE', '%' . $search . '%');
            });
        }

        return $data->paginate(10);
    }


    public function getMonitoring()
    {

        $data = $this->model1
            ->select('pendaftarans.noantrian', 'pendaftarans.uuid', 'kodepenerbitans.keterangan', 'identitaskendaraans.nouji', 'pendaftarans.posisi', 'identitaskendaraans.noregistrasikendaraan', 'pendaftarans.pos1', 'pendaftarans.pos2', 'pendaftarans.pos3', 'pendaftarans.pos4', 'pendaftarans.posverif')
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
            ->where('pendaftarans.tglpendaftaran', request()->t)
            ->orderBy('pendaftarans.noantrian', 'DESC');
        $search = str_replace("/", "", request()->q);

        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('identitaskendaraans.nouji', 'LIKE', '%' . $search . '%');
            });
        }

        return $data->paginate(10);
    }

    public function getAllLulus()
    {

        $data = $this->model1
            ->select('pendaftarans.noantrian', 'pendaftarans.uuid', 'kodepenerbitans.keterangan', 'identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan')
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
            ->where('pendaftarans.posverif', '1')
            ->where('pendaftarans.tglpendaftaran', request()->t)
            ->orderBy('pendaftarans.noantrian', 'DESC');
        $search = str_replace("/", "", request()->q);

        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('identitaskendaraans.nouji', 'LIKE', '%' . $search . '%');
            });
        }

        return $data->paginate(10);
    }

    public function getAllVerif2()
    {

        $data = $this->model1
            ->select('pendaftarans.noantrian', 'pendaftarans.uuid', 'kodepenerbitans.keterangan', 'identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan')
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
            ->where('pendaftarans.posisi', '5')
            ->where('pendaftarans.tglpendaftaran', request()->t)
            ->orderBy('pendaftarans.noantrian', 'DESC');
        $search = str_replace("/", "", request()->q);

        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('identitaskendaraans.nouji', 'LIKE', '%' . $search . '%');
            });
        }

        return $data->paginate(10);
    }

    public function getAllVerif2Lulus()
    {

        $data = $this->model1
            ->select('pendaftarans.noantrian', 'pendaftarans.uuid', 'kodepenerbitans.keterangan', 'identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan')
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
            ->where('pendaftarans.posverif2', '1')
            ->where('pendaftarans.tglpendaftaran', request()->t)
            ->orderBy('pendaftarans.noantrian', 'DESC');
        $search = str_replace("/", "", request()->q);

        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('identitaskendaraans.nouji', 'LIKE', '%' . $search . '%');
            });
        }

        return $data->paginate(10);
    }

    public function getAllTLulus()
    {

        $data = $this->model1
            ->select('pendaftarans.noantrian', 'pendaftarans.uuid', 'kodepenerbitans.keterangan', 'identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan')
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
            ->where('pendaftarans.posverif', '0')
            ->where('pendaftarans.tglpendaftaran', request()->t)
            ->orderBy('pendaftarans.noantrian', 'DESC');
        $search = str_replace("/", "", request()->q);

        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('identitaskendaraans.nouji', 'LIKE', '%' . $search . '%');
            });
        }

        return $data->paginate(10);
    }

    public function getVerifid($id, $tgl)
    {
        $data = $this->model1;
        $data = $data->where('identitaskendaraan_id', $id);
        $data = $data->where('tglpendaftaran', $tgl);

        return $data->first();
    }

    public function getVerif($id)
    {
        $data = $this->model1
            ->leftjoin('laikjalan', 'pendaftarans.id', '=', 'laikjalan.pendaftaran_id')
            ->where('pendaftarans.uuid', $id);

        return $data->first();
    }

    public function getData($id)
    {
        $data = $this->model1
            ->leftjoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')
            ->leftjoin('datakendaraans', 'identitaskendaraans.id', '=', 'datakendaraans.identitaskendaraan_id')
            ->leftjoin('laikjalan', 'pendaftarans.id', '=', 'laikjalan.pendaftaran_id')
            ->where('pendaftarans.id', $id);

        return $data->first();
    }

    public function getTTD($id)
    {
        $data = UserPKB::where('id', $id);
        return $data->first();
    }

    public function getCatatan($id)
    {
        $data = Catatan::where('pendaftaran_id', $id)->where('status', '1')->get();
        return $data;
    }

    public function createDatapengujian($id, $data, $alamatFull, $kode, $idkepaladinas, $iddirektur, $idpetugas, $tglsertifikatreg, $masaberlakuuji, $alatuji_remparkirtotalgayapengereman)
    {
        return Datapengujian::Create([
            'idx'              => $data->idx,
            'statuspenerbitan'  => $kode,
            'nouji'             => $data->nouji,
            'nama'              => $alamatFull,
            'alamat'            => $data->alamat,
            'noidentitaspemilik' => $data->noidentitaspemilik,
            'nosertifikatreg'   => $data->nosertifikatreg,
            'tglsertifikatreg'      => $tglsertifikatreg,
            'nosuratkehilangan'     => $data->nosuratkehilangan,
            'noregistrasikendaraan' => $data->noregistrasikendaraan,
            'tgl_registrasikendaraan' => $data->tgl_registrasikendaraan,
            'norangka'              => $data->norangka,
            'merek'                 => $data->merek,
            'tipe'                  => $data->tipe,
            'nomesin'               => $data->nomesin,
            'jenis'                 => $data->jenis,
            'subjenis_kendaraan'    => $data->subjenis,
            'varian_kendaraan'      => $data->varian,
            'sub_varian_kendaraan'  => $data->tipe,
            'jbb'                   => $data->jbb,
            'thpembuatan'           => $data->thpembuatan,
            'bahanbakar'            => $data->bahanbakar,
            'isisilinder'           => $data->isisilinder,
            'dayamotorpenggerak'    => $data->dayamotorpenggerak,
            'idkepaladinas'         => $idkepaladinas,
            'iddirektur'            => $iddirektur,
            'kodewilayah'           => $data->kodewilayah,
            'kodewilayahasal'       => $data->kodewilayahasal,
            'area_from_id'          => $data->idkodewilayah,
            'area_from_name'        => $data->kodewilayah,
            'vehicle_brand_id'      => $data->idmerek,
            'vehicle_type_id'       => $data->idjenis,
            'vehicle_sub_id'        => $data->idsubjenis,
            'vehicle_varian_type_id' => $data->idtipe,
            'vehicle_varian_id'     => $data->idvarian,
            'fuel_id'               => $data->idbahanbakar,
            'kelasjalan_id'         => $data->idkelasjalanterendah,
            'jbi'                   => $data->jbi,
            'jbkb'                  => $data->jbkb,
            'jbki'                  => $data->jbki,
            'mst'                   => $data->mst,
            'beratkosong'           => $data->beratkosong,
            'konfigurasisumburoda'  => $data->konfigurasisumburoda,
            'ukuranban'             => $data->ukuranban,
            'panjangkendaraan'      => $data->panjangkendaraan,
            'lebarkendaraan'        => $data->lebarkendaraan,
            'tinggikendaraan'       => $data->tinggikendaraan,
            'panjangbakatautangki'  => $data->panjangbakatautangki,
            'lebarbakatautangki'    => $data->lebarbakatautangki,
            'tinggibakatautangki'   => $data->tinggibakatautangki,
            'jumlah_sumbu'          => $data->jumlah_sumbu,
            'julurdepan'            => $data->julurdepan,
            'julurbelakang'         => $data->julurbelakang,
            'jaraksumbu1_2'         => $data->jaraksumbu1_2,
            'jaraksumbu2_3'         => $data->jaraksumbu2_3,
            'jaraksumbu3_4'         => $data->jaraksumbu3_4,
            'jaraksumbu5_6'         => $data->jaraksumbu5_6,
            'jaraksumbu6_7'         => $data->jaraksumbu6_7,
            'jaraksumbu7_8'         => $data->jaraksumbu7_8,
            'jaraksumbu8_9'         => $data->jaraksumbu8_9,
            'jaraksumbu9_10'        => $data->jaraksumbu9_10,
            'jaraksumbu10_11'        => $data->jaraksumbu10_11,
            'jaraksumbu11_12'        => $data->jaraksumbu11_12,
            'dayaangkutorang'       => $data->dayaangkutorang,
            'dayaangkutbarang'      => $data->dayaangkutbarang,
            'kelasjalanterendah'    => $data->kelasjalanterendah,
            'idpetugasuji'          => $idpetugas,
            'huv_nomordankondisirangka'                 => '1',
            'huv_nomordantipemotorpenggerak'            => '1',
            'huv_kondisitangkicorongdanpipabahanbakar'  => '1',
            'huv_kondisiconverterkit'                   => '1',
            'huv_kondisidanposisipipapembuangan'        => '1',
            'huv_ukurandankondisiban'                   => '1',
            'huv_kondisisistemsuspensi'                 => '1',
            'huv_kondisisistemremutama'                 => '1',
            'huv_kondisipenutuplampudanalatpantulcahaya' => '1',
            'huv_kondisipanelinstrumentdashboard'       => '1',
            'huv_kondisikacaspion'                      => '1',
            'huv_kondisispakbor'                        => '1',
            'huv_bentukbumper'                          => '1',
            'huv_keberadaandankondisiperlengkapan'      => '1',
            'huv_rancanganteknis'                       => '1',
            'huv_keberadaandankondisifasilitastanggapdaruratuntukmobilbus'   => '1',
            'huv_kondisibadankacaengseltempatdudukmbarangbakmuatantertutup'  => '1',
            'hum_kondisipenerusdaya'                    => '1',
            'hum_sudutbebaskemudi'                      => '1',
            'hum_kondisiremparkir'                      => '1',
            'hum_fungsilampudanalatpantulcahaya'        => '1',
            'hum_fungsipenghapuskaca'                   => '1',
            'hum_tingkatkegelapankaca'                  => '1',
            'hum_fungsiklakson'                         => '1',
            'hum_kondisidanfungsisabukkeselamatan'      => '1',
            'hum_ukurankendaraan'                       => '1',
            'hum_ukurantempatdudukdanbagiandalamkendaraanuntukmobilbus'       => '1',
            'berat_sumbu1'                              => $data->berats1,
            'berat_sumbu2'                              => $data->berats2,
            'berat_sumbu3'                              => $data->berats3,
            'berat_sumbu4'                              => $data->berats4,
            'berat_sumbu5'                              => $data->berats5,
            'berat_sumbu6'                              => $data->berats6,
            'berat_sumbu7'                              => $data->berats7,
            'berat_sumbu8'                              => $data->berats8,
            'berat_sumbu9'                              => $data->berats9,
            'berat_sumbu10'                              => $data->berats10,
            'berat_sumbu11'                              => $data->berats11,
            'berat_sumbu12'                              => $data->berats12,
            'alatuji_emisiasapbahanbakarsolar'          => $data->alatuji_emisiasapbahanbakarsolar,
            'alatuji_emisicobahanbakarbensin'           => $data->alatuji_emisicobahanbakarbensin,
            'alatuji_emisihcbahanbakarbensin'           => $data->alatuji_emisihcbahanbakarbensin,
            'alatuji_gayaremparkirtangan'               => $data->alatuji_remparkirtangan,
            'alatuji_gayaremparkirkaki'                 => $data->alatuji_remparkirkaki,
            'alatuji_gayapengereman1kanan'              => $data->gayaremkanan1,
            'alatuji_gayapengereman2kanan'              => $data->gayaremkanan2,
            'alatuji_gayapengereman3kanan'              => $data->gayaremkanan3,
            'alatuji_gayapengereman4kanan'              => $data->gayaremkanan4,
            'alatuji_gayapengereman5kanan'              => $data->gayaremkanan5,
            'alatuji_gayapengereman6kanan'              => $data->gayaremkanan6,
            'alatuji_gayapengereman7kanan'              => $data->gayaremkanan7,
            'alatuji_gayapengereman8kanan'              => $data->gayaremkanan8,
            'alatuji_gayapengereman9kanan'              => $data->gayaremkanan9,
            'alatuji_gayapengereman10kanan'             => $data->gayaremkanan10,
            'alatuji_gayapengereman11kanan'             => $data->gayaremkanan11,
            'alatuji_gayapengereman12kanan'             => $data->gayaremkanan12,
            'alatuji_gayapengereman1kiri'               => $data->gayaremkiri1,
            'alatuji_gayapengereman2kiri'               => $data->gayaremkiri2,
            'alatuji_gayapengereman3kiri'               => $data->gayaremkiri3,
            'alatuji_gayapengereman4kiri'               => $data->gayaremkiri4,
            'alatuji_gayapengereman5kiri'               => $data->gayaremkiri5,
            'alatuji_gayapengereman6kiri'               => $data->gayaremkiri6,
            'alatuji_gayapengereman7kiri'               => $data->gayaremkiri7,
            'alatuji_gayapengereman8kiri'               => $data->gayaremkiri8,
            'alatuji_gayapengereman9kiri'               => $data->gayaremkiri9,
            'alatuji_gayapengereman10kiri'              => $data->gayaremkiri10,
            'alatuji_gayapengereman11kiri'              => $data->gayaremkiri11,
            'alatuji_gayapengereman12kiri'              => $data->gayaremkiri12,
            'alatuji_gayapengeremanparkirkanan'          => $data->alatuji_gayapengeremanparkirkanan,
            'alatuji_gayapengeremanparkirkiri'          => $data->alatuji_gayapengeremanparkirkiri,
            'alatuji_remparkirtotalgayapengereman'      => $alatuji_remparkirtotalgayapengereman,
            'alatuji_remutamatotalgayapengereman'       => $data->alatuji_remutamatotalgayapengereman,
            'alatuji_remutamaselisihgayapengeremanrodakirikanan1'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan1,
            'alatuji_remutamaselisihgayapengeremanrodakirikanan2'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan2,
            'alatuji_remutamaselisihgayapengeremanrodakirikanan3'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan3,
            'alatuji_remutamaselisihgayapengeremanrodakirikanan4'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan4,
            'alatuji_remparkirtangan'                   => $data->alatuji_remparkirtangan,
            'alatuji_remparkirkaki'                     => $data->alatuji_remparkirkaki,
            'alatuji_kincuprodadepan'                   => $data->alatuji_kincuprodadepan,
            'alatuji_tingkatkebisingan'                 => $data->alatuji_tingkatkebisingan,
            'alatuji_lampuutamakekuatanpancarlampukanan' => $data->alatuji_lampuutamakekuatanpancarlampukanan,
            'alatuji_lampuutamakekuatanpancarlampukiri' => $data->alatuji_lampuutamakekuatanpancarlampukiri,
            'alatuji_lampuutamapenyimpanganlampukanan'  => $data->alatuji_lampuutamapenyimpanganlampukanan,
            'alatuji_lampuutamapenyimpanganlampukiri'   => $data->alatuji_lampuutamapenyimpanganlampukiri,
            'alatuji_penunjukkecepatan'                 => $data->alatuji_penunjukkecepatan,
            'alatuji_kedalamanalurban'                  => $data->alatuji_kedalamanalurban,
            'alatuji_alatpemantulcahayatambahan_kuning' => $data->alatuji_alatpemantulcahayatambahan_kuning,
            'alatuji_alatpemantulcahayatambahan_putih'  => $data->alatuji_alatpemantulcahayatambahan_putih,
            'alatuji_alatpemantulcahayatambahan_merah'  => $data->alatuji_alatpemantulcahayatambahan_merah,
            'wheel_base'                                => $data->a,
            'tgluji'                                    => date("dmY"),
            'masaberlakuuji'                            => $masaberlakuuji,
            'statuslulusuji'                            => '1',
        ]);
    }

    public function updateDatapengujian(
        $uji,
        $data,
        $alamatFull,
        $kode,
        $idkepaladinas,
        $iddirektur,
        $idpetugas,
        $tglsertifikatreg,
        $masaberlakuuji,
        $alatuji_remparkirtotalgayapengereman
    ) {
        if (!$uji)
            return [false, $uji];

        $uji->statuspenerbitan  = $kode;
        $uji->nouji             = $data->nouji;
        $uji->nama              = $data->nama;
        $uji->alamat            = $alamatFull;
        $uji->noidentitaspemilik = $data->noidentitaspemilik;
        $uji->nosertifikatreg   = $data->nosertifikatreg;
        $uji->tglsertifikatreg      = $data->tglsertifikatreg;
        $uji->nosuratkehilangan     = $data->nosuratkehilangan;
        $uji->noregistrasikendaraan = $data->noregistrasikendaraan;
        $uji->tgl_registrasikendaraan = $data->tgl_registrasikendaraan;
        $uji->norangka              = $data->norangka;
        $uji->merek                 = $data->merek;
        $uji->tipe                  = $data->tipe;
        $uji->nomesin               = $data->nomesin;
        $uji->jbb                   = $data->jbb;
        $uji->thpembuatan           = $data->thpembuatan;
        $uji->bahanbakar            = $data->bahanbakar;
        $uji->jenis                 = $data->jenis;
        $uji->subjenis_kendaraan    = $data->subjenis;
        $uji->varian_kendaraan      = $data->varian;
        $uji->sub_varian_kendaraan  = $data->tipe;
        $uji->isisilinder           = $data->isisilinder;
        $uji->dayamotorpenggerak    = $data->dayamotorpenggerak;
        $uji->idkepaladinas         = $idkepaladinas;
        $uji->iddirektur            = $iddirektur;
        $uji->kodewilayah           = $data->kodewilayah;
        $uji->kodewilayahasal       = $data->kodewilayahasal;
        $uji->area_from_id          = $data->idkodewilayah;
        $uji->area_from_name        = $data->kodewilayah;
        $uji->vehicle_brand_id      = $data->idmerek;
        $uji->vehicle_type_id       = $data->idjenis;
        $uji->vehicle_sub_id        = $data->idsubjenis;
        $uji->vehicle_varian_type_id = $data->idtipe;
        $uji->vehicle_varian_id     = $data->idvarian;
        $uji->fuel_id               = $data->idbahanbakar;
        $uji->jbi                   = $data->jbi;
        $uji->nosertifikatreg       = $data->nosertifikatreg;
        $uji->tglsertifikatreg      = $tglsertifikatreg;
        $uji->jbkb                  = $data->jbkb;
        $uji->jbki                  = $data->jbki;
        $uji->mst                   = $data->mst;
        $uji->beratkosong           = $data->beratkosong;
        $uji->konfigurasisumburoda  = $data->konfigurasisumburoda;
        $uji->ukuranban             = $data->ukuranban;
        $uji->panjangkendaraan      = $data->panjangkendaraan;
        $uji->lebarkendaraan        = $data->lebarkendaraan;
        $uji->tinggikendaraan       = $data->tinggikendaraan;
        $uji->panjangbakatautangki  = $data->panjangbakatautangki;
        $uji->lebarbakatautangki    = $data->lebarbakatautangki;
        $uji->tinggibakatautangki   = $data->tinggibakatautangki;
        $uji->julurdepan            = $data->julurdepan;
        $uji->julurbelakang         = $data->julurbelakang;
        $uji->jumlah_sumbu          = $data->jumlah_sumbu;
        $uji->jaraksumbu1_2         = $data->jaraksumbu1_2;
        $uji->jaraksumbu2_3         = $data->jaraksumbu2_3;
        $uji->jaraksumbu3_4         = $data->jaraksumbu3_4;
        $uji->jaraksumbu4_5         = $data->jaraksumbu4_5;
        $uji->jaraksumbu5_6         = $data->jaraksumbu5_6;
        $uji->jaraksumbu6_7         = $data->jaraksumbu6_7;
        $uji->jaraksumbu7_8         = $data->jaraksumbu7_8;
        $uji->jaraksumbu9_10         = $data->jaraksumbu9_10;
        $uji->jaraksumbu10_11         = $data->jaraksumbu10_11;
        $uji->jaraksumbu11_12         = $data->jaraksumbu11_12;
        $uji->dayaangkutorang       = $data->dayaangkutorang;
        $uji->dayaangkutbarang      = $data->dayaangkutbarang;
        $uji->kelasjalanterendah    = $data->kelasjalanterendah;
        $uji->kelasjalan_id         = $data->idkelasjalanterendah;
        $uji->idpetugasuji          = $idpetugas;
        $uji->berat_sumbu1          = $data->berats1;
        $uji->berat_sumbu2          = $data->berats2;
        $uji->berat_sumbu3          = $data->berats3;
        $uji->berat_sumbu4          = $data->berats4;
        $uji->berat_sumbu5          = $data->berats5;
        $uji->berat_sumbu6          = $data->berats6;
        $uji->berat_sumbu7          = $data->berats7;
        $uji->berat_sumbu8          = $data->berats8;
        $uji->berat_sumbu9          = $data->berats9;
        $uji->berat_sumbu10          = $data->berats10;
        $uji->berat_sumbu11          = $data->berats11;
        $uji->berat_sumbu12          = $data->berats12;
        $uji->alatuji_emisiasapbahanbakarsolar          = $data->alatuji_emisiasapbahanbakarsolar;
        $uji->alatuji_emisicobahanbakarbensin           = $data->alatuji_emisicobahanbakarbensin;
        $uji->alatuji_emisihcbahanbakarbensin           = $data->alatuji_emisihcbahanbakarbensin;
        $uji->alatuji_gayaremparkirtangan               = $data->alatuji_remparkirtangan;
        $uji->alatuji_gayaremparkirkaki                 = $data->alatuji_remparkirkaki;
        $uji->alatuji_gayapengereman1kanan              = $data->gayaremkanan1;
        $uji->alatuji_gayapengereman2kanan              = $data->gayaremkanan2;
        $uji->alatuji_gayapengereman3kanan              = $data->gayaremkanan3;
        $uji->alatuji_gayapengereman4kanan              = $data->gayaremkanan4;
        $uji->alatuji_gayapengereman5kanan              = $data->gayaremkanan5;
        $uji->alatuji_gayapengereman6kanan              = $data->gayaremkanan6;
        $uji->alatuji_gayapengereman7kanan              = $data->gayaremkanan7;
        $uji->alatuji_gayapengereman8kanan              = $data->gayaremkanan8;
        $uji->alatuji_gayapengereman9kanan              = $data->gayaremkanan9;
        $uji->alatuji_gayapengereman10kanan              = $data->gayaremkanan10;
        $uji->alatuji_gayapengereman11kanan              = $data->gayaremkanan11;
        $uji->alatuji_gayapengereman12kanan              = $data->gayaremkanan12;
        $uji->alatuji_gayapengereman1kiri              = $data->gayaremkiri1;
        $uji->alatuji_gayapengereman2kiri              = $data->gayaremkiri2;
        $uji->alatuji_gayapengereman3kiri              = $data->gayaremkiri3;
        $uji->alatuji_gayapengereman4kiri              = $data->gayaremkiri4;
        $uji->alatuji_gayapengereman5kiri              = $data->gayaremkiri5;
        $uji->alatuji_gayapengereman6kiri              = $data->gayaremkiri6;
        $uji->alatuji_gayapengereman7kiri              = $data->gayaremkiri7;
        $uji->alatuji_gayapengereman8kiri              = $data->gayaremkiri8;
        $uji->alatuji_gayapengereman9kiri              = $data->gayaremkiri9;
        $uji->alatuji_gayapengereman10kiri              = $data->gayaremkiri10;
        $uji->alatuji_gayapengereman11kiri              = $data->gayaremkiri11;
        $uji->alatuji_gayapengereman12kiri              = $data->gayaremkiri12;
        $uji->alatuji_gayapengeremanparkirkanan         = $data->alatuji_gayapengeremanparkirkanan;
        $uji->alatuji_gayapengeremanparkirkiri         = $data->alatuji_gayapengeremanparkirkiri;
        $uji->alatuji_remutamatotalgayapengereman       = $data->alatuji_remutamatotalgayapengereman;
        $uji->alatuji_remparkirtotalgayapengereman      = $alatuji_remparkirtotalgayapengereman;
        $uji->alatuji_remutamaselisihgayapengeremanrodakirikanan1  = $data->alatuji_remutamaselisihgayapengeremanrodakirikanan1;
        $uji->alatuji_remutamaselisihgayapengeremanrodakirikanan2  = $data->alatuji_remutamaselisihgayapengeremanrodakirikanan2;
        $uji->alatuji_remutamaselisihgayapengeremanrodakirikanan3  = $data->alatuji_remutamaselisihgayapengeremanrodakirikanan3;
        $uji->alatuji_remutamaselisihgayapengeremanrodakirikanan4  = $data->alatuji_remutamaselisihgayapengeremanrodakirikanan4;
        $uji->alatuji_remparkirtangan                   = $data->alatuji_remparkirtangan;
        $uji->alatuji_remparkirkaki                     = $data->alatuji_remparkirkaki;
        $uji->alatuji_kincuprodadepan                   = $data->alatuji_kincuprodadepan;
        $uji->alatuji_tingkatkebisingan                 = $data->alatuji_tingkatkebisingan;
        $uji->alatuji_lampuutamakekuatanpancarlampukanan = $data->alatuji_lampuutamakekuatanpancarlampukanan;
        $uji->alatuji_lampuutamakekuatanpancarlampukiri = $data->alatuji_lampuutamakekuatanpancarlampukiri;
        $uji->alatuji_lampuutamapenyimpanganlampukanan  = $data->alatuji_lampuutamapenyimpanganlampukanan;
        $uji->alatuji_lampuutamapenyimpanganlampukiri   = $data->alatuji_lampuutamapenyimpanganlampukiri;
        $uji->alatuji_penunjukkecepatan                 = $data->alatuji_penunjukkecepatan;
        $uji->alatuji_kedalamanalurban                  = $data->alatuji_kedalamanalurban;
        $uji->alatuji_alatpemantulcahayatambahan_kuning = $data->alatuji_alatpemantulcahayatambahan_kuning;
        $uji->alatuji_alatpemantulcahayatambahan_putih  = $data->alatuji_alatpemantulcahayatambahan_putih;
        $uji->alatuji_alatpemantulcahayatambahan_merah  = $data->alatuji_alatpemantulcahayatambahan_merah;
        $uji->wheel_base                                = $data->a;
        $uji->tgluji                                    = date("dmY");
        $uji->masaberlakuuji                            = $masaberlakuuji;

        // $uji->gayaremkiri1                              = $data->gayaremkiri1;
        // $uji->gayaremkiri2                              = $data->gayaremkiri2;
        // $uji->gayaremkiri3                              = $data->gayaremkiri3;
        // $uji->gayaremkiri4                              = $data->gayaremkiri4;
        // $uji->gayaremkiri5                              = $data->gayaremkiri5;
        // $uji->gayaremkiri6                              = $data->gayaremkiri6;
        // $uji->gayaremkiri7                              = $data->gayaremkiri7;
        // $uji->gayaremkiri8                              = $data->gayaremkiri8;
        // $uji->gayaremkiri9                              = $data->gayaremkiri9;
        // $uji->gayaremkiri10                             = $data->gayaremkiri10;
        // $uji->gayaremkiri11                             = $data->gayaremkiri11;
        // $uji->gayaremkiri12                             = $data->gayaremkiri12;
        // $uji->gayaremkanan1                             = $data->gayaremkanan1;
        // $uji->gayaremkanan2                             = $data->gayaremkanan2;
        // $uji->gayaremkanan3                             = $data->gayaremkanan3;
        // $uji->gayaremkanan4                             = $data->gayaremkanan4;
        // $uji->gayaremkanan5                             = $data->gayaremkanan5;
        // $uji->gayaremkanan6                             = $data->gayaremkanan6;
        // $uji->gayaremkanan7                             = $data->gayaremkanan7;
        // $uji->gayaremkanan8                             = $data->gayaremkanan8;
        // $uji->gayaremkanan9                             = $data->gayaremkanan9;
        // $uji->gayaremkanan10                            = $data->gayaremkanan10;
        // $uji->gayaremkanan11                            = $data->gayaremkanan11;
        // $uji->gayaremkanan12                            = $data->gayaremkanan12;
        // $uji->status_kincuprodadepan                    = $data->status_kincuprodadepan;
        // $uji->status_speedometer                        = $data->status_speedometer;
        // $uji->berats1                                   = $data->berats1;
        // $uji->berats2                                   = $data->berats2;
        // $uji->berats3                                   = $data->berats3;
        // $uji->berats4                                   = $data->berats4;
        // $uji->berats5                                   = $data->berats5;
        // $uji->berats6                                   = $data->berats6;
        // $uji->berats7                                   = $data->berats7;
        // $uji->berats8                                   = $data->berats8;
        // $uji->berats9                                   = $data->berats9;
        // $uji->berats10                                  = $data->berats10;
        // $uji->berats11                                  = $data->berats11;
        // $uji->berats12                                  = $data->berats12;
        // $uji->alatuji_remparkirtotalgayapengereman      = $data->alatuji_remparkirtotalgayapengereman;
        // $uji->alatuji_gayapengeremanparkirkanan         = $data->alatuji_gayapengeremanparkirkanan;
        // $uji->alatuji_gayapengeremanparkirkiri          = $data->alatuji_gayapengeremanparkirkiri;
        // $uji->status_remkanan                           = $data->status_remkanan;
        // $uji->status_remkiri                            = $data->status_remkiri;
        // $uji->status_remparkir                          = $data->status_remparkir;
        // $uji->jumlah_sumbu                              = $data->jumlah_sumbu;

        $uji->save();

        return [true, $uji];
    }


    public function setDatapengujian($id, $jenis_cetak)
    {
        $data = $this->getData($id);
        if ($data) {
            if ($data->kodepenerbitans_id == '7' || $data->kodepenerbitans_id == '3' || $data->kodepenerbitans_id == '4') {
                $kode = $this->model->select('kodepenerbitans_id', 'tglpendaftaran')->join('pendaftarans', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('identitaskendaraan_id', $data->identitaskendaraan_id)->where('pendaftarans.kodepenerbitans_id', '!=', '7')->where('pendaftarans.kodepenerbitans_id', '!=', '3')->where('pendaftarans.kodepenerbitans_id', '!=', '4')->where('pendaftarans.kodepenerbitans_id', '!=', '9')->where('pendaftarans.kodepenerbitans_id', '!=', '10')->orderBy('pendaftarans.id', 'DESC')->limit(1)->first();
                $tglpendaftaran = $kode->tglpendaftaran;
                if ($data->kodepenerbitans_id == '3' || $data->kodepenerbitans_id == '4') {
                    $kode = $data->kodepenerbitans_id;
                } else {
                    $kode = $kode->kodepenerbitans_id;
                }
                $tgluji = date_format(date_create($tglpendaftaran), "dmY");
                if (empty($data->masaberlakuuji)) {
                    $data->masaberlakuuji = date('dmY', strtotime($tglpendaftaran . ' + 6 Months'));
                }
            } else {
                $kode = $data->kodepenerbitans_id;
                $tgluji = date("dmY");
                if (empty($data->masaberlakuuji)) {
                    $data->masaberlakuuji = date('dmY', strtotime(date("Y-m-d") . ' + 6 Months'));
                }
            }

            if (is_null($data->tglsertifikatreg) || empty($data->tglsertifikatreg)) {
                $tglsertifikatreg = $tgluji;
            } else {
                $tglsertifikatreg = date_create($data->tglsertifikatreg);
                $tglsertifikatreg = date_format($tglsertifikatreg, "dmY");
            }

            $masaberlakuuji = $data->masaberlakuuji;

            if ($kode == '1' || $kode == '2') {
                $kodewilayahasal = env('APP_KODEWILAYAH');
                $kodewilayah = env('APP_KODEWILAYAH');
            } elseif ($kode == '5') {
                $daerah = Persuratan::select('tujuan')->where('pendaftaran_id', $id)->first();
                if ($daerah) {
                    $kodewilayahasal = Kodewilayah::where('area_code', $daerah->kode)->first();
                    if ($kodewilayahasal) {
                        $kodewilayahasal = $kodewilayahasal->area_code;
                    } else {
                        $kodewilayahasal = '';
                    }
                } else {
                    $kodewilayahasal = env('APP_KODEWILAYAH');
                }
                $kodewilayah = env('APP_KODEWILAYAH');
            } elseif ($kode == '6') {
                $daerah = Persuratan::select('tujuan')->where('pendaftaran_id', $id)->first();
                if ($daerah) {
                    $kodewilayahasal = Kodewilayah::where('area_code', $daerah->kode)->first();
                    if ($kodewilayahasal) {
                        $kodewilayahasal = $kodewilayahasal->area_code;
                    } else {
                        $kodewilayahasal = '';
                    }
                } else {
                    $kodewilayahasal = env('APP_KODEWILAYAH');
                }
                $kodewilayah = env('APP_KODEWILAYAH');
            } else {
                $kodewilayahasal = $data->kodewilayahasal;
                $kodewilayah = $data->kodewilayah;
            }

            $idwilayahasal = Kodewilayah::select('area_id')->where('area_code', $kodewilayahasal)->first();
            if ($idwilayahasal) {
                $idwilayahasal = $idwilayahasal->area_id;
            } else {
                $idwilayahasal = '345';
            }

            $idpetugas = $data->idpenguji;
            if ($idpetugas < 100) {
                $idpetugas = $idpetugas;
            }

            $idkepaladinas = Kepaladinas::select('idx')->first();
            if (!$idkepaladinas) {
                $idkepaladinas = '199';
            } else {
                $idkepaladinas = $idkepaladinas->idx;
            }
            $iddirektur = Direktur::select('idx')->first();
            if (!$iddirektur) {
                $iddirektur = '19';
            } else {
                $iddirektur = $iddirektur->idx;
            }
            if (is_null($data->nosertifikatreg) || empty($data->nosertifikatreg)) {
                $nosrut = '0';
            } else {
                $nosrut = $data->nosertifikatreg;
            }

            if ($data) {
                $alamatFull = $data->alamat . ', ' . $data->kelurahan . ', ' . $data->kecamatan . ', ' . $data->kota;
            } else {
                $alamatFull = '';
            }
            if ($jenis_cetak == '1') {
                $depan    = file_get_contents(public_path() . '/thumbnail_images/' . $data->nouji . '-tampakdepan.jpg');
                $kanan    = file_get_contents(public_path() . '/thumbnail_images/' . $data->nouji . '-tampakkanan.jpg');
                $belakang = file_get_contents(public_path() . '/thumbnail_images/' . $data->nouji . '-tampakbelakang.jpg');
                $kiri     = file_get_contents(public_path() . '/thumbnail_images/' . $data->nouji . '-tampakkiri.jpg');
                if ($kode == '5') {
                    $kode = '7';
                } elseif ($kode == '6') {
                    $kode = '8';
                } elseif ($kode == '9') {
                    $kode = '5';
                } elseif ($kode == '10') {
                    $kode = '6';
                } elseif ($kode == '8') {
                    $kode = '9';
                }
            } else {
                $checkFoto = Fotomentah::where('nouji', $data->nouji)->first();
                if (empty($checkFoto)) {
                    $thumbPath1 = public_path() . '/thumbnail_images/' . $data->nouji . '-tampakdepan.jpg';
                    $thumbPath2 = public_path() . '/thumbnail_images/' . $data->nouji . '-tampakkanan.jpg';
                    $thumbPath3 = public_path() . '/thumbnail_images/' . $data->nouji . '-tampakbelakang.jpg';
                    $thumbPath4 = public_path() . '/thumbnail_images/' . $data->nouji . '-tampakkiri.jpg';
                    $data = Fotomentah::create([
                        'nouji'                => $data->nouji,
                        'fotodepanmentah'      => file_get_contents($thumbPath1),
                        'fotobelakangmentah'   => file_get_contents($thumbPath3),
                        'fotokananmentah'      => file_get_contents($thumbPath2),
                        'fotokirimentah'       => file_get_contents($thumbPath4),
                        'statuskompres'        => '0',
                    ]);
                }
                $depan = null;
                $kanan = null;
                $belakang = null;
                $kiri = null;
            }
            $alatuji_remparkirtotalgayapengereman = (int)$data->alatuji_gayapengeremanparkirkiri + (int)$data->alatuji_gayapengeremanparkirkanan;

            if (!$data->idx) {
                // $uji = Datapengujian::Create([
                //     'statuspenerbitan'  => $kode,
                //     'nouji'             => $data->nouji,
                //     'nama'              => $data->nama,
                //     'alamat'            => $alamatFull,
                //     'noidentitaspemilik' => $data->noidentitaspemilik,
                //     'nosertifikatreg'   => $data->nosertifikatreg,
                //     'tglsertifikatreg'      => $tglsertifikatreg,
                //     'nosuratkehilangan'     => $data->nosuratkehilangan,
                //     'noregistrasikendaraan' => $data->noregistrasikendaraan,
                //     'tgl_registrasikendaraan' => $data->tgl_registrasikendaraan,
                //     'norangka'              => $data->norangka,
                //     'merek'                 => $data->merek,
                //     'tipe'                  => $data->tipe,
                //     'nomesin'               => $data->nomesin,
                //     'jenis'                 => $data->jenis,
                //     'subjenis_kendaraan'    => $data->subjenis,
                //     'varian_kendaraan'      => $data->varian,
                //     'sub_varian_kendaraan'  => $data->tipe,
                //     'jbb'                   => $data->jbb ?: 0,
                //     'thpembuatan'           => $data->thpembuatan,
                //     'bahanbakar'            => $data->bahanbakar,
                //     'isisilinder'           => $data->isisilinder ?: 0,
                //     'dayamotorpenggerak'    => $data->dayamotorpenggerak ?: 0,
                //     'idkepaladinas'         => $idkepaladinas,
                //     'iddirektur'            => $iddirektur,
                //     'kodewilayah'           => $kodewilayah,
                //     'kodewilayahasal'       => $kodewilayahasal,
                //     'area_from_id'          => $idwilayahasal,
                //     'area_from_name'        => $kodewilayahasal,
                //     'vehicle_brand_id'      => $data->idmerek,
                //     'vehicle_type_id'       => $data->idjenis,
                //     'vehicle_sub_id'        => $data->idsubjenis,
                //     'vehicle_varian_type_id' => $data->idtipe,
                //     'vehicle_varian_id'     => $data->idvarian,
                //     'fuel_id'               => $data->idbahanbakar,
                //     'kelasjalan_id'         => $data->idkelasjalanterendah,
                //     'jbi'                   => $data->jbi ?: 0,
                //     'jbkb'                  => $data->jbkb ?: 0,
                //     'jbki'                  => $data->jbki ?: 0,
                //     'mst'                   => $data->mst ?: 0,
                //     'beratkosong'           => $data->beratkosong ?: 0,
                //     'konfigurasisumburoda'  => $data->konfigurasisumburoda,
                //     'ukuranban'             => $data->ukuranban,
                //     'panjangkendaraan'      => $data->panjangkendaraan ?: 0,
                //     'lebarkendaraan'        => $data->lebarkendaraan ?: 0,
                //     'tinggikendaraan'       => $data->tinggikendaraan ?: 0,
                //     'panjangbakatautangki'  => $data->panjangbakatautangki ?: 0,
                //     'lebarbakatautangki'    => $data->lebarbakatautangki ?: 0,
                //     'tinggibakatautangki'   => $data->tinggibakatautangki ?: 0,
                //     'jumlah_sumbu'          => $data->jumlah_sumbu ?: 0,
                //     'julurdepan'            => $data->julurdepan ?: 0,
                //     'julurbelakang'         => $data->julurbelakang ?: 0,
                //     'jaraksumbu1_2'         => $data->jaraksumbu1_2 ?: 0,
                //     'jaraksumbu2_3'         => $data->jaraksumbu2_3 ?: 0,
                //     'jaraksumbu3_4'         => $data->jaraksumbu3_4 ?: 0,
                //     'jaraksumbu5_6'         => $data->jaraksumbu5_6 ?: 0,
                //     'jaraksumbu6_7'         => $data->jaraksumbu6_7 ?: 0,
                //     'jaraksumbu7_8'         => $data->jaraksumbu7_8 ?: 0,
                //     'jaraksumbu8_9'         => $data->jaraksumbu8_9 ?: 0,
                //     'jaraksumbu9_10'        => $data->jaraksumbu9_10 ?: 0,
                //     'jaraksumbu10_11'        => $data->jaraksumbu10_11 ?: 0,
                //     'jaraksumbu11_12'        => $data->jaraksumbu11_12 ?: 0,
                //     'dayaangkutorang'       => $data->dayaangkutorang ?: 0,
                //     'dayaangkutbarang'      => $data->dayaangkutbarang ?: 0,
                //     'kelasjalanterendah'    => $data->kelasjalanterendah,
                //     'idpetugasuji'          => $idpetugas,
                //     'huv_nomordankondisirangka'                 => '1',
                //     'huv_nomordantipemotorpenggerak'            => '1',
                //     'huv_kondisitangkicorongdanpipabahanbakar'  => '1',
                //     'huv_kondisiconverterkit'                   => '1',
                //     'huv_kondisidanposisipipapembuangan'        => '1',
                //     'huv_ukurandankondisiban'                   => '1',
                //     'huv_kondisisistemsuspensi'                 => '1',
                //     'huv_kondisisistemremutama'                 => '1',
                //     'huv_kondisipenutuplampudanalatpantulcahaya' => '1',
                //     'huv_kondisipanelinstrumentdashboard'       => '1',
                //     'huv_kondisikacaspion'                      => '1',
                //     'huv_kondisispakbor'                        => '1',
                //     'huv_bentukbumper'                          => '1',
                //     'huv_keberadaandankondisiperlengkapan'      => '1',
                //     'huv_rancanganteknis'                       => '1',
                //     'huv_keberadaandankondisifasilitastanggapdaruratuntukmobilbus'   => '1',
                //     'huv_kondisibadankacaengseltempatdudukmbarangbakmuatantertutup'  => '1',
                //     'hum_kondisipenerusdaya'                    => '1',
                //     'hum_sudutbebaskemudi'                      => '1',
                //     'hum_kondisiremparkir'                      => '1',
                //     'hum_fungsilampudanalatpantulcahaya'        => '1',
                //     'hum_fungsipenghapuskaca'                   => '1',
                //     'hum_tingkatkegelapankaca'                  => '1',
                //     'hum_fungsiklakson'                         => '1',
                //     'hum_kondisidanfungsisabukkeselamatan'      => '1',
                //     'hum_ukurankendaraan'                       => '1',
                //     'hum_ukurantempatdudukdanbagiandalamkendaraanuntukmobilbus'       => '1',
                //     'berat_sumbu1'                              => $data->berats1,
                //     'berat_sumbu2'                              => $data->berats2,
                //     'berat_sumbu3'                              => $data->berats3 ?: 0,
                //     'berat_sumbu4'                              => $data->berats4 ?: 0,
                //     'berat_sumbu5'                              => $data->berats5 ?: 0,
                //     'berat_sumbu6'                              => $data->berats6 ?: 0,
                //     'berat_sumbu7'                              => $data->berats7 ?: 0,
                //     'berat_sumbu8'                              => $data->berats8 ?: 0,
                //     'berat_sumbu9'                              => $data->berats9 ?: 0,
                //     'berat_sumbu10'                              => $data->berats10 ?: 0,
                //     'berat_sumbu11'                              => $data->berats11 ?: 0,
                //     'berat_sumbu12'                              => $data->berats12 ?: 0,
                //     'alatuji_emisiasapbahanbakarsolar'          => $data->alatuji_emisiasapbahanbakarsolar,
                //     'alatuji_emisicobahanbakarbensin'           => $data->alatuji_emisicobahanbakarbensin,
                //     'alatuji_emisihcbahanbakarbensin'           => $data->alatuji_emisihcbahanbakarbensin,
                //     'alatuji_gayaremparkirtangan'               => $data->alatuji_remparkirtangan ?: 0,
                //     'alatuji_gayaremparkirkaki'                 => $data->alatuji_remparkirkaki ?: 0,
                //     'alatuji_gayapengereman1kanan'              => $data->gayaremkanan1 ?: 0,
                //     'alatuji_gayapengereman2kanan'              => $data->gayaremkanan2 ?: 0,
                //     'alatuji_gayapengereman3kanan'              => $data->gayaremkanan3 ?: 0,
                //     'alatuji_gayapengereman4kanan'              => $data->gayaremkanan4 ?: 0,
                //     'alatuji_gayapengereman5kanan'              => $data->gayaremkanan5 ?: 0,
                //     'alatuji_gayapengereman6kanan'              => $data->gayaremkanan6 ?: 0,
                //     'alatuji_gayapengereman7kanan'              => $data->gayaremkanan7 ?: 0,
                //     'alatuji_gayapengereman8kanan'              => $data->gayaremkanan8 ?: 0,
                //     'alatuji_gayapengereman9kanan'              => $data->gayaremkanan9 ?: 0,
                //     'alatuji_gayapengereman10kanan'             => $data->gayaremkanan10 ?: 0,
                //     'alatuji_gayapengereman11kanan'             => $data->gayaremkanan11 ?: 0,
                //     'alatuji_gayapengereman12kanan'             => $data->gayaremkanan12 ?: 0,
                //     'alatuji_gayapengereman1kiri'               => $data->gayaremkiri1 ?: 0,
                //     'alatuji_gayapengereman2kiri'               => $data->gayaremkiri2 ?: 0,
                //     'alatuji_gayapengereman3kiri'               => $data->gayaremkiri3 ?: 0,
                //     'alatuji_gayapengereman4kiri'               => $data->gayaremkiri4 ?: 0,
                //     'alatuji_gayapengereman5kiri'               => $data->gayaremkiri5 ?: 0,
                //     'alatuji_gayapengereman6kiri'               => $data->gayaremkiri6 ?: 0,
                //     'alatuji_gayapengereman7kiri'               => $data->gayaremkiri7 ?: 0,
                //     'alatuji_gayapengereman8kiri'               => $data->gayaremkiri8 ?: 0,
                //     'alatuji_gayapengereman9kiri'               => $data->gayaremkiri9 ?: 0,
                //     'alatuji_gayapengereman10kiri'              => $data->gayaremkiri10 ?: 0,
                //     'alatuji_gayapengereman11kiri'              => $data->gayaremkiri11 ?: 0,
                //     'alatuji_gayapengereman12kiri'              => $data->gayaremkiri12 ?: 0,
                //     'alatuji_gayapengeremanparkirkanan'          => $data->alatuji_gayapengeremanparkirkanan ?: 0,
                //     'alatuji_gayapengeremanparkirkiri'          => $data->alatuji_gayapengeremanparkirkiri ?: 0,
                //     'alatuji_remparkirtotalgayapengereman'      => $alatuji_remparkirtotalgayapengereman ?: 0,
                //     'alatuji_remutamatotalgayapengereman'       => $data->alatuji_remutamatotalgayapengereman ?: 0,
                //     'alatuji_remutamaselisihgayapengeremanrodakirikanan1'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan1 ?: 0,
                //     'alatuji_remutamaselisihgayapengeremanrodakirikanan2'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan2 ?: 0,
                //     'alatuji_remutamaselisihgayapengeremanrodakirikanan3'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan3 ?: 0,
                //     'alatuji_remutamaselisihgayapengeremanrodakirikanan4'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan4 ?: 0,
                //     'alatuji_remparkirtangan'                   => $data->alatuji_remparkirtangan ?: 0,
                //     'alatuji_remparkirkaki'                     => $data->alatuji_remparkirkaki ?: 0,
                //     'alatuji_kincuprodadepan'                   => $data->alatuji_kincuprodadepan ?: 0,
                //     'alatuji_tingkatkebisingan'                 => $data->alatuji_tingkatkebisingan ?: 0,
                //     'alatuji_lampuutamakekuatanpancarlampukanan' => $data->alatuji_lampuutamakekuatanpancarlampukanan ?: 0,
                //     'alatuji_lampuutamakekuatanpancarlampukiri' => $data->alatuji_lampuutamakekuatanpancarlampukiri ?: 0,
                //     'alatuji_lampuutamapenyimpanganlampukanan'  => $data->alatuji_lampuutamapenyimpanganlampukanan ?: 0,
                //     'alatuji_lampuutamapenyimpanganlampukiri'   => $data->alatuji_lampuutamapenyimpanganlampukiri ?: 0,
                //     'alatuji_penunjukkecepatan'                 => $data->alatuji_penunjukkecepatan ?: 0,
                //     'alatuji_kedalamanalurban'                  => $data->alatuji_kedalamanalurban ?: 0,
                //     'alatuji_alatpemantulcahayatambahan_kuning' => $data->alatuji_alatpemantulcahayatambahan_kuning ?: 0,
                //     'alatuji_alatpemantulcahayatambahan_putih'  => $data->alatuji_alatpemantulcahayatambahan_putih ?: 0,
                //     'alatuji_alatpemantulcahayatambahan_merah'  => $data->alatuji_alatpemantulcahayatambahan_merah ?: 0,
                //     'wheel_base'                                => $data->a ?: 0,
                //     'tgluji'                                    => date("dmY"),
                //     'masaberlakuuji'                            => $masaberlakuuji,
                //     'statuslulusuji'                            => '1',
                //     'fotodepansmall'                            => $depan,
                //     'fotokanansmall'                            => $kanan,
                //     'fotobelakangsmall'                         => $belakang,
                //     'fotokirismall'                             => $kiri,
                // ]);

                $uji = $this->createDatapengujian(
                    $id,
                    $data,
                    $alamatFull,
                    $kode,
                    $idkepaladinas,
                    $iddirektur,
                    $idpetugas,
                    $tglsertifikatreg,
                    $masaberlakuuji,
                    $alatuji_remparkirtotalgayapengereman
                );
                if ($uji) {
                    $idx = Pendaftaran::where('id', $id)->first();
                    $idx->idx = $uji->idx;
                    $idx->save();
                }
            } else {
                $uji = Datapengujian::where('idx', $data->idx)->first();

                [$updateState, $uji] = $this->updateDatapengujian(
                    $uji,
                    $data,
                    $alamatFull,
                    $kode,
                    $idkepaladinas,
                    $iddirektur,
                    $idpetugas,
                    $tglsertifikatreg,
                    $masaberlakuuji,
                    $alatuji_remparkirtotalgayapengereman
                );

                if (!$updateState) {
                    $uji = $this->createDatapengujian(
                        $data->idx,
                        $data,
                        $alamatFull,
                        $kode,
                        $idkepaladinas,
                        $iddirektur,
                        $idpetugas,
                        $tglsertifikatreg,
                        $masaberlakuuji,
                        $alatuji_remparkirtotalgayapengereman
                    );
                }


                // $uji->statuspenerbitan  = $kode;
                // $uji->nouji             = $data->nouji;
                // $uji->nama              = $data->nama;
                // $uji->alamat            = $alamatFull;
                // $uji->noidentitaspemilik = $data->noidentitaspemilik;
                // $uji->nosertifikatreg   = $data->nosertifikatreg;
                // $uji->tglsertifikatreg      = $data->tglsertifikatreg;
                // $uji->nosuratkehilangan     = $data->nosuratkehilangan;
                // $uji->noregistrasikendaraan = $data->noregistrasikendaraan;
                // $uji->tgl_registrasikendaraan = $data->tgl_registrasikendaraan;
                // $uji->norangka              = $data->norangka;
                // $uji->merek                 = $data->merek;
                // $uji->tipe                  = $data->tipe;
                // $uji->nomesin               = $data->nomesin;
                // $uji->jbb                   = $data->jbb ?: 0;
                // $uji->thpembuatan           = $data->thpembuatan;
                // $uji->bahanbakar            = $data->bahanbakar;
                // $uji->jenis                 = $data->jenis;
                // $uji->subjenis_kendaraan    = $data->subjenis;
                // $uji->varian_kendaraan      = $data->varian;
                // $uji->sub_varian_kendaraan  = $data->tipe;
                // $uji->isisilinder           = $data->isisilinder ?: 0;
                // $uji->dayamotorpenggerak    = $data->dayamotorpenggerak ?: 0;
                // $uji->idkepaladinas         = $idkepaladinas;
                // $uji->iddirektur            = $iddirektur;
                // $uji->kodewilayah           = $kodewilayah;
                // $uji->kodewilayahasal       = $kodewilayahasal;
                // $uji->area_from_id          = $idwilayahasal;
                // $uji->area_from_name        = $kodewilayahasal;
                // $uji->vehicle_brand_id      = $data->idmerek;
                // $uji->vehicle_type_id       = $data->idjenis;
                // $uji->vehicle_sub_id        = $data->idsubjenis;
                // $uji->vehicle_varian_type_id = $data->idtipe;
                // $uji->vehicle_varian_id     = $data->idvarian;
                // $uji->fuel_id               = $data->idbahanbakar;
                // $uji->jbi                   = $data->jbi ?: 0;
                // $uji->nosertifikatreg       = $data->nosertifikatreg;
                // $uji->tglsertifikatreg      = $tglsertifikatreg;
                // $uji->jbkb                  = $data->jbkb ?: 0;
                // $uji->jbki                  = $data->jbki ?: 0;
                // $uji->mst                   = $data->mst ?: 0;
                // $uji->beratkosong           = $data->beratkosong ?: 0;
                // $uji->konfigurasisumburoda  = $data->konfigurasisumburoda;
                // $uji->ukuranban             = $data->ukuranban;
                // $uji->panjangkendaraan      = $data->panjangkendaraan ?: 0;
                // $uji->lebarkendaraan        = $data->lebarkendaraan ?: 0;
                // $uji->tinggikendaraan       = $data->tinggikendaraan ?: 0;
                // $uji->panjangbakatautangki  = $data->panjangbakatautangki ?: 0;
                // $uji->lebarbakatautangki    = $data->lebarbakatautangki ?: 0;
                // $uji->tinggibakatautangki   = $data->tinggibakatautangki ?: 0;
                // $uji->julurdepan            = $data->julurdepan ?: 0;
                // $uji->julurbelakang         = $data->julurbelakang ?: 0;
                // $uji->jumlah_sumbu          = $data->jumlah_sumbu ?: 0;
                // $uji->jaraksumbu1_2         = $data->jaraksumbu1_2 ?: 0;
                // $uji->jaraksumbu2_3         = $data->jaraksumbu2_3 ?: 0;
                // $uji->jaraksumbu3_4         = $data->jaraksumbu3_4 ?: 0;
                // $uji->jaraksumbu4_5         = $data->jaraksumbu4_5 ?: 0;
                // $uji->jaraksumbu5_6         = $data->jaraksumbu5_6 ?: 0;
                // $uji->jaraksumbu6_7         = $data->jaraksumbu6_7 ?: 0;
                // $uji->jaraksumbu7_8         = $data->jaraksumbu7_8 ?: 0;
                // $uji->jaraksumbu9_10         = $data->jaraksumbu9_10 ?: 0;
                // $uji->jaraksumbu10_11         = $data->jaraksumbu10_11 ?: 0;
                // $uji->jaraksumbu11_12         = $data->jaraksumbu11_12 ?: 0;
                // $uji->dayaangkutorang       = $data->dayaangkutorang ?: 0;
                // $uji->dayaangkutbarang      = $data->dayaangkutbarang ?: 0;
                // $uji->kelasjalanterendah    = $data->kelasjalanterendah;
                // $uji->kelasjalan_id         = $data->idkelasjalanterendah;
                // $uji->idpetugasuji          = $idpetugas;
                // $uji->berat_sumbu1          = $data->berats1 ?: 0;
                // $uji->berat_sumbu2          = $data->berats2 ?: 0;
                // $uji->berat_sumbu3          = $data->berats3 ?: 0;
                // $uji->berat_sumbu4          = $data->berats4 ?: 0;
                // $uji->berat_sumbu5          = $data->berats5 ?: 0;
                // $uji->berat_sumbu6          = $data->berats6 ?: 0;
                // $uji->berat_sumbu7          = $data->berats7 ?: 0;
                // $uji->berat_sumbu8          = $data->berats8 ?: 0;
                // $uji->berat_sumbu9          = $data->berats9 ?: 0;
                // $uji->berat_sumbu10          = $data->berats10 ?: 0;
                // $uji->berat_sumbu11          = $data->berats11 ?: 0;
                // $uji->berat_sumbu12          = $data->berats12 ?: 0;
                // $uji->alatuji_emisiasapbahanbakarsolar          = $data->alatuji_emisiasapbahanbakarsolar;
                // $uji->alatuji_emisicobahanbakarbensin           = $data->alatuji_emisicobahanbakarbensin;
                // $uji->alatuji_emisihcbahanbakarbensin           = $data->alatuji_emisihcbahanbakarbensin;
                // $uji->alatuji_gayaremparkirtangan               = $data->alatuji_remparkirtangan ?: 0;
                // $uji->alatuji_gayaremparkirkaki                 = $data->alatuji_remparkirkaki ?: 0;
                // $uji->alatuji_gayapengereman1kanan              = $data->gayaremkanan1 ?: 0;
                // $uji->alatuji_gayapengereman2kanan              = $data->gayaremkanan2 ?: 0;
                // $uji->alatuji_gayapengereman3kanan              = $data->gayaremkanan3 ?: 0;
                // $uji->alatuji_gayapengereman4kanan              = $data->gayaremkanan4 ?: 0;
                // $uji->alatuji_gayapengereman5kanan              = $data->gayaremkanan5 ?: 0;
                // $uji->alatuji_gayapengereman6kanan              = $data->gayaremkanan6 ?: 0;
                // $uji->alatuji_gayapengereman7kanan              = $data->gayaremkanan7 ?: 0;
                // $uji->alatuji_gayapengereman8kanan              = $data->gayaremkanan8 ?: 0;
                // $uji->alatuji_gayapengereman9kanan              = $data->gayaremkanan9 ?: 0;
                // $uji->alatuji_gayapengereman10kanan              = $data->gayaremkanan10 ?: 0;
                // $uji->alatuji_gayapengereman11kanan              = $data->gayaremkanan11 ?: 0;
                // $uji->alatuji_gayapengereman12kanan              = $data->gayaremkanan12 ?: 0;
                // $uji->alatuji_gayapengereman1kiri              = $data->gayaremkiri1 ?: 0;
                // $uji->alatuji_gayapengereman2kiri              = $data->gayaremkiri2 ?: 0;
                // $uji->alatuji_gayapengereman3kiri              = $data->gayaremkiri3 ?: 0;
                // $uji->alatuji_gayapengereman4kiri              = $data->gayaremkiri4 ?: 0;
                // $uji->alatuji_gayapengereman5kiri              = $data->gayaremkiri5 ?: 0;
                // $uji->alatuji_gayapengereman6kiri              = $data->gayaremkiri6 ?: 0;
                // $uji->alatuji_gayapengereman7kiri              = $data->gayaremkiri7 ?: 0;
                // $uji->alatuji_gayapengereman8kiri              = $data->gayaremkiri8 ?: 0;
                // $uji->alatuji_gayapengereman9kiri              = $data->gayaremkiri9 ?: 0;
                // $uji->alatuji_gayapengereman10kiri              = $data->gayaremkiri10 ?: 0;
                // $uji->alatuji_gayapengereman11kiri              = $data->gayaremkiri11 ?: 0;
                // $uji->alatuji_gayapengereman12kiri              = $data->gayaremkiri12 ?: 0;
                // $uji->alatuji_gayapengeremanparkirkanan         = $data->alatuji_gayapengeremanparkirkanan ?: 0;
                // $uji->alatuji_gayapengeremanparkirkiri         = $data->alatuji_gayapengeremanparkirkiri ?: 0;
                // $uji->alatuji_remutamatotalgayapengereman       = $data->alatuji_remutamatotalgayapengereman ?: 0;
                // $uji->alatuji_remparkirtotalgayapengereman      = $alatuji_remparkirtotalgayapengereman ?: 0;
                // $uji->alatuji_remutamaselisihgayapengeremanrodakirikanan1  = $data->alatuji_remutamaselisihgayapengeremanrodakirikanan1 ?: 0;
                // $uji->alatuji_remutamaselisihgayapengeremanrodakirikanan2  = $data->alatuji_remutamaselisihgayapengeremanrodakirikanan2 ?: 0;
                // $uji->alatuji_remutamaselisihgayapengeremanrodakirikanan3  = $data->alatuji_remutamaselisihgayapengeremanrodakirikanan3 ?: 0;
                // $uji->alatuji_remutamaselisihgayapengeremanrodakirikanan4  = $data->alatuji_remutamaselisihgayapengeremanrodakirikanan4 ?: 0;
                // $uji->alatuji_remparkirtangan                   = $data->alatuji_remparkirtangan ?: 0;
                // $uji->alatuji_remparkirkaki                     = $data->alatuji_remparkirkaki ?: 0;
                // $uji->alatuji_kincuprodadepan                   = $data->alatuji_kincuprodadepan ?: 0;
                // $uji->alatuji_tingkatkebisingan                 = $data->alatuji_tingkatkebisingan ?: 0;
                // $uji->alatuji_lampuutamakekuatanpancarlampukanan = $data->alatuji_lampuutamakekuatanpancarlampukanan ?: 0;
                // $uji->alatuji_lampuutamakekuatanpancarlampukiri = $data->alatuji_lampuutamakekuatanpancarlampukiri ?: 0;
                // $uji->alatuji_lampuutamapenyimpanganlampukanan  = $data->alatuji_lampuutamapenyimpanganlampukanan ?: 0;
                // $uji->alatuji_lampuutamapenyimpanganlampukiri   = $data->alatuji_lampuutamapenyimpanganlampukiri ?: 0;
                // $uji->alatuji_penunjukkecepatan                 = $data->alatuji_penunjukkecepatan ?: 0;
                // $uji->alatuji_kedalamanalurban                  = $data->alatuji_kedalamanalurban ?: 0;
                // $uji->alatuji_alatpemantulcahayatambahan_kuning = $data->alatuji_alatpemantulcahayatambahan_kuning ?: 0;
                // $uji->alatuji_alatpemantulcahayatambahan_putih  = $data->alatuji_alatpemantulcahayatambahan_putih ?: 0;
                // $uji->alatuji_alatpemantulcahayatambahan_merah  = $data->alatuji_alatpemantulcahayatambahan_merah ?: 0;
                // $uji->wheel_base                                = $data->a ?: 0;
                // $uji->tgluji                                    = date("dmY");
                // $uji->masaberlakuuji                            = $masaberlakuuji;
                // $uji->fotodepansmall    = $depan;
                // $uji->fotokanansmall    = $kanan;
                // $uji->fotokirismall    = $kiri;
                // $uji->fotobelakangsmall    = $belakang;
                // $uji->save();
            }

            if ($uji) {
                $statuslulusuji = LaikJalan::where('pendaftaran_id', $id)->first();
                $statuslulusuji->statuslulusuji = '1';
                $statuslulusuji->save();

                $updateIden = Identitaskendaraan::where('nouji', $uji->nouji)->first();
                if ($updateIden) {
                    $masaberlakuuji = substr($uji->masaberlakuuji, 4, 4) . '-' . substr($uji->masaberlakuuji, 2, 2) . '-' . substr($uji->masaberlakuuji, 0, 2);
                    $now = time();
                    if (strtotime($masaberlakuuji) > $now) {
                        $statuskendaraan = '1';
                    } else {
                        $statuskendaraan = '0';
                    }
                    $tglberlakuuji = $masaberlakuuji;

                    $updateIden->statuskendaraan = $statuskendaraan;
                    $updateIden->tglberlakuuji = $tglberlakuuji;
                    $updateIden->save();
                }
                // $catatan = Catatan::where('pendaftaran_id',$id)->get();
                // if($catatan){
                //     $catatan->status = '0';
                //     $catatan->save();
                // }
            }

            return $uji;
        }
    }

    public function unSetDatapengujian($id)
    {
        $idx = Pendaftaran::where('id', $id)->first();
        if ($idx) {
            $del = Datapengujian::where('idx', $idx->idx)->first();
            if ($del) {
                $del->delete();

                $catatan = Catatan::where('pendaftaran_id', $id)->where('status', '0')->get();
                if ($catatan) {
                    $catatan->status = '1';
                    $catatan->Save();
                }
            }

            // if($del){
            $idx = Pendaftaran::where('id', $id)->first();
            $idx->idx   = '';
            $idx->save();

            $statuslulusuji = LaikJalan::where('pendaftaran_id', $id)->first();
            $statuslulusuji->statuslulusuji = '0';
            $statuslulusuji->save();
            // }
            return $idx;
        }
    }

    public function createVerif($request)
    {
        return $this->model1->create($request);
    }

    public function checkid($id)
    {
        $data = $this->model1->where('uuid', $id);

        return $data->first();
    }

    public function updateVerif($id, $request)
    {
        $user = auth()->user();
        $update = $this->model->where('pendaftaran_id', $id)->first();
        $update->statuslulusuji = $request->statuslulusuji;
        $update->idpenguji = $request['idpenguji'];
        $update->tglujiulang = $request->tglujiulang;
        $update->catatanverif = $request->catatanverif;

        if ($update->save()) {
            // dd($update);
            if ($update->statuslulusuji == '1') {
                $this->setDatapengujian($update->pendaftaran_id, $request->jenis_cetak ?? 0);
            }
            return $update;
        }
        return false;
    }

    public function approveSurat($id, $request)
    {
        $user = auth()->user();
        $update = $this->model1->where('uuid', $id)->first();
        $update->posisi = '10';
        $update->posverif = $request->posverif;
        $update->user_posverif = $user['id'];
        $update->catatanverif = $request->catatanverif;

        if ($update->save()) {
            $updateS = $this->modelS->where('pendaftaran_id', $update->id)->first();
            if ($updateS) {
                $updateS->v_stnk = $request->v_stnk;
                $updateS->v_kartuinduk = $request->v_kartuinduk;
                $updateS->v_srut = $request->v_srut;
                $updateS->v_smartcard = $request->v_smartcard;
                $updateS->v_riwayat = $request->v_riwayat;
                $updateS->catatan = $request->catatan;
                $updateS->status_cetak = $request->posverif;
                $updateS->save();
                return true;
            }
            return true;
        }
        return false;
    }

    public function deleteVerif($id)
    {
        $delete = $this->model->where('uuid', $id);
        $delete->delete();
        return $delete;
    }
}

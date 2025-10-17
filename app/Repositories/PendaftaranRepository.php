<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pendaftaran;
use App\Models\Pengujian;
use App\Models\Transaksi;
use App\Models\Kuota;
use App\Models\Catatan;
use App\Models\TamanKendaraan;
use App\Models\Datalama;
use App\Models\BagianBawahKendaraan;
use App\Models\BagianBelakangKendaraan;
use App\Models\BagianDalamKendaraan;
use App\Models\BagianDepanKendaraan;
use App\Models\BagianKananKendaraan;
use App\Models\BagianKiriKendaraan;
use App\Models\DimensiKendaraan;
use App\Models\IdentifikasiKendaraan;
use App\Models\Identitaskendaraan;
use App\Models\LaikJalan;
use App\Models\PendaftaransOnline;
use App\Models\Datakendaraan;
use App\Models\Penyerahan;
use App\Models\Persuratan;
use DB;

class PendaftaranRepository
{
    use RepositoryTrait;

    protected $model,$modelOnline,$modelPenyerahan;

    public function __construct(Pendaftaran $model, PendaftaransOnline $modelOnline, Penyerahan $modelPenyerahan)
    {
        $this->model = $model;
        $this->modelOnline = $modelOnline;
        $this->modelPenyerahan = $modelPenyerahan;
    }

    public function getAll()
    {

        $data = $this->model
            ->select('pendaftarans.noantrian','pendaftarans.uuid', 'kodepenerbitans.keterangan', 'identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan', 'pendaftarans.status', 'pendaftarans.jenispendaftaran', 'pendaftarans.notelp')
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
            ->where('pendaftarans.verif', '1')
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
    
    public function getAllPenyerahan()
    {
        $data = $this->model
            ->select('pendaftarans.noantrian','pendaftarans.uuid','kodepenerbitans.keterangan','identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan','nama','namapenerima','waktu')
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->leftjoin('kodepenerbitans','pendaftarans.kodepenerbitans_id','=','kodepenerbitans.id')
            ->leftjoin('penyerahan','penyerahan.pendaftaran_id','=','pendaftarans.id')
            ->where('pendaftarans.posisi','>=','10')
            ->where('pendaftarans.tglpendaftaran',request()->t)
            ->orderBy('pendaftarans.noantrian','DESC');
        $search = str_replace("/", "", request()->q);
        
        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('identitaskendaraans.nouji','LIKE','%'. $search . '%');
                });
        }
        return $data->paginate(10);
    }

    public function getAntrian()
    {
        $data = $this->model
            ->select('pendaftarans.noantrian','pendaftarans.uuid', 'pendaftarans.noantrian', 'kodepenerbitans.keterangan', 'identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan', 'pendaftarans.notelp')
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

    public function getOnline()
    {
        $data = $this->modelOnline
            ->select('pendaftarans.noantrian','pendaftaransonline.uuid', 'pendaftaransonline.status',  'kodepenerbitans.keterangan', 'pendaftaransonline.nouji', 'pendaftaransonline.noregistrasikendaraan', 'pendaftaransonline.notelp')
            ->join('kodepenerbitans', 'pendaftaransonline.kodepenerbitans_id', '=', 'kodepenerbitans.id')
            ->where('pendaftaransonline.tglpendaftaran', request()->t)
            ->orderBy('pendaftarans.noantrian', 'DESC');
        $search = str_replace("/", "", request()->q);

        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('pendaftaransonline.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('pendaftaransonline.nouji', 'LIKE', '%' . $search . '%');
            });
        }

        return $data->paginate(10);
    }

    public function getMonitoring()
    {
        $data = $this->model
            ->select('pendaftarans.noantrian','pendaftarans.uuid', 'kodepenerbitans.keterangan', 'identitaskendaraans.nouji', 'pendaftarans.posisi', 'identitaskendaraans.noregistrasikendaraan', 'pendaftarans.pos1', 'pendaftarans.pos2', 'pendaftarans.pos3', 'pendaftarans.posverif', 'pendaftarans.posverif2')
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
            ->where('pendaftarans.tglpendaftaran', date("Y-m-d"))
            ->orderBy('pendaftarans.posisi', 'DESC');
        // $search = str_replace("/", "", request()->q);

        // if ($search != '') {
        //     $data = $data->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
        //                  ->orWhere('identitaskendaraans.nouji','LIKE','%'. $search . '%');
        // }

        return $data->get();
    }

    public function getPendaftaranid($id, $tgl)
    {
        $data = $this->model;
        $data = $data->where('identitaskendaraan_id', $id);
        $data = $data->where('tglpendaftaran', $tgl);

        return $data->first();
    }

    public function getIdPendaftaran($id)
    {
        $data = $this->model->select('pendaftarans.id');
        $data = $data->where('uuid', $id);

        return $data->first();
    }

    public function getPendaftaranDetail()
    {
        $search = str_replace("/", "", request()->q);
        $data = $this->model
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->Leftjoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')
            ->where('identitaskendaraan_id', $search)->get();

        return $data;
    }

    public function getPendaftaran($id)
    {
        $check = $this->model
            ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
            ->where('pendaftarans.uuid', $id)->first();
        if ($check->kodepenerbitans_id == '5' || $check->kodepenerbitans_id == '9'|| $check->kodepenerbitans_id == '6' || $check->kodepenerbitans_id == '10' || $check->kodepenerbitans_id == '11' || $check->kodepenerbitans_id == '12') {
            $data = $this->model
                ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
                ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
                ->LeftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
                ->leftjoin('persuratan', 'persuratan.pendaftaran_id', '=', 'pendaftarans.id');
        } else {
            $data = $this->model
                ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
                ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
                ->LeftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', '=', 'identitaskendaraans.id');
        }
        $data = $data->where('pendaftarans.uuid', $id)->first();
        if ($data) {
            $tglpendaftaran = date_create($data->tglpendaftaran);
            $tglpendaftaran = date_format($tglpendaftaran, "Y-m-d");
            $masaberlakuuji = $this->model->select('kodepenerbitans_id', 'masaberlakuuji', 'tgluji')->join('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('pendaftarans.identitaskendaraan_id', $data->identitaskendaraan_id)->whereDate('tglpendaftaran', '<', $data->tglpendaftaran)->where('statuslulusuji', '1')->orderBy('tglpendaftaran', 'DESC')->first();
            if (!empty($masaberlakuuji)) {
                $tgluji = $masaberlakuuji->tgluji;
                $kodepenerbitans_id = $masaberlakuuji->kodepenerbitans_id;
                if (strlen($tgluji) == 7) {
                    $tgluji = '0' . $tgluji;
                    $tgluji = substr($tgluji, 4, 4) . '-' . substr($tgluji, 2, 2) . '-' . substr($tgluji, 0, 2);
                } elseif (strlen($tgluji) < 7) {
                    $tgluji = $tglpendaftaran;
                } else {
                    $tgluji = substr($tgluji, 4, 4) . '-' . substr($tgluji, 2, 2) . '-' . substr($tgluji, 0, 2);
                }

                $masaberlakuuji = $masaberlakuuji->masaberlakuuji;
                if (strlen($masaberlakuuji) == 7) {
                    $masaberlakuuji = '0' . $masaberlakuuji;
                } else {
                    $masaberlakuuji = substr($masaberlakuuji, 4, 4) . '-' . substr($masaberlakuuji, 2, 2) . '-' . substr($masaberlakuuji, 0, 2);
                }
                $data->jenispendaftaran = $kodepenerbitans_id;
            } else {
                $masaberlakuuji = $tglpendaftaran;
                $tgluji = $tglpendaftaran;
            }

            $data->tglbayar = $masaberlakuuji;
            $data->tgluji = $tgluji;
        }

        return $data;
    }

    public function setPengujian($identitaskendaraan_id, $id)
    {
        $data = Pendaftaran::where('pendaftarans.id', $id)->first();
        $tgl1 = date("Y-m-d", strtotime("-3 month", strtotime($data->tglpendaftaran)));
        $tgl2 = date("Y-m-d", strtotime("-1 day", strtotime($data->tglpendaftaran)));
        $data = $this->model->join('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')
            ->join('bagianbawahkendaraan', 'bagianbawahkendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->join('bagianbelakangkendaraan', 'bagianbelakangkendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->join('bagiandalamkendaraan', 'bagiandalamkendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->join('bagiandepankendaraan', 'bagiandepankendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->join('bagiankanankendaraan', 'bagiankanankendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->join('bagiankirikendaraan', 'bagiankirikendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->join('dimensikendaaraan', 'dimensikendaaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->join('identifikasikendaraan', 'identifikasikendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->where('identitaskendaraan_id', $identitaskendaraan_id)
            ->whereBetween('pendaftarans.tglpendaftaran', [$tgl1, $tgl2])
            ->orderBy('pendaftarans.id', 'DESC')->first();
        if ($data) {
            $catatan = Catatan::where('pendaftaran_id', $data->pendaftaran_id)->get();
            if ($catatan) {
                foreach ($catatan as $list) {
                    $inCatatan = Catatan::Create([
                        'pendaftaran_id'    => $id,
                        'nama'          => $list->nama,
                        'hasiluji'      => $list->hasiluji,
                        'alasan'        => $list->alasan,
                        'rekomendasi'   => $list->rekomendasi,
                        'status'        => $list->status,
                        'pos'           => $list->pos,
                    ]);
                }
            }
            $tgluji = date("dmY");
            $bagianbawahkendaraan = BagianBawahKendaraan::Create([
                'pendaftaran_id'    => $id,
                'sistemkemudi'      => $data->sistemkemudi,
                'sistemsuspensi'    => $data->sistemsuspensi,
                'sistemrem'         => $data->sistemrem,
                'sistemroda'        => $data->sistemroda,
                'rangkalandasan'    => $data->rangkalandasan,
                'sistempenerusdaya' => $data->sistempenerusdaya,
                'motorpenggerak'    => $data->motorpenggerak,
            ]);
            $bagianbelakangkendaraan = BagianBelakangKendaraan::Create([
                'pendaftaran_id'    => $id,
                'apctbelakang'      => $data->apctbelakang,
                'lampuposisibelakang'    => $data->lampuposisibelakang,
                'lampupenunjukarah'      => $data->lampupenunjukarah,
                'lampurem'        => $data->lampurem,
                'lampumundur'    => $data->lampumundur,
                'lamputnkb' => $data->lamputnkb,
                'kondisitempatpemasangantnkb'    => $data->kondisitempatpemasangantnkb,
                'lamputandabatas'    => $data->lamputandabatas,
                'kondisirodacadangan'    => $data->kondisirodacadangan,
                'spakbor'    => $data->spakbor,
                'sistempembuangan'    => $data->sistempembuangan,
            ]);
            $bagiandalamkendaraan = BagianDalamKendaraan::Create([
                'pendaftaran_id'    => $id,
                'ruangkemudi'       => $data->ruangkemudi,
                'tempatduduk'       => $data->tempatduduk,
                'dashboard'         => $data->dashboard,
                'speedometer'       => $data->speedometer,
                'instrumenpanel'    => $data->instrumenpanel,
                'alatcontrollampu'  => $data->alatcontrollampu,
                'tabirmatahari'     => $data->tabirmatahari,
                'pandangankedepan'  => $data->pandangankedepan,
                'rodakemudi'        => $data->rodakemudi,
                'batangkemudi'      => $data->batangkemudi,
                'sabukkeselamatan'  => $data->sabukkeselamatan,
                'perlengkapan'      => $data->perlengkapan,
                'remparkir'         => $data->remparkir,
                'pedalremkaki'      => $data->pedalremkaki,
                'remgasbuang'       => $data->remgasbuang,
                'sistemhampa'       => $data->sistemhampa,
            ]);
            $bagiandepankendaraan = BagianDepanKendaraan::Create([
                'pendaftaran_id'    => $id,
                'kacadepan'         => $data->kacadepan,
                'penyemprotair'     => $data->penyemprotair,
                'penghapuskaca'     => $data->penghapuskaca,
                'bodidepan'         => $data->bodidepan,
                'lamputandabatas'   => $data->lamputandabatas,
                'lampuutamadekat'   => $data->lampuutamadekat,
                'lampuutamajauh'    => $data->lampuutamajauh,
                'lampupenunjukarah' => $data->lampupenunjukarah,
                'lampuposisidepan'  => $data->lampuposisidepan,
                'lampukabut'        => $data->lampukabut,
                'bumperdepan'       => $data->bumperdepan,
                'kondisitempatnkbdepan'        => $data->kondisitempatnkbdepan,
            ]);
            $bagiankanankendaraan = BagianKananKendaraan::Create([
                'pendaftaran_id'    => $id,
                'kacasampingkanan'  => $data->kacasampingkanan,
                'kacaspion'         => $data->kacaspion,
                'pintusampingkanan' => $data->pintusampingkanan,
                'bodikanan'         => $data->bodikanan,
                'apctkanan'         => $data->apctkanan,
                'kompresorudara'    => $data->kompresorudara,
                'bautdanmurroda'    => $data->bautdanmurroda,
                'kondisidanukuranban'    => $data->kondisidanukuranban,
                'bautdanmurroda'    => $data->bautdanmurroda,
                'perisaikolong'     => $data->perisaikolong,
                'tutuptangki'       => $data->tutuptangki,
                'lamputandabatassamping'       => $data->lamputandabatassamping,
                'apar'              => $data->apar,
                'rodakelima'        => $data->rodakelima,
                'kakipenompangtempelan'        => $data->kakipenompangtempelan,
                'alatperangkaitempelan'        => $data->alatperangkaitempelan,
            ]);
            $bagiankirikendaraan = BagianKiriKendaraan::Create([
                'pendaftaran_id'    => $id,
                'kacasampingkiri'  => $data->kacasampingkiri,
                'kacaspionkiri'     => $data->kacaspionkiri,
                'pintusampingkiri'  => $data->pintusampingkiri,
                'bodikiri'          => $data->bodikiri,
                'apctkiri'          => $data->apctkiri,
                'kompresorudara'    => $data->kompresorudara,
                'bautdanmurroda'    => $data->bautdanmurroda,
                'kondisidanukuranban'    => $data->kondisidanukuranban,
                'bautdanmurroda'    => $data->bautdanmurroda,
                'perisaikolong'     => $data->perisaikolong,
                'tutuptangki'       => $data->tutuptangki,
                'lamputandabatassamping'       => $data->lamputandabatassamping,
                'rodakelima'        => $data->rodakelima,
                'kakipenompangtempelan'        => $data->kakipenompangtempelan,
                'alatperangkaitempelan'        => $data->alatperangkaitempelan,
            ]);
            $dimensikendaaraan = DimensiKendaraan::Create([
                'pendaftaran_id'    => $id,
                'julurdepan'        => $data->julurdepan,
                'p'                 => $data->p,
                'tinggikendaraan'   => $data->tinggikendaraan,
                'a'                 => $data->a,
                'jaraksumbu1_2'     => $data->jaraksumbu1_2,
                'jaraksumbu2_3'     => $data->jaraksumbu2_3,
                'jaraksumbu3_4'     => $data->jaraksumbu3_4,
                'panjangbakatautangki' => $data->panjangbakatautangki,
                'q'                 => $data->q,
                'r'                 => $data->r,
                'b'                 => $data->b,
                'julurbelakang'     => $data->julurbelakang,
                'panjangkendaraan'  => $data->panjangkendaraan,
                'lebarkendaraan'    => $data->lebarkendaraan,
                'lebarbakatautangki'  => $data->lebarbakatautangki,
                'tinggibakatautangki' => $data->tinggibakatautangki,
                'jarakantaradindingterluar'  => $data->jarakantaradindingterluar,
                'groundclearance'  => $data->groundclearance,
                'lebarpintu'       => $data->lebarpintu,
                'tinggipintu'      => $data->tinggipintu,
                'tinggianaktangga' => $data->tinggianaktangga,
                'lebaranaktangga'  => $data->lebaranaktangga,
                'lebarlorong'      => $data->lebarlorong,
                'tinggitempatberdiri'      => $data->tinggitempatberdiri,
                'lebartempatduduk' => $data->lebartempatduduk,
                'jaraktempatduduk' => $data->jaraktempatduduk,
                'lebarpintudarurat' => $data->lebarpintudarurat,
                'panjangakseskeluar'    => $data->panjangakseskeluar,
                'lebarakseskeluar'      => $data->lebarakseskeluar,
                'jarakantarbumper'      => $data->jarakantarbumper,
                'volume'           => $data->volume,
                'jenismuatan'      => $data->jenismuatan,
                'beratjenismuatan' => $data->beratjenismuatan,
                'nilai_julurdepan'        => $data->nilai_julurdepan,
                'nilai_p'                 => $data->nilai_p,
                'nilai_tinggikendaraan'   => $data->nilai_tinggikendaraan,
                'nilai_a'                 => $data->nilai_a,
                'nilai_jaraksumbu1_2'     => $data->nilai_jaraksumbu1_2,
                'nilai_jaraksumbu2_3'     => $data->nilai_jaraksumbu2_3,
                'nilai_jaraksumbu3_4'     => $data->nilai_jaraksumbu3_4,
                'nilai_panjangbakatautangki' => $data->nilai_panjangbakatautangki,
                'nilai_q'                 => $data->nilai_q,
                'nilai_r'                 => $data->nilai_r,
                'nilai_b'                 => $data->nilai_b,
                'nilai_julurbelakang'     => $data->nilai_julurbelakang,
                'nilai_panjangkendaraan'  => $data->nilai_panjangkendaraan,
                'nilai_lebarkendaraan'    => $data->nilai_lebarkendaraan,
                'nilai_lebarbakatautangki'  => $data->nilai_lebarbakatautangki,
                'nilai_tinggibakatautangki' => $data->nilai_tinggibakatautangki,
                'nilai_jarakantaradindingterluar'  => $data->nilai_jarakantaradindingterluar,
                'nilai_groundclearance'  => $data->nilai_groundclearance,
                'nilai_lebarpintu'       => $data->nilai_lebarpintu,
                'nilai_tinggipintu'      => $data->nilai_tinggipintu,
                'nilai_tinggianaktangga' => $data->nilai_tinggianaktangga,
                'nilai_lebaranaktangga'  => $data->nilai_lebaranaktangga,
                'nilai_lebarlorong'      => $data->nilai_lebarlorong,
                'nilai_tinggitempatberdiri'      => $data->nilai_tinggitempatberdiri,
                'nilai_lebartempatduduk' => $data->nilai_lebartempatduduk,
                'nilai_jaraktempatduduk' => $data->nilai_jaraktempatduduk,
                'nilai_lebarpintudarurat' => $data->nilai_lebarpintudarurat,
                'nilai_panjangakseskeluar'    => $data->nilai_panjangakseskeluar,
                'nilai_lebarakseskeluar'      => $data->nilai_lebarakseskeluar,
                'nilai_jarakantarbumper'      => $data->nilai_jarakantarbumper,
                'nilai_volume'           => $data->nilai_volume,
                'nilai_beratjenismuatan' => $data->nilai_beratjenismuatan,
            ]);
            $identifikasikendaraan = IdentifikasiKendaraan::Create([
                'pendaftaran_id'    => $id,
                'notnkb'            => $data->notnkb,
                'nouji'             => $data->nouji,
                'norangkalandasan'  => $data->norangkalandasan,
                'nomotorpenggerak'  => $data->nomotorpenggerak,
            ]);
            $laikjalan = LaikJalan::Create([
                'pendaftaran_id'    => $id,
                'alatuji_emisiasapbahanbakarsolar' => $data->alatuji_emisiasapbahanbakarsolar,
                'alatuji_emisicobahanbakarbensin' => $data->alatuji_emisicobahanbakarbensin,
                'alatuji_emisihcbahanbakarbensin' => $data->alatuji_emisihcbahanbakarbensin,
                'alatuji_remutamatotalgayapengereman' => $data->alatuji_remutamatotalgayapengereman,
                'gayaremkiri1'             => $data->gayaremkiri1,
                'gayaremkiri2'             => $data->gayaremkiri2,
                'gayaremkiri3'             => $data->gayaremkiri3,
                'gayaremkiri4'             => $data->gayaremkiri4,
                'gayaremkanan1'            => $data->gayaremkanan1,
                'gayaremkanan2'            => $data->gayaremkanan2,
                'gayaremkanan3'            => $data->gayaremkanan3,
                'gayaremkanan4'            => $data->gayaremkanan4,
                'alatuji_remutamaselisihgayapengeremanrodakirikanan1'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan1,
                'alatuji_remutamaselisihgayapengeremanrodakirikanan2'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan2,
                'alatuji_remutamaselisihgayapengeremanrodakirikanan3'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan3,
                'alatuji_remutamaselisihgayapengeremanrodakirikanan4'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan4,
                'alatuji_remparkirtangan'  => $data->alatuji_remparkirtangan,
                'alatuji_remparkirkaki'    => $data->alatuji_remparkirkaki,
                'alatuji_kincuprodadepan'  => $data->alatuji_kincuprodadepan,
                'alatuji_tingkatkebisingan' => $data->alatuji_tingkatkebisingan,
                'alatuji_lampuutamakekuatanpancarlampukanan'  => $data->alatuji_lampuutamakekuatanpancarlampukanan,
                'alatuji_lampuutamakekuatanpancarlampukiri'  => $data->alatuji_lampuutamakekuatanpancarlampukiri,
                'alatuji_lampuutamapenyimpanganlampukanan' => $data->alatuji_lampuutamapenyimpanganlampukanan,
                'alatuji_lampuutamapenyimpanganlampukiri'  => $data->alatuji_lampuutamapenyimpanganlampukiri,
                'alatuji_penunjukkecepatan'  => $data->alatuji_penunjukkecepatan,
                'alatuji_kedalamanalurban'   => $data->alatuji_kedalamanalurban,
                'kacadepan'                  => $data->kacadepan,
                'kacasamping'                => $data->kacasamping,
                'status_emisibensin'         => $data->status_emisibensin,
                'status_emisisolar'          => $data->status_emisisolar,
                'status_kebisingan'          => $data->kacasamping,
                'status_kegelapan'           => $data->status_kegelapan,
                'status_alurban'             => $data->status_alurban,
                'status_kincuprodadepan'     => $data->status_kincuprodadepan,
                'status_remkanan'            => $data->status_remkanan,
                'status_remkiri'             => $data->status_remkiri,
                'status_remparkir'           => $data->status_remparkir,
                'status_remparkir'           => $data->status_remparkir,
                'status_intensitaslampu'     => $data->status_intensitaslampu,
                'status_penyimpanganlampu'   => $data->status_penyimpanganlampu,
                'status_speedometer'         => $data->status_speedometer,
                'tgluji'                     => $tgluji,
                'statuslulusuji'             => $data->statuslulusuji,
                'idpenguji'                  => $data->idpenguji,
            ]);
        } else {
            return false;
        }
    }

    public function createPendaftaran($request)
    {

        $data = $this->model->create($request);
        if ($data) {
            // $kuota = Kuota::where('tanggal', $data->tglpendaftaran)->first();
            // if ($kuota) {
            //     $tersedia = (int)$kuota->tersedia - (int)1;
            //     $kuota->tersedia = $tersedia;
            //     $kuota->save();
            // }
            
            try {
                $this->setTaman($data);
            }catch(\Exception $e) {

            }
            
            try {
                $this->setStatus($data);
            }catch(\Exception $e) {

            }
        }
        return $data;
    }

    public function approvePendaftaranOnline($request,$id)
    {
        $data = $this->model->create([
            'identitaskendaraan_id' => $id,
            'kodepenerbitans_id'    => $request->kodepenerbitans_id,
            'tglpendaftaran'    => $request->tglpendaftaran,
            'namapemohon'    => $request->namapemohon,
            'notelp'    => $request->notelp,
            'status'    => '1',
            'verif'    => '1',
            'jenispendaftaran'    => 'on',
            'foto'    => '0',
            'posisi'    => '1',
        ]);
        return $data;
    }

    public function setStatus($data)
    {
        $stts = '';
        $tglout = '';
        
        $updateIden = Identitaskendaraan::where('id',$data->identitaskendaraan_id)->first();
        if($updateIden){
            if($data->kodepenerbitans_id == '10'){
                $stts = '5';
                $tglout = $data->tglpendaftaran;
                $updateIden->statuskendaraan = $stts;
                $updateIden->tglout = $tglout;
                $updateIden->save();
            }
            if($data->kodepenerbitans_id == '9'){
                $stts = '4';
                $updateIden->statuskendaraan = $stts;
                $updateIden->save();
            }
            if($data->kodepenerbitans_id == '1' || $data->kodepenerbitans_id == '6'){
                $stts = '1';
                $updateIden->statuskendaraan = $stts;
                $updateIden->tglterdaftar = $data->tglpendaftaran;
                $updateIden->save();
            }
            if($data->kodepenerbitans_id == '5'){
                $stts = '2';
                $updateIden->statuskendaraan = $stts;
                // $updateIden->tglterdaftar = $data->tglpendaftaran;
                $updateIden->save();
            }
        }
    }

    public function setTaman($data)
    {
        $lastTaman = TamanKendaraan::orderBy('tanggal','DESC')->first();
        $checkTaman = TamanKendaraan::where('tanggal',$data->tglpendaftaran)->first();
        if($data->kodepenerbitans_id == '1' || $data->kodepenerbitans_id == '6'){
            if($checkTaman){
                $upTaman = $checkTaman;
                $upTaman->total = (int)$checkTaman->total + 1;
                $upTaman->masuk = (int)$checkTaman->masuk + 1;
                $upTaman->save();
            }else{
                $inTaman = TamanKendaraan::Create([
                    'total' => (int)$lastTaman->total + 1,
                    'masuk' => 1,
                    'keluar' => 0,
                    'tanggal' => $data->tglpendaftaran,
                ]);
            }
        }else if($data->kodepenerbitans_id == '10'){
            if($checkTaman){
                $upTaman = $checkTaman;
                $upTaman->total = (int)$checkTaman->total - 1;
                $upTaman->keluar = (int)$checkTaman->keluar + 1;
                $upTaman->save();
            }else{
                $inTaman = TamanKendaraan::Create([
                    'total' => (int)$lastTaman->total - 1,
                    'masuk' => 0,
                    'keluar' => 1,
                    'tanggal' => $data->tglpendaftaran,
                ]);
            }
        }

        return true;
    }

    public function updatePendaftaran($id, $request)
    {
        $update = $this->model->where('uuid',$id)->first();
        $update->update($request->all());

        if ($update->save()) {
            // if ($update->jenispendaftaran == 'on' && is_null($update->posisi) && $update->kodepenerbitans_id != '7') {
            //     $update->posisi = '1';
            //     $update->save();
            // }
            
            
            try {
                $this->setStatus($update);
            }catch(\Exception $e) {

            }

            return $update;
        }
        return $update;
    }

    public function ulangiFoto($id)
    {
        $update = $this->model->where('uuid',$id)->first();
        $update->foto = '0';
        $update->save();
    }

    public function approveOnline($id)
    {
        $dataPend = $this->modelOnline::where('uuid',$id)->first();
        if($dataPend){
            $check = Identitaskendaraan::where('nouji',$dataPend->nouji)->first();
            if($check){
                $inPend = $this->model::Create([
                    'identitaskendaraan_id' => $check->id,
                    'uuid' => $dataPend->uuid,
                    'kodepenerbitans_id' => $dataPend->kodepenerbitans_id,
                    'tglpendaftaran' => $dataPend->tglpendaftaran,
                    'tglbayar' => $dataPend->tglbayar,
                    'namapemohon'   => $dataPend->namapemohon,
                    'alamatpemohon'   => $dataPend->alamatpemohon,
                    'notelp'   => $dataPend->notelp,
                    'status'   => '1',
                    'verif'   => '1',
                    'posisi'   => '1',
                    'foto'   => '1',
                    'jenispendaftaran'   => 'on',
                ]);
                if($inPend){
                    $dataPend->status = '1';
                    $dataPend->save();
                    return $inPend->id;
                }
            }else{
                if($dataPend->kodepenerbitans_id == '1'){
                    $statuskendaraan = '1';
                    $tglterdaftar = $dataPend->tglpendaftaran;
                }elseif($dataPend->kodepenerbitans_id == '2'){
                    $statuskendaraan = '1';
                    $tglterdaftar = $dataPend->tglpendaftaran;
                }elseif($dataPend->kodepenerbitans_id == '5'){
                    $statuskendaraan = '2';
                    $tglterdaftar = $dataPend->tglpendaftaran;
                }elseif($dataPend->kodepenerbitans_id == '6'){
                    $statuskendaraan = '1';
                    $tglterdaftar = $dataPend->tglpendaftaran;
                }
                $inIden = Identitaskendaraan::Create([
                    'nouji' => $dataPend->nouji,
                    'nama'  => $dataPend->nama,
                    'alamat'    => $dataPend->alamat,
                    'kota'  => $dataPend->kota,
                    'kecamatan' => $dataPend->kecamatan,
                    'kelurahan' => $dataPend->kelurahan,
                    'noregistrasikendaraan' => $dataPend->noregistrasikendaraan,
                    'merek' => $dataPend->merek,
                    'tipe' => $dataPend->tipe,
                    'jenis' => $dataPend->jenis,
                    'kodewilayahasal' => $dataPend->kodewilayahasal,
                    'statuskendaraan' => $statuskendaraan,
                    'tglterdaftar'    => $tglterdaftar,
                ]);
                if($inIden){
                    $inDatakend = Datakendaraan::Create([
                        'identitaskendaraan_id' => $inIden->id,
                        'jbb'                   => $dataPend->jbb,
                    ]);
                    $inPend = $this->model::Create([
                        'identitaskendaraan_id' => $inIden->id,
                        'uuid' => $dataPend->uuid,
                        'kodepenerbitans_id' => $dataPend->kodepenerbitans_id,
                        'tglpendaftaran' => $dataPend->tglpendaftaran,
                        'tglbayar' => $dataPend->tglbayar,
                        'namapemohon'   => $dataPend->namapemohon,
                        'alamatpemohon'   => $dataPend->alamatpemohon,
                        'notelp'   => $dataPend->notelp,
                        'status'   => '1',
                        'verif'   => '1',
                        'posisi'   => '1',
                        'foto'   => '1',
                        'jenispendaftaran'   => 'on',
                    ]);
                    
                    if($inPend){
                        $dataPend->status = '1';
                        $dataPend->save();
                        return $inPend->id;
                    }else{
                        return $id;
                    }
                }
                return "error";
            }
        }
    }

    public function createPenyerahan($request)
    {
        return $this->modelPenyerahan->create($request);
    }

    public function updatePenyerahan($id, $request)
    {
        $request['pendaftaran_id'] = $id;
        $update = $this->modelPenyerahan->where('pendaftaran_id',$id)->first();
        if($update){
            $update->update($request);

            if ($update->save()) {
                $data = $this->model->where('id',$id)->first();
                $data->posisi = 11;
                $data->save();
                return true;
            }
            return false;
        }
        return false;
    }

    public function getPenyerahan($id)
    {
        $data = $this->model
                    ->select('pendaftarans.uuid','namapenerima','noidentitaspenerima','notelppenerima','waktu','nouji','noregistrasikendaraan','merek','jenis','nomesin','norangka','thpembuatan','jbb')
                    ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
                    ->leftjoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
                    ->leftjoin('penyerahan','penyerahan.pendaftaran_id','=','pendaftarans.id')
                    ->where('pendaftarans.uuid', $id);
        return $data->first();
    }

    public function checkPenyerahan($id){
        $data = $this->model->select('pendaftarans.id','pendaftarans.uuid')->where('pendaftarans.uuid',$id)
                ->join('penyerahan','penyerahan.pendaftaran_id','=','pendaftarans.id')->first();
        if($data){
            return $data;
        }
        return false;
    }

    public function deletePendaftaran($id)
    {
        $delete = $this->model->where('uuid',$id)->first();
        if($delete){
            $dataId = $delete->id; 
            $delete->delete();
        }
        if ($delete) {
            Catatan::where('pendaftaran_id', $dataId)->delete();
            LaikJalan::where('pendaftaran_id', $dataId)->delete();
            BagianBawahKendaraan::where('pendaftaran_id', $dataId)->delete();
            BagianDepanKendaraan::where('pendaftaran_id', $dataId)->delete();
            BagianDalamKendaraan::where('pendaftaran_id', $dataId)->delete();
            BagianKananKendaraan::where('pendaftaran_id', $dataId)->delete();
            BagianKiriKendaraan::where('pendaftaran_id', $dataId)->delete();
            DimensiKendaraan::where('pendaftaran_id', $dataId)->delete();
            IdentifikasiKendaraan::where('pendaftaran_id', $dataId)->delete();
            Persuratan::where('pendaftaran_id', $dataId)->delete();
        }
        return $delete;
    }
}

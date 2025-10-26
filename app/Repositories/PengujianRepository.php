<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pendaftaran;
use App\Models\Datakendaraan;
use App\Models\BagianBawahKendaraan;
use App\Models\BagianBelakangKendaraan;
use App\Models\BagianDalamKendaraan;
use App\Models\BagianDepanKendaraan;
use App\Models\BagianKananKendaraan;
use App\Models\BagianKiriKendaraan;
use App\Models\DimensiKendaraan;
use App\Models\IdentifikasiKendaraan;
use App\Models\LaikJalan;
use App\Models\Catatan;
use DB;
use DateTime;
use DateInterval;

class PengujianRepository
{
    use RepositoryTrait;

    protected $model, $modelDatakendaraan, $modelDimensiKendaraan, $modelIdentifikasiKendaraan, $modelBagianDepanKendaraan, $modelBagianBawahKendaraan, $modelBagianKananKendaraan, $modelBagianBelakangKendaraan, $modelBagianKiriKendaraan, $modelBagianDalamKendaraan, $modelLaikJalan, $modelCatatan;

    public function __construct(Pendaftaran $model, Datakendaraan $modelDatakendaraan, IdentifikasiKendaraan $modelIdentifikasiKendaraan, DimensiKendaraan $modelDimensiKendaraan, BagianBawahKendaraan $modelBagianBawahKendaraan, BagianDepanKendaraan $modelBagianDepanKendaraan, BagianKananKendaraan $modelBagianKananKendaraan, BagianBelakangKendaraan $modelBagianBelakangKendaraan, BagianKiriKendaraan $modelBagianKiriKendaraan, BagianDalamKendaraan $modelBagianDalamKendaraan, LaikJalan $modelLaikJalan, Catatan $modelCatatan)
    {
        $this->model = $model;
        $this->modelLaikJalan = $modelLaikJalan;
        $this->modelDatakendaraan = $modelDatakendaraan;
        $this->modelDimensiKendaraan = $modelDimensiKendaraan;
        $this->modelIdentifikasiKendaraan = $modelIdentifikasiKendaraan;
        $this->modelBagianDepanKendaraan = $modelBagianDepanKendaraan;
        $this->modelBagianKananKendaraan = $modelBagianKananKendaraan;
        $this->modelBagianBelakangKendaraan = $modelBagianBelakangKendaraan;
        $this->modelBagianKiriKendaraan = $modelBagianKiriKendaraan;
        $this->modelBagianDalamKendaraan = $modelBagianDalamKendaraan;
        $this->modelLaikJalan = $modelLaikJalan;
        $this->modelBagianBawahKendaraan = $modelBagianBawahKendaraan;
        $this->modelCatatan = $modelCatatan;
    }

    public function createPengujian($request)
    {
        return $this->model->create($request);
    }

    public function checkPengujian($id)
    {
        $identitaskendaraan_id = Pendaftaran::select('identitaskendaraan_id', 'tglpendaftaran')->whereNotIn('kodepenerbitans_id', ['3', '4'])->where('identitaskendaraan_id', $id)->orderBy('pendaftarans.id', 'DESC')->first();
        // $dataPend = Pendaftaran::where('pendaftarans.id',$id)->first();
        $tgl1 = date("Y-m-d", strtotime("-3 month", strtotime($identitaskendaraan_id->tglpendaftaran)));
        // $tgl2 = date("Y-m-d", strtotime("-1 day", strtotime($dataPend->tglpendaftaran)));
        $threeMonthsAgo = (new DateTime())->sub(new DateInterval('P3M'));
        $sixMonthsAgo = (new DateTime())->sub(new DateInterval('P6M'));

        $tgl2 = $identitaskendaraan_id->tglpendaftaran;
        if ($tgl2 < $sixMonthsAgo) {
            return 'Data uji terakhir tidak ditemukan atau sudah lebih dari 6 bulan, silahkan Uji Berkala!';
        } elseif ($tgl2 < $threeMonthsAgo) {
            return 'Data uji terakhir sudah lebih dari 3 bulan, silahkan Uji Berkala!';
        }

        if ($identitaskendaraan_id) {
            $identitaskendaraan_id = $identitaskendaraan_id->identitaskendaraan_id;
        }
        $data = $this->model->join('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('bagianbawahkendaraan', 'bagianbawahkendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('bagianbelakangkendaraan', 'bagianbelakangkendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('bagiandalamkendaraan', 'bagiandalamkendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('bagiandepankendaraan', 'bagiandepankendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('bagiankanankendaraan', 'bagiankanankendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('bagiankirikendaraan', 'bagiankirikendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('dimensikendaaraan', 'dimensikendaaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('identifikasikendaraan', 'identifikasikendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->where('identitaskendaraan_id', $identitaskendaraan_id)
            ->whereBetween('pendaftarans.tglpendaftaran', [$tgl1, $tgl2])
            ->orderBy('pendaftarans.tglpendaftaran', 'DESC')->first();
        if ($data) {
            return true;
        }
        $tgl1 = date("Y-m-d", strtotime("-6 month", strtotime($identitaskendaraan_id->tglpendaftaran)));
        $data = $this->model->join('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('bagianbawahkendaraan', 'bagianbawahkendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('bagianbelakangkendaraan', 'bagianbelakangkendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('bagiandalamkendaraan', 'bagiandalamkendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('bagiandepankendaraan', 'bagiandepankendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('bagiankanankendaraan', 'bagiankanankendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('bagiankirikendaraan', 'bagiankirikendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('dimensikendaaraan', 'dimensikendaaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->leftjoin('identifikasikendaraan', 'identifikasikendaraan.pendaftaran_id', '=', 'pendaftarans.id')
            ->where('identitaskendaraan_id', $identitaskendaraan_id)
            ->whereBetween('pendaftarans.tglpendaftaran', [$tgl1, $tgl2])
            ->orderBy('pendaftarans.id', 'DESC')->first();
        if ($data) {
            return 'Data uji terakhir sudah lebih dari 3 bulan, silahkan Uji Berkala!';
        }
        return 'Data uji terakhir tidak ditemukan atau sudah lebih dari 6 bulan, silahkan Uji Berkala!';
    }

    public function setCopyPengujian($id)
    {
        $identitaskendaraan_id = Pendaftaran::select('identitaskendaraan_id')->where('id', $id)->first();
        $dataPend = Pendaftaran::where('pendaftarans.id', $id)->first();
        $tgl1 = date("Y-m-d", strtotime("-3 month", strtotime($dataPend->tglpendaftaran)));
        $tgl2 = $dataPend->tglpendaftaran;
        if ($identitaskendaraan_id) {
            $identitaskendaraan_id = $identitaskendaraan_id->identitaskendaraan_id;
        }
        $data = $this->model->join('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')
            ->where('identitaskendaraan_id', $identitaskendaraan_id)
            ->whereBetween('pendaftarans.tglpendaftaran', [$tgl1, $tgl2])
            ->orderBy('pendaftarans.tglpendaftaran', 'DESC')->first();
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
            $bagianbawahkendaraan = BagianBawahKendaraan::where('pendaftaran_id', $data->pendaftaran_id)->first();
            $bagianbawahkendaraan = BagianBawahKendaraan::Create([
                'pendaftaran_id'    => $id,
                'sistemkemudi'      => $bagianbawahkendaraan->sistemkemudi,
                'sistemsuspensi'    => $bagianbawahkendaraan->sistemsuspensi,
                'sistemrem'         => $bagianbawahkendaraan->sistemrem,
                'sistemroda'        => $bagianbawahkendaraan->sistemroda,
                'rangkalandasan'    => $bagianbawahkendaraan->rangkalandasan,
                'sistempenerusdaya' => $bagianbawahkendaraan->sistempenerusdaya,
                'motorpenggerak'    => $bagianbawahkendaraan->motorpenggerak,
            ]);
            $bagianbelakangkendaraan = BagianBelakangKendaraan::where('pendaftaran_id', $data->pendaftaran_id)->first();
            $bagianbelakangkendaraan = BagianBelakangKendaraan::Create([
                'pendaftaran_id'    => $id,
                'apctbelakang'      => $bagianbelakangkendaraan->apctbelakang,
                'lampuposisibelakang'    => $bagianbelakangkendaraan->lampuposisibelakang,
                'lampupenunjukarah'      => $bagianbelakangkendaraan->lampupenunjukarah,
                'lampurem'        => $bagianbelakangkendaraan->lampurem,
                'lampumundur'    => $bagianbelakangkendaraan->lampumundur,
                'lamputnkb' => $bagianbelakangkendaraan->lamputnkb,
                'kondisitempatpemasangantnkb'    => $bagianbelakangkendaraan->kondisitempatpemasangantnkb,
                'lamputandabatas'    => $bagianbelakangkendaraan->lamputandabatas,
                'kondisirodacadangan'    => $bagianbelakangkendaraan->kondisirodacadangan,
                'spakbor'    => $bagianbelakangkendaraan->spakbor,
                'sistempembuangan'    => $bagianbelakangkendaraan->sistempembuangan,
            ]);
            $bagiandalamkendaraan = BagianDalamKendaraan::where('pendaftaran_id', $data->pendaftaran_id)->first();
            $bagiandalamkendaraan = BagianDalamKendaraan::Create([
                'pendaftaran_id'    => $id,
                'ruangkemudi'       => $bagiandalamkendaraan->ruangkemudi,
                'tempatduduk'       => $bagiandalamkendaraan->tempatduduk,
                'dashboard'         => $bagiandalamkendaraan->dashboard,
                'speedometer'       => $bagiandalamkendaraan->speedometer,
                'instrumenpanel'    => $bagiandalamkendaraan->instrumenpanel,
                'alatcontrollampu'  => $bagiandalamkendaraan->alatcontrollampu,
                'tabirmatahari'     => $bagiandalamkendaraan->tabirmatahari,
                'pandangankedepan'  => $bagiandalamkendaraan->pandangankedepan,
                'rodakemudi'        => $bagiandalamkendaraan->rodakemudi,
                'batangkemudi'      => $bagiandalamkendaraan->batangkemudi,
                'sabukkeselamatan'  => $bagiandalamkendaraan->sabukkeselamatan,
                'perlengkapan'      => $bagiandalamkendaraan->perlengkapan,
                'remparkir'         => $bagiandalamkendaraan->remparkir,
                'pedalremkaki'      => $bagiandalamkendaraan->pedalremkaki,
                'remgasbuang'       => $bagiandalamkendaraan->remgasbuang,
                'sistemhampa'       => $bagiandalamkendaraan->sistemhampa,
            ]);
            $bagiandepankendaraan = BagianDepanKendaraan::where('pendaftaran_id', $data->pendaftaran_id)->first();
            $bagiandepankendaraan = BagianDepanKendaraan::Create([
                'pendaftaran_id'    => $id,
                'kacadepan'         => $bagiandepankendaraan->kacadepan,
                'penyemprotair'     => $bagiandepankendaraan->penyemprotair,
                'penghapuskaca'     => $bagiandepankendaraan->penghapuskaca,
                'bodidepan'         => $bagiandepankendaraan->bodidepan,
                'lamputandabatas'   => $bagiandepankendaraan->lamputandabatas,
                'lampuutamadekat'   => $bagiandepankendaraan->lampuutamadekat,
                'lampuutamajauh'    => $bagiandepankendaraan->lampuutamajauh,
                'lampupenunjukarah' => $bagiandepankendaraan->lampupenunjukarah,
                'lampuposisidepan'  => $bagiandepankendaraan->lampuposisidepan,
                'lampukabut'        => $bagiandepankendaraan->lampukabut,
                'bumperdepan'       => $bagiandepankendaraan->bumperdepan,
                'kondisitempatnkbdepan'        => $bagiandepankendaraan->kondisitempatnkbdepan,
            ]);
            $bagiankanankendaraan = BagianKananKendaraan::where('pendaftaran_id', $data->pendaftaran_id)->first();
            $bagiankanankendaraan = BagianKananKendaraan::Create([
                'pendaftaran_id'    => $id,
                'kacasampingkanan'  => $bagiankanankendaraan->kacasampingkanan,
                'kacaspion'         => $bagiankanankendaraan->kacaspion,
                'pintusampingkanan' => $bagiankanankendaraan->pintusampingkanan,
                'bodikanan'         => $bagiankanankendaraan->bodikanan,
                'apctkanan'         => $bagiankanankendaraan->apctkanan,
                'kompresorudara'    => $bagiankanankendaraan->kompresorudara,
                'bautdanmurroda'    => $bagiankanankendaraan->bautdanmurroda,
                'kondisidanukuranban'    => $bagiankanankendaraan->kondisidanukuranban,
                'bautdanmurroda'    => $bagiankanankendaraan->bautdanmurroda,
                'perisaikolong'     => $bagiankanankendaraan->perisaikolong,
                'tutuptangki'       => $bagiankanankendaraan->tutuptangki,
                'lamputandabatassamping'       => $bagiankanankendaraan->lamputandabatassamping,
                'apar'              => $bagiankanankendaraan->apar,
                'rodakelima'        => $bagiankanankendaraan->rodakelima,
                'kakipenompangtempelan'        => $bagiankanankendaraan->kakipenompangtempelan,
                'alatperangkaitempelan'        => $bagiankanankendaraan->alatperangkaitempelan,
            ]);
            $bagiankirikendaraan = BagianKiriKendaraan::where('pendaftaran_id', $data->pendaftaran_id)->first();
            $bagiankirikendaraan = BagianKiriKendaraan::Create([
                'pendaftaran_id'    => $id,
                'kacasampingkiri'  => $bagiankirikendaraan->kacasampingkiri,
                'kacaspionkiri'     => $bagiankirikendaraan->kacaspionkiri,
                'pintusampingkiri'  => $bagiankirikendaraan->pintusampingkiri,
                'bodikiri'          => $bagiankirikendaraan->bodikiri,
                'apctkiri'          => $bagiankirikendaraan->apctkiri,
                'kompresorudara'    => $bagiankirikendaraan->kompresorudara,
                'bautdanmurroda'    => $bagiankirikendaraan->bautdanmurroda,
                'kondisidanukuranban'    => $bagiankirikendaraan->kondisidanukuranban,
                'bautdanmurroda'    => $bagiankirikendaraan->bautdanmurroda,
                'perisaikolong'     => $bagiankirikendaraan->perisaikolong,
                'tutuptangki'       => $bagiankirikendaraan->tutuptangki,
                'lamputandabatassamping'       => $bagiankirikendaraan->lamputandabatassamping,
                'rodakelima'        => $bagiankirikendaraan->rodakelima,
                'kakipenompangtempelan'        => $bagiankirikendaraan->kakipenompangtempelan,
                'alatperangkaitempelan'        => $bagiankirikendaraan->alatperangkaitempelan,
            ]);
            $dimensikendaaraan = DimensiKendaraan::where('pendaftaran_id', $data->pendaftaran_id)->first();
            $dimensikendaaraan = DimensiKendaraan::Create([
                'pendaftaran_id'    => $id,
                'julurdepan'        => $dimensikendaaraan->julurdepan,
                'p'                 => $dimensikendaaraan->p,
                'tinggikendaraan'   => $dimensikendaaraan->tinggikendaraan,
                'a'                 => $dimensikendaaraan->a,
                'jaraksumbu1_2'     => $dimensikendaaraan->jaraksumbu1_2,
                'jaraksumbu2_3'     => $dimensikendaaraan->jaraksumbu2_3,
                'jaraksumbu3_4'     => $dimensikendaaraan->jaraksumbu3_4,
                'panjangbakatautangki' => $dimensikendaaraan->panjangbakatautangki,
                'q'                 => $dimensikendaaraan->q,
                'r'                 => $dimensikendaaraan->r,
                'b'                 => $dimensikendaaraan->b,
                'julurbelakang'     => $dimensikendaaraan->julurbelakang,
                'panjangkendaraan'  => $dimensikendaaraan->panjangkendaraan,
                'lebarkendaraan'    => $dimensikendaaraan->lebarkendaraan,
                'lebarbakatautangki'  => $dimensikendaaraan->lebarbakatautangki,
                'tinggibakatautangki' => $dimensikendaaraan->tinggibakatautangki,
                'jarakantaradindingterluar'  => $dimensikendaaraan->jarakantaradindingterluar,
                'groundclearance'  => $dimensikendaaraan->groundclearance,
                'lebarpintu'       => $dimensikendaaraan->lebarpintu,
                'tinggipintu'      => $dimensikendaaraan->tinggipintu,
                'tinggianaktangga' => $dimensikendaaraan->tinggianaktangga,
                'lebaranaktangga'  => $dimensikendaaraan->lebaranaktangga,
                'lebarlorong'      => $dimensikendaaraan->lebarlorong,
                'tinggitempatberdiri'      => $dimensikendaaraan->tinggitempatberdiri,
                'lebartempatduduk' => $dimensikendaaraan->lebartempatduduk,
                'jaraktempatduduk' => $dimensikendaaraan->jaraktempatduduk,
                'lebarpintudarurat' => $dimensikendaaraan->lebarpintudarurat,
                'panjangakseskeluar'    => $dimensikendaaraan->panjangakseskeluar,
                'lebarakseskeluar'      => $dimensikendaaraan->lebarakseskeluar,
                'jarakantarbumper'      => $dimensikendaaraan->jarakantarbumper,
                'volume'           => $dimensikendaaraan->volume,
                'jenismuatan'      => $dimensikendaaraan->jenismuatan,
                'beratjenismuatan' => $dimensikendaaraan->beratjenismuatan,
                'nilai_julurdepan'        => $dimensikendaaraan->nilai_julurdepan,
                'nilai_p'                 => $dimensikendaaraan->nilai_p,
                'nilai_tinggikendaraan'   => $dimensikendaaraan->nilai_tinggikendaraan,
                'nilai_a'                 => $dimensikendaaraan->nilai_a,
                'nilai_jaraksumbu1_2'     => $dimensikendaaraan->nilai_jaraksumbu1_2,
                'nilai_jaraksumbu2_3'     => $dimensikendaaraan->nilai_jaraksumbu2_3,
                'nilai_jaraksumbu3_4'     => $dimensikendaaraan->nilai_jaraksumbu3_4,
                'nilai_panjangbakatautangki' => $dimensikendaaraan->nilai_panjangbakatautangki,
                'nilai_q'                 => $dimensikendaaraan->nilai_q,
                'nilai_r'                 => $dimensikendaaraan->nilai_r,
                'nilai_b'                 => $dimensikendaaraan->nilai_b,
                'nilai_julurbelakang'     => $dimensikendaaraan->nilai_julurbelakang,
                'nilai_panjangkendaraan'  => $dimensikendaaraan->nilai_panjangkendaraan,
                'nilai_lebarkendaraan'    => $dimensikendaaraan->nilai_lebarkendaraan,
                'nilai_lebarbakatautangki'  => $dimensikendaaraan->nilai_lebarbakatautangki,
                'nilai_tinggibakatautangki' => $dimensikendaaraan->nilai_tinggibakatautangki,
                'nilai_jarakantaradindingterluar'  => $dimensikendaaraan->nilai_jarakantaradindingterluar,
                'nilai_groundclearance'  => $dimensikendaaraan->nilai_groundclearance,
                'nilai_lebarpintu'       => $dimensikendaaraan->nilai_lebarpintu,
                'nilai_tinggipintu'      => $dimensikendaaraan->nilai_tinggipintu,
                'nilai_tinggianaktangga' => $dimensikendaaraan->nilai_tinggianaktangga,
                'nilai_lebaranaktangga'  => $dimensikendaaraan->nilai_lebaranaktangga,
                'nilai_lebarlorong'      => $dimensikendaaraan->nilai_lebarlorong,
                'nilai_tinggitempatberdiri'      => $dimensikendaaraan->nilai_tinggitempatberdiri,
                'nilai_lebartempatduduk' => $dimensikendaaraan->nilai_lebartempatduduk,
                'nilai_jaraktempatduduk' => $dimensikendaaraan->nilai_jaraktempatduduk,
                'nilai_lebarpintudarurat' => $dimensikendaaraan->nilai_lebarpintudarurat,
                'nilai_panjangakseskeluar'    => $dimensikendaaraan->nilai_panjangakseskeluar,
                'nilai_lebarakseskeluar'      => $dimensikendaaraan->nilai_lebarakseskeluar,
                'nilai_jarakantarbumper'      => $dimensikendaaraan->nilai_jarakantarbumper,
                'nilai_volume'           => $dimensikendaaraan->nilai_volume,
                'nilai_beratjenismuatan' => $dimensikendaaraan->nilai_beratjenismuatan,
            ]);
            $identifikasikendaraan = IdentifikasiKendaraan::where('pendaftaran_id', $data->pendaftaran_id)->first();
            $identifikasikendaraan = IdentifikasiKendaraan::Create([
                'pendaftaran_id'    => $id,
                'notnkb'            => $identifikasikendaraan->notnkb,
                'nouji'             => $identifikasikendaraan->nouji,
                'norangkalandasan'  => $identifikasikendaraan->norangkalandasan,
                'nomotorpenggerak'  => $identifikasikendaraan->nomotorpenggerak,
            ]);
            $laikjalan = LaikJalan::Create([
                'pendaftaran_id'    => $id,
                'alatuji_emisiasapbahanbakarsolar' => $data->alatuji_emisiasapbahanbakarsolar,
                'alatuji_emisicobahanbakarbensin' => $data->alatuji_emisicobahanbakarbensin,
                'alatuji_emisihcbahanbakarbensin' => $data->alatuji_emisihcbahanbakarbensin,
                'berats1'                  => $data->berats1,
                'berats2'                  => $data->berats2,
                'berats3'                  => $data->berats3,
                'berats4'                  => $data->berats4,
                'berats5'                  => $data->berats5,
                'berats6'                  => $data->berats6,
                'berats7'                  => $data->berats7,
                'berats8'                  => $data->berats8,
                'berats9'                  => $data->berats9,
                'berats10'                  => $data->berats10,
                'berats11'                  => $data->berats11,
                'berats12'                  => $data->berats12,
                'alatuji_remutamatotalgayapengereman' => $data->alatuji_remutamatotalgayapengereman,
                'alatuji_remparkirtotalgayapengereman' => $data->alatuji_remparkirtotalgayapengereman,
                'gayaremkiri1'             => $data->gayaremkiri1,
                'gayaremkiri2'             => $data->gayaremkiri2,
                'gayaremkiri3'             => $data->gayaremkiri3,
                'gayaremkiri4'             => $data->gayaremkiri4,
                'gayaremkiri5'             => $data->gayaremkiri5,
                'gayaremkiri6'             => $data->gayaremkiri6,
                'gayaremkiri7'             => $data->gayaremkiri7,
                'gayaremkiri8'             => $data->gayaremkiri8,
                'gayaremkiri9'             => $data->gayaremkiri9,
                'gayaremkiri10'             => $data->gayaremkiri10,
                'gayaremkiri11'             => $data->gayaremkiri11,
                'gayaremkiri12'             => $data->gayaremkiri12,
                'gayaremkanan1'            => $data->gayaremkanan1,
                'gayaremkanan2'            => $data->gayaremkanan2,
                'gayaremkanan3'            => $data->gayaremkanan3,
                'gayaremkanan4'            => $data->gayaremkanan4,
                'gayaremkanan5'            => $data->gayaremkanan5,
                'gayaremkanan6'            => $data->gayaremkanan6,
                'gayaremkanan7'            => $data->gayaremkanan7,
                'gayaremkanan8'            => $data->gayaremkanan8,
                'gayaremkanan9'            => $data->gayaremkanan9,
                'gayaremkanan10'            => $data->gayaremkanan10,
                'gayaremkanan11'            => $data->gayaremkanan11,
                'gayaremkanan12'            => $data->gayaremkanan12,
                'alatuji_gayapengeremanparkirkiri' => $data->alatuji_gayapengeremanparkirkiri,
                'alatuji_gayapengeremanparkirkanan' => $data->alatuji_gayapengeremanparkirkanan,
                'alatuji_remutamaselisihgayapengeremanrodakirikanan1'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan1,
                'alatuji_remutamaselisihgayapengeremanrodakirikanan2'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan2,
                'alatuji_remutamaselisihgayapengeremanrodakirikanan3'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan3,
                'alatuji_remutamaselisihgayapengeremanrodakirikanan4'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan4,
                'alatuji_remutamaselisihgayapengeremanrodakirikanan5'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan5,
                'alatuji_remutamaselisihgayapengeremanrodakirikanan6'  => $data->alatuji_remutamaselisihgayapengeremanrodakirikanan6,
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
                'tgluji'                     => $data->tgluji,
                'masaberlakuuji'             => $data->masaberlakuuji,
                'statuslulusuji'             => $data->statuslulusuji,
                'idpenguji'                  => $data->idpenguji,
            ]);

            // $ps = '9';
            if ($dataPend->kodepenerbitans_id == '7') {
                if ($dataPend->pos1 == 0) {
                    $ps = 1;
                } elseif ($dataPend->pos2 == 0) {
                    $ps = 2;
                } elseif ($dataPend->pos3 == 0) {
                    $ps = 3;
                } elseif ($dataPend->pos4 == 0) {
                    $ps = 4;
                } elseif ($dataPend->posverif == 0) {
                    $ps = 5;
                }
            }

            $pend = Pendaftaran::where('pendaftarans.id', $id)->first();
            if ($pend) {
                $pend->posisi               = $ps;
                $pend->verif                 = '1';
                $pend->pos1                  = $data->pos1;
                $pend->pos2                  = $data->pos2;
                $pend->pos3                  = $data->pos3;
                $pend->pos4                  = $data->pos4;
                $pend->posverif              = $data->posverif;
                $pend->user_pos1             = $data->user_pos1;
                $pend->user_pos2             = $data->user_pos2;
                $pend->user_pos3             = $data->user_pos3;
                $pend->user_pos4             = $data->user_pos4;
                $pend->save();
            }
            return true;
        } else {
            return false;
        }
    }

    public function deletePengujian($id)
    {
        $delete = $this->model->where('id', $id);
        $delete->delete();
        return $delete;
    }

    public function getAll()
    {
        $ps = request()->ps;
        $status = request()->st;
        if ($status != '') {
            $name = 'pos' . $ps;
            $data = $this->model
                ->select('pendaftarans.noantrian', 'pendaftarans.uuid', 'kodepenerbitans.keterangan', 'identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan')
                ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
                ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
                ->where($name, $status)
                ->where('pendaftarans.tglpendaftaran', request()->t)
                ->orderBy('pendaftarans.noantrian', 'DESC');
        } else {
            $data = $this->model
                ->select('pendaftarans.noantrian', 'pendaftarans.uuid', 'kodepenerbitans.keterangan', 'identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan')
                ->join('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')
                ->join('kodepenerbitans', 'pendaftarans.kodepenerbitans_id', '=', 'kodepenerbitans.id')
                ->where('pendaftarans.posisi', $ps)
                ->where('pendaftarans.tglpendaftaran', request()->t)
                ->orderBy('pendaftarans.noantrian', 'DESC');
        }
        $search = str_replace("/", "", request()->q);

        if ($search != '') {
            $data = $data->where(function ($query) use ($search) {
                $query->where('identitaskendaraans.noregistrasikendaraan', 'LIKE', '%' . $search . '%')
                    ->orWhere('identitaskendaraans.nouji', 'LIKE', '%' . $search . '%');
            });
        }

        return $data->paginate(10);
    }

    public function getPengujian($id)
    {
        $ps = str_replace("/", "", request()->ps);
        if ($ps == '1') {
            $select = [
                'pendaftarans.pos1',
                'identifikasikendaraan.pendaftaran_id',
                'notnkb',
                'nouji',
                'norangkalandasan',
                'nomotorpenggerak',
                'ukuranban',
                'bahan',
                'julurdepan',
                'p',
                'tinggikendaraan',
                'a',
                'jaraksumbu1_2',
                'jaraksumbu2_3',
                'jaraksumbu3_4',
                'panjangbakatautangki',
                'q',
                'r',
                'b',
                'julurbelakang',
                'panjangkendaraan',
                'lebarkendaraan',
                'lebarbakatautangki',
                'tinggibakatautangki',
                'jarakantaradindingterluar',
                'groundclearance',
                'lebarpintu',
                'tinggipintu',
                'tinggianaktangga',
                'lebaranaktangga',
                'lebarlorong',
                'tinggitempatberdiri',
                'lebartempatduduk',
                'jaraktempatduduk',
                'lebarpintudarurat',
                'panjangakseskeluar',
                'lebarakseskeluar',
                'jarakantarbumper',
                'volume',
                'jenismuatan',
                'beratjenismuatan',
                'nilai_julurdepan',
                'nilai_p',
                'nilai_tinggikendaraan',
                'nilai_a',
                'nilai_jaraksumbu1_2',
                'nilai_jaraksumbu2_3',
                'nilai_jaraksumbu3_4',
                'nilai_panjangbakatautangki',
                'nilai_q',
                'nilai_r',
                'nilai_b',
                'nilai_julurbelakang',
                'nilai_panjangkendaraan',
                'nilai_lebarkendaraan',
                'nilai_lebarbakatautangki',
                'nilai_tinggibakatautangki',
                'nilai_jarakantaradindingterluar',
                'nilai_groundclearance',
                'nilai_lebarpintu',
                'nilai_tinggipintu',
                'nilai_tinggianaktangga',
                'nilai_lebaranaktangga',
                'nilai_lebarlorong',
                'nilai_tinggitempatberdiri',
                'nilai_lebartempatduduk',
                'nilai_jaraktempatduduk',
                'nilai_lebarpintudarurat',
                'nilai_panjangakseskeluar',
                'nilai_lebarakseskeluar',
                'nilai_jarakantarbumper',
                'nilai_volume',
                'nilai_beratjenismuatan',
                'bagiandepankendaraan.kacadepan',
                'penyemprotair',
                'penghapuskaca',
                'bodidepan',
                'bagiandepankendaraan.lamputandabatas',
                'lampuutamadekat',
                'lampuutamajauh',
                'bagiandepankendaraan.lampupenunjukarah',
                'lampuposisidepan',
                'lampukabut',
                'bumperdepan',
                'kondisitempatnkbdepan',
                'kacasampingkanan',
                'kacaspion',
                'pintusampingkanan',
                'bodikanan',
                'apctkanan',
                'bagiankanankendaraan.kompresorudara',
                'bagiankanankendaraan.bautdanmurroda',
                'bagiankanankendaraan.kondisidanukuranban',
                'bagiankanankendaraan.perisaikolong',
                'bagiankanankendaraan.tutuptangki',
                'bagiankanankendaraan.lamputandabatassamping',
                'apar',
                'bagiankanankendaraan.rodakelima',
                'bagiankanankendaraan.kakipenompangtempelan',
                'bagiankanankendaraan.alatperangkaitempelan',
                'apctbelakang',
                'lampuposisibelakang',
                'bagianbelakangkendaraan.lampupenunjukarah',
                'lampurem',
                'lampumundur',
                'lamputnkb',
                'kondisitempatpemasangantnkb',
                'bagianbelakangkendaraan.lamputandabatas',
                'kondisirodacadangan',
                'spakbor',
                'sistempembuangan',
                'kacasampingkiri',
                'kacaspionkiri',
                'pintusampingkiri',
                'bodikiri',
                'apctkiri',
                'bagiankirikendaraan.kompresorudara',
                'bagiankirikendaraan.bautdanmurroda',
                'bagiankirikendaraan.kondisidanukuranban',
                'bagiankirikendaraan.perisaikolong',
                'bagiankirikendaraan.tutuptangki',
                'bagiankirikendaraan.lamputandabatassamping',
                'bagiankirikendaraan.rodakelima',
                'bagiankirikendaraan.kakipenompangtempelan',
                'bagiankirikendaraan.alatperangkaitempelan',
                'ruangkemudi',
                'tempatduduk',
                'dashboard',
                'speedometer',
                'instrumenpanel',
                'alatcontrollampu',
                'tabirmatahari',
                'pandangankedepan',
                'rodakemudi',
                'batangkemudi',
                'sabukkeselamatan',
                'perlengkapan',
                'remparkir',
                'pedalremkaki',
                'remgasbuang',
                'sistemhampa',
                'alatuji_kedalamanalurban',
                'status_alurban'
            ];
        } elseif ($ps == '2') {
            $select = [
                'alatuji_emisiasapbahanbakarsolar',
                'alatuji_emisicobahanbakarbensin',
                'alatuji_emisihcbahanbakarbensin',
                'status_emisisolar',
                'status_emisibensin',
                'rangkalandasan',
                'motorpenggerak',
                'sistempenerusdaya',
                'sistemkemudi',
                'sistemsuspensi',
                'sistemroda',
                'sistemrem',
                'alatuji_tingkatkebisingan',
                'status_kebisingan',
                'pos' . $ps
            ];
        } elseif ($ps == '3') {
            $select = [
                'alatuji_lampuutamakekuatanpancarlampukanan',
                'alatuji_lampuutamakekuatanpancarlampukiri',
                'alatuji_lampuutamapenyimpanganlampukanan',
                'alatuji_lampuutamapenyimpanganlampukiri',
                'alatuji_kincuprodadepan',
                'status_kincuprodadepan',
                'status_intensitaslampu',
                'status_penyimpanganlampu',
                'pos' . $ps
            ];
        } elseif ($ps == '4') {
            $select = [
                'berats1',
                'berats2',
                'berats3',
                'berats4',
                'berats5',
                'berats6',
                'berats7',
                'berats8',
                'berats9',
                'berats10',
                'berats11',
                'berats12',
                'alatuji_remutamatotalgayapengereman',
                'alatuji_remparkirtotalgayapengereman',
                'gayaremkiri1',
                'gayaremkiri2',
                'gayaremkiri3',
                'gayaremkiri4',
                'gayaremkiri5',
                'gayaremkiri6',
                'gayaremkiri7',
                'gayaremkiri8',
                'gayaremkiri9',
                'gayaremkiri10',
                'gayaremkiri11',
                'gayaremkiri12',
                'gayaremkanan1',
                'gayaremkanan2',
                'gayaremkanan3',
                'gayaremkanan4',
                'gayaremkanan5',
                'gayaremkanan6',
                'gayaremkanan7',
                'gayaremkanan8',
                'gayaremkanan9',
                'gayaremkanan10',
                'gayaremkanan11',
                'gayaremkanan12',
                'alatuji_gayapengeremanparkirkanan',
                'alatuji_gayapengeremanparkirkiri',
                'alatuji_remutamaselisihgayapengeremanrodakirikanan1',
                'alatuji_remutamaselisihgayapengeremanrodakirikanan2',
                'alatuji_remutamaselisihgayapengeremanrodakirikanan3',
                'alatuji_remutamaselisihgayapengeremanrodakirikanan4',
                'alatuji_remparkirtangan',
                'alatuji_remparkirkaki',
                'alatuji_penunjukkecepatan',
                'status_speedometer',
                'status_remkanan',
                'status_remkiri',
                'status_remparkir',
                'pos' . $ps
            ];
        } else {
            $select = [];
        }

        $data = $this->model
            ->select($select)->Leftjoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id');

        if ($ps == '1') {
            $data = $data->leftjoin('identifikasikendaraan', 'identifikasikendaraan.pendaftaran_id', 'pendaftarans.id')
                ->leftjoin('dimensikendaaraan', 'dimensikendaaraan.pendaftaran_id', 'pendaftarans.id')
                ->leftjoin('bagiandepankendaraan', 'bagiandepankendaraan.pendaftaran_id', 'pendaftarans.id')
                ->leftjoin('bagiankanankendaraan', 'bagiankanankendaraan.pendaftaran_id', 'pendaftarans.id')
                ->leftjoin('bagianbelakangkendaraan', 'bagianbelakangkendaraan.pendaftaran_id', 'pendaftarans.id')
                ->leftjoin('bagiankirikendaraan', 'bagiankirikendaraan.pendaftaran_id', 'pendaftarans.id')
                ->leftjoin('bagiandalamkendaraan', 'bagiandalamkendaraan.pendaftaran_id', 'pendaftarans.id')
                ->leftjoin('bagianbawahkendaraan', 'bagianbawahkendaraan.pendaftaran_id', '=', 'pendaftarans.id');
        } elseif ($ps == '2') {
            $data = $data->leftjoin('bagianbawahkendaraan', 'bagianbawahkendaraan.pendaftaran_id', '=', 'pendaftarans.id');
        }
        $data = $data->where('pendaftarans.uuid', $id)->first();

        return $data;
    }

    public function checkid($id)
    {
        $data = $this->model->where('uuid', $id);
        return $data->first();
    }

    public function setPosisiPos($data, $request, $ps)
    {
        $user = auth()->user();
        $maxPs = '5';
        $posisi = $ps;
        $nmField = 'pos' . $ps;
        $usrnmField = 'user_pos' . $ps;
        if ($ps == '5') {
            $nmField = 'posverif';
            $usrnmField = 'user_verif';
        }
        for ($i = 1; $i <= $maxPs; $i++) {
            $ps = (int)$ps + 1;
            $field = 'pos' . $ps;
            if (is_null($data->{$field})) {
                $posisi = $ps;
                break;
            }
            if ($data->{$field} == 0) {
                $posisi = $ps;
                break;
            }

            if ($maxPs == 5) {
                if (is_null($data->posverif)) {
                    $posisi = 5;
                } elseif ($data->posverif == 0) {
                    $posisi = 5;
                } elseif ($data->posverif == 1) {
                    $posisi = 6;
                }
            }
        }
        // dd($request, $nmField, $data);
        // dd($request[$nmField]);
        $data->{$nmField}    = $request[$nmField];
        $data->{$usrnmField} = $user['id'];
        $data->posisi        = $posisi;
        $data->save();
    }

    public function updatePos($request, $id)
    {
        $request['pendaftaran_id'] = $id;
        $update = $this->modelLaikJalan->where('pendaftaran_id', $id)->first();
        if ($update) {
            $update->update($request);

            if ($update->save()) {
                return true;
            }
        }
        return false;
    }

    public function Datakendaraan($request, $id)
    {
        $data = $this->modelDatakendaraan->where('identitaskendaraan_id', $id)->first();
        if ($data) {
            $data->update($request);
            if ($data->save()) {
                return true;
            }
            return false;
        }
        return false;
    }

    public function setPengujian($request, $id, $bagian)
    {
        $modelProperty = 'model' . ucfirst($bagian);
        if (!property_exists($this, $modelProperty)) {
            throw new \Exception("Model for bagian '$bagian' tidak ditemukan.");
        }
        $model = $this->{$modelProperty};

        $data = $model->where('pendaftaran_id', $id)->first();
        $request['pendaftaran_id'] = $id;
        if ($data) {
            $data->update($request);
            if ($data->save()) {
                return true;
            }
            return false;
        } else {
            $data = $model->create($request);
            if ($data) {
                return true;
            } else {
                return false;
            }
        }
    }

    public function LaikJalanKendaraan($request, $id)
    {
        $data = $this->modelLaikJalan->where('pendaftaran_id', $id)->first();
        if ($data) {
            $masaberlakuuji = date("Y-m-d");
            $masaberlakuuji = date_create($masaberlakuuji);
            date_sub($masaberlakuuji, date_interval_create_from_date_string("-6 months"));
            $masaberlakuuji = date_format($masaberlakuuji, "dmY");
            $tgluji = date("dmY");
            $request['pendaftaran_id'] = $id;
            $request['tgluji'] = $tgluji;
            $request['masaberlakuuji'] = $masaberlakuuji;

            $data->update($request);
            if ($data->save()) {
                return true;
            }
            return false;
        } else {
            $masaberlakuuji = date("Y-m-d");
            $masaberlakuuji = date_create($masaberlakuuji);
            date_sub($masaberlakuuji, date_interval_create_from_date_string("-6 months"));
            $masaberlakuuji = date_format($masaberlakuuji, "dmY");
            $tgluji = date("dmY");
            $request['pendaftaran_id'] = $id;
            $request['tgluji'] = $tgluji;
            $request['masaberlakuuji'] = $masaberlakuuji;
            $data = $this->modelLaikJalan->create($request);
            if ($data) {
                return true;
            } else {
                return false;
            }
        }
    }

    public function setStatusCatatan($id)
    {
        $data = $this->modelCatatan->where('pendaftaran_id', $id)->first();
        if ($data) {
            $data->status = 0;
            $data->save();
            return true;
        }
        return false;
    }

    public function upStatusCatatan($id, $ps)
    {
        $data = $this->modelCatatan->where('pos', $ps)->where('pendaftaran_id', $id)->get();
        if ($data) {
            $data->status = 0;
            $data->save();
            return true;
        }
        return false;
    }
}

<?php

namespace App\Exports\Bulanan;

use App\Models\Pendaftaran;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use App\Utils;

class KartuExport implements FromView
{
    use Exportable;
    protected $tgl;
    private $utils;

    public function __construct(string $tgl)
    {
        $this->tgl = $tgl;
        $this->utils = new Utils();
    }

    public function view(): View
    {
        $tglcetak = date('Y-m-d', strtotime($this->tgl));
        $tglcreate = date_create($this->tgl);
        $bulan = date_format($tglcreate, "m");
        $tahun = date_format($tglcreate, "Y");
        $tglprint = $this->utils->bulan($bulan).' '.$tahun;
        $tgl = Pendaftaran::select('tglpendaftaran')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->groupBy('tglpendaftaran')->get();
        $data = Pendaftaran::select('tglpendaftaran as tgl','keterangan','identitaskendaraans.nouji','identitaskendaraans.noregistrasikendaraan','datapengujian.tgluji','datapengujian.masaberlakuuji','nokendalikartu','datapengujian.perso')->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('kodepenerbitans', 'kodepenerbitans.id', '=', 'pendaftarans.kodepenerbitans_id')->leftJoin('datapengujian','datapengujian.idx','pendaftarans.idx')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->orderBy('pendaftarans.noantrian', 'ASC')->get();

        return view('exports.bulanan.kartu', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data]);
    }
}

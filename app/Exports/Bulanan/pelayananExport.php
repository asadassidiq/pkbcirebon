<?php

namespace App\Exports\Bulanan;

use App\Models\Pendaftaran;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use App\Utils;

class pelayananExport implements FromView
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
        $dataKend = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");
            $arr = array(
                'tgl'  => $date,
                'lulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('statuslulusuji', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'tidaklulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('statuslulusuji', '0')->where('kodepenerbitans_id', '!=', '9')->where('kodepenerbitans_id', '!=', '10')->count(),
                'numasuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'nukeluar' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'ujiulang' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'mutasikeluar' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'mutasimasuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'ujipertama' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id','1')->count(),
                'ujiberkala' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id','2')->count(),
                'rubahbentuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id','8')->count(),
            );
            array_push($dataKend, $arr);
        };

        return view('exports.bulanan.pelayanan', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $dataKend]);
    }
}

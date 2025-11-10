<?php

namespace App\Exports\Triwulan;

use App\Models\Pendaftaran;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use App\Utils;

class pelayananExport implements FromView
{
    use Exportable;
    protected $tahun;
    private $utils;

    public function __construct(string $tahun)
    {
        $this->tahun = $tahun;
        $this->utils = new Utils();
    }

    public function view(): View
    {
        $tglcetak = date('Y-m-d', strtotime($this->tahun));
        $triwulan = str_replace("/", "", request()->t);
        switch ($triwulan) {
            case 1:
                $range = array('1', '2', '3');
                break;
            case 2:
                $range = array('4', '5', '6');
                break;
            case 3:
                $range = array('7', '8', '9');
                break;
            case 4:
                $range = array('10', '11', '12');
                break;
        }
        $tglprint = $triwulan . ' ' . $this->tahun;
        $data = array();
        foreach ($range as $bulan) {
            $date = $this->utils->bulan($bulan);
            $arr = array(
                'bulan'  => $date,
                'lulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('statuslulusuji', '1')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->count(),
                'tidaklulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->where('statuslulusuji', '0')->where('kodepenerbitans_id', '!=', '9')->where('kodepenerbitans_id', '!=', '10')->count(),
                'numasuk' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->where('kodepenerbitans_id', '5')->count(),
                'nukeluar' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->where('kodepenerbitans_id', '9')->count(),
                'ujiulang' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->where('kodepenerbitans_id', '7')->count(),
                'mutasikeluar' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->where('kodepenerbitans_id', '10')->count(),
                'mutasimasuk' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->where('kodepenerbitans_id', '6')->count(),
                'ujipertama' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->where('kodepenerbitans_id','1')->count(),
                'ujiberkala' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->where('kodepenerbitans_id','2')->count(),
                'rubahbentuk' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->where('kodepenerbitans_id','8')->count(),
            );
            array_push($data, $arr);
        };

        return view('exports.triwulan.pelayanan', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data]);
    }
}

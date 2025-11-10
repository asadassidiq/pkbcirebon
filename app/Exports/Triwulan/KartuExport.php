<?php

namespace App\Exports\Triwulan;

use App\Models\Pendaftaran;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use App\Utils;

class KartuExport implements FromView
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
                'baru'   => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->whereIn('kodepenerbitans_id', ['1', '2', '5', '6'])->where('rfid_tid', '!=','')->count(),
                'perpanjangan'   => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->where('kodepenerbitans_id', '2')->where('rfid_tid','')->count(),
                'rusak'  => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->where('kodepenerbitans_id', '3')->where('rfid_tid', '!=','')->count(),
                'hilang' => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $this->tahun)->where('kodepenerbitans_id', '4')->where('rfid_tid', '!=','')->count(),
            );
            array_push($data, $arr);
        }
        return view('exports.triwulan.kartu', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data]);
    }
}

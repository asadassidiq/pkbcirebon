<?php

namespace App\Exports\Range;

use App\Models\Datapengujian;
use App\Models\Tandatangan;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class KartuRangeExport implements FromView
{
    use Exportable;

    public function __construct(string $tgl1,string $tgl2)
    {
        $this->tgl1 = $tgl1;
        $this->tgl2 = $tgl2;
    }

    public function view(): View
    {
        $tglcetak = date('d-m-Y', strtotime($this->tgl1));
        $tglcreate = date_create($this->tgl1);
        $hari1 = date_format($tglcreate,"D");
 
        switch($hari1){
            case 'Sun':
                $hari_ini = "Minggu";
            break;
     
            case 'Mon':         
                $hari_ini = "Senin";
            break;
     
            case 'Tue':
                $hari_ini = "Selasa";
            break;
     
            case 'Wed':
                $hari_ini = "Rabu";
            break;
     
            case 'Thu':
                $hari_ini = "Kamis";
            break;
     
            case 'Fri':
                $hari_ini = "Jumat";
            break;
     
            case 'Sat':
                $hari_ini = "Sabtu";
            break;
            
            default:
                $hari_ini = "Bukan di ketahui";     
            break;
        }

        $tglcetak2 = date('d-m-Y', strtotime($this->tgl2));
        $tglcreate2 = date_create($this->tgl2);
        $hari2 = date_format($tglcreate,"D");
 
        switch($hari2){
            case 'Sun':
                $hari_ini2 = "Minggu";
            break;
     
            case 'Mon':         
                $hari_ini2 = "Senin";
            break;
     
            case 'Tue':
                $hari_ini2 = "Selasa";
            break;
     
            case 'Wed':
                $hari_ini2 = "Rabu";
            break;
     
            case 'Thu':
                $hari_ini2 = "Kamis";
            break;
     
            case 'Fri':
                $hari_ini2 = "Jumat";
            break;
     
            case 'Sat':
                $hari_ini2 = "Sabtu";
            break;
            
            default:
                $hari_ini2 = "Bukan di ketahui";     
            break;
        }

        $tglprint = $hari_ini.', '.$tglcetak.' - '.$hari_ini2.', '.$tglcetak2;
        $data = Datapengujian::query()->select('pendaftarans.tglpendaftaran','datapengujian.noregistrasikendaraan','datapengujian.nouji','datapengujian.merek','datapengujian.jenis','datapengujian.nokendalikartu','datapengujian.nosertifikat','transaksis.bill_code','datapengujian.perso')->leftJoin('pendaftarans','pendaftarans.idx','=','datapengujian.idx')->leftJoin('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->WhereNotNull('nokendalikartu')->get();
        
        return view('exports.range.kartu', ['kartu' => $data,'tglprint' => $tglprint,]);
    }
}

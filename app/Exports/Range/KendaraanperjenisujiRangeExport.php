<?php

namespace App\Exports\Range;

use App\Models\Pendaftaran;
use App\Models\Tandatangan;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class KendaraanperjenisujiRangeExport implements FromView
{
    use Exportable;

    public function __construct(string $kode,string $tgl1,string $tgl2)
    {
        $this->kode = $kode;
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

        $tglprint = $hari_ini.', '.$tglcetak.'-'.$hari_ini2.', '.$tglcetak2;

        $kendaraan  = Pendaftaran::select('identitaskendaraans.id', 'noregistrasikendaraan','nouji','nama','alamat','jenis','peruntukan','merek','tipe','thpembuatan','norangka','nomesin','masaberlakuuji','tglpendaftaran','tgluji')->leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('kodepenerbitans','kodepenerbitans.id','=','pendaftarans.kodepenerbitans_id')->Join('pengujians','pengujians.pendaftaran_id','=','pendaftarans.id')->leftJoin('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('kodepenerbitans_id',$this->kode)->where('pendaftarans.status','1')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->groupBy('identitaskendaraan_id')->get();

        return view('exports.range.kendaraanperjenisuji', ['kendaraan' => $kendaraan,'kode' => $this->kode,'tglprint' => $tglprint]);
    }
}

<?php

namespace App\Exports;

use App\Models\Identitaskendaraan;
use App\Models\Pendaftaran;
use App\Models\Tandatangan;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class TamankendaraanExport implements FromView
{
    use Exportable;

    public function __construct(int $page)
    {
        $this->page = $page;
    }

    public function view(): View
    {
        $tglcetak = date('d-m-Y');
        $hari = date("D");
 
        switch($hari){
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

        $tglprint = $hari_ini.', '.$tglcetak;
        $mutasimasuk = Pendaftaran::join('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id','6')->get();
        $mutasikeluar = Pendaftaran::join('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id','10')->get();
        $numasuk = Pendaftaran::join('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id','5')->get();
        $nukeluar = Pendaftaran::join('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id','9')->get();
        $ujipertama = Pendaftaran::join('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id','1')->get();
        $ujiberkala = Pendaftaran::join('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id','2')->groupBy('identitaskendaraans.id')->get();
        $fixujiberkala = array();
        foreach($ujiberkala as $dt){
            $cek = Pendaftaran::where('kodepenerbitans_id','!=','2')->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','3')->where('kodepenerbitans_id','!=','4')->count();
            if($cek > 0){
                array_push($fixujiberkala, $dt);
            }
        }

        return view('exports.tamankendaraan', ['fixujiberkala' => $fixujiberkala,'mutasimasuk' => $mutasimasuk,'mutasikeluar' => $mutasikeluar,'numasuk' => $numasuk,'nukeluar' => $nukeluar,'ujipertama' => $ujipertama,'tglprint' => $tglprint,'page' => $this->page]);
    }
}

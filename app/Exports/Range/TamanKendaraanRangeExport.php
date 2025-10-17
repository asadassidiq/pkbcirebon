<?php

namespace App\Exports\Range;

use App\Models\Pendaftaran;
use App\Models\Tandatangan;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class TamanKendaraanRangeExport implements FromView
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

        $tglprint = ' '.'-'.$hari_ini2.', '.$tglcetak2;

        $ujiberkala = Pendaftaran::select('noregistrasikendaraan','nouji','nama','alamat','jenis','jbb','peruntukan','merek','pendaftarans.identitaskendaraan_id','tipe','thpembuatan','norangka','nomesin')->join('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran','<=',$tgl2)->groupBy('identitaskendaraans.id')->get();
        $dam = array();
        $fixujiberkala = array();
        foreach($ujiberkala as $dt){
            $cek = Pendaftaran::where('kodepenerbitans_id','10')->where('tglpendaftaran','<=',$tgl2)->where('identitaskendaraan_id',$dt->identitaskendaraan_id)->count();
            if($cek > 0){
                // $cek = Identitaskendaraan::where('id',$dt->identitaskendaraan_id)->first();
                // array_push($dam, $cek);
            }else{
                $tgluji = Pendaftaran::select('tgluji')->join('pengujians','pengujians.pendaftaran_id','=','pendaftarans.id')->where('statuslulusuji','1')->whereNotNull('idx')->orderBy('tglpendaftaran','DESC')->first();
                if(!empty($tgluji)){
                    $tgluji = $tgluji->tgluji;
                }else{
                    $tgluji = '';
                }

                $masaberlakuuji = Pendaftaran::select('masaberlakuuji')->join('pengujians','pengujians.pendaftaran_id','=','pendaftarans.id')->where('statuslulusuji','1')->whereNotNull('idx')->orderBy('tglpendaftaran','DESC')->first();
                if(!empty($masaberlakuuji)){
                    $masaberlakuuji = $masaberlakuuji->masaberlakuuji;
                }else{
                    $masaberlakuuji = '';
                }
                $arr = array(
                        'nouji'                 => $dt->nouji,
                        'noregistrasikendaraan' => $dt->noregistrasikendaraan,
                        'nama'                  => $dt->nama,
                        'alamat'                => $dt->alamat,
                        'jenis'                 => $dt->jenis,
                        'jbb'                   => $dt->jbb,
                        'peruntukan'            => $dt->peruntukan,
                        'merek'                 => $dt->merek,
                        'tipe'                  => $dt->tipe,
                        'thpembuatan'           => $dt->thpembuatan,
                        'norangka'              => $dt->norangka,
                        'nomesin'               => $dt->nomesin,
                        'tgluji'                => $tgluji,
                        'masaberlakuuji'        => $masaberlakuuji,
                );
                array_push($fixujiberkala, $arr);
            }
        }


        return view('exports.range.tamankendaraan', ['kendaraan' => $fixujiberkala,'tglprint' => $tglprint]);
    }
}

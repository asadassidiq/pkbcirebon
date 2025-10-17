<?php

namespace App\Exports\Range;

use App\Models\Pendaftaran;
use App\Models\Tandatangan;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class KeuanganOnlineRangeExport implements FromView
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

        $tglprint = $hari_ini.', '.$tglcetak.'-'.$hari_ini2.', '.$tglcetak2;

        $tgl  = Pendaftaran::LeftJoin('pengujians','pengujians.pendaftaran_id','=','pendaftarans.id')->leftJoin('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','3')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('pendaftarans.status','1')->Where('transaksis.bill_paid','1')->groupBy('pendaftarans.tglpendaftaran')->get();
        $data = array();
        foreach ($tgl as $dt) {
            $date=date_create($dt->tglpendaftaran);
            $date= date_format($date,"d-m-Y");
            
                $arr = array(
                        'tgl'  => $date,
                        'jumlah'    => Pendaftaran::Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('tglpendaftaran',$dt->tglpendaftaran)->Where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->Where('transaksis.bill_paid','1')->count(),
                        'pemeriksaan' => Pendaftaran::Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->Where('kodepenerbitans_id','!=','7')->where('tglpendaftaran',$dt->tglpendaftaran)->where('pendaftarans.status','1')->Where('transaksis.bill_paid','1')->sum('transaksis.pengujian'),
                        'penghapusan' => Pendaftaran::Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->Where('kodepenerbitans_id','!=','7')->where('tglpendaftaran',$dt->tglpendaftaran)->where('pendaftarans.status','1')->Where('transaksis.bill_paid','1')->sum('transaksis.penghapusan'),
                        'bill_denda' => Pendaftaran::Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->Where('kodepenerbitans_id','!=','7')->where('tglpendaftaran',$dt->tglpendaftaran)->where('pendaftarans.status','1')->Where('transaksis.bill_paid','1')->sum('transaksis.bill_denda'),
                        'total' => Pendaftaran::Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->Where('kodepenerbitans_id','!=','7')->where('tglpendaftaran',$dt->tglpendaftaran)->where('pendaftarans.status','1')->Where('transaksis.bill_paid','1')->sum('bill_amount'),
                        'total_paid' => Pendaftaran::Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->Where('kodepenerbitans_id','!=','7')->where('tglpendaftaran',$dt->tglpendaftaran)->where('pendaftarans.status','1')->Where('transaksis.bill_paid','1')->sum('bill_amount_paid'),
                        'buktilulusujirusak' => Pendaftaran::Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->Where('kodepenerbitans_id','!=','7')->where('tglpendaftaran',$dt->tglpendaftaran)->where('pendaftarans.status','1')->Where('transaksis.bill_paid','1')->where('transaksis.pengganti','25000')->sum('transaksis.pengganti'),
                        'buktilulusujihilang' => Pendaftaran::Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->Where('kodepenerbitans_id','!=','7')->where('tglpendaftaran',$dt->tglpendaftaran)->where('pendaftarans.status','1')->Where('transaksis.bill_paid','1')->where('transaksis.pengganti','150000')->sum('transaksis.pengganti'),
                        );
                array_push($data, $arr);
        }
        
        return view('exports.range.keuanganonline', ['jumlah' => $data,'tglprint' => $tglprint]);
    }
}

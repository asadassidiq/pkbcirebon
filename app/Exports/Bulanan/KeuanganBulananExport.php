<?php

namespace App\Exports\Bulanan;

use App\Models\Pendaftaran;
use App\Models\Tandatangan;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class KeuanganBulananExport implements FromView
{
    use Exportable;

    public function __construct(string $tgl)
    {
        $this->tgl = $tgl;
    }

    public function view(): View
    {
        $tglcetak = date_create(date("d-m-Y"));
        $tglcreate = date_create($this->tgl);
        $hari = date_format($tglcreate,"d");
        $bulan = date_format($tglcreate,"m");
        $tahun = date_format($tglcreate,"Y");
        $hari1 = date_format($tglcetak,"d");
        $bulan1 = date_format($tglcetak,"m");
        $tahun1 = date_format($tglcetak,"Y");
        
        switch($bulan){
            case 1:
                $bulan_ini1 = "Januari";
            break;
     
            case 2:         
                $bulan_ini1 = "Febuari";
            break;
     
            case 3:
                $bulan_ini1 = "Maret";
            break;
     
            case 4:
                $bulan_ini1 = "April";
            break;
     
            case 5:
                $bulan_ini1 = "Mei";
            break;
     
            case 6:
                $bulan_ini1 = "Juni";
            break;
     
            case 7:
                $bulan_ini1 = "Juli";
            break;

            case 8:
                $bulan_ini1 = "Agustus";
            break;

            case 9:
                $bulan_ini1 = "September";
            break;

            case 10:
                $bulan_ini1 = "Oktober";
            break;

            case 11:
                $bulan_ini1 = "November";
            break;

            case 12:
                $bulan_ini1 = "Desember";
            break;
            
            default:
                $bulan_ini1 = "Bukan di ketahui";     
            break;
        }
        switch($bulan1){
            case 1:
                $bulan_ini = "Januari";
            break;
     
            case 2:         
                $bulan_ini = "Febuari";
            break;
     
            case 3:
                $bulan_ini = "Maret";
            break;
     
            case 4:
                $bulan_ini = "April";
            break;
     
            case 5:
                $bulan_ini = "Mei";
            break;
     
            case 6:
                $bulan_ini = "Juni";
            break;
     
            case 7:
                $bulan_ini = "Juli";
            break;

            case 8:
                $bulan_ini = "Agustus";
            break;

            case 9:
                $bulan_ini = "September";
            break;

            case 10:
                $bulan_ini = "Oktober";
            break;

            case 11:
                $bulan_ini = "November";
            break;

            case 12:
                $bulan_ini = "Desember";
            break;
            
            default:
                $bulan_ini = "Bukan di ketahui";     
            break;
        }
        $tglprint = $bulan_ini1.' '.$tahun;
        $tglcetak = $hari1.' '.$bulan_ini.' '.$tahun1;

        $kendaraan  = Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->leftJoin('kodepenerbitans','kodepenerbitans.id','=','pendaftarans.kodepenerbitans_id')->LeftJoin('pengujians','pengujians.pendaftaran_id','=','pendaftarans.id')->leftJoin('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','3')->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->groupBy('pendaftarans.identitaskendaraan_id')->orderBy('tglpendaftaran','ASC')->orderBy('bill_code','ASC')->get();

        $jml = array(
                    'mpu'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like','%'.'Mobil Penumpang'.'%')->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbk'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Kecil'.'%' )->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbs'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Sedang'.'%' )->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbb'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Besar'.'%' )->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbm'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Maxi'.'%' )->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbg'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Gandeng'.'%' )->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbt'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Tempel'.'%' )->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbtk'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Tingkat'.'%' )->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mb1' => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','<=',5000)->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'mb2' => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',5000)->where('jbb','<=',10000)->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'mb3' => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',10000)->where('jbb','<=',15000)->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'mb4' => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',15000)->where('jbb','<=',20000)->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'mb5' => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',20000)->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'kg'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Kereta Gandeng'.'%' )->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'kt'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Kereta Tempelan'.'%' )->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'jumlah'    => Pendaftaran::Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->whereMonth('tglpendaftaran',$bulan)->whereYear('tglpendaftaran',$tahun)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    );

        return view('exports.bulanan.keuangandetail', ['kendaraan' => $kendaraan,'jml' => $jml,'tglprint' => $tglprint]);
    }
}

<?php

namespace App\Exports\Harian;

use App\Models\Pendaftaran;
use App\Models\Tandatangan;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class KeuanganExport implements FromView
{
    use Exportable;

    public function __construct(string $tgl)
    {
        $this->tgl = $tgl;
    }

    public function view(): View
    {
        $tglcetak = date('d-m-Y', strtotime($this->tgl));
        $tglcreate = date_create($this->tgl);
        $hari = date_format($tglcreate,"D");
 
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

        $kendaraan  = Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->leftJoin('kodepenerbitans','kodepenerbitans.id','=','pendaftarans.kodepenerbitans_id')->LeftJoin('pengujians','pengujians.pendaftaran_id','=','pendaftarans.id')->leftJoin('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','3')->where('tglpendaftaran',$this->tgl)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->groupBy('pendaftarans.identitaskendaraan_id')->get();

        $jml = array(
                    'mpu'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like','%'.'Mobil Penumpang'.'%')->where('tglpendaftaran',$this->tgl)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbk'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Kecil'.'%' )->where('tglpendaftaran',$this->tgl)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbs'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Sedang'.'%' )->where('tglpendaftaran',$this->tgl)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbb'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Besar'.'%' )->where('tglpendaftaran',$this->tgl)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbm'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Maxi'.'%' )->where('tglpendaftaran',$this->tgl)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbg'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Gandeng'.'%' )->where('tglpendaftaran',$this->tgl)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbt'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Tempel'.'%' )->where('tglpendaftaran',$this->tgl)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mbtk'  => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Mobil Bus Tingkat'.'%' )->where('tglpendaftaran',$this->tgl)->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->where('kodepenerbitans_id','!=','7')->count(),
                    'mb1' => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','<=',5000)->where('tglpendaftaran',$this->tgl)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'mb2' => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',5000)->where('jbb','<=',10000)->where('tglpendaftaran',$this->tgl)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'mb3' => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',10000)->where('jbb','<=',15000)->where('tglpendaftaran',$this->tgl)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'mb4' => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',15000)->where('jbb','<=',20000)->where('tglpendaftaran',$this->tgl)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'mb5' => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',20000)->where('tglpendaftaran',$this->tgl)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'kg'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Kereta Gandeng'.'%' )->where('tglpendaftaran',$this->tgl)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'kt'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('jenis','like', '%'.'Kereta Tempelan'.'%' )->where('tglpendaftaran',$this->tgl)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    'jumlah'    => Pendaftaran::Join('transaksis','transaksis.pendaftaran_id','=','pendaftarans.id')->where('tglpendaftaran',$this->tgl)->where('kodepenerbitans_id','!=','7')->where('pendaftarans.status','1')->where('transaksis.bill_paid','0')->count(),
                    );

        return view('exports.harian.keuangan', ['kendaraan' => $kendaraan,'jml' => $jml,'tglprint' => $tglprint]);
    }
}

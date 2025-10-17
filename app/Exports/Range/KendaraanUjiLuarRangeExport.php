<?php

namespace App\Exports\Range;

use App\Models\Pendaftaran;
use App\Models\Tandatangan;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class KendaraanUjiLuarRangeExport implements FromView
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

        $tgl = Pendaftaran::select('tglpendaftaran')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->groupBy('tglpendaftaran')->get();
        $kode  = array('9','10');
        $datauji = array();
        foreach ($tgl as $dt) {
            $data = array();
            foreach ($kode as $kd) {
                    $arr1 = array(
                        'jenis'             => $kd,
                        'mobilpenumpang1'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Mobil Penumpang')->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilpenumpang2'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Mobil Penumpang')->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilpenumpang3'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Mobil Penumpang')->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbuskecil1'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Mobil Bus Kecil')->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbuskecil2'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Mobil Bus Kecil')->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbuskecil3'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Mobil Bus Kecil')->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbussedang1'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Mobil Bus Sedang')->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbussedang2'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Mobil Bus Sedang')->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbussedang3'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Mobil Bus Sedang')->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbusbesar1'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Bus Besar','Mobil Bus Maxi', 'Mobil Bus Tempel','Mobil Bus Gandeng','Mobil Bus Tingkat'])->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbusbesar2'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Bus Besar','Mobil Bus Maxi', 'Mobil Bus Tempel','Mobil Bus Gandeng','Mobil Bus Tingkat'])->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbusbesar3'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Bus Besar','Mobil Bus Maxi', 'Mobil Bus Tempel','Mobil Bus Gandeng','Mobil Bus Tingkat'])->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang11'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','<=',5000)->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang12'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','<=',5000)->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang13'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','<=',5000)->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang21'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',5000)->where('jbb','<=',10000)->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang22'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',5000)->where('jbb','<=',10000)->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang23'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',5000)->where('jbb','<=',10000)->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang31'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',10000)->where('jbb','<=',15000)->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang32'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',10000)->where('jbb','<=',15000)->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang33'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',10000)->where('jbb','<=',15000)->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang41'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',15000)->where('jbb','<=',20000)->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang42'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',15000)->where('jbb','<=',20000)->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang43'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',15000)->where('jbb','<=',20000)->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang51'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',20000)->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang52'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',20000)->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang53'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->where('tglpendaftaran',$dt['tglpendaftaran'])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',20000)->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'keretatempelan1'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Kereta Tempelan')->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'keretatempelan2'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Kereta Tempelan')->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'keretatempelan3'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Kereta Tempelan')->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'keretagandeng1'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Kereta Gandeng')->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'keretagandeng2'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Kereta Gandeng')->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'keretagandeng3'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('jenis','Kereta Gandeng')->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'jml1'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('peruntukan','UMUM')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'jml2'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('peruntukan','Bukan UMUM')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'jml3'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'jml4'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->where('tglpendaftaran',$dt['tglpendaftaran'])->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        );
                array_push($data, $arr1);
            }
            $arr = array(
                        'tgl'    => $dt['tglpendaftaran'],
                        'datajm' => $data,
                        );
            array_push($datauji, $arr);
        }
        $datajml = array();
        foreach ($kode as $kd) {
                    $arr2 = array(
                        'jenis'             => $kd,
                        'mobilpenumpang1'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Mobil Penumpang')->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilpenumpang2'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Mobil Penumpang')->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilpenumpang3'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Mobil Penumpang')->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbuskecil1'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Mobil Bus Kecil')->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbuskecil2'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Mobil Bus Kecil')->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbuskecil3'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Mobil Bus Kecil')->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbussedang1'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Mobil Bus Sedang')->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbussedang2'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Mobil Bus Sedang')->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbussedang3'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Mobil Bus Sedang')->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbusbesar1'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Bus Besar','Mobil Bus Maxi', 'Mobil Bus Tempel','Mobil Bus Gandeng','Mobil Bus Tingkat'])->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbusbesar2'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Bus Besar','Mobil Bus Maxi', 'Mobil Bus Tempel','Mobil Bus Gandeng','Mobil Bus Tingkat'])->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbusbesar3'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Bus Besar','Mobil Bus Maxi', 'Mobil Bus Tempel','Mobil Bus Gandeng','Mobil Bus Tingkat'])->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang11'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','<=',5000)->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang12'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','<=',5000)->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang13'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','<=',5000)->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang21'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',5000)->where('jbb','<=',10000)->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang22'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',5000)->where('jbb','<=',10000)->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang23'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',5000)->where('jbb','<=',10000)->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang31'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',10000)->where('jbb','<=',15000)->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang32'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',10000)->where('jbb','<=',15000)->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang33'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',10000)->where('jbb','<=',15000)->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang41'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',15000)->where('jbb','<=',20000)->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang42'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',15000)->where('jbb','<=',20000)->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang43'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',15000)->where('jbb','<=',20000)->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang51'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',20000)->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang52'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',20000)->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'mobilbarang53'     => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->whereIn('jenis',['Mobil Barang','Kendaraan Khusus'])->where('jbb','>',20000)->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'keretatempelan1'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Kereta Tempelan')->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'keretatempelan2'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Kereta Tempelan')->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'keretatempelan3'   => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Kereta Tempelan')->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'keretagandeng1'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Kereta Gandeng')->where('peruntukan','Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'keretagandeng2'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Kereta Gandeng')->where('peruntukan','Bukan Umum')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'keretagandeng3'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('jenis','Kereta Gandeng')->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'jml1'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('peruntukan','UMUM')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'jml2'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('peruntukan','Bukan UMUM')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'jml3'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('peruntukan','Pemerintah')->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        'jml4'    => Pendaftaran::leftJoin('identitaskendaraans','identitaskendaraans.id','=','pendaftarans.identitaskendaraan_id')->whereBetween('tglpendaftaran',[$this->tgl1,$this->tgl2])->where('kodepenerbitans_id',$kd)->where('kodepenerbitans_id','!=','7')->where('kodepenerbitans_id','!=','12')->where('pendaftarans.status','1')->count(),
                        );
                array_push($datajml, $arr2);
            }

        return view('exports.range.ujiluar', ['datauji' => $datauji,'datajml' => $datajml,'tglprint' => $tglprint]);
    }
}

<?php

namespace App\Exports\Triwulan;

use App\Models\Pendaftaran;
use App\Models\TamanKendaraan;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use App\Utils;

class jenisExport implements FromView
{
    use Exportable;
    protected $tgl,$kode,$triwulan,$ket;
    private $utils;

    public function __construct(string $tgl, string $kode, string $triwulan, string $ket)
    {
        $this->tgl = $tgl;
        $this->kode = $kode;
        $this->ket = $ket;
        $this->triwulan = $triwulan;
        $this->utils = new Utils();
    }

    public function view(): View
    {
        $tglcetak = date('Y-m-d', strtotime($this->tgl));
        $tglcreate = date_create($this->tgl);
        $bulan = date_format($tglcreate, "m");
        $tahun = date_format($tglcreate, "Y");
        $tglprint = $this->utils->bulan($bulan).' '.$tahun;
        switch ($this->triwulan) {
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
        $tglprint = $this->triwulan . ' ' . $tahun;
        $data = array();
        foreach ($range as $bulan) {
            if($bulan == 1){
                $kwbusblm = TamanKendaraan::whereMonth('tanggal', '12')->whereYear('tanggal', (int)$tahun-1)->orderBy('tanggal','DESC')->first();
            }else{
                $kwbusblm = TamanKendaraan::whereMonth('tanggal', $bulan)->whereYear('tanggal', $tahun)->orderBy('tanggal','DESC')->first();
            }
            $kwbu = TamanKendaraan::whereMonth('tanggal', $bulan)->whereYear('tanggal', $tahun)->first();
            if($kwbu){
                $kwbu = $kwbu->total;
            }else{
                $kwbu = '';
            }
            if($kwbusblm){
                $kwbusblm = $kwbusblm->total;
            }else{
                $kwbusblm = '';
            }

            $date = $this->utils->bulan($bulan);
            $arr = array(
                'bulan'  => $date,
                'kwbusblm' => $kwbusblm,
                'kwbu' => $kwbu,
                'mobil1' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'MOBIL PENUMPANG SEDAN')->count(),
                'mobil2' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'MOBIL PENUMPANG BUKAN SEDAN')->count(),
                'mobil3' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'MOBIL BUS KECIL')->count(),
                'mobil4' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'MOBIL BUS SEDANG')->count(),
                'mobil5' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'MOBIL BUS BESAR')->count(),
                'mobil6' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'MOBIL BUS MAXI')->count(),
                'mobil7' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'MOBIL BUS GANDENG')->count(),
                'mobil8' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'MOBIL BUS TEMPEL')->count(),
                'mobil9' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'MOBIL BUS TINGKAT')->count(),
                'mobil10' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'PICK UP')->count(),
                'mobil11' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'DOUBLE CABIN')->count(),
                'mobil12' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'LIGHT TRUCK')->count(),
                'mobil13' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'DUMP TRUCK')->count(),
                'mobil14' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'LOST BAK')->count(),
                'mobil15' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'CAR CARRIER')->count(),
                'mobil16' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'PICK UP BOX')->count(),
                'mobil17' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'PICK UP RANGKA')->count(),
                'mobil18' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'LIGHT TRUCK BOX')->count(),
                'mobil19' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'BLIND VAN')->count(),
                'mobil20' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'DELIVERY VAN')->count(),
                'mobil21' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'MOBIL TANGKI')->count(),
                'mobil22' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'MOBIL PENARIK')->count(),
                'mobil23' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'KERETA GANDENG BAK TERBUKA')->count(),
                'mobil24' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'KERETA GANDENG BAK TERTUTUP')->count(),
                'mobil25' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'KERETA GANDENG TANGKI')->count(),
                'mobil26' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'KERETA TEMPELAN BAK TERBUKA')->count(),
                'mobil27' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'KERETA TEMPELAN BAK TERTUTUP')->count(),
                'mobil28' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'KERETA TEMPELAN TANGKI')->count(),
                'mobil29' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN BARANG BAK MUATAN TERBUKA')->count(),
                'mobil30' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN BARANG BAK MUATAN TERTUTUP')->count(),
                'mobil31' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN PENUMPANG')->count(),
                'mobil32' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN BARANG TANGKI')->count(),
                'mobil33' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'AMBULANCE')->count(),
                'mobil34' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'DAMKAR')->count(),
                'mobil35' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'ARM ROLL')->count(),
                'mobil36' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'DEREK')->count(),
                'mobil37' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'FLAT DECK')->count(),
                'mobil38' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'MIXER')->count(),
                'mobil39' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$this->kode)->where('model', 'CONCRETEPUMP')->count(),
            );
            array_push($data, $arr);
        };
        return view('exports.triwulan.jenis', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data, 'ket' => $this->ket]);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Exports\Harian\KendaraanExport;
use App\Exports\Bulanan\jenisExport;
use App\Exports\Bulanan\KartuExport;
use App\Exports\Bulanan\pelayananExport;
use App\Exports\Triwulan\jenisExport as jenisTExport;
use App\Exports\Triwulan\KartuExport as KartuTExport;
use App\Exports\Triwulan\pelayananExport as pelayananTExport;

class LaporanExportsController extends Controller
{

    public function HarianKendaraan($tgl)
    {
        return (new KendaraanExport($tgl))->download('LAPORAN RINCIAN KENDARAAN UJI PERIODE '.$tgl.'.xlsx');
    }

    public function KartuBulanan($tgl)
    {
        return (new KartuExport($tgl))->download('LAPORAN BULANAN PEMAKAIN SMART CARD.xlsx');
    }

    public function PelayananBulanan($tgl)
    {
        return (new pelayananExport($tgl))->download('LAPORAN BULANAN PENGUJIAN KENDARAAN BERMOTOR.xlsx');
    }

    public function JenisKendaraanBulanan($tgl)
    {
        $kode = str_replace("/", "", request()->k);
        if($kode != '' || !empty($kode)){
            $kode = $kode;
        }else{
            $kode = '0';
        }
        switch ($kode) {
            case 1:
                $ket = 'UJI PERTAMA';
                break;
            case 2:
                $ket = 'UJI BERKALA';
                break;
            case 5:
                $ket = 'NUMPANG UJI MASUK';
                break;
            case 6:
                $ket = 'MUTASI MASUK';
                break;
            case 8:
                $ket = 'RUBAH BENTUK';
                break;
            case 9:
                $ket = 'NUMPANG UJI KELUAR';
                break;
            case 10:
                $ket = 'MUTASI KELUAR';
                break;
        }
        return (new jenisExport($tgl,$kode,$ket))->download('LAPORAN BULANAN PENGUJIAN KENDARAAN BERMOTOR'.$ket.'.xlsx');
    }

    public function KartuTriwulan($tgl)
    {
        if(request()->t != '' || !empty(request()->t)){
            $triwulan = request()->t;
        }else{
            $triwulan = '0';
        }
        return (new KartuTExport($tgl,$triwulan))->download('LAPORAN BULANAN PEMAKAIN SMART CARD.xlsx');
    }

    public function PelayananTriwulan($tgl)
    {
        $triwulan = str_replace("/", "", request()->t);
        if($triwulan != '' || !empty($triwulan)){
            $triwulan = $triwulan;
        }else{
            $triwulan = '0';
        }
        return (new pelayananTExport($tgl,$triwulan))->download('LAPORAN BULANAN PENGUJIAN KENDARAAN BERMOTOR.xlsx');
    }

    public function JenisKendaraanTriwulan($tgl)
    {
        $kode = str_replace("/", "", request()->k);
        $triwulan = str_replace("/", "", request()->t);
        if($kode != '' || !empty($kode)){
            $kode = $kode;
        }else{
            $kode = '0';
        }
        if($triwulan != '' || !empty($triwulan)){
            $triwulan = $triwulan;
        }else{
            $triwulan = '0';
        }

        switch ($kode) {
            case 1:
                $ket = 'UJI PERTAMA';
                break;
            case 2:
                $ket = 'UJI BERKALA';
                break;
            case 5:
                $ket = 'NUMPANG UJI MASUK';
                break;
            case 6:
                $ket = 'MUTASI MASUK';
                break;
            case 8:
                $ket = 'RUBAH BENTUK';
                break;
            case 9:
                $ket = 'NUMPANG UJI KELUAR';
                break;
            case 10:
                $ket = 'MUTASI KELUAR';
                break;
        }
        return (new jenisTExport($tgl,$triwulan,$kode,$ket))->download('LAPORAN TRIWULAN JENIS KENDARAAN PENGUJIAN KENDARAAN BERMOTOR '.$ket.'.xlsx');
    }
}
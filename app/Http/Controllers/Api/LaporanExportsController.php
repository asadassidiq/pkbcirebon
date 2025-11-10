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
        return (new jenisExport($tgl))->download('LAPORAN BULANAN PENGUJIAN KENDARAAN BERMOTOR.xlsx');
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
        if(request()->t != '' || !empty(request()->t)){
            $triwulan = request()->t;
        }else{
            $triwulan = '0';
        }
        return (new pelayananTExport($tgl,$triwulan))->download('LAPORAN BULANAN PENGUJIAN KENDARAAN BERMOTOR.xlsx');
    }

    public function JenisKendaraanTriwulan($tgl)
    {
        if(request()->t != '' || !empty(request()->t)){
            $triwulan = request()->t;
        }else{
            $triwulan = '0';
        }
        return (new jenisTExport($tgl,$triwulan))->download('LAPORAN BULANAN PENGUJIAN KENDARAAN BERMOTOR.xlsx');
    }
}
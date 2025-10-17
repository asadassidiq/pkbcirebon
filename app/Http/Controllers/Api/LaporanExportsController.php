<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Exports\Harian\KendaraanExport;
use App\Exports\Bulanan\jenisExport;
use App\Exports\Bulanan\kwbuExport;
use App\Exports\Bulanan\pelayananExport;
use App\Exports\Range\custom1Export;
use App\Exports\Range\custom2Export;
use App\Exports\Tahunan\pelayananExportTahunan;
use App\Exports\Tahunan\jenisExportTahunan;
use App\Exports\Tahunan\kwbuExportTahunan;
use App\Exports\Tahunan\tahunanv1Export;
use Maatwebsite\Excel\Facades\Excel;

class LaporanExportsController extends Controller
{

    public function HarianKendaraan($tgl)
    {
        return (new KendaraanExport($tgl))->download('LAPORAN RINCIAN KENDARAAN UJI PERIODE '.$tgl.'.xlsx');
    }

    public function Kwbu($tgl)
    {
        return (new kwbuExport($tgl))->download('Laporan Bulanan KWBU Pelaksanaan Pengujian Kendaraan Bermotor.xlsx');
    }

    public function KwbuTahunan($tgl)
    {
        return (new kwbuExportTahunan($tgl))->download('Laporan Tahunan KWBU Pelaksanaan Pengujian Kendaraan Bermotor.xlsx');
    }

    public function TamankendaraanTahunan($tgl)
    {
        return (new tahunanv1Export($tgl))->download('Laporan Tahunan Taman Kendaraan Pengujian Kendaraan Bermotor.xlsx');
    }

    public function Pelayanan($tgl)
    {
        return (new pelayananExport($tgl))->download('Laporan Bulanan Jenis Pelayanan Pengujian Kendaraan Bermotor.xlsx');
    }

    public function PelayananTahunan($tgl)
    {
        return (new pelayananExportTahunan($tgl))->download('Laporan Tahunan Jenis Pelayanan Pengujian Kendaraan Bermotor.xlsx');
    }

    public function Jenis($tgl)
    {
        return (new jenisExport($tgl))->download('Laporan Bulanan Jenis Kendaraan Pengujian Kendaraan Bermotor Bulanan.xlsx');
    }

    public function JenisTahunan($tgl)
    {
        return (new jenisExportTahunan($tgl))->download('Laporan Tahunan Jenis Kendaraan Pengujian Kendaraan Bermotor Tahunan.xlsx');
    }

    public function custom1()
    {
        if(request()->tgl1 != '' || !empty(request()->tgl1)){
            $tgl1 = request()->tgl1;
        }else{
            $tgl1 = '0';
        }
        if(request()->tgl2 != '' || !empty(request()->tgl2)){
            $tgl2 = request()->tgl2;
        }else{
            $tgl2 = '0';
        }
        if(request()->jenispendaftaran != '' || !empty(request()->jenispendaftaran)){
            $jenispendaftaran = request()->jenispendaftaran;
        }else{
            $jenispendaftaran = '0';
        }
        if(request()->jeniskendaraan != '' || !empty(request()->jeniskendaraan)){
            $jeniskendaraan = request()->jeniskendaraan;
        }else{
            $jeniskendaraan = '0';
        }
        if(request()->peruntukan != '' || !empty(request()->peruntukan)){
            $peruntukan = request()->peruntukan;
        }else{
            $peruntukan = '0';
        }
        if(request()->jbb != '' || !empty(request()->jbb)){
            $jbb = request()->jbb;
        }else{
            $jbb = '0';
        }
        if (request()->kota != '' || !empty(request()->kota)) {
            $kota =  request()->kota;
        }else{
            $kota= '0';
        }
        if (request()->kec != '' || !empty(request()->kec)) {
            $kec = request()->kec;
        }else{
            $kec = '0';
        }
        if (request()->kel != '' || !empty(request()->kel) || !is_null(request()->kel)) {
            $kel = request()->kel;
        }else{
            $kel = '0';
        }

        return (new custom1Export($tgl1,$tgl2,$jenispendaftaran,$jeniskendaraan,$peruntukan,$jbb,$kota,$kec,$kel))->download('Laporan Kendaraan Bermotor.xlsx');
    }

    public function custom2()
    {
        if(request()->tgl1 != '' || !empty(request()->tgl1)){
            $tgl1 = request()->tgl1;
        }else{
            $tgl1 = '0';
        }
        if(request()->tgl2 != '' || !empty(request()->tgl2)){
            $tgl2 = request()->tgl2;
        }else{
            $tgl2 = '0';
        }
        if(request()->jenispendaftaran != '' || !empty(request()->jenispendaftaran)){
            $jenispendaftaran = request()->jenispendaftaran;
        }else{
            $jenispendaftaran = '0';
        }
        if(request()->jeniskendaraan != '' || !empty(request()->jeniskendaraan)){
            $jeniskendaraan = request()->jeniskendaraan;
        }else{
            $jeniskendaraan = '0';
        }
        if(request()->peruntukan != '' || !empty(request()->peruntukan)){
            $peruntukan = request()->peruntukan;
        }else{
            $peruntukan = '0';
        }
        if(request()->jbb != '' || !empty(request()->jbb)){
            $jbb = request()->jbb;
        }else{
            $jbb = '0';
        }
        if (request()->kota != '' || !empty(request()->kota)) {
            $kota =  request()->kota;
        }else{
            $kota= '0';
        }
        if (request()->kec != '' || !empty(request()->kec)) {
            $kec = request()->kec;
        }else{
            $kec = '0';
        }
        if (request()->kel != '' || !empty(request()->kel) || !is_null(request()->kel)) {
            $kel = request()->kel;
        }else{
            $kel = '0';
        }
        return (new custom2Export($tgl1,$tgl2,$jenispendaftaran,$jeniskendaraan,$peruntukan,$jbb,$kota,$kec,$kel))->download('Laporan Kendaraan Bermotor.xlsx');
    }
}
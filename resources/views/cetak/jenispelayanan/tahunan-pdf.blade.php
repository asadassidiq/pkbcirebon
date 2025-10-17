<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Laporan Pelayanan Tahunan</title>
    <style>
        @page {
            size: A4;
            size: landscape;
            margin: 0.2cm 0.5cm 0.5cm 0.5cm;
        }

        body {
            font-family: Arial, sans-serif;
            font-size: 10pt;
            margin: 0;
            padding: 0;
            line-height: 1;
        }

        header {
            /* position: fixed; */
            top: 0cm;
            left: 0;
            right: 0;
            height: 2cm;
            text-align: center;
            font-size: 14px;
        }

        footer {
            position: fixed;
            bottom: 0.5cm;
            left: 0;
            right: 0;
            height: 2cm;
            /* text-align: center; */
            font-size: 12px;
            /* line-height: 1.4; */
            /* border-top: 1px solid #000; */
        }

        .content {
            padding-top: 1cm;
        }
        
        .line-wrapper {
            margin: 0 0px;
        }

        .line-thin {
            border-top: 1px solid black;
        }

        .line-thick {
            border-top: 5px solid black;
            margin-top: 3px; /* Ini memberi jarak antara garis tipis dan tebal */
        }

        .page-break {
            page-break-after: always;
        }
        

        .p{
            /* font-size: 12px; */
        }

        table.table-bordered {
            width: 100%;
            border-collapse: collapse;
        }

        .table-bordered th,
        .table-bordered td {
            border: 1px solid #000;
            padding: 6px;
            text-align: left;
            vertical-align: top;
        }

        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .text-left { text-align: left; }

    </style>
</head>
<body>
    @php
    function tgl_indo($tanggal){
    $bulan = array (
    1 => 'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
    );
    $pecahkan = explode('-', $tanggal);
    return $pecahkan[2] . ' ' . $bulan[ (int)$pecahkan[1] ] . ' ' . $pecahkan[0];
    }
    @endphp
<header>
    <table style="width: 100%">
        <tr>
            <td style="width: 15%">
                <img style="width: 80px; height: auto;" src="{{ $logokab }}">
            </td>
            <td style="width: 85%" class="text-center">
                <h3 class="text-center" style="margin:0;padding:0">PEMERINTAH KABUPATEN MIMIKA</h3>
                <h3 class="text-center" style="margin:0;padding:0"><b>DINAS PERHUBUNGAN</b></h3>
                <h2 class="text-center" style="margin:0;padding:0"><b>UPT PENGUJIAN KENDARAAN BERMOTOR</b></h2>
                <p class="text-center" style="margin:0;padding:0">Jl. Mahkota Jalur 1 Kel.Timika Jaya Kec.Mimika Baru</p>
                <p class="text-center" style="margin:0;padding:0">Telp.0901-323630, Email: unitpengujikabmmk@yahoo.com, Kode Pos : 99910</p>
            </td>
        </tr>
    </table>
    
    <div class="line-wrapper">
        <div class="line-thin"></div>
        <div class="line-thick"></div>
    </div>
</header>
<div class="content">
    <div class="text-center">
        <h4 style="margin:1;padding:1">Laporan Tahunan Jenis Pelayanan Pengujian Kendaraan Bermotor</h4>
        <h4 style="margin:1;padding:1">Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</h4>
        <h4 style="margin:1;padding:1">Tahun {{ $tglprint }}</h4>
    </div>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col" rowspan="3">No</th>
                <th scope="col" rowspan="3" class="text-center">Tanggal</th>
                <th scope="col" class="text-center" colspan="10">Jenis Pelayanan</th>
                <th scope="col" class="text-center" colspan="2">Keterangan</th>
                <th scope="col" class="text-center" colspan="4">Kartu</th>
            </tr>
            <tr>
                <th scope="col" colspan="5">Pelayanan Admin & Mekanis</th>
                <th scope="col" colspan="2">Pelayanan Administrasi</th>
                <th scope="col" rowspan="2">Jumlah</th>
                <th scope="col" rowspan="2">Uji Ulang</th>
                <th scope="col" rowspan="2">Jumlah Total Pelayanan</th>
                <th scope="col" rowspan="2">Lulus</th>
                <th scope="col" rowspan="2">Tidak</th>
                <th scope="col" rowspan="2">Baru</th>
                <th scope="col" rowspan="2">Lama</th>
                <th scope="col" rowspan="2">Rusak</th>
                <th scope="col" rowspan="2">Hilang</th>
            </tr>
            <tr>
                <th scope="col">Uji Pertama</th>
                <th scope="col">Uji Berkala</th>
                <th scope="col">Numpang Uji Masuk</th>
                <th scope="col">Rubah Bentuk</th>
                <th scope="col">Mutasi Masuk</th>
                <th scope="col">Numpang Uji Keluar</th>
                <th scope="col">Mutasi Keluar</th>
            </tr>
        </thead>
        <tbody>
            @php
            $i=1;$ujipertama=0;$ujiberkala=0;$numasuk=0;$nukeluar=0;
            $rubahbentuk=0;$mutasimasuk=0;$mutasikeluar=0;$jumlah=0;
            $ujiulang=0;$jumlahtotal=0;$lulus=0;$tidaklulus=0;
            $baru=0;$rusak=0;$hilang=0;$lama=0;
            @endphp
            @foreach ($data as $dt)
            <tr>
                <td scope="row">{{ $i }}</td>
                <td class="text-center">{{ $dt['tgl'] }}</td>
                <td class="text-center">{{ $dt['ujipertama'] }}</td>
                <td class="text-center">{{ $dt['ujiberkala'] }}</td>
                <td class="text-center">{{ $dt['numasuk'] }}</td>
                <td class="text-center">{{ $dt['rubahbentuk'] }}</td>
                <td class="text-center">{{ $dt['mutasimasuk'] }}</td>
                <td class="text-center">{{ $dt['nukeluar'] }}</td>
                <td class="text-center">{{ $dt['mutasikeluar'] }}</td>
                <td class="text-center">{{ $dt['jumlah'] }}</td>
                <td class="text-center">{{ $dt['ujiulang'] }}</td>
                <td class="text-center">{{ $dt['jumlahtotal'] }}</td>
                <td class="text-center">{{ $dt['lulus'] }}</td>
                <td class="text-center">{{ $dt['tidaklulus'] }}</td>
                <td class="text-center">{{ $dt['baru'] }}</td>
                <td class="text-center">{{ $dt['lama'] }}</td>
                <td class="text-center">{{ $dt['rusak'] }}</td>
                <td class="text-center">{{ $dt['hilang'] }}</td>
            </tr>
            @php
            $i++;$ujipertama=$ujipertama+$dt['ujipertama'];$ujiberkala=$ujiberkala+$dt['ujiberkala'];$numasuk=$numasuk+$dt['numasuk'];$nukeluar=$nukeluar+$dt['nukeluar'];
            $rubahbentuk=$rubahbentuk+$dt['rubahbentuk'];$mutasimasuk=$mutasimasuk+$dt['mutasimasuk'];$mutasikeluar=$mutasikeluar+$dt['mutasikeluar'];$jumlah=$jumlah+$dt['jumlah'];$ujiulang=$ujiulang+$dt['ujiulang'];$jumlahtotal=$jumlahtotal+$dt['jumlahtotal'];$lulus=$lulus+$dt['lulus'];$tidaklulus=$tidaklulus+$dt['tidaklulus'];
            $baru=$baru+$dt['baru'];$rusak=$rusak+$dt['rusak'];$hilang=$hilang+$dt['hilang'];$lama=$lama+$dt['lama'];
            @endphp
            @endforeach
            <tr>
                <td class="text-center" colspan="2">Total</td>

                <td class="text-center">{{ $ujipertama }}</td>
                <td class="text-center">{{ $ujiberkala }}</td>
                <td class="text-center">{{ $numasuk }}</td>
                <td class="text-center">{{ $rubahbentuk }}</td>
                <td class="text-center">{{ $mutasimasuk }}</td>
                <td class="text-center">{{ $nukeluar }}</td>
                <td class="text-center">{{ $mutasikeluar }}</td>
                <td class="text-center">{{ $jumlah }}</td>
                <td class="text-center">{{ $ujiulang }}</td>
                <td class="text-center">{{ $jumlahtotal }}</td>
                <td class="text-center">{{ $lulus }}</td>
                <td class="text-center">{{ $tidaklulus }}</td>
                <td class="text-center">{{ $baru }}</td>
                <td class="text-center">{{ $lama }}</td>
                <td class="text-center">{{ $rusak }}</td>
                <td class="text-center">{{ $hilang }}</td>
            </tr>
        </tbody>
    </table>
    <div class="page-break"> </div>

    <div class="text-center">
        <h4 style="margin:1;padding:1">Tabel Jenis Pelayanan Administrasi & Mekanis</h4>
        <h4 style="margin:1;padding:1">Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</h4>
        <h4 style="margin:1;padding:1">Tahun {{ $tglprint }}</h4>
    </div>

    <br>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col" rowspan="2">No</th>
                <th scope="col" rowspan="2" class="text-center">Tanggal</th>
                <th scope="col" class="text-center" colspan="6">Pelayanan Admin & Mekanis</th>
                <th scope="col" class="text-center" colspan="2">Keterangan</th>
            </tr>
            <tr>
                <th scope="col">Uji Pertama</th>
                <th scope="col">Uji Berkala</th>
                <th scope="col">Numpang Uji Masuk</th>
                <th scope="col">Rubah Bentuk</th>
                <th scope="col">Mutasi Masuk</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Lulus</th>
                <th scope="col">Tidak</th>
            </tr>
        </thead>
        <tbody>
            @php
            $i=1;$ujipertama=0;$ujiberkala=0;$numasuk=0;$rubahbentuk=0;$mutasimasuk=0;$jumlah=0;$lulus=0;$tidaklulus=0;$ujipertama1=0;$ujiberkala1=0;$numasuk1=0;$rubahbentuk1=0;$mutasimasuk1=0;$jumlah1=0;$lulus1=0;$tidaklulus1=0;
            @endphp
            @foreach ($data1 as $dt)
            <tr>
                <td scope="row">{{ $i }}</td>
                <td class="text-center">{{ $dt['tgl'] }}</td>
                <td class="text-center">{{ $dt['ujipertama'] }}</td>
                <td class="text-center">{{ $dt['ujiberkala'] }}</td>
                <td class="text-center">{{ $dt['numasuk'] }}</td>
                <td class="text-center">{{ $dt['rubahbentuk'] }}</td>
                <td class="text-center">{{ $dt['mutasimasuk'] }}</td>
                <td class="text-center">{{ $dt['jumlah'] }}</td>
                <td class="text-center">{{ $dt['lulus'] }}</td>
                <td class="text-center">{{ $dt['tidaklulus'] }}</td>
            </tr>
            @php
            $i++;$ujipertama=$ujipertama+$dt['ujipertama'];$ujiberkala=$ujiberkala+$dt['ujiberkala'];$numasuk=$numasuk+$dt['numasuk'];$rubahbentuk=$rubahbentuk+$dt['rubahbentuk'];$mutasimasuk=$mutasimasuk+$dt['mutasimasuk'];$jumlah=$jumlah+$dt['jumlah'];$lulus=$lulus+$dt['lulus'];$tidaklulus=$tidaklulus+$dt['tidaklulus'];
            @endphp
            @endforeach
            @php
            if($ujipertama == 0){
            $ujipertama1 = 0;
            }else{
            $ujipertama1= round(((int)$ujipertama/(int)$jumlah)*100,2);
            }
            if($ujiberkala == 0){
            $ujiberkala1 = 0;
            }else{
            $ujiberkala1= round(((int)$ujiberkala/(int)$jumlah)*100,2);
            }
            if($numasuk == 0){
            $numasuk1 = 0;
            }else{
            $numasuk1= round(((int)$numasuk/(int)$jumlah)*100,2);
            }
            if($rubahbentuk == 0){
            $rubahbentuk1 = 0;
            }else{
            $rubahbentuk1 = round(((int)$rubahbentuk/(int)$jumlah)*100,2);
            }
            if($mutasimasuk == 0){
            $mutasimasuk1 = 0;
            }else{
            $mutasimasuk1 = round(((int)$mutasimasuk/(int)$jumlah)*100,2);
            }
            if($lulus == 0){
            $lulus1 = 0;
            }else{
            $lulus1 = round(((int)$lulus/(int)$jumlah)*100,2);
            }
            if($tidaklulus == 0){
            $tidaklulus1 = 0;
            }else{
            $tidaklulus1 = round(((int)$tidaklulus/(int)$jumlah)*100,2);
            }
            @endphp
            <tr>
                <td class="text-center" colspan="2"><b>Total</b></td>
                <td class="text-center">{{ $ujipertama }}</td>
                <td class="text-center">{{ $ujiberkala }}</td>
                <td class="text-center">{{ $numasuk }}</td>
                <td class="text-center">{{ $rubahbentuk }}</td>
                <td class="text-center">{{ $mutasimasuk }}</td>
                <td class="text-center">{{ $jumlah }}</td>
                <td class="text-center">{{ $lulus }}</td>
                <td class="text-center">{{ $tidaklulus }}</td>
            </tr>
            <tr>
                <td class="text-center" colspan="2"><b>Total</b></td>
                <td class="text-center">{{ $ujipertama1 }} %</td>
                <td class="text-center">{{ $ujiberkala1 }} %</td>
                <td class="text-center">{{ $numasuk1 }} %</td>
                <td class="text-center">{{ $rubahbentuk1 }} %</td>
                <td class="text-center">{{ $mutasimasuk1 }} %</td>
                <td class="text-center"></td>
                <td class="text-center">{{ $lulus1 }} %</td>
                <td class="text-center">{{ $tidaklulus1 }} %</td>
            </tr>
        </tbody>
    </table>

    <div class="page-break"> </div>

    <div class="text-center">
        <h4 style="margin:1;padding:1">Tabel Jenis Pelayanan Administrasi</h4>
        <h4 style="margin:1;padding:1">Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</h4>
        <h4 style="margin:1;padding:1">Tahun {{ $tglprint }}</h4>
    </div>
    <br>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col" rowspan="2" class="text-center">No</th>
                <th scope="col" rowspan="2" class="text-center">Tanggal</th>
                <th scope="col" class="text-center" colspan="3">Pelayanan Administrasi</th>
            </tr>
            <tr>
                <th scope="col" class="text-center">Numpang Uji Keluar</th>
                <th scope="col" class="text-center">Mutasi Keluar</th>
                <th scope="col" class="text-center">Jumlah</th>
            </tr>
        </thead>
        <tbody>
            @php
            $i=1;$nukeluar=0;$mutasikeluar=0;$jumlah=0;$nukeluar1=0;$mutasikeluar1=0;;
            @endphp
            @foreach ($data2 as $dt)
            <tr>
                <td class="text-center" scope="row">{{ $i }}</td>
                <td class="text-center">{{ $dt['tgl'] }}</td>
                <td class="text-center">{{ $dt['nukeluar'] }}</td>
                <td class="text-center">{{ $dt['mutasikeluar'] }}</td>
                <td class="text-center">{{ $dt['jumlah'] }}</td>
            </tr>
            @php
            $i++;$nukeluar=$nukeluar+$dt['nukeluar'];$mutasikeluar=$mutasikeluar+$dt['mutasikeluar'];$jumlah=$jumlah+$dt['jumlah'];
            @endphp
            @endforeach
            <tr>
                <td colspan="2" class="text-center"><b>Total</b></td>
                <td class="text-center">{{ $nukeluar }}</td>
                <td class="text-center">{{ $mutasikeluar }}</td>
                <td class="text-center">{{ $jumlah }}</td>
            </tr>
        </tbody>
    </table>

    <div class="page-break"> </div>

    <div class="text-center">
        <h4 style="margin:1;padding:1">Tabel Efektifitas Hasil Kelulusan Uji untuk Uji Ulang</h4>
        <h4 style="margin:1;padding:1">Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</h4>
        <h4 style="margin:1;padding:1">Tahun {{ $tglprint }}</h4>
    </div>
    <br>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col" rowspan="2" class="text-center">No</th>
                <th scope="col" rowspan="2" class="text-center">Tanggal</th>
                <th scope="col" rowspan="2">Uji Ulang</th>
                <th scope="col" class="text-center" colspan="2">Keterangan</th>
                <th scope="col" rowspan="2">Jumlah</th>
            </tr>
            <tr>
                <th scope="col" class="text-center">Lulus</th>
                <th scope="col" class="text-center">Tidak Lulus</th>
            </tr>
        </thead>
        <tbody>
            @php
            $i=1;$lulus=0;$tidaklulus=0;$jumlah=0;$lulus2=0;$tidaklulus2=0;;
            @endphp
            @foreach ($data3 as $dt)
            <tr>
                <td class="text-center" scope="row">{{ $i }}</td>
                <td class="text-center">{{ $dt['tgl'] }}</td>
                <td class="text-center">{{ $dt['jumlah'] }}</td>
                <td class="text-center">{{ $dt['lulus'] }}</td>
                <td class="text-center">{{ $dt['tidaklulus'] }}</td>
                <td class="text-center">{{ $dt['jumlah'] }}</td>
            </tr>
            @php
            $i++;$lulus=$lulus+$dt['lulus'];$tidaklulus=$tidaklulus+$dt['tidaklulus'];$jumlah=$jumlah+$dt['jumlah'];
            @endphp
            @endforeach
            <tr>
                <td colspan="2" class="text-center"><b>Total</b></td>
                <td class="text-center">{{ $jumlah }}</td>
                <td class="text-center">{{ $lulus }}</td>
                <td class="text-center">{{ $tidaklulus }}</td>
                <td class="text-center">{{ $jumlah }}</td>
            </tr>
        </tbody>
    </table>
</div>

</body>
</html>

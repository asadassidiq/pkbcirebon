<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Laporan Bulanan Pelayanan</title>
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
            padding-top: 0.4cm;
            width: 100%;
        }

        table {
            width: 100%;
            table-layout: auto;
            font-size: 8pt; /* Smaller font size for better fitting */
        }

        @media print {
            table {
            max-width: 100%;
            overflow-x: hidden;
            }
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
@include('cetak.layouts.header')
<div class="content">
    <h3 style="margin:1;padding:1;text-align:center">LAPORAN BULANAN PENGUJIAN KENDARAAN BERMOTOR</h3>
    <h3 style="margin:1;padding:1;text-align:center">MENURUT JENIS PELAYANAN</h3>
    <h3 style="margin:1;padding:1;text-align:center">BULAN {{ $tglprint }}</h3>
    <table class="table table-bordered ">
        <thead>
            <tr>
                <th scope="col" rowspan="3">NO</th>
                <th scope="col" rowspan="3">TANGGAL</th>
                <th scope="col" colspan="3">JENIS PELAYANAN</th>
                <th scope="col" colspan="2">HASIL UJI</th>
                <th scope="col" rowspan="3">KET</th>
            </tr>
            <tr>
                <th colspan="5">PELAYANAN ADMINISTRASI & TEKNIK</th>
                <th colspan="2">PELAYANAN ADMINISTRASI</th>
                <th rowspan="2">UJI ULANG</th>
                <th rowspan="2">LULUS</th>
                <th rowspan="2">TIDAK LULUS</th>
            </tr>
            <tr>
                <th>UJI PERTAMA</th>
                <th>UJI BERKALA</th>
                <th>NUMPANG UJI MASUK</th>
                <th>MUTASI MASUK</th>
                <th>RUBAH BENTUK</th>
                <th>NUMPANG UJI KELUAR</th>
                <th>MUTASI KELUAR</th>
            </tr>
        </thead>
        <tbody>
            @php $i=1;
            $ujipertama = 0;
            $ujiberkala = 0;
            $numasuk = 0;
            $mutasimasuk = 0;
            $rubahbentuk = 0;
            $nukeluar = 0;
            $mutasikeluar = 0;
            $ujiulang = 0;
            $lulus = 0;
            $tidaklulus = 0;
            @endphp
            @foreach ($kendaraan as $data) 
            <tr>
                <th scope="row">{{ $i }}</th>
                <td>{{ $data->ujipertama }}</td>
                <td>{{ $data->ujiberkala }}</td>
                <td>{{ $data->numasuk }}</td>
                <td>{{ $data->mutasimasuk }}</td>
                <td>{{ $data->rubahbentuk }}</td>
                <td>{{ $data->nukeluar }}</td>
                <td>{{ $data->mutasikeluar }}</td>
                <td>{{ $data->ujiulang }}</td>
                <td>{{ $data->lulus }}</td>
                <td>{{ $data->tidaklulus }}</td>
            </tr>
            @php $i++;
            $ujipertama += $data->ujipertama;
            $ujiberkala += $data->ujiberkala;
            $numasuk += $data->numasuk;
            $mutasimasuk += $data->mutasimasuk;
            $rubahbentuk += $data->rubahbentuk;
            $nukeluar += $data->nukeluar;
            $mutasikeluar += $data->mutasikeluar;
            $ujiulang += $data->ujiulang;
            $lulus += $data->lulus;
            $tidaklulus += $data->tidaklulus;
            @endphp
            @endforeach
            <tr>
                <th scope="row" colspan="2">TOTAL</th>
                <td>{{ $ujipertama }}</td>
                <td>{{ $ujiberkala }}</td>
                <td>{{ $numasuk }}</td>
                <td>{{ $mutasimasuk }}</td>
                <td>{{ $rubahbentuk }}</td>
                <td>{{ $nukeluar }}</td>
                <td>{{ $mutasikeluar }}</td>
                <td>{{ $ujiulang }}</td>
                <td>{{ $lulus }}</td>
                <td>{{ $tidaklulus }}</td>
            </tr>
        </tbody>
    </table>
    <div style="position: absolute; right: 0; bottom: 2cm; width: 300px;">
        <p style="margin: 0;padding: 0;text-align: center">Mengetahui,</p>
        <p style="margin: 0;padding: 0;text-align: center">Kepala UPT Pengujian Kendaraan Bermotor</p>
        <p style="margin: 0;padding: 0;text-align: center">Dinas Perhubungan Kota Cirebon</p>
        <br><br><br>
        <p style="margin: 0;padding: 0;text-align: center"><u><b>{{ $ttd['name'] }}</u></b></p>
        <p style="margin: 0;padding: 0;text-align: center">NIP. {{ $ttd['pangkat'] }}</p>
        <p style="margin: 0;padding: 0;text-align: center">NIP. {{ $ttd['nip'] }}</p>
    </div>
</div>

</body>
</html>

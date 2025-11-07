<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Laporan Bulanan Smart Card</title>
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
            padding-top: 0.2cm;
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
    <h3 style="margin:1;padding:1">LAPORAN BULANAN PEMAKAIN SMART CARD</h3>
    <h3 style="margin:1;padding:1">UPT PKB DISHUB KOTA CIREBON</h3>
    <h3 style="margin:1;padding:1">TRIWULAN KE {{ $tglprint }}</h3>
    <table class="table table-bordered ">
        <thead>
            <tr>
                <th scope="col" rowspan="2" style="text-align: center">NO</th>
                <th scope="col" rowspan="2" style="text-align: center">BULAN</th>
                <th scope="col" colspan="4" style="text-align: center">STATUS KARTU</th>
                <th scope="col" rowspan="2" style="text-align: center">KET</th>
            </tr>
            <tr>
                <th style="text-align: center">BARU</th>
                <th style="text-align: center">PERPANJANGAN</th>
                <th style="text-align: center">RUSAK</th>
                <th style="text-align: center">HILANG</th>
            </tr>
        </thead>
        <tbody>
            @php $i=1;
            $baru=0;
            $perpanjangan=0;
            $rusak=0;
            $hilang=0;
            @endphp
            @foreach ($kendaraan as $data) 
            <tr>
                <th scope="row">{{ $i }}</th>
                <td>{{ $data['bulan'] }}</td>
                <td>{{ $data['baru'] }}</td>
                <td>{{ $data['perpanjangan'] }}</td>
                <td>{{ $data['rusak'] }}</td>
                <td>{{ $data['hilang'] }}</td>
                <td></td>
            </tr>
            @php $i++;
            $baru += $data['baru'];
            $perpanjangan += $data['perpanjangan'];
            $rusak += $data['rusak'];
            $hilang += $data['hilang'];
            @endphp
            @endforeach
            <tr>
                <td colspan="2">TOTAL</td>
                <td>{{ $baru }}</td>
                <td>{{ $perpanjangan }}</td>
                <td>{{ $rusak }}</td>
                <td>{{ $hilang }}</td>
                <td></td>
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

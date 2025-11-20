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
    <h3 style="margin:1;padding:1;text-align:center">LAPORAN BULANAN {{ $ket }} KENDARAAN BERMOTOR</h3>
    <h3 style="margin:1;padding:1;text-align:center">MENURUT JENIS KENDARAAN</h3>
    <h3 style="margin:1;padding:1;text-align:center">UPT PKB DISHUB KOTA CIREBON</h3>
    <h3 style="margin:1;padding:1;text-align:center">BULAN {{ $tglprint }}</h3>
    <table class="table table-bordered ">
        <thead>
            <tr>
                <th scope="col" rowspan="2">NO</th>
                <th scope="col" rowspan="2">TANGGAL</th>
                <th scope="col" rowspan="2">KBWU TH LALU</th>
                <th scope="col" rowspan="2">KBWU YG DI UJI</th>
                <th scope="col" colspan="2">MOBIL PENUMPANG</th>
                <th scope="col" colspan="7">MOBIL BUS</th>
                <th scope="col" colspan="6">MOBIL BARANG BAK TERBUKA</th>
                <th scope="col" colspan="5">MOBIL BARANG BAK TERTUTUP</th>
                <th scope="col" rowspan="2">MOBIL TANGKI</th>
                <th scope="col" rowspan="2">MOBIL PENARIK</th>
                <th scope="col" rowspan="2">KERETA GANDENG BAK TERBUKA</th>
                <th scope="col" rowspan="2">KERETA GANDENG BAK TERTUTUP</th>
                <th scope="col" rowspan="2">KERETA GANDENG TANKI</th>
                <th scope="col" rowspan="2">KERETA TEMPELAN BAK TERBUKA</th>
                <th scope="col" rowspan="2">KERETA TEMPELAN BAK TERTUTUP</th>
                <th scope="col" rowspan="2">KERETA TEMPELAN TANGKI</th>
                <th scope="col" rowspan="2">KB Roda Tiga Angkutan Barang Bak Muatan Terbuka</th>
                <th scope="col" rowspan="2">KB Roda Tiga Angkutan Barang Bak Muatan Tertutup</th>
                <th scope="col" rowspan="2">KB Roda Tiga Angkutan Penumpang</th>
                <th scope="col" rowspan="2">KB Roda Tiga Angkutan Barang Tangki</th>
                <th scope="col" colspan="7">KENDARAAN KHUSUS</th>
                <th scope="col" rowspan="2">KET</th>
            </tr>
            <tr>
                <th>SEDAN</th>
                <th>BUKAN SEDAN</th>
                <th>B.KECIL</th>
                <th>B.SEDANG</th>
                <th>B.BESAR</th>
                <th>B.MAXI</th>
                <th>B.GANDENG</th>
                <th>B.TEMPEL</th>
                <th>B.TINGKAT</th>
                <th>P.UP</th>
                <th>DOUBLE CABIN</th>
                <th>L.TRUCK</th>
                <th>DUMP TRUCK</th>
                <th>LOST BAK</th>
                <th>CAR CARIER </th>
                <th>P.UP BOX</th>
                <th>P.UP RANGKA</th>
                <th>L.TRUCK BOX</th>
                <th>BLIND VAN</th>
                <th>DELIVERY VAN</th>
                <th>AMBULANCE</th>
                <th>DAMKAR</th>
                <th>ARM ROLL</th>
                <th>DEREK</th>
                <th>FLAT DECK</th>
                <th>MIXER</th>
                <th>CONCREED PUMP</th>
            </tr>
        </thead>
        <tbody>
            @php $i=1;
            $kwbu = 0;
            $kwbusblm = 0;
            $mobil1 = 0;$mobil2 = 0;$mobil3 = 0;$mobil4 = 0;$mobil5 = 0;$mobil6 = 0;$mobil7 = 0;
            $mobil8 = 0;$mobil9 = 0;$mobil10 = 0;$mobil11 = 0;$mobil12 = 0;$mobil13 = 0;$mobil14 = 0;
            $mobil15 = 0;$mobil16 = 0;$mobil17 = 0;$mobil18 = 0;$mobil19 = 0;$mobil20 = 0;$mobil21 = 0;
            $mobil22 = 0;$mobil23 = 0;$mobil24 = 0;$mobil25 = 0;$mobil26 = 0;$mobil27 = 0;$mobil28 = 0;
            $mobil29 = 0;$mobil30 = 0;$mobil31 = 0;$mobil32 = 0;$mobil33 = 0;$mobil34 = 0;$mobil35 = 0;
            $mobil36 = 0;$mobil37 = 0;$mobil38 = 0;$mobil39 = 0;
            @endphp
            @foreach ($kendaraan as $data) 
            <tr>
                <th scope="row">{{ $i }}</th>
                <td>{{ $data['tgl'] }}</td>
                <td>{{ $data['kwbusblm'] }}</td>
                <td>{{ $data['kwbu'] }}</td>
                <td>{{ $data['mobil1'] }}</td>
                <td>{{ $data['mobil2'] }}</td>
                <td>{{ $data['mobil3'] }}</td>
                <td>{{ $data['mobil4'] }}</td>
                <td>{{ $data['mobil5'] }}</td>
                <td>{{ $data['mobil6'] }}</td>
                <td>{{ $data['mobil7'] }}</td>
                <td>{{ $data['mobil8'] }}</td>
                <td>{{ $data['mobil9'] }}</td>
                <td>{{ $data['mobil10'] }}</td>
                <td>{{ $data['mobil11'] }}</td>
                <td>{{ $data['mobil12'] }}</td>
                <td>{{ $data['mobil13'] }}</td>
                <td>{{ $data['mobil14'] }}</td>
                <td>{{ $data['mobil15'] }}</td>
                <td>{{ $data['mobil16'] }}</td>
                <td>{{ $data['mobil17'] }}</td>
                <td>{{ $data['mobil18'] }}</td>
                <td>{{ $data['mobil19'] }}</td>
                <td>{{ $data['mobil20'] }}</td>
                <td>{{ $data['mobil21'] }}</td>
                <td>{{ $data['mobil22'] }}</td>
                <td>{{ $data['mobil23'] }}</td>
                <td>{{ $data['mobil24'] }}</td>
                <td>{{ $data['mobil25'] }}</td>
                <td>{{ $data['mobil26'] }}</td>
                <td>{{ $data['mobil27'] }}</td>
                <td>{{ $data['mobil28'] }}</td>
                <td>{{ $data['mobil29'] }}</td>
                <td>{{ $data['mobil30'] }}</td>
                <td>{{ $data['mobil31'] }}</td>
                <td>{{ $data['mobil32'] }}</td>
                <td>{{ $data['mobil33'] }}</td>
                <td>{{ $data['mobil34'] }}</td>
                <td>{{ $data['mobil35'] }}</td>
                <td>{{ $data['mobil36'] }}</td>
                <td>{{ $data['mobil37'] }}</td>
                <td>{{ $data['mobil38'] }}</td>
                <td>{{ $data['mobil39'] }}</td>
            </tr>
            @php $i++;
            $kwbu += $data->kwbu;
            $kwbusblm += $data->kwbusblm;
            $mobil1 += $data['mobil1'];$mobil2 += $data['mobil2'];$mobil3 += $data['mobil3'];$mobil4 += $data['mobil4'];$mobil5 += $data['mobil5'];$mobil6 += $data['mobil6'];$mobil7 += $data['mobil7'];$mobil8 += $data['mobil8'];$mobil9 += $data['mobil9'];$mobil10 += $data['mobil10'];$mobil11 += $data['mobil11'];$mobil12 += $data['mobil12'];$mobil13 += $data['mobil13'];$mobil14 += $data['mobil14'];$mobil15 += $data['mobil15'];$mobil16 += $data['mobil16'];$mobil17 += $data['mobil17'];$mobil18 += $data['mobil18'];$mobil19 += $data['mobil19'];$mobil20 += $data['mobil20'];$mobil21 += $data['mobil21'];$mobil22 += $data['mobil22'];$mobil23 += $data['mobil23'];$mobil24 += $data['mobil24'];$mobil25 += $data['mobil25'];$mobil26 += $data['mobil26'];$mobil27 += $data['mobil27'];$mobil28 += $data['mobil28'];$mobil29 += $data['mobil29'];$mobil30 += $data['mobil30'];$mobil31 += $data['mobil31'];$mobil32 += $data['mobil32'];$mobil33 += $data['mobil33'];$mobil34 += $data['mobil34'];$mobil35 += $data['mobil35'];$mobil36 += $data['mobil36'];$mobil37 += $data['mobil37'];$mobil38 += $data['mobil38'];$mobil39 += $data['mobil39'];
            @endphp
            @endforeach
            <tr>
                <td>-</td>
                <td>{{ $kwbu }}</td>
                <td>{{ $mobil1 }}</td>
                <td>{{ $mobil2 }}</td>
                <td>{{ $mobil3 }}</td>
                <td>{{ $mobil4 }}</td>
                <td>{{ $mobil5 }}</td>
                <td>{{ $mobil6 }}</td>
                <td>{{ $mobil7 }}</td>
                <td>{{ $mobil8 }}</td>
                <td>{{ $mobil9 }}</td>
                <td>{{ $mobil10 }}</td>
                <td>{{ $mobil11 }}</td>
                <td>{{ $mobil12 }}</td>
                <td>{{ $mobil13 }}</td>
                <td>{{ $mobil14 }}</td>
                <td>{{ $mobil15 }}</td>
                <td>{{ $mobil16 }}</td>
                <td>{{ $mobil17 }}</td>
                <td>{{ $mobil18 }}</td>
                <td>{{ $mobil19 }}</td>
                <td>{{ $mobil20 }}</td>
                <td>{{ $mobil21 }}</td>
                <td>{{ $mobil22 }}</td>
                <td>{{ $mobil23 }}</td>
                <td>{{ $mobil24 }}</td>
                <td>{{ $mobil25 }}</td>
                <td>{{ $mobil26 }}</td>
                <td>{{ $mobil27 }}</td>
                <td>{{ $mobil28 }}</td>
                <td>{{ $mobil29 }}</td>
                <td>{{ $mobil30 }}</td>
                <td>{{ $mobil31 }}</td>
                <td>{{ $mobil32 }}</td>
                <td>{{ $mobil33 }}</td>
                <td>{{ $mobil34 }}</td>
                <td>{{ $mobil35 }}</td>
                <td>{{ $mobil36 }}</td>
                <td>{{ $mobil37 }}</td>
                <td>{{ $mobil38 }}</td>
                <td>{{ $mobil39 }}</td>
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

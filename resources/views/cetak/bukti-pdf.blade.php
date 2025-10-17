<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>BUKTI PESANAN PENDAFTARAN UJI</title>
    <style>
        @page {
            size: 10cm 10cm;
            margin: 0.3cm;
            border: 1px solid black;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            font-size: 8pt;
            margin: 0;
            padding: 0;
            line-height: 1.2;
        }

        .header {
            /* position: fixed; */
            top: 0.5cm;
            left: 0;
            right: 0;
            height: 0cm;
            text-align: center;
            font-size: 10px;
        }
        table {
            line-height: 0.5;
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
            padding-bottom: 0cm;
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

        .page-border {
            width: 9cm;
            height: 9cm;
            margin: auto;
            padding: 0.1cm;
            border: 3px solid black;
            box-sizing: border-box;
        }

        .p{
            /* font-size: 12px; */
        }
        th, td {
        padding: 0px;
        }

        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .text-left { text-align: left; }
    </style>
</head>
<body onload="window.print();">
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
<div class="page-border">
    <div class="header">
        <table style="width: 100%;line-height:1">
            <tr>
                <td style="width: 15%" class="text-center">
                    <img style="width: 30px; height: auto;" src="{{ $logokab }}">
                </td>
                <td style="width: 70%" class="text-center">
                    <p class="text-center" style="margin:0;padding:0"><b>PEMERINTAH {{ env('APP_KAB').' '.env('APP_WILAYAH') }}</b></p>
                    <p class="text-center" style="margin:0;padding:0"><b>DINAS PERHUBUNGAN</b></p>
                    <p class="text-center" style="margin:0;padding:0"><b>UPT PENGUJIAN KENDARAAN BERMOTOR</b></p>
                </td>
                <td style="width: 15%" class="text-center">
                    <img style="width: 30px; height: auto;" src="{{ $logodishub }}">
                </td>
            </tr>
        </table>
        
        <div class="line-wrapper">
            <div class="line-thin"></div>
            <div class="line-thick"></div>
        </div>
    </div>
    <div class="content">
        <div class="text-center">
            <h3><u>BUKTI PESANAN PENDAFTARAN UJI</u></h3>
        </div>

        <div>
            <table style="width: 100%;">
                <tr>
                    <td style="width: 23%">
                        <p>No Uji</p>
                        <p>No Kendaraan</p>
                        <p>Nama</p>
                        <p>Alamat</p>
                    </td>
                    <td style="width: 5%">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                    </td>
                    <td style="width: 72%">
                        <p>{{ $data['nouji'] }}</p>
                        <p>{{ $data['noregistrasikendaraan'] }}</p>
                        <p>{{ $data['nama'] }}</p>
                        <p>{{ $data['alamat'] }}</p>
                    </td>
                </tr>
            </table>

            <p style="margin: 0;padding:0;"><b>NB : KEHADIRAN MAXSIMAL UNTUK HARI SENIN - KAMIS JAM 11:00, dan JUM'AT JAM 08:30</b></p>
            <p style="margin: 0;padding:0"><b>Layanan Informasi:</b></p>
            <p style="margin: 0;padding:0"><b>Tlp : (0274) 375 077</b></p>
            <p style="margin: 0;padding:0"><b>WA : 089-618-552-524,081-229-351-711</b></p>

            <table style="width: 100%;line-height:1;margin-top:0.5cm">
                <tr>
                    <td style="width: 25%"><b>TANGGAL UJI</b></td>
                    <td style="width: 35%"></td>
                    <td style="width: 40%" class="text-center">
                        MIMIKA,{{ tgl_indo($data['tglpendaftaran']) }}
                    </td>
                </tr>
                <tr><td colspan="3" style="height: 0.53cm;"></td></tr>
                <tr style="margin-top: 1cm">
                    <td class="text-center" style="font-size:12px;width: 25%; border: solid 2px #000;">
                        <b>{{ tgl_indo($data['tglpendaftaran']) }}</b>
                    </td>
                    <td style="width: 35%"></td>
                    <td style="width: 40%; text-align: center;">
                        PETUGAS
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>

</body>
</html>

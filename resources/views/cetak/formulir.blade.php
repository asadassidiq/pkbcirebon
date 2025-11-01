<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dokumen Numpang Uji Keluar</title>
    <style>
        @page {
            size: A4;
            margin: 1cm 1cm 0.5cm 1cm;
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
            top: 1cm;
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
            padding-top: 0.6cm;
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
    function namaHariIndo($tanggal = null) {
        $tanggal = $tanggal ?? date('Y-m-d');
        $hariInggris = date('l', strtotime($tanggal));
        $hariIndo = [
            'Sunday'    => 'Minggu',
            'Monday'    => 'Senin',
            'Tuesday'   => 'Selasa',
            'Wednesday' => 'Rabu',
            'Thursday'  => 'Kamis',
            'Friday'    => 'Jumat',
            'Saturday'  => 'Sabtu',
        ];
        return $hariIndo[$hariInggris] ?? 'Tidak diketahui';
    }
    @endphp
    @include('cetak.layouts.header')
{{-- 
<footer>
    Dicetak oleh Sistem Informasi - {{ date('d-m-Y') }}
</footer> --}}

<div class="content">
    <div class="text-right">
        <h4 style="display: inline-block; border: 1px solid black; padding: 4px 8px; margin: 0;">
            FORM MODEL PKB-3
        </h4>
    </div>

    <h4 class="text-center">FORMULIR HASIL PENGUKURAN DAN PENIMBANGAN KENDARAAN BERMOTOR</h4>
    <p class="text-center">NO.{{ $kendaraan->noantrian }} <span style="margin-left: 20px"> TANGGAL {{ tgl_indo($kendaraan->tglpendaftaran) }}</span></p>
    <p>Pada Hari : {{ namaHariIndo($kendaraan->tglpendaftaran) }} Tanggal {{ tgl_indo($kendaraan->tglpendaftaran) }} Pukul : ......... WIB telah dilakukan pemeriksaan terhadap kendaraan</p>
    
    <table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; width: 100%; text-align:center;">
        <tr>
            <td>Kolom 1 - Baris 1</td>
            <td>Kolom 2 - Baris 1</td>
        </tr>
        <tr>
            <td>Kolom 1 - Baris 2</td>
            <td rowspan="2">Kolom 2 (Gabung 2 baris)</td>
        </tr>
        <tr>
            <td>Kolom 1 - Baris 3</td>
        </tr>
    </table>
</div>

</body>
</html>

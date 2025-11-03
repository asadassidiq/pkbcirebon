<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dokumen Mutasi Uji Keluar</title>
    <style>
        @page {
            size: A4;
            margin: 0.5cm 1cm 1cm 2cm;
        }

        body {
            font-family: Arial, sans-serif;
            font-size: 10pt;
            margin: 0;
            padding: 0;
            line-height: 1.2;
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
            padding-top: 0.4cm;
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
        th, td {
        padding: 0px;
        }

        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .text-left { text-align: left; }
        
        .custom-checkbox {
            width: 18px;
            height: 18px;
            border: 2px solid #000;
            background-color: #fff;
            display: inline-block;
            position: relative;
            text-align: center;
            vertical-align: middle;
            line-height: 20px;
            font-size: 20px;
            font-family: DejaVu Sans, sans-serif; /* DejaVu Sans didukung dompdf */
        }

        .custom-checkbox.checked::after {
            content: '✔';
            color: #000;
        }
        
        .watermark {
            position: fixed;
            top: 35%;
            left: 40%;
            transform: translate(-50%, -50%);
            opacity: 0.08; /* transparansi */
            z-index: -1; /* di belakang teks */
            width: 40%; /* ukuran bisa diatur */
        }
        
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

@include('cetak.layouts.header')
<div class="content">
    <img src="{{ $logodishub }}" class="watermark" alt="Watermark">

    <table style="width: 100%">
        <tr>
            <td style="width: 10%">
                <p>Nomor</p>
                <p>Lampiran</p>
                <p>Perihal</p>
            </td>
            <td style="width: 3%">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
            </td>
            <td style="width: 55%">
                <p>{{ $kendaraan['nosurat'] }}</p>
                <p>1 (Satu) Berkas</p>
                <p> <u><b>MUTASI KELUAR KENDARAAN</b></u></p>
            </td>
            <td style="width: 37%">
                <p class="text-center">Cirebon, <span id="date"><?php echo tgl_indo($kendaraan->tglpendaftaran) ?></span></p>
                <p>Kepada :</p>
                <p style="margin: left:-28px">Yth. {{ $kendaraan->kepada }}</p>
                <p>Di - </p>
                <p><span>{{ $kendaraan->tujuan }}</span></p>
            </td>
        </tr>
    </table>

    <div>
        <p>Berdasarkan permohonan pemilik / pemegang / penguasa kendaraan bermotor dengan data sebagai berikut : </p>
        <table style="width: 100%;margin-left:20px">
            <tr>
                <td style="width: 27%">
                    <p>1.  Nomor Kendaraan</p>
                    <p>2.  Merk Kendaraan</p>
                    <p>3.  Tipe Kendaraan</p>
                    <p>4.  Tahun Pembuatan</p>
                    <p>5.  No Rangka</p>
                    <p>6.  No Mesin</p>
                    <p>7.  Nomor Uji Berkala</p>
                    <p>8.  Jenis Kendaraan</p>
                    <p>9.  Status</p>
                    <p>10. Warna</p>
                    <p>11. Nama Pemilik</p>
                    <p>12. Alamat Pemilik</p>
                </td>
                <td style="width: 5%">
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                </td>
                <td style="width: 68%">
                    <p>{{ $kendaraan->noregistrasikendaraan }}</p>
                    <p>{{ $kendaraan->merek }} </p>
                    <p>{{ $kendaraan->tipe }} </p>
                    <p>{{ $kendaraan->thpembuatan }}</p>
                    <p>{{ $kendaraan->norangka }}</p>
                    <p>{{ $kendaraan->nomesin }}</p>
                    <p>{{ $kendaraan->nouji }}</p>
                    <p>{{ $kendaraan->subjenis }}</p>
                    {{-- <p>{{ $kendaraan->status }}</p> --}}
                    <p>-</p>
                    <p>{{ $kendaraan->warna }}</p>
                    <p>{{ $kendaraan->nama }}</p>
                    <p>{{ $kendaraan->alamat }}</p>
                </td>
            </tr>
        </table>

        <p>Kami tidak keberatan kendaraan tersebut di atas dipindahkan / dimutasikan ke :</p>
        <h4 class="text-center">{{ $kendaraan->tujuan }}</h4>
        <p>Kartu Induk Pemeriksaan dan Pengujian Kendaraan Bermotor tersebut, dilampirkan bersama surat ini.</p>
        <p>Demikian agar maklum.</p>

        <table style="width: 100%;line-height:1">
            <tr>
                <td style="width: 45%"></td>
                <td style="width: 55%" class="text-center">
                    <p>a.n. KEPALA DINAS PERHUBUNGAN {{ env('APP_KAB') .' '.env('APP_WILAYAH')}} </p>
                    <p>Kepala UPT Pengujian Kendaraan Bermotor</p>
                    <p>Kota Cirebon</p>
                    <br><br><br><br><br>
                    <p style="margin: 0;padding: 0"><u><b>{{ $ttd['name'] }}</u></b></p>
                    <p style="margin: 0;padding: 0">NIP. {{ $ttd['pangkat'] }}</p>
                    <p style="margin: 0;padding: 0">NIP. {{ $ttd['nip'] }}</p>
                </td>
            </tr>
        </table>
        <br><br>
        <p style="margin: 0;padding:0">Tembusan disampaikan kepada Yth :</p>
        <ol style="margin: 0;padding:0;margin-left: 50px">
            <li>Kepala Dinas Perhubungan Provinsi Jawa Barat,</li>
            <li>Kepala Kepolisian Resort Cirebon Kota,</li>
            <li>Arsip.</li>
        </ol>
    </div>
</div>


</body>
</html>

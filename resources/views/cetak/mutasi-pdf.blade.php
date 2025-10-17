<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dokumen Mutasi Uji Keluar</title>
    <style>
        @page {
            size: A4;
            margin: 0.5cm 2cm 0.5cm 2cm;
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
            padding-top: 1.5cm;
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

    <table style="width: 100%">
        <tr>
            <td style="width: 10%">
                <p>Nomor</p>
                <p>Sifat</p>
                <p>Lampiran</p>
                <p>Hal</p>
            </td>
            <td style="width: 3%">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
            </td>
            <td style="width: 42%">
                <p>{{ $kendaraan['nosurat'] }}</p>
                <p>Biasa</p>
                <p>-</p>
                <p> Mutasi Kendaraan</p>
            </td>
            <td style="width: 50%">
                <p class="text-center">Gangga, <span id="date"><?php echo tgl_indo($kendaraan->tglpendaftaran) ?></span></p>
                <p>Kepada :</p>
                <p><span>Yth. {{ $kendaraan->kepada }}</span></p>
                <p><span>{{ $kendaraan->tujuan }}</span></p>
            </td>
        </tr>
    </table>

    <div>
        <p>Dengan ini disampaikan bahwa kendaraan tersebut dibawah ini :</p>
        <table style="width: 100%;margin-left:20px">
            <tr>
                <td style="width: 27%">
                    <p>1. No. Pemeriksaan</p>
                    <p>2. No. Kendaraan</p>
                    <p>3. Nama Pemilik</p>
                    <p>4. Alamat Pemilik</p>
                    <p>5. Jenis / Sifat</p>
                    <p>6. Merk / Type</p>
                    <p>7. Tahun Pembuatan</p>
                    <p>8. No. Rangka Landasan</p>
                    <p>9. No. Mesin Penggerak</p>
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
                </td>
                <td style="width: 68%">
                    <p>{{ $kendaraan->nouji }}</p>
                    <p>{{ $kendaraan->noregistrasikendaraan }}</p>
                    <p>{{ $kendaraan->nama }}</p>
                    <p>{{ $kendaraan->alamat }}</p>
                    <p>{{ $kendaraan->subjenis }} // {{ $kendaraan->peruntukan }}</p>
                    <p>{{ $kendaraan->merek }} / {{ $kendaraan->tipe }} </p>
                    <p>{{ $kendaraan->thpembuatan }}</p>
                    <p>{{ $kendaraan->norangka }}</p>
                    <p>{{ $kendaraan->nomesin }}</p>
                </td>
            </tr>
        </table>

        <p style="margin: 0;padding:0">Sesuai pemeriksaan yang dilakukan maka kendaraan tersebut dinyatakan
memenuhi syarat untuk dimutasikan ke {{ $kendaraan->tujuan }}, dengan pemilik baru :</p>

        <table style="width: 100%;margin-left:20px">
            <tr>
                <td style="width: 27%">
                    <p>Nama</p>
                    <p>Alamat</p>
                    <p>Nomor Kendaraan</p>
                </td>
                <td style="width: 5%">
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                </td>
                <td style="width: 68%">
                    <p>{{ $kendaraan->namapemilikbaru }}</p>
                    <p>{{ $kendaraan->alamatpemilikbaru }}</p>
                    <p>{{ $kendaraan->nokendaraanbaru }}</p>
                </td>
            </tr>
        </table>

        <p style="margin: 0;padding:0">Demikian surat keterangan ini disampaikan untuk mendapatkan penyelesaian lebih
lanjut dan terimakasih.</p>

        <table style="width: 100%;line-height:1">
            <tr>
                <td style="width: 60%"></td>
                <td style="width: 40%" class="text-center">
                    <p>A/n, KEPALA DINAS PERHUBUNGAN</p>
                    <p>{{ env('APP_KAB') .' '.env('APP_WILAYAH')}}</p>
                    <p>PENGUJIAN KENDARAAN BERMOTOR</p>
                    <p>Penguji</p>
                    <br><br><br><br><br>
                    <p><u><b>{{ $ttd['name'] }}</u></b></p>
                    <p>NIP. {{ $ttd['nip'] }}</p>
                </td>
            </tr>
        </table>
        <br><br>
        <p style="margin: 0;padding:0">Tembusan disampaikan kepada Yth :</p>
        <ol style="margin: 0;padding:0;margin-left: 50px">
            <li>KADISHUB Kab. Lombok Utara ( sebagai laporan )</li>
        </ol>
    </div>
</div>


</body>
</html>

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
    @endphp
    @include('cetak.layouts.header')
{{-- 
<footer>
    Dicetak oleh Sistem Informasi - {{ date('d-m-Y') }}
</footer> --}}

<div class="content">
    <table style="width: 100%">
        <tr>
            <td style="width: 10%">
                <p>Nomor</p>
                <p>Lampiran</p>
                <p>Perhal</p>
            </td>
            <td style="width: 3%">
                <p>:</p>
                <p>:</p>
            </td>
            <td style="width: 55%">
                <p>{{ $kendaraan['nosurat'] }}</p>
                <p>-</p>
                <p><u>IJIN NUMPANG UJI BERKALA</u></p>
            </td>
            <td style="width: 37%">
                <p>Kepada :</p>
                <p><span>Yth. {{ $kendaraan->kepada }}</span></p>
                <p>Di - </p>
                <p style="margin-left: 22px"><span>{{ $kendaraan->tujuan }}</span></p>
            </td>
        </tr>
    </table>

    <div>
        <p>Berdasarkan permohonan pemilik / pemegang / penguasa kendaraan bermotor dengan data sebagai berikut : </p>
        <table style="width: 100%;margin-left:20px">
            <tr>
                <td style="width: 20%">
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
                </td>
                <td style="width: 75%">
                    <p>{{ $kendaraan->noregistrasikendaraan }}</p>
                    <p>{{ $kendaraan->merek }} </p>
                    <p>{{ $kendaraan->tipe }} </p>
                    <p>{{ $kendaraan->thpembuatan }}</p>
                    <p>{{ $kendaraan->norangka }}</p>
                    <p>{{ $kendaraan->nomesin }}</p>
                    <p>{{ $kendaraan->nouji }}</p>
                    <p>{{ $kendaraan->subjenis }}</p>
                    <p>{{ $kendaraan->status }}</p>
                    <p>{{ $kendaraan->warna }}</p>
                    <p>{{ $kendaraan->nama }}</p>
                    <p>{{ $kendaraan->alamat }}</p>
                </td>
            </tr>
        </table>

        <p>Kami tidak keberatan kendaraan tersebut untuk melaksanakan uji berkala di :</p>
        <h4 class="text-center">{{ $kendaraan->tujuan }}</h4>
        <p>Untuk 1 (satu) kali periode pengujian dan surat keterangan hasil uji berkala tersebut dikirimkan kepada kami.</p>


        <p>Demikian agar maklum.</p>

        <table style="width: 100%;margin-left:20px">
            <tr>
                <td style="width: 45%" class="text-center">
                    <div style="
                        border: 2px solid darkred;
                        padding: 8px 16px;
                        display: inline-block;
                        text-align: center;
                        font-family: 'Times New Roman', serif;
                        font-size: 16px;
                        line-height: 1.4;
                    ">
                        Surat Ijin Numpang Uji ini<br>
                        berlaku 14 hari setelah<br>
                        <b>tanggal ditetapkan</b>
                    </div>
                </td>
                <td style="width: 55%" class="text-center">
                    {{-- <p class="text-center">Gangga, <span id="date"><?php echo tgl_indo($kendaraan->tglpendaftaran) ?></span></p> --}}
                    <p>a.n. KEPALA DINAS PERHUBUNGAN {{ env('APP_KAB') .' '.env('APP_WILAYAH')}} </p>
                    <p>Kepala UPT Pengujian Kendaraan Bermotor</p>
                    <p>Kota Cirebon</p>
                    <br><br><br><br><br>
                    <p><u><b>{{ $ttd['name'] }}</u></b></p>
                    <p>NIP. {{ $ttd['pangkat'] }}</p>
                    <p>NIP. {{ $ttd['nip'] }}</p>
                </td>
            </tr>
        </table>
    </div>
</div>

</body>
</html>

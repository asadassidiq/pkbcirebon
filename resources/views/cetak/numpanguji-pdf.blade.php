<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dokumen Numpang Uji Keluar</title>
    <style>
        @page {
            size: A4;
            margin: 0.5cm 1cm 0cm 2cm;
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
            top: 38%;
            left: 40%;
            transform: translate(-50%, -50%);
            opacity: 0.08; /* transparansi */
            z-index: -1; /* di belakang teks */
            width: 40%; /* ukuran bisa diatur */
        }

        .tabel-ketentuan {
            width: 100%;
            border-collapse: collapse;
            font-size: 10pt;
            margin: 0;
        }

        .tabel-ketentuan td {
            border: 1px solid #000;
            padding: 8px 10px;
            text-align: left;
            vertical-align: top;
            line-height: 1;
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
    {{-- <img src="{{ $logodishub }}" class="watermark" alt="Watermark"> --}}

    <table style="width: 100%;margin-bottom :0px;padding-bottom:0px;">
        <tr>
            <td style="width: 10%;vertical-align: top">
                <p>Nomor</p>
                <p>Klasifikasi</p>
                <p>Lampiran</p>
                <p>Hal</p>
                <p style="color: white">test</p>
                <br>
                <p>Yth. </p>
                <br>
                <p>Di Tempat</p>
            </td>
            <td style="width: 3%;vertical-align: top">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
            </td>
            <td style="width: 55%;vertical-align: top">
                <p>{{ $kendaraan['nosurat'] }}</p>
                <p>Biasa</p>
                <p>-</p>
                <p>Keterangan Pengantar Pengujian</p>
                <p>Kendaraan Bermotor di Daerah Lain</p>
                <br>
                <p>{{ $kendaraan->kepada }}</p>
                <p><span>{{ $kendaraan->tujuan }}</span></p>
                <br>
            </td>
            <td style="width: 37%;vertical-align: top">
                <p class="text-center">Cirebon, <span id="date"><?php echo tgl_indo($kendaraan->tglpendaftaran) ?></span></p>
            </td>
        </tr>
    </table>

    <p style="margin-top:-5px;"><span style="margin-left: 20px">Berdasarkan</span> permohonan pemilik/kuasa kendaraan bermotor 
        terkait permohonan pengujian kendaraan bermotor di Daerah lain, 
        Bersama ini kami sampaikan data kendaraan bermotor sebagai berikut : </p>
    <table style="width: 100%;margin-left:20px;margin-top:-15px;">
        <tr>
            <td style="width: 27%">
                <p>Nama Pemilik Kendaraan</p>
                <p>Alamat</p>
                <p>Nomor Kendaraan</p>
                <p>Nomor Uji</p>
                <p>Merek/Tipe</p>
                <p>No Rangka</p>
                <p>No Mesin</p>
                <p>Daerah Tujuan</p>
                <p>Waktu Pelaksanaan</p>
                <p>Alasan Numpang Uji</p>
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
            </td>
            <td style="width: 68%">
                <p>{{ $kendaraan->nama }}</p>
                <p>{{ $kendaraan->alamat }}</p>
                <p>{{ $kendaraan->noregistrasikendaraan }}</p>
                <p>{{ $kendaraan->nouji }}</p>
                <p>{{ $kendaraan->merek }}/{{ $kendaraan->tipe }}</p>
                <p>{{ $kendaraan->norangka }}</p>
                <p>{{ $kendaraan->nomesin }}</p>
                <p>{{ $kendaraan->tujuan }}</p>
                <p>{{ $kendaraan->tglpelaksanaan }}</p>
                <p><i>ceklist minimal 1 (satu)</i></p>
            </td>
        </tr>
    </table>
    <table class="tabel-ketentuan" style="margin-top:-15px;">
        <tr>
            <td style="width: 90%">
                Masa berlaku uji berkala telah jatuh tempo sedangkan kendaraan bermotor
                sedang berada di luar daerah domisili pemilik kendaraan;
            </td>
            @if(strpos($kendaraan->alasan, "Masa berlaku uji berkala telah jatuh tempo") !== false)
                <td style="width: 10%;vertical-align: center" class="text-center">
                    <div class="custom-checkbox checked"></div>
                </td>
            @else
                <td style="width: 10%;"></td>
            @endif
        </tr>
        <tr>
            <td style="width: 90%">
                Kendaraan terkena sanksi pelanggaran karena tidak memenuhi persyaratan
                teknis dan laik jalan sehingga harus melakukan kewajiban uji ulang, sebelum
                habis masa berlakunya;
            </td>
            @if(strpos($kendaraan->alasan, "Kendaraan terkena sanksi pelanggaran") !== false)
                <td style="width: 10%;vertical-align: center" class="text-center">
                    <div class="custom-checkbox checked"></div>
                </td>
            @else
                <td style="width: 10%;"></td>
            @endif
        </tr>
        <tr>
            <td style="width: 90%">
                Peralatan uji di unit pelaksana pengujian berkala kendaraan bermotor sesuai
                domisili kendaraan bermotor yang bersangkutan terdaftar sedang dalam
                keadaan rusak atau tidak berfungsi sebagaimana mestinya
            </td>
            @if(strpos($kendaraan->alasan, "sedang dalam keadaan rusak atau tidak berfungsi") !== false)
                <td style="width: 10%;vertical-align: center" class="text-center">
                    <div class="custom-checkbox checked"></div>
                </td>
            @else
                <td style="width: 10%;"></td>
            @endif
        </tr>
        <tr>
            <td style="width: 90%">
                Unit pelaksana pengujian berkala kendaraan bermotor sesuai domisili tidak
                terakreditasi.
            </td>
            @if(strpos($kendaraan->alasan, "domisili tidak terakreditasi") !== false)
                <td style="width: 10%;vertical-align: center" class="text-center">
                    <div class="custom-checkbox checked"></div>
                </td>
            @else
                <td style="width: 10%;"></td>
            @endif
        </tr>
    </table>


    <p><span style="margin-left: 20px">Sehubungan</span> dilakukan Mutasi Uji Kendaraan Bermotor 
    ke Dinas Perhubungan {{ $kendaraan->tujuan }} dengan data kendaraan :</p>

    <p><span style="margin-left: 20px">Sehubungan</span> dengan hal diatas mohon kiranya untuk dapat 
    menerima pelaksanaan uji berkala kendaraan bermotor dimaksud untuk 1 (satu) kali uji. Kemudian 
    hasil uji untuk dapat disampaikan kembali ke Dinas Perbungan {{ env('APP_KAB') }} {{ env('APP_WILAYAH') }} 
    Adapun Surat Pengantar Pengujian Kendaraan Bermotor di Daerah Lain ini berlaku 1 (satu) kali.
    
    <p><span style="margin-left: 20px">Demikian</span> disampaikan, atas perhatian dan perkenaanya diucapkan terima kasih.</p>

    <table style="width: 100%;line-height:1;margin-top:-15px">
        <tr>
            <td style="width: 45%"></td>
            <td style="width: 55%" class="text-center">
                <p>a.n. KEPALA DINAS PERHUBUNGAN {{ env('APP_KAB') .' '.env('APP_WILAYAH')}} </p>
                <p>Kepala UPT Pengujian Kendaraan Bermotor</p>
                <p>Kota Cirebon</p>
                <br><br><br>
                <p style="margin: 0;padding: 0"><u><b>{{ $ttd['name'] }}</u></b></p>
                {{-- <p style="margin: 0;padding: 0">{{ $ttd['pangkat'] }}</p> --}}
                <p style="margin: 0;padding: 0">NIP. {{ $ttd['nip'] }}</p>
            </td>
        </tr>
    </table>
    <br><br>
    <p style="margin-top:-25px">Tembusan disampaikan kepada Yth :</p>
    <ol style="margin: 0;padding:0;margin-left: 50px">
        <li>Kepala Dinas Perhubungan Provinsi Jawa Barat,</li>
        <li>Kepala Balai Pengelola Transportasi Darat Kelas 1 Jawa Barat</li>
        {{-- <li>Kepala Kepolisian Resort Cirebon Kota,</li> --}}
        {{-- <li>Arsip.</li> --}}
    </ol>
</div>


</body>
</html>

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
            top: 38%;
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
    {{-- <img src="{{ $logodishub }}" class="watermark" alt="Watermark"> --}}

    <table style="width: 100%">
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
                <p>Keterangan Mutasi Uji</p>
                <p>Kendaraan Bermotor</p>
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
    @php
        if (!empty($kendaraan->kota))
        {
            $alamat = $kendaraan->alamat.', '.$kendaraan->kelurahan.', '.$kendaraan->kecamatan.', '.$kendaraan->kota;
        }else{
            $alamat = $kendaraan->alamat;            
        }
        $alamat1 = '';
        $alamat2 = '';
        $batas = 50;
        if (strlen($alamat) <= $batas) {
            $alamat1 = $alamat;
        } else {

            // Cari posisi spasi terakhir sebelum batas
            $posisiPecah = strrpos(substr($alamat, 0, $batas), ' ');

            // Jika tidak ditemukan spasi → potong langsung di batas
            if ($posisiPecah === false) {
                $posisiPecah = $batas;
            }

            // Pecah alamat
            $alamat1 = substr($alamat, 0, $posisiPecah);
            $alamat2 = ltrim(substr($alamat, $posisiPecah)); // hilangkan spasi awal
        }
    @endphp
    <div style="margin-top:-20px">
        <p><span style="margin-left: 20px;">Berdasarkan</span> permohonan pemilik/kuasa kendaraan bermotor terkait permohonan Mutasi Uji
        Kendaraan Bermotor, Bersama ini kami sampaikan data kendaraan bermotor sebagai berikut : </p>
        <table style="width: 100%;margin-left:20px">
            <tr>
                <td style="width: 27%">
                    <p>Nama Pemilik Kendaraan</p>
                    <p>Alamat</p>
                    @if(!empty($alamat2))
                    <p style="visibility: hidden">-</p>
                    @endif
                    <p>Nomor Kendaraan</p>
                    <p>Nomor Uji</p>
                    <p>Merek/Tipe</p>
                    <p>No Rangka</p>
                    <p>Jenis Kendaraan</p>
                    <p>Status</p>
                </td>
                <td style="width: 5%">
                    <p>:</p>
                    <p>:</p>
                    @if(!empty($alamat2))
                    <p style="visibility: hidden">-</p>
                    @endif
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                </td>
                <td style="width: 68%">
                    <p>{{ $kendaraan->nama }}</p>
                    <p>{{ $alamat1 }}</p>
                    @if(!empty($alamat2))
                    <p>{{ $alamat2 }}</p>
                    @endif
                    <p>{{ $kendaraan->noregistrasikendaraan }}</p>
                    <p>{{ $kendaraan->nouji }}</p>
                    <p>{{ $kendaraan->merek }}/{{ $kendaraan->tipe }}</p>
                    <p>{{ $kendaraan->norangka }}</p>
                    <p>{{ $kendaraan->jenis }}</p>
                    <p>{{ $kendaraan->peruntukan }}</p>
                </td>
            </tr>
        </table>
        <p><span style="margin-left: 20px">Untuk</span> dilakukan Mutasi Uji Kendaraan Bermotor 
        ke Dinas Perhubungan {{ $kendaraan->tujuan }} dengan data kendaraan :</p>
        @php
            $alamat = $kendaraan->alamatpemilikbaru;
            $alamat1 = '';
            $alamat2 = '';
            $batas = 50;
            if (strlen($alamat) <= $batas) {
            $alamat1 = $alamat;
            } else {

                // Cari posisi spasi terakhir sebelum batas
                $posisiPecah = strrpos(substr($alamat, 0, $batas), ' ');

                // Jika tidak ditemukan spasi → potong langsung di batas
                if ($posisiPecah === false) {
                    $posisiPecah = $batas;
                }

                // Pecah alamat
                $alamat1 = substr($alamat, 0, $posisiPecah);
                $alamat2 = ltrim(substr($alamat, $posisiPecah)); // hilangkan spasi awal
            }
        @endphp
        <table style="width: 100%;margin-left:20px">
            <tr>
                <td style="width: 27%">
                    <p>Nama Pemilik Kendaraan</p>
                    <p>Alamat</p>
                    @if(!empty($alamat2))
                    <p style="visibility: hidden">-</p>
                    @endif
                    <p>Nomor Kendaraan</p>
                </td>
                <td style="width: 5%">
                    <p>:</p>
                    <p>:</p>
                    @if(!empty($alamat2))
                    <p style="visibility: hidden">-</p>
                    @endif
                    <p>:</p>
                </td>
                <td style="width: 68%">
                    <p>{{ $kendaraan->nokendaraanbaru }}</p>
                    <p>{{ $alamat1 }}</p>
                    @if(!empty($alamat2))
                    <p>{{ $alamat2 }}</p>
                    @endif
                    <p>{{ $kendaraan->namapemilikbaru }}</p>
                </td>
            </tr>
        </table>

        <p><span style="margin-left: 20px">Sehubungan</span> dengan hal diatas mohon kiranya untuk dapat 
        menerima mutasi uji kendaraan bermotor sebagaimana dimaksud. Bersama ini terlampir berkas 
        kendaraan sebagai berikut :</p>
        <ol>
            <li>Kartu Induk Kendaraan Bermotor dan</li>
            <li>(Berkas pendukung lainnya)</li>
        </ol>
        <p><span style="margin-left: 20px">Demikian</span> disampaikan, atas perhatian dan perkenaanya diucapkan terima kasih.</p>

        <table style="width: 100%;line-height:1">
            <tr>
                
            <td style="width: 50%">
                <p style="margin-top:155px">Tembusan disampaikan kepada Yth :</p>
                <ol style="margin: 0;padding:0;margin-left: 10px">
                    <li>Kepala Dinas Perhubungan Provinsi Jawa Barat,</li>
                    <li>Kepala Balai Pengelola Transportasi Darat Kelas 1 Jawa Barat</li>
                </ol>
            </td>
            <td style="width: 50%" class="text-center">
                <p>a.n. KEPALA DINAS PERHUBUNGAN {{ env('APP_KAB') .' '.env('APP_WILAYAH')}} </p>
                <p>Kepala UPT Pengujian Kendaraan Bermotor</p>
                <p>Kota Cirebon</p>
                <img src="{{ $ttdImg }}" alt="TTD" 
                    style="width:4cm; height:auto; margin:0px 0;"><br>
                
                <p style="margin: 0;padding: 0"><u><b>{{ $ttd['name'] }}</u></b></p>
                {{-- <p style="margin: 0;padding: 0">{{ $ttd['pangkat'] }}</p> --}}
                <p style="margin: 0;padding: 0">NIP. {{ $ttd['nip'] }}</p>
            </td>
            </tr>
        </table>
    </div>
</div>


</body>
</html>

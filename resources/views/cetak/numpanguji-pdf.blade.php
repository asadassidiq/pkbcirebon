<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dokumen Numpang Uji Keluar</title>
    <style>
        @page {
            size: A4;
            margin: 1cm 2cm 0.5cm 2cm;
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
            <td style="width: 42%">
                <p>{{ $kendaraan['nosurat'] }}</p>
                <p>-</p>
                <p> Numpang Uji</p>
            </td>
            <td style="width: 50%">
                <p>Kepada :</p>
                <p><span>Yth. {{ $kendaraan->kepada }}</span></p>
                <p>Di - </p>
                <p style="margin-left: 22px"><span>{{ $kendaraan->tujuan }}</span></p>
            </td>
        </tr>
    </table>

    <div>
        <p>Sesuai dengan permohonan pemilik kendaraan bermotor tersebut dibawah ini : </p>
        <table style="width: 100%;margin-left:20px">
            <tr>
                <td style="width: 20%">
                    <p>Nama Pemilik</p>
                    <p>Alamat Pemilik</p>
                    <p>Nomor Kendaraan</p>
                    <p>Merk/Tipe</p>
                    <p>Tahun Pembuatan</p>
                    <p>No Rangka</p>
                    <p>No Mesin</p>
                    <p>Jenis / Sifat</p>
                    <p>Bahan Bakar</p>
                    <p>Nomor Pemeriksaan</p>
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
                <td style="width: 75%">
                    <p>{{ $kendaraan->nama }}</p>
                    <p>{{ $kendaraan->alamat }}</p>
                    <p>{{ $kendaraan->noregistrasikendaraan }}</p>
                    <p>{{ $kendaraan->merek }} / {{ $kendaraan->tipe }} </p>
                    <p>{{ $kendaraan->thpembuatan }}</p>
                    <p>{{ $kendaraan->norangka }}</p>
                    <p>{{ $kendaraan->nomesin }}</p>
                    <p>{{ $kendaraan->subjenis }} / {{ $kendaraan->peruntukan }}</p>
                    <p>{{ $kendaraan->bahanbakar }}</p>
                    <p>{{ $kendaraan->nouji }}</p>
                </td>
            </tr>
        </table>

        <p>Tidak keberatan kendaraan tersebut untuk melaksanakan uji berkala pada dinas perhubungan <span> {{ $kendaraan->tujuan }} </span> dengan ketentuan.</p>
        <p>Setelah diadakan penelitian pada prinsipnya kami tidak keberatan kendaraan wajib uji
tersebut untuk dilaksanakan <span><b><i>Numpang Uji</i></b></span> satu kali pada Dinas Perhubungan {{ $kendaraan->tujuan }} dan hasilnya mohon segera dikirim ke Pengujian Kendaraan Bermotor
Dinas Perhubungan Kab. Lombok Utara</p>

        <p>Demikian Surat ini dibuat untuk dapat dipergunakan sebagaimana mestinya.</p>
        <table style="width: 100%;margin-left:20px">
            <tr>
                <td style="width: 60%"></td>
                <td style="width: 40%" class="text-center">
                    <p class="text-center">Gangga, <span id="date"><?php echo tgl_indo($kendaraan->tglpendaftaran) ?></span></p>
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
    </div>
</div>

</body>
</html>

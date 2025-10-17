<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dokumen Permohonan {{ $kendaraan['keterangan'] }}</title>
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
            padding-top: 0.5cm;
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
<header>
    <table style="width: 100%">
        <tr>
            <td style="width: 8%">
                Perihal
            </td>
            <td style="width: 2%">
                :
            </td>
            <td style="width: 40%">
                <b>Permohonan {{ $kendaraan->keterangan }}</b>
            </td>
            <td style="width: 50%" class="text-left">
                Kepada :
            </td>
        </tr>
        <tr>
            <td style="width: 8%">
            </td>
            <td style="width: 2%">
            </td>
            <td style="width: 40%">
                <b>Kendaraan Bermotor</b>
            </td>
            <td style="width: 50%">
                Yth. Kepala Dinas Perhubungan
            </td>
        </tr>
        <tr>
            <td style="width: 8%">
            </td>
            <td style="width: 2%">
            </td>
            <td style="width: 40%">
            </td>
            <td style="width: 50%">
                {{ ucwords(strtolower(env('APP_KAB').' '.env('APP_WILAYAH'))) }}
            </td>
        </tr>
        <tr>
            <td style="width: 8%">
            </td>
            <td style="width: 2%">
            </td>
            <td style="width: 40%">
            </td>
            <td style="width: 50%">
                di <b>{{ ucwords(strtolower(env('APP_WILAYAH'))) }}</b>
            </td>
        </tr>
    </table>
</header>
<div class="content">
        <table style="width: 100%;">
            <tr>
                <td style="width: 38%">
                    Yang Bertanda tangan dibawah ini saya
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-center">
                </td>        
            </tr>
            <tr>
                <td style="width: 38%">
                    Nama
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-left">
                    {{ $kendaraan->namapemohon }}
                </td>        
            </tr>
            <tr>
                <td style="width: 38%">
                    Alamat
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-left">
                    {{ $kendaraan->alamatpemohon }}
                </td>      
            </tr>
            <tr>
                <td style="width: 38%">
                    No HP
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-left">
                    {{ $kendaraan->notelp }}
                </td>        
            </tr>
        </table>

        <p>Dengan ini mengajukan permohonan pengujian kendaraan bermotor atas kendaraan :</p>

        <table style="width: 100%;">
            <tr>
                <td style="width: 38%">
                    1. Nomor Uji Kendaraan
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-left">
                    {{ $kendaraan->nouji }}
                </td>
            </tr>
            <tr>
                <td style="width: 38%">
                    2. Nomor Registrasi Kendaraan
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-left">
                    {{ $kendaraan->noregistrasikendaraan }}
                </td>
            </tr>
            <tr>
                <td style="width: 38%">
                    3. Nama Pemilik
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-left">
                    {{ $kendaraan->nama }}
                </td>
            </tr>
            <tr>
                <td style="width: 38%">
                    4. Alamat Pemilik
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-left">
                    {{ $kendaraan->alamat }}
                </td>
            </tr>
            <tr>
                <td style="width: 38%">
                    5. Merek/Tipe
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-left">
                    {{ $kendaraan->merek.'/'.$kendaraan->tipe }}
                </td>
            </tr>
            <tr>
                <td style="width: 38%">
                    6. Tahun Pembuatan
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-left">
                    {{ $kendaraan->thpembuatan }}
                </td>
            </tr>
            <tr>
                <td style="width: 38%">
                    7. Nomor Rangka
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-left">
                    {{ $kendaraan->norangka }}
                </td>
            </tr>
            <tr>
                <td style="width: 38%">
                    8. Nomor Mesin
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-left">
                    {{ $kendaraan->nomesin }}
                </td>
            </tr>
            <tr>
                <td style="width: 38%">
                    9. Sifat Penggunaan
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-left">
                    {{ $kendaraan->peruntukan }}
                </td>
            </tr>
            <tr>
                <td style="width: 38%">
                    10. Untuk diuji pada tanggal
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 60%" class="text-left">
                    {{ tgl_indo($kendaraan->tglpendaftaran) }}
                </td>
            </tr>
        </table>
        <p>Untuk Kelengkapan persyaratan pendaftaran, bersama ini kami lampirkan :</p>
        <div style="margin-top: -20px">
            <ol>
				<li>Foto Copy Kartu Uji</li>
				<li>Foto Copy Surat Tanda Nomor Kendaraan Bermotor ( STNK )</li>
				<li>Foto Copy Bukti Pemilik Kendaraan Bermotor ( BPKB )</li>
				<li>Foto Copy Surat Keterangan Fiskal Antar Daerah</li>
				<li>Foto Copy KTP yang ditunjukan untuk mutasi</li>
			</ol>
        </div>

		<p>Demikian permohonan ini kami buat untuk dapat diproses lebih lanjut.</p>

        <table style="width: 100%;">
            <tr>
                <td style="width: 60%"></td>
                <td style="width: 40%" class="text-center">
                    <p>{{ ucwords(strtolower(env('APP_WILAYAH'))) }}, {{ tgl_indo($kendaraan->tglpendaftaran) }}</p>
                    <p>Pemohon</p>
                    <br><br><br><br><br><br>
                    <p style="margin:0px;padding:0px;"><u><b>{{ $kendaraan['namapemohon'] }}</u></b></p>
                </td>
            </tr>
        </table>
    </div>
</div>

</body>
</html>

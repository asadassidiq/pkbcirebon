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
    
    <table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; width: 100%; text-align:left;">
        <tr>
            <td>
                <table style="width: 100%; border: none; border-collapse: collapse;">
                    <tr>
                        <td style="width: 45%; border: none;">MEREK/TIPE/TAHUN</td>
                        <td style="width: 2%; text-align: center; border: none;">=</td>
                        <td style="width: 53%; border: none;">{{ $kendaraan->merek.'/'.$kendaraan->tipe.'/'.$kendaraan->thpembuatan }}</td>
                    </tr>
                    <tr>
                        <td style="border: none;">NO. KENDARAAN</td>
                        <td style="text-align: center; border: none;">=</td>
                        <td style="border: none;">{{ $kendaraan->noregistrasikendaraan }}</td>
                    </tr>
                    <tr>
                        <td style="border: none;">NO. CHASIS/LANDASAN</td>
                        <td style="text-align: center; border: none;">=</td>
                        <td style="border: none;">{{ $kendaraan->norangka }}</td>
                    </tr>
                    <tr>
                        <td style="border: none;">NO. MESIN</td>
                        <td style="text-align: center; border: none;">=</td>
                        <td style="border: none;">{{ $kendaraan->nomesin }}</td>
                    </tr>
                    <tr>
                        <td style="border: none;">JENIS/MACAM</td>
                        <td style="text-align: center; border: none;">=</td>
                        <td style="border: none;">{{ $kendaraan->subjenis }}</td>
                    </tr>
                </table>
            </td>
            <td>
                <table style="width: 100%; border: none; border-collapse: collapse;">
                    <tr>
                        <td style="width: 50%; border: none;">NAMA</td>
                        <td style="width: 2%; text-align: center; border: none;">=</td>
                        <td style="width: 48%; border: none;">{{ $kendaraan->nama }}</td>
                    </tr>
                    <tr>
                        <td style="border: none;">ALAMAT</td>
                        <td style="text-align: center; border: none;">=</td>
                        <td style="border: none;">{{ $kendaraan->alamat }}</td>
                    </tr>
                    <tr>
                        <td style="border: none;">BENGKEL PEMBUAT</td>
                        <td style="text-align: center; border: none;">=</td>
                        <td style="border: none;"></td>
                    </tr>
                    <tr>
                        <td style="border: none;">BAHAN</td>
                        <td style="text-align: center; border: none;">=</td>
                        <td style="border: none;">{{ $kendaraan->bahan }}</td>
                    </tr>
                    <tr>
                        <td style="border: none;">LOKASI PEMERIKSAAN</td>
                        <td style="text-align: center; border: none;">=</td>
                        <td style="border: none;"></td>
                    </tr>
                </table>
        </tr>
        <tr class="text-left">
            <td> 1. DAYA ANGKUT</td>
            <td> 2. DIMENSI</td>
        </tr>
        <tr>
            <td>
                <table cellspacing="0" cellpadding="4" style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                    <td style="width: 50%; border: none;">a. JBB</td>
                    <td style="width: 5%; text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->jbb }} Kg</td>
                </tr>
                <tr>
                    <td style="border: none;">b. BK</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->beratkosong }} Kg</td>
                </tr>
                <tr>
                    <td style="border: none;">c. DA ORANG</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->dayaangkutorang }} Orang</td>
                </tr>
                <tr>
                    <td style="border: none;">d. DA BARANG</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->dayaangkutbarang }} Kg</td>
                </tr>
                <tr>
                    <td style="border: none;">e. JBI</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->jbi }} Kg</td>
                </tr>
                <tr>
                    <td style="border: none;">f. MST</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->mst }} Kg</td>
                </tr>
                <tr>
                    <td style="border: none;">g. KELAS JALAN</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->kelasjalanterendah }}</td>
                </tr>
                </table>
            </td>
            <td rowspan="3">
                <table cellspacing="0" cellpadding="4" style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                    <td colspan="6" style="border: none;">a. Jarak Sumbu</td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;">S1-S2</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->jaraksumbu12 }} cm</td>
                    <td style="border: none;">S4-S5</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->jaraksumbu45 }} cm</td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;">S2-S3</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->jaraksumbu23 }} cm</td>
                    <td style="border: none;">S5-S6</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->jaraksumbu56 }} cm</td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;">S3-S4</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->jaraksumbu34 }} cm</td>
                    <td style="border: none;"></td>
                    <td style="border: none;"></td>
                    <td style="border: none;"></td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;" class="text-left">b. <span style="margin-left: 6px"> P</span></td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->p }} cm</td>
                    <td style="border: none;">b</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->b }} cm</td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;">Q</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->q }} cm</td>
                    <td style="border: none;">b1</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;"> cm</td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;">G</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->g }} cm</td>
                    <td style="border: none;">r</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->r }} cm</td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;">a2</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->a }} cm</td>
                    <td style="border: none;"></td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;"> cm</td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;" class="text-left">c. <span style="margin-left: 6px"> ROH</span></td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->p }} cm</td>
                    <td style="border: none;">FOH</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->b }} cm</td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;" class="text-left">d. <span style="margin-left: 6px"> Panjang</span></td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->p }} cm</td>
                    <td style="border: none;">Lebar</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->b }} cm</td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;">Tinggi</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->b }} cm</td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;" class="text-left">e. <span style="margin-left: 6px"> <u>Tangki</u></span></td>
                    <td style="text-align: center; border: none;"></td>
                    <td style="border: none;">Dom Tangki</td>
                    <td style="border: none;"></td>
                    <td style="text-align: center; border: none;"></td>
                    <td style="border: none;">/td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;">Panjang</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->b }} cm</td>
                    <td style="border: none;">Diameter</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->b }} cm</td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;">Lebar</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->b }} cm</td>
                    <td style="border: none;">Tinggi</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->b }} cm</td>
                </tr>
                <tr class="text-center">
                    <td style="border: none;">Tinggi</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->b }} cm</td>
                </tr>
                </table>
                <table cellspacing="0" cellpadding="4" style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr class="text-left">
                    <td style="border: none;width: 60%;" class="text-left">f. <span style="margin-left: 6px"> <u>Jarak atap lantai</u></span></td>
                    <td style="text-align: center; border: none;width: 5%;">=</td>
                    <td style="border: none;" class="text-right">cm</td>
                </tr>
                <tr class="text-left">
                    <td style="border: none;"><span style="margin-left: 23px">Lebar</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;" class="text-right">cm</td>
                </tr>
                <tr class="text-left">
                    <td style="border: none;"><span style="margin-left: 23px">Jarak antar Tempat duduk</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;" class="text-right">cm</td>
                </tr>
                <tr class="text-left">
                    <td style="border: none;"><span style="margin-left: 22px">Jarak Lorong</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;" class="text-right">cm</td>
                </tr>
                <tr class="text-left">
                    <td style="border: none;"><span style="margin-left: 23px">Lebar Tempat Duduk</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;" class="text-right">cm</td>
                </tr>
                <tr class="text-left">
                    <td style="border: none;"><span style="margin-left: 23px">Tinggi Pijakan</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;" class="text-right">cm</td>
                </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>3. UKURAN BERAT DAN PEMAKAIAN BAN</td>
        </tr>
        <tr>
            <td>

                <table cellspacing="0" cellpadding="4" style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                    <td style="width: 50%; border: none;">a. Berat Sumbu (S1)</td>
                    <td style="width: 5%; text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->beratsumbu1 }} Kg</td>
                </tr>
                <tr>
                    <td style="border: none;">b. Berat Sumbu (S2)</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->beratsumbu2 }} Kg</td>
                </tr>
                <tr>
                    <td style="border: none;">c. Berat Sumbu (S3)</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->beratsumbu3 }} Kg</td>
                </tr>
                <tr>
                    <td style="border: none;">d. Berat Sumbu (S4)</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->beratsumbu4 }} Kg</td>
                </tr>
                <tr>
                    <td style="border: none;">e. Berat Sumbu (S5)</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->bertsumbu5 }} Kg</td>
                </tr>
                <tr>
                    <td style="border: none;">f. Sumbu Tempelan (STP)</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;"></td>
                </tr>
                <tr>
                    <td style="border: none;">g. Ukuran Ban</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->ukuranban }}</td>
                </tr>
                <tr>
                    <td style="border: none;">h. Konfigurasi</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;">{{ $kendaraan->konfigurasisumburoda }}</td>
                </tr>
                <tr>
                    <td style="border: none;">i. Status</td>
                    <td style="text-align: center; border: none;">=</td>
                    <td style="border: none;"></td>
                </tr>
                </table>
            </td>
        </tr>
    </table>
    <table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; width: 100%; text-align:left;">
        <tr>
            <td>
                Hasil Penilaian : 
            </td>
            <td> 
                Lulus
            </td>
            <td> 
                Gagal
            </td>
        </tr>
    </table>
    <table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; width: 100%; text-align: left;">
    <tr>
        <td style="padding: 20px; height: 25px; vertical-align: top;">
        Catatan :<br>
        </td>
    </tr>
    </table>
</div>

</body>
</html>

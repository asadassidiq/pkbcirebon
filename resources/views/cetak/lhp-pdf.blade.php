<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>LEMBAR HASIL PEMERIKSAAN KENDARAAN BERMOTOR</title>
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
            padding-top: 1cm;
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
    <div class="text-center">
        <h3>LEMBAR HASIL PEMERIKSAAN KENDARAAN BERMOTOR</h3>
    </div>
    <table width="100%" border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; font-size: 12px;">
        <!-- IDENTITAS PEMILIK -->
        <tr style="background-color: #f0f0f0; font-weight: bold;">
            <td colspan="4">IDENTITAS PEMILIK</td>
        </tr>
        <tr>
            <td width="20%">NAMA</td>
            <td width="30%">: {{ $data->nama }}</td>
            <td width="20%">NO IDENTITAS</td>
            <td width="30%">: {{ $data->noidentitaspemilik }}</td>
        </tr>
        <tr>
            <td>ALAMAT</td>
            <td colspan="3">: {{ $data->alamat }}</td>
        </tr>

        <!-- DATA KENDARAAN -->
        <tr style="background-color: #f0f0f0; font-weight: bold;">
            <td colspan="4">DATA KENDARAAN</td>
        </tr>
        <tr>
            <td>NO. SRUT</td>
            <td>: {{ $data->nosertifikatreg }}</td>
            <td>TGL. SRUT</td>
            <td>: {{ date_format(date_create($data->tglsertifikatreg),'d-m-Y') }}</td>
        </tr>
        <tr>
            <td>MEREK</td>
            <td>: {{ $data->merek }}</td>
            <td>TIPE</td>
            <td>: {{ $data->tipe }}</td>
        </tr>
        <tr>
            <td>TAHUN PEMBUATAN</td>
            <td>: {{ $data->thpembuatan }}</td>
            <td>ISI SILINDER</td>
            <td>: {{ $data->isisilinder }} cc</td>
        </tr>
        <tr>
            <td>DAYA MOTOR</td>
            <td>: {{ $data->dayamotorpenggerak }} kW</td>
            <td>BAHAN BAKAR</td>
            <td>: {{ $data->bahanbakar }}</td>
        </tr>
        <tr>
            <td>NO. MESIN</td>
            <td>: {{ $data->nomesin }}</td>
            <td>NO. RANGKA</td>
            <td>: {{ $data->norangka }}</td>
        </tr>
        <tr>
            <td>PERUNTUKAN</td>
            <td>: {{ $data->peruntukan }}</td>
            <td>JENIS</td>
            <td>: {{ $data->jenis }}</td>
        </tr>
        <!-- UKURAN KENDARAAN -->
        <tr style="background-color: #f0f0f0; font-weight: bold;">
            <td colspan="4">UKURAN KENDARAAN</td>
        </tr>
        <tr style="background-color: #f0f0f0; font-weight: bold;">
            <td colspan="2">a. UKURAN UTAMA</td>
            <td colspan="2">d. DAYA ANGKUT</td>
        </tr>
        <tr>
            <td>PANJANG</td>
            <td>: {{ $data->panjangkendaran ?? 0 }} mm</td>
            <td>UKURAN BAN</td>
            <td>: {{ $data->ukuranban }}</td>
        </tr>
        <tr>
            <td>LEBAR</td>
            <td>: {{ $data->lebarkendaran ?? 0 }} mm</td>
            <td>KONFIGURASI SUMBU</td>
            <td>: {{ $data->konfigurasisumburoda }}</td>
        </tr>
        <tr>
            <td>TINGGI</td>
            <td>: {{ $data->tinggikendaran ?? 0 }} mm</td>
            <td>JBB</td>
            <td>: {{ $data->jbb ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td colspan="2" style="background-color: #f0f0f0; font-weight: bold;">b. DIMENSI BAK / TANGKI</td>
            <td>JBKB</td>
            <td>: {{ $data->jbkb ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td>PANJANG</td>
            <td>: {{ $data->panjangbakatautangki ?? 0 }} mm</td>
            <td>BERAT SUMBU I</td>
            <td>: {{ $data->berats1 ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td>LEBAR</td>
            <td>: {{ $data->lebarbakatautangki ?? 0 }} mm</td>
            <td>BERAT SUMBU II</td>
            <td>: {{ $data->berats2 ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td>TINGGI</td>
            <td>: {{ $data->tinggibakatautangki ?? 0 }} mm</td>
            <td>BERAT SUMBU III</td>
            <td>: {{ $data->berats3 ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td colspan="2" style="background-color: #f0f0f0; font-weight: bold;">c. JARAK SUMBU</td>
            <td>BERAT SUMBU IV</td>
            <td>: {{ $data->berats4 ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td>I-II</td>
            <td>: {{ $data->jaraksumbu1_2 ?? 0 }} mm</td>
            <td>BERAT KOSONG</td>
            <td>: {{ $data->beratkosong ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td>II-III</td>
            <td>: {{ $data->jaraksumbu2_3 ?? 0 }} mm</td>
            <td>DAYA ANGKUT ORANG</td>
            <td>: {{ $data->dayaangkutorang ?? 0 }} orang</td>
        </tr>
        <tr>
            <td>III-IV</td>
            <td>: {{ $data->jaraksumbu3_4 ?? 0 }} mm</td>
            <td>DAYA ANGKUT BARANG</td>
            <td>: {{ $data->dayaangkutbarang ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>JBI</td>
            <td>: {{ $data->jbi ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>JBKI</td>
            <td>: {{ $data->jbki ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>MST</td>
            <td>: {{ $data->mst ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>KELAS JALAN</td>
            <td>: {{ $data->kelasjalanterendah }}</td>
        </tr>

        <tr style="background-color: #f0f0f0; font-weight: bold;">
            <td colspan="4">HASIL UJI</td>
        </tr>
        <tr style="background-color: #f0f0f0; font-weight: bold;">
            <td colspan="4">a. EMISI GAS BUANG</td>
        </tr>
        @php
            function isBarang($value) {
                return is_string($value) && strpos($value, "MOBIL BARANG") === 0;
            }

            function isPenumpang($value) {
                return is_string($value) && strpos($value, "MOBIL PENUMPANG") === 0;
            }
        @endphp
        @if($data->bahanbakar == 'BENSIN' || $data->bahanbakar == 'Bensin' )
        <tr>
            <td>CO</td>
            @if(
                (isPenumpang($data['jenis']) && $data['thpembuatan'] < 2007 && $data['alatuji_emisicobahanbakarbensin'] > 4) ||
                (isPenumpang($data['jenis']) && $data['thpembuatan'] >= 2007 && $data['thpembuatan'] <= 2018 && $data['alatuji_emisicobahanbakarbensin'] > 1) ||
                (isPenumpang($data['jenis']) && $data['thpembuatan'] > 2018 && $data['alatuji_emisicobahanbakarbensin'] > 0.5) ||
                (isBarang($data['jenis']) && $data['thpembuatan'] < 2007 && $data['alatuji_emisicobahanbakarbensin'] > 4) ||
                (isBarang($data['jenis']) && $data['thpembuatan'] >= 2007 && $data['thpembuatan'] <= 2018 && $data['alatuji_emisicobahanbakarbensin'] > 1) ||
                (isBarang($data['jenis']) && $data['thpembuatan'] > 2018 && $data['alatuji_emisicobahanbakarbensin'] > 0.5)
            )
            <td style="background-color: red;color:#f0f0f0">: {{ $data->alatuji_emisicobahanbakarbensin ?? '-' }} %</td>
            @else
            <td>: {{ $data->alatuji_emisicobahanbakarbensin ?? '-' }} %</td>
            @endif
            <td>HC</td>
            @if(
                (isPenumpang($data['jenis']) && $data['thpembuatan'] < 2007 && $data['alatuji_emisihcbahanbakarbensin'] > 1000) ||
                (isPenumpang($data['jenis']) && $data['thpembuatan'] >= 2007 && $data['thpembuatan'] <= 2018 && $data['alatuji_emisihcbahanbakarbensin'] > 150) ||
                (isPenumpang($data['jenis']) && $data['thpembuatan'] > 2018 && $data['alatuji_emisihcbahanbakarbensin'] > 100) ||
                (isBarang($data['jenis']) && $data['thpembuatan'] < 2007 && $data['alatuji_emisihcbahanbakarbensin'] > 1100) ||
                (isBarang($data['jenis']) && $data['thpembuatan'] >= 2007 && $data['thpembuatan'] <= 2018 && $data['alatuji_emisihcbahanbakarbensin'] > 200) ||
                (isBarang($data['jenis']) && $data['thpembuatan'] > 2018 && $data['alatuji_emisihcbahanbakarbensin'] > 150)
            )
            <td style="background-color: red;color:#f0f0f0">: {{ $data->alatuji_emisihcbahanbakarbensin ?? '-' }} Ppm</td>
            @else
            <td>: {{ $data->alatuji_emisihcbahanbakarbensin ?? '-' }} Ppm</td>
            @endif
        </tr>
        @else
        <tr>
            <td>KETEBALAN ASAP</td>
            @if(($data['jbb'] <= 3500 && $data['thpembuatan'] < 2010 && $data['alatuji_emisiasapbahanbakarsolar'] > 65) ||
                ($data['jbb'] <= 3500 && $data['thpembuatan'] >= 2010 && $data['thpembuatan'] <= 2021 && $data['alatuji_emisiasapbahanbakarsolar'] > 40) ||
                ($data['jbb'] <= 3500 && $data['thpembuatan'] > 2021 && $data['alatuji_emisiasapbahanbakarsolar'] > 30) ||
                ($data['jbb'] > 3500 && $data['thpembuatan'] < 2010 && $data['alatuji_emisiasapbahanbakarsolar'] > 65) ||
                ($data['jbb'] > 3500 && $data['thpembuatan'] >= 2010 && $data['thpembuatan'] <= 2021 && $data['alatuji_emisiasapbahanbakarsolar'] > 40) ||
                ($data['jbb'] > 3500 && $data['thpembuatan'] > 2021 && $data['alatuji_emisiasapbahanbakarsolar'] > 35)
            )
            <td colspan="3" style="background-color: red;color:#f0f0f0">: {{ $data->alatuji_emisiasapbahanbakarsolar ?? '-' }} HSU</td>
            @else
            <td colspan="3">: {{ $data->alatuji_emisiasapbahanbakarsolar ?? '-' }} HSU</td>
            @endif
        </tr>
        @endif
        <tr style="background-color: #f0f0f0; font-weight: bold;">
            <td colspan="4">b. KEDALAMAN ALUR BAN</td>
        </tr>
        <tr>
            <td colspan="2">KEDALAMAN ALUR BAN</td>
            @if($data->alatuji_kedalamanalurban >= 1)
            <td colspan="2">: {{ $data->alatuji_kedalamanalurban ?? '-' }} mm</td>
            @else
            <td colspan="2" style="background-color: red;color:#f0f0f0">: {{ $data->alatuji_kedalamanalurban ?? '-' }} mm</td>
            @endif
        </tr>
        <tr style="background-color: #f0f0f0; font-weight: bold;">
            <td colspan="4">c. KEBISINGAN SUARA</td>
        </tr>
        <tr>
            <td colspan="2">SUARA KLAKSON</td>
            @if($data->alatuji_tingkatkebisingan >= 83 && $data->alatuji_tingkatkebisingan <= 118)
            <td colspan="2">: {{ $data->alatuji_tingkatkebisingan }} Db</td>
            @else
            <td colspan="2" style="background-color: red;color:#f0f0f0">: {{ $data->alatuji_tingkatkebisingan }} Db</td>
            @endif
        </tr>
        <tr style="background-color: #f0f0f0; font-weight: bold;">
            <td colspan="4">d. EFF & PENYIMPANGAN REM,KINCUP RODA</td>
        </tr>
        <tr>
            <td colspan="4" class="text-center">GAYA REM</td>
        </tr>
        <tr>
            <td colspan="2" class="text-center">KIRI</td>
            <td colspan="2" class="text-center">KANAN</td>
        </tr>
        <tr>
            <td>SUMBU I</td>
            <td>: {{ $data->gayaremkiri1 ?? 0 }} Kg</td>
            <td>SUMBU I</td>
            <td>: {{ $data->gayaremkanan1 ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td>SUMBU II</td>
            <td>: {{ $data->gayaremkiri2 ?? 0 }} Kg</td>
            <td>SUMBU II</td>
            <td>: {{ $data->gayaremkanan2 ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td>SUMBU III</td>
            <td>: {{ $data->gayaremkiri3 ?? 0 }} Kg</td>
            <td>SUMBU III</td>
            <td>: {{ $data->gayaremkanan3 ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td>SUMBU IV</td>
            <td>: {{ $data->gayaremkiri4 ?? 0 }} Kg</td>
            <td>SUMBU IV</td>
            <td>: {{ $data->gayaremkanan4 ?? 0 }} Kg</td>
        </tr>
        <tr>
            <td colspan="4" class="text-center">GAYA REM PARKIR</td>
        </tr>
        <tr>
            <td colspan="2" class="text-center">KIRI</td>
            <td colspan="2" class="text-center">KANAN</td>
        </tr>
        <tr>
            <td class="text-center" colspan="2">{{ $data->alatuji_gayapengeremanparkirkiri ?? 0 }}</td>
            <td class="text-center" colspan="2">{{ $data->alatuji_gayapengeremanparkirkanan ?? 0 }}</td>
        </tr>

        <tr>
            <td colspan="2">PENYIMPANGAN SUMBU I</td>
            @if($data->alatuji_remutamaselisihgayapengeremanrodakirikanan1 <= 8)
            <td colspan="2">: {{ $data->alatuji_remutamaselisihgayapengeremanrodakirikanan1 ?? '-' }} %</td>
            @else
            <td colspan="2" style="background-color: red;color:#f0f0f0">: {{ $data->alatuji_remutamaselisihgayapengeremanrodakirikanan1 ?? '-' }} %</td>
            @endif
        </tr>
        <tr>
            <td colspan="2">PENYIMPANGAN SUMBU II</td>
            @if($data->alatuji_remutamaselisihgayapengeremanrodakirikanan2 <= 8)
            <td colspan="2">: {{ $data->alatuji_remutamaselisihgayapengeremanrodakirikanan2 ?? '-' }} %</td>
            @else
            <td colspan="2" style="background-color: red;color:#f0f0f0">: {{ $data->alatuji_remutamaselisihgayapengeremanrodakirikanan2 ?? '-' }} %</td>
            @endif
        </tr>
        <tr>
            <td colspan="2">PENYIMPANGAN SUMBU III</td>
            @if($data->alatuji_remutamaselisihgayapengeremanrodakirikanan3 <= 8)
            <td colspan="2">: {{ $data->alatuji_remutamaselisihgayapengeremanrodakirikanan3 ?? '-' }} %</td>
            @else
            <td colspan="2" style="background-color: red;color:#f0f0f0">: {{ $data->alatuji_remutamaselisihgayapengeremanrodakirikanan3 ?? '-' }} %</td>
            @endif
        </tr>
        <tr>
            <td colspan="2">PENYIMPANGAN SUMBU IV</td>
            @if($data->alatuji_remutamaselisihgayapengeremanrodakirikanan4 <= 8)
            <td colspan="2">: {{ $data->alatuji_remutamaselisihgayapengeremanrodakirikanan4 ?? '-' }} %</td>
            @else
            <td colspan="2" style="background-color: red;color:#f0f0f0">: {{ $data->alatuji_remutamaselisihgayapengeremanrodakirikanan4 ?? '-' }} %</td>
            @endif
        </tr>
        @php
            $i = 0;
            if($data->berats1 > 0){
                $i=1;
            }elseif($data->berats2 > 0){
                $i=2;
            }elseif($data->berats3 > 0){
                $i=3;
            }elseif($data->berats4 > 0){
                $i=4;
            }else{
                $i=0;
            }
            if($i > 0)
            {
                $effsumbu1 =0;$effsumbu2 =0;$effsumbu3 =0;$effsumbu4 =0;
                if($i == 1)
                {
                    $kiri = 0;$kanan = 0; $total = 0;
                    $kiri  = $data->gayaremkiri1;
                    $kanan = $data->gayaremkanan1;
                    $total = (int)$kiri+(int)$kanan;
                    $effsumbu1 = ceil(($total/$data->berats1)*100);
                }elseif($i == 2)
                {
                    $kiri = 0;$kanan = 0; $total = 0;
                    $kiri  = $data->gayaremkiri1/100;
                    $kanan = $data->gayaremkanan1/100;
                    $total = (int)$kiri+(int)$kanan;
                    $effsumbu1 = ceil(($total/$data->berats1)*100);

                    $kiri = 0;$kanan = 0; $total = 0;
                    $kiri  = $data->gayaremkiri2/100;
                    $kanan = $data->gayaremkanan2/100;
                    $total = (int)$kiri+(int)$kanan;
                    $effsumbu4 = ceil(($total/$data->berats2)*100);
                }elseif($i == 3)
                {
                    $kiri = 0;$kanan = 0; $total = 0;
                    $kiri  = $data->gayaremkiri1/100;
                    $kanan = $data->gayaremkanan1/100;
                    $total = (int)$kiri+(int)$kanan;
                    $effsumbu1 = ceil(($total/$data->berats1)*100);

                    $kiri = 0;$kanan = 0; $total = 0;
                    $kiri  = $data->gayaremkiri2/100;
                    $kanan = $data->gayaremkanan2/100;
                    $total = (int)$kiri+(int)$kanan;
                    $effsumbu4 = ceil(($total/$data->berats2)*100);

                    $kiri = 0;$kanan = 0; $total = 0;
                    $kiri  = $data->gayaremkiri3/100;
                    $kanan = $data->gayaremkanan3/100;
                    $total = (int)$kiri+(int)$kanan;
                    $effsumbu4 = ceil(($total/$data->berats3)*100);
                }elseif($i == 4)
                {
                    $kiri = 0;$kanan = 0; $total = 0;
                    $kiri  = $data->gayaremkiri1/100;
                    $kanan = $data->gayaremkanan1/100;
                    $total = (int)$kiri+(int)$kanan;
                    $effsumbu1 = ceil(($total/$data->berats1)*100);

                    $kiri = 0;$kanan = 0; $total = 0;
                    $kiri  = $data->gayaremkiri2/100;
                    $kanan = $data->gayaremkanan2/100;
                    $total = (int)$kiri+(int)$kanan;
                    $effsumbu4 = ceil(($total/$data->berats2)*100);

                    $kiri = 0;$kanan = 0; $total = 0;
                    $kiri  = $data->gayaremkiri3/100;
                    $kanan = $data->gayaremkanan3/100;
                    $total = (int)$kiri+(int)$kanan;
                    $effsumbu4 = ceil(($total/$data->berats3)*100);

                    $kiri = 0;$kanan = 0; $total = 0;
                    $kiri  = $data->gayaremkiri4/100;
                    $kanan = $data->gayaremkanan4/100;
                    $total = (int)$kiri+(int)$kanan;
                    $effsumbu4 = ceil(($total/$data->berats4)*100);
                }
                $totEff = ($effsumbu1+$effsumbu2+$effsumbu3+$effsumbu4)/$i;
                $bk = (int)$data->berats1+(int)$data->berats2+(int)$data->berats2+(int)$data->berats3+(int)$data->berats4;
                $totRemEff = (((int)$data->alatuji_gayapengeremanparkirkiri+(int)$data->alatuji_gayapengeremanparkirkanan)/$bk)*100;
            }else{
                $totEff = 0;
                $totRemEff = 0;
            }
        @endphp
        <tr>
            <td colspan="2">EFFISIENSI REM UTAMA</td>
            @if($totEff >=50)
            <td colspan="2">: {{ number_format((float)$totEff , 2, '.', '') }} %</td>
            @else
            <td colspan="2" style="background-color: red;color:#f0f0f0">: {{ number_format((float)$totEff , 2, '.', '') }} %</td>
            @endif
        </tr>
        <tr>
            <td colspan="2">EFFISIENSI REM PARKIR</td>
            @if($totRemEff >= 13)
            <td colspan="2">: {{ number_format((float)$totRemEff , 2, '.', '') }} %</td>
            @else
            <td colspan="2" style="background-color: red;color:#f0f0f0">: {{ number_format((float)$totRemEff , 2, '.', '') }} %</td>
            @endif
        </tr>
        <tr>
            <td colspan="2">KINCUP RODA DEPAN</td>
            @if($data->alatuji_kincuprodadepan >= -5 && $data->alatuji_kincuprodadepan <= 5)
            <td colspan="2">: {{ $data->alatuji_kincuprodadepan ?? '-' }} mm</td>
            @else
            <td colspan="2" style="background-color: red;color:#f0f0f">: {{ $data->alatuji_kincuprodadepan ?? '-' }} mm</td>
            @endif
        </tr>
        <tr style="background-color: #f0f0f0; font-weight: bold;">
            <td colspan="4">e. INTENSITAS DAN PENYIMPANGAN LAMPU</td>
        </tr>
        <tr>
            <td colspan="2" class="text-center">KIRI</td>
            <td colspan="2" class="text-center">KANAN</td>
        </tr>
        <tr>
            <td>INTENSITAS</td>
            @if($data->alatuji_lampuutamakekuatanpancarlampukiri >= 12000)
            <td>: {{ $data->alatuji_lampuutamakekuatanpancarlampukiri ?? '-' }} cd</td>
            @else
            <td style="background-color: red;color:#f0f0f0">: {{ $data->alatuji_lampuutamakekuatanpancarlampukiri ?? '-' }} cd</td>
            @endif
            <td>INTENSITAS</td>
            @if($data->alatuji_lampuutamakekuatanpancarlampukanan >= 12000)
            <td>: {{ $data->alatuji_lampuutamakekuatanpancarlampukanan ?? '-' }} cd</td>
            @else
            <td style="background-color: red;color:#f0f0f0">: {{ $data->alatuji_lampuutamakekuatanpancarlampukanan ?? '-' }} cd</td>
            @endif
        </tr>
        @php
            if($data->alatuji_lampuutamapenyimpanganlampukiri > 0.00){
                $hasilkiri = $data->alatuji_lampuutamapenyimpanganlampukiri;
                $pecahkiri = explode('.', number_format($hasilkiri, 2));
                $derajatkiri = $pecahkiri[0];
                $menitkiri = $pecahkiri[1];
            }else{
                $derajatkiri = '-';
                $menitkiri = '-';
            }
            if($data->alatuji_lampuutamapenyimpanganlampukanan > 0.00){
                $hasilkanan = $data->alatuji_lampuutamapenyimpanganlampukanan;
                $pecahkanan = explode('.', number_format($hasilkanan, 2));
                $derajatkanan = $pecahkanan[0];
                $menitkanan = $pecahkanan[1];
            }else{
                $derajatkanan = '-';
                $menitkanan = '-';
            }
        @endphp
        <tr>
            <td>PENYIMPANGAN</td>
            @if($data->alatuji_lampuutamapenyimpanganlampukiri <= 1.09)
            <td>: {{ $derajatkiri }}&deg; {{ $menitkiri }} menit</td>
            @else
            <td style="background-color: red;color:#f0f0f0">: {{ $derajatkiri }}&deg; {{ $menitkiri }} menit</td>
            @endif
            <td>PENYIMPANGAN</td>
            @if($data->alatuji_lampuutamapenyimpanganlampukanan <= 0.34)
            <td>: {{ $derajatkanan }}&deg; {{ $menitkanan }} menit</td>
            @else
            <td style="background-color: red;color:#f0f0f0">: {{ $derajatkanan }}&deg; {{ $menitkanan }} menit</td>
            @endif
        </tr>
        <tr style="background-color: #f0f0f0; font-weight: bold;">
            <td colspan="4">g. PENYIMPANGAN PENUNJUK KECEPATAN</td>
        </tr>
        <tr>
            <td colspan="2">SPEEDOMETER</td>
            @if($data->alatuji_penunjukkecepatan >= 36 && $data->alatuji_penunjukkecepatan <= 46)
            <td colspan="2"> {{ $data->alatuji_penunjukkecepatan ?? '-' }} km/jam</td>
            @else
            <td colspan="2" style="background-color: red;color:#f0f0f0"> {{ $data->alatuji_penunjukkecepatan ?? '-' }} km/jam</td>
            @endif
        </tr>
    </table>
    <br>
    <table width="100%" cellspacing="0" cellpadding="5" style="font-size: 12px;">
        <tr>
            @php
                $i = 1;
            @endphp
            @foreach ($ttdUser as $item)
                <td width="50%" class="text-center">
                    Pos {{ $i }} Diperiksa Oleh,<br>
                    <img src="{{ asset('ttd/' . $item->uuid.'.jpg') }}" alt=""><br>
                    <u>{{ strtoupper($item->name) }}</u><br>
                    NRP. {{ $item->nrp }}
                </td>
                @php
                    $i++;
                @endphp
            @endforeach
        </tr>
    </table>
</div>

</body>
</html>

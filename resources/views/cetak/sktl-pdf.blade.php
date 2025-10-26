<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dokumen SKTL</title>
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
            margin-top: 3px;
            /* Ini memberi jarak antara garis tipis dan tebal */
        }

        .page-break {
            page-break-after: always;
        }

        .p {
            /* font-size: 12px; */
        }

        .table-bordered {
            border: 1px solid #dee2e6;
        }

        .table-bordered th,
        .table-bordered td {
            border: 1px solid #dee2e6;
        }

        .text-center {
            text-align: center;
        }

        .text-right {
            text-align: right;
        }

        .text-left {
            text-align: left;
        }

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
    <div class="content">
        <h3 class="text-center"><u>SURAT KETERANGAN TIDAK LULUS UJI</u></h3>
        <p>Pada tanggal {{ tgl_indo($data->tglpendaftaran) }} tempat UPT Pengujian Kendaraan Bermotor Dinas Perhubungan {{ ucwords(strtolower(env('APP_KAB').' '.env('APP_WILAYAH'))) }} yang bertanda tangan di bawah ini :</p>

        <table style="width: 100%;">
            <tr>
                <td style="width: 28%">
                    Nama
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                    {{ $ttd->name }}
                </td>
            </tr>
            <tr>
                <td style="width: 28%">
                    NRP
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                    {{ $ttd->nrp }}
                </td>
            </tr>
            <tr>
                <td style="width: 28%">
                    Jabatan
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                    {{ $ttd->jabatan }}
                </td>
            </tr>
            <tr>
                <td style="width: 28%">
                    Menyatakan bahwa kendaraan bermotor
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                </td>
            </tr>
            <tr>
                <td style="width: 28%">
                    Nomor Uji
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                    {{ $data->nouji }}
                </td>
            </tr>
            <tr>
                <td style="width: 28%">
                    Nomor Kendaraan
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                    {{ $data->noregistrasikendaraan }}
                </td>
            </tr>
            <tr>
                <td style="width: 28%">
                    Merek
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                    {{ $data->merek }}
                </td>
            </tr>
            <tr>
                <td style="width: 28%">
                    Tipe
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                    {{ $data->tipe }}
                </td>
            </tr>
            <tr>
                <td style="width: 28%">
                    Jenis
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                    {{ $data->jenis }}
                </td>
            </tr>
            <tr>
                <td style="width: 28%">
                    Nomor Rangka
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                    {{ $data->norangka }}
                </td>
            </tr>
            <tr>
                <td style="width: 28%">
                    Nomor Mesin
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                    {{ $data->nomesin }}
                </td>
            </tr>
            <tr>
                <td style="width: 28%">
                    Nama Pemilik
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                    {{ $data->nama }}
                </td>
            </tr>
            <tr>
                <td style="width: 28%">
                    Alamat Pemilik
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                    {{ $data->alamat }}
                </td>
            </tr>
        </table>
        <p>Dengan hasil pemeriksaan persyaratan teknis dan laik jalan, terdapat komponen yang tidak memenuhi persyaratan teknis dan laik jalan sebagai berikut :</p>
        <table class="table-bordered" style="width: 100%;">
            <thead>
                <th>No.</th>
                <th>Komponen Uji</th>
                <th>Hasil Uji</th>
                <th>Alasan Penolakan</th>
                <th>Rekomendasi Perbaikan</th>
            </thead>
            @php
            $no = 0;
            @endphp
            <tbody>
                @foreach ($catatan as $catatan)
                @php
                $no++;
                @endphp
                <tr>
                    <td scope="row">{{ $no }}</td>
                    <td>{{ $catatan->nama }}</td>
                    <td>{{ $catatan->hasiluji }}</td>
                    <td>{{ $catatan->alasan }}</td>
                    <td>{{ $catatan->rekomendasi }}</td>
                </tr>
                @endforeach
                @if($no == 0)
                <tr class="text-center">
                    <td colspan="5"> <i>- Tidak ada catatan -</i> </td>
                </tr>
                @endif
            </tbody>
        </table>
        <p>Berdasarkan data hasil pemeriksaan teknis dan persyaratan teknis laik jalan di atas maka kendaraan tersebut dinyatakan <b>TIDAK LULUS UJI</b>
            <p>Demikian keterangan ini dibuat, selanjutnya kepada pemilik kendaraan agar memperbaiki komponen tersebut dan melakukan uji ulang pada tanggal <span><b>{{ tgl_indo(date_format(date_create($data->tglujiulang),"d-m-Y")) }}</b></span></span>.</p>


            <p>Demikian permohonan ini kami buat untuk dapat diproses lebih lanjut.</p>

            <table style="width: 100%;">
                <tr>
                    <td style="width: 60%"></td>
                    <td style="width: 40%" class="text-center">
                        <p>{{ ucwords(strtolower(env('APP_WILAYAH'))) }}, {{ tgl_indo($data->tglpendaftaran) }}</p>
                        <p>Yang membuat keterangan</p>
                        <p>{{ $ttd->jabatan }}</p>
                        <br><br><br><br><br><br>
                        <p style="margin:0px;padding:0px;"><u><b>{{ $ttd['name'] }}</u></b></p>
                    </td>
                </tr>
            </table>
    </div>
    </div>

</body>
</html>

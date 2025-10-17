<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dokumen Penolakan</title>
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

        .table-bordered {
            border: 1px solid #dee2e6;
        }

        .table-bordered th,
        .table-bordered td {
            border: 1px solid #dee2e6;
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

<div class="content">
        <h3 class="text-center"><u>SURAT KETERANGAN TIDAK LULUS UJI</u></h3>
        <table style="width: 100%;">
            
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
                    Jenis
                </td>
                <td style="width: 2%">
                    :
                </td>
                <td style="width: 70%" class="text-left">
                    {{ $data->jenis }}
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
    </div>
</div>


</body>
</html>

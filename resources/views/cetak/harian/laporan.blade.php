<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Laporan Harian</title>
    <style>
        @page {
            size: A4;
            size: landscape;
            margin: 0.2cm 0.5cm 0.5cm 0.5cm;
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
            top: 0cm;
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
            padding-top: 0.2cm;
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

        table.table-bordered {
            width: 100%;
            border-collapse: collapse;
        }

        .table-bordered th,
        .table-bordered td {
            border: 1px solid #000;
            padding: 6px;
            text-align: left;
            vertical-align: top;
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
        <h3 style="margin:1;padding:1">LAPORAN HARIAN PENGUJIAN BERKALA KENDARAAN BERMOTOR</h3>
        <h3 style="margin:1;padding:1">UPT PKB DISHUB KOTA CIREBON</h3>
        <h3 style="margin:1;padding:1">{{ $tglprint }}</h3>
</header>
<div class="content">
    <table class="table table-bordered ">
        <thead>
            <tr>
                <th scope="col">NO</th>
                <th scope="col">NO KENDARAAN</th>
                <th scope="col">NO UJI</th>
                <th scope="col">NO RANGKA</th>
                <th scope="col">NO MESIN</th>
                <th scope="col">MEREK</th>
                <th scope="col">TIPE</th>
                <th scope="col">TAHUN</th>
                <th scope="col">JENIS KEND</th>
                <th scope="col">JBB</th>
                <th scope="col">BAHAN BAKAR</th>
                <th scope="col">NAMA</th>
                <th scope="col">ALAMAT</th>
                <th scope="col">JENIS PELAYANAN</th>
                <th scope="col">HASIL UJI</th>
                <th scope="col">STATUS KEND</th>
                <th scope="col">NO KENDALI KARTU</th>
                <th scope="col">KET</th>
            </tr>
        </thead>
        <tbody>
            @php $i=1
            @endphp
            @foreach ($kendaraan as $data) 
            <tr>
                <th scope="row">{{ $i }}</th>
                <td>{{ $data->noregistrasikendaraan }}</td>
                <td>{{ $data->nouji }}</td>
                <td>{{ $data->norangka }}</td>
                <td>{{ $data->nomesin }}</td>
                <td>{{ $data->merek }}</td>
                <td>{{ $data->tipe }}</td>
                <td>{{ $data->thpembuatan }}</td>
                <td>{{ $data->subjenis }}</td>
                <td>{{ $data->jbb }}</td>
                <td>{{ $data->bahanbakar }}</td>
                <td>{{ $data->nama }}</td>
                <td>{{ $data->alamat }}</td>
                <td>{{ $data->keterangan }}</td>
                <td>{{ $data->peruntukan }}</td>
                @if (!empty($data->rfid_tid))
                <td>BARU</td>
                @else
                <td>LAMA</td>
                @endif
                @if ($data->statuslulusuji == 1)
                <td>LULUS</td>
                @else
                <td>TIDAK LULUS</td>
                @endif
            </tr>
            @php $i++
            @endphp
            @endforeach
        </tbody>
    </table>
    <div class="page-break"> </div>

    <div class="text-left">
        <h5 style="margin:1;padding:1">Lampiran</h5>
        <h5 style="margin:1;padding:1">DATA ADMINISTRASI</h5>
        <h5 style="margin:1;padding:1">{{ $tglprint }}</h5>
    </div>
    
    {{-- <table style="width: 100%">
        <tr>
            <td style="width: 50%;vertical-align: top;">
                <table class="table table-bordered ">
                    <thead>
                        <tr>
                        <th scope="col">JENIS KENDARAAN</th>
                        <th scope="col">JUMLAH</th>
                        </tr>
                    </thead>
                    <tbody>
                    @foreach ($jenis as $data) 
                    <tr>
                        <td>{{ $data['jenis']  }}</td>
                        <td>{{ $data['jumlah'] }}</td>
                    </tr>
                    @endforeach
                    </tbody>
                </table>
            </td>
            <td style="width: 50%;vertical-align: top;">
                <table class="table table-bordered ">
                    <thead>
                        <tr>
                        <th scope="col">JENIS PELAYANAN</th>
                        <th scope="col">JUMLAH</th>
                        </tr>
                    </thead>
                    <tbody>
                    @foreach ($jenispelayanan as $data) 
                    <tr>
                        <td>{{ $data['jenispelayanan']  }}</td>
                        <td>{{ $data['jumlah'] }}</td>
                    </tr>
                    @endforeach
                    </tbody>
                </table>
                <br>
                <table class="table table-bordered ">
                    <thead>
                        <tr>
                        <th scope="col">KETERANGAN</th>
                        <th scope="col">JUMLAH</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>LULUS</td>
                        <td>{{ $lulus }}</td>
                    </tr>
                    <tr>
                        <td>TIDAK LULUS</td>
                        <td>{{ $tidaklulus }}</td>
                    </tr>
                    </tbody>
                </table>
                <br>
                <table class="table table-bordered ">
                    <thead>
                        <tr>
                        <th scope="col">UMUM / TIDAK UMUM</th>
                        <th scope="col">JUMLAH</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>UMUM</td>
                        <td>{{ $umum }}</td>
                    </tr>
                    <tr>
                        <td>TIDAK UMUM</td>
                        <td>{{ $tidakumum }}</td>
                    </tr>
                    </tbody>
                </table>
                <br>
                <table class="table table-bordered ">
                    <thead>
                        <tr>
                        <th scope="col">PEMAKAIN KARTU UJI</th>
                        <th scope="col">JUMLAH</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>BARU</td>
                        <td>{{ $pemakaianbuku['baru'] }}</td>
                    </tr>
                    <tr>
                        <td>RUSAK</td>
                        <td>{{ $pemakaianbuku['rusak'] }}</td>
                    </tr>
                    <tr>
                        <td>HILANG</td>
                        <td>{{ $pemakaianbuku['hilang'] }}</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </table> --}}
</div>

</body>
</html>

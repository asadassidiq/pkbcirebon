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
            width: 100%;
        }

        table {
            width: 100%;
            table-layout: auto;
            font-size: 8pt; /* Smaller font size for better fitting */
        }

        @media print {
            table {
            max-width: 100%;
            overflow-x: hidden;
            }
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
                @if ($data->statuslulusuji == 1)
                <td>LULUS</td>
                @else
                <td>TIDAK LULUS</td>
                @endif
                <td>{{ $data->peruntukan }}</td>
                <td>{{ $data->nokendalikartu }}</td>
                {{-- @if (!empty($data->rfid_tid))
                <td>BARU</td>
                @else
                <td>LAMA</td> --}}
                {{-- @endif --}}
                <td></td>
            </tr>
            @php $i++
            @endphp
            @endforeach
        </tbody>
    </table>
    <div style="position: absolute; right: 0; bottom: 2cm; width: 300px;">
        <p style="margin: 0;padding: 0;text-align: center">Mengetahui,</p>
        <p style="margin: 0;padding: 0;text-align: center">Kepala UPT Pengujian Kendaraan Bermotor</p>
        <p style="margin: 0;padding: 0;text-align: center">Dinas Perhubungan Kota Cirebon</p>
        <br><br><br>
        <p style="margin: 0;padding: 0;text-align: center"><u><b>{{ $ttd['name'] }}</u></b></p>
        <p style="margin: 0;padding: 0;text-align: center">NIP. {{ $ttd['pangkat'] }}</p>
        <p style="margin: 0;padding: 0;text-align: center">NIP. {{ $ttd['nip'] }}</p>
    </div>
    <div class="page-break"> </div>

    <div class="text-left">
        <h3 style="margin:1;padding:1">Lampiran</h3>
        <h3 style="margin:1;padding:1">DATA ADMINISTRASI</h3>
        <h3 style="margin:1;padding:1">{{ $tglprint }}</h3>
    </div>
    
    <table style="width: 100%">
        <tr>
            <td style="width: 50%;vertical-align: top;">
                <table class="table table-bordered ">
                    <thead>
                        <tr>
                        <th scope="col" colspan="2">JENIS KENDARAAN</th>
                        <th scope="col">JUMLAH</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td rowspan="2">MOBIL PNP</td>
                    </tr>
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
                    <thead style="text-align:center;">
                        <tr>
                            <th style="width:40%;">JENIS KENDARAAN</th>
                            <th style="width:40%;">SUB JENIS</th>
                            <th style="width:20%;">JUMLAH</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- MOBIL PNP -->
                        <tr>
                            <td rowspan="2">MOBIL PNP</td>
                            <td>MOBIL PNP SEDAN</td>
                            <td>{{ $totaljenis['mobil1'] ?? 0 }}</td>
                        </tr>
                        <tr>
                            <td>MOBIL PNP BUKAN SEDAN</td>
                            <td>{{ $totaljenis['mobil2'] ?? 0 }}</td>
                        </tr>

                        <!-- MOBIL BUS -->
                        <tr>
                            <td rowspan="7">MOBIL BUS</td>
                            <td>B.KECIL</td><td>{{ $totaljenis['mobil3'] ?? 0 }}</td>
                        </tr>
                        <tr><td>B.SEDANG</td><td>{{ $totaljenis['mobil4'] ?? 0 }}</td></tr>
                        <tr><td>B.BESAR</td><td>{{ $totaljenis['mobil5'] ?? 0 }}</td></tr>
                        <tr><td>B.MAXI</td><td>{{ $totaljenis['mobil6'] ?? 0 }}</td></tr>
                        <tr><td>B.GANDENG</td><td>{{ $totaljenis['mobil7'] ?? 0 }}</td></tr>
                        <tr><td>B.TEMPEL</td><td>{{ $totaljenis['mobil8'] ?? 0 }}</td></tr>
                        <tr><td>B.TINGKAT</td><td>{{ $totaljenis['mobil9'] ?? 0 }}</td></tr>

                        <!-- MOBIL BARANG BAK TERBUKA -->
                        <tr>
                            <td rowspan="6">MOBIL BARANG BAK TERBUKA</td>
                            <td>P.UP</td><td>{{ $totaljenis['mobil10'] ?? 0 }}</td>
                        </tr>
                        <tr><td>DOUBLE CABIN</td><td>{{ $totaljenis['mobil11'] ?? 0 }}</td></tr>
                        <tr><td>L.TRUCK</td><td>{{ $totaljenis['mobil12'] ?? 0 }}</td></tr>
                        <tr><td>DUMP TRUCK</td><td>{{ $totaljenis['mobil13'] ?? 0 }}</td></tr>
                        <tr><td>LOST BAK</td><td>{{ $totaljenis['mobil14'] ?? 0 }}</td></tr>
                        <tr><td>CAR CARRIER</td><td>{{ $totaljenis['mobil15'] ?? 0 }}</td></tr>

                        <!-- MOBIL BARANG BAK TERTUTUP -->
                        <tr>
                            <td rowspan="5">MOBIL BARANG BAK TERTUTUP</td>
                            <td>P.UP BOX</td><td>{{ $totaljenis['mobil16'] ?? 0 }}</td>
                        </tr>
                        <tr><td>P.UP RANGKA</td><td>{{ $totaljenis['mobil17'] ?? 0 }}</td></tr>
                        <tr><td>L.TRUCK BOX</td><td>{{ $totaljenis['mobil18'] ?? 0 }}</td></tr>
                        <tr><td>BLIND VAN</td><td>{{ $totaljenis['mobil19'] ?? 0 }}</td></tr>
                        <tr><td>DELIVERY VAN</td><td>{{ $totaljenis['mobil20'] ?? 0 }}</td></tr>

                        <!-- MOBIL TANGKI -->
                        <tr><td>MOBIL TANGKI</td><td></td><td>{{ $totaljenis['mobil21'] ?? 0 }}</td></tr>

                        <!-- MOBIL PENARIK -->
                        <tr><td>MOBIL PENARIK</td><td></td><td>{{ $totaljenis['mobil22'] ?? 0 }}</td></tr>

                        <!-- KERETA -->
                        <tr><td>KERETA GANDENG BAK TERBUKA</td><td></td><td>{{ $totaljenis['mobil23'] ?? 0 }}</td></tr>
                        <tr><td>KERETA GANDENG BAK TERTUTUP</td><td></td><td>{{ $totaljenis['mobil24'] ?? 0 }}</td></tr>
                        <tr><td>KERETA GANDENG TANGKI</td><td></td><td>{{ $totaljenis['mobil25'] ?? 0 }}</td></tr>
                        <tr><td>KERETA TEMPELAN BAK TERBUKA</td><td></td><td>{{ $totaljenis['mobil26'] ?? 0 }}</td></tr>
                        <tr><td>KERETA TEMPELAN BAK TERTUTUP</td><td></td><td>{{ $totaljenis['mobil27'] ?? 0 }}</td></tr>
                        <tr><td>KERETA TEMPELAN TANGKI</td><td></td><td>{{ $totaljenis['mobil28'] ?? 0 }}</td></tr>

                        <!-- KB RODA TIGA -->
                        <tr><td>KB Roda Tiga Angkutan Barang Bak Muatan Terbuka</td><td></td><td>{{ $totaljenis['mobil29'] ?? 0 }}</td></tr>
                        <tr><td>KB Roda Tiga Angkutan Barang Bak Muatan Tertutup</td><td></td><td>{{ $totaljenis['mobil30'] ?? 0 }}</td></tr>
                        <tr><td>KB Roda Tiga Angkutan Penumpang</td><td></td><td>{{ $totaljenis['mobil31'] ?? 0 }}</td></tr>
                        <tr><td>KB Roda Tiga Angkutan Barang Tangki</td><td></td><td>{{ $totaljenis['mobil32'] ?? 0 }}</td></tr>

                        <!-- KENDARAAN KHUSUS -->
                        <tr>
                            <td rowspan="7">KENDARAAN KHUSUS</td>
                            <td>AMBULANCE</td><td>{{ $totaljenis['mobil33'] ?? 0 }}</td>
                        </tr>
                        <tr><td>DAMKAR</td><td>{{ $totaljenis['mobil34'] ?? 0 }}</td></tr>
                        <tr><td>ARM ROLL</td><td>{{ $totaljenis['mobil35'] ?? 0 }}</td></tr>
                        <tr><td>DEREK</td><td>{{ $totaljenis['mobil36'] ?? 0 }}</td></tr>
                        <tr><td>FLAT DECK</td><td>{{ $totaljenis['mobil37'] ?? 0 }}</td></tr>
                        <tr><td>MIXER</td><td>{{ $totaljenis['mobil38'] ?? 0 }}</td></tr>
                        <tr><td>CONCREEDPUMP</td><td>{{ $totaljenis['mobil39'] ?? 0 }}</td></tr>
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
    </table>
</div>

</body>
</html>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Laporan KWBU Bulanan</title>
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
    <table style="width: 100%">
        <tr>
            <td style="width: 15%">
                <img style="width: 80px; height: auto;" src="{{ $logokab }}">
            </td>
            <td style="width: 85%" class="text-center">
                <h3 class="text-center" style="margin:0;padding:0">PEMERINTAH KABUPATEN MIMIKA</h3>
                <h3 class="text-center" style="margin:0;padding:0"><b>DINAS PERHUBUNGAN</b></h3>
                <h2 class="text-center" style="margin:0;padding:0"><b>UPT PENGUJIAN KENDARAAN BERMOTOR</b></h2>
                <p class="text-center" style="margin:0;padding:0">Jl. Mahkota Jalur 1 Kel.Timika Jaya Kec.Mimika Baru</p>
                <p class="text-center" style="margin:0;padding:0">Telp.0901-323630, Email: unitpengujikabmmk@yahoo.com, Kode Pos : 99910</p>
            </td>
        </tr>
    </table>
    
    <div class="line-wrapper">
        <div class="line-thin"></div>
        <div class="line-thick"></div>
    </div>
</header>
<div class="content">
    <div class="text-center">
        <h4 style="margin:1;padding:1">Laporan Pelaksanaan Pengujian Kendaraan Bermotor</h4>
        <h4 style="margin:1;padding:1">Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</h4>
        <h4 style="margin:1;padding:1">Bulan {{ $tglprint }}</h4>
    </div>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col" rowspan="3">No</th>
                <th scope="col" rowspan="3" class="text-center">Tanggal</th>
                <th scope="col" rowspan="3" class="text-center">KBWU Sblm</th>
                <th scope="col" rowspan="3" class="text-center">KBWU</th>
                <th scope="col" rowspan="3" class="text-center">KBWU yang di Uji</th>
                <th scope="col" class="text-center" colspan="13">Jenis Kendaraan</th>
                <th scope="col" class="text-center" rowspan="3">Jumlah</th>
            </tr>
            <tr>

                <th scope="col"></th>
                <th scope="col" class="text-center" colspan="3">Bus</th>
                <th scope="col" class="text-center" colspan="6">Mobil Barang</th>
                <th scope="col" class="text-center" rowspan="2">K.Tempelan</th>
                <th scope="col" class="text-center" rowspan="2">K.Gandeng</th>
                <th scope="col" class="text-center" rowspan="2">Lain-Lain</th>
            </tr>
            <tr>
                <th scope="col">Mobil Penumpang</th>
                <th scope="col">Kecil</th>
                <th scope="col">Sedang</th>
                <th scope="col">Besar</th>
                <th scope="col">
                    < 3000 Kg</th>
                <th scope="col">3001-9000 Kg</th>
                <th scope="col">9001-15000 Kg</th>
                <th scope="col">15001-21000 Kg</th>
                <th scope="col"> > 21000 Kg</th>
                <th scope="col">Tractor Head</th>
            </tr>
        </thead>
        <tbody>
            @php $i=1;$jumlah=0;$mobilpenumpang=0;$buskecil=0;$bussedang=0;$busbesar=0;$barangjbb1=0;$barangjbb2=0;$barangjbb3=0;$barangjbb4=0;$barangjbb5=0;
            $traktorhead=0;$keretagandeng=0;$keretatempelan=0;$lulus=0;$tidaklulus=0;$numasuk=0;$nukeluar=0;$mutasikeluar=0;$mutasimasuk=0;$ujiulang=0;
            $lainlain=0;$ujipertama=0;$ujiberkala=0;$kwbu=0;$kwbusblm=0;$kwbuuji=0;
            @endphp
            @foreach ($data as $dt)
            <tr class="aligncenter">
                <td>{{ $i }}</td>
                <td>{{ $dt['tgl'] }}</td>
                <td>{{ $dt['kwbusblm'] }}</td>
                <td>{{ $dt['kwbu'] }}</td>
                <td>{{ $dt['kwbuuji'] }}</td>
                <td>{{ $dt['mobilpenumpang'] }}</td>
                <td>{{ $dt['buskecil'] }}</td>
                <td>{{ $dt['bussedang'] }}</td>
                <td>{{ $dt['busbesar'] }}</td>
                <td>{{ $dt['barangjbb1'] }}</td>
                <td>{{ $dt['barangjbb2'] }}</td>
                <td>{{ $dt['barangjbb3'] }}</td>
                <td>{{ $dt['barangjbb4'] }}</td>
                <td>{{ $dt['barangjbb5'] }}</td>
                <td>{{ $dt['traktorhead'] }}</td>
                <td>{{ $dt['keretatempelan'] }}</td>
                <td>{{ $dt['keretagandeng'] }}</td>
                <td>{{ $dt['lainlain'] }}</td>
                <td>{{ $dt['jumlah'] }}</td>
            </tr>
            @php $i++;$jumlah = $jumlah+$dt['jumlah'];$mobilpenumpang=$mobilpenumpang+$dt['mobilpenumpang'];$buskecil=$buskecil+$dt['buskecil'];$bussedang=$bussedang+$dt['bussedang'];$busbesar=$busbesar+$dt['busbesar'];
            $barangjbb1=$barangjbb1+$dt['barangjbb1'];$barangjbb2=$barangjbb2+$dt['barangjbb2'];$barangjbb3=$barangjbb3+$dt['barangjbb3'];$barangjbb4=$barangjbb4+$dt['barangjbb4'];$barangjbb5=$barangjbb5+$dt['barangjbb5'];
            $traktorhead=$traktorhead+$dt['traktorhead'];$keretatempelan=$keretatempelan+$dt['keretatempelan'];$keretagandeng=$keretagandeng+$dt['keretagandeng'];$ujiulang=$ujiulang+$dt['ujiulang'];
            $lulus=$lulus+$dt['lulus'];$tidaklulus=$tidaklulus+$dt['tidaklulus'];$numasuk=$numasuk+$dt['numasuk'];$nukeluar=$nukeluar+$dt['nukeluar'];$mutasimasuk=$mutasimasuk+$dt['mutasimasuk'];$mutasikeluar=$mutasikeluar+$dt['mutasikeluar'];
            $lainlain=$lainlain+$dt['lainlain'];$ujipertama=$ujipertama+$dt['ujipertama'];$ujiberkala=$ujiberkala+$dt['ujiberkala'];
            $kwbu=$dt['kwbu'];$kwbusblm=$dt['kwbusblm'];$kwbuuji=$kwbuuji+$dt['kwbuuji'];
            @endphp
            @endforeach
            <tr class="aligncenter allborder">
                <td colspan="2"><b>Total</b></td>
                <td>{{ $kwbusblm }}</td>
                <td>{{ $kwbu }}</td>
                <td>{{ $kwbuuji }}</td>
                <td>{{ $mobilpenumpang }}</td>
                <td>{{ $buskecil }}</td>
                <td>{{ $bussedang }}</td>
                <td>{{ $busbesar }}</td>
                <td>{{ $barangjbb1 }}</td>
                <td>{{ $barangjbb2 }}</td>
                <td>{{ $barangjbb3 }}</td>
                <td>{{ $barangjbb4 }}</td>
                <td>{{ $barangjbb5 }}</td>
                <td>{{ $traktorhead }}</td>
                <td>{{ $keretatempelan }}</td>
                <td>{{ $keretagandeng }}</td>
                <td>{{ $lainlain }}</td>
                <td>{{ $jumlah }}</td>
            </tr>
        </tbody>
    </table>

    <div class="page-break"> </div>

    <div class="text-left">
        <h5 style="margin:1;padding:1">Lampiran</h5>
    </div>
    <br>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col" rowspan="2">No</th>
                <th scope="col" rowspan="2" class="text-center">Tanggal</th>
                <th scope="col" class="text-center" colspan="2">Hasil Pengujian</th>
                <th scope="col" class="text-center" rowspan="2">Uji Ulang</th>
                <th scope="col" class="text-center" rowspan="2">Uji Pertama</th>
                <th scope="col" class="text-center" rowspan="2">Uji Berkala</th>
                <th scope="col" class="text-center" colspan="2">Numpang</th>
                <th scope="col" class="text-center" colspan="2">Mutasi</th>
                <th scope="col" class="text-center" rowspan="2">Jumlah</th>
            </tr>
            <tr>
                <th scope="col" class="text-center">Lulus</th>
                <th scope="col" class="text-center">Tidak Lulus</th>
                <th scope="col" class="text-center">Masuk</th>
                <th scope="col" class="text-center">Keluar</th>
                <th scope="col" class="text-center">Masuk</th>
                <th scope="col" class="text-center">Keluar</th>
            </tr>
        </thead>
        <tbody>
            @php $i=1;
            @endphp
            @foreach ($data as $dt)
            <tr class="aligncenter">
                <td>{{ $i }}</td>
                <td>{{ $dt['tgl'] }}</td>
                <td>{{ $dt['lulus'] }}</td>
                <td>{{ $dt['tidaklulus'] }}</td>
                <td>{{ $dt['ujiulang'] }}</td>
                <td>{{ $dt['ujipertama'] }}</td>
                <td>{{ $dt['ujiberkala'] }}</td>
                <td>{{ $dt['numasuk'] }}</td>
                <td>{{ $dt['nukeluar'] }}</td>
                <td>{{ $dt['mutasimasuk'] }}</td>
                <td>{{ $dt['mutasikeluar'] }}</td>
                <td>{{ $dt['jumlah'] }}</td>
            </tr>
            @endforeach
            <tr class="aligncenter allborder">
                <td colspan="2"><b>Total</b></td>
                <td>{{ $lulus }}</td>
                <td>{{ $tidaklulus }}</td>
                <td>{{ $ujiulang }}</td>
                <td>{{ $ujipertama }}</td>
                <td>{{ $ujiberkala }}</td>
                <td>{{ $numasuk }}</td>
                <td>{{ $nukeluar }}</td>
                <td>{{ $mutasimasuk }}</td>
                <td>{{ $mutasikeluar }}</td>
                <td>{{ $jumlah }}</td>
            </tr>
        </tbody>
    </table>
</div>

</body>
</html>

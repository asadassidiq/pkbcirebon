<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cetak</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="icon" href="{{ asset('img/icon.ico') }}" type="image/ico">

    <!-- Scripts -->

    <!-- Styles -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="{{ asset('css/css/style.css') }}" rel="stylesheet">
    <script src="{{ asset('chart/chart.js') }}"></script>
    <style>
        body {
            color: #333;
            text-align: left;
            font-size: 14px;
            margin: 0;
            padding: 10px;
        }

        .cont {
            margin: 10px;
        }

        table {
            border: 1px solid #333;
            border-collapse: collapse;
            margin: 0 auto;
            margin-left: 8px;
            margin-right: 8px;
        }

        td,
        tr,
        th {
            font-size: 11px;
            width: auto;
        }

        th {
            background-color: #f0f0f0;
        }

        .kertasbaru {
            page-break-before: always;
        }

        @page {
            size: landscape;
        }

        @media print {
            @page {
                size: landscape
            }

            .kertasbaru {
                page-break-before: always;
            }
        }
    </style>
</head>
<!-- <body onload="window.print();"> -->

<body>
    <div class="cont">
        <div class="row text-center">
            <div class="col-sm-3 col-logo"><img id="logo-left" src="{{url('/img/kota.jpg')}}"></div>
            <div class="col-sm-6">
                <p><b>Laporan Bulanan Jenis Pelayanan Pengujian Kendaraan Bermotor</b></p>
                <p> <b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b> </p>
                <p> <b> Bulan {{ $tglprint }} </b></p>
            </div>
            <div class="col-sm-3 col-logo"><img id="logo-right" src="{{url('/img/dishub.jpg')}}"></div>
        </div>
        <br>
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" rowspan="3">No</th>
                        <th scope="col" rowspan="3" class="text-center">Tanggal</th>
                        <th scope="col" class="text-center" colspan="10">Jenis Pelayanan</th>
                        <th scope="col" class="text-center" colspan="2">Keterangan</th>
                        <th scope="col" class="text-center" colspan="4">Kartu</th>
                    </tr>
                    <tr>
                        <th scope="col" colspan="5">Pelayanan Admin & Mekanis</th>
                        <th scope="col" colspan="2">Pelayanan Administrasi</th>
                        <th scope="col" rowspan="2">Jumlah</th>
                        <th scope="col" rowspan="2">Uji Ulang</th>
                        <th scope="col" rowspan="2">Jumlah Total Pelayanan</th>
                        <th scope="col" rowspan="2">Lulus</th>
                        <th scope="col" rowspan="2">Tidak</th>
                        <th scope="col" rowspan="2">Baru</th>
                        <th scope="col" rowspan="2">Lama</th>
                        <th scope="col" rowspan="2">Rusak</th>
                        <th scope="col" rowspan="2">Hilang</th>
                    </tr>
                    <tr>
                        <th scope="col">Uji Pertama</th>
                        <th scope="col">Uji Berkala</th>
                        <th scope="col">Numpang Uji Masuk</th>
                        <th scope="col">Rubah Bentuk</th>
                        <th scope="col">Mutasi Masuk</th>
                        <th scope="col">Numpang Uji Keluar</th>
                        <th scope="col">Mutasi Keluar</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                    $i=1;$ujipertama=0;$ujiberkala=0;$numasuk=0;$nukeluar=0;
                    $rubahbentuk=0;$mutasimasuk=0;$mutasikeluar=0;$jumlah=0;
                    $ujiulang=0;$jumlahtotal=0;$lulus=0;$tidaklulus=0;
                    $baru=0;$rusak=0;$hilang=0;$lama=0;
                    @endphp
                    @foreach ($data as $dt)
                    <tr>
                        <td scope="row">{{ $i }}</td>
                        <td class="text-center">{{ $dt['tgl'] }}</td>
                        <td class="text-center">{{ $dt['ujipertama'] }}</td>
                        <td class="text-center">{{ $dt['ujiberkala'] }}</td>
                        <td class="text-center">{{ $dt['numasuk'] }}</td>
                        <td class="text-center">{{ $dt['rubahbentuk'] }}</td>
                        <td class="text-center">{{ $dt['mutasimasuk'] }}</td>
                        <td class="text-center">{{ $dt['nukeluar'] }}</td>
                        <td class="text-center">{{ $dt['mutasikeluar'] }}</td>
                        <td class="text-center">{{ $dt['jumlah'] }}</td>
                        <td class="text-center">{{ $dt['ujiulang'] }}</td>
                        <td class="text-center">{{ $dt['jumlahtotal'] }}</td>
                        <td class="text-center">{{ $dt['lulus'] }}</td>
                        <td class="text-center">{{ $dt['tidaklulus'] }}</td>
                        <td class="text-center">{{ $dt['baru'] }}</td>
                        <td class="text-center">{{ $dt['lama'] }}</td>
                        <td class="text-center">{{ $dt['rusak'] }}</td>
                        <td class="text-center">{{ $dt['hilang'] }}</td>
                    </tr>
                    @php
                    $i++;$ujipertama=$ujipertama+$dt['ujipertama'];$ujiberkala=$ujiberkala+$dt['ujiberkala'];$numasuk=$numasuk+$dt['numasuk'];$nukeluar=$nukeluar+$dt['nukeluar'];
                    $rubahbentuk=$rubahbentuk+$dt['rubahbentuk'];$mutasimasuk=$mutasimasuk+$dt['mutasimasuk'];$mutasikeluar=$mutasikeluar+$dt['mutasikeluar'];$jumlah=$jumlah+$dt['jumlah'];$ujiulang=$ujiulang+$dt['ujiulang'];$jumlahtotal=$jumlahtotal+$dt['jumlahtotal'];$lulus=$lulus+$dt['lulus'];$tidaklulus=$tidaklulus+$dt['tidaklulus'];
                    $baru=$baru+$dt['baru'];$rusak=$rusak+$dt['rusak'];$hilang=$hilang+$dt['hilang'];$lama=$lama+$dt['lama'];
                    @endphp
                    @endforeach
                    <tr>
                        <td class="text-center" colspan="2">Total</td>

                        <td class="text-center">{{ $ujipertama }}</td>
                        <td class="text-center">{{ $ujiberkala }}</td>
                        <td class="text-center">{{ $numasuk }}</td>
                        <td class="text-center">{{ $rubahbentuk }}</td>
                        <td class="text-center">{{ $mutasimasuk }}</td>
                        <td class="text-center">{{ $nukeluar }}</td>
                        <td class="text-center">{{ $mutasikeluar }}</td>
                        <td class="text-center">{{ $jumlah }}</td>
                        <td class="text-center">{{ $ujiulang }}</td>
                        <td class="text-center">{{ $jumlahtotal }}</td>
                        <td class="text-center">{{ $lulus }}</td>
                        <td class="text-center">{{ $tidaklulus }}</td>
                        <td class="text-center">{{ $baru }}</td>
                        <td class="text-center">{{ $lama }}</td>
                        <td class="text-center">{{ $rusak }}</td>
                        <td class="text-center">{{ $hilang }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row" style="font-size:14px">
            <div class="col-4 text-center">

            </div>
            <div class="col-4"></div>
            <div class="col-4 text-center">
                <b>
                    <p style="padding:1px;margin:0px;">Mengetahui,</p>
                    <p style="padding:1px;margin:0px;">Kepala UPT PKB</P>
                    <p style="padding:1px;margin:0px;">Kabupaten Mimika</P>
                    <br>
                    <br>
                    <br>
                    <p style="padding:1px;margin:0px;">{{ $ttd['name'] }}</p>
                    <p style="padding:1px;margin:0px;">NIP. {{$ttd['nip'] }}</p>
                </b>
            </div>
        </div>
    </div>

    <div class="kertasbaru cont">
        <div class="row text-center">
            <div class="col-sm-3 col-logo"><img id="logo-left" src="{{url('/img/kota.jpg')}}"></div>
            <div class="col-sm-6">
                <p><b>Tabel Jenis Pelayanan Administrasi & Mekanis</b></p>
                <p> <b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b> </p>
                <p> <b> Bulan {{ $tglprint }} </b></p>
            </div>
            <div class="col-sm-3 col-logo"><img id="logo-right" src="{{url('/img/dishub.jpg')}}"></div>
        </div>
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" rowspan="2">No</th>
                        <th scope="col" rowspan="2" class="text-center">Tanggal</th>
                        <th scope="col" class="text-center" colspan="6">Pelayanan Admin & Mekanis</th>
                        <th scope="col" class="text-center" colspan="2">Keterangan</th>
                    </tr>
                    <tr>
                        <th scope="col">Uji Pertama</th>
                        <th scope="col">Uji Berkala</th>
                        <th scope="col">Numpang Uji Masuk</th>
                        <th scope="col">Rubah Bentuk</th>
                        <th scope="col">Mutasi Masuk</th>
                        <th scope="col">Jumlah</th>
                        <th scope="col">Lulus</th>
                        <th scope="col">Tidak</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                    $i=1;$ujipertama=0;$ujiberkala=0;$numasuk=0;$rubahbentuk=0;$mutasimasuk=0;$jumlah=0;$lulus=0;$tidaklulus=0;$ujipertama1=0;$ujiberkala1=0;$numasuk1=0;$rubahbentuk1=0;$mutasimasuk1=0;$jumlah1=0;$lulus1=0;$tidaklulus1=0;
                    @endphp
                    @foreach ($data1 as $dt)
                    <tr>
                        <td scope="row">{{ $i }}</td>
                        <td class="text-center">{{ $dt['tgl'] }}</td>
                        <td class="text-center">{{ $dt['ujipertama'] }}</td>
                        <td class="text-center">{{ $dt['ujiberkala'] }}</td>
                        <td class="text-center">{{ $dt['numasuk'] }}</td>
                        <td class="text-center">{{ $dt['rubahbentuk'] }}</td>
                        <td class="text-center">{{ $dt['mutasimasuk'] }}</td>
                        <td class="text-center">{{ $dt['jumlah'] }}</td>
                        <td class="text-center">{{ $dt['lulus'] }}</td>
                        <td class="text-center">{{ $dt['tidaklulus'] }}</td>
                    </tr>
                    @php
                    $i++;$ujipertama=$ujipertama+$dt['ujipertama'];$ujiberkala=$ujiberkala+$dt['ujiberkala'];$numasuk=$numasuk+$dt['numasuk'];$rubahbentuk=$rubahbentuk+$dt['rubahbentuk'];$mutasimasuk=$mutasimasuk+$dt['mutasimasuk'];$jumlah=$jumlah+$dt['jumlah'];$lulus=$lulus+$dt['lulus'];$tidaklulus=$tidaklulus+$dt['tidaklulus'];
                    @endphp
                    @endforeach
                    @php
                    if($ujipertama == 0){
                    $ujipertama1 = 0;
                    }else{
                    $ujipertama1= round(((int)$ujipertama/(int)$jumlah)*100,2);
                    }
                    if($ujiberkala == 0){
                    $ujiberkala1 = 0;
                    }else{
                    $ujiberkala1= round(((int)$ujiberkala/(int)$jumlah)*100,2);
                    }
                    if($numasuk == 0){
                    $numasuk1 = 0;
                    }else{
                    $numasuk1= round(((int)$numasuk/(int)$jumlah)*100,2);
                    }
                    if($rubahbentuk == 0){
                    $rubahbentuk1 = 0;
                    }else{
                    $rubahbentuk1 = round(((int)$rubahbentuk/(int)$jumlah)*100,2);
                    }
                    if($mutasimasuk == 0){
                    $mutasimasuk1 = 0;
                    }else{
                    $mutasimasuk1 = round(((int)$mutasimasuk/(int)$jumlah)*100,2);
                    }
                    if($lulus == 0){
                    $lulus1 = 0;
                    }else{
                    $lulus1 = round(((int)$lulus/(int)$jumlah)*100,2);
                    }
                    if($tidaklulus == 0){
                    $tidaklulus1 = 0;
                    }else{
                    $tidaklulus1 = round(((int)$tidaklulus/(int)$jumlah)*100,2);
                    }
                    @endphp
                    <tr>
                        <td class="text-center" colspan="2"><b>Total</b></td>
                        <td class="text-center">{{ $ujipertama }}</td>
                        <td class="text-center">{{ $ujiberkala }}</td>
                        <td class="text-center">{{ $numasuk }}</td>
                        <td class="text-center">{{ $rubahbentuk }}</td>
                        <td class="text-center">{{ $mutasimasuk }}</td>
                        <td class="text-center">{{ $jumlah }}</td>
                        <td class="text-center">{{ $lulus }}</td>
                        <td class="text-center">{{ $tidaklulus }}</td>
                    </tr>
                    <tr>
                        <td class="text-center" colspan="2"><b>Total</b></td>
                        <td class="text-center">{{ $ujipertama1 }} %</td>
                        <td class="text-center">{{ $ujiberkala1 }} %</td>
                        <td class="text-center">{{ $numasuk1 }} %</td>
                        <td class="text-center">{{ $rubahbentuk1 }} %</td>
                        <td class="text-center">{{ $mutasimasuk1 }} %</td>
                        <td class="text-center"></td>
                        <td class="text-center">{{ $lulus1 }} %</td>
                        <td class="text-center">{{ $tidaklulus1 }} %</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="kertasbaru cont">
        <div class="row">
            <div class="col-sm-6">
                <div style="padding-top:100px;width: 500px;height: 500px;">
                    <p class="text-center"><b>Pelayanan Admin & Mekanis</b></p>
                    <canvas id="myChart1"></canvas>
                </div>
            </div>
            <div class="col-sm-6">
                <div style="padding-top:100px;width: 500px;height: 500px;">
                    <p class="text-center"><b>Pelayanan Administrasi</b></p>
                    <canvas id="myChart2"></canvas>
                </div>
            </div>
        </div>

        <div class="row" style="font-size:14px">
            <div class="col-4 text-center">

            </div>
            <div class="col-4"></div>
            <div class="col-4 text-center">
                <b>
                    <p style="padding:1px;margin:0px;">Mengetahui,</p>
                    <p style="padding:1px;margin:0px;">Kepala UPT PKB</P>
                    <p style="padding:1px;margin:0px;">Kabupaten Mimika</P>
                    <br>
                    <br>
                    <p style="padding:1px;margin:0px;">{{ $ttd['name'] }}</p>
                    <p style="padding:1px;margin:0px;">NIP. {{$ttd['nip'] }}</p>
                </b>
            </div>
        </div>
    </div>

    <div class="kertasbaru cont">
        <div class="row text-center">
            <div class="col-sm-3 col-logo"><img id="logo-left" src="{{url('/img/kota.jpg')}}"></div>
            <div class="col-sm-6">
                <p><b>Tabel Jenis Pelayanan Administrasi</b></p>
                <p> <b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b> </p>
                <p> <b> Bulan {{ $tglprint }} </b></p>
            </div>
            <div class="col-sm-3 col-logo"><img id="logo-right" src="{{url('/img/dishub.jpg')}}"></div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" rowspan="2" class="text-center">No</th>
                            <th scope="col" rowspan="2" class="text-center">Tanggal</th>
                            <th scope="col" class="text-center" colspan="3">Pelayanan Administrasi</th>
                        </tr>
                        <tr>
                            <th scope="col" rowspan="2" class="text-center">Numpang Uji Keluar</th>
                            <th scope="col" rowspan="2" class="text-center">Mutasi Keluar</th>
                            <th scope="col" rowspan="2" class="text-center">Jumlah</th>
                        </tr>
                    </thead>
                    <tbody>
                        @php
                        $i=1;$nukeluar=0;$mutasikeluar=0;$jumlah=0;$nukeluar1=0;$mutasikeluar1=0;;
                        @endphp
                        @foreach ($data2 as $dt)
                        <tr>
                            <td class="text-center" scope="row">{{ $i }}</td>
                            <td class="text-center">{{ $dt['tgl'] }}</td>
                            <td class="text-center">{{ $dt['nukeluar'] }}</td>
                            <td class="text-center">{{ $dt['mutasikeluar'] }}</td>
                            <td class="text-center">{{ $dt['jumlah'] }}</td>
                        </tr>
                        @php
                        $i++;$nukeluar=$nukeluar+$dt['nukeluar'];$mutasikeluar=$mutasikeluar+$dt['mutasikeluar'];$jumlah=$jumlah+$dt['jumlah'];
                        @endphp
                        @endforeach
                        <tr>
                            <td colspan="2" class="text-center"><b>Total</b></td>
                            <td class="text-center">{{ $nukeluar }}</td>
                            <td class="text-center">{{ $mutasikeluar }}</td>
                            <td class="text-center">{{ $jumlah }}</td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center"><b>Presentasi</b></td>
                            @if($nukeluar == 0)
                            @php
                            $nukeluar1 = 0;
                            @endphp
                            <td class="text-center"> {{ $nukeluar1 }} %</td>
                            @else
                            @php
                            $nukeluar1 = number_format((float)((int)$nukeluar/(int)$jumlah)*100, 2, '.', '');
                            @endphp
                            <td class="text-center">{{ $nukeluar1 }} %</td>
                            @endif
                            @if($mutasikeluar == 0)
                            @php
                            $mutasikeluar = 0;
                            @endphp
                            <td class="text-center"> {{ $mutasikeluar }} %</td>
                            @else
                            @php
                            $mutasikeluar1 = number_format((float)((int)$mutasikeluar/(int)$jumlah)*100, 2, '.', '');
                            @endphp
                            <td class="text-center">{{ $mutasikeluar1 }} %</td>
                            @endif
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-sm-6">
                <div class="row align-middle">
                    <div class="col-sm-8">
                        <div style="padding-top:100px;width: 500px;height: 500px;">
                            <p class="text-center"><b>Pelayanan Administrasi</b></p>
                            <canvas id="myChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style="font-size:14px">
            <div class="col-4 text-center">

            </div>
            <div class="col-4"></div>
            <div class="col-4 text-center">
                <b>
                    <p style="padding:1px;margin:0px;">Mengetahui,</p>
                    <p style="padding:1px;margin:0px;">Kepala UPT PKB</P>
                    <p style="padding:1px;margin:0px;">Kabupaten Mimika</P>
                    <br>
                    <br>
                    <p style="padding:1px;margin:0px;">{{ $ttd['name'] }}</p>
                    <p style="padding:1px;margin:0px;">NIP. {{$ttd['nip'] }}</p>
                </b>
            </div>
        </div>
    </div>

    <div class="kertasbaru cont">
        <div class="row text-center">
            <div class="col-sm-3 col-logo"><img id="logo-left" src="{{url('/img/kota.jpg')}}"></div>
            <div class="col-sm-6">
                <p><b>Tabel Efektifitas Hasil Kelulusan Uji untuk Uji Ulang</b></p>
                <p> <b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b> </p>
                <p> <b> Bulan {{ $tglprint }} </b></p>
            </div>
            <div class="col-sm-3 col-logo"><img id="logo-right" src="{{url('/img/dishub.jpg')}}"></div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" rowspan="2" class="text-center">No</th>
                            <th scope="col" rowspan="2" class="text-center">Tanggal</th>
                            <th scope="col" rowspan="2">Uji Ulang</th>
                            <th scope="col" class="text-center" colspan="2">Keterangan</th>
                            <th scope="col" rowspan="2">Jumlah</th>
                        </tr>
                        <tr>
                            <th scope="col" rowspan="2" class="text-center">Lulus</th>
                            <th scope="col" rowspan="2" class="text-center">Tidak Lulus</th>
                        </tr>
                    </thead>
                    <tbody>
                        @php
                        $i=1;$lulus=0;$tidaklulus=0;$jumlah=0;$lulus2=0;$tidaklulus2=0;;
                        @endphp
                        @foreach ($data3 as $dt)
                        <tr>
                            <td class="text-center" scope="row">{{ $i }}</td>
                            <td class="text-center">{{ $dt['tgl'] }}</td>
                            <td class="text-center">{{ $dt['jumlah'] }}</td>
                            <td class="text-center">{{ $dt['lulus'] }}</td>
                            <td class="text-center">{{ $dt['tidaklulus'] }}</td>
                            <td class="text-center">{{ $dt['jumlah'] }}</td>
                        </tr>
                        @php
                        $i++;$lulus=$lulus+$dt['lulus'];$tidaklulus=$tidaklulus+$dt['tidaklulus'];$jumlah=$jumlah+$dt['jumlah'];
                        @endphp
                        @endforeach
                        <tr>
                            <td colspan="2" class="text-center"><b>Total</b></td>
                            <td class="text-center">{{ $jumlah }}</td>
                            <td class="text-center">{{ $lulus }}</td>
                            <td class="text-center">{{ $tidaklulus }}</td>
                            <td class="text-center">{{ $jumlah }}</td>
                        </tr>
                        <tr>
                            <td colspan="3" class="text-center"><b>Presentasi</b></td>
                            @if($lulus == 0)
                            @php
                            $lulus2 = 0;
                            @endphp
                            <td class="text-center"> {{ $lulus2 }} %</td>
                            @else
                            @php
                            $lulus2 = round(((int)$lulus/(int)$jumlah)*100,2);
                            @endphp
                            <td class="text-center">{{ $lulus2 }} %</td>
                            @endif
                            @if($tidaklulus == 0)
                            @php
                            $tidaklulus2 = 0;
                            @endphp
                            <td class="text-center"> {{ $tidaklulus2 }} %</td>
                            @else
                            @php
                            $tidaklulus2 = round(((int)$tidaklulus/(int)$jumlah)*100,2);
                            @endphp
                            <td class="text-center">{{ $tidaklulus2 }} %</td>
                            @endif
                            <td class="text-center">100 %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-sm-6">
                <div class="row align-middle">
                    <div class="col-sm-8">
                        <div style="padding-top:100px;width: 500px;height: 500px;">
                            <p class="text-center"><b>Presentasi kelulusan</b></p>
                            <canvas id="myChart3"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style="font-size:14px">
            <div class="col-4 text-center">

            </div>
            <div class="col-4"></div>
            <div class="col-4 text-center">
                <b>
                    <p style="padding:1px;margin:0px;">Mengetahui,</p>
                    <p style="padding:1px;margin:0px;">Kepala UPT PKB</P>
                    <p style="padding:1px;margin:0px;">Kabupaten Mimika</P>
                    <br>
                    <br>
                    <p style="padding:1px;margin:0px;">{{ $ttd['name'] }}</p>
                    <p style="padding:1px;margin:0px;">NIP. {{$ttd['nip'] }}</p>
                </b>
            </div>
        </div>
    </div>

    <script>
        var ctx = document.getElementById("myChart").getContext('2d');
        var ctx1 = document.getElementById("myChart1").getContext('2d');
        var ctx2 = document.getElementById("myChart2").getContext('2d');
        var ctx3 = document.getElementById("myChart3").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    'Numpang Uji Keluar',
                    'Mutasi Keluar',
                ],
                datasets: [{
                    label: 'Pelayanan Administrasi',
                    data: [<?php echo $nukeluar1 ?>, <?php echo $mutasikeluar1 ?>],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                    ],
                    hoverOffset: 4
                }]
            },
        });

        var myChart1 = new Chart(ctx1, {
            type: 'doughnut',
            data: {
                labels: [
                    'Uji Pertama',
                    'Uji Berkala',
                    'Numpang Uji Masuk',
                    'Mutasi Masuk',
                    'Rubah Bentuk',
                ],
                datasets: [{
                    label: 'Pelayanan Admin & Mekanis',
                    data: [<?php echo $ujipertama1 ?>, <?php echo $ujiberkala1 ?>, <?php echo $numasuk1 ?>, <?php echo $mutasimasuk1 ?>, <?php echo $rubahbentuk1 ?>],
                    backgroundColor: [
                        'rgb(0, 0, 255)',
                        'rgb(255, 69, 0)',
                        'rgb(128, 128, 128)',
                        'rgb(255, 255, 0)',
                        'rgb(0, 139, 139)',
                    ],
                    hoverOffset: 4
                }]
            },
        });

        var myChart2 = new Chart(ctx2, {
            type: 'doughnut',
            data: {
                labels: [
                    'Lulus',
                    'Tidak Lulus',
                ],
                datasets: [{
                    label: 'Persentasi Lulus & Tidak',
                    data: [<?php echo $lulus1 ?>, <?php echo $tidaklulus1 ?>],
                    backgroundColor: [
                        'rgb(0, 128, 0)',
                        'rgb(255, 0, 0)',
                    ],
                    hoverOffset: 4
                }]
            },
        });

        var myChart3 = new Chart(ctx3, {
            type: 'doughnut',
            data: {
                labels: [
                    'Lulus',
                    'Tidak Lulus',
                ],
                datasets: [{
                    label: 'Persentasi kelulusan',
                    data: [<?php echo $lulus1 ?>, <?php echo $tidaklulus1 ?>],
                    backgroundColor: [
                        'rgb(0, 128, 0)',
                        'rgb(255, 0, 0)',
                    ],
                    hoverOffset: 4
                }]
            },
        });
    </script>

</body>

</html>
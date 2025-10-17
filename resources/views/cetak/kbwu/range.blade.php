<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cetak</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
   <link rel="icon" href="{{ asset('img/icon.ico') }}" type="image/ico">

    <!-- Scripts -->
    
    <!-- Styles -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="{{ asset('css/css/style.css') }}" rel="stylesheet">
    <style>
        body{
            color:#333;
            text-align:left;
            font-size:14px;
            margin:0;
        }
        .con{
            margin-top:5px;
            margin-left:20px;
            margin-right:20px;
            height:auto;
            background-color:#fff;
        }
        table{
            border:1px solid #333;
            border-collapse:collapse;
            margin:0 auto;
        }
        td, tr, th{
            font-size: 11px;
            width: auto;
        }
        th{
            background-color: #f0f0f0;
        }
        .kertasbaru {page-break-before: always;}

         @page { size: landscape; }

         @media print {
            @page {size: landscape}
            .kertasbaru {page-break-before: always;}
          }
    </style>
</head>
<!-- <body onload="window.print();"> -->
<body>
    <div class="">
        <div class="row text-center">
            <div class="col-sm-3 col-logo"><img id="logo-left" src="{{url('/img/kota.jpg')}}"></div>
            <div class="col-sm-6"><p><b>Laporan Pelaksanaan Pengujian Kendaraan Bermotor<br> Pada UPT PKB Dinas Perhubungan Kabupaten Mimika <br> Bulan {{ $tglprint }}</b></p></div>
            <div class="col-sm-3 col-logo"><img id="logo-right" src="{{url('/img/dishub.jpg')}}"></div>
        </div>
        <br>
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" rowspan="3">No</th>
                        <th scope="col" rowspan="3" class="text-center">Jenis Kendaraan</th>
                        <th scope="col" class="text-center">Tahun</th>
                        <th scope="col" rowspan="3" class="text-center">Keterangan</th>
                    </tr>
                    <tr>
                        <th scope="col">2019</th>
                        <th scope="col">2020</th>
                        <th scope="col">2021</th>
                        <th scope="col">2022</th>
                        <th scope="col">2023</th>
                    </tr>
                    <tr>
                        <th scope="col">(Unit)</th>
                        <th scope="col">(Unit)</th>
                        <th scope="col">(Unit)</th>
                        <th scope="col">(Unit)</th>
                        <th scope="col">(Unit)</th>
                    </tr>
                </thead>
                <tbody>
                    @php $i=1;$jumlah=0;$mobilpenumpang=0;$buskecil=0;$bussedang=0;$busbesar=0;$barangjbb1=0;$barangjbb2=0;$barangjbb3=0;$barangjbb4=0;$barangjbb5=0;
                    $traktorhead=0;$keretagandeng=0;$keretatempelan=0;$lulus=0;$tidaklulus=0;$numasuk=0;$nukeluar=0;$mutasikeluar=0;$mutasimasuk=0;$ujiulang=0;
                    @endphp
                    @foreach ($data as $dt) 
                    <tr class="aligncenter">
                        <td>{{ $i }}</td>
                        <td>{{ $dt['tgl'] }}</td>
                        <td>{{ $dt['jumlah'] }}</td>
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
                        <td>{{ $dt['lulus'] }}</td>
                        <td>{{ $dt['tidaklulus'] }}</td>
                        <td>{{ $dt['ujiulang'] }}</td>
                        <td>{{ $dt['numasuk'] }}</td>
                        <td>{{ $dt['nukeluar'] }}</td>
                        <td>{{ $dt['mutasimasuk'] }}</td>
                        <td>{{ $dt['mutasikeluar'] }}</td>
                    </tr>
                    @php $i++;$jumlah = $jumlah+$dt['jumlah'];$mobilpenumpang=$mobilpenumpang+$dt['mobilpenumpang'];$buskecil=$buskecil+$dt['buskecil'];$bussedang=$bussedang+$dt['bussedang'];$busbesar=$busbesar+$dt['busbesar'];
                    $barangjbb1=$barangjbb1+$dt['barangjbb1'];$barangjbb2=$barangjbb2+$dt['barangjbb2'];$barangjbb3=$barangjbb3+$dt['barangjbb3'];$barangjbb4=$barangjbb4+$dt['barangjbb4'];$barangjbb5=$barangjbb5+$dt['barangjbb5'];
                    $traktorhead=$traktorhead+$dt['traktorhead'];$keretatempelan=$keretatempelan+$dt['keretatempelan'];$keretagandeng=$keretagandeng+$dt['keretagandeng'];$ujiulang=$ujiulang+$dt['ujiulang'];
                    $lulus=$lulus+$dt['lulus'];$tidaklulus=$tidaklulus+$dt['tidaklulus'];$numasuk=$numasuk+$dt['numasuk'];$nukeluar=$nukeluar+$dt['nukeluar'];$mutasimasuk=$mutasimasuk+$dt['mutasimasuk'];$mutasikeluar=$mutasikeluar+$dt['mutasikeluar'];
                    @endphp
                    @endforeach
                    <tr class="aligncenter allborder">
                        <td colspan="2"><b>Total</b></td>
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
                    <p style="padding:1px;margin:0px;">NIP. {{ $ttd['nip'] }}</p>
                </b>
            </div>
        </div>
    </div>


</body>
</html>
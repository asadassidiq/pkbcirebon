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
    <style>
        body {
            color: #333;
            text-align: left;
            font-size: 14px;
            margin: 0;
        }

        .cont {
            margin-top: 5px;
            margin-left: 20px;
            margin-right: 20px;
            height: auto;
            background-color: #fff;
        }

        table {
            border: 1px solid #333;
            border-collapse: collapse;
            margin: 0 auto;
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
                <p><b>Laporan Pelaksanaan Pengujian Kendaraan Bermotor<br> Pada UPT PKB Dinas Perhubungan Kabupaten Mimika <br> Tahun {{ $tglprint }}</b></p>
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
                        <th scope="col" rowspan="3" class="text-center">KBWU sblm</th>
                        <th scope="col" rowspan="3" class="text-center">KBWU</th>
                        <th scope="col" rowspan="3" class="text-center">KBWU yang di Uji</th>
                        <th scope="col" class="text-center" colspan="13">Jenis Kendaraan</th>
                        <th scope="col" class="text-center" colspan="2">Hasil Pengujian</th>
                        <th scope="col" class="text-center" rowspan="3">Uji Pertama</th>
                        <th scope="col" class="text-center" rowspan="3">Uji Berkala</th>
                        <th scope="col" class="text-center" colspan="2">Numpang</th>
                        <th scope="col" class="text-center" colspan="2">Mutasi</th>
                        <th scope="col" rowspan="3" class="text-center">Total</th>
                    </tr>
                    <tr>

                        <th scope="col"></th>
                        <th scope="col" class="text-center" colspan="3">Bus</th>
                        <th scope="col" class="text-center" colspan="6">Mobil Barang</th>
                        <th scope="col" class="text-center" rowspan="2">K.Tempelan</th>
                        <th scope="col" class="text-center" rowspan="2">K.Gandeng</th>
                        <th scope="col" class="text-center" rowspan="2">Lain-Lain</th>
                        <th scope="col" class="text-center" rowspan="2">Lulus</th>
                        <th scope="col" class="text-center" rowspan="2">Tidak Lulus</th>
                        <th scope="col" class="text-center" rowspan="2">Masuk</th>
                        <th scope="col" class="text-center" rowspan="2">Keluar</th>
                        <th scope="col" class="text-center" rowspan="2">Masuk</th>
                        <th scope="col" class="text-center" rowspan="2">Keluar</th>
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
                    $traktorhead=0;$keretagandeng=0;$keretatempelan=0;$lulus=0;$tidaklulus=0;$numasuk=0;$nukeluar=0;$mutasikeluar=0;$mutasimasuk=0;
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
                        <td>{{ $dt['lulus'] }}</td>
                        <td>{{ $dt['tidaklulus'] }}</td>
                        <td>{{ $dt['ujipertama'] }}</td>
                        <td>{{ $dt['ujiberkala'] }}</td>
                        <td>{{ $dt['numasuk'] }}</td>
                        <td>{{ $dt['nukeluar'] }}</td>
                        <td>{{ $dt['mutasikeluar'] }}</td>
                        <td>{{ $dt['mutasimasuk'] }}</td>
                        <td>{{ $dt['jumlah'] }}</td>
                    </tr>
                    @php $i++;$jumlah = $jumlah+$dt['jumlah'];$mobilpenumpang=$mobilpenumpang+$dt['mobilpenumpang'];$buskecil=$buskecil+$dt['buskecil'];$bussedang=$bussedang+$dt['bussedang'];$busbesar=$busbesar+$dt['busbesar'];
                    $barangjbb1=$barangjbb1+$dt['barangjbb1'];$barangjbb2=$barangjbb2+$dt['barangjbb2'];$barangjbb3=$barangjbb3+$dt['barangjbb3'];$barangjbb4=$barangjbb4+$dt['barangjbb4'];$barangjbb5=$barangjbb5+$dt['barangjbb5'];
                    $traktorhead=$traktorhead+$dt['traktorhead'];$keretatempelan=$keretatempelan+$dt['keretatempelan'];$keretagandeng=$keretagandeng+$dt['keretagandeng'];
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
                        <td>{{ $lulus }}</td>
                        <td>{{ $tidaklulus }}</td>
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
        
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Mobil Penumpang Sedan</th>
                        <th scope="col">Mobil Penumpang Bukan Sedan</th>
                        <th scope="col">Mobil Bus Kecil</th>
                        <th scope="col">Mobil Bus Sedang</th>
                        <th scope="col">Mobil Bus Besar</th>
                        <th scope="col">Mobil Bus Maxi</th>
                        <th scope="col">Mobil Bus Gandeng</th>
                        <th scope="col">Mobil Bus Tempel</th>
                        <th scope="col">Mobil Bus Tingkat</th>
                        <th scope="col">Mobil Barang Bak Terbuka</th>
                        <th scope="col">Mobil Barang Bak Tertutup</th>
                        <th scope="col">Mobil Tangki</th>
                        <th scope="col">Mobil Penarik</th>
                        <th scope="col">Kereta Gandeng Bak Terbuka</th>
                        <th scope="col">Kereta Gandeng Bak Tertutup</th>
                        <th scope="col">Kereta Gandeng Tangki</th>
                        <th scope="col">Kereta Tempelan Bak Terbuka</th>
                        <th scope="col">Kereta Tempelan Bak Tertutup</th>
                        <th scope="col">Kereta Tempelan Tangki</th>
                        <th scope="col">Kendaraan Bermotor Roda Tiga Angkutan Barang Bak Muatan Terbuka</th>
                        <th scope="col">Kendaraan Bermotor Roda Tiga Angkutan Barang Bak Muatan Tertutup</th>
                        <th scope="col">Kendaraan Bermotor Roda Tiga Angkutan Penumpang</th>
                        <th scope="col">Kendaraan Bermotor Roda Tiga Angkutan Barang Tangki</th>
                        <th scope="col">Kendaraan Khusus</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ $detail['penumpangsedan'] }}</td>
                        <td>{{ $detail['penumpangbukansedan'] }}</td>
                        <td>{{ $detail['buskecil'] }}</td>
                        <td>{{ $detail['bussedang'] }}</td>
                        <td>{{ $detail['busbesar'] }}</td>
                        <td>{{ $detail['busmaxi'] }}</td>
                        <td>{{ $detail['busgandeng'] }}</td>
                        <td>{{ $detail['bustempel'] }}</td>
                        <td>{{ $detail['bustingkat'] }}</td>
                        <td>{{ $detail['barangterbuka'] }}</td>
                        <td>{{ $detail['barangtertutup'] }}</td>
                        <td>{{ $detail['tangki'] }}</td>
                        <td>{{ $detail['penarik'] }}</td>
                        <td>{{ $detail['gandengterbuka'] }}</td>
                        <td>{{ $detail['gandengtertutup'] }}</td>
                        <td>{{ $detail['gandengtangki'] }}</td>
                        <td>{{ $detail['tempelanterbuka'] }}</td>
                        <td>{{ $detail['tempelantertutup'] }}</td>
                        <td>{{ $detail['tempelantangki'] }}</td>
                        <td>{{ $detail['roda3terbuka'] }}</td>
                        <td>{{ $detail['roda3tertutup'] }}</td>
                        <td>{{ $detail['roda3penumpang'] }}</td>
                        <td>{{ $detail['roda3tangki'] }}</td>
                        <td>{{ $detail['khusus'] }}</td>
                        @php
                            $total = $detail['penumpangsedan']+$detail['penumpangbukansedan']+$detail['buskecil']+$detail['bussedang']+$detail['busbesar']+$detail['busmaxi']+$detail['busgandeng']+$detail['bustempel']+$detail['bustingkat']+$detail['barangterbuka']+$detail['barangtertutup']+$detail['tangki']+$detail['penarik']+$detail['gandengterbuka']+$detail['gandengtertutup']+$detail['gandengtangki']+$detail['tempelanterbuka']+$detail['tempelantertutup']+$detail['tempelantangki']+$detail['roda3terbuka']+$detail['roda3tertutup']+$detail['roda3penumpang']+$detail['roda3tangki']+$detail['khusus'];
                        @endphp
                        <td>{{ $total }}</td>
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
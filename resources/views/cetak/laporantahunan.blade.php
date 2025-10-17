<!DOCTYPE html>
<head>
    <title>Laporan Pelaksanaan Pengujian Kendaraan Bermotor</title>
    <meta charset="utf-8">

    <!-- Styles -->
   <link rel="icon" href="{{ asset('img/icon.ico') }}" type="image/ico">
    <link href="{{ asset('css/css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('css/css/style.css') }}" rel="stylesheet">
</head>
<body>
    <div class="container" id="form">
        <table class="container">
            <table class="table table-borderless row-height" id="header">
            <td class="col-logo"><img id="logo-left" src="{{url('/img/kota.jpg')}}"></td>
            <td class="col-title"><p class="letter-name space"><b>Laporan Pelaksanaan Pengujian Kendaraan Bermotor<br> Pada UPT PKB Dinas Perhubungan Kabupaten Mimika <br> Tahun {{ $tglprint }}</b></p></td>
            <td class="col-logo"><img id="logo-right" src="{{url('/img/dishub.jpg')}}"></h3></td>
        </table>
        <div class="container">
            <table class="table table-borderless row-height" id="table">
                <tr class="aligncenter bg-color allborder">
                    <td rowspan="3" class="col-small allborder">No.</td>
                    <td rowspan="3" class="allborder">Tanggal</td>
                    <td rowspan="3" class="allborder">Jumlah KBWU yang di Uji</td>
                    <td colspan="12" class="allborder">Jenis Kendaraan</td>
                    <td colspan="2" class="allborder">Hasil Pengujian</td>
                    <td rowspan="3" class="allborder">Numpang Uji</td>
                    <td colspan="2" class="allborder">Mutasi</td>
                </tr>
                <tr class="aligncenter bg-color">
                    <td colspan="4" class="allborder">Bus</td>
                    <td colspan="6" class="allborder">Mobil Barang</td>
                    <td rowspan="2" class="allborder">Kereta Tempelan</td>
                    <td rowspan="2" class="allborder">Kereta Gandengan</td>
                    <td rowspan="2" class="allborder">Lulus</td>
                    <td rowspan="2" class="allborder">Tidak Lulus</td>
                    <td rowspan="2" class="allborder">Masuk</td>
                    <td rowspan="2" class="allborder">Keluar</td>
                </tr>
                <tr class="aligncenter bg-color">
                    <td class="allborder">Mobil Penumpang</td>
                    <td class="allborder">Kecil</td>
                    <td class="allborder">Sedang</td>
                    <td class="allborder">Besar</td>
                    <td class="allborder">< 3000 Kg</td>
                    <td class="allborder">3001-9000 Kg</td>
                    <td class="allborder">9001-15000 Kg</td>
                    <td class="allborder">15001-21000 Kg</td>
                    <td class="allborder">> 21000 Kg</td>
                    <td class="allborder">Tractor Head</td>
                </tr>

                @php $i=1;$jumlah=0;$mobilpenumpang=0;$buskecil=0;$bussedang=0;$busbesar=0;$barangjbb1=0;$barangjbb2=0;$barangjbb3=0;$barangjbb4=0;$barangjbb5=0;
                $traktorhead=0;$keretagandeng=0;$keretatempelan=0;$lulus=0;$tidaklulus=0;$nu=0;$mutasikeluar=0;$mutasimasuk=0;
                @endphp
                @foreach ($data as $dt) 
                <tr class="aligncenter">
                    <td class="lrborder">{{ $i }}</td>
                    <td class="lrborder">{{ $dt['tgl'] }}</td>
                    <td class="lrborder">{{ $dt['jumlah'] }}</td>
                    <td class="lrborder">{{ $dt['mobilpenumpang'] }}</td>
                    <td class="lrborder">{{ $dt['buskecil'] }}</td>
                    <td class="lrborder">{{ $dt['bussedang'] }}</td>
                    <td class="lrborder">{{ $dt['busbesar'] }}</td>
                    <td class="lrborder">{{ $dt['barangjbb1'] }}</td>
                    <td class="lrborder">{{ $dt['barangjbb2'] }}</td>
                    <td class="lrborder">{{ $dt['barangjbb3'] }}</td>
                    <td class="lrborder">{{ $dt['barangjbb4'] }}</td>
                    <td class="lrborder">{{ $dt['barangjbb5'] }}</td>
                    <td class="lrborder">{{ $dt['traktorhead'] }}</td>
                    <td class="lrborder">{{ $dt['keretatempelan'] }}</td>
                    <td class="lrborder">{{ $dt['keretagandeng'] }}</td>
                    <td class="lrborder">{{ $dt['lulus'] }}</td>
                    <td class="lrborder">{{ $dt['tidaklulus'] }}</td>
                    <td class="lrborder">{{ $dt['nu'] }}</td>
                    <td class="lrborder">{{ $dt['mutasikeluar'] }}</td>
                    <td class="lrborder">{{ $dt['mutasimasuk'] }}</td>
                </tr>
                @php $i++;$jumlah = $jumlah+$dt['jumlah'];$mobilpenumpang=$mobilpenumpang+$dt['mobilpenumpang'];$buskecil=$buskecil+$dt['buskecil'];$bussedang=$bussedang+$dt['bussedang'];$busbesar=$busbesar+$dt['busbesar'];
                $barangjbb1=$barangjbb1+$dt['barangjbb1'];$barangjbb2=$barangjbb2+$dt['barangjbb2'];$barangjbb3=$barangjbb3+$dt['barangjbb3'];$barangjbb4=$barangjbb4+$dt['barangjbb4'];$barangjbb5=$barangjbb5+$dt['barangjbb5'];
                $traktorhead=$traktorhead+$dt['traktorhead'];$keretatempelan=$keretatempelan+$dt['keretatempelan'];$keretagandeng=$keretagandeng+$dt['keretagandeng'];
                $lulus=$lulus+$dt['lulus'];$tidaklulus=$tidaklulus+$dt['tidaklulus'];$nu=$nu+$dt['nu'];$mutasimasuk=$mutasimasuk+$dt['mutasimasuk'];$mutasikeluar=$mutasikeluar+$dt['mutasikeluar'];
                @endphp
                @endforeach
                <tr class="aligncenter allborder">
                    <td colspan="2" class="lrborder"><b>Total</b></td>
                    <td class="lrborder">{{ $jumlah }}</td>
                    <td class="lrborder">{{ $mobilpenumpang }}</td>
                    <td class="lrborder">{{ $buskecil }}</td>
                    <td class="lrborder">{{ $bussedang }}</td>
                    <td class="lrborder">{{ $busbesar }}</td>
                    <td class="lrborder">{{ $barangjbb1 }}</td>
                    <td class="lrborder">{{ $barangjbb2 }}</td>
                    <td class="lrborder">{{ $barangjbb3 }}</td>
                    <td class="lrborder">{{ $barangjbb4 }}</td>
                    <td class="lrborder">{{ $barangjbb5 }}</td>
                    <td class="lrborder">{{ $traktorhead }}</td>
                    <td class="lrborder">{{ $keretatempelan }}</td>
                    <td class="lrborder">{{ $keretagandeng }}</td>
                    <td class="lrborder">{{ $lulus }}</td>
                    <td class="lrborder">{{ $tidaklulus }}</td>
                    <td class="lrborder">{{ $nu }}</td>
                    <td class="lrborder">{{ $mutasikeluar }}</td>
                    <td class="lrborder">{{ $mutasimasuk }}</td>
                </tr>
            </table>
            <table class="table table-borderless">
                <td colspan="10" class="aligncenter">
                    
                </td colspan="10">
                <td class="aligncenter">
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
                </td>
            </table>
        </div>
    </div>
</body>
</html>
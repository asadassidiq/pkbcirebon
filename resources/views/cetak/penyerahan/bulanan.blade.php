<!DOCTYPE html>
<head>
    <title>Laporan Penyerahan Bulanan</title>
    <meta charset="utf-8">
    <link href="{{ asset('css/css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('css/css/style.css') }}" rel="stylesheet">
   <link rel="icon" href="{{ asset('img/icon.ico') }}" type="image/ico">
</head>
<body>
    <div id="form">
        <table class="table table-borderless row-height" id="header">
            <td class="col-logo"><img id="logo-left" src="{{url('/img/kota.jpg')}}"></td>
            <td class="col-title"><h3 class="letter-name space">Laporan Penyerahan Hasil Pengujian Kendaraan Bermotor<br>UPT PKB Dinas Perhubungan Kabupaten Mimika <br>Bulan {{ $tglcetak }}</h3></td>
            <td class="col-logo"><img id="logo-right" src="{{url('/img/dishub.jpg')}}"></h3></td>
        </table>
        <div id="form-nobordered">
            <table class="table table-borderless row-height" id="table">
                <tr class="aligncenter bg-color allborder">
                    <td class="col-small">No.</td>
                    <td class="col-small">Tanggal</td>
                    <td class="col-small">Banyak Hasil Uji yang diserahkan</td>
                    <td class="col-small">Rata-rata Waktu Pelayanan Harian</td>
                </tr>
                @php $i=1;$total=0;$jml=0;$totmenit=0;$totalavg=0;
                @endphp
                @foreach ($data as $dt) 
                <tr class="aligncenter">
                    <td class="lrborder">{{ $i }}</td>
                    <td class="lrborder">{{ $dt['tglpendaftaran'] }}</td>
                    <td class="lrborder">{{ $dt['jml'] }}</td>
                    @php
                        $i++;
                        if($dt['diff'] > 0){
                            $avg = $dt['diff']/$dt['jml'];
                        }
                        else{
                            $avg = 0;
                        }
                        $total = $total+$dt['diff'];
                        $totalavg = $totalavg+$avg;
                        $jml = $jml+$dt['jml'];
                        $jam   = floor($avg / (60 * 60));
                        $menit = $avg - $jam * (60 * 60);
                        $totmenit = $totmenit+($avg - $jam * (60 * 60));
                    @endphp
                    @if($jam > 0)
                    <td class="lrborder">{{ $jam .  ' jam, ' . floor( $menit / 60 ) . ' menit' }}</td>
                    @else
                    <td class="lrborder">{{ floor( $menit / 60 ) . ' menit' }}</td>
                    @endif
                @endforeach
                <tr class="allborder aligncenter">
                    <td class="lrborder alignright" colspan="2">JUMLAH</td>
                    <td class="lrborder">{{ $jml }}</td>
                    @php
                        if($total > 0){
                            $totavg = $totalavg;
                        }else{
                            $totavg = 0;
                        }
                        $jam   = floor($totavg / (60 * 60));
                        $menit = $totavg - $jam * (60 * 60);
                    @endphp
                    @if($jam > 0)
                    <td class="lrborder">{{ $jam .  ' jam, ' . floor( $menit / 60 ) . ' menit' }}</td>
                    @else
                    <td class="lrborder">{{ floor( $menit / 60 ) . ' menit' }}</td>
                    @endif
                </tr>
            </table>
            <p class="aligncenter signature">Banjarmasin, {{ $tglprint }} <br> Kepala UPT PKB <br> Dinas Perhubungan Kabupaten Mimika <br><br><br> <b><u>{{ $ttd['nama'] }}</u></b> <br>NIP. {{ $ttd['nip'] }}</p>
            <table class="table table-borderless row-height" id="table" style=" width: 50%;">
                <tr class="aligncenter bg-color allborder">
                    <td class="col-small">Banyak Hasil Uji yang diserahkan</td>
                    <td class="col-small">Rata-rata Waktu Pelayanan Bulanan</td>
                </tr>
                <tr class="allborder aligncenter">
                    <td class="lrborder">{{ $jml }}</td>
                    @php
                        if($total > 0){
                            $avg = $totalavg/ ($i-1);
                        }else{
                            $avg = 0;
                        }
                        $jam   = floor($avg / (60 * 60));
                        $menit = $avg - $jam * (60 * 60);
                    @endphp
                    @if($jam > 0)
                    <td class="lrborder">{{ $jam .  ' jam, ' . floor( $menit / 60 ) . ' menit' }}</td>
                    @else
                    <td class="lrborder">{{ floor( $menit / 60 ) . ' menit' }}</td>
                    @endif
                </tr>
            </table>
        </div>
    </div>
</body>
</html>
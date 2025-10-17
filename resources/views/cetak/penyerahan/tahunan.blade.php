<!DOCTYPE html>
<head>
    <title>Laporan Penyerahan Harian</title>
    <meta charset="utf-8">
    <link href="{{ asset('css/css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('css/css/style.css') }}" rel="stylesheet">
   <link rel="icon" href="{{ asset('img/icon.ico') }}" type="image/ico">
</head>
<body>
    <div id="form">
        <table class="table table-borderless row-height" id="header">
            <td class="col-logo"><img id="logo-left" src="{{url('/img/kota.jpg')}}"></td>
            <td class="col-title"><h3 class="letter-name space">Laporan Penyerahan Hasil Pengujian Kendaraan Bermotor<br>UPT PKB Dinas Perhubungan Kabupaten Mimika <br>Tahun {{ $tglcetak }}</h3></td>
            <td class="col-logo"><img id="logo-right" src="{{url('/img/dishub.jpg')}}"></h3></td>
        </table>
        <div id="form-nobordered">
            <table class="table table-borderless row-height" id="table">
                <tr class="aligncenter bg-color allborder">
                    <td class="col-small">No.</td>
                    <td class="col-small">Tanggal</td>
                    <td class="col-small">Banyak Hasil Uji yang diserahkan</td>
                    <td class="col-small">Rata-rata Waktu Pelayanan Bulanan</td>
                </tr>
                @php $i=1;$total=0;$jml=0;$totmenit=0;$totalavg=0;
                @endphp
                @foreach ($data as $dt) 
                <tr class="aligncenter">
                    <td class="lrborder">{{ $i }}</td>
                    @php
                        $i++;
                    @endphp
                    <td class="lrborder">{{ $dt['tgl'] }}</td>
                    <td class="lrborder">{{ $dt['jml'] }}</td>
                    @if($dt['jml'] > 0)
                        @php
                            $i++;
                            $avg = $dt['diff']/$dt['jml'];
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
                    @else
                    <td class="lrborder">{{ '0 menit' }}</td>
                    @endif
                @endforeach
                <tr class="allborder aligncenter">
                    <td class="lrborder alignright" colspan="2">JUMLAH</td>
                    <td class="lrborder">{{ $jml }}</td>
                    @php
                        if($totalavg > 0){
                            $avg = $totalavg;
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
            <p class="aligncenter signature">Mimika, {{ $tglprint }} <br> Kepala UPT PKB <br> Dinas Perhubungan Kabupaten Mimika <br><br><br> <b><u>{{ $ttd['nama'] }}</u></b> <br>NIP. {{ $ttd['nip'] }}</p>
            <table class="table table-borderless row-height" id="table" style=" width: 50%;">
                <tr class="aligncenter bg-color allborder">
                    <td class="col-small">Banyak Hasil Uji yang diserahkan Tahun {{ $tglcetak }}</td>
                    <td class="col-small">Rata-rata Waktu Pelayanan Tahun {{ $tglcetak }}</td>
                </tr>
                <tr class="allborder aligncenter">
                    <td class="lrborder">{{ $jml }}</td>
                    @php
                        if($totalavg > 0){
                            $avg = round($totalavg/12);
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
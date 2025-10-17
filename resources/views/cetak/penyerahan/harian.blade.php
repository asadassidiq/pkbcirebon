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
            <td class="col-title"><h3 class="letter-name space">Laporan Penyerahan Harian tanggal {{ $tglcetak }}<br>UPT PKB Dinas Perhubungan Kabupaten Mimika <br> Tahun {{ substr($tglcetak,strlen($tglcetak)-4,4); }}</h3></td>
            <td class="col-logo"><img id="logo-right" src="{{url('/img/dishub.jpg')}}"></h3></td>
        </table>
        <div id="form-nobordered">
            <table class="table table-borderless row-height" id="table">
                <tr class="aligncenter bg-color allborder">
                    <td class="col-small">No.</td>
                    <td class="allborder">Nama Pemilik</td>
                    <td class="allborder">Nomor Uji</td>
                    <td class="allborder">Nomor Kendaraan</td>
                    <td class="allborder">Nama Penerima</td>
                    <td class="allborder">No. Handphone</td>
                    <td class="allborder">Jam Daftar</td>
                    <td class="allborder">Jam Penyerahan</td>
                    <td class="allborder">Lama Waktu Pelayanan</td>
                </tr>
                @php $i=1;$total=0;
                @endphp
                @foreach ($data as $dt) 
                <tr class="aligncenter">
                    <td class="lrborder">{{ $i }}</td>
                    <td class="lrborder">{{ $dt->nama }}</td>
                    <td class="lrborder">{{ $dt->nouji }}</td>
                    <td class="lrborder">{{ $dt->noregistrasikendaraan }}</td>
                    <td class="lrborder">{{ $dt->namapenerima }}</td>
                    <td class="lrborder">{{ $dt->notelp }}</td>
                    <td class="lrborder">{{ date_format(date_create($dt->created_at),'H:i') }}</td>
                    <td class="lrborder">{{ date_format(date_create($dt->updated_at),'H:i') }}</td>
                    @php
                        $i++;
                        $awal  = strtotime($dt->created_at);
                        $akhir = strtotime($dt->updated_at);
                        $diff  = $akhir - $awal;
                        $total = $total+$diff;
                        $jam   = floor($diff / (60 * 60));
                        $menit = $diff - $jam * (60 * 60);
                    @endphp
                    @if($jam > 0)
                    <td class="lrborder">{{ $jam .  ' jam, ' . floor( $menit / 60 ) . ' menit' }}</td>
                    @else
                    <td class="lrborder">{{ floor( $menit / 60 ) . ' menit' }}</td>
                    @endif
                </tr>
                @endforeach
                <tr class="allborder alignright">
                    <td colspan="8" class="lrborder">RATA-RATA WAKTU PELAYANAN</td>
                    @php
                        $avg = round($total/($i-1));
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
            <p class="aligncenter signature">Banjarmasin,  {{ $tglprint }}
	    <br>Kepala UPT PKB <br>Dinas Perhubungan Kabupaten Mimika<br>
<br><br><br> <b><u>{{ $ttd['nama'] }}</u></b> <br>NIP. {{ $ttd['nip'] }}</p>
        </div>
    </div>
</body>
</html>
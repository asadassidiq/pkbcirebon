<table>
    <thead>
        <tr>
            <td colspan="13"><b>LAPORAN BULANAN PEMAKAIN SMART CARD</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>UPT PKB DISHUB KOTA CIREBON</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>BULAN {{ $tglprint }}</b></td>
        </tr>

    </thead>
    <tbody>
        <tr>
            <th scope="col">NO</th>
            <th scope="col">TANGGAL</th>
            <th scope="col">NO UJI</th>
            <th scope="col">NO KENDARAAN</th>
            <th scope="col">MASA BERLAKU UJI</th>
            <th scope="col">NO KENDALI KARTU</th>
            <th scope="col">STATUS KARTU</th>
            <th scope="col">KET</th>
        </tr>
        @php $i=1
        @endphp
        @foreach ($kendaraan as $data) 
        <tr>
            <th scope="row">{{ $i }}</th>
            <td>{{ $data->tgl }}</td>
            <td>{{ $data->nouji }}</td>
            <td>{{ $data->noregistrasikendaraan }}</td>
            @php
                if (strlen($data->masaberlakuuji) === 8) {
                    $hari  = substr($data->masaberlakuuji, 0, 2);
                    $bulan = substr($data->masaberlakuuji, 2, 2);
                    $tahun = substr($data->masaberlakuuji, 4, 4);
                    $masaberlakuuji = "$tahun-$bulan-$hari";
                } else {
                    $masaberlakuuji = '-'; 
                }
            @endphp
            <td>{{ $masaberlakuuji }}</td>
            <td>{{ $data->nokendalikartu }}</td>
            @if ($data->perso == '1')
            <td>BARU</td>
            @else
            <td>LAMA</td>
            @endif
            <td></td>
        </tr>
        @php $i++
        @endphp
        @endforeach
    </tbody>
</table>
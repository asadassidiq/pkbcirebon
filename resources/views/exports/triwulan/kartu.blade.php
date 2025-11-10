<table>
    <thead>
        <tr>
            <td colspan="13"><b>LAPORAN TRIWULAN PEMAKAIN SMART CARD</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>UPT PKB DISHUB KOTA CIREBON</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>TRIWULAN KE  {{ $tglprint }}</b></td>
        </tr>

    </thead>
    <tbody>
        <tr>
            <th scope="col" rowspan="2" style="text-align: center">NO</th>
            <th scope="col" rowspan="2" style="text-align: center">BULAN</th>
            <th scope="col" colspan="4" style="text-align: center">STATUS KARTU</th>
            <th scope="col" rowspan="2" style="text-align: center">KET</th>
        </tr>
        <tr>
            <th style="text-align: center">BARU</th>
            <th style="text-align: center">PERPANJANGAN</th>
            <th style="text-align: center">RUSAK</th>
            <th style="text-align: center">HILANG</th>
        </tr>
        @php $i=1;
        $baru=0;
        $perpanjangan=0;
        $rusak=0;
        $hilang=0;
        @endphp
        @foreach ($kendaraan as $data) 
        <tr>
            <th scope="row">{{ $i }}</th>
            <td>{{ $data['bulan'] }}</td>
            <td>{{ $data['baru'] }}</td>
            <td>{{ $data['perpanjangan'] }}</td>
            <td>{{ $data['rusak'] }}</td>
            <td>{{ $data['hilang'] }}</td>
            <td></td>
        </tr>
        @php $i++;
        $baru += $data['baru'];
        $perpanjangan += $data['perpanjangan'];
        $rusak += $data['rusak'];
        $hilang += $data['hilang'];
        @endphp
        @endforeach
        <tr>
            <td colspan="2">TOTAL</td>
            <td>{{ $baru }}</td>
            <td>{{ $perpanjangan }}</td>
            <td>{{ $rusak }}</td>
            <td>{{ $hilang }}</td>
            <td></td>
        </tr>
    </tbody>
</table>
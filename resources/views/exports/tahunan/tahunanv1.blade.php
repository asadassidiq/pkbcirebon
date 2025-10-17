<table>
    <thead>
        <tr>
            <th colspan="13"><b>LAPORAN RINCIAN KENDARAAN UJI</b></th>
        </tr>
        <tr>
            <th colspan="13"><b>PERIODE : {{ $tglprint }}</b></th>
        </tr>
        <tr>
            <th scope="col"><b>NO</b></th>
            <th scope="col"><b>NO UJI KENDARAAN</b></th>
            <th scope="col"><b>NO KENDARAAN</b></th>
            <th scope="col"><b>NAMA PEMILIK</b></th>
            <th scope="col"><b>JENIS KENDARAAN</b></th>
            <th scope="col"><b>JBB</b></th>
            <th scope="col"><b>KENDARAAN</b></th>
            <th scope="col"><b>JENIS PELAYANAN</b></th>
            <th scope="col"><b>HASIL UJI</b></th>
            <th scope="col"><b>PERUNTUKAN</b></th>
            <th scope="col"><b>KARTU</b></th>
        </tr>
    </thead>
    <tbody>
        @php $i=1
        @endphp
        @foreach ($kendaraan as $data)
        <tr>
            <th scope="row">{{ $i }}</th>
            <td>{{ $data['nouji'] }}</td>
            <td>{{ $data['noregistrasikendaraan'] }}</td>
            <td>{{ $data['nama'] }}</td>
            <td>{{ $data['alamat'] }}</td>
            <td>{{ $data['masaberlakuuji'] }}</td>
            <td>{{ $data['merek'] }}</td>
            <td>{{ $data['tipe'] }}</td>
            <td>{{ $data['thpembuatan'] }}</td>
            <td>{{ $data['jenis'] }}</td>
            <td>{{ $data['model'] }}</td>
            <td>{{ $data['konfigurasisumburoda'] }}</td>
            <td>{{ $data['norangka'] }}</td>
            <td>{{ $data['peruntukan'] }}</td>
            <td>{{ $data['kartu'] }}</td>
        </tr>
        @php $i++
        @endphp
        @endforeach
    </tbody>
</table>
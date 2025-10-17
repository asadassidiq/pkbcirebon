<table>
    <thead>

        <tr>
            <th colspan="13"><b>Laporan Kendaraan Bermotor</b></th>
            <!-- <th colspan="13"><b>Bulan {{ $tglprint }}</b></th> -->
        </tr>
        <tr>
            <th colspan="13"><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></th>
        </tr>

        <tr></tr>
        <tr>
            <th scope="col">NO</th>
            <th scope="col">NO UJI KENDARAAN</th>
            <th scope="col">NO KENDARAAN</th>
            <th scope="col">NAMA PEMILIK</th>
            <th scope="col">ALAMAT PEMILIK</th>
            <th scope="col">JENIS KENDARAAN</th>
            <th scope="col">JBB</th>
            <th scope="col">PERUNTUKAN</th>
        </tr>
    </thead>
    <tbody>
        @php $i=1
        @endphp

        @foreach ($data as $data)
        <tr>
            <th scope="row">{{ $i }}</th>
            <td>{{ $data->nouji }}</td>
            <td>{{ $data->noregistrasikendaraan }}</td>
            <td>{{ $data->nama }}</td>
            <td>{{ $data->alamat }}</td>
            <td>{{ $data->jenis }}</td>
            <td>{{ $data->model }}</td>
            <td>{{ $data->jbb }}</td>
            <td>{{ $data->peruntukan }}</td>
        </tr>
        @php $i++
        @endphp
        @endforeach
    </tbody>
</table>
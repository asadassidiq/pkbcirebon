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
            <th scope="col"><b>NO</b></th>
            <th scope="col"><b>TANGGAL</b></th>
            <th scope="col"><b>NO UJI</b></th>
            <th scope="col"><b>NO KENDARAAN</b></th>
            <th scope="col"><b>NAMA PEMILIK</b></th>
            <th scope="col"><b>ALAMAT PEMILIK</b></th>
            <th scope="col"><b>JENIS KENDARAAN</b></th>
            <th scope="col"><b>MODEL</b></th>
            <th scope="col"><b>JBB</b></th>
            <th scope="col"><b>PENDAFTARAN</b></th>
            <th scope="col"><b>PERUNTUKAN</b></th>
        </tr>
    </thead>
    <tbody>
        @php $i=1
        @endphp

        @foreach ($data as $data)
        <tr>
            <th scope="row">{{ $i }}</th>
            <td>{{ date_format(date_create($data->tglpendaftaran),'d-m-Y') }}</td>
            <td>{{ $data->nouji }}</td>
            <td>{{ $data->noregistrasikendaraan }}</td>
            <td>{{ $data->nama }}</td>
            <td>{{ $data->alamat }}</td>
            <td>{{ $data->jenis }}</td>
            <td>{{ $data->model }}</td>
            <td>{{ $data->jbb }}</td>
            <td>{{ $data->keterangan }}</td>
            <td>{{ $data->peruntukan }}</td>
        </tr>
        @php $i++
        @endphp
        @endforeach
    </tbody>
</table>
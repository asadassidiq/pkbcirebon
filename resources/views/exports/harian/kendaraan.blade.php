<table>
    <thead>
        <tr>
            <th colspan="13"><b>LAPORAN RINCIAN KENDARAAN UJI</b></th>
        </tr>
        <tr>
            <th colspan="13"><b>PERIODE : {{ $tglprint }}</b></th>
        </tr>
        <tr>
            <th scope="col">NO</th>
            <th scope="col">NO UJI KENDARAAN</th>
            <th scope="col">NO KENDARAAN</th>
            <th scope="col">PEMILIK</th>
            <th scope="col">ALAMAT</th>
            <th scope="col">AKHIR UJI</th>
            <th scope="col">MERK</th>
            <th scope="col">TYPE</th>
            <th scope="col">TAHUN BUAT</th>
            <th scope="col">JENIS KENDARAAN</th>
            <th scope="col">SUB JENIS KENDARAAN</th>
            <th scope="col">SUMBU</th>
            <th scope="col">NO RANGKA</th>
            <th scope="col">JENIS ANGKUTAN</th>
            <th scope="col">KARTU</th>
        </tr>
    </thead>
    <tbody>
        @php $i=1
        @endphp
        @foreach ($kendaraan as $data)
        <tr>
            <th scope="row">{{ $i }}</th>
            <td>{{ $data->nouji }}</td>
            <td>{{ $data->noregistrasikendaraan }}</td>
            <td>{{ $data->nama }}</td>
            <td>{{ $data->klasifikasis }}</td>
            <td>{{ $data->jbb }}</td>
            <td>{{ $data->model }}</td>
            <td>{{ $data->keterangan }}</td>
            @if ($data->statuslulusuji == 1)
            <td>LULUS</td>
            @else
            <td>TIDAK LULUS</td>
            @endif
            <td>{{ $data->peruntukan }}</td>
            @if (!empty($data->rfid_tid))
            <td>BARU</td>
            @else
            <td>LAMA</td>
            @endif
        </tr>
        @php $i++
        @endphp
        @endforeach
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr>
            <td><b>LAMPIRAN 1</b></td>
        </tr>
        <tr>
            <td><b>DATA ADMINISTRASI</b></td>
        </tr>
        <tr>
            <td><b>{{ $tglprint }}</b></td>
        </tr>
        <tr>
            <td><b>JENIS KENDARAAN</b></td>
            <td><b>JUMLAH</b></td>
        </tr>
        @foreach ($jenis as $data)
        <tr>
            <td>{{ $data['jenis']  }}</td>
            <td>{{ $data['jumlah'] }}</td>
        </tr>
        @endforeach
        <tr></tr>
        <tr>
            <td><b>MOBIL BARANG</b></td>
            <td><b>JUMLAH</b></td>
        </tr>
        @foreach ($barang as $data)
        <tr>
            <td>{{ $data['model'] }}</td>
            <td>{{ $data['total'] }}</td>
        </tr>
        @endforeach
        <tr></tr>
        <tr>
            <td><b>JENIS PELAYANAN</b></td>
            <td><b>JUMLAH</b></td>
        </tr>
        @foreach ($jenispelayanan as $data)
        <tr>
            <td>{{ $data['jenispelayanan']  }}</td>
            <td>{{ $data['jumlah'] }}</td>
        </tr>
        @endforeach
        <tr></tr>
        <tr>
            <td><b>KETERANGAN</b></td>
            <td><b>JUMLAH</b></td>
        </tr>
        <tr>
            <td>LULUS</td>
            <td>{{ $lulus }}</td>
        </tr>
        <tr>
            <td>TIDAK LULUS</td>
            <td>{{ $tidaklulus }}</td>
        </tr>
        <tr></tr>
        <tr>
            <td><b>UMUM / TIDAK UMUM</b></td>
            <td><b>JUMLAH</b></td>
        </tr>
        <tr>
            <td>UMUM</td>
            <td>{{ $umum }}</td>
        </tr>
        <tr>
            <td>TIDAK UMUM</td>
            <td>{{ $tidakumum }}</td>
        </tr>
        <tr></tr>
        <tr>
            <td><b>PEMAKAIN KARTU UJI</b></td>
            <td><b>JUMLAH</b></td>
        </tr>
        <tr>
            <td>BARU</td>
            <td>{{ $pemakaianbuku['baru'] }}</td>
        </tr>
        <tr>
            <td>RUSAK</td>
            <td>{{ $pemakaianbuku['rusak'] }}</td>
        </tr>
        <tr>
            <td>HILANG</td>
            <td>{{ $pemakaianbuku['hilang'] }}</td>
        </tr>
    </tbody>
</table>
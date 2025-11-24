<table>
    <thead>
        <tr>
            <td colspan="13"><b>LAPORAN TRIWULAN PENGUJIAN KENDARAAN BERMOTOR</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>MENURUT JENIS PELAYANAN</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>TRIWULAN KE {{ $tglprint }}</b></td>
        </tr>

    </thead>
    <tbody>
        <tr>
            <th scope="col" rowspan="3">NO</th>
            <th scope="col" rowspan="3">TANGGAL</th>
            <th scope="col" colspan="8">JENIS PELAYANAN</th>
            <th scope="col" colspan="2">HASIL UJI</th>
            <th scope="col" rowspan="3">KET</th>
        </tr>
        <tr>
            <th colspan="5">PELAYANAN ADMINISTRASI & TEKNIK</th>
            <th colspan="2">PELAYANAN ADMINISTRASI</th>
            <th rowspan="2">UJI ULANG</th>
            <th rowspan="2">LULUS</th>
            <th rowspan="2">TIDAK LULUS</th>
        </tr>
        <tr>
            <th>UJI PERTAMA</th>
            <th>UJI BERKALA</th>
            <th>NUMPANG UJI MASUK</th>
            <th>MUTASI MASUK</th>
            <th>RUBAH BENTUK</th>
            <th>NUMPANG UJI KELUAR</th>
            <th>MUTASI KELUAR</th>
        </tr>
        @php $i=1;
        $ujipertama = 0;
        $ujiberkala = 0;
        $numasuk = 0;
        $mutasimasuk = 0;
        $rubahbentuk = 0;
        $nukeluar = 0;
        $mutasikeluar = 0;
        $ujiulang = 0;
        $lulus = 0;
        $tidaklulus = 0;
        @endphp
        @foreach ($data as $data) 
        <tr>
            <th scope="row">{{ $i }}</th>
            <td>{{ $data['bulan'] }}</td>
            <td>{{ $data['ujipertama'] }}</td>
            <td>{{ $data['ujiberkala'] }}</td>
            <td>{{ $data['numasuk'] }}</td>
            <td>{{ $data['mutasimasuk'] }}</td>
            <td>{{ $data['rubahbentuk'] }}</td>
            <td>{{ $data['nukeluar'] }}</td>
            <td>{{ $data['mutasikeluar'] }}</td>
            <td>{{ $data['ujiulang'] }}</td>
            <td>{{ $data['lulus'] }}</td>
            <td>{{ $data['tidaklulus'] }}</td>
            <td></td>
        </tr>
        @php $i++;
        $ujipertama += $data['ujipertama'];
        $ujiberkala += $data['ujiberkala'];
        $numasuk += $data['numasuk'];
        $mutasimasuk += $data['mutasimasuk'];
        $rubahbentuk += $data['rubahbentuk'];
        $nukeluar += $data['nukeluar'];
        $mutasikeluar += $data['mutasikeluar'];
        $ujiulang += $data['ujiulang'];
        $lulus += $data['lulus'];
        $tidaklulus += $data['tidaklulus'];
        @endphp
        @endforeach
        <tr>
            <th scope="row" colspan="2">TOTAL</th>
            <td>{{ $ujipertama }}</td>
            <td>{{ $ujiberkala }}</td>
            <td>{{ $numasuk }}</td>
            <td>{{ $mutasimasuk }}</td>
            <td>{{ $rubahbentuk }}</td>
            <td>{{ $nukeluar }}</td>
            <td>{{ $mutasikeluar }}</td>
            <td>{{ $ujiulang }}</td>
            <td>{{ $lulus }}</td>
            <td>{{ $tidaklulus }}</td>
            <td></td>
        </tr>
    </tbody>
</table>
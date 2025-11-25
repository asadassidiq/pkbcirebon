<table>
    <thead>
        <tr>
            <td colspan="13"><b>LAPORAN BULANAN PENGUJIAN KENDARAAN BERMOTOR</b></td>
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
            <td rowspan="3">NO</td>
            <td rowspan="3">TANGGAL</td>
            <td colspan="9">JENIS PELAYANAN</td>
            <td colspan="2">HASIL UJI</td>
            <td rowspan="3">KET</td>
        </tr>
        <tr>
            <td colspan="5">PELAYANAN ADMINISTRASI dan TEKNIK</td>
            <td colspan="3">PELAYANAN ADMINISTRASI</td>
            <td rowspan="2">UJI ULANG</td>
            <td rowspan="2">LULUS</td>
            <td rowspan="2">TIDAK LULUS</td>
        </tr>
        <tr>
            <td>UJI PERTAMA</td>
            <td>UJI BERKALA</td>
            <td>NUMPANG UJI MASUK</td>
            <td>MUTASI MASUK</td>
            <td>RUBAH BENTUK</td>
            <td>NUMPANG UJI KELUAR</td>
            <td>MUTASI KELUAR</td>
            <td>HILANG</td>
        </tr>
        @php
        $i=1;
        $ujipertama = 0;
        $ujiberkala = 0;
        $numasuk = 0;
        $mutasimasuk = 0;
        $rubahbentuk = 0;
        $nukeluar = 0;
        $mutasikeluar = 0;
        $hilang = 0;
        $ujiulang = 0;
        $lulus = 0;
        $tidaklulus = 0;
        @endphp
        @foreach ($data as $data)
        <tr>
            <td scope="row">{{ $i }}</td>
            <td>{{ $data['bulan'] }}</td>
            <td>{{ $data['ujipertama'] }}</td>
            <td>{{ $data['ujiberkala'] }}</td>
            <td>{{ $data['numasuk'] }}</td>
            <td>{{ $data['mutasimasuk'] }}</td>
            <td>{{ $data['rubahbentuk'] }}</td>
            <td>{{ $data['nukeluar'] }}</td>
            <td>{{ $data['mutasikeluar'] }}</td>
            <td>{{ $data['hilang'] }}</td>
            <td>{{ $data['ujiulang'] }}</td>
            <td>{{ $data['lulus'] }}</td>
            <td>{{ $data['tidaklulus'] }}</td>
            <td></td>
        </tr>
        @php
        $i++;
        $ujipertama += $data['ujipertama'];
        $ujiberkala += $data['ujiberkala'];
        $numasuk += $data['numasuk'];
        $mutasimasuk += $data['mutasimasuk'];
        $rubahbentuk += $data['rubahbentuk'];
        $nukeluar += $data['nukeluar'];
        $mutasikeluar += $data['mutasikeluar'];
        $hilang += $data['hilang'];
        $ujiulang += $data['ujiulang'];
        $lulus += $data['lulus'];
        $tidaklulus += $data['tidaklulus'];
        @endphp
        @endforeach
        <tr>
            <td scope="row" colspan="2">TOTAL</td>
            <td>{{ $ujipertama }}</td>
            <td>{{ $ujiberkala }}</td>
            <td>{{ $numasuk }}</td>
            <td>{{ $mutasimasuk }}</td>
            <td>{{ $rubahbentuk }}</td>
            <td>{{ $nukeluar }}</td>
            <td>{{ $mutasikeluar }}</td>
            <td>{{ $hilang }}</td>
            <td>{{ $ujiulang }}</td>
            <td>{{ $lulus }}</td>
            <td>{{ $tidaklulus }}</td>
            <td></td>
        </tr>
    </tbody>
</table>
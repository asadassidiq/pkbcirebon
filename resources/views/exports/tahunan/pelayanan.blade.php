<table>
    <thead>
        <tr>
            <td colspan="13"><b>Laporan Bulanan Jenis Pelayanan Pengujian Kendaraan Bermotor</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Tahun {{ $tglprint }}</b></td>
        </tr>

    </thead>
    <tbody>
        <tr>
            <td rowspan="3">No</td>
            <td rowspan="3" class="text-center">Tanggal</td>
            <td class="text-center" colspan="9">Jenis Pelayanan</td>
            <td class="text-center" colspan="2">Keterangan</td>
            <td scope="col" class="text-center" colspan="4">Kartu</td>
        </tr>
        <tr>
            <td scope="col" colspan="4">Pelayanan Admin dan Mekanis</td>
            <td scope="col" colspan="2">Pelayanan Administrasi</td>
            <td scope="col" rowspan="2">Jumlah</td>
            <td scope="col" rowspan="2">Uji Ulang</td>
            <td scope="col" rowspan="2">Jumlah Total Pelayanan</td>
            <td scope="col" rowspan="2">Lulus</td>
            <td scope="col" rowspan="2">Tidak</td>
            <td scope="col" rowspan="2">Baru</td>
            <td scope="col" rowspan="2">Lama</td>
            <td scope="col" rowspan="2">Rusak</td>
            <td scope="col" rowspan="2">Hilang</td>
        </tr>
        <tr>
            <td scope="col">Uji Pertama</td>
            <td scope="col">Uji Berkala</td>
            <td scope="col">Numpang Uji Masuk</td>
            <td scope="col">Mutasi Masuk</td>
            <td scope="col">Numpang Uji Keluar</td>
            <td scope="col">Mutasi Keluar</td>
        </tr>
        @php
        $i=1;$ujipertama=0;$ujiberkala=0;$numasuk=0;$nukeluar=0;
        $rubahbentuk=0;$mutasimasuk=0;$mutasikeluar=0;$jumlah=0;
        $ujiulang=0;$jumlahtotal=0;$lulus=0;$tidaklulus=0;
        $baru=0;$rusak=0;$hilang=0;$lama=0;
        @endphp
        @foreach ($data as $dt)
        <tr>
            <td scope="row">{{ $i }}</td>
            <td class="text-center">{{ $dt['tgl'] }}</td>
            <td class="text-center">{{ $dt['ujipertama'] }}</td>
            <td class="text-center">{{ $dt['ujiberkala'] }}</td>
            <td class="text-center">{{ $dt['numasuk'] }}</td>
            <td class="text-center">{{ $dt['mutasimasuk'] }}</td>
            <td class="text-center">{{ $dt['nukeluar'] }}</td>
            <td class="text-center">{{ $dt['mutasikeluar'] }}</td>
            <td class="text-center">{{ $dt['jumlah'] }}</td>
            <td class="text-center">{{ $dt['ujiulang'] }}</td>
            <td class="text-center">{{ $dt['jumlahtotal'] }}</td>
            <td class="text-center">{{ $dt['lulus'] }}</td>
            <td class="text-center">{{ $dt['tidaklulus'] }}</td>
            <td class="text-center">{{ $dt['baru'] }}</td>
            <td class="text-center">{{ $dt['lama'] }}</td>
            <td class="text-center">{{ $dt['rusak'] }}</td>
            <td class="text-center">{{ $dt['hilang'] }}</td>
        </tr>
        @php
        $i++;$ujipertama=$ujipertama+$dt['ujipertama'];$ujiberkala=$ujiberkala+$dt['ujiberkala'];$numasuk=$numasuk+$dt['numasuk'];$nukeluar=$nukeluar+$dt['nukeluar'];
        $mutasimasuk=$mutasimasuk+$dt['mutasimasuk'];$mutasikeluar=$mutasikeluar+$dt['mutasikeluar'];$jumlah=$jumlah+$dt['jumlah'];$ujiulang=$ujiulang+$dt['ujiulang'];$jumlahtotal=$jumlahtotal+$dt['jumlahtotal'];$lulus=$lulus+$dt['lulus'];$tidaklulus=$tidaklulus+$dt['tidaklulus'];
        $baru=$baru+$dt['baru'];$rusak=$rusak+$dt['rusak'];$hilang=$hilang+$dt['hilang'];$lama=$lama+$dt['lama'];
        @endphp
        @endforeach
        <tr>
            <td class="text-center" colspan="2">Total</td>

            <td class="text-center">{{ $ujipertama }}</td>
            <td class="text-center">{{ $ujiberkala }}</td>
            <td class="text-center">{{ $numasuk }}</td>
            <td class="text-center">{{ $mutasimasuk }}</td>
            <td class="text-center">{{ $nukeluar }}</td>
            <td class="text-center">{{ $mutasikeluar }}</td>
            <td class="text-center">{{ $jumlah }}</td>
            <td class="text-center">{{ $ujiulang }}</td>
            <td class="text-center">{{ $jumlahtotal }}</td>
            <td class="text-center">{{ $lulus }}</td>
            <td class="text-center">{{ $tidaklulus }}</td>
            <td class="text-center">{{ $baru }}</td>
            <td class="text-center">{{ $lama }}</td>
            <td class="text-center">{{ $rusak }}</td>
            <td class="text-center">{{ $hilang }}</td>
        </tr>

        <tr></tr>

        <tr>
            <td colspan="13"><b>Tabel Jenis Pelayanan Administrasi dan Mekanisr</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Tahun {{ $tglprint }}</b></td>
        </tr>
        <tr></tr>
        <tr>
            <td rowspan="2">No</td>
            <td rowspan="2" class="text-center">Tanggal</td>
            <td class="text-center" colspan="5">Pelayanan Admin dan Mekanis</td>
            <td class="text-center" colspan="2">Keterangan</td>
        </tr>
        <tr>
            <td>Uji Pertama</td>
            <td>Uji Berkala</td>
            <td>Numpang Uji Masuk</td>
            <td>Mutasi Masuk</td>
            <td>Jumlah</td>
            <td>Lulus</td>
            <td>Tidak</td>
        </tr>
        @php
        $i=1;$ujipertama=0;$ujiberkala=0;$numasuk=0;$rubahbentuk=0;$mutasimasuk=0;$jumlah=0;$lulus=0;$tidaklulus=0;$ujipertama1=0;$ujiberkala1=0;$numasuk1=0;$rubahbentuk1=0;$mutasimasuk1=0;$jumlah1=0;$lulus1=0;$tidaklulus1=0;
        @endphp
        @foreach ($data1 as $dt)
        <tr>
            <td scope="row">{{ $i }}</td>
            <td class="text-center">{{ $dt['tgl'] }}</td>
            <td class="text-center">{{ $dt['ujipertama'] }}</td>
            <td class="text-center">{{ $dt['ujiberkala'] }}</td>
            <td class="text-center">{{ $dt['numasuk'] }}</td>
            <td class="text-center">{{ $dt['mutasimasuk'] }}</td>
            <td class="text-center">{{ $dt['jumlah'] }}</td>
            <td class="text-center">{{ $dt['lulus'] }}</td>
            <td class="text-center">{{ $dt['tidaklulus'] }}</td>
        </tr>
        @php
        $i++;$ujipertama=$ujipertama+$dt['ujipertama'];$ujiberkala=$ujiberkala+$dt['ujiberkala'];$numasuk=$numasuk+$dt['numasuk'];$rubahbentuk=$rubahbentuk+$dt['rubahbentuk'];$mutasimasuk=$mutasimasuk+$dt['mutasimasuk'];$jumlah=$jumlah+$dt['jumlah'];$lulus=$lulus+$dt['lulus'];$tidaklulus=$tidaklulus+$dt['tidaklulus'];
        @endphp
        @endforeach
        @php
        if($ujipertama == 0){
        $ujipertama1 = 0;
        }else{
        $ujipertama1= round(((int)$ujipertama/(int)$jumlah)*100,2);
        }
        if($ujiberkala == 0){
        $ujiberkala1 = 0;
        }else{
        $ujiberkala1= round(((int)$ujiberkala/(int)$jumlah)*100,2);
        }
        if($numasuk == 0){
        $numasuk1 = 0;
        }else{
        $numasuk1= round(((int)$numasuk/(int)$jumlah)*100,2);
        }
        if($rubahbentuk == 0){
        $rubahbentuk1 = 0;
        }else{
        $rubahbentuk1 = round(((int)$rubahbentuk/(int)$jumlah)*100,2);
        }
        if($mutasimasuk == 0){
        $mutasimasuk1 = 0;
        }else{
        $mutasimasuk1 = round(((int)$mutasimasuk/(int)$jumlah)*100,2);
        }
        if($lulus == 0){
        $lulus1 = 0;
        }else{
        $lulus1 = round(((int)$lulus/(int)$jumlah)*100,2);
        }
        if($tidaklulus == 0){
        $tidaklulus1 = 0;
        }else{
        $tidaklulus1 = round(((int)$tidaklulus/(int)$jumlah)*100,2);
        }
        @endphp
        <tr>
            <td class="text-center" colspan="2"><b>Total</b></td>
            <td class="text-center">{{ $ujipertama }}</td>
            <td class="text-center">{{ $ujiberkala }}</td>
            <td class="text-center">{{ $numasuk }}</td>
            <td class="text-center">{{ $mutasimasuk }}</td>
            <td class="text-center">{{ $jumlah }}</td>
            <td class="text-center">{{ $lulus }}</td>
            <td class="text-center">{{ $tidaklulus }}</td>
        </tr>
        <tr>
            <td class="text-center" colspan="2"><b>Total</b></td>
            <td class="text-center">{{ $ujipertama1 }} %</td>
            <td class="text-center">{{ $ujiberkala1 }} %</td>
            <td class="text-center">{{ $numasuk1 }} %</td>
            <td class="text-center">{{ $mutasimasuk1 }} %</td>
            <td class="text-center"></td>
            <td class="text-center">{{ $lulus1 }} %</td>
            <td class="text-center">{{ $tidaklulus1 }} %</td>
        </tr>

        <tr></tr>

        <tr>
            <td><b>Tabel Jenis Pelayanan Administrasi</b></td>
        </tr>
        <tr>
            <td><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b> </td>
        </tr>
        <tr>
            <td><b> Tahun {{ $tglprint }} </b></td>
        </tr>
        <tr></tr>
        <tr>
            <td scope="col" rowspan="2" class="text-center">No</td>
            <td scope="col" rowspan="2" class="text-center">Tanggal</td>
            <td scope="col" class="text-center" colspan="3">Pelayanan Administrasi</td>
        </tr>
        <tr>
            <td scope="col" class="text-center">Numpang Uji Keluar</td>
            <td scope="col" class="text-center">Mutasi Keluar</td>
            <td scope="col" class="text-center">Jumlah</td>
        </tr>
        @php
        $i=1;$nukeluar=0;$mutasikeluar=0;$jumlah=0;$nukeluar1=0;$mutasikeluar1=0;;
        @endphp
        @foreach ($data2 as $dt)
        <tr>
            <td class="text-center" scope="row">{{ $i }}</td>
            <td class="text-center">{{ $dt['tgl'] }}</td>
            <td class="text-center">{{ $dt['nukeluar'] }}</td>
            <td class="text-center">{{ $dt['mutasikeluar'] }}</td>
            <td class="text-center">{{ $dt['jumlah'] }}</td>
        </tr>
        @php
        $i++;$nukeluar=$nukeluar+$dt['nukeluar'];$mutasikeluar=$mutasikeluar+$dt['mutasikeluar'];$jumlah=$jumlah+$dt['jumlah'];
        @endphp
        @endforeach
        <tr>
            <td colspan="2" class="text-center"><b>Total</b></td>
            <td class="text-center">{{ $nukeluar }}</td>
            <td class="text-center">{{ $mutasikeluar }}</td>
            <td class="text-center">{{ $jumlah }}</td>
        </tr>
        <tr>
            <td colspan="2" class="text-center"><b>Presentasi</b></td>
            @if($nukeluar == 0)
            @php
            $nukeluar1 = 0;
            @endphp
            <td class="text-center"> {{ $nukeluar1 }} %</td>
            @else
            @php
            $nukeluar1 = round(((int)$nukeluar/(int)$jumlah)*100);
            @endphp
            <td class="text-center">{{ $nukeluar1 }} %</td>
            @endif
            @if($mutasikeluar == 0)
            @php
            $mutasikeluar = 0;
            @endphp
            <td class="text-center"> {{ $mutasikeluar }} %</td>
            @else
            @php
            $mutasikeluar1 = round(((int)$mutasikeluar/(int)$jumlah)*100);
            @endphp
            <td class="text-center">{{ $mutasikeluar1 }} %</td>
            @endif
        </tr>

        <tr></tr>
        <tr>
            <td><b>Tabel Efektifitas Hasil Kelulusan Uji untuk Uji Ulang</b></td>
        </tr>
        <tr>
            <td><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></td>
        </tr>
        <tr>
            <td><b> Tahun {{ $tglprint }} </b></td>
        </tr>
        <tr></tr>
        <tr>
            <td scope="col" rowspan="2" class="text-center">No</td>
            <td scope="col" rowspan="2" class="text-center">Tanggal</td>
            <td scope="col" rowspan="2">Uji Ulang</td>
            <td scope="col" class="text-center" colspan="2">Keterangan</td>
            <td scope="col" rowspan="2">Jumlah</td>
        </tr>
        <tr>
            <td scope="col" class="text-center">Lulus</td>
            <td scope="col" class="text-center">Tidak Lulus</td>
        </tr>
        @php
        $i=1;$lulus=0;$tidaklulus=0;$jumlah=0;$lulus2=0;$tidaklulus2=0;;
        @endphp
        @foreach ($data3 as $dt)
        <tr>
            <td class="text-center" scope="row">{{ $i }}</td>
            <td class="text-center">{{ $dt['tgl'] }}</td>
            <td class="text-center">{{ $dt['jumlah'] }}</td>
            <td class="text-center">{{ $dt['lulus'] }}</td>
            <td class="text-center">{{ $dt['tidaklulus'] }}</td>
            <td class="text-center">{{ $dt['jumlah'] }}</td>
        </tr>
        @php
        $i++;$lulus=$lulus+$dt['lulus'];$tidaklulus=$tidaklulus+$dt['tidaklulus'];$jumlah=$jumlah+$dt['jumlah'];
        @endphp
        @endforeach
        <tr>
            <td colspan="2" class="text-center"><b>Total</b></td>
            <td class="text-center">{{ $jumlah }}</td>
            <td class="text-center">{{ $lulus }}</td>
            <td class="text-center">{{ $tidaklulus }}</td>
            <td class="text-center">{{ $jumlah }}</td>
        </tr>
        <tr>
            <td colspan="3" class="text-center"><b>Presentasi</b></td>
            @if($lulus == 0)
            @php
            $lulus2 = 0;
            @endphp
            <td class="text-center"> {{ $lulus2 }} %</td>
            @else
            @php
            $lulus2 = round(((int)$lulus/(int)$jumlah)*100,2);
            @endphp
            <td class="text-center">{{ $lulus2 }} %</td>
            @endif
            @if($tidaklulus == 0)
            @php
            $tidaklulus2 = 0;
            @endphp
            <td class="text-center"> {{ $tidaklulus2 }} %</td>
            @else
            @php
            $tidaklulus2 = round(((int)$tidaklulus/(int)$jumlah)*100,2);
            @endphp
            <td class="text-center">{{ $tidaklulus2 }} %</td>
            @endif
            <td class="text-center">100 %</td>
        </tr>
    </tbody>
</table>
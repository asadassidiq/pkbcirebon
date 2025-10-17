<table>
    <thead>
        <tr>
            <td colspan="13"><b>Laporan Pelaksanaan Pengujian Kendaraan Bermotor</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Bulan {{ $tglprint }}</b></td>
        </tr>
        <tr>
            <td scope="col" rowspan="3">No</td>
            <td scope="col" rowspan="3" class="text-center">Tanggal</td>
            <td scope="col" rowspan="3" class="text-center">KBWU sblm</td>
            <td scope="col" rowspan="3" class="text-center">KBWU</td>
            <td scope="col" rowspan="3" class="text-center">KBWU yang di Uji</td>
            <td scope="col" class="text-center" colspan="13">Jenis Kendaraan</td>
            <td scope="col" class="text-center" colspan="2">Hasil Pengujian</td>
            <td scope="col" class="text-center" rowspan="3">Uji Ulang</td>
            <td scope="col" class="text-center" rowspan="3">Uji Pertama</td>
            <td scope="col" class="text-center" rowspan="3">Uji Berkala</td>
            <td scope="col" class="text-center" colspan="2">Numpang</td>
            <td scope="col" class="text-center" colspan="2">Mutasi</td>
            <td scope="col" rowspan="3" class="text-center">Jumlah</td>
        </tr>
        <tr>
            <td scope="col"></td>
            <td scope="col" class="text-center" colspan="3">Bus</td>
            <td scope="col" class="text-center" colspan="6">Mobil Barang</td>
            <td scope="col" class="text-center" rowspan="2">K.Tempelan</td>
            <td scope="col" class="text-center" rowspan="2">K.Gandeng</td>
            <td scope="col" class="text-center" rowspan="2">Lain-Lain</td>
            <td scope="col" class="text-center" rowspan="2">Lulus</td>
            <td scope="col" class="text-center" rowspan="2">Tidak Lulus</td>
            <td scope="col" class="text-center" rowspan="2">Masuk</td>
            <td scope="col" class="text-center" rowspan="2">Keluar</td>
            <td scope="col" class="text-center" rowspan="2">Masuk</td>
            <td scope="col" class="text-center" rowspan="2">Keluar</td>
        </tr>
        <tr>
            <td scope="col">Mobil Penumpang</td>
            <td scope="col">Kecil</td>
            <td scope="col">Sedang</td>
            <td scope="col">Besar</td>
            <td scope="col">
                < 3000 Kg</td>
            <td scope="col">3001-9000 Kg</td>
            <td scope="col">9001-15000 Kg</td>
            <td scope="col">15001-21000 Kg</td>
            <td scope="col"> > 21000 Kg</td>
            <td scope="col">Tractor Head</td>
        </tr>
</thead>
    <tbody>
        @php $i=1;$jumlah=0;$mobilpenumpang=0;$buskecil=0;$bussedang=0;$busbesar=0;$barangjbb1=0;$barangjbb2=0;$barangjbb3=0;$barangjbb4=0;$barangjbb5=0;
        $traktorhead=0;$keretagandeng=0;$keretatempelan=0;$lulus=0;$tidaklulus=0;$numasuk=0;$nukeluar=0;$mutasikeluar=0;$mutasimasuk=0;$ujiulang=0;
        $lainlain=0;$ujipertama=0;$ujiberkala=0;$kwbu=0;$kwbusblm=0;$kwbuuji=0;
        @endphp
        @foreach ($data as $dt)
        <tr class="aligncenter">
            <td>{{ $i }}</td>
            <td>{{ $dt['tgl'] }}</td>
            <td>{{ $dt['kwbusblm'] }}</td>
            <td>{{ $dt['kwbu'] }}</td>
            <td>{{ $dt['kwbuuji'] }}</td>
            <td>{{ $dt['mobilpenumpang'] }}</td>
            <td>{{ $dt['buskecil'] }}</td>
            <td>{{ $dt['bussedang'] }}</td>
            <td>{{ $dt['busbesar'] }}</td>
            <td>{{ $dt['barangjbb1'] }}</td>
            <td>{{ $dt['barangjbb2'] }}</td>
            <td>{{ $dt['barangjbb3'] }}</td>
            <td>{{ $dt['barangjbb4'] }}</td>
            <td>{{ $dt['barangjbb5'] }}</td>
            <td>{{ $dt['traktorhead'] }}</td>
            <td>{{ $dt['keretatempelan'] }}</td>
            <td>{{ $dt['keretagandeng'] }}</td>
            <td>{{ $dt['lainlain'] }}</td>
            <td>{{ $dt['lulus'] }}</td>
            <td>{{ $dt['tidaklulus'] }}</td>
            <td>{{ $dt['ujiulang'] }}</td>
            <td>{{ $dt['ujipertama'] }}</td>
            <td>{{ $dt['ujiberkala'] }}</td>
            <td>{{ $dt['numasuk'] }}</td>
            <td>{{ $dt['nukeluar'] }}</td>
            <td>{{ $dt['mutasimasuk'] }}</td>
            <td>{{ $dt['mutasikeluar'] }}</td>
            <td>{{ $dt['jumlah'] }}</td>
        </tr>
        @php $i++;$jumlah = $jumlah+$dt['jumlah'];$mobilpenumpang=$mobilpenumpang+$dt['mobilpenumpang'];$buskecil=$buskecil+$dt['buskecil'];$bussedang=$bussedang+$dt['bussedang'];$busbesar=$busbesar+$dt['busbesar'];
        $barangjbb1=$barangjbb1+$dt['barangjbb1'];$barangjbb2=$barangjbb2+$dt['barangjbb2'];$barangjbb3=$barangjbb3+$dt['barangjbb3'];$barangjbb4=$barangjbb4+$dt['barangjbb4'];$barangjbb5=$barangjbb5+$dt['barangjbb5'];
        $traktorhead=$traktorhead+$dt['traktorhead'];$keretatempelan=$keretatempelan+$dt['keretatempelan'];$keretagandeng=$keretagandeng+$dt['keretagandeng'];$ujiulang=$ujiulang+$dt['ujiulang'];
        $lulus=$lulus+$dt['lulus'];$tidaklulus=$tidaklulus+$dt['tidaklulus'];$numasuk=$numasuk+$dt['numasuk'];$nukeluar=$nukeluar+$dt['nukeluar'];$mutasimasuk=$mutasimasuk+$dt['mutasimasuk'];$mutasikeluar=$mutasikeluar+$dt['mutasikeluar'];
        $lainlain=$lainlain+$dt['lainlain'];$ujipertama=$ujipertama+$dt['ujipertama'];$ujiberkala=$ujiberkala+$dt['ujiberkala'];
        $kwbu=$dt['kwbu'];$kwbusblm=$dt['kwbusblm'];$kwbuuji=$kwbuuji+$dt['kwbuuji'];
        @endphp
        @endforeach
        <tr class="aligncenter allborder">
            <td colspan="2"><b>Total</b></td>
            <td>{{ $kwbusblm }}</td>
            <td>{{ $kwbu }}</td>
            <td>{{ $kwbuuji }}</td>
            <td>{{ $mobilpenumpang }}</td>
            <td>{{ $buskecil }}</td>
            <td>{{ $bussedang }}</td>
            <td>{{ $busbesar }}</td>
            <td>{{ $barangjbb1 }}</td>
            <td>{{ $barangjbb2 }}</td>
            <td>{{ $barangjbb3 }}</td>
            <td>{{ $barangjbb4 }}</td>
            <td>{{ $barangjbb5 }}</td>
            <td>{{ $traktorhead }}</td>
            <td>{{ $keretatempelan }}</td>
            <td>{{ $keretagandeng }}</td>
            <td>{{ $lainlain }}</td>
            <td>{{ $lulus }}</td>
            <td>{{ $tidaklulus }}</td>
            <td>{{ $ujiulang }}</td>
            <td>{{ $ujipertama }}</td>
            <td>{{ $ujiberkala }}</td>
            <td>{{ $numasuk }}</td>
            <td>{{ $nukeluar }}</td>
            <td>{{ $mutasimasuk }}</td>
            <td>{{ $mutasikeluar }}</td>
            <td>{{ $jumlah }}</td>
        </tr>
    </tbody>
</table>
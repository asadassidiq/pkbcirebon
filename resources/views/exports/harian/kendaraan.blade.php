<table>
    <thead>
        <tr>
            <th colspan="18"><b>LAPORAN HARIAN PENGUJIAN BERKALA KENDARAAN BERMOTOR</b></th>
        </tr>
        <tr>
            <th colspan="18"><b>UPT PKB DISHUB KOTA CIREBON</b></th>
        </tr>
        <tr>
            <th colspan="18"><b>PERIODE : {{ $tglprint }}</b></th>
        </tr>
        <tr>
            <th scope="col">NO</th>
            <th scope="col">NO KENDARAAN</th>
            <th scope="col">NO UJI</th>
            <th scope="col">NO RANGKA</th>
            <th scope="col">NO MESIN</th>
            <th scope="col">MEREK</th>
            <th scope="col">TIPE</th>
            <th scope="col">TAHUN</th>
            <th scope="col">JENIS KEND</th>
            <th scope="col">JBB</th>
            <th scope="col">BAHAN BAKAR</th>
            <th scope="col">NAMA</th>
            <th scope="col">ALAMAT</th>
            <th scope="col">JENIS PELAYANAN</th>
            <th scope="col">HASIL UJI</th>
            <th scope="col">STATUS KEND</th>
            <th scope="col">NO KENDALI KARTU</th>
            <th scope="col">KET</th>
        </tr>
    </thead>
    <tbody>
        @php $i=1
        @endphp
        @foreach ($kendaraan as $data)
        <tr>
            <td scope="row">{{ $i }}</td>
            <td>{{ $data->noregistrasikendaraan }}</td>
            <td>{{ $data->nouji }}</td>
            <td>{{ $data->norangka }}</td>
            <td>{{ $data->nomesin }}</td>
            <td>{{ $data->merek }}</td>
            <td>{{ $data->tipe }}</td>
            <td>{{ $data->thpembuatan }}</td>
            <td>{{ $data->subjenis }}</td>
            <td>{{ $data->jbb }}</td>
            <td>{{ $data->bahanbakar }}</td>
            <td>{{ $data->nama }}</td>
            <td>{{ $data->alamat }}</td>
            <td>{{ $data->keterangan }}</td>
            @if ($data->statuslulusuji == 1)
            <td>LULUS</td>
            @else
            <td>TIDAK LULUS</td>
            @endif
            <td>{{ $data->peruntukan }}</td>
            <td>{{ $data->nokendalikartu }}</td>
            <td></td>
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
        <!-- MOBIL PNP -->
        <tr>
            <td rowspan="2">MOBIL PNP</td>
            <td>MOBIL PNP SEDAN</td>
            <td>{{ $totaljenis['mobil1'] ?? 0 }}</td>
        </tr>
        <tr>
            <td>MOBIL PNP BUKAN SEDAN</td>
            <td>{{ $totaljenis['mobil2'] ?? 0 }}</td>
        </tr>

        <!-- MOBIL BUS -->
        <tr>
            <td rowspan="7">MOBIL BUS</td>
            <td>B.KECIL</td><td>{{ $totaljenis['mobil3'] ?? 0 }}</td>
        </tr>
        <tr><td>B.SEDANG</td><td>{{ $totaljenis['mobil4'] ?? 0 }}</td></tr>
        <tr><td>B.BESAR</td><td>{{ $totaljenis['mobil5'] ?? 0 }}</td></tr>
        <tr><td>B.MAXI</td><td>{{ $totaljenis['mobil6'] ?? 0 }}</td></tr>
        <tr><td>B.GANDENG</td><td>{{ $totaljenis['mobil7'] ?? 0 }}</td></tr>
        <tr><td>B.TEMPEL</td><td>{{ $totaljenis['mobil8'] ?? 0 }}</td></tr>
        <tr><td>B.TINGKAT</td><td>{{ $totaljenis['mobil9'] ?? 0 }}</td></tr>

        <!-- MOBIL BARANG BAK TERBUKA -->
        <tr>
            <td rowspan="6">MOBIL BARANG BAK TERBUKA</td>
            <td>P.UP</td><td>{{ $totaljenis['mobil10'] ?? 0 }}</td>
        </tr>
        <tr><td>DOUBLE CABIN</td><td>{{ $totaljenis['mobil11'] ?? 0 }}</td></tr>
        <tr><td>L.TRUCK</td><td>{{ $totaljenis['mobil12'] ?? 0 }}</td></tr>
        <tr><td>DUMP TRUCK</td><td>{{ $totaljenis['mobil13'] ?? 0 }}</td></tr>
        <tr><td>LOST BAK</td><td>{{ $totaljenis['mobil14'] ?? 0 }}</td></tr>
        <tr><td>CAR CARRIER</td><td>{{ $totaljenis['mobil15'] ?? 0 }}</td></tr>

        <!-- MOBIL BARANG BAK TERTUTUP -->
        <tr>
            <td rowspan="5">MOBIL BARANG BAK TERTUTUP</td>
            <td>P.UP BOX</td><td>{{ $totaljenis['mobil16'] ?? 0 }}</td>
        </tr>
        <tr><td>P.UP RANGKA</td><td>{{ $totaljenis['mobil17'] ?? 0 }}</td></tr>
        <tr><td>L.TRUCK BOX</td><td>{{ $totaljenis['mobil18'] ?? 0 }}</td></tr>
        <tr><td>BLIND VAN</td><td>{{ $totaljenis['mobil19'] ?? 0 }}</td></tr>
        <tr><td>DELIVERY VAN</td><td>{{ $totaljenis['mobil20'] ?? 0 }}</td></tr>

        <!-- MOBIL TANGKI -->
        <tr><td>MOBIL TANGKI</td><td></td><td>{{ $totaljenis['mobil21'] ?? 0 }}</td></tr>

        <!-- MOBIL PENARIK -->
        <tr><td>MOBIL PENARIK</td><td></td><td>{{ $totaljenis['mobil22'] ?? 0 }}</td></tr>

        <!-- KERETA -->
        <tr><td>KERETA GANDENG BAK TERBUKA</td><td></td><td>{{ $totaljenis['mobil23'] ?? 0 }}</td></tr>
        <tr><td>KERETA GANDENG BAK TERTUTUP</td><td></td><td>{{ $totaljenis['mobil24'] ?? 0 }}</td></tr>
        <tr><td>KERETA GANDENG TANGKI</td><td></td><td>{{ $totaljenis['mobil25'] ?? 0 }}</td></tr>
        <tr><td>KERETA TEMPELAN BAK TERBUKA</td><td></td><td>{{ $totaljenis['mobil26'] ?? 0 }}</td></tr>
        <tr><td>KERETA TEMPELAN BAK TERTUTUP</td><td></td><td>{{ $totaljenis['mobil27'] ?? 0 }}</td></tr>
        <tr><td>KERETA TEMPELAN TANGKI</td><td></td><td>{{ $totaljenis['mobil28'] ?? 0 }}</td></tr>

        <!-- KB RODA TIGA -->
        <tr><td>KB Roda Tiga Angkutan Barang Bak Muatan Terbuka</td><td></td><td>{{ $totaljenis['mobil29'] ?? 0 }}</td></tr>
        <tr><td>KB Roda Tiga Angkutan Barang Bak Muatan Tertutup</td><td></td><td>{{ $totaljenis['mobil30'] ?? 0 }}</td></tr>
        <tr><td>KB Roda Tiga Angkutan Penumpang</td><td></td><td>{{ $totaljenis['mobil31'] ?? 0 }}</td></tr>
        <tr><td>KB Roda Tiga Angkutan Barang Tangki</td><td></td><td>{{ $totaljenis['mobil32'] ?? 0 }}</td></tr>

        <!-- KENDARAAN KHUSUS -->
        <tr>
            <td rowspan="7">KENDARAAN KHUSUS</td>
            <td>AMBULANCE</td><td>{{ $totaljenis['mobil33'] ?? 0 }}</td>
        </tr>
        <tr><td>DAMKAR</td><td>{{ $totaljenis['mobil34'] ?? 0 }}</td></tr>
        <tr><td>ARM ROLL</td><td>{{ $totaljenis['mobil35'] ?? 0 }}</td></tr>
        <tr><td>DEREK</td><td>{{ $totaljenis['mobil36'] ?? 0 }}</td></tr>
        <tr><td>FLAT DECK</td><td>{{ $totaljenis['mobil37'] ?? 0 }}</td></tr>
        <tr><td>MIXER</td><td>{{ $totaljenis['mobil38'] ?? 0 }}</td></tr>
        <tr><td>CONCREEDPUMP</td><td>{{ $totaljenis['mobil39'] ?? 0 }}</td></tr>
        <tr></tr>
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
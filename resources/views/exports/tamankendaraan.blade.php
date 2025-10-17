

<table>
    <thead>
      <tr>
          <th colspan="9"><b>DAFTAR DATA KENDARAAAN UJI PERTAMA</b></th>
      </tr>
      <tr>
          <th colspan="9"><b>TANGGAL CETAK : {{ $tglprint }}</b></th>
      </tr>
      <tr>
        <th scope="col" class="text-center">NO</th>
        <th scope="col" class="text-center">NAMA PEMILIK</th>         
        <th scope="col" class="text-center">NIK PEMILIK</th>         
        <th scope="col" class="text-center">ALAMAT PEMILIK</th>         
        <th scope="col" class="text-center">NOMOR KEND</th>         
        <th scope="col" class="text-center">NOMOR UJI</th>         
        <th scope="col" class="text-center">JENIS KEND</th>         
        <th scope="col" class="text-center">MEREK</th>         
        <th scope="col" class="text-center">TIPE</th> 
        <th scope="col" class="text-center">NO SRUT</th> 
        <th scope="col" class="text-center">TGL SRUT</th> 
        <th scope="col" class="text-center">NO RANCANG</th> 
        <th scope="col" class="text-center">NO RANGKA</th> 
        <th scope="col" class="text-center">NO MESIN</th> 
        <th scope="col" class="text-center">TH PEMBUATAN</th> 
        <th scope="col" class="text-center">BAHAN BAKAR</th> 
        <th scope="col" class="text-center">ISI SILINDER</th> 
        <th scope="col" class="text-center">JBB</th> 
        <th scope="col" class="text-center">JBKI</th> 
        <th scope="col" class="text-center">JBI</th> 
        <th scope="col" class="text-center">JBKI</th> 
        <th scope="col" class="text-center">MST</th>      
        <th scope="col" class="text-center">KONFIGURASI SUMBU RODA</th>      
        <th scope="col" class="text-center">UKURAN BAN</th>      
        <th scope="col" class="text-center">PANJANG KENDARAAN</th>      
        <th scope="col" class="text-center">LEBAR KENDARAAN</th>      
        <th scope="col" class="text-center">TINGGI KENDARAAN</th>      
        <th scope="col" class="text-center">BAHAN</th>      
        <th scope="col" class="text-center">PANJANG BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">LEBAR BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">TINGGI BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">p</th>      
        <th scope="col" class="text-center">r</th>      
        <th scope="col" class="text-center">DAYA ANGKUT ORANG</th>      
        <th scope="col" class="text-center">DAYA ANGKUT ORANG (KG)</th>      
        <th scope="col" class="text-center">DAYA ANGKUT BARANG (KG)</th>      
        <th scope="col" class="text-center">KELAS JALAN TERENDAH</th>      
        <th scope="col" class="text-center">FOH</th>      
        <th scope="col" class="text-center">ROH</th>      
        <th scope="col" class="text-center">GC</th>      
        <th scope="col" class="text-center">BERAT KOSONG</th>      
        <th scope="col" class="text-center">BERAT SUMBU 1</th>      
        <th scope="col" class="text-center">BERAT SUMBU 2</th>      
        <th scope="col" class="text-center">BERAT SUMBU 3</th>      
        <th scope="col" class="text-center">BERAT SUMBU 4</th>      
        <th scope="col" class="text-center">POSISI NO UJI</th>      
        <th scope="col" class="text-center">CATATAN RUBAH BENTUK</th>
      </tr>
    </thead>
    <tbody>
      @php 
        if($page == 1){
          $i = 1;
        }elseif($page == 2){
          $i = 2001;
        }elseif($page == 3){
          $i = 4001;
        }elseif($page == 4){
          $i = 6001;
        }elseif($page == 5){
          $i = 8001;
        }else{
          $i = 1;
        }
      @endphp
      @foreach ($ujipertama as $data) 
        <tr>
          <td scope="row">{{ $i++ }}</td>
          <td>{{ $data['nama'] }}</td>
          <td>{{ $data['noidentitaspemilik'] }}</td>
          <td>{{ $data['alamat'] }}</td>
          <td>{{ $data['noregistrasikendaraan'] }}</td>
          <td>{{ $data['nouji'] }}</td>
          <td>{{ $data['jenis'] }}</td>
          <td>{{ $data['merek'] }}</td>
          <td>{{ $data['tipe'] }}</td>
          <td>{{ $data['nosertifikatreg'] }}</td>
          <td>{{ $data['tglsertifikatreg'] }}</td>
          <td>{{ $data['rancang'] }}</td>
          <td>{{ $data['norangka'] }}</td>
          <td>{{ $data['nomesin'] }}</td>
          <td>{{ $data['thpembuatan'] }}</td>
          <td>{{ $data['bahanbakar'] }}</td>
          <td>{{ $data['isisilinder'] }}</td>
          <td>{{ $data['jbb'] }}</td>
          <td>{{ $data['jbkb'] }}</td>
          <td>{{ $data['jbi'] }}</td>
          <td>{{ $data['jbki'] }}</td>
          <td>{{ $data['mst'] }}</td>
          <td>{{ $data['konfigurasisumburoda'] }}</td>
          <td>{{ $data['ukuranban'] }}</td>
          <td>{{ $data['panjangkendaraan'] }}</td>
          <td>{{ $data['lebarkendaraan'] }}</td>
          <td>{{ $data['tinggikendaraan'] }}</td>
          <td>{{ $data['bahan'] }}</td>
          <td>{{ $data['panjangbakatautangki'] }}</td>
          <td>{{ $data['lebarbakatautangki'] }}</td>
          <td>{{ $data['tinggibakatautangki'] }}</td>
          <td>{{ $data['p'] }}</td>
          <td>{{ $data['r'] }}</td>
          <td>{{ $data['dayaangkutorang'] }}</td>
          <td>{{ (int)$data['dayaangkutorang']*60 }}</td>
          <td>{{ $data['dayaangkutbarang'] }}</td>
          <td>{{ $data['kelasjalanterendah'] }}</td>
          <td>{{ $data['julurdepan'] }}</td>
          <td>{{ $data['julurbelakang'] }}</td>
          <td>{{ $data['groundclearance'] }}</td>
          <td>{{ $data['beratkosong'] }}</td>
          <td>{{ $data['beratsumbu1'] }}</td>
          <td>{{ $data['beratsumbu2'] }}</td>
          <td>{{ $data['beratsumbu3'] }}</td>
          <td>{{ $data['beratsumbu4'] }}</td>
          <td>{{ $data['posisinomeruji'] }}</td>
          <td>{{ $data['catatanrubahbentuk'] }}</td>
        </tr>
      @endforeach
    </tbody>
</table>

<table>
    <thead>
      <tr>
          <th colspan="9"><b>DAFTAR DATA UJI BERKALA(DATA LAMA) KENDARAAAN</b></th>
      </tr>
      <tr>
          <th colspan="9"><b>TANGGAL CETAK : {{ $tglprint }}</b></th>
      </tr>
      <tr>
        <th scope="col" class="text-center">NO</th>
        <th scope="col" class="text-center">NAMA PEMILIK</th>         
        <th scope="col" class="text-center">NIK PEMILIK</th>         
        <th scope="col" class="text-center">ALAMAT PEMILIK</th>         
        <th scope="col" class="text-center">NOMOR KEND</th>         
        <th scope="col" class="text-center">NOMOR UJI</th>         
        <th scope="col" class="text-center">JENIS KEND</th>         
        <th scope="col" class="text-center">MEREK</th>         
        <th scope="col" class="text-center">TIPE</th> 
        <th scope="col" class="text-center">NO SRUT</th> 
        <th scope="col" class="text-center">TGL SRUT</th> 
        <th scope="col" class="text-center">NO RANCANG</th> 
        <th scope="col" class="text-center">NO RANGKA</th> 
        <th scope="col" class="text-center">NO MESIN</th> 
        <th scope="col" class="text-center">TH PEMBUATAN</th> 
        <th scope="col" class="text-center">BAHAN BAKAR</th> 
        <th scope="col" class="text-center">ISI SILINDER</th> 
        <th scope="col" class="text-center">JBB</th> 
        <th scope="col" class="text-center">JBKI</th> 
        <th scope="col" class="text-center">JBI</th> 
        <th scope="col" class="text-center">JBKI</th> 
        <th scope="col" class="text-center">MST</th>      
        <th scope="col" class="text-center">KONFIGURASI SUMBU RODA</th>      
        <th scope="col" class="text-center">UKURAN BAN</th>      
        <th scope="col" class="text-center">PANJANG KENDARAAN</th>      
        <th scope="col" class="text-center">LEBAR KENDARAAN</th>      
        <th scope="col" class="text-center">TINGGI KENDARAAN</th>      
        <th scope="col" class="text-center">BAHAN</th>      
        <th scope="col" class="text-center">PANJANG BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">LEBAR BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">TINGGI BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">p</th>      
        <th scope="col" class="text-center">r</th>      
        <th scope="col" class="text-center">DAYA ANGKUT ORANG</th>      
        <th scope="col" class="text-center">DAYA ANGKUT ORANG (KG)</th>      
        <th scope="col" class="text-center">DAYA ANGKUT BARANG (KG)</th>      
        <th scope="col" class="text-center">KELAS JALAN TERENDAH</th>      
        <th scope="col" class="text-center">FOH</th>      
        <th scope="col" class="text-center">ROH</th>      
        <th scope="col" class="text-center">GC</th>      
        <th scope="col" class="text-center">BERAT KOSONG</th>      
        <th scope="col" class="text-center">BERAT SUMBU 1</th>      
        <th scope="col" class="text-center">BERAT SUMBU 2</th>      
        <th scope="col" class="text-center">BERAT SUMBU 3</th>      
        <th scope="col" class="text-center">BERAT SUMBU 4</th>      
        <th scope="col" class="text-center">POSISI NO UJI</th>      
        <th scope="col" class="text-center">CATATAN RUBAH BENTUK</th>
      </tr>
    </thead>
    <tbody>
      @php 
        if($page == 1){
          $o = 1;
        }elseif($page == 2){
          $o = 2001;
        }elseif($page == 3){
          $o = 4001;
        }elseif($page == 4){
          $o = 6001;
        }elseif($page == 5){
          $o = 8001;
        }else{
          $o = 1;
        }
      @endphp
      @foreach ($fixujiberkala as $data) 
        <tr>
          <td scope="row">{{ $o++ }}</td>
          <td>{{ $data['nama'] }}</td>
          <td>{{ $data['noidentitaspemilik'] }}</td>
          <td>{{ $data['alamat'] }}</td>
          <td>{{ $data['noregistrasikendaraan'] }}</td>
          <td>{{ $data['nouji'] }}</td>
          <td>{{ $data['jenis'] }}</td>
          <td>{{ $data['merek'] }}</td>
          <td>{{ $data['tipe'] }}</td>
          <td>{{ $data['nosertifikatreg'] }}</td>
          <td>{{ $data['tglsertifikatreg'] }}</td>
          <td>{{ $data['rancang'] }}</td>
          <td>{{ $data['norangka'] }}</td>
          <td>{{ $data['nomesin'] }}</td>
          <td>{{ $data['thpembuatan'] }}</td>
          <td>{{ $data['bahanbakar'] }}</td>
          <td>{{ $data['isisilinder'] }}</td>
          <td>{{ $data['jbb'] }}</td>
          <td>{{ $data['jbkb'] }}</td>
          <td>{{ $data['jbi'] }}</td>
          <td>{{ $data['jbki'] }}</td>
          <td>{{ $data['mst'] }}</td>
          <td>{{ $data['konfigurasisumburoda'] }}</td>
          <td>{{ $data['ukuranban'] }}</td>
          <td>{{ $data['panjangkendaraan'] }}</td>
          <td>{{ $data['lebarkendaraan'] }}</td>
          <td>{{ $data['tinggikendaraan'] }}</td>
          <td>{{ $data['bahan'] }}</td>
          <td>{{ $data['panjangbakatautangki'] }}</td>
          <td>{{ $data['lebarbakatautangki'] }}</td>
          <td>{{ $data['tinggibakatautangki'] }}</td>
          <td>{{ $data['p'] }}</td>
          <td>{{ $data['r'] }}</td>
          <td>{{ $data['dayaangkutorang'] }}</td>
          <td>{{ (int)$data['dayaangkutorang']*60 }}</td>
          <td>{{ $data['dayaangkutbarang'] }}</td>
          <td>{{ $data['kelasjalanterendah'] }}</td>
          <td>{{ $data['julurdepan'] }}</td>
          <td>{{ $data['julurbelakang'] }}</td>
          <td>{{ $data['groundclearance'] }}</td>
          <td>{{ $data['beratkosong'] }}</td>
          <td>{{ $data['beratsumbu1'] }}</td>
          <td>{{ $data['beratsumbu2'] }}</td>
          <td>{{ $data['beratsumbu3'] }}</td>
          <td>{{ $data['beratsumbu4'] }}</td>
          <td>{{ $data['posisinomeruji'] }}</td>
          <td>{{ $data['catatanrubahbentuk'] }}</td>
        </tr>
      @endforeach
    </tbody>
</table>

<table>
    <thead>
      <tr>
          <th colspan="9"><b>DAFTAR DATA KENDARAAAN MUTASI MASUK</b></th>
      </tr>
      <tr>
          <th colspan="9"><b>TANGGAL CETAK : {{ $tglprint }}</b></th>
      </tr>
      <tr>
        <th scope="col" class="text-center">NO</th>
        <th scope="col" class="text-center">NAMA PEMILIK</th>         
        <th scope="col" class="text-center">NIK PEMILIK</th>         
        <th scope="col" class="text-center">ALAMAT PEMILIK</th>         
        <th scope="col" class="text-center">NOMOR KEND</th>         
        <th scope="col" class="text-center">NOMOR UJI</th>         
        <th scope="col" class="text-center">JENIS KEND</th>         
        <th scope="col" class="text-center">MEREK</th>         
        <th scope="col" class="text-center">TIPE</th> 
        <th scope="col" class="text-center">NO SRUT</th> 
        <th scope="col" class="text-center">TGL SRUT</th> 
        <th scope="col" class="text-center">NO RANCANG</th> 
        <th scope="col" class="text-center">NO RANGKA</th> 
        <th scope="col" class="text-center">NO MESIN</th> 
        <th scope="col" class="text-center">TH PEMBUATAN</th> 
        <th scope="col" class="text-center">BAHAN BAKAR</th> 
        <th scope="col" class="text-center">ISI SILINDER</th> 
        <th scope="col" class="text-center">JBB</th> 
        <th scope="col" class="text-center">JBKI</th> 
        <th scope="col" class="text-center">JBI</th> 
        <th scope="col" class="text-center">JBKI</th> 
        <th scope="col" class="text-center">MST</th>      
        <th scope="col" class="text-center">KONFIGURASI SUMBU RODA</th>      
        <th scope="col" class="text-center">UKURAN BAN</th>      
        <th scope="col" class="text-center">PANJANG KENDARAAN</th>      
        <th scope="col" class="text-center">LEBAR KENDARAAN</th>      
        <th scope="col" class="text-center">TINGGI KENDARAAN</th>      
        <th scope="col" class="text-center">BAHAN</th>      
        <th scope="col" class="text-center">PANJANG BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">LEBAR BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">TINGGI BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">p</th>      
        <th scope="col" class="text-center">r</th>      
        <th scope="col" class="text-center">DAYA ANGKUT ORANG</th>      
        <th scope="col" class="text-center">DAYA ANGKUT ORANG (KG)</th>      
        <th scope="col" class="text-center">DAYA ANGKUT BARANG (KG)</th>      
        <th scope="col" class="text-center">KELAS JALAN TERENDAH</th>      
        <th scope="col" class="text-center">FOH</th>      
        <th scope="col" class="text-center">ROH</th>      
        <th scope="col" class="text-center">GC</th>      
        <th scope="col" class="text-center">BERAT KOSONG</th>      
        <th scope="col" class="text-center">BERAT SUMBU 1</th>      
        <th scope="col" class="text-center">BERAT SUMBU 2</th>      
        <th scope="col" class="text-center">BERAT SUMBU 3</th>      
        <th scope="col" class="text-center">BERAT SUMBU 4</th>      
        <th scope="col" class="text-center">POSISI NO UJI</th>      
        <th scope="col" class="text-center">CATATAN RUBAH BENTUK</th>
      </tr>
    </thead>
    <tbody>
      @php 
        if($page == 1){
          $p = 1;
        }elseif($page == 2){
          $p = 2001;
        }elseif($page == 3){
          $p = 4001;
        }elseif($page == 4){
          $p = 6001;
        }elseif($page == 5){
          $p = 8001;
        }else{
          $p = 1;
        }
      @endphp
      @foreach ($mutasimasuk as $data) 
        <tr>
          <td scope="row">{{ $p++ }}</td>
          <td>{{ $data['nama'] }}</td>
          <td>{{ $data['noidentitaspemilik'] }}</td>
          <td>{{ $data['alamat'] }}</td>
          <td>{{ $data['noregistrasikendaraan'] }}</td>
          <td>{{ $data['nouji'] }}</td>
          <td>{{ $data['jenis'] }}</td>
          <td>{{ $data['merek'] }}</td>
          <td>{{ $data['tipe'] }}</td>
          <td>{{ $data['nosertifikatreg'] }}</td>
          <td>{{ $data['tglsertifikatreg'] }}</td>
          <td>{{ $data['rancang'] }}</td>
          <td>{{ $data['norangka'] }}</td>
          <td>{{ $data['nomesin'] }}</td>
          <td>{{ $data['thpembuatan'] }}</td>
          <td>{{ $data['bahanbakar'] }}</td>
          <td>{{ $data['isisilinder'] }}</td>
          <td>{{ $data['jbb'] }}</td>
          <td>{{ $data['jbkb'] }}</td>
          <td>{{ $data['jbi'] }}</td>
          <td>{{ $data['jbki'] }}</td>
          <td>{{ $data['mst'] }}</td>
          <td>{{ $data['konfigurasisumburoda'] }}</td>
          <td>{{ $data['ukuranban'] }}</td>
          <td>{{ $data['panjangkendaraan'] }}</td>
          <td>{{ $data['lebarkendaraan'] }}</td>
          <td>{{ $data['tinggikendaraan'] }}</td>
          <td>{{ $data['bahan'] }}</td>
          <td>{{ $data['panjangbakatautangki'] }}</td>
          <td>{{ $data['lebarbakatautangki'] }}</td>
          <td>{{ $data['tinggibakatautangki'] }}</td>
          <td>{{ $data['p'] }}</td>
          <td>{{ $data['r'] }}</td>
          <td>{{ $data['dayaangkutorang'] }}</td>
          <td>{{ (int)$data['dayaangkutorang']*60 }}</td>
          <td>{{ $data['dayaangkutbarang'] }}</td>
          <td>{{ $data['kelasjalanterendah'] }}</td>
          <td>{{ $data['julurdepan'] }}</td>
          <td>{{ $data['julurbelakang'] }}</td>
          <td>{{ $data['groundclearance'] }}</td>
          <td>{{ $data['beratkosong'] }}</td>
          <td>{{ $data['beratsumbu1'] }}</td>
          <td>{{ $data['beratsumbu2'] }}</td>
          <td>{{ $data['beratsumbu3'] }}</td>
          <td>{{ $data['beratsumbu4'] }}</td>
          <td>{{ $data['posisinomeruji'] }}</td>
          <td>{{ $data['catatanrubahbentuk'] }}</td>
        </tr>
      @endforeach
    </tbody>
</table>

<table>
    <thead>
      <tr>
          <th colspan="9"><b>DAFTAR DATA KENDARAAAN MUTASI KELUAR</b></th>
      </tr>
      <tr>
          <th colspan="9"><b>TANGGAL CETAK : {{ $tglprint }}</b></th>
      </tr>
      <tr>
        <th scope="col" class="text-center">NO</th>
        <th scope="col" class="text-center">NAMA PEMILIK</th>         
        <th scope="col" class="text-center">NIK PEMILIK</th>         
        <th scope="col" class="text-center">ALAMAT PEMILIK</th>         
        <th scope="col" class="text-center">NOMOR KEND</th>         
        <th scope="col" class="text-center">NOMOR UJI</th>         
        <th scope="col" class="text-center">JENIS KEND</th>         
        <th scope="col" class="text-center">MEREK</th>         
        <th scope="col" class="text-center">TIPE</th> 
        <th scope="col" class="text-center">NO SRUT</th> 
        <th scope="col" class="text-center">TGL SRUT</th> 
        <th scope="col" class="text-center">NO RANCANG</th> 
        <th scope="col" class="text-center">NO RANGKA</th> 
        <th scope="col" class="text-center">NO MESIN</th> 
        <th scope="col" class="text-center">TH PEMBUATAN</th> 
        <th scope="col" class="text-center">BAHAN BAKAR</th> 
        <th scope="col" class="text-center">ISI SILINDER</th> 
        <th scope="col" class="text-center">JBB</th> 
        <th scope="col" class="text-center">JBKI</th> 
        <th scope="col" class="text-center">JBI</th> 
        <th scope="col" class="text-center">JBKI</th> 
        <th scope="col" class="text-center">MST</th>      
        <th scope="col" class="text-center">KONFIGURASI SUMBU RODA</th>      
        <th scope="col" class="text-center">UKURAN BAN</th>      
        <th scope="col" class="text-center">PANJANG KENDARAAN</th>      
        <th scope="col" class="text-center">LEBAR KENDARAAN</th>      
        <th scope="col" class="text-center">TINGGI KENDARAAN</th>      
        <th scope="col" class="text-center">BAHAN</th>      
        <th scope="col" class="text-center">PANJANG BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">LEBAR BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">TINGGI BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">p</th>      
        <th scope="col" class="text-center">r</th>      
        <th scope="col" class="text-center">DAYA ANGKUT ORANG</th>      
        <th scope="col" class="text-center">DAYA ANGKUT ORANG (KG)</th>      
        <th scope="col" class="text-center">DAYA ANGKUT BARANG (KG)</th>      
        <th scope="col" class="text-center">KELAS JALAN TERENDAH</th>      
        <th scope="col" class="text-center">FOH</th>      
        <th scope="col" class="text-center">ROH</th>      
        <th scope="col" class="text-center">GC</th>      
        <th scope="col" class="text-center">BERAT KOSONG</th>      
        <th scope="col" class="text-center">BERAT SUMBU 1</th>      
        <th scope="col" class="text-center">BERAT SUMBU 2</th>      
        <th scope="col" class="text-center">BERAT SUMBU 3</th>      
        <th scope="col" class="text-center">BERAT SUMBU 4</th>      
        <th scope="col" class="text-center">POSISI NO UJI</th>      
        <th scope="col" class="text-center">CATATAN RUBAH BENTUK</th>
      </tr>
    </thead>
    <tbody>
      @php 
        if($page == 1){
          $l = 1;
        }elseif($page == 2){
          $l = 2001;
        }elseif($page == 3){
          $l = 4001;
        }elseif($page == 4){
          $l = 6001;
        }elseif($page == 5){
          $l = 8001;
        }else{
          $l = 1;
        }
      @endphp
      @foreach ($mutasikeluar as $data) 
        <tr>
          <td scope="row">{{ $l++ }}</td>
          <td>{{ $data['nama'] }}</td>
          <td>{{ $data['noidentitaspemilik'] }}</td>
          <td>{{ $data['alamat'] }}</td>
          <td>{{ $data['noregistrasikendaraan'] }}</td>
          <td>{{ $data['nouji'] }}</td>
          <td>{{ $data['jenis'] }}</td>
          <td>{{ $data['merek'] }}</td>
          <td>{{ $data['tipe'] }}</td>
          <td>{{ $data['nosertifikatreg'] }}</td>
          <td>{{ $data['tglsertifikatreg'] }}</td>
          <td>{{ $data['rancang'] }}</td>
          <td>{{ $data['norangka'] }}</td>
          <td>{{ $data['nomesin'] }}</td>
          <td>{{ $data['thpembuatan'] }}</td>
          <td>{{ $data['bahanbakar'] }}</td>
          <td>{{ $data['isisilinder'] }}</td>
          <td>{{ $data['jbb'] }}</td>
          <td>{{ $data['jbkb'] }}</td>
          <td>{{ $data['jbi'] }}</td>
          <td>{{ $data['jbki'] }}</td>
          <td>{{ $data['mst'] }}</td>
          <td>{{ $data['konfigurasisumburoda'] }}</td>
          <td>{{ $data['ukuranban'] }}</td>
          <td>{{ $data['panjangkendaraan'] }}</td>
          <td>{{ $data['lebarkendaraan'] }}</td>
          <td>{{ $data['tinggikendaraan'] }}</td>
          <td>{{ $data['bahan'] }}</td>
          <td>{{ $data['panjangbakatautangki'] }}</td>
          <td>{{ $data['lebarbakatautangki'] }}</td>
          <td>{{ $data['tinggibakatautangki'] }}</td>
          <td>{{ $data['p'] }}</td>
          <td>{{ $data['r'] }}</td>
          <td>{{ $data['dayaangkutorang'] }}</td>
          <td>{{ (int)$data['dayaangkutorang']*60 }}</td>
          <td>{{ $data['dayaangkutbarang'] }}</td>
          <td>{{ $data['kelasjalanterendah'] }}</td>
          <td>{{ $data['julurdepan'] }}</td>
          <td>{{ $data['julurbelakang'] }}</td>
          <td>{{ $data['groundclearance'] }}</td>
          <td>{{ $data['beratkosong'] }}</td>
          <td>{{ $data['beratsumbu1'] }}</td>
          <td>{{ $data['beratsumbu2'] }}</td>
          <td>{{ $data['beratsumbu3'] }}</td>
          <td>{{ $data['beratsumbu4'] }}</td>
          <td>{{ $data['posisinomeruji'] }}</td>
          <td>{{ $data['catatanrubahbentuk'] }}</td>
        </tr>
      @endforeach
    </tbody>
</table>

<table>
    <thead>
      <tr>
          <th colspan="9"><b>DAFTAR DATA KENDARAAAN NUMPANG UJI MASUK</b></th>
      </tr>
      <tr>
          <th colspan="9"><b>TANGGAL CETAK : {{ $tglprint }}</b></th>
      </tr>
      <tr>
        <th scope="col" class="text-center">NO</th>
        <th scope="col" class="text-center">NAMA PEMILIK</th>         
        <th scope="col" class="text-center">NIK PEMILIK</th>         
        <th scope="col" class="text-center">ALAMAT PEMILIK</th>         
        <th scope="col" class="text-center">NOMOR KEND</th>         
        <th scope="col" class="text-center">NOMOR UJI</th>         
        <th scope="col" class="text-center">JENIS KEND</th>         
        <th scope="col" class="text-center">MEREK</th>         
        <th scope="col" class="text-center">TIPE</th> 
        <th scope="col" class="text-center">NO SRUT</th> 
        <th scope="col" class="text-center">TGL SRUT</th> 
        <th scope="col" class="text-center">NO RANCANG</th> 
        <th scope="col" class="text-center">NO RANGKA</th> 
        <th scope="col" class="text-center">NO MESIN</th> 
        <th scope="col" class="text-center">TH PEMBUATAN</th> 
        <th scope="col" class="text-center">BAHAN BAKAR</th> 
        <th scope="col" class="text-center">ISI SILINDER</th> 
        <th scope="col" class="text-center">JBB</th> 
        <th scope="col" class="text-center">JBKI</th> 
        <th scope="col" class="text-center">JBI</th> 
        <th scope="col" class="text-center">JBKI</th> 
        <th scope="col" class="text-center">MST</th>      
        <th scope="col" class="text-center">KONFIGURASI SUMBU RODA</th>      
        <th scope="col" class="text-center">UKURAN BAN</th>      
        <th scope="col" class="text-center">PANJANG KENDARAAN</th>      
        <th scope="col" class="text-center">LEBAR KENDARAAN</th>      
        <th scope="col" class="text-center">TINGGI KENDARAAN</th>      
        <th scope="col" class="text-center">BAHAN</th>      
        <th scope="col" class="text-center">PANJANG BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">LEBAR BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">TINGGI BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">p</th>      
        <th scope="col" class="text-center">r</th>      
        <th scope="col" class="text-center">DAYA ANGKUT ORANG</th>      
        <th scope="col" class="text-center">DAYA ANGKUT ORANG (KG)</th>      
        <th scope="col" class="text-center">DAYA ANGKUT BARANG (KG)</th>      
        <th scope="col" class="text-center">KELAS JALAN TERENDAH</th>      
        <th scope="col" class="text-center">FOH</th>      
        <th scope="col" class="text-center">ROH</th>      
        <th scope="col" class="text-center">GC</th>      
        <th scope="col" class="text-center">BERAT KOSONG</th>      
        <th scope="col" class="text-center">BERAT SUMBU 1</th>      
        <th scope="col" class="text-center">BERAT SUMBU 2</th>      
        <th scope="col" class="text-center">BERAT SUMBU 3</th>      
        <th scope="col" class="text-center">BERAT SUMBU 4</th>      
        <th scope="col" class="text-center">POSISI NO UJI</th>      
        <th scope="col" class="text-center">CATATAN RUBAH BENTUK</th>
      </tr>
    </thead>
    <tbody>
      @php 
        if($page == 1){
          $k = 1;
        }elseif($page == 2){
          $k = 2001;
        }elseif($page == 3){
          $k = 4001;
        }elseif($page == 4){
          $k = 6001;
        }elseif($page == 5){
          $k = 8001;
        }else{
          $k = 1;
        }
      @endphp
      @foreach ($numasuk as $data) 
        <tr>
          <td scope="row">{{ $k++ }}</td>
          <td>{{ $data['nama'] }}</td>
          <td>{{ $data['noidentitaspemilik'] }}</td>
          <td>{{ $data['alamat'] }}</td>
          <td>{{ $data['noregistrasikendaraan'] }}</td>
          <td>{{ $data['nouji'] }}</td>
          <td>{{ $data['jenis'] }}</td>
          <td>{{ $data['merek'] }}</td>
          <td>{{ $data['tipe'] }}</td>
          <td>{{ $data['nosertifikatreg'] }}</td>
          <td>{{ $data['tglsertifikatreg'] }}</td>
          <td>{{ $data['rancang'] }}</td>
          <td>{{ $data['norangka'] }}</td>
          <td>{{ $data['nomesin'] }}</td>
          <td>{{ $data['thpembuatan'] }}</td>
          <td>{{ $data['bahanbakar'] }}</td>
          <td>{{ $data['isisilinder'] }}</td>
          <td>{{ $data['jbb'] }}</td>
          <td>{{ $data['jbkb'] }}</td>
          <td>{{ $data['jbi'] }}</td>
          <td>{{ $data['jbki'] }}</td>
          <td>{{ $data['mst'] }}</td>
          <td>{{ $data['konfigurasisumburoda'] }}</td>
          <td>{{ $data['ukuranban'] }}</td>
          <td>{{ $data['panjangkendaraan'] }}</td>
          <td>{{ $data['lebarkendaraan'] }}</td>
          <td>{{ $data['tinggikendaraan'] }}</td>
          <td>{{ $data['bahan'] }}</td>
          <td>{{ $data['panjangbakatautangki'] }}</td>
          <td>{{ $data['lebarbakatautangki'] }}</td>
          <td>{{ $data['tinggibakatautangki'] }}</td>
          <td>{{ $data['p'] }}</td>
          <td>{{ $data['r'] }}</td>
          <td>{{ $data['dayaangkutorang'] }}</td>
          <td>{{ (int)$data['dayaangkutorang']*60 }}</td>
          <td>{{ $data['dayaangkutbarang'] }}</td>
          <td>{{ $data['kelasjalanterendah'] }}</td>
          <td>{{ $data['julurdepan'] }}</td>
          <td>{{ $data['julurbelakang'] }}</td>
          <td>{{ $data['groundclearance'] }}</td>
          <td>{{ $data['beratkosong'] }}</td>
          <td>{{ $data['beratsumbu1'] }}</td>
          <td>{{ $data['beratsumbu2'] }}</td>
          <td>{{ $data['beratsumbu3'] }}</td>
          <td>{{ $data['beratsumbu4'] }}</td>
          <td>{{ $data['posisinomeruji'] }}</td>
          <td>{{ $data['catatanrubahbentuk'] }}</td>
        </tr>
      @endforeach
    </tbody>
</table>

<table>
    <thead>
      <tr>
          <th colspan="9"><b>DAFTAR DATA KENDARAAAN NUMPANG UJI KELUAR</b></th>
      </tr>
      <tr>
          <th colspan="9"><b>TANGGAL CETAK : {{ $tglprint }}</b></th>
      </tr>
      <tr>
        <th scope="col" class="text-center">NO</th>
        <th scope="col" class="text-center">NAMA PEMILIK</th>         
        <th scope="col" class="text-center">NIK PEMILIK</th>         
        <th scope="col" class="text-center">ALAMAT PEMILIK</th>         
        <th scope="col" class="text-center">NOMOR KEND</th>         
        <th scope="col" class="text-center">NOMOR UJI</th>         
        <th scope="col" class="text-center">JENIS KEND</th>         
        <th scope="col" class="text-center">MEREK</th>         
        <th scope="col" class="text-center">TIPE</th> 
        <th scope="col" class="text-center">NO SRUT</th> 
        <th scope="col" class="text-center">TGL SRUT</th> 
        <th scope="col" class="text-center">NO RANCANG</th> 
        <th scope="col" class="text-center">NO RANGKA</th> 
        <th scope="col" class="text-center">NO MESIN</th> 
        <th scope="col" class="text-center">TH PEMBUATAN</th> 
        <th scope="col" class="text-center">BAHAN BAKAR</th> 
        <th scope="col" class="text-center">ISI SILINDER</th> 
        <th scope="col" class="text-center">JBB</th> 
        <th scope="col" class="text-center">JBKI</th> 
        <th scope="col" class="text-center">JBI</th> 
        <th scope="col" class="text-center">JBKI</th> 
        <th scope="col" class="text-center">MST</th>      
        <th scope="col" class="text-center">KONFIGURASI SUMBU RODA</th>      
        <th scope="col" class="text-center">UKURAN BAN</th>      
        <th scope="col" class="text-center">PANJANG KENDARAAN</th>      
        <th scope="col" class="text-center">LEBAR KENDARAAN</th>      
        <th scope="col" class="text-center">TINGGI KENDARAAN</th>      
        <th scope="col" class="text-center">BAHAN</th>      
        <th scope="col" class="text-center">PANJANG BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">LEBAR BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">TINGGI BAK ATAU TANGKI</th>      
        <th scope="col" class="text-center">p</th>      
        <th scope="col" class="text-center">r</th>      
        <th scope="col" class="text-center">DAYA ANGKUT ORANG</th>      
        <th scope="col" class="text-center">DAYA ANGKUT ORANG (KG)</th>      
        <th scope="col" class="text-center">DAYA ANGKUT BARANG (KG)</th>      
        <th scope="col" class="text-center">KELAS JALAN TERENDAH</th>      
        <th scope="col" class="text-center">FOH</th>      
        <th scope="col" class="text-center">ROH</th>      
        <th scope="col" class="text-center">GC</th>      
        <th scope="col" class="text-center">BERAT KOSONG</th>      
        <th scope="col" class="text-center">BERAT SUMBU 1</th>      
        <th scope="col" class="text-center">BERAT SUMBU 2</th>      
        <th scope="col" class="text-center">BERAT SUMBU 3</th>      
        <th scope="col" class="text-center">BERAT SUMBU 4</th>      
        <th scope="col" class="text-center">POSISI NO UJI</th>      
        <th scope="col" class="text-center">CATATAN RUBAH BENTUK</th>
      </tr>
    </thead>
    <tbody>
      @php 
        if($page == 1){
          $j = 1;
        }elseif($page == 2){
          $j = 2001;
        }elseif($page == 3){
          $j = 4001;
        }elseif($page == 4){
          $j = 6001;
        }elseif($page == 5){
          $j = 8001;
        }else{
          $j = 1;
        }
      @endphp
      @foreach ($nukeluar as $data) 
        <tr>
          <td scope="row">{{ $j++ }}</td>
          <td>{{ $data['nama'] }}</td>
          <td>{{ $data['noidentitaspemilik'] }}</td>
          <td>{{ $data['alamat'] }}</td>
          <td>{{ $data['noregistrasikendaraan'] }}</td>
          <td>{{ $data['nouji'] }}</td>
          <td>{{ $data['jenis'] }}</td>
          <td>{{ $data['merek'] }}</td>
          <td>{{ $data['tipe'] }}</td>
          <td>{{ $data['nosertifikatreg'] }}</td>
          <td>{{ $data['tglsertifikatreg'] }}</td>
          <td>{{ $data['rancang'] }}</td>
          <td>{{ $data['norangka'] }}</td>
          <td>{{ $data['nomesin'] }}</td>
          <td>{{ $data['thpembuatan'] }}</td>
          <td>{{ $data['bahanbakar'] }}</td>
          <td>{{ $data['isisilinder'] }}</td>
          <td>{{ $data['jbb'] }}</td>
          <td>{{ $data['jbkb'] }}</td>
          <td>{{ $data['jbi'] }}</td>
          <td>{{ $data['jbki'] }}</td>
          <td>{{ $data['mst'] }}</td>
          <td>{{ $data['konfigurasisumburoda'] }}</td>
          <td>{{ $data['ukuranban'] }}</td>
          <td>{{ $data['panjangkendaraan'] }}</td>
          <td>{{ $data['lebarkendaraan'] }}</td>
          <td>{{ $data['tinggikendaraan'] }}</td>
          <td>{{ $data['bahan'] }}</td>
          <td>{{ $data['panjangbakatautangki'] }}</td>
          <td>{{ $data['lebarbakatautangki'] }}</td>
          <td>{{ $data['tinggibakatautangki'] }}</td>
          <td>{{ $data['p'] }}</td>
          <td>{{ $data['r'] }}</td>
          <td>{{ $data['dayaangkutorang'] }}</td>
          <td>{{ (int)$data['dayaangkutorang']*60 }}</td>
          <td>{{ $data['dayaangkutbarang'] }}</td>
          <td>{{ $data['kelasjalanterendah'] }}</td>
          <td>{{ $data['julurdepan'] }}</td>
          <td>{{ $data['julurbelakang'] }}</td>
          <td>{{ $data['groundclearance'] }}</td>
          <td>{{ $data['beratkosong'] }}</td>
          <td>{{ $data['beratsumbu1'] }}</td>
          <td>{{ $data['beratsumbu2'] }}</td>
          <td>{{ $data['beratsumbu3'] }}</td>
          <td>{{ $data['beratsumbu4'] }}</td>
          <td>{{ $data['posisinomeruji'] }}</td>
          <td>{{ $data['catatanrubahbentuk'] }}</td>
        </tr>
      @endforeach
    </tbody>
</table>

<table>
  <thead>
      <tr>
          <th colspan="9"><b>TOTAL TAMAN DATA KENDARAAAN UJI</b></th>
      </tr>
      <tr>
        <th scope="col" class="text-center">UJI PERTAMA</th>
        <th scope="col" class="text-center">UJI BERKALA</th>
        <th scope="col" class="text-center">MUTASI MASUK</th>
        <th scope="col" class="text-center">TOTAL</th>
        <th scope="col" class="text-center">MUTASI KELUAR</th>
        <th scope="col" class="text-center">TOTAL AKHIR</th>
        <th scope="col" class="text-center">NUMPANG UJI MASUK</th>
        <th scope="col" class="text-center">NUMPANG UJI KELUAR</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{ $i }}</td>  
      <td>{{ $o }}</td>  
      <td>{{ $p }}</td>  
      <td>{{ $i+$o+$p }}</td>
      <td>{{ $l }}</td>
      <td><b>{{ ($i+$o+$p)-$l }}</b></td>  
      <td>{{ $k }}</td>
      <td>{{ $j }}</td>
    </tr>
  </tbody>
</table>
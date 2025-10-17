<table>
    <thead>
      <tr>
          <th colspan="9"><b>DAFTAR RINCIAN KENDARAAAN UJI</b></th>
      </tr>
      @php
          if($kode == '1'){
              $ket = 'UJI PERTAMA';
          }elseif($kode == '2'){
              $ket = 'UJI BERKALA';
          }elseif($kode == '5'){
              $ket = 'NUMPANG UJI MASUK';
          }elseif($kode == '9'){
              $ket = 'NUMPANG UJI KELUAR';
          }elseif($kode == '6'){
              $ket = 'MUTASI MASUK';
          }elseif($kode == '10'){
              $ket = 'MUTASI KELUAR';
          }else{
              $ket = '';
          }
     @endphp
      <tr>
          <th colspan="9"><b>JENIS PENGUJIAN : {{ $ket }}</b></th>
      </tr>
      <tr>
          <th colspan="9"><b>PERIODE : {{ $tglprint }}</b></th>
      </tr>
      <tr>
        <th scope="col" class="text-center">NO</th>
        <th scope="col" class="text-center">NOMOR KEND</th>         
        <th scope="col" class="text-center">NOMOR UJI</th>         
        <th scope="col" class="text-center">NAMA PEMILIK</th>         
        <th scope="col" class="text-center">ALAMAT PEMILIK</th>         
        <th scope="col" class="text-center">JENIS KEND</th>         
        <th scope="col" class="text-center">MEREK</th>         
        <th scope="col" class="text-center">TIPE</th>         
        <th scope="col" class="text-center">TAHUN RAKIT</th>      
        <th scope="col" class="text-center">NOMOR RANGKA</th>         
        <th scope="col" class="text-center">NOMOR MESIN</th>         
        <th scope="col" class="text-center">HABIS UJI</th>         
        <th scope="col" class="text-center">TANGGAL UJI</th>         
      </tr>
    </thead>
    <tbody>
      @php $i=1;$tot1 = 0;$tot2 = 0;$tot3 = 0;$tot4 = 0;$tot5 = 0;$tot6 = 0;$tot7 = 0;$tot8 = 0;$tot9 = 0;$tot10 = 0;
      @endphp
      @foreach ($kendaraan as $data) 
        <tr>
          <td scope="row">{{ $i++ }}</td>
          <td>{{ $data['noregistrasikendaraan'] }}</td>
          <td>{{ $data['nouji'] }}</td>
          <td>{{ $data['nama'] }}</td>
          <td>{{ $data['alamat'] }}</td>
          <td>{{ $data['jenis'] }}</td>
          <td>{{ $data['merek'] }}</td>
          <td>{{ $data['tipe'] }}</td>
          <td>{{ $data['thpembuatan'] }}</td>
          <td>{{ $data['norangka'] }}</td>
          <td>{{ $data['nomesin'] }}</td>
          <td>{{ substr($data['masaberlakuuji'],4,4).'-'.substr($data['masaberlakuuji'],2,2).'-'.substr($data['masaberlakuuji'],0,2) }}</td>
          <td>{{ substr($data['tgluji'],4,4).'-'.substr($data['tgluji'],2,2).'-'.substr($data['tgluji'],0,2) }}</td>
        </tr>
      @endforeach
    </tbody>
</table>
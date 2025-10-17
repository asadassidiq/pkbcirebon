<table>
    <thead>
      <tr>
          <th colspan="9"><b>DAFTAR RINCIAN TAMAN KENDARAAAN</b></th>
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
      @php $i=1;
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
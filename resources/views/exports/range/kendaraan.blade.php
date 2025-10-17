<table>
    <thead>
      <tr>
          <th colspan="9"><b>DAFTAR RINCIAN KENDARAAAN UJI</b></th>
      </tr>
      <tr>
          <th colspan="9"><b>PERIODE : {{ $tglprint }}</b></th>
      </tr>
      <tr>
        <th scope="col" class="text-center">NO</th>
        <th scope="col" class="text-center">NAMA PEMILIK</th>         
        <th scope="col" class="text-center">NOMOR KEND</th>         
        <th scope="col" class="text-center">NOMOR UJI</th>         
        <th scope="col" class="text-center">JENIS KEND</th>         
        <th scope="col" class="text-center">MEREK</th>         
        <th scope="col" class="text-center">TIPE</th>         
        <th scope="col" class="text-center">TH PEMBUATAN</th>        
        <th scope="col" class="text-center">JENIS UJI</th>         
        <th scope="col" class="text-center">NOMOR PEMOHON</th>         
        <th scope="col" class="text-center">VIA</th>         
        <th scope="col" class="text-center">KET</th>         
      </tr>
    </thead>
    <tbody>
      @php $i=1;$tot1 = 0;$tot2 = 0;$tot3 = 0;$tot4 = 0;$tot5 = 0;$tot6 = 0;$tot7 = 0;$tot8 = 0;$tot9 = 0;$tot10 = 0;
      @endphp
      @foreach ($kendaraan as $data) 
        <tr>
          <td scope="row">{{ $i++ }}</td>
          <td>{{ $data['nama'] }}</td>
          <td>{{ $data['noregistrasikendaraan'] }}</td>
          <td>{{ $data['nouji'] }}</td>
          <td>{{ $data['jenis'] }}</td>
          <td>{{ $data['keterangan'] }}</td>
          <td>{{ $data['merek'] }}</td>
          <td>{{ $data['tipe'] }}</td>
          <td>{{ $data['thpembuatan'] }}</td>
          <td>{{ $data['notelp'] }}</td>
          @if ($data['jenispendaftaran'] == 'on')
          <td>ONLINE</td>
          @else
          <td>OFFLINE</td>
          @endif
          @if ($data->statuslulusuji == 1)
          <td>LULUS</td>
          @else
          <td>TIDAK LULUS</td>
          @endif
        </tr>
      @endforeach
    </tbody>
</table>
<table>
    <thead>
      <tr>
          <th colspan="7"><b>DAFTAR RINCIAN KENDARAAAN TIDAK LULUS UJI</b></th>
      </tr>
      <tr>
          <th colspan="7"><b>PERIODE : {{ $tglprint }}</b></th>
      </tr>
      <tr>
        <th scope="col" rowspan="2" class="text-center">NO</th>         
        <th scope="col" colspan="2" class="text-center">Nomer</th>
        <th scope="col" colspan="3" class="text-center">Data Kendaraan</th>        
        <th scope="col" rowspan="2" class="text-center">Alasan Penolakan</th>       
      </tr>
      <tr>    
        <th>Polisi</th> 
        <th>Kontrol</th>
        <th>Merk</th>         
        <th>Jenis</th>
        <th>Tahun Buat</th>
      </tr>
    </thead>
    <tbody>
      @php $i=1
      @endphp
      @foreach ($tidaklulus as $data) 
        <tr>
          <th scope="row">{{ $i }}</th>
          <td>{{ $data->noregistrasikendaraan }}</td>
          <td>{{ $data->nouji }}</td>
          <td>{{ $data->merek }}</td>
          <td>{{ $data->jenis }}</td>
          <td>{{ $data->thpembuatan }}</td>
          <td>
          @if ($data->kodepenerbitans_id == '9')
          {{ 'Numpang Uji Keluar' }}
          @elseif ($data->kodepenerbitans_id == '10')
          {{ 'Mutasi Keluar' }}
          @else
          {{ $data->catatanpos1 }} , {{ $data->catatanpos2 }} , {{ $data->catatanpos3 }}
          @endif
          </td>
        </tr>
      @php $i++
      @endphp
      @endforeach
    </tbody>
</table>
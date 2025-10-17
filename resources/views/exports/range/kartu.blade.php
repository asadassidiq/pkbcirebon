<table>
    <thead>
      <tr>
          <th colspan="9"><b>DAFTAR RINCIAN PENGUNAAN KARTU DAN SERTIFIKAT</b></th>
      </tr>
      <tr>
          <th colspan="9"><b>PERIODE : {{ $tglprint }}</b></th>
      </tr>
      <tr>
          <th scope="col" rowspan="2" class="text-center">No</th>         
          <th scope="col" rowspan="2" class="text-center">Tanggal</th>         
          <th scope="col" colspan="2" class="text-center">Nomer</th>
          <th scope="col" colspan="2" class="text-center">Data Kendaraan</th>        
          <th scope="col" rowspan="2" class="text-center">Nomor Kartu</th>       
          <th scope="col" rowspan="2" class="text-center">Nomor RFID</th>       
          <th scope="col" rowspan="2" class="text-center">Nomor Sertifikat</th>       
          <th scope="col" rowspan="2" class="text-center">Nomor Kwitansi</th>       
        </tr>
        <tr>    
          <th>Polisi</th> 
          <th>Kontrol</th>
          <th>Merk</th>         
          <th>Jenis</th>
        </tr>
    </thead>
    <tbody>
      @php $i=1;$tgl='';
      @endphp
      @foreach ($kartu as $data) 
        <tr>
            @if($tgl !=  $data['tglpendaftaran'])    
            <td scope="row">{{ $i }}</td>
            <td>{{ date_format(date_create($data['tglpendaftaran']),"d-m-Y") }}</td>                    
            @php $i++;
            @endphp
            @else
            <td></td>
            <td></td>
            @endif
          <td>{{ $data->noregistrasikendaraan }}</td>
          <td>{{ $data->nouji }}</td>
          <td>{{ $data->merek }}</td>
          <td>{{ $data->jenis }}</td>
          @if($data->perso == 1)
          <td>{{ $data->nokendalikartu }}</td>
          <td>{{ $data->rfid }}</td>
          @else
          <td></td>
          <td></td>
          @endif
          <td>{{ $data->nosertifikat }}</td>
          <td>{{ $data->bill_code }}</td>
        </tr>
      @php
          $tgl = $data['tglpendaftaran'];
      @endphp
      @endforeach
    </tbody>
</table>
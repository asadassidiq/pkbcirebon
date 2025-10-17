<table>
    <thead>
      <tr>
          <th colspan="13"><b>DAFTAR RINCIAN PENERIMAAN RETRIBUSI PENGUJIAN KENDARAAN BERMOTOR</b></th>
      </tr>
      <tr>
          <th colspan="13"><b>PERIODE : {{ $tglprint }}</b></th>
      </tr>
      <tr>
        <th scope="col" rowspan="2" class="text-center">NO</th>
        <th scope="col" rowspan="2" class="text-center">KODE BAYAR</th>       
        <th scope="col" rowspan="2" class="text-center">NAMA PEMILIK</th>         
        <th scope="col" rowspan="2" class="text-center">NOMOR KEND</th>         
        <th scope="col" rowspan="2" class="text-center">JENIS KEND</th>         
        <th scope="col" rowspan="2" class="text-center">JENIS UJI</th>         
        <th scope="col" rowspan="2" class="text-center">BIAYA UJI</th>         
        <th scope="col" colspan="2" class="text-center">BUKTI LULUS UJI</th>         
        <th scope="col" rowspan="2" class="text-center">BIAYA PENOMORAN NOMOR UJI</th>         
        <th scope="col" rowspan="2" class="text-center">JUMLAH RETRIBUSI</th>         
        <th scope="col" rowspan="2" class="text-center">DENDA</th>         
        <th scope="col" rowspan="2" class="text-center">TOTAL BAYAR</th>         
        <th scope="col" rowspan="2" class="text-center">KET</th>         
      </tr>
      <tr>
        <th>HILANG</th>
        <th>RUSAK</th>
      </tr>
    </thead>
    <tbody>
      @php $i=1;$tot1 = 0;$tot2 = 0;$tot3 = 0;$tot4 = 0;$tot5 = 0;$tot6 = 0;$tot7 = 0;$tot8 = 0;$tot9 = 0;$tot10 = 0;
      @endphp
      @foreach ($kendaraan as $data) 
        <tr>
          <td scope="row">{{ $i }}</td>
          <td>{{ $data['bill_code'] }}</td>
          <td>{{ $data['nama'] }}</td>
          <td>{{ $data['noregistrasikendaraan'] }}</td>
          @php 
            if($data['jenis'] == 'MOBIL BARANG'){
              if($data['jbb'] <= 5000 && $data['jbb'] >= 0){
                $mb = 'MB 1';
              }elseif($data['jbb'] > 5000 && $data['jbb'] <= 10000){
                $mb = 'MB 2';
              }elseif($data['jbb'] > 10000 && $data['jbb'] <= 15000){
                $mb = 'MB 3';
              }elseif($data['jbb'] > 15000 && $data['jbb'] <= 20000){
                $mb = 'MB 4';
              }elseif($data['jbb'] > 20000 && $data['jbb'] <= 30000){
                $mb = 'MB 5';
              }else{
                $mb = '';
              }
            }elseif($data['jenis'] == 'MOBIL BUS KECIL'){
              $mb = 'MBK';
            }elseif($data['jenis'] == 'MOBIL BUS SEDANG'){
              $mb = 'MBS';
            }elseif($data['jenis'] == 'MOBIL BUS BESAR'){
              $mb = 'MBB';
            }elseif($data['jenis'] == 'MOBIL BUS MAXI'){
              $mb = 'MBM';
            }elseif($data['jenis'] == 'MOBIL BUS TEMPEL'){
              $mb = 'MBT';
            }elseif($data['jenis'] == 'MOBIL BUS GANDANG'){
              $mb = 'MBG';
            }elseif($data['jenis'] == 'MOBIL BUS TINGKAT'){
              $mb = 'MBTK';
            }elseif($data['jenis'] == 'KERETA TEMPELAN'){
              $mb = 'KT';
            }elseif($data['jenis'] == 'KERETA GANDENG'){
              $mb = 'KG';
            }elseif($data['jenis'] == 'MOBIL PENUMPANG'){
              $mb = 'MP';
            }
            else{
              $mb = '';
            }
          @endphp
          <td>{{ $mb }}</td>
          <td>{{ $data['keterangan'] }}</td>
          <td>{{ $data['pengujian'] }}</td>
          @if($data['pengganti'] == 150000)
          @php $tot3=$tot3+$data['pengganti'];
          @endphp
          <td>{{ $data['pengganti'] }}</td>
          @else
          <td>0</td>
          @endif

          @if($data['pengganti'] == 25000)
          @php $tot4=$tot4+$data['pengganti'];
          @endphp
          <td>{{ $data['pengganti'] }}</td>
          @else
          <td>0</td>
          @endif

          <td>{{ $data['penomoran'] }}</td>
          <td>{{ $data['bill_amount'] }}</td>
          <td>{{ $data['bill_denda'] }}</td>
          <td>{{ $data['bill_amount_paid'] }}</td>
          <td>-</td>
        </tr>
        @php $i++;$tot1=$tot1+$data->pengujian;$tot5=$tot5+$data->penomoran;$tot6=$tot6+$data->bill_amount;$tot7=$tot7+$data->bill_denda;$tot8=$tot8+$data->bill_amount_paid;
        @endphp
      @endforeach
        <tr>
          <td colspan="6"> JUMLAH</td>
          <td> {{ $tot1 }}</td>
          <td> {{ $tot3 }}</td>
          <td> {{ $tot4 }}</td>
          <td> {{ $tot5 }}</td>
          <td> {{ $tot6 }}</td>
          <td> {{ $tot7 }}</td>
          <td> {{ $tot8 }}</td>
          <td>-</td>
        </tr>
        <tr>
          <td colspan="14"></td>
        </tr>
        <tr>
          <td>MP  = {{ $jml['mpu'] }}</td>
          <td>MBK = {{ $jml['mbk'] }}</td>
          <td>MBS = {{ $jml['mbs'] }}</td>
          <td>MBB = {{ $jml['mbb'] }}</td>
          <td>MB1 = {{ $jml['mb1'] }}</td>
          <td>MB2 = {{ $jml['mb2'] }}</td>
          <td>MB3 = {{ $jml['mb3'] }}</td>
          <td>MB4 = {{ $jml['mb4'] }}</td>
          <td>MB5 = {{ $jml['mb5'] }}</td>
          <td>KG  = {{ $jml['kg'] }}</td>
          <td>KT  = {{ $jml['kt'] }}</td>
        </tr>
    </tbody>
</table>
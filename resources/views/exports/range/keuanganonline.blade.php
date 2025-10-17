<table>
    <thead>
      <tr>
          <th colspan="10"><b>REKAPITULASI PENERIMAAN RETRIBUSI ONLINE PENGUJIAN KENDARAAN BERMOTOR</b></th>
      </tr>
      <tr>
          <th colspan="10"><b>PERIODE : {{ $tglprint }}</b></th>
      </tr>
      <tr>
        <th scope="col" rowspan="2" class="text-center">NO</th>
        <th scope="col" rowspan="2" class="text-center">TANGGAL</th>       
        <th scope="col" rowspan="2" class="text-center">JUMLAH KENDARAAN</th>         
        <th scope="col" rowspan="2" class="text-center">PERIKSA</th>         
        <th scope="col" rowspan="2" class="text-center">PENOMORAN</th>         
        <th scope="col" colspan="2" class="text-center">BUKTI LULUS UJI</th>         
        <th scope="col" rowspan="2" class="text-center">JUMLAH RETIBUSI</th>         
        <th scope="col" rowspan="2" class="text-center">DENDA</th>         
        <th scope="col" rowspan="2" class="text-center">TOTAL BAYAR</th>         
      </tr>
      <tr>
        <th>HILANG</th>
        <th>RUSAK</th>
      </tr>
    </thead>
    <tbody>
    @php $i=1;$tot1 = 0;$tot2 = 0;$tot3 = 0;$tot4 = 0;$tot5 = 0;$tot6 = 0;$tot7 = 0;$tot8 = 0;$tot9 = 0;$tot10 = 0;
    @endphp
    @foreach ($jumlah as $data) 
      <tr>
        <td scope="row">{{ $i }}</td>
        <td class="text-right">{{ $data['tgl'] }}</td>
        <td class="text-right">{{ $data['jumlah'] }}</td>
        <td class="text-right">{{ $data['pemeriksaan'] }}</td>
        <td class="text-right">{{ $data['penomoran'] }}</td>
        <td class="text-right">{{ $data['buktilulusujihilang'] }}</td>
        <td class="text-right">{{ $data['buktilulusujirusak'] }}</td>
        <td class="text-right">{{ $data['total'] }}</td>
        <td class="text-right">{{ $data['bill_denda'] }}</td>
        <td class="text-right">{{ $data['total_paid'] }}</td>
      </tr>
      @php $i++;$tot1=$tot1+$data['jumlah'];$tot2=$tot2+$data['pemeriksaan'];$tot3=$tot3+$data['penomoran'];$tot4=$tot4+$data['buktilulusujihilang'];$tot5=$tot5+$data['buktilulusujirusak'];$tot6=$tot6+$data['total'];$tot7=$tot7+$data['bill_denda'];$tot8=$tot8+$data['total_paid'];
      @endphp
    @endforeach
      <tr>
        <td colspan="2"> JUMLAH</td>
        <td class="text-right"> {{ $tot1 }}</td>
        <td class="text-right"> {{ $tot2 }}</td>
        <td class="text-right"> {{ $tot3 }}</td>
        <td class="text-right"> {{ $tot4 }}</td>
        <td class="text-right"> {{ $tot5 }}</td>
        <td class="text-right"> {{ $tot6 }}</td>
        <td class="text-right"> {{ $tot7 }}</td>
        <td class="text-right"> {{ $tot8 }}</td>
      </tr>
    </tbody>
</table>
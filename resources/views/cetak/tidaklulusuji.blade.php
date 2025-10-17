<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cetak</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <!-- Scripts -->
    
    <!-- Styles -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        body{
            color:#333;
            text-align:left;
            font-size:14px;
            margin:0;
        }
        .containerr{
            margin-top:35px;
            margin-left:20px;
            margin-right:20px;
            height:auto;
            background-color:#fff;
        }
        table{
            border:1px solid #333;
            border-collapse:collapse;
            margin:0 auto;
        }
        td, tr, th{
            font-size: 11px;
            width: auto;
            padding: 0px;
            margin: 0px;
        }
        th{
            background-color: #f0f0f0;
        }
        .kertasbaru {page-break-before: always;}

         @page { size: potrait; }

         @media print {
            @page {size: potrait}
            .kertasbaru {page-break-before: always;}
          }
    </style>
</head>
<body onload="window.print();">
<!-- <body> -->
    <div class="container">
        <div class="text-center">
            <h6><b>DAFTAR KENDARAAN TIDAK LULUS UJI</b></h6>
            <h6><b>UPT PENNGUJIAN KENDARAAN BERMOTOR DINAS PERHUBUNGAN</b></h6>
            <h6><b>KABUPATEN Mimika</b></h6>
            <h6><b>Bulan {{ $tglprint }}</b></h6>
        </div>
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <tr>
                      <th scope="col" class="text-center">No</th>
                      <th scope="col" class="text-center">Tanggal Uji</th>
                      <th scope="col" class="text-center">Nomer Kendaraan</th>
                      <th scope="col" class="text-center">Tipe Kendaraan</th>
                      <th scope="col" class="text-center">Jenis Kendaraan</th>
                      <th scope="col" class="text-center">Status Kendaraan</th>
                      <th scope="col" class="text-center">Catatan</th>
                    </tr>
                </thead>
                <tbody>
                   @php
                    $no=1;
                  @endphp
                  @foreach ($data as $dt) 
                  <tr style="padding:0px;margin:0px;">
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $no }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['tglpendaftaran'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['noregistrasikendaraan'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['tipe'] }}</td>
                      @if($dt['klasifikasis_id'] == 2)
                      <td style="padding:5px;margin:5px;" class="text-center">MBP</td>
                      @elseif($dt['jeniskendaraan'] == 'MOBIL BUS KECIL')
                      <td style="padding:5px;margin:5px;" class="text-center">MBK</td>
                      @elseif($dt['jeniskendaraan'] == 'MOBIL BUS SEDANG')
                      <td style="padding:5px;margin:5px;" class="text-center">MBS</td>
                      @elseif($dt['jeniskendaraan'] == 'MOBIL BUS BESAR')
                      <td style="padding:5px;margin:5px;" class="text-center">MBB</td>
                      @elseif($dt['jeniskendaraan'] == 'MOBIL BUS MAXI')
                      <td style="padding:5px;margin:5px;" class="text-center">MBM</td>
                      @elseif($dt['jeniskendaraan'] == 'MOBIL BUS GANDENG')
                      <td style="padding:5px;margin:5px;" class="text-center">MBG</td>
                      @elseif($dt['jeniskendaraan'] == 'MOBIL BUS TEMPEL' || $dt['jeniskendaraan'] == 'MOBIL BUS TINGKAT')
                      <td style="padding:5px;margin:5px;" class="text-center">MBT</td>
                      @elseif(($dt['klasifikasis_id'] == 4 || $dt['klasifikasis_id'] == 7) && $dt['jbb'] <= 5000)
                      <td style="padding:5px;margin:5px;" class="text-center">MB 1</td>
                      @elseif(($dt['klasifikasis_id'] == 4 || $dt['klasifikasis_id'] == 7) && $dt['jbb'] > 5000 && $dt['jbb'] <= 10000)
                      <td style="padding:5px;margin:5px;" class="text-center">MB 2</td>
                      @elseif(($dt['klasifikasis_id'] == 4 || $dt['klasifikasis_id'] == 7) && $dt['jbb'] > 10000 && $dt['jbb'] <= 15000)
                      <td style="padding:5px;margin:5px;" class="text-center">MB 3</td>
                      @elseif(($dt['klasifikasis_id'] == 4 || $dt['klasifikasis_id'] == 7) && $dt['jbb'] > 15000 && $dt['jbb'] <= 20000)
                      <td style="padding:5px;margin:5px;" class="text-center">MB 4</td>
                      @elseif(($dt['klasifikasis_id'] == 4 || $dt['klasifikasis_id'] == 7) && $dt['jbb'] > 20000 && $dt['jbb'] <= 30000)
                      <td style="padding:5px;margin:5px;" class="text-center">MB 5</td>
                      @elseif($dt['klasifikasis_id'] == 5)
                      <td style="padding:5px;margin:5px;" class="text-center">KG</td>
                      @elseif($dt['klasifikasis_id'] == 6)
                      <td style="padding:5px;margin:5px;" class="text-center">KT</td>
                      @else
                      <td style="padding:5px;margin:5px;" class="text-center">-</td>
                      @endif
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['peruntukan'] }}</td>
                      
                      @php
                          $catatans = App\Models\Catatan::where('pendaftaran_id', $dt['pendaftaran_id'])->get();
                      @endphp
                      @if($catatans)
                          <td style="padding:5px;margin:5px;" class="text-center">
                        @foreach ($catatans as $ct)
                            @if($ct->hasiluji == '-')
                            {{ $ct->nama }} ( {{ $ct->alasan }} ) ,
                            @else
                            {{ $ct->nama }} ( {{ $ct->hasiluji }} ) ,
                            @endif
                        @endforeach

                          </td>
                      @endif

                  </tr>
                  @php
                    $no++;
                  @endphp
                  @endforeach
                </tbody>
            </table>       
        </div>
            <br>
        <div class="row" style="font-size:14px">
            <div class="col-8"></div>
            <div class="col-4 text-center">
                <b>
                    <p>Mimika,{{ Date('d F Y') }}</p>
                    @if($ttd['jabatan'] == 'KEPALA UPT PKB' || $ttd['jabatan'] == 'KEPALA')
                        <p>KEPALA</p>
                        <br><br><br>
                        <p style="margin:0px;padding:0px;"><u>{{ $ttd['name'] }}</u></p>
                        <p style="margin:0px;padding:0px;">{{ $ttd['pangkat'] }}</p>
                        <p style="margin:0px;padding:0px;">NIP. {{ $ttd['nip'] }}</p>
                    @elseif($ttd['jabatan'] == 'KA. SUBBAG TU UPT PKB')
                        <p>a.n KEPALA</p>
                        <p style="margin-left:28px;">KASUBAG TU</p>
                        <br><br><br>
                        <p style="margin:0px;padding:0px;margin-left:28px;"><u>{{ $ttd['name'] }}</u></p>
                        <p style="margin:0px;padding:0px;margin-left:28px;">{{ $ttd['pangkat'] }}</p>
                        <p style="margin:0px;padding:0px;margin-left:28px;">NIP. {{ $ttd['nip'] }}</p>
                    @elseif($ttd['jabatan'] == 'PENGUJI MAHIR')
                        <p>a.n KEPALA</p>
                        <p style="margin-left:28px;">KASUBAG TU</p>
                        <p class="text-center">u.b.</p>
                        <p>PENGUJI KENDARAAN BERMOTOR MAHIR</p>
                        <br><br><br>
                        <p style="margin:0px;padding:0px;margin-left:28px;"><u>{{ $ttd['name'] }}</u></p>
                        <p style="margin:0px;padding:0px;margin-left:28px;">{{ $ttd['pangkat'] }}</p>
                        <p style="margin:0px;padding:0px;margin-left:28px;">NIP. {{ $ttd['nip'] }}</p>
                    @elseif($ttd['jabatan'] == 'PENGUJI PENYELIA')
                        <p>a.n KEPALA</p>
                        <p style="margin-left:28px;">KASUBAG TU</p>
                        <p class="text-center">u.b.</p>
                        <p>PENGUJI KENDARAAN BERMOTOR PENYELIA</p>
                        <br><br><br>
                        <p style="margin:0px;padding:0px;margin-left:28px;"><u>{{ $ttd['name'] }}</u></p>
                        <p style="margin:0px;padding:0px;margin-left:28px;">{{ $ttd['pangkat'] }}</p>
                        <p style="margin:0px;padding:0px;margin-left:28px;">NIP. {{ $ttd['nip'] }}</p>
                    @endif
                </b>
            </div>
        </div>
    </div>

</body>
</html>
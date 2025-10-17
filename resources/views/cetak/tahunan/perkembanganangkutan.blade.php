<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Soltindo</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        body{
            color:#333;
            text-align:left;
            font-size:18px;
            margin:0;
        }
        .container{
            margin:0 auto;
            margin-top:35px;
            padding:40px;
            width:750px;
            height:auto;
            background-color:#fff;
        }
        caption{
            font-size:28px;
            margin-bottom:15px;
        }
        table{
            border:1px solid #333;
            border-collapse:collapse;
            margin:0 auto;
        }
        td, tr, th{
            padding:12px;
            border:1px solid #333;
            font-size: 12px;
            width: auto;
        }
        th{
            background-color: #f0f0f0;
        }
        h4, p{
            margin:0px;
        }
         @page { size: landscape; }

         @media print {
            .kertasbaru {page-break-before: always;}
          }
    </style>
</head>
<body onload="window.print();">
    <div class="container-fluid">
        <div class="row">
            <div class="col-2">
                <img height="75%" width="75%" class="img-fluid" src="{{url('/img/kota.png')}}" alt="Image"/>
            </div>
            <div class="col-8 align-self-center">
                <h3 class="text-center" style="margin:0;padding:0">PEMERINTAH KABUPATEN MIMIKA</h3>
                <h3 class="text-center" style="margin:0;padding:0"><b>DINAS PERHUBUNGAN</b></h3>
                <h2 class="text-center" style="margin:0;padding:0"><b>UPT PENGUJIAN KENDARAAN BERMOTOR</b></h2>
                <p class="text-center" style="margin:0;padding:0">Jl. Mahkota Jalur 1 Kel.Timika Jaya Kec.Mimika Baru</p>
                <p class="text-center" style="margin:0;padding:0">Telp.0901-323630, Email: unitpengujikabmmk@yahoo.com, Kode Pos : 99910</p>
            </div>
            <div class="col-1">
            </div>
        </div>
        <hr>
        <div class="row">
             <div class="col-12">
               <h4>PERKEMBANGAN ANGKUTAN BARANG DAN ANGKUTAN ORANG</h4>
               <p>PERIODE <span style="margin-left:50px">: {{ $tglprint }}</span></p>
             </div>
             <div class="col-12">
              <table class="table table-bordered ">
                <thead>
                  <tr>
                      <th scope="col" rowspan="2">No</th>
                      <th scope="col" rowspan="2" class="text-center" style="width:15%">Jenis Kendaraan Bermotor</th>
                      <th scope="col" colspan="12" class="text-center">TAHUN {{ $tglprint }}</th>
                    </tr>
                    <tr>
                      <th scope="col" class="text-center">Januari</th>
                      <th scope="col" class="text-center">Febuari</th>
                      <th scope="col" class="text-center">Maret</th>
                      <th scope="col" class="text-center">April</th>
                      <th scope="col" class="text-center">Mei</th>
                      <th scope="col" class="text-center">Juni</th>
                      <th scope="col" class="text-center">Juli</th>
                      <th scope="col" class="text-center">Agustus</th>
                      <th scope="col" class="text-center">September</th>
                      <th scope="col" class="text-center">Oktober</th>
                      <th scope="col" class="text-center">Novmber</th>
                      <th scope="col" class="text-center">Desember</th>
                    </tr>
                </thead>
                <tbody>
                  @php
                    $no=1;$januari=0;$febuari=0;$maret=0;$april=0;$mei=0;$juni=0;$juli=0;$agustus=0;$september=0;$oktober=0;$november=0;$desember=0;
                  @endphp
                  @foreach ($data as $dt) 
                  <tr style="padding:0px;margin:0px;">
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $no }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['jenis'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['januari'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['febuari'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['maret'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['april'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['mei'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['juni'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['juli'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['agustus'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['september'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['oktober'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['november'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['desember'] }}</td>
                  </tr>
                  @php
                    $no++;$januari=$januari+$dt['januari'];$febuari=$febuari+$dt['febuari'];$maret=$maret+$dt['maret'];$april=$april+$dt['april'];$mei=$mei+$dt['mei'];$juni=$juni+$dt['juni'];$juli=$juli+$dt['juli'];$agustus=$agustus+$dt['agustus'];$september=$september+$dt['september'];$oktober=$oktober+$dt['oktober'];$november=$november+$dt['november'];$desember=$desember+$dt['desember'];
                  @endphp
                  @endforeach
                  <tr>
                      <td style="padding:5px;margin:5px;" class="text-center" colspan="2"><b>Jumlah</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $januari }} </b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $febuari }} </b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $maret }} </b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $april }} </b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $mei }} </b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $juni }} </b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $juli }} </b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $agustus }} </b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $september }} </b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $oktober }} </b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $november }} </b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $desember }} </b></td>
                  </tr>
                </tbody>
              </table>
             </div>
        </div>
        <br>
        <div class="row" style="font-size:14px">
            <div class="col-8"></div>
            <div class="col-4 text-center">
                <b>
                    <p>Mengetahui,</p>
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
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
            width: 29.7cm;
            height: 21cm;  
        }
        .container{
            margin:0 auto;
            margin-top:35px;
            padding:40px;
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
            @page {size: landscape}
            .kertasbaru {page-break-before: always;}
          }
    </style>
</head>
<body onload="window.print();">
    <div class="container">
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
                      <th scope="col" rowspan="3">No</th>
                    <th scope="col" rowspan="3" class="text-center" style="width:15%">BULAN</th>
                    <th scope="col" colspan="28" class="text-center">JENIS KENDARAAN</th>
                  </tr>
                  <tr>
                    <th scope="col" class="text-center" colspan="2">Sedan</th>
                    <th scope="col" class="text-center" colspan="2">Oto Bus</th>
                    <th scope="col" class="text-center" colspan="2">Bus</th>
                    <th scope="col" class="text-center" colspan="2">Truk</th>
                    <th scope="col" class="text-center" colspan="2">Ambulance</th>
                    <th scope="col" class="text-center" colspan="2">Pick Up</th>
                    <th scope="col" class="text-center" colspan="2">Tangki</th>
                    <th scope="col" class="text-center" colspan="2">Kend. Khusus</th>
                    <th scope="col" class="text-center" colspan="2">Kereta Gandeng</th>
                    <th scope="col" class="text-center" colspan="2">Kereta Tempel</th>
                    <th scope="col" class="text-center" colspan="2">JIP</th>
                    <th scope="col" class="text-center" colspan="2">M. Penumpang</th>
                    <th scope="col" class="text-center" colspan="2">Taksi</th>
                    <th scope="col" class="text-center" colspan="2">Total Kend.</th>
                  </tr>
                  <tr>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                  </tr>
                </thead>
                <tbody>
                  @php
                    $no=1;$SedanU=0;$SedanTU=0;$OtoU=0;$OtoTU=0;$BusU=0;$BusTU=0;$TruckU=0;$TruckTU=0;$AmbulanceU=0;$AmbulanceTU=0;
                    $PickupU=0;$PickupTU=0;$TangkiU=0;$TangkiTU=0;$KhususU=0;$KhususTU=0;$KeretaGandengU=0;$KeretaGandengTU=0;
                    $KeretaTempelU=0;$KeretaTempelTU=0;$JipU=0;$JipTU=0;$PenumpangU=0;$PenumpangTU=0;$TaksiU=0;$TaksiTU=0;$jmlU=0;$jmlTU=0;
                  @endphp
                  @foreach ($data as $dt) 
                  <tr style="padding:0px;margin:0px;">
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $no }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['tgl'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['SedanU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['SedanTU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['OtoU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['OtoTU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['BusU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['BusTU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['TruckU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['TruckTU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['AmbulanceU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['AmbulanceTU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['PickupU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['PickupTU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['TangkiU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['TangkiTU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['KhususU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['KhususTU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['KeretaGandengU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['KeretaGandengTU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['KeretaTempelU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['KeretaTempelTU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['JipU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['JipTU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['PenumpangU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['PenumpangTU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['TaksiU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['TaksiTU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['jmlU'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $dt['jmlTU'] }}</td>
                  </tr>
                  @php
                    $no++;$SedanU=$SedanU+$dt['SedanU'];$SedanTU=$SedanTU+$dt['SedanTU'];$OtoU=$OtoU+$dt['OtoU'];$OtoTU=$OtoTU+$dt['OtoTU'];
                    $BusU=$BusU+$dt['BusU'];$BusTU=$BusTU+$dt['BusTU'];$TruckU=$TruckU+$dt['TruckU'];$TruckTU=$TruckTU+$dt['TruckTU'];
                    $AmbulanceU=$AmbulanceU+$dt['AmbulanceU'];$AmbulanceTU=$AmbulanceTU+$dt['AmbulanceTU'];$PickupU=$PickupU+$dt['PickupU'];$PickupTU=$PickupTU+$dt['PickupTU'];
                    $TangkiU=$TangkiU+$dt['TangkiU'];$TangkiTU=$TangkiTU+$dt['TangkiTU'];$KhususU=$KhususU+$dt['KhususU'];$KhususTU=$KhususTU+$dt['KhususTU'];
                    $KeretaGandengU=$KeretaGandengU+$dt['KeretaGandengU'];$KeretaGandengTU=$KeretaGandengTU+$dt['KeretaGandengTU'];
                    $KeretaTempelU=$KeretaTempelU+$dt['KeretaTempelU'];$JipU=$JipU+$dt['JipU'];$JipTU=$JipTU+$dt['JipTU'];$PenumpangU=$PenumpangU+$dt['PenumpangU'];$PenumpangTU=$PenumpangTU+$dt['PenumpangTU'];
                    $TaksiU=$TaksiU+$dt['TaksiU'];$TaksiTU=$TaksiTU+$dt['TaksiTU'];$jmlU=$jmlU+$dt['jmlU'];$jmlTU=$jmlTU+$dt['jmlTU'];
                  @endphp
                  @endforeach
                  <tr>
                      <td style="padding:5px;margin:5px;" class="text-center" colspan="2"><b>Jumlah</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $SedanU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $SedanTU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $OtoU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $OtoTU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $BusU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $BusU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $TruckU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $TruckTU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $AmbulanceU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $AmbulanceTU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $PickupU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $PickupTU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $TangkiU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $TangkiU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $KhususU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $KhususTU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $KeretaGandengU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $KeretaGandengTU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $KeretaTempelU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $KeretaTempelTU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $JipU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $JipTU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $PenumpangU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $PenumpangTU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $TaksiU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $TaksiTU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $jmlU }}</b></td>
                      <td style="padding:5px;margin:5px;" class="text-center"><b>{{ $jmlTU }}</b></td>
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
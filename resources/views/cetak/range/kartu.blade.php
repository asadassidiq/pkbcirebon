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
               <h4>DAFTAR RINCIAN PENGUNAAN KARTU DAN SERTIFIKAT</h4>
               <p>PERIODE <span style="margin-left:50px">: {{ $tglprint }}</span></p>
             </div>
             <div class="col-12">
              <table class="table table-bordered ">
                <thead>
                  <tr>
                      <th scope="col" rowspan="2" class="text-center">No</th>         
                      <th scope="col" rowspan="2" class="text-center">Tanggal</th>         
                      <th scope="col" colspan="2" class="text-center">Nomor</th>
                      <th scope="col" colspan="2" class="text-center">Data Kendaraan</th>        
                      <th scope="col" rowspan="2" class="text-center">Nomor Kartu</th>       
                      <th scope="col" rowspan="2" class="text-center">Nomor RFID</th>       
                      <th scope="col" rowspan="2" class="text-center">Nomor Sertifikat</th>       
                      <th scope="col" rowspan="2" class="text-center">Nomor Kwitansi</th>       
                    </tr>
                    <tr>    
                      <th class="text-center">Kendaraan</th> 
                      <th class="text-center">Uji</th>
                      <th class="text-center">Merk</th>         
                      <th class="text-center">Jenis</th>
                    </tr>
                </thead>
                <tbody>
                  @php $i=1;$tgl='';
                  @endphp
                  @foreach ($kartu as $data) 
                    <tr style="line-height:0px">
                        @if($tgl !=  $data['tglpendaftaran'])    
                        <td scope="row">{{ $i }}</td>
                        <td style="font-size:12px">{{ date_format(date_create($data['tglpendaftaran']),"d-m-Y") }}</td>                    
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
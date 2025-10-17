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
               <h4>DAFTAR RINCIAN KENDARAAAN UJI</h4>
               @php
                    if($kode == '1'){
                        $ket = 'UJI PERTAMA';
                    }elseif($kode == '2'){
                        $ket = 'UJI BERKALA';
                    }elseif($kode == '5'){
                        $ket = 'NUMPANG UJI MASUK';
                    }elseif($kode == '9'){
                        $ket = 'NUMPANG UJI KELUAR';
                    }elseif($kode == '6'){
                        $ket = 'MUTASI MASUK';
                    }elseif($kode == '10'){
                        $ket = 'MUTASI KELUAR';
                    }else{
                        $ket = '';
                    }
               @endphp
               <p>JENIS PENGUJIAN <span style="margin-left:25px">: {{ $ket }} </span></p>
               <p>PERIODE <span style="margin-left:80px">: {{ $tglprint }}</span></p>
             </div>
             <div class="col-12">
              <table class="table table-bordered ">
                <thead>
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
                  @php $i=1;$tot1 = 0;$tot2 = 0;$tot3 = 0;$tot4 = 0;$tot5 = 0;$tot6 = 0;$tot7 = 0;$tot8 = 0;$tot9 = 0;$tot10 = 0;
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
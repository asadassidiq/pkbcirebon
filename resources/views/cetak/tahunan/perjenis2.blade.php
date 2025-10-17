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
                    <th scope="col" rowspan="3"> No</th>
                    <th scope="col" rowspan="3" class="text-center" >BULAN</th>
                    <th scope="col" rowspan="3" class="text-center" >JENIS UJI</th>
                    <th scope="col" colspan="45" class="text-center">JENIS KENDARAAN</th>
                    <th scope="col" rowspan="3" class="text-center" >Total</th>
                  </tr>
                  <tr>
                    <th scope="col" class="text-center" colspan="3">MPU</th>
                    <th scope="col" class="text-center" colspan="3">MBK</th>
                    <th scope="col" class="text-center" colspan="3">MBS</th>
                    <th scope="col" class="text-center" colspan="3">MBB</th>
                    <th scope="col" class="text-center" colspan="3">MBM</th>
                    <th scope="col" class="text-center" colspan="3">MBG</th>
                    <th scope="col" class="text-center" colspan="3">MBT</th>
                    <th scope="col" class="text-center" colspan="3">MBTK</th>
                    <th scope="col" class="text-center" colspan="3">MB1/KK1</th>
                    <th scope="col" class="text-center" colspan="3">MB2/KK2</th>
                    <th scope="col" class="text-center" colspan="3">MB3</th>
                    <th scope="col" class="text-center" colspan="3">MB4</th>
                    <th scope="col" class="text-center" colspan="3">MB5</th>
                    <th scope="col" class="text-center" colspan="3">KG</th>
                    <th scope="col" class="text-center" colspan="3">KT</th>
                  </tr>
                  <tr>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                    <th scope="col" class="text-center">U</th>
                    <th scope="col" class="text-center">BU</th>
                    <th scope="col" class="text-center">P</th>
                  </tr>
                </thead>
                <tbody>
                  @php
                    $no=1;
                  @endphp
                  @foreach ($data as $dt)
                  <tr style="padding:0px;margin:0px;">
                      <td rowspan="4" style="padding:5px;margin:5px;" class="text-center">{{ $no }}</td>
                      <td rowspan="4" style="padding:5px;margin:5px;" class="text-center">{{ $dt['tgl'] }}</td>
                    @foreach ($dt['jeniskendaraan'] as $d)
                    <tr>
                      @if($d['ket'] == 1)
                      <td style="padding:5px;margin:5px;" class="text-center">KEND. LULUS UJI</td>
                      @elseif($d['ket'] == 0)
                      <td style="padding:5px;margin:5px;" class="text-center">KEND. TIDAK LULUS UJI</td>
                      @else
                      <td style="padding:5px;margin:5px;" class="text-center">KEND. UJI</td>
                      @endif
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mpu_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mpu_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mpu_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbk_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbk_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbk_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbs_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbs_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbs_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbb_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbb_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbb_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbm_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbm_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbm_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbg_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbg_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbg_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbt_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbt_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbt_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbtk_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbtk_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbtk_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb1_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb1_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb1_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb2_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb2_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb2_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb3_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb3_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb3_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb4_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb4_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb4_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb5_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb5_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb5_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['kg_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['kg_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['kg_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['kt_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['kt_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['kt_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['total'] }}</td>
                    </tr>
                    @endforeach
                  </tr>
                  @php
                    $no++;
                  @endphp
                  @endforeach
                  
                  <tr style="padding:0px;margin:0px;">
                      <td colspan="2" rowspan="4" style="padding:5px;margin:5px;" class="text-center">Jumlah</td>
                      @foreach ($total as $d)
                    <tr>
                      @if($d['ket'] == 1)
                      <td style="padding:5px;margin:5px;" class="text-center">KEND. LULUS UJI</td>
                      @elseif($d['ket'] == 0)
                      <td style="padding:5px;margin:5px;" class="text-center">KEND. TIDAK LULUS UJI</td>
                      @else
                      <td style="padding:5px;margin:5px;" class="text-center">KEND. UJI</td>
                      @endif
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mpu_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mpu_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mpu_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbk_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbk_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbk_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbs_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbs_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbs_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbb_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbb_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbb_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbm_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbm_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbm_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbg_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbg_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbg_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbt_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbt_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbt_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbtk_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbtk_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mbtk_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb1_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb1_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb1_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb2_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb2_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb2_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb3_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb3_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb3_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb4_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb4_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb4_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb5_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb5_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['mb5_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['kg_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['kg_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['kg_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['kt_umum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['kt_Bukanumum'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['kt_pemerintah'] }}</td>
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $d['total'] }}</td>
                    </tr>
                    @endforeach
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
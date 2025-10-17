<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Soltindo</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
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
            border:1px solid #333;
            font-size: 14px;
            width: auto;
        }
        tr { line-height: 0px; }
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
            <div class="col-3  text-right">
                <p><img height="25%" width="25%" class="img-fluid" src="{{url('/img/kota.png')}}" alt="Image"/></p>
            </div>
            <div class="col-7 align-self-center">
                <h3 class="text-center" style="margin:0;padding:0">PEMERINTAH KABUPATEN MIMIKA</h3>
                <h3 class="text-center" style="margin:0;padding:0"><b>DINAS PERHUBUNGAN</b></h3>
                <h2 class="text-center" style="margin:0;padding:0"><b>UPT PENGUJIAN KENDARAAN BERMOTOR</b></h2>
                <p class="text-center" style="margin:0;padding:0">Jl. Mahkota Jalur 1 Kel.Timika Jaya Kec.Mimika Baru</p>
                <p class="text-center" style="margin:0;padding:0">Telp.0901-323630, Email: unitpengujikabmmk@yahoo.com, Kode Pos : 99910</p>
            </div>          
            <div class="col-1">
                <!-- <img class="img-fluid" src="{{url('/img/dishub.png')}}" alt="Image"/> -->
            </div>
        </div>
        <hr>
        <div class="row">
             <div class="col-12">
               <h4>DAFTAR JUMLAH KENDARAAN UJI</h4>
               <p>PERIODE <span style="margin-left:50px">: {{ $tglprint }}</span></p>
             </div>
             <div class="col-12">
              <table class="table table-bordered ">
                <thead>
                  <tr style="line-height:12px">
                    <th class="text-center" rowspan="2">TGL UJI</th>
                    <th class="text-center" rowspan="2">JENIS PENGUJIAN KENDARAAN</th>
                    <th class="text-center" colspan="3">MOBIL PENUMPANG</th>
                    <th class="text-center" colspan="3">MOBIL BUS KECIL</th>
                    <th class="text-center" colspan="3">MOBIL BUS SEDANG</th>
                    <th class="text-center" colspan="3">MOBIL BUS BESAR</th>
                    <th class="text-center" colspan="3">MOBIL BARANG 1</th>
                    <th class="text-center" colspan="3">MOBIL BARANG 2</th>
                    <th class="text-center" colspan="3">MOBIL BARANG 3</th>
                    <th class="text-center" colspan="3">MOBIL BARANG 4</th>
                    <th class="text-center" colspan="3">MOBIL BARANG 5</th>
                    <th class="text-center" colspan="3">KERETA TEMPELAN</th>
                    <th class="text-center" colspan="3">KERETA GANDENG</th>
                    <th class="text-center" colspan="4">JUMLAH</th>
                  </tr>
                  <tr style="line-height:12px">
                      <th>U</th>
                      <th>TU</th>
                      <th>P</th>
                      <th>U</th>
                      <th>TU</th>
                      <th>P</th>
                      <th>U</th>
                      <th>TU</th>
                      <th>P</th>
                      <th>U</th>
                      <th>TU</th>
                      <th>P</th>
                      <th>U</th>
                      <th>TU</th>
                      <th>P</th>
                      <th>U</th>
                      <th>TU</th>
                      <th>P</th>
                      <th>U</th>
                      <th>TU</th>
                      <th>P</th>
                      <th>U</th>
                      <th>TU</th>
                      <th>P</th>
                      <th>U</th>
                      <th>TU</th>
                      <th>P</th>
                      <th>U</th>
                      <th>TU</th>
                      <th>P</th>
                      <th>U</th>
                      <th>TU</th>
                      <th>P</th>
                      <th>U</th>
                      <th>TU</th>
                      <th>P</th>
                      <th>JML</th>
                  </tr>
                </thead>
                <tbody>
                @foreach ($datauji as $data) 
                    <?php $tgl='';?>
                    @php
                        $mobilpenumpang1 = 0; $mobilpenumpang2 = 0; $mobilpenumpang3 = 0;
                        $mobilbuskecil1 = 0; $mobilbuskecil2 = 0; $mobilbuskecil3 =0; 
                        $mobilbussedang1 = 0;$mobilbussedang2 = 0;$mobilbussedang3 = 0;
                        $mobilbusbesar1 = 0;$mobilbusbesar2 = 0; $mobilbusbesar3 = 0 ;
                        $mobilbarang11 = 0;$mobilbarang12 = 0;$mobilbarang13 = 0;
                        $mobilbarang21 = 0;$mobilbarang22 = 0;$mobilbarang23 = 0;
                        $mobilbarang31 = 0;$mobilbarang32 = 0;$mobilbarang33 = 0;
                        $mobilbarang41 = 0;$mobilbarang42 = 0;$mobilbarang43 = 0;
                        $mobilbarang51 = 0;$mobilbarang52 = 0;$mobilbarang53 = 0;
                        $keretatempelan1 = 0;$keretatempelan2=0;$keretatempelan3=0;
                        $keretagandeng1 = 0;$keretagandeng2=0;$keretagandeng3=0;
                        $jml1=0;$jml2=0;$jml3=0;$jml4=0;
                    @endphp
                    @foreach ($data['datajm'] as $dt) 
                        <tr>
                            @if($tgl !=  $data['tgl'])
                            
                            <td style="font-size:12px">{{ date_format(date_create($data['tgl']),"d-m-y") }}</td>
                            @else
                            <td></td>
                            @endif
                            
                            <?php $tgl = $data['tgl'] ?>

                            @if($dt['jenis'] === '1')
                                <td style="font-size:12px">UJI PERTAMA</td>
                            @elseif($dt['jenis'] === '2')
                                <td style="font-size:12px">UJI BERKALA</td>
                            @elseif($dt['jenis'] === '6')
                                <td style="font-size:12px">MUTASI MASUK</td>
                            @elseif($dt['jenis'] === '5')
                            <td style="font-size:12px">NU MASUK</td>
                            @endif
                            @if($dt['mobilpenumpang1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilpenumpang1'] }}</td>
                            @endif
                            @if($dt['mobilpenumpang2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilpenumpang2'] }}</td>
                            @endif
                            @if($dt['mobilpenumpang3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilpenumpang3'] }}</td>
                            @endif
                            @if($dt['mobilbuskecil1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbuskecil1'] }}</td>
                            @endif
                            @if($dt['mobilbuskecil2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbuskecil2'] }}</td>
                            @endif
                            @if($dt['mobilbuskecil3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbuskecil3'] }}</td>
                            @endif
                            @if($dt['mobilbussedang1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbussedang1'] }}</td>
                            @endif
                            @if($dt['mobilbussedang2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbussedang2'] }}</td>
                            @endif
                            @if($dt['mobilbussedang3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbussedang3'] }}</td>
                            @endif
                            @if($dt['mobilbusbesar1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbusbesar1'] }}</td>
                            @endif
                            @if($dt['mobilbusbesar2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbusbesar2'] }}</td>
                            @endif
                            @if($dt['mobilbusbesar3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbusbesar3'] }}</td>
                            @endif
                            @if($dt['mobilbarang11'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang11'] }}</td>
                            @endif
                            @if($dt['mobilbarang12'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang12'] }}</td>
                            @endif
                            @if($dt['mobilbarang13'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang13'] }}</td>
                            @endif
                            @if($dt['mobilbarang21'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang21'] }}</td>
                            @endif
                            @if($dt['mobilbarang22'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang22'] }}</td>
                            @endif
                            @if($dt['mobilbarang23'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang23'] }}</td>
                            @endif
                            @if($dt['mobilbarang31'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang31'] }}</td>
                            @endif
                            @if($dt['mobilbarang32'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang32'] }}</td>
                            @endif
                            @if($dt['mobilbarang33'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang33'] }}</td>
                            @endif
                            @if($dt['mobilbarang41'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang41'] }}</td>
                            @endif
                            @if($dt['mobilbarang42'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang42'] }}</td>
                            @endif
                            @if($dt['mobilbarang43'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang43'] }}</td>
                            @endif
                            @if($dt['mobilbarang51'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang51'] }}</td>
                            @endif
                            @if($dt['mobilbarang52'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang52'] }}</td>
                            @endif
                            @if($dt['mobilbarang53'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang53'] }}</td>
                            @endif
                            @if($dt['keretatempelan1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['keretatempelan1'] }}</td>
                            @endif
                            @if($dt['keretatempelan2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['keretatempelan2'] }}</td>
                            @endif
                            @if($dt['keretatempelan3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['keretatempelan3'] }}</td>
                            @endif
                            @if($dt['keretagandeng1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['keretagandeng1'] }}</td>
                            @endif
                            @if($dt['keretagandeng2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['keretagandeng2'] }}</td>
                            @endif
                            @if($dt['keretagandeng3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['keretagandeng3'] }}</td>
                            @endif
                            @if($dt['jml1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['jml1'] }}</td>
                            @endif
                            @if($dt['jml2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['jml2'] }}</td>
                            @endif
                            @if($dt['jml3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['jml3'] }}</td>
                            @endif
                            @if($dt['jml4'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['jml4'] }}</td>
                            @endif
                        </tr>


                    @php
                        $mobilpenumpang1 = $mobilpenumpang1+$dt['mobilpenumpang1']; $mobilpenumpang2 = $mobilpenumpang2+$dt['mobilpenumpang2']; $mobilpenumpang3 = $mobilpenumpang3+$dt['mobilpenumpang3'];
                        $mobilbuskecil1 = $mobilbuskecil1+$dt['mobilbuskecil1']; $mobilbuskecil2 = $mobilbuskecil2+$dt['mobilbuskecil2']; $mobilbuskecil3 =$mobilbuskecil3+$dt['mobilbuskecil3']; 
                        $mobilbussedang1 = $mobilbussedang1+$dt['mobilbussedang1'];$mobilbussedang2 = $mobilbussedang2+$dt['mobilbussedang2'];$mobilbussedang3 = $mobilbussedang3+$dt['mobilbussedang3'];
                        $mobilbusbesar1 = $mobilbusbesar1+$dt['mobilbusbesar1'];$mobilbusbesar2 = $mobilbusbesar2+$dt['mobilbusbesar2']; $mobilbusbesar3 = $mobilbusbesar3+$dt['mobilbusbesar3'] ;
                        $mobilbarang11 = $mobilbarang11+$dt['mobilbarang11'];$mobilbarang12 = $mobilbarang12+$dt['mobilbarang12'];$mobilbarang13 = $mobilbarang13+$dt['mobilbarang13'];
                        $mobilbarang21 = $mobilbarang21+$dt['mobilbarang21'];$mobilbarang22 = $mobilbarang22+$dt['mobilbarang22'];$mobilbarang23 = $mobilbarang23+$dt['mobilbarang23'];
                        $mobilbarang31 = $mobilbarang31+$dt['mobilbarang31'];$mobilbarang32 = $mobilbarang32+$dt['mobilbarang32'];$mobilbarang33 = $mobilbarang33+$dt['mobilbarang33'];
                        $mobilbarang41 = $mobilbarang41+$dt['mobilbarang41'];$mobilbarang42 = $mobilbarang42+$dt['mobilbarang42'];$mobilbarang43 = $mobilbarang43+$dt['mobilbarang43'];
                        $mobilbarang51 = $mobilbarang51+$dt['mobilbarang51'];$mobilbarang52 = $mobilbarang52+$dt['mobilbarang52'];$mobilbarang53 = $mobilbarang53+$dt['mobilbarang53'];
                        $keretatempelan1 = $keretatempelan1+$dt['keretatempelan1'];$keretatempelan2=$keretatempelan2+$dt['keretatempelan2'];$keretatempelan3=$keretatempelan3+$dt['keretatempelan3'];
                        $keretagandeng1 = $keretagandeng1+$dt['keretagandeng1'];$keretagandeng2=$keretagandeng2+$dt['keretagandeng2'];$keretagandeng3=$keretagandeng3+$dt['keretagandeng3'];
                        $jml1=$jml1+$dt['jml1'];$jml2=$jml2+$dt['jml2'];$jml3=$jml3+$dt['jml3'];$jml4=$jml4+$dt['jml4'];
                    @endphp

                    @endforeach
                        <tr>
                            <td></td>
                            <td>Jml</td>
                            @if($mobilpenumpang1 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilpenumpang1 }}</td>
                            @endif
                            @if($mobilpenumpang2 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilpenumpang2 }}</td>
                            @endif
                            @if($mobilpenumpang3 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilpenumpang3 }}</td>
                            @endif
                            @if($mobilbuskecil1 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbuskecil1 }}</td>
                            @endif
                            @if($mobilbuskecil2 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbuskecil2 }}</td>
                            @endif
                            @if($mobilbuskecil3 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbuskecil3 }}</td>
                            @endif
                            @if($mobilbussedang1 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbussedang1 }}</td>
                            @endif
                            @if($mobilbussedang2 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbussedang2 }}</td>
                            @endif
                            @if($mobilbussedang3 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbussedang3 }}</td>
                            @endif
                            @if($mobilbusbesar1 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbusbesar1 }}</td>
                            @endif
                            @if($mobilbusbesar2 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbusbesar2 }}</td>
                            @endif
                            @if($mobilbusbesar3 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbusbesar3 }}</td>
                            @endif
                            @if($mobilbarang11 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang11 }}</td>
                            @endif
                            @if($mobilbarang12 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang12 }}</td>
                            @endif
                            @if($mobilbarang13 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang13 }}</td>
                            @endif
                            @if($mobilbarang21 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang21 }}</td>
                            @endif
                            @if($mobilbarang22 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang22 }}</td>
                            @endif
                            @if($mobilbarang23 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang23 }}</td>
                            @endif
                            @if($mobilbarang31 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang31 }}</td>
                            @endif
                            @if($mobilbarang32 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang32 }}</td>
                            @endif
                            @if($mobilbarang33 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang33 }}</td>
                            @endif
                            @if($mobilbarang41 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang41 }}</td>
                            @endif
                            @if($mobilbarang42 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang42 }}</td>
                            @endif
                            @if($mobilbarang43 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang43 }}</td>
                            @endif
                            @if($mobilbarang51 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang51 }}</td>
                            @endif
                            @if($mobilbarang52 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang52 }}</td>
                            @endif
                            @if($mobilbarang53 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang53 }}</td>
                            @endif
                            @if($keretatempelan1 == 0)
                            <td></td>
                            @else
                            <td>{{ $keretatempelan1 }}</td>
                            @endif
                            @if($keretatempelan2 == 0)
                            <td></td>
                            @else
                            <td>{{ $keretatempelan2 }}</td>
                            @endif
                            @if($keretatempelan3 == 0)
                            <td></td>
                            @else
                            <td>{{ $keretatempelan3 }}</td>
                            @endif
                            @if($keretagandeng1 == 0)
                            <td></td>
                            @else
                            <td>{{ $keretagandeng1 }}</td>
                            @endif
                            @if($keretagandeng2 == 0)
                            <td></td>
                            @else
                            <td>{{ $keretagandeng2 }}</td>
                            @endif
                            @if($keretagandeng3 == 0)
                            <td></td>
                            @else
                            <td>{{ $keretagandeng3 }}</td>
                            @endif
                            @if($jml1 == 0)
                            <td></td>
                            @else
                            <td>{{ $jml1 }}</td>
                            @endif
                            @if($jml2 == 0)
                            <td></td>
                            @else
                            <td>{{ $jml2 }}</td>
                            @endif
                            @if($jml3 == 0)
                            <td></td>
                            @else
                            <td>{{ $jml3 }}</td>
                            @endif
                            @if($jml4 == 0)
                            <td></td>
                            @else
                            <td>{{ $jml4 }}</td>
                            @endif
                        </tr>
                @endforeach 


                @php
                    $mobilpenumpang1 = 0; $mobilpenumpang2 = 0; $mobilpenumpang3 = 0;
                    $mobilbuskecil1 = 0; $mobilbuskecil2 = 0; $mobilbuskecil3 =0; 
                    $mobilbussedang1 = 0;$mobilbussedang2 = 0;$mobilbussedang3 = 0;
                    $mobilbusbesar1 = 0;$mobilbusbesar2 = 0; $mobilbusbesar3 = 0 ;
                    $mobilbarang11 = 0;$mobilbarang12 = 0;$mobilbarang13 = 0;
                    $mobilbarang21 = 0;$mobilbarang22 = 0;$mobilbarang23 = 0;
                    $mobilbarang31 = 0;$mobilbarang32 = 0;$mobilbarang33 = 0;
                    $mobilbarang41 = 0;$mobilbarang42 = 0;$mobilbarang43 = 0;
                    $mobilbarang51 = 0;$mobilbarang52 = 0;$mobilbarang53 = 0;
                    $keretatempelan1 = 0;$keretatempelan2=0;$keretatempelan3=0;
                    $keretagandeng1 = 0;$keretagandeng2=0;$keretagandeng3=0;
                    $jml1=0;$jml2=0;$jml3=0;$jml4=0;
                @endphp

                @php 
                    $jm = '';
                @endphp        
                    @foreach ($datajml as $dt) 
                        <tr>
                            
                            @if($jm !=  'JUMLAH')
                            
                            <td>JUMLAH</td>
                            @else
                            <td></td>
                            @endif
                            <?php $jm = 'JUMLAH'; ?>
                            @if($dt['jenis'] === '1')
                                <td style="font-size:12px">UJI PERTAMA</td>
                            @elseif($dt['jenis'] === '2')
                                <td style="font-size:12px">UJI BERKALA</td>
                            @elseif($dt['jenis'] === '6')
                                <td style="font-size:12px">MUTASI MASUK</td>
                            @elseif($dt['jenis'] === '5')
                                <td style="font-size:12px">NU MASUK</td>
                            @endif
                            @if($dt['mobilpenumpang1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilpenumpang1'] }}</td>
                            @endif
                            @if($dt['mobilpenumpang2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilpenumpang2'] }}</td>
                            @endif
                            @if($dt['mobilpenumpang3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilpenumpang3'] }}</td>
                            @endif
                            @if($dt['mobilbuskecil1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbuskecil1'] }}</td>
                            @endif
                            @if($dt['mobilbuskecil2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbuskecil2'] }}</td>
                            @endif
                            @if($dt['mobilbuskecil3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbuskecil3'] }}</td>
                            @endif
                            @if($dt['mobilbussedang1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbussedang1'] }}</td>
                            @endif
                            @if($dt['mobilbussedang2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbussedang2'] }}</td>
                            @endif
                            @if($dt['mobilbussedang3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbussedang3'] }}</td>
                            @endif
                            @if($dt['mobilbusbesar1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbusbesar1'] }}</td>
                            @endif
                            @if($dt['mobilbusbesar2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbusbesar2'] }}</td>
                            @endif
                            @if($dt['mobilbusbesar3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbusbesar3'] }}</td>
                            @endif
                            @if($dt['mobilbarang11'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang11'] }}</td>
                            @endif
                            @if($dt['mobilbarang12'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang12'] }}</td>
                            @endif
                            @if($dt['mobilbarang13'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang13'] }}</td>
                            @endif
                            @if($dt['mobilbarang21'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang21'] }}</td>
                            @endif
                            @if($dt['mobilbarang22'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang22'] }}</td>
                            @endif
                            @if($dt['mobilbarang23'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang23'] }}</td>
                            @endif
                            @if($dt['mobilbarang31'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang31'] }}</td>
                            @endif
                            @if($dt['mobilbarang32'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang32'] }}</td>
                            @endif
                            @if($dt['mobilbarang33'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang33'] }}</td>
                            @endif
                            @if($dt['mobilbarang41'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang41'] }}</td>
                            @endif
                            @if($dt['mobilbarang42'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang42'] }}</td>
                            @endif
                            @if($dt['mobilbarang43'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang43'] }}</td>
                            @endif
                            @if($dt['mobilbarang51'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang51'] }}</td>
                            @endif
                            @if($dt['mobilbarang52'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang52'] }}</td>
                            @endif
                            @if($dt['mobilbarang53'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang53'] }}</td>
                            @endif
                            @if($dt['keretatempelan1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['keretatempelan1'] }}</td>
                            @endif
                            @if($dt['keretatempelan2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['keretatempelan2'] }}</td>
                            @endif
                            @if($dt['keretatempelan3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['keretatempelan3'] }}</td>
                            @endif
                            @if($dt['keretagandeng1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['keretagandeng1'] }}</td>
                            @endif
                            @if($dt['keretagandeng2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['keretagandeng2'] }}</td>
                            @endif
                            @if($dt['keretagandeng3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['keretagandeng3'] }}</td>
                            @endif
                            @if($dt['jml1'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['jml1'] }}</td>
                            @endif
                            @if($dt['jml2'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['jml2'] }}</td>
                            @endif
                            @if($dt['jml3'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['jml3'] }}</td>
                            @endif
                            @if($dt['jml4'] == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['jml4'] }}</td>
                            @endif
                        </tr>

                    @php
                        $mobilpenumpang1 = $mobilpenumpang1+$dt['mobilpenumpang1']; $mobilpenumpang2 = $mobilpenumpang2+$dt['mobilpenumpang2']; $mobilpenumpang3 = $mobilpenumpang3+$dt['mobilpenumpang3'];
                        $mobilbuskecil1 = $mobilbuskecil1+$dt['mobilbuskecil1']; $mobilbuskecil2 = $mobilbuskecil2+$dt['mobilbuskecil2']; $mobilbuskecil3 =$mobilbuskecil3+$dt['mobilbuskecil3']; 
                        $mobilbussedang1 = $mobilbussedang1+$dt['mobilbussedang1'];$mobilbussedang2 = $mobilbussedang2+$dt['mobilbussedang2'];$mobilbussedang3 = $mobilbussedang3+$dt['mobilbussedang3'];
                        $mobilbusbesar1 = $mobilbusbesar1+$dt['mobilbusbesar1'];$mobilbusbesar2 = $mobilbusbesar2+$dt['mobilbusbesar2']; $mobilbusbesar3 = $mobilbusbesar3+$dt['mobilbusbesar3'] ;
                        $mobilbarang11 = $mobilbarang11+$dt['mobilbarang11'];$mobilbarang12 = $mobilbarang12+$dt['mobilbarang12'];$mobilbarang13 = $mobilbarang13+$dt['mobilbarang13'];
                        $mobilbarang21 = $mobilbarang21+$dt['mobilbarang21'];$mobilbarang22 = $mobilbarang22+$dt['mobilbarang22'];$mobilbarang23 = $mobilbarang23+$dt['mobilbarang23'];
                        $mobilbarang31 = $mobilbarang31+$dt['mobilbarang31'];$mobilbarang32 = $mobilbarang32+$dt['mobilbarang32'];$mobilbarang33 = $mobilbarang33+$dt['mobilbarang33'];
                        $mobilbarang41 = $mobilbarang41+$dt['mobilbarang41'];$mobilbarang42 = $mobilbarang42+$dt['mobilbarang42'];$mobilbarang43 = $mobilbarang43+$dt['mobilbarang43'];
                        $mobilbarang51 = $mobilbarang51+$dt['mobilbarang51'];$mobilbarang52 = $mobilbarang52+$dt['mobilbarang52'];$mobilbarang53 = $mobilbarang53+$dt['mobilbarang53'];
                        $keretatempelan1 = $keretatempelan1+$dt['keretatempelan1'];$keretatempelan2=$keretatempelan2+$dt['keretatempelan2'];$keretatempelan3=$keretatempelan3+$dt['keretatempelan3'];
                        $keretagandeng1 = $keretagandeng1+$dt['keretagandeng1'];$keretagandeng2=$keretagandeng2+$dt['keretagandeng2'];$keretagandeng3=$keretagandeng3+$dt['keretagandeng3'];
                        $jml1=$jml1+$dt['jml1'];$jml2=$jml2+$dt['jml2'];$jml3=$jml3+$dt['jml3'];$jml4=$jml4+$dt['jml4'];
                    @endphp

                    @endforeach
                        <tr>
                            <td></td>
                            <td>Jml</td>
                            @if($mobilpenumpang1 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilpenumpang1 }}</td>
                            @endif
                            @if($mobilpenumpang2 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilpenumpang2 }}</td>
                            @endif
                            @if($mobilpenumpang3 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilpenumpang3 }}</td>
                            @endif
                            @if($mobilbuskecil1 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbuskecil1 }}</td>
                            @endif
                            @if($mobilbuskecil2 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbuskecil2 }}</td>
                            @endif
                            @if($mobilbuskecil3 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbuskecil3 }}</td>
                            @endif
                            @if($mobilbussedang1 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbussedang1 }}</td>
                            @endif
                            @if($mobilbussedang2 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbussedang2 }}</td>
                            @endif
                            @if($mobilbussedang3 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbussedang3 }}</td>
                            @endif
                            @if($mobilbusbesar1 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbusbesar1 }}</td>
                            @endif
                            @if($mobilbusbesar2 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbusbesar2 }}</td>
                            @endif
                            @if($mobilbusbesar3 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbusbesar3 }}</td>
                            @endif
                            @if($mobilbarang11 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang11 }}</td>
                            @endif
                            @if($mobilbarang12 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang12 }}</td>
                            @endif
                            @if($mobilbarang13 == 0)
                            <td></td>
                            @else
                            <td>{{ $dt['mobilbarang13'] }}</td>
                            @endif
                            @if($mobilbarang21 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang21 }}</td>
                            @endif
                            @if($mobilbarang22 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang22 }}</td>
                            @endif
                            @if($mobilbarang23 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang23 }}</td>
                            @endif
                            @if($mobilbarang31 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang31 }}</td>
                            @endif
                            @if($mobilbarang32 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang32 }}</td>
                            @endif
                            @if($mobilbarang33 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang33 }}</td>
                            @endif
                            @if($mobilbarang41 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang41 }}</td>
                            @endif
                            @if($mobilbarang42 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang42 }}</td>
                            @endif
                            @if($mobilbarang43 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang43 }}</td>
                            @endif
                            @if($mobilbarang51 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang51 }}</td>
                            @endif
                            @if($mobilbarang52 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang52 }}</td>
                            @endif
                            @if($mobilbarang53 == 0)
                            <td></td>
                            @else
                            <td>{{ $mobilbarang53 }}</td>
                            @endif
                            @if($keretatempelan1 == 0)
                            <td></td>
                            @else
                            <td>{{ $keretatempelan1 }}</td>
                            @endif
                            @if($keretatempelan2 == 0)
                            <td></td>
                            @else
                            <td>{{ $keretatempelan2 }}</td>
                            @endif
                            @if($keretatempelan3 == 0)
                            <td></td>
                            @else
                            <td>{{ $keretatempelan3 }}</td>
                            @endif
                            @if($keretagandeng1 == 0)
                            <td></td>
                            @else
                            <td>{{ $keretagandeng1 }}</td>
                            @endif
                            @if($keretagandeng2 == 0)
                            <td></td>
                            @else
                            <td>{{ $keretagandeng2 }}</td>
                            @endif
                            @if($keretagandeng3 == 0)
                            <td></td>
                            @else
                            <td>{{ $keretagandeng3 }}</td>
                            @endif
                            @if($jml1 == 0)
                            <td></td>
                            @else
                            <td>{{ $jml1 }}</td>
                            @endif
                            @if($jml2 == 0)
                            <td></td>
                            @else
                            <td>{{ $jml2 }}</td>
                            @endif
                            @if($jml3 == 0)
                            <td></td>
                            @else
                            <td>{{ $jml3 }}</td>
                            @endif
                            @if($jml4 == 0)
                            <td></td>
                            @else
                            <td>{{ $jml4 }}</td>
                            @endif
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
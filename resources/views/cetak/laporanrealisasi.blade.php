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
            <h6><b>JUMLAH KENDARAAN BERMOTOR WAJIB UJI DAN REALISASI UJI DI KABUPATEN GUNUNG KIDUL</b></h6>
            <h6><b>SAMPAI DENGAN BULAN {{ $tglprint }}</b></h6>
        </div>
        @php
          $tgl = $tglprint;
          $co = strlen($tglprint);
          $tahun = substr($tgl,$co-4);
        @endphp
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                      <th scope="col" class="text-center" rowspan="2">No</th>
                      <th scope="col" class="text-center" rowspan="2">Jenis Kendaraan</th>
                      <th scope="col" class="text-center" colspan="2" >{{ (int)$tahun-2 }}</th>
                      <th scope="col" class="text-center" colspan="2" >{{ (int)$tahun-1 }}</th>
                      <th scope="col" class="text-center" colspan="2" >{{ $tahun }}</th>
                      <th scope="col" class="text-center" colspan="2" >{{ (int)$tahun+1 }}</th>
                      <th scope="col" class="text-center" colspan="2" >{{ (int)$tahun+2 }}</th>
                      <th scope="col" class="text-center" colspan="2" >{{ (int)$tahun+3 }}</th>
                    </tr>
                    <tr>
                      <th scope="col" class="text-center">Wajib Uji</th>
                      <th scope="col" class="text-center">Realisasi</th>
                      <th scope="col" class="text-center">Wajib Uji</th>
                      <th scope="col" class="text-center">Realisasi</th>
                      <th scope="col" class="text-center">Wajib Uji</th>
                      <th scope="col" class="text-center">Realisasi</th>
                      <th scope="col" class="text-center">Wajib Uji</th>
                      <th scope="col" class="text-center">Realisasi</th>
                      <th scope="col" class="text-center">Wajib Uji</th>
                      <th scope="col" class="text-center">Realisasi</th>
                      <th scope="col" class="text-center">Wajib Uji</th>
                      <th scope="col" class="text-center">Realisasi</th>
                    </tr>
                </thead>
                <tbody>
                   @php
                    $no=1;$wajib1=0;$wajib2=0;$wajib3=0;$wajib4=0;$wajib5=0;$wajib6=0;$realisasi1=0;$realisasi2=0;$realisasi3=0;$realisasi4=0;$realisasi5=0;$realisasi6=0;
                  @endphp
                  @foreach ($data as $dt) 
                  <tr style="padding:0px;margin:0px;">
                      <td style="padding:5px;margin:5px;" class="text-center">{{ $no }}</td>
                      <td style="padding:5px;margin:5px;" class="text-left" colspan="13"><b>{{ $dt['jenis'] }}</b></td>
                      
                      @foreach ($dt['total'] as $tot) 
                        <tr>
                          <td style="padding:5px;margin:5px;" class="text-center" ></td>
                          <td style="padding:5px;margin:5px;" class="text-center" >{{ $tot['sifat'] }}</td>
                          <td style="padding:5px;margin:5px;" class="text-center" >{{ $tot['wajib1'] }}</td>
                          <td style="padding:5px;margin:5px;" class="text-center" >{{ $tot['realisasi1'] }}</td>
                          <td style="padding:5px;margin:5px;" class="text-center" >{{ $tot['wajib2'] }}</td>
                          <td style="padding:5px;margin:5px;" class="text-center" >{{ $tot['realisasi2'] }}</td>
                          <td style="padding:5px;margin:5px;" class="text-center" >{{ $tot['wajib3'] }}</td>
                          <td style="padding:5px;margin:5px;" class="text-center" >{{ $tot['realisasi3'] }}</td>
                          <td style="padding:5px;margin:5px;" class="text-center" >{{ $tot['wajib5'] }}</td>
                          <td style="padding:5px;margin:5px;" class="text-center" >{{ $tot['realisasi4'] }}</td>
                          <td style="padding:5px;margin:5px;" class="text-center" >{{ $tot['wajib5'] }}</td>
                          <td style="padding:5px;margin:5px;" class="text-center" >{{ $tot['realisasi5'] }}</td>
                          <td style="padding:5px;margin:5px;" class="text-center" >{{ $tot['wajib6'] }}</td>
                          <td style="padding:5px;margin:5px;" class="text-center" >{{ $tot['realisasi6'] }}</td>
                        </tr>
                        @php
                          $wajib1=$wajib1+$tot['wajib1'];$realisasi1=$realisasi1+$tot['realisasi1'];
                          $wajib2=$wajib2+$tot['wajib2'];$realisasi2=$realisasi2+$tot['realisasi2'];
                          $wajib3=$wajib3+$tot['wajib3'];$realisasi3=$realisasi3+$tot['realisasi3'];
                          $wajib4=$wajib4+$tot['wajib4'];$realisasi4=$realisasi4+$tot['realisasi4'];
                          $wajib5=$wajib5+$tot['wajib5'];$realisasi5=$realisasi5+$tot['realisasi5'];
                          $wajib6=$wajib6+$tot['wajib6'];$realisasi6=$realisasi6+$tot['realisasi6'];
                        @endphp
                      @endforeach
                  </tr>
                  @php
                    $no++;
                  @endphp
                  @endforeach

                  <tr>
                    <td style="padding:5px;margin:5px;" class="text-center" colspan="2">JUMLAH</td>
                    <td style="padding:5px;margin:5px;" class="text-center">{{ $wajib1 }}</td>
                    <td style="padding:5px;margin:5px;" class="text-center">{{ $realisasi1 }}</td>
                    <td style="padding:5px;margin:5px;" class="text-center">{{ $wajib2 }}</td>
                    <td style="padding:5px;margin:5px;" class="text-center">{{ $realisasi2 }}</td>
                    <td style="padding:5px;margin:5px;" class="text-center">{{ $wajib3 }}</td>
                    <td style="padding:5px;margin:5px;" class="text-center">{{ $realisasi3 }}</td>
                    <td style="padding:5px;margin:5px;" class="text-center">{{ $wajib5 }}</td>
                    <td style="padding:5px;margin:5px;" class="text-center">{{ $realisasi4 }}</td>
                    <td style="padding:5px;margin:5px;" class="text-center">{{ $wajib5 }}</td>
                    <td style="padding:5px;margin:5px;" class="text-center">{{ $realisasi5 }}</td>
                    <td style="padding:5px;margin:5px;" class="text-center">{{ $wajib6 }}</td>
                    <td style="padding:5px;margin:5px;" class="text-center">{{ $realisasi6 }}</td>
                  </tr>

                </tbody>
            </table>       
        </div>
            <br>
        <div class="row" style="font-size:14px">
            <div class="col-8"></div>
            <div class="col-4 text-center">
                <b>
                    <p>Mimika, {{ $tglcetak }}</p>
                    <P>Kepala UPT PKB</P>
                    <br><br>
                    <p style="margin:0px;padding:0px;"><u>DARU SASONGKO, S.SiT</u></p>
                    <p style="margin:0px;padding:0px;">Penara Tk.I III/d</p>
                    <p style="margin:0px;padding:0px;">NIP. 19790509 200012 1 003</p>
                </b>
            </div>
        </div>
    </div>

</body>
</html>
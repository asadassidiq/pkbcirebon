<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cetak</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
   <link rel="icon" href="{{ asset('img/icon.ico') }}" type="image/ico">

    <!-- Scripts -->
    
    <!-- Styles -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        body{
            color:#333;
            text-align:left;
            font-size:14px;
            margin:0;
            padding: 10px;
        }
        .cont {
            margin: 10px;
        }
        table{
            border:1px solid #333;
            border-collapse:collapse;
            margin:0 auto;
        }
        td, tr, th{
            font-size: 11px;
            width: auto;
        }
        th{
            background-color: #f0f0f0;
        }
        .kertasbaru {page-break-before: always;}

         @page { size: landscape; }

         @media print {
            @page {size: landscape}
            .kertasbaru {page-break-before: always;}
          }
    </style>
</head>
<body onload="window.print();">
<!-- <body> -->
    <div class="cont
        .cont {
            margin: 10px;
        }">
        <div class="row text-center">
            <div class="col-12">
                <h5><b>Laporan Kendaraan Bermotor</b></h5>
                <h5><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></h5>
            </div>
        </div>
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                      <th scope="col">NO</th>
                      <th scope="col">TANGGAL</th>
                      <th scope="col">NO UJI</th>
                      <th scope="col">NO KENDARAAN</th>
                      <th scope="col">NAMA PEMILIK</th>
                      <th scope="col">ALAMAT PEMILIK</th>
                      <th scope="col">JENIS KENDARAAN</th>
                      <th scope="col">MODEL</th>
                      <th scope="col">JBB</th>
                      <th scope="col">PENDAFTARAN</th>
                      <th scope="col">PERUNTUKAN</th>
                    </tr>
                </thead>
                <tbody>
                @php $i=1
                @endphp

                @foreach ($data as $data) 
                <tr>
                  <th scope="row">{{ $i }}</th>
                  <td>{{ date_format(date_create($data->tglpendaftaran),'d-m-Y') }}</td>
                  <td>{{ $data->nouji }}</td>
                  <td>{{ $data->noregistrasikendaraan }}</td>
                  <td>{{ $data->nama }}</td>
                  <td>{{ $data->alamat }}</td>
                  <td>{{ $data->jenis }}</td>
                  <td>{{ $data->model }}</td>
                  <td>{{ $data->jbb }}</td>
                  <td>{{ $data->keterangan }}</td>
                  <td>{{ $data->peruntukan }}</td>
                </tr>
                @php $i++
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
                    <p style="margin:0;padding: 0;">Mengetahui,</p>
                    <p style="margin:0;padding: 0;">Kepala UPT</p>
                    <p style="margin:0;padding: 0;">Pengujian Kendaraan Bermotor</p>
                    <br><br>
                    <p style="margin:0;padding: 0;">{{ $ttd['nama'] }}</p>
                    <p style="margin:0;padding: 0;">NIP. {{ $ttd['nip'] }}</p>
                </b>
            </div>
        </div>
    </div>


</body>
</html>
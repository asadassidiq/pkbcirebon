<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laporan Kendaraan Harian</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
   <link rel="icon" href="{{ asset('img/icon.ico') }}" type="image/ico">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <style>
        body{
            color:#333;
            text-align:left;
            font-size:14px;
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
            font-size: 11px;
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
            <div class="col-9 align-self-center">
                <h3 class="text-center" style="margin:0;padding:0">PEMERINTAH KABUPATEN MIMIKA</h3>
                <h3 class="text-center" style="margin:0;padding:0"><b>DINAS PERHUBUNGAN</b></h3>
                <h2 class="text-center" style="margin:0;padding:0"><b>UPT PENGUJIAN KENDARAAN BERMOTOR</b></h2>
                <p class="text-center" style="margin:0;padding:0">Jl. Mahkota Jalur 1 Kel.Timika Jaya Kec.Mimika Baru</p>
                <p class="text-center" style="margin:0;padding:0">Telp.0901-323630, Email: unitpengujikabmmk@yahoo.com, Kode Pos : 99910</p>
            </div>
            <div class="col-1">
            </div>
        </div>
        <hr style="border: 1px double black;">
        <div class="row">
            <table class="table table-bordered ">
                <thead>
                    <tr>
                      <th scope="col">NO</th>
                      <th scope="col">NO UJI KENDARAAN</th>
                      <th scope="col">NO KENDARAAN</th>
                      <th scope="col">NAMA PEMILIK</th>
                      <th scope="col">JENIS KENDARAAN</th>
                      <th scope="col">JBB</th>
                      <th scope="col">KENDARAAN</th>
                      <th scope="col">JENIS PELAYANAN</th>
                      <th scope="col">HASIL UJI</th>
                      <th scope="col">PERUNTUKAN</th>
                      <th scope="col">KARTU</th>
                      <th scope="col">NO HP</th>
                    </tr>
                </thead>
                <tbody>
                @php $i=1
                @endphp
                @foreach ($kendaraan as $data) 
                <tr>
                  <th scope="row">{{ $i }}</th>
                  <td>{{ $data->nouji }}</td>
                  <td>{{ $data->noregistrasikendaraan }}</td>
                  <td>{{ $data->nama }}</td>
                  <td>{{ $data->klasifikasis }}</td>
                  <td>{{ $data->jbb }}</td>
                  <td>{{ $data->model }}</td>
                  <td>{{ $data->keterangan }}</td>
                  @if ($data->statuslulusuji == 1)
                  <td>LULUS</td>
                  @else
                  <td>TIDAK LULUS</td>
                  @endif
                  <td>{{ $data->peruntukan }}</td>
                  @if (!empty($data->rfid_tid))
                  <td>BARU</td>
                  @else
                  <td>LAMA</td>
                  @endif
                  <td>{{ $data->notelp }}</td>
                </tr>
                @php $i++
                @endphp
                @endforeach
                </tbody>
              </table>
            </div>
            <br><br>
        </div>
        <br>
        <div class="row" style="font-size:14px">
            <div class="col-8"></div>
            <div class="col-4 text-center">
                <b>
                    <p style="padding:1px;margin:0px;">Mengetahui,</p>
                    <P style="padding:1px;margin:0px;">Kepala UPT</P>
                    <P style="padding:1px;margin:0px;">Pengujian Kendaraan Bermotor</P>
					
                
                    <br><br>
                    <br>
                    <p style="padding:1px;margin:0px;">{{ $ttd['name'] }}</p>
                    <p style="padding:1px;margin:0px;">NIP. {{ $ttd['nip'] }}</p>
                </b>
            </div>
        </div>
    </div>
    <div class="container-fluid kertasbaru">
        <div class="text-left">
            <h5><b>LAMPIRAN 1</b></h5>
            <h5><b>DATA ADMINISTRASI</b></h5>
            <h5><b>{{ $tglprint }}</b></h5>
        </div>
    
        <div class="row">
            <div class="col-6">
            <table class="table table-bordered ">
                <thead>
                    <tr>
                      <th scope="col">JENIS KENDARAAN</th>
                      <th scope="col">JUMLAH</th>
                    </tr>
                </thead>
                <tbody>
                @foreach ($jenis as $data) 
                  <tr>
                    <td>{{ $data['jenis']  }}</td>
                    <td>{{ $data['jumlah'] }}</td>
                  </tr>
                @endforeach
                </tbody>
            </table>
            <table class="table table-bordered ">
                <thead>
                  <tr>
                    <th scope="col">MOBIL BARANG</th>
                    <th scope="col">JUMLAH</th>
                  </tr>
                </thead>
                <tbody>
                @foreach ($barang as $data) 
                    <tr>
                      <td>{{ $data['model'] }}</td>
                      <td>{{ $data['total'] }}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
            </div>

            <div class="col-6">
            <table class="table table-bordered ">
                <thead>
                    <tr>
                      <th scope="col">JENIS PELAYANAN</th>
                      <th scope="col">JUMLAH</th>
                    </tr>
                </thead>
                <tbody>
                @foreach ($jenispelayanan as $data) 
                  <tr>
                    <td>{{ $data['jenispelayanan']  }}</td>
                    <td>{{ $data['jumlah'] }}</td>
                  </tr>
                @endforeach
                </tbody>
            </table>
            <br>
            <table class="table table-bordered ">
                <thead>
                    <tr>
                      <th scope="col">KETERANGAN</th>
                      <th scope="col">JUMLAH</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>LULUS</td>
                    <td>{{ $lulus }}</td>
                  </tr>
                  <tr>
                    <td>TIDAK LULUS</td>
                    <td>{{ $tidaklulus }}</td>
                  </tr>
                </tbody>
            </table>

            <br>
            <table class="table table-bordered ">
                <thead>
                    <tr>
                      <th scope="col">UMUM / TIDAK UMUM</th>
                      <th scope="col">JUMLAH</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>UMUM</td>
                    <td>{{ $umum }}</td>
                  </tr>
                  <tr>
                    <td>TIDAK UMUM</td>
                    <td>{{ $tidakumum }}</td>
                  </tr>
                </tbody>
            </table>
            <br>
            <table class="table table-bordered ">
                <thead>
                    <tr>
                      <th scope="col">PEMAKAIN KARTU UJI</th>
                      <th scope="col">JUMLAH</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BARU</td>
                    <td>{{ $pemakaianbuku['baru'] }}</td>
                  </tr>
                  <tr>
                    <td>RUSAK</td>
                    <td>{{ $pemakaianbuku['rusak'] }}</td>
                  </tr>
                  <tr>
                    <td>HILANG</td>
                    <td>{{ $pemakaianbuku['hilang'] }}</td>
                  </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</body>
</html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laporan Kendaraan Harian</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="icon" href="{{ asset('img/icon.ico') }}" type="image/ico">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <style>
        body {
            color: #333;
            text-align: left;
            font-size: 14px;
            margin: 0;
        }

        .container {
            margin: 0 auto;
            margin-top: 35px;
            padding: 40px;
            width: 750px;
            height: auto;
            background-color: #fff;
        }

        caption {
            font-size: 28px;
            margin-bottom: 15px;
        }

        table {
            border: 1px solid #333;
            border-collapse: collapse;
            margin: 0 auto;
        }

        td,
        tr,
        th {
            padding: 12px;
            border: 1px solid #333;
            font-size: 11px;
            width: auto;
        }

        th {
            background-color: #f0f0f0;
        }

        h4,
        p {
            margin: 0px;
        }

        @page {
            size: landscape;
        }

        @media print {
            .kertasbaru {
                page-break-before: always;
            }
        }
    </style>
</head>

<body onload="window.print();">
    <div class="container-fluid">
        <div class="row">
            <div class="col-2">
                <img height="75%" width="75%" class="img-fluid" src="{{url('/img/kota.png')}}" alt="Image" />
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
                        <th scope="col">PEMILIK</th>
                        <th scope="col">ALAMAT</th>
                        <th scope="col">AKHIR UJI</th>
                        <th scope="col">MERK</th>
                        <th scope="col">TYPE</th>
                        <th scope="col">TAHUN BUAT</th>
                        <th scope="col">JENIS KENDARAAN</th>
                        <th scope="col">SUB JENIS KENDARAAN</th>
                        <th scope="col">SUMBU</th>
                        <th scope="col">NO RANGKA</th>
                        <th scope="col">JENIS ANGKUTAN</th>
                        <th scope="col">KARTU</th>
                    </tr>
                </thead>
                <tbody>
                    @php $i=1
                    @endphp
                    @foreach ($data as $data)
                    <tr>
                        <th scope="row">{{ $i }}</th>
                        <td>{{ $data['nouji'] }}</td>
                        <td>{{ $data['noregistrasikendaraan'] }}</td>
                        <td>{{ $data['nama'] }}</td>
                        <td>{{ $data['alamat'] }}</td>
                        <td>{{ $data['masaberlakuuji'] }}</td>
                        <td>{{ $data['merek'] }}</td>
                        <td>{{ $data['tipe'] }}</td>
                        <td>{{ $data['thpembuatan'] }}</td>
                        <td>{{ $data['jenis'] }}</td>
                        <td>{{ $data['model'] }}</td>
                        <td>{{ $data['konfigurasisumburoda'] }}</td>
                        <td>{{ $data['norangka'] }}</td>
                        <td>{{ $data['peruntukan'] }}</td>
                        <td>{{ $data['kartu'] }}</td>
                    </tr>
                    @php $i++
                    @endphp
                    @endforeach
                </tbody>
            </table>
        </div>
        <br><br>
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
</body>

</html>
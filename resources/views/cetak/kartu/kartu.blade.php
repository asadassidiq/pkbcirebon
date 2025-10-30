<html>
<head><meta http-equiv=Content-Type content="text/html; charset=UTF-8">
<style>
	* {
		box-sizing: border-box;
		border-top-width: 0px;
		border-left-width: 0px;
		border-right-width: 0px;
		border-bottom-width: 0px;
		font-size: 16px;
		font-family: sans-serif;
	}
	.small-text {
		font-size: 12px;
	}
	.medium-text {
		font-size: 14px;
	}
	.normal-text {
		font-size: 16px;
	}

	.header {
		border: 1px solid red;
		text-align: center;
		padding: 0;
		margin: 0;
		margin-bottom: 10px;
		background-color: red;
	}

	.header2 {
		border: 1px solid red;
		text-align: center;
		padding: 0;
		margin: 0;
		margin-top: 10px;
		margin-bottom: 10px;
		background-color: #F0F8FF;
	}

	.row::after {
		content: "";
		clear: both;
		display: table;
	}

	.p{
		margin: 0px;
		padding: 0px;
	}

	[class*="col-"] {
		float: left;
		padding: 0px;
		margin: 0px;
		/*border: 1px solid red;*/
	}

	.col-1 {width: 8.33%;}
	.col-2 {width: 16.66%;}
	.col-3 {width: 25%;}
	.col-4 {width: 33.33%;}
	.col-5 {width: 41.66%;}
	.col-6 {width: 50%;}
	.col-7 {width: 58.33%;}
	.col-8 {width: 66.66%;}
	.col-9 {width: 75%;}
	.col-10 {width: 83.33%;}
	.col-11 {width: 91.66%;}
	.col-12 {width: 100%;}
	/*@page {
		size: A4;
		margin: 0;
	}*/
		@media print {
			html, body {
				width: 210mm;
				height: 297mm;
			}
			.halaman {page-break-before: always;}

		   /*... the rest of the rules ... */
		}
	.halaman {page-break-before: always;}
	</style>

</head>
<body>

	<div class="header">
		<h4 style="margin-top: 0px;margin-bottom: 0px;">KARTU INDUK KENDARAAN</h4>
	</div>

	<div class="row">
		<div class="col-1" style="text-align:center">
			<img src="{{ $base64bg }}" width=30 height=40>
		</div>
		<div class="col-6">
			<h4 style="margin-top: 0px;margin-bottom: 0px;">UPT PENGUJIAN KENDARAAN BERMOTOR</h4>
			<h6 style="margin-top: 0px;margin-bottom: 0px;">DINAS PERHUBUNGAN {{ env('APP_KAB'). ' '. env('APP_WILAYAH') }}</h6>
		</div>
		<div class="col-2" style="width:20%">
			<h4 style="margin-top: 0px;margin-bottom: 0px;">NO. UJI</h4>
			<h4 style="margin-top: 0px;margin-bottom: 0px;">NO. KENDARAAN</h4>
		</div>
		<div class="col-3">
			<h4 style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['nouji'] }}</h4>
			<h4 style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['noregistrasikendaraan'] }}</h4>
		</div>
	</div>

	<div class="header2">
		<h4 style="margin-top: 0px;margin-bottom: 0px;">URAIAN KENDARAAN</h4>
	</div>

	<div class="row">
		<div class="col-2">
			<p style="margin-top: 0px;margin-bottom: 0px;">Pemilik</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Alamat Pemilik</p>
		</div>
		<div class="col-10">
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['nama'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;" class="{{ strlen($data['alamat']) > 63 ? 'medium-text' : 'normal-text' }}">: {{ $data['alamat'] }}</p>
		</div>
	</div>

	<div class="row">
		<div class="col-2">
			<p style="margin-top: 0px;margin-bottom: 0px;">Merk</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Tipe</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Tahun</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">No. Rangka</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">No. Mesin</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Bahan Bakar</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Jenis</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Isi Silinder</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Daya Motor</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Sifat</p>
		</div>
		<div class="col-4">
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['merek'] }}</p>
			<p class="{{ strlen($data['tipe']) > 20 ? 'small-text' : 'normal-text' }}" style="margin-top: 0px; margin-bottom: 0px;">
				: {{ $data['tipe'] }}
			</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['thpembuatan'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['norangka'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['nomesin'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['bahanbakar'] }}</p>
			<p class="{{ strlen($data['jenis']) > 20 ? 'small-text' : 'normal-text' }}" style="margin-top: 0px; margin-bottom: 0px;">
				: {{ $data['jenis'] }}
			</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['isisilinder'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['dayamotorpenggerak'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['peruntukan'] }}</p>
		</div>
		<div class="col-3">
			<p style="margin-top: 0px;margin-bottom: 0px;">Warna</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Rumah"</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Bahan</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Tempat Duduk</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">No. SRUT</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Tgl. SRUT</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">SK. Rancang Bangun</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Tgl. Rancang Bangun</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Karoseri</p>
		</div>
		<div class="col-3">
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['warna'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['model'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['bahan'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ $data['dayaangkutorang'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: <span style="font-size:10px">{{ $data['nosertifikatreg'] }} </span></p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: {{ substr($data['tglsertifikatreg'],8,2).'-'.substr($data['tglsertifikatreg'],5,2).'-'.substr($data['tglsertifikatreg'],0,4) }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: <span style="font-size:10px">{{ $data['rancang'] }} </span></p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: </p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: </p>
		</div>
	</div>

	<div class="header2">
		<h4 style="margin-top: 0px;margin-bottom: 0px;">UKURAN KENDARAAN</h4>
	</div>

	<div class="row">
		<div class="col-2">
			<p style="margin-top: 0px;margin-bottom: 0px;">Panjang</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Lebar</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Tinggi</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">ROH</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">FOH</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Jarak Terendah</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Konf. Sumbu</p>
		</div>
		<div class="col-1">
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
		</div>
		<div class="col-1" style="text-align:right;padding-right:20px">
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['panjangkendaraan'] }} </p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['lebarkendaraan'] }} </p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['tinggikendaraan'] }} </p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['julurbelakang'] }} </p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['julurdepan'] }} </p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['r'] }} </p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['konfigurasisumburoda'] }}</p>
		</div>
		<div class="col-2">
			<p style="margin-top: 0px;margin-bottom: 0px;">mm</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">mm</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">mm</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">mm</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">mm</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">mm</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"></p>
		</div>

		<div class="col-3">
			<p style="margin-top: 0px;margin-bottom: 0px;">Jarak Sumbu</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Sumbu I-II</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Sumbu II-III</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Sumbu III-IV</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">p</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">q</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">r</p>
		</div>
		<div class="col-1">
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 20px;margin-bottom: 0px; text-align:center;position:absolute"><img src="{{ $base64 }}"></p>
		</div>
		<div class="col-1" style="text-align:right;padding-right:20px">
			<p style="margin-top: 0px;margin-bottom: 0px;"> -</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['jaraksumbu1_2'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['jaraksumbu2_3'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['jaraksumbu3_4'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['p'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['q'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['r'] }}</p>
		</div>
		<div class="col-1">
			<p style="margin-top: 0px;margin-bottom: 0px;">-</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">mm</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">mm</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">mm</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">mm</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">mm</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">mm</p>
		</div>
	</div>
	<div class="row">
			<p style="margin-top: 0px;margin-bottom: 0px;">DIMENSI BAK MUATAN/TANGKI</p>
		<div class="col-2">
			<p style="margin-top: 0px;margin-bottom: 0px;">Panjang</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Lebar</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Tinggi</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Volume</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Berat Jenis</p>
		</div>
		<div class="col-1">
			<p style="margin-top: 0px;margin-bottom: 0px;">: </p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: </p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: </p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: </p>
			<p style="margin-top: 0px;margin-bottom: 0px;">: </p>
		</div>
		<div class="col-1" style="text-align:right;padding-right:20px">
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['panjangbakatautangki'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['lebarbakatautangki'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['tinggibakatautangki'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> </p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> </p>
		</div>
		<div class="col-2">
			<p style="margin-top: 0px;margin-bottom: 0px;">mm </p>
			<p style="margin-top: 0px;margin-bottom: 0px;">mm </p>
			<p style="margin-top: 0px;margin-bottom: 0px;">mm </p>
			<p style="margin-top: 0px;margin-bottom: 0px;">liter </p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Kg/m3 </p>
		</div>
	</div>

	<div class="header2">
		<h4 style="margin-top: 0px;margin-bottom: 0px;">DAYA ANGKUT</h4>
	</div>

	<div class="row">
		<div class="col-2">
			<p style="margin-top: 0px;margin-bottom: 0px;">JBB</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">JBKB</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Berat S1</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Berat S2</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Berat S3</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Berat S4</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Berat Total</p>
		</div>
		<div class="col-1">
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>			
		</div>
		<div class="col-1" style="text-align:right;padding-right:20px">
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['jbb'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['jbkb'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['beratsumbu1'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['beratsumbu2'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['beratsumbu3'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['beratsumbu4'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['beratsumbu1']+$data['beratsumbu2']+$data['beratsumbu3']+$data['beratsumbu4'] }}</p>			
		</div>
		<div class="col-2">
			<p style="margin-top: 0px;margin-bottom: 0px;">Kg</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Kg</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Kg</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Kg</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Kg</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Kg</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Kg</p>			
		</div>
		<div class="col-3">
			<p style="margin-top: 0px;margin-bottom: 0px;">DA Orrang (G)</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">DA Barang (L)</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">JBI</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">JBKI</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">MST</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Kelas Jalan</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Ukuran Ban</p>
		</div>
		<div class="col-1">
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">:</p>
		</div>
		<div class="col-1" style="text-align:right;padding-right:20px">
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['dayaangkutorang']*60 }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['dayaangkutbarang'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['jbi'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['jbki'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"> {{ $data['mst'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;margin-left:-90%;text-align:left"> {{ $data['kelasjalanterendah'] }}</p>
			<p style="margin-top: 0px;margin-bottom: 0px;margin-left:-90%;text-align:left"> {{ $data['ukuranban'] }}</p>
		</div>
		<div class="col-1">
			<p style="margin-top: 0px;margin-bottom: 0px;">Kg</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Kg</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Kg</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Kg</p>
			<p style="margin-top: 0px;margin-bottom: 0px;">Kg</p>
			<p style="margin-top: 0px;margin-bottom: 0px;"></p>
			<p style="margin-top: 0px;margin-bottom: 0px;":></p>
		</div>
	</div>

	<div class="header2">
		<h4 style="margin-top: 0px;margin-bottom: 0px;">FOTO TERAKHIR</h4>
	</div>

	<div class="row" style="text-align:center">
		<div class="col-3">
            <img src="{{ $base64img1 }}" width="120" height="100">
            <p style="margin-top: 0px;margin-bottom: 0px;">DEPAN</p>
		</div>
		<div class="col-3">
            <img src="{{ $base64img2 }}" width="120" height="100">
            <p style="margin-top: 0px;margin-bottom: 0px;">KANAN</p>
		</div>
		<div class="col-3">
            <img src="{{ $base64img3 }}" width="120" height="100">
            <p style="margin-top: 0px;margin-bottom: 0px;">BELAKANG</p>
		</div>
		<div class="col-3">
            <img src="{{ $base64img4 }}" width="120" height="100">
            <p style="margin-top: 0px;margin-bottom: 0px;">KIRI</p>
		</div>
	</div>

	<div class="header2 halaman ">
		<h4 style="margin-top: 0px;margin-bottom: 0px;">RIWAYAT UJI DI {{ env('APP_WILAYAH') }}</h4>
	</div>

	<div class="row text-center">
		<div class="col-2" style="border-right: 2px solid;text-align:center">
			<p style="margin-top: 0px;margin-bottom: 0px;font-weight:bold">TGL UJI</p>
			@foreach ($uji as $data)
				<p style="margin-top: 0px;margin-bottom: 0px;font-size:small">{{ substr($data['tgluji'],0,2).'-'.substr($data['tgluji'],2,2).'-'.substr($data['tgluji'],4,4) }}</p>
			@endforeach
		</div>
		<div class="col-2" style="border-right: 2px solid;text-align:center">
			<p style="margin-top: 0px;margin-bottom: 0px;font-weight:bold">HABIS UJI</p>
			@foreach ($uji as $data)
				<p style="margin-top: 0px;margin-bottom: 0px;font-size:small">{{ substr($data['masaberlakuuji'],0,2).'-'.substr($data['masaberlakuuji'],2,2).'-'.substr($data['masaberlakuuji'],4,4) }}</p>
			@endforeach
		</div>
		<div class="col-4" style="border-right: 2px solid;text-align:center">
			<p style="margin-top: 0px;margin-bottom: 0px;font-weight:bold">CATATAN</p>
			@foreach ($uji as $data)
				<p style="margin-top: 0px;margin-bottom: 0px;font-size:small">
					@if($data['kodepenerbitans_id'] == '3')
						Bukti Lulus Uji Rusak
					@elseif($data['kodepenerbitans_id'] == '4')
						Bukti Lulus Uji Hilang
					@endif
				</p>
			@endforeach
		</div>
		<div class="col-4" style="text-align:center">
			<p style="margin-top: 0px;margin-bottom: 0px;font-weight:bold">PENGUJI</p>
			@foreach ($uji as $data)
				@php 
                        $user = App\Models\UserPKB::select('name')->where('id',$data['idpetugasuji'])->first();
                        if($user){
                            $user = $user->name;
                        }else{
                            $user = '-';
                        }
                @endphp
				<p style="margin-top: 0px;margin-bottom: 0px;font-size:small">{{ $user }}</p>
			@endforeach
		</div>
	</div>

	<div class="header2 ">
		<h4 style="margin-top: 0px;margin-bottom: 0px;">RIWAYAT UJI DILUAR WILAYAH</h4>
	</div>

	<div class="row text-center">
		<div class="col-2" style="border-right: 2px solid;text-align:center">
			<p style="margin-top: 0px;margin-bottom: 0px;font-weight:bold">TANGGAL</p>
			@foreach ($nu as $data)
				<p style="margin-top: 0px;margin-bottom: 0px;font-size:small">{{ date_format(date_create($data['tglpendaftaran']),"d-m-Y") }}</p>
			@endforeach
		</div>
		<div class="col-10" style="text-align:center">
			<p style="margin-top: 0px;margin-bottom: 0px;font-weight:bold">CATATAN</p>
			@foreach ($nu as $data)
			@php 
                    $wilayah = App\Models\Kodewilayah::select('area_name')->where('area_code',$data['kode'])->first();
                    if($wilayah){
                        $wilayah = $wilayah['area_name'];
                    }else{
                        $wilayah = '';
                    }
            @endphp
				@if($data['kodepenerbitans_id'] == '9')
					<p style="margin-top: 0px;margin-bottom: 0px;font-size:small"> ke {{ $data['tujuan'] }}</p>
				@elseif($data['kodepenerbitans_id'] == '5')
				<p style="margin-top: 0px;margin-bottom: 0px;font-size:small"> Numpang uji keluar ke {{ $wilayah }}</p>
				@endif
			@endforeach
		</div>
	</div>

	<div class="header2 ">
		<h4 style="margin-top: 0px;margin-bottom: 0px;">PEMINDAHAN WILAYAH OPERASI KENDARAAN</h4>
	</div>

	<div class="row text-center">
		<div class="col-2" style="border-right: 2px solid;text-align:center">
			<p style="margin-top: 0px;margin-bottom: 0px;font-weight:bold">TANGGAL</p>
			@foreach ($mu as $data)
				<p style="margin-top: 0px;margin-bottom: 0px;font-size:small">{{ date_format(date_create($data['tglpendaftaran']),"d-m-Y") }}</p>
			@endforeach
		</div>
		<div class="col-10" style="text-align:center">
			<p style="margin-top: 0px;margin-bottom: 0px;font-weight:bold">ASAL/TUJUAN</p>
			@foreach ($mu as $data)
			@php 
                    $wilayah = App\Models\Kodewilayah::select('area_name')->where('area_code',$data['kode'])->first();
                    if($wilayah){
                        $wilayah = $wilayah['area_name'];
                    }else{
                        $wilayah = '';
                    }
            @endphp
				@if($data['kodepenerbitans_id'] == '10')
					<p style="margin-top: 0px;margin-bottom: 0px;font-size:small"> ke {{ $data['tujuan'] }}</p>
				@elseif($data['kodepenerbitans_id'] == '6')
					<p style="margin-top: 0px;margin-bottom: 0px;font-size:small"> dari {{ $wilayah }}</p>
				@endif
			@endforeach
		</div>
	</div>

	<div class="header2 ">
		<h4 style="margin-top: 0px;margin-bottom: 0px;">RIWAYAT PERBAIKAN</h4>
	</div>

	<div class="row text-center">
		<div class="col-2" style="border-right: 2px solid;text-align:center">
			<p style="margin-top: 0px;margin-bottom: 0px;font-weight:bold">TANGGAL</p>
			@php
				$tglsm = '';
				$posisi = 0;
			@endphp
			@foreach ($catatan as $data)
				@if($tglsm == $data['tglpendaftaran'])
					@php
						$posisi = 1;
					@endphp
				@else
					<p style="margin-top: 0px;margin-bottom: 0px;font-size:small">{{ date_format(date_create($data['tglpendaftaran']),"d-m-Y") }}</p>
					@php
						$tglsm = $data['tglpendaftaran'];
						$posisi = 0;
					@endphp
				@endif
			@endforeach
		</div>
		<div class="col-10" style="text-align:center">
			<p style="margin-top: 0px;margin-bottom: 0px;font-weight:bold">-</p>
			@foreach ($catatan as $data)
				@if($posisi == 1)
					@if($posisi == 0)
					<p style="margin-top: 0px;margin-bottom: 0px;font-size:small">
					@endif
						,{{ $data['nama'].' : '.$data['alasan'] }}
					@if($posisi == 0)
					</p>
					@endif
				@else
				<p style="margin-top: 0px;margin-bottom: 0px;font-size:small">
				{{ $data['nama'].' : '.$data['alasan'] }}
				</p>
				@endif
			@endforeach
		</div>
	</div>

</body>
</html>
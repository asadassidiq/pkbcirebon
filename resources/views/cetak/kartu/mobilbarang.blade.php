<!DOCTYPE html>
<head>
    <title>Halaman Depan</title>
    <meta charset="utf-8">
    <link href="{{ asset('css/css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('css/css/style.css') }}" rel="stylesheet">
   <link rel="icon" href="{{ asset('img/icon.ico') }}" type="image/ico">
    <style type="text/css">
         @page { size: landscape; }

         @media print {
            @page {size: landscape}
            .kertasbaru {page-break-before: always;}
          }
    </style>
</head>
<body onload="window.print()">
    <div id="form-noborder">
        <div>
            <table class="table table-borderless">
                <tr>
                    <td class="aligncenter" colspan="8"><h6>KARTU INDUK UJI BERKALA MOBIL BARANG</h6></td>
                    <td class="allborder" colspan="4"><b>No. Uji Berkala : {{ $data->nouji }}</b></td>
                </tr>
                <tr class ="aligncenter">
                    <td colspan="8" class="topborder bottomborder leftborder rightborder">URAIAN TENTANG KENDARAAN</td>
                    <td colspan="4" class="rightborder bottomborder">PENGGUNAAN BARANG YANG KHUSUS</td>           
                </tr>
                <tr>
                    <td class="leftborder">1. Merek Pabrik</td>
                    <td>: {{ $data->merek }}</td>
                    <td></td>
                    <td colspan="3">13. Rumah-rumah (karoseri)</td>
                    <td>:</td>
                    <td></td>
                    <td class="leftborder space" rowspan="2">a. Jenis barang khusus yang diijinkan untuk diangkut</td>
                    <td rowspan="2">:</td>
                    <td colspan="2" class="rightborder" rowspan="2"></td>
                </tr>
                <tr>
                    <td class="leftborder">2. Tipe</td>
                    <td>: {{ $data->tipe }}</td>
                    <td></td>
                    <td colspan="3"> a. Jenis</td>
                    <td>:</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="leftborder">3. Jenis</td>
                    <td>: {{ $data->jenis }}</td>
                    <td></td>
                    <td colspan="3"> b. Bahan</td>
                    <td>:</td>
                    <td></td>
                    <td class="leftborder space" rowspan="3">b. Jenis penggunaan khusus yang diijinkan</td>
                    <td rowspan="3">:</td>
                    <td colspan="2" class="rightborder" rowspan="3"></td>
                </tr>
                <tr>
                    <td class="leftborder">4. Tahun Pembuatan/Perakitan</td>
                    <td>: {{ $data->thpembuatan }}</td>
                    <td></td>
                    <td colspan="3"> c. Banyak tempat duduk</td>
                    <td>: {{ $data->dayaangkutorang }}</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="leftborder">5. Tempat/Tanggal Uji Berkala Pendaftaran</td>
                    <td>:</td>
                    <td></td>
                    <td colspan="3"> d. TP</td>
                    <td>:</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="leftborder">6. Tempat/Tanggal Uji Berkala Pertama</td>
                    <td>:</td>
                    <td></td>
                    <td colspan="3"> e. STP</td>
                    <td>:</td>
                    <td></td>
                    <td class="leftborder rightborder topborder" colspan="4">Jarak bak thd bagian terluar ban : </td>
                </tr>
                <tr>
                    <td class="leftborder">7. Nomor landasan/rangka</td>
                    <td>: {{ $data->norangka }}</td>
                    <td></td>
                    <td colspan="3"> f. Keterangan lain</td>
                    <td>:</td>
                    <td></td>
                    <td class="leftborder rightborder topborder bottomborder" colspan="4">Dimensi Bak Muatan/Tanki : </td>
               </tr>
                <tr>
                    <td class="leftborder">8. Nomor Mesin</td>
                    <td>:  {{ $data->nomesin }}</td>
                    <td class="rightborder" colspan="6"></td>
                    <td>- Panjang</td>
                    <td>:  {{ $data->panjangbakatautangki }}</td>
                    <td class="rightborder" colspan="2"></td>
                </tr>
                <tr>
                    <td class="leftborder">9. Jarak Sumbu Roda</td>
                    <td>: 1-2 :  {{ $data->jaraksumbu1_2 }}</td>
                    <td>mm</td>
                    <td></td>
                    <td>2-3 :  {{ $data->jaraksumbu2_3 }}</td>
                    <td></td>
                    <td>mm, 3-4 :  {{ $data->jaraksumbu3_4 }}</td>
                    <td class="alignright"> mm</td>
                    <td class="leftborder">- Lebar</td>
                    <td>:  {{ $data->lebarbakatautangki }}</td>
                    <td class="rightborder" colspan="2"></td>
                </tr>
                <tr>
                    <td class="leftborder">10. Panjang Total</td>
                    <td>:  {{ $data->panjangkendaraan }}</td>
                    <td colspan="2"> mm</td>
                    <td>p :  {{ $data->p }}</td>
                    <td></td>
                    <td>r :  {{ $data->r }}</td>
                    <td></td>
                    <td class="leftborder">- Tinggi</td>
                    <td>:  {{ $data->tinggibakatautangki }}</td>
                    <td class="rightborder" colspan="2"></td> 
                </tr>
                <tr>
                    <td class="leftborder">11. Lebar Total</td>
                    <td>:  {{ $data->tinggikendaraan }}</td>
                    <td colspan="2"> mm</td>
                    <td>q :  {{ $data->q }}</td>
                    <td></td>
                    <td>b :  {{ $data->b }}</td>
                    <td></td>
                    <td class="allborder" colspan="4">Khusus Tanki</td>
                </tr>
                <tr>
                    <td class="leftborder">12. Tinggi Total</td>
                    <td>: {{ $data->tinggikendaraan }}</td>
                    <td colspan="3"> mm</td>
                    <td class="allborder" colspan="3">SERTIFIKAT REGISTRASI UJI TIPE</td>  
                    <td class="leftborder" colspan="3">- Jenis Muatan</td>
                    <td class="rightborder">:  {{ $data->jenismuatan }} </td>
                </tr>
                <tr>
                    <td class="allborder aligncenter space" colspan="5" rowspan="2">BERAT, DAYA ANGKUT, KELAS JALAN YANG PALING RENDAH, UKURAN BAN YANG DIIZINKAN</td>
                    <td>Nama APM</td>
                    <td>:</td>
                    <td class="rightborder"></td>
                    <td class="leftborder" colspan="3">- Berat Jenis Muatan</td>
                    <td class="rightborder">:  {{ $data->beratjenismuatan }}</td>
                </tr>
                <tr>
                    <td>No. SRUT</td>
                    <td>: {{ $data->nosertifikatreg }}</td>
                    <td></td>
                    <td class="leftborder" colspan="3">- Volume Muatan</td>
                    <td class="rightborder">:  {{ $data->volume }}</td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">a. Jumlah berat yang diperbolehkan</td>
                    <td>: {{ $data->jbb }}</td>
                    <td></td>
                    <td class="rightborder alignright">(kg)</td>
                    <td>Tanggal</td>
                    <td >:  {{ date_format(date_create($data->tglsertifikatreg),'d-m-Y') }}</td>
                    <td></td>
                    <td class="allborder aligncenter" colspan="4">Foto</td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">b. Jumlah berat kombinasi yang diperbolehkan</td>
                    <td>:  {{ $data->jbkb }}</td>
                    <td></td>
                    <td class="rightborder alignright">(kg)</td>
                    <td>No. SUT atau SK Rancang Bangun</td>
                    <td>:</td>
                    <td></td>
                    <td class="leftborder" colspan="2" rowspan="6">
                        <img style="width:170px;height:95px;position: absolute;" src="{{url('/normal_images/'.$data->nouji.'-tampakdepan.jpg')}}">
                    </td>
                    <td class="leftborder rightborder" colspan="2" rowspan="6">
                        <img style="width:170px;height:95px;position: absolute;" src="{{url('/normal_images/'.$data->nouji.'-tampakbelakang.jpg')}}"></td>
                    </td>
                </tr>
                 <tr>
                    <td class="leftborder" colspan="2">c. Berat kendaraan sumbu ke-1</td>
                    <td>: {{ $data->beratsumbu1 }}</td>
                    <td></td>
                    <td class="rightborder alignright">(kg)</td>
                    <td>Tanggal</td>
                    <td>:</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">d. Berat kendaraan sumbu ke-2</td>
                    <td>: {{ $data->beratsumbu2 }}</td>
                    <td></td>
                    <td class="rightborder alignright">(kg)</td>
                    <td>Diterbitkan Oleh</td>
                    <td colspan="2">: </td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">e. Berat kendaraan sumbu ke-3</td>
                    <td>: {{ $data->beratsumbu3 }}</td>
                    <td></td>
                    <td class="rightborder alignright">(kg)</td>
                    <td>APM atau karoseri</td>
                    <td>:</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">f. Berat kendaraan sumbu ke-4</td>
                    <td>: {{ $data->beratsumbu4 }}</td>
                    <td></td>
                    <td class="rightborder alignright">(kg)</td>
                    <td>R.O.H.</td>
                    <td>:  {{ $data->julurbelakang }}</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">g. Berat kendaraan sumbu ke-5</td>
                    <td>:</td>
                    <td></td>
                    <td class="rightborder alignright">(kg)</td>
                    <td>F.O.H.</td>
                    <td>:  {{ $data->julurdepan }}</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">h. Jumlah (Berat kosong)</td>
                    <td>: {{ $data->beratkosong }}</td>
                    <td></td>
                    <td class="rightborder alignright">(kg)</td>
                    <td>Sudut Pergi</td>
                    <td>:</td>
                    <td></td>
                    <td class="bottomborder rightborder leftborder aligncenter" colspan="2">Tampak Depan</td>
                    <td class="bottomborder rightborder aligncenter" colspan="2">Tampak Belakang</td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">i. Daya angkut orang : {{ $data->dayaangkutorang }} Orang</td>
                    <td>: {{ $data->dayaangkutorang*60 }}</td>
                    <td></td>
                    <td class="rightborder alignright">(kg)</td>
                    <td>Jarak terendah</td>
                    <td>: {{ $data->groundclearance }}</td>
                    <td class="rightborder"></td>
                    <td colspan="2" rowspan="5" class="col">
                        <img style="width:170px;height:95px;position: absolute;" src="{{url('/normal_images/'.$data->nouji.'-tampakkanan.jpg')}}"></td>
                    </td>
                    <td colspan="2" rowspan="5" class="leftborder rightborder col">
                        <img style="width:170px;height:95px;position: absolute;" src="{{url('/normal_images/'.$data->nouji.'-tampakkiri.jpg')}}"></td>
                    </td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">j. Daya angkut barang</td>
                    <td>:  {{ $data->dayaangkutbarang }}</td>
                    <td></td>
                    <td class="rightborder alignright">(kg)</td>
                    <td>Isi silinder</td>
                    <td>: {{ $data->isisilinder }}</td>
                    <td class="rightborder"></td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">k. Jumlah berat yang diizinkan</td>
                    <td>: {{ $data->jbi }}</td>
                    <td></td>
                    <td class="rightborder alignright">(kg)</td>
                    <td>Daya motor penggerak</td>
                    <td>: {{ $data->dayamotorpenggerak }}</td>
                    <td class="rightborder"></td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">l. Jumlah berat kombinasi yang diizinkan</td>
                    <td>: {{ $data->jbki }}</td>
                    <td></td>
                    <td class="rightborder alignright">(kg)</td>
                    <td>Warna</td>
                    <td>:</td>
                    <td class="rightborder"></td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">m. Muatan sumbu yang paling berat</td>
                    <td>: {{ $data->mst }}</td>
                    <td></td>
                    <td class="rightborder alignright">(kg)</td>
                    <td colspan="3" class="rightborder">Kekuatan Sumbu</td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">n. Kelas jalan yang terendah</td>
                    <td>: {{ $data->kelasjalanterendah }}</td>
                    <td colspan="2" class="rightborder"></td>
                    <td>- Sumbu 1</td>
                    <td>:</td>
                    <td class="rightborder"></td>
                    <td class="leftborder aligncenter" colspan="2"></td>
                    <td class="leftborder rightborder aligncenter" colspan="2"></td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">o. Pemakaian ban yang diizinkan pada sumbu 1</td>
                    <td>: {{ $data->ukuranban }}</td>
                    <td colspan="2" class="rightborder"></td>
                    <td>- Sumbu 2</td>
                    <td>:</td>
                    <td></td>
                    <td class="leftborder aligncenter" colspan="2">Tampak Samping Kanan</td>
                    <td class="leftborder rightborder aligncenter" colspan="2">Tampak Samping Kiri</td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">p. Pemakaian ban yang diizinkan pada sumbu 2</td>
                    <td>: {{ $data->ukuranban }}</td>
                    <td colspan="2" class="rightborder"></td>
                    <td>- Sumbu 3</td>
                    <td>:</td>
                    <td></td>
                    <td class="allborder aligncenter" colspan="2">Dibuat Oleh :</td>
                    <td class="allborder aligncenter" colspan="2">Mengetahui :</td>
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">q. Pemakaian ban yang diizinkan pada sumbu 3</td>
                    <td>:</td>
                    <td colspan="2" class="rightborder"></td>
                    <td>- Sumbu 4</td>
                    <td>:</td>
                    <td></td>
                    <td class="leftborder bottomborder cols space aligncenter" colspan="2" rowspan="4">TTD, Nama dan Tingkat Jenjang Kompetensi Penguji</td>
                    <td class="bottomborder leftborder cols rightborder aligncenter space" colspan="2" rowspan="4">TTD, Nama dan Jabatan Penanggung Jawab Unit Pelaksana Uji Berkala</td>
                </tr> 
                <tr>
                    <td class="leftborder" colspan="2">r. Pemakaian ban yang diizinkan pada sumbu 4</td>
                    <td>:</td>
                    <td colspan="2"></td>
                    <td class="leftborder">- Sumbu 5</td>
                    <td>:</td>
                    <td></td>     
                </tr>
                <tr>
                    <td class="leftborder" colspan="2">s. Pemakaian ban yang diizinkan pada sumbu 5</td>
                    <td>:</td>
                    <td colspan="2"></td>
                    <td class="leftborder bottomborder" rowspan="2">Tanggal Pembuatan Kartu Induk</td>
                    <td rowspan="2" class="bottomborder">: {{ $tglcetak }}</td>
                    <td rowspan="2" class="bottomborder"></td>
                </tr>
                <tr>
                    <td class="leftborder bottomborder" colspan="2">t. Konfigurasi Sumbu Roda</td>
                    <td class="bottomborder">:  {{ $data->konfigurasisumburoda }}</td>
                    <td colspan="2" class="bottomborder"></td>   
                </tr>
            </table>
        </div>
    </div>

    <div id="form-noborder-100" class="kertasbaru">
        <table class="table table-bordered" id="table">
            <tr class="aligncenter">
                @if($data->bahanbakar == 'BENSIN')
                <td>1 <br> <b>Bensin</b></td>
                @else
                <td>1 <br> Bensin</td>
                @endif
                @if($data->bahanbakar == 'Solar')
                <td>2 <br> <b>Solar</b></td>
                @else
                <td>2 <br> Solar</td>
                @endif
                @if($data->bahanbakar == 'CNG/LPG')
                <td>3 <br> <b>CNG/LPG</b></td>
                @else
                <td>3 <br> CNG/LPG</td>
                @endif
                @if($data->bahanbakar == 'Listrik')
                <td>4 <br> <b>Listrik</b></td>
                @else
                <td>4 <br> Listrik</td>
                @endif
                <td>5 <br> Lain Lain</td>
                <td class="double-border"></td>
                <td>6 <br> 
                    @if($data->dayaangkutorang > 7 && $data->dayaangkutorang < 16)
                        <b>8-15</b>
                    @else
                        8-15
                    @endif
                    <br>
                    @if($data->dayaangkutbarang <= 500)
                        <b>0-500 Kg</b>
                    @else
                        0-500 Kg
                    @endif
                </td>
                <td>7 <br>
                    @if($data->dayaangkutorang > 15 && $data->dayaangkutorang < 21)
                        <b>16-20</b>
                    @else
                        16-20
                    @endif
                    <br>
                    @if($data->dayaangkutbarang >= 500 && $data->dayaangkutbarang <= 1000)
                        <b>500-1000 Kg</b>
                    @else
                        500-1000 Kg
                    @endif
                </td>
                <td>8 <br>
                    @if($data->dayaangkutorang > 20 && $data->dayaangkutorang < 26)
                        <b>21-25</b>
                    @else
                        21-25
                    @endif
                    <br>
                    @if($data->dayaangkutbarang >= 1000 && $data->dayaangkutbarang <= 1500)
                        <b>1000-1500 Kg</b>
                    @else
                        1000-1500 Kg
                    @endif
                </td>
                <td>9 <br>
                    @if($data->dayaangkutorang > 25 && $data->dayaangkutorang < 31)
                        <b>26-30</b>
                    @else
                        26-30
                    @endif
                    <br>
                    @if($data->dayaangkutbarang >= 1500 && $data->dayaangkutbarang <= 2000)
                        <b>1500-2000 Kg</b>
                    @else
                        1500-2000 Kg
                    @endif
                </td>
                <td>10 <br>
                    @if($data->dayaangkutorang > 30 && $data->dayaangkutorang < 36)
                        <b>31-35</b>
                    @else
                        31-35
                    @endif
                    <br>
                    @if($data->dayaangkutbarang >= 2000 && $data->dayaangkutbarang <= 2500)
                        <b>2000-2500 Kg</b>
                    @else
                        2000-2500 Kg
                    @endif
                </td>
                <td>11 <br>
                    @if($data->dayaangkutorang > 35 && $data->dayaangkutorang < 41)
                        <b>36-40</b>
                    @else
                        36-40
                    @endif
                    <br>
                    @if($data->dayaangkutbarang >= 2600 && $data->dayaangkutbarang <= 3000)
                        <b>2600-3000 Kg</b>
                    @else
                        2600-3000 Kg
                    @endif
                </td>
                <td>12 <br>
                    @if($data->dayaangkutorang > 40)
                        <b> >40</b>
                    @else
                        >40
                    @endif
                    <br>
                    @if($data->dayaangkutbarang >= 3000 && $data->dayaangkutbarang <= 3500)
                        <b>3000-3500 Kg</b>
                    @else
                        3000-3500 Kg
                    @endif
                </td>
                <td>13 <br>
                    <br>
                    @if($data->dayaangkutbarang >= 3500 && $data->dayaangkutbarang <= 4000)
                        <b>3500-4000 Kg</b>
                    @else
                        3500-4000 Kg
                    @endif
                </td> 
                <td> 14 <br>
                    <br>
                    @if($data->dayaangkutbarang > 4000)
                        <b>>4000 Kg</b>
                    @else
                        >4000 Kg
                    @endif
                </td>
                <td class="double-border"></td>
                 @if($data->peruntukan == 'Umum')
                <td>15 <br> <b>Umum</b> </td>
                @else
                <td>15 <br> Umum</td>
                @endif
                @if($data->peruntukan == 'Tidak Umum')
                <td>16 <br> <b>Tidak Umum</b> </td>
                @else
                <td>16 <br> Tidak Umum</td>
                @endif
                <td class="double-border"></td>
                @php
                    $umur = date('Y')-(int)$data->thpembuatan;
                @endphp
                @if($umur < 2)
                <td>17 <br> <b>0-1 Th</b></td>
                @else
                <td>17 <br> 0-1 Th</td>
                @endif
                @if($umur == 2)
                <td>18 <br> <b>2 Th</b></td>
                @else
                <td>18 <br> 2 Th</td>
                @endif
                @if($umur == 3)
                <td>19 <br> <b>3 Th</b></td>
                @else
                <td>19 <br> 3 Th</td>
                @endif
                @if($umur == 4)
                <td>20 <br> <b>4 Th</b></td>
                @else
                <td>20 <br> 4 Th</td>
                @endif
                @if($umur == 5)
                <td>21 <br> <b>5 Th</b></td>
                @else
                <td>21 <br> 5 Th</td>
                @endif
                @if($umur == 6)
                <td>22 <br> <b>6 Th</b></td>
                @else
                <td>22 <br> 6 Th</td>
                @endif
                @if($umur == 7)
                <td>23 <br> <b>7 Th</b></td>
                @else
                <td>23 <br> 7 Th</td>
                @endif
                @if($umur == 8)
                <td>24 <br> <b>8 Th</b></td>
                @else
                <td>24 <br> 8 Th</td>
                @endif
                @if($umur == 9)
                <td>25 <br> <b>9 Th</b></td>
                @else
                <td>25 <br> 9 Th</td>
                @endif
                @if($umur > 9)
                <td>26 <br> <b> >9 Th</b></td>
                @else
                <td>26 <br> >9 Th</td>
                @endif
            </tr>
            <tr class="aligncenter">
                <td colspan="5">BAHAN BAKAR MESIN</td>
                <td></td>
                <td colspan="9">DAYA ANGKUT ORANG ATAU BARANG</td>
                <td></td>
                <td colspan="3">STATUS KENDARAAN</td>
                <td colspan="10">UMUR KENDARAAN</td>
            </tr>
            <tr class="allborder">
                <td colspan="6" style="border-right: 2px white;">Jenis : <b>{{ $data->jenis }}</b></td>
                <td colspan="8" class="noborder">Kartu Uji Kendaraan diberikan di : <b>Kabupaten Mimika</b></td>
                <td colspan="5" class="noborder">Pada Tanggal : <b>{{ $tglcetak }}</b></td>
                <td colspan="10" rowspan="2" class="allborder">No. Uji Berkala : <b>{{ $data->nouji }}</b></td>
            </tr>
            <tr class="aligncenter">
                <td colspan="19">PEMERIKSAAN PEMERIKSAAN</td>
            </tr>
            <tr class="aligncenter">
                <td colspan="3">Tanggal Uji Kendaraan</td>
                <td colspan="5">Tanggal Tak Berlaku Tanda Uji</td>
                <td colspan="8">CATATAN</td>
                <td colspan="5">Tanda Tangan & Nama Penguji Kendaraan</td>
                <td colspan="3">Nomor Kendaraan</td>
                <td colspan="11">Nama dan Alamat Pemilik kendaraan</td>
            </tr>
            @php 
                $count  = count($pengujian);
            @endphp
            @if($count > 0)
            <tr class="column-height">
                <td colspan="3">{{ date_format(date_create($pengujian[0]['tglpendaftaran']),"d F Y") }}</td>
                <td colspan="5">{{ date_format(date_create($pengujian[0]['masaberlakuuji']),"d F Y") }}</td>
                @if($pengujian[0]['kodepenerbitans_id'] == '9')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('numpang','numpang.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[0]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Numpang Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[0]['kodepenerbitans_id'] == '10')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[0]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Mutasi Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[0]['kodepenerbitans_id'] == '6')
                    <td colspan="8">
                        @php 
                            $eff = ($pengujian[0]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;

                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[0]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        
                        Mutasi Uji Masuk dari daerah : {{ $wilayah }}
                        <br>
                        Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                        Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                        @if($data->bahanbakar == 'Solar')
                            Asap : {{ $pengujian[0]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                        @else
                            CO : {{ $pengujian[0]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[0]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                        @endif    
                            Intensitas lampu kiri : {{ $pengujian[0]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[0]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[0]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[0]['nama'] }}
                        <br>
                        {{ $pengujian[0]['nrp'] }}
                    </td>
                @else
                    @php
                        $eff = ($pengujian[0]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;
                    @endphp
                    <td colspan="8">Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                    @if($data->bahanbakar == 'Solar')
                        Asap : {{ $pengujian[0]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                    @else
                        CO : {{ $pengujian[0]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[0]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                    @endif    
                        Intensitas lampu kiri : {{ $pengujian[0]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[0]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[0]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[0]['nama'] }}
                        <br>
                        {{ $pengujian[0]['nrp'] }}
                    </td>
                @endif
                <td colspan="3">{{ $data->noregistrasikendaraan }}</td>
                <td colspan="11">{{ $data->nama }} <br> {{ $data->alamat }}</td>
            </tr>
            @else
                <tr class="column-height">
                <td colspan="3"></td>
                <td colspan="5"></td>
                <td colspan="8"></td>
                <td colspan="5"></td>
                <td colspan="3">{{ $data->noregistrasikendaraan }}</td>
                <td colspan="11">{{ $data->nama }} <br> {{ $data->alamat }}</td>
            </tr>
            @endif
            @if($count > 1)
            <tr class="column-height">
                <td colspan="3">{{ date_format(date_create($pengujian[1]['tglpendaftaran']),"d F Y") }}</td>
                <td colspan="5">{{ date_format(date_create($pengujian[1]['masaberlakuuji']),"d F Y") }}</td>
                @if($pengujian[1]['kodepenerbitans_id'] == '9')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('numpang','numpang.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[1]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Numpang Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[1]['kodepenerbitans_id'] == '10')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[1]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Mutasi Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[1]['kodepenerbitans_id'] == '6')
                    <td colspan="8">
                        @php 
                            $eff = ($pengujian[1]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;

                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[1]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        
                        Mutasi Uji Masuk dari daerah : {{ $wilayah }}
                        <br>
                        Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                        @if($data->bahanbakar == 'Solar')
                            Asap : {{ $pengujian[1]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                        @else
                            CO : {{ $pengujian[1]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[1]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                        @endif    
                            Intensitas lampu kiri : {{ $pengujian[1]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[1]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[1]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[1]['nama'] }}
                        <br>
                        {{ $pengujian[1]['nrp'] }}
                    </td>
                @else
                    @php
                        $eff = ($pengujian[1]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;
                    @endphp
                    <td colspan="8">Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                    @if($data->bahanbakar == 'Solar')
                        Asap : {{ $pengujian[1]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                    @else
                        CO : {{ $pengujian[1]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[1]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                    @endif    
                        Intensitas lampu kiri : {{ $pengujian[1]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[1]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd</td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[1]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[1]['nama'] }}
                        <br>
                        {{ $pengujian[1]['nrp'] }}
                    </td>
                @endif
                <td colspan="3"></td>
                <td colspan="11"></td>
            </tr>
            @else
                <tr class="column-height">
                <td colspan="3"></td>
                <td colspan="5"></td>
                <td colspan="8"></td>
                <td colspan="5"></td>
                <td colspan="3"></td>
                <td colspan="11"></td>
            </tr>
            @endif
            
            @if($count > 2)
            <tr class="column-height">
                <td colspan="3">{{ date_format(date_create($pengujian[2]['tglpendaftaran']),"d F Y") }}</td>
                <td colspan="5">{{ date_format(date_create($pengujian[2]['masaberlakuuji']),"d F Y") }}</td>
                @if($pengujian[2]['kodepenerbitans_id'] == '9')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('numpang','numpang.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[2]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Numpang Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[2]['kodepenerbitans_id'] == '10')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[2]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Mutasi Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[2]['kodepenerbitans_id'] == '6')
                    <td colspan="8">
                        @php 
                            $eff = ($pengujian[2]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;

                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[2]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        
                        Mutasi Uji Masuk dari daerah : {{ $wilayah }}
                        <br>
                        Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                        @if($data->bahanbakar == 'Solar')
                            Asap : {{ $pengujian[2]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                        @else
                            CO : {{ $pengujian[2]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[2]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                        @endif    
                            Intensitas lampu kiri : {{ $pengujian[2]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[2]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[2]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[2]['nama'] }}
                        <br>
                        {{ $pengujian[2]['nrp'] }}
                    </td>
                @elseif($pengujian[2]['kodepenerbitans_id'] == '6')
                    <td colspan="8">
                        @php 
                            $eff = ($pengujian[2]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;

                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[2]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        
                        Mutasi Uji Masuk dari daerah : {{ $wilayah }}
                        <br>
                        Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                        @if($data->bahanbakar == 'Solar')
                            Asap : {{ $pengujian[2]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                        @else
                            CO : {{ $pengujian[2]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[2]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                        @endif    
                            Intensitas lampu kiri : {{ $pengujian[2]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[2]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[2]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[2]['nama'] }}
                        <br>
                        {{ $pengujian[2]['nrp'] }}
                    </td>
                @else
                    @php
                        $eff = ($pengujian[2]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;
                    @endphp
                    <td colspan="8">Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                    @if($data->bahanbakar == 'Solar')
                        Asap : {{ $pengujian[2]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                    @else
                        CO : {{ $pengujian[2]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[2]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                    @endif    
                        Intensitas lampu kiri : {{ $pengujian[2]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[2]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd</td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[2]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[2]['nama'] }}
                        <br>
                        {{ $pengujian[2]['nrp'] }}
                    </td>
                @endif
                <td colspan="3"></td>
                <td colspan="11"></td>
            </tr>
            @else
            <tr class="column-height">
                <td colspan="3"></td>
                <td colspan="5"></td>
                <td colspan="8"></td>
                <td colspan="5"></td>
                <td colspan="3"></td>
                <td colspan="11"></td>
            </tr>
            @endif
            <tr class="column-height">
            @if($count > 3)
                <td colspan="3">{{ date_format(date_create($pengujian[3]['tglpendaftaran']),"d F Y") }}</td>
                <td colspan="5">{{ date_format(date_create($pengujian[3]['masaberlakuuji']),"d F Y") }}</td>
                @if($pengujian[3]['kodepenerbitans_id'] == '9')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('numpang','numpang.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[3]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Numpang Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[3]['kodepenerbitans_id'] == '10')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[3]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Mutasi Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[3]['kodepenerbitans_id'] == '6')
                    <td colspan="8">
                        @php 
                            $eff = ($pengujian[3]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;

                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[3]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        
                        Mutasi Uji Masuk dari daerah : {{ $wilayah }}
                        <br>
                        Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                        @if($data->bahanbakar == 'Solar')
                            Asap : {{ $pengujian[3]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                        @else
                            CO : {{ $pengujian[3]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[3]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                        @endif    
                            Intensitas lampu kiri : {{ $pengujian[3]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[3]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[3]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[3]['nama'] }}
                        <br>
                        {{ $pengujian[3]['nrp'] }}
                    </td>
                @else
                    @php
                        $eff = ($pengujian[3]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;
                    @endphp
                    <td colspan="8">Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                    @if($data->bahanbakar == 'Solar')
                        Asap : {{ $pengujian[3]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                    @else
                        CO : {{ $pengujian[3]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[3]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                    @endif    
                        Intensitas lampu kiri : {{ $pengujian[3]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[3]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[3]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[3]['nama'] }}
                        <br>
                        {{ $pengujian[3]['nrp'] }}
                    </td>
                @endif
            @else
                <td colspan="3"></td>
                <td colspan="5"></td>
                <td colspan="8"></td>
                <td colspan="5"></td>
            @endif
                <td colspan="15" class="aligncenter">Bahan Bakar Kendaraan <br><br> <span style="font-size:18px">{{ $data->bahanbakar }}</span></td>
            </tr>
            <tr class="column-height">
            @if($count > 4)
                <td colspan="3">{{ date_format(date_create($pengujian[4]['tglpendaftaran']),"d F Y") }}</td>
                <td colspan="5">{{ date_format(date_create($pengujian[4]['masaberlakuuji']),"d F Y") }}</td>
                @if($pengujian[4]['kodepenerbitans_id'] == '9')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('numpang','numpang.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[4]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Numpang Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[4]['kodepenerbitans_id'] == '10')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[4]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Mutasi Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[4]['kodepenerbitans_id'] == '6')
                    <td colspan="8">
                        @php 
                            $eff = ($pengujian[4]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;

                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[4]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        
                        Mutasi Uji Masuk dari daerah : {{ $wilayah }}
                        <br>
                        Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                        @if($data->bahanbakar == 'Solar')
                            Asap : {{ $pengujian[4]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                        @else
                            CO : {{ $pengujian[4]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[4]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                        @endif    
                            Intensitas lampu kiri : {{ $pengujian[4]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[4]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[4]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[4]['nama'] }}
                        <br>
                        {{ $pengujian[4]['nrp'] }}
                    </td>
                @else
                    @php
                        $eff = ($pengujian[4]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;
                    @endphp
                    <td colspan="8">Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                    @if($data->bahanbakar == 'Solar')
                        Asap : {{ $pengujian[4]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                    @else
                        CO : {{ $pengujian[4]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[4]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                    @endif    
                        Intensitas lampu kiri : {{ $pengujian[4]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[4]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[4]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[4]['nama'] }}
                        <br>
                        {{ $pengujian[4]['nrp'] }}
                    </td>
                @endif
            @else
                <td colspan="3"></td>
                <td colspan="5"></td>
                <td colspan="8"></td>
            @endif
                <td colspan="15"></td>
            </tr>

            @if($count > 5)
            <tr class="column-height">
                <td colspan="3">{{ date_format(date_create($pengujian[5]['tglpendaftaran']),"d F Y") }}</td>
                <td colspan="5">{{ date_format(date_create($pengujian[5]['masaberlakuuji']),"d F Y") }}</td>
                @if($pengujian[5]['kodepenerbitans_id'] == '9')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('numpang','numpang.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[5]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Numpang Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[5]['kodepenerbitans_id'] == '10')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[5]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Mutasi Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[5]['kodepenerbitans_id'] == '6')
                    <td colspan="8">
                        @php 
                            $eff = ($pengujian[5]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;

                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[5]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        
                        Mutasi Uji Masuk dari daerah : {{ $wilayah }}
                        <br>
                        Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                        @if($data->bahanbakar == 'Solar')
                            Asap : {{ $pengujian[5]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                        @else
                            CO : {{ $pengujian[5]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[5]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                        @endif    
                            Intensitas lampu kiri : {{ $pengujian[5]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[5]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[5]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[5]['nama'] }}
                        <br>
                        {{ $pengujian[5]['nrp'] }}
                    </td>
                @else
                    @php
                        $eff = ($pengujian[5]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;
                    @endphp
                    <td colspan="8">Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                    @if($data->bahanbakar == 'Solar')
                        Asap : {{ $pengujian[5]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                    @else
                        CO : {{ $pengujian[5]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[5]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                    @endif    
                        Intensitas lampu kiri : {{ $pengujian[5]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[5]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd</td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[5]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[5]['nama'] }}
                        <br>
                        {{ $pengujian[5]['nrp'] }}
                    </td>
                @endif
                <td colspan="20"></td>
            </tr>
            @else
                <tr class="column-height">
                <td colspan="3"></td>
                <td colspan="5"></td>
                <td colspan="8"></td>
                <td colspan="20"></td>
            </tr>
            @endif
        </table>
    </div>

    @if($count > 6)
    <div id="form-noborder-100" class="kertasbaru">
        <table class="table table-bordered" id="table">
            <tr class="aligncenter">
                @if($data->bahanbakar == 'BENSIN')
                <td>1 <br> <b>Bensin</b></td>
                @else
                <td>1 <br> Bensin</td>
                @endif
                @if($data->bahanbakar == 'Solar')
                <td>2 <br> <b>Solar</b></td>
                @else
                <td>2 <br> Solar</td>
                @endif
                @if($data->bahanbakar == 'CNG/LPG')
                <td>3 <br> <b>CNG/LPG</b></td>
                @else
                <td>3 <br> CNG/LPG</td>
                @endif
                @if($data->bahanbakar == 'Listrik')
                <td>4 <br> <b>Listrik</b></td>
                @else
                <td>4 <br> Listrik</td>
                @endif
                <td>5 <br> Lain Lain</td>
                <td class="double-border"></td>
                <td>6 <br> 
                    @if($data->dayaangkutorang > 7 && $data->dayaangkutorang < 16)
                        <b>8-15</b>
                    @else
                        8-15
                    @endif
                    <br>
                    @if($data->dayaangkutbarang <= 500)
                        <b>0-500 Kg</b>
                    @else
                        0-500 Kg
                    @endif
                </td>
                <td>7 <br>
                    @if($data->dayaangkutorang > 15 && $data->dayaangkutorang < 21)
                        <b>16-20</b>
                    @else
                        16-20
                    @endif
                    <br>
                    @if($data->dayaangkutbarang >= 500 && $data->dayaangkutbarang <= 1000)
                        <b>500-1000 Kg</b>
                    @else
                        500-1000 Kg
                    @endif
                </td>
                <td>8 <br>
                    @if($data->dayaangkutorang > 20 && $data->dayaangkutorang < 26)
                        <b>21-25</b>
                    @else
                        21-25
                    @endif
                    <br>
                    @if($data->dayaangkutbarang >= 1000 && $data->dayaangkutbarang <= 1500)
                        <b>1000-1500 Kg</b>
                    @else
                        1000-1500 Kg
                    @endif
                </td>
                <td>9 <br>
                    @if($data->dayaangkutorang > 25 && $data->dayaangkutorang < 31)
                        <b>26-30</b>
                    @else
                        26-30
                    @endif
                    <br>
                    @if($data->dayaangkutbarang >= 1500 && $data->dayaangkutbarang <= 2000)
                        <b>1500-2000 Kg</b>
                    @else
                        1500-2000 Kg
                    @endif
                </td>
                <td>10 <br>
                    @if($data->dayaangkutorang > 30 && $data->dayaangkutorang < 36)
                        <b>31-35</b>
                    @else
                        31-35
                    @endif
                    <br>
                    @if($data->dayaangkutbarang >= 2000 && $data->dayaangkutbarang <= 2500)
                        <b>2000-2500 Kg</b>
                    @else
                        2000-2500 Kg
                    @endif
                </td>
                <td>11 <br>
                    @if($data->dayaangkutorang > 35 && $data->dayaangkutorang < 41)
                        <b>36-40</b>
                    @else
                        36-40
                    @endif
                    <br>
                    @if($data->dayaangkutbarang >= 2600 && $data->dayaangkutbarang <= 3000)
                        <b>2600-3000 Kg</b>
                    @else
                        2600-3000 Kg
                    @endif
                </td>
                <td>12 <br>
                    @if($data->dayaangkutorang > 40)
                        <b> >40</b>
                    @else
                        >40
                    @endif
                    <br>
                    @if($data->dayaangkutbarang >= 3000 && $data->dayaangkutbarang <= 3500)
                        <b>3000-3500 Kg</b>
                    @else
                        3000-3500 Kg
                    @endif
                </td>
                <td>13 <br>
                    <br>
                    @if($data->dayaangkutbarang >= 3500 && $data->dayaangkutbarang <= 4000)
                        <b>3500-4000 Kg</b>
                    @else
                        3500-4000 Kg
                    @endif
                </td> 
                <td> 14 <br>
                    <br>
                    @if($data->dayaangkutbarang > 4000)
                        <b>>4000 Kg</b>
                    @else
                        >4000 Kg
                    @endif
                </td>
                <td class="double-border"></td>
                 @if($data->peruntukan == 'Umum')
                <td>15 <br> <b>Umum</b> </td>
                @else
                <td>15 <br> Umum</td>
                @endif
                @if($data->peruntukan == 'Tidak Umum')
                <td>16 <br> <b>Tidak Umum</b> </td>
                @else
                <td>16 <br> Tidak Umum</td>
                @endif
                <td class="double-border"></td>
                @php
                    $umur = date('Y')-(int)$data->thpembuatan;
                @endphp
                @if($umur < 2)
                <td>17 <br> <b>0-1 Th</b></td>
                @else
                <td>17 <br> 0-1 Th</td>
                @endif
                @if($umur == 2)
                <td>18 <br> <b>2 Th</b></td>
                @else
                <td>18 <br> 2 Th</td>
                @endif
                @if($umur == 3)
                <td>19 <br> <b>3 Th</b></td>
                @else
                <td>19 <br> 3 Th</td>
                @endif
                @if($umur == 4)
                <td>20 <br> <b>4 Th</b></td>
                @else
                <td>20 <br> 4 Th</td>
                @endif
                @if($umur == 5)
                <td>21 <br> <b>5 Th</b></td>
                @else
                <td>21 <br> 5 Th</td>
                @endif
                @if($umur == 6)
                <td>22 <br> <b>6 Th</b></td>
                @else
                <td>22 <br> 6 Th</td>
                @endif
                @if($umur == 7)
                <td>23 <br> <b>7 Th</b></td>
                @else
                <td>23 <br> 7 Th</td>
                @endif
                @if($umur == 8)
                <td>24 <br> <b>8 Th</b></td>
                @else
                <td>24 <br> 8 Th</td>
                @endif
                @if($umur == 9)
                <td>25 <br> <b>9 Th</b></td>
                @else
                <td>25 <br> 9 Th</td>
                @endif
                @if($umur > 9)
                <td>26 <br> <b> >9 Th</b></td>
                @else
                <td>26 <br> >9 Th</td>
                @endif
            </tr>
            <tr class="aligncenter">
                <td colspan="5">BAHAN BAKAR MESIN</td>
                <td></td>
                <td colspan="9">DAYA ANGKUT ORANG ATAU BARANG</td>
                <td></td>
                <td colspan="3">STATUS KENDARAAN</td>
                <td colspan="10">UMUR KENDARAAN</td>
            </tr>
            <tr class="allborder">
                <td colspan="6" style="border-right: 2px white;">Jenis : <b>{{ $data->jenis }}</b></td>
                <td colspan="8" class="noborder">Kartu Uji Kendaraan diberikan di : <b>Kabupaten Mimika</b></td>
                <td colspan="5" class="noborder">Pada Tanggal : <b>{{ $tglcetak }}</b></td>
                <td colspan="10" rowspan="2" class="allborder">No. Uji Berkala : <b>{{ $data->nouji }}</b></td>
            </tr>
            <tr class="aligncenter">
                <td colspan="19">PEMERIKSAAN PEMERIKSAAN</td>
            </tr>
            <tr class="aligncenter">
                <td colspan="3">Tanggal Uji Kendaraan</td>
                <td colspan="5">Tanggal Tak Berlaku Tanda Uji</td>
                <td colspan="8">CATATAN</td>
                <td colspan="5">Tanda Tangan & Nama Penguji Kendaraan</td>
                <td colspan="3">Nomor Kendaraan</td>
                <td colspan="11">Nama dan Alamat Pemilik kendaraan</td>
            </tr>
            @if($count > 6)
            <tr class="column-height">
                <td colspan="3">{{ date_format(date_create($pengujian[6]['tglpendaftaran']),"d F Y") }}</td>
                <td colspan="5">{{ date_format(date_create($pengujian[6]['masaberlakuuji']),"d F Y") }}</td>
                @if($pengujian[6]['kodepenerbitans_id'] == '9')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('numpang','numpang.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[6]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Numpang Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[6]['kodepenerbitans_id'] == '10')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[6]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Mutasi Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[6]['kodepenerbitans_id'] == '6')
                    <td colspan="8">
                        @php 
                            $eff = ($pengujian[6]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;

                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[6]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        
                        Mutasi Uji Masuk dari daerah : {{ $wilayah }}
                        <br>
                        Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                        @if($data->bahanbakar == 'Solar')
                            Asap : {{ $pengujian[6]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                        @else
                            CO : {{ $pengujian[6]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[6]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                        @endif    
                            Intensitas lampu kiri : {{ $pengujian[6]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[6]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[6]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[6]['nama'] }}
                        <br>
                        {{ $pengujian[6]['nrp'] }}
                    </td>
                @else
                    @php
                        $eff = ($pengujian[6]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;
                    @endphp
                    <td colspan="8">Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                    @if($data->bahanbakar == 'Solar')
                        Asap : {{ $pengujian[6]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                    @else
                        CO : {{ $pengujian[6]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[6]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                    @endif    
                        Intensitas lampu kiri : {{ $pengujian[6]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[6]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd</td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[6]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[6]['nama'] }}
                        <br>
                        {{ $pengujian[6]['nrp'] }}
                    </td>
                @endif
                <td colspan="3">{{ $data->noregistrasikendaraan }}</td>
                <td colspan="11">{{ $data->nama }} <br> {{ $data->alamat }}</td>
            </tr>
            @else
                <tr class="column-height">
                <td colspan="3"></td>
                <td colspan="5"></td>
                <td colspan="8"></td>
                <td colspan="5"></td>
                <td colspan="3">{{ $data->noregistrasikendaraan }}</td>
                <td colspan="11">{{ $data->nama }} <br> {{ $data->alamat }}</td>
            </tr>
            @endif
            
            @if($count > 7)
            <tr class="column-height">
                <td colspan="3">{{ date_format(date_create($pengujian[7]['tglpendaftaran']),"d F Y") }}</td>
                <td colspan="5">{{ date_format(date_create($pengujian[7]['masaberlakuuji']),"d F Y") }}</td>
                @if($pengujian[7]['kodepenerbitans_id'] == '9')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('numpang','numpang.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[7]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Numpang Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[7]['kodepenerbitans_id'] == '10')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[7]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Mutasi Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[7]['kodepenerbitans_id'] == '6')
                    <td colspan="8">
                        @php 
                            $eff = ($pengujian[7]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;

                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[7]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        
                        Mutasi Uji Masuk dari daerah : {{ $wilayah }}
                        <br>
                        Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                        @if($data->bahanbakar == 'Solar')
                            Asap : {{ $pengujian[7]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                        @else
                            CO : {{ $pengujian[7]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[7]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                        @endif    
                            Intensitas lampu kiri : {{ $pengujian[7]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[7]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[7]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[7]['nama'] }}
                        <br>
                        {{ $pengujian[7]['nrp'] }}
                    </td>
                @else
                    @php
                        $eff = ($pengujian[7]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;
                    @endphp
                    <td colspan="8">Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                    @if($data->bahanbakar == 'Solar')
                        Asap : {{ $pengujian[7]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                    @else
                        CO : {{ $pengujian[7]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[7]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                    @endif    
                        Intensitas lampu kiri : {{ $pengujian[7]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[7]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd</td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[7]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[7]['nama'] }}
                        <br>
                        {{ $pengujian[7]['nrp'] }}
                    </td>
                @endif
                <td colspan="3"></td>
                <td colspan="11"></td>
            </tr>
            @else
            <tr class="column-height">
                <td colspan="3"></td>
                <td colspan="5"></td>
                <td colspan="8"></td>
                <td colspan="5"></td>
                <td colspan="3"></td>
                <td colspan="11"></td>
            </tr>
            @endif
            <tr class="column-height">
            @if($count > 8)
                <td colspan="3">{{ date_format(date_create($pengujian[8]['tglpendaftaran']),"d F Y") }}</td>
                <td colspan="5">{{ date_format(date_create($pengujian[8]['masaberlakuuji']),"d F Y") }}</td>
                @if($pengujian[8]['kodepenerbitans_id'] == '9')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('numpang','numpang.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[8]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Numpang Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[8]['kodepenerbitans_id'] == '10')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[8]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Mutasi Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[8]['kodepenerbitans_id'] == '6')
                    <td colspan="8">
                        @php 
                            $eff = ($pengujian[8]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;

                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[8]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        
                        Mutasi Uji Masuk dari daerah : {{ $wilayah }}
                        <br>
                        Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                        @if($data->bahanbakar == 'Solar')
                            Asap : {{ $pengujian[8]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                        @else
                            CO : {{ $pengujian[8]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[8]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                        @endif    
                            Intensitas lampu kiri : {{ $pengujian[8]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[8]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[8]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[8]['nama'] }}
                        <br>
                        {{ $pengujian[8]['nrp'] }}
                    </td>
                @else
                    @php
                        $eff = ($pengujian[8]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;
                    @endphp
                    <td colspan="8">Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                    @if($data->bahanbakar == 'Solar')
                        Asap : {{ $pengujian[8]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                    @else
                        CO : {{ $pengujian[8]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[8]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                    @endif    
                        Intensitas lampu kiri : {{ $pengujian[8]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[8]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[8]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[8]['nama'] }}
                        <br>
                        {{ $pengujian[8]['nrp'] }}
                    </td>
                @endif
            @else
                <td colspan="3"></td>
                <td colspan="5"></td>
                <td colspan="8"></td>
                <td colspan="5"></td>
            @endif
                <td colspan="15" class="aligncenter">Bahan Bakar Kendaraan <br><br> <span style="font-size:18px">{{ $data->bahanbakar }}</span></td>
            </tr>
            <tr class="column-height">
            @if($count > 9)
                <td colspan="3">{{ date_format(date_create($pengujian[9]['tglpendaftaran']),"d F Y") }}</td>
                <td colspan="5">{{ date_format(date_create($pengujian[9]['masaberlakuuji']),"d F Y") }}</td>
                @if($pengujian[9]['kodepenerbitans_id'] == '9')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('numpang','numpang.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[9]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Numpang Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[9]['kodepenerbitans_id'] == '10')
                    <td colspan="8">
                        @php 
                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[9]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        Mutasi Uji Keluar ke daerah : {{ $wilayah }}
                    </td>
                    <td colspan="5" class="text-center"></td>
                @elseif($pengujian[9]['kodepenerbitans_id'] == '6')
                    <td colspan="8">
                        @php 
                            $eff = ($pengujian[9]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;

                                $wilayah = App\Models\Kodewilayah::select('area_name')->Join('mutasi','mutasi.daerah','kodewilayah.kodewilayah')->where('pendaftaran_id',$pengujian[9]['id'])->first();
                                if($wilayah){
                                    $wilayah = $wilayah['area_name'];
                                }else{
                                    $wilayah = '';
                                }
                        @endphp
                        
                        Mutasi Uji Masuk dari daerah : {{ $wilayah }}
                        <br>
                        Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                        @if($data->bahanbakar == 'Solar')
                            Asap : {{ $pengujian[9]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                        @else
                            CO : {{ $pengujian[9]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[9]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                        @endif    
                            Intensitas lampu kiri : {{ $pengujian[9]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[9]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[9]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[9]['nama'] }}
                        <br>
                        {{ $pengujian[9]['nrp'] }}
                    </td>
                @else
                    @php
                        $eff = ($pengujian[9]['alatuji_remutamatotalgayapengereman']/$data['beratkosong'])*100;
                    @endphp
                    <td colspan="8">Lulus uji, efisiensi rem utama : {{ round($eff,2) }} %, 
                    @if($data->bahanbakar == 'Solar')
                        Asap : {{ $pengujian[9]['alatuji_emisiasapbahanbakarsolar'] }}%, 
                    @else
                        CO : {{ $pengujian[9]['alatuji_emisicobahanbakarbensin'] }}%, HC : {{ $pengujian[9]['alatuji_emisihcbahanbakarbensin'] }} Ppm,
                    @endif    
                        Intensitas lampu kiri : {{ $pengujian[9]['alatuji_lampuutamakekuatanpancarlampukiri'] }} cd, kanan : {{ $pengujian[9]['alatuji_lampuutamakekuatanpancarlampukanan'] }} cd
                    </td>
                    <td colspan="5" class="text-center">
                        @php echo '<img width="110" height="55" src="data:image/jpeg;base64,'.base64_encode($pengujian[9]['tandatangan']).'"/>';
                        @endphp
                        <br>
                        {{ $pengujian[9]['nama'] }}
                        <br>
                        {{ $pengujian[9]['nrp'] }}
                    </td>
                @endif
            @else
                <td colspan="3"></td>
                <td colspan="5"></td>
                <td colspan="8"></td>
            @endif
                <td colspan="15"></td>
            </tr>
        </table>
    </div>
    @endif
</body>
</html>
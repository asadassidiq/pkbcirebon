<table>
    <thead>
        <tr>
            <th colspan="13"><b>Laporan Bulanan Jenis Kendaraan Pengujian Kendaraan Bermotor</b></th>
        </tr>
        <tr>
            <th colspan="13"><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></th>
        </tr>
        <tr>
            <th colspan="13"><b>Tahun {{ $tglprint }}</b></th>
        </tr>

        <tr></tr>

        <tr>
            <th scope="col" rowspan="3">No</th>
            <th scope="col" rowspan="3" class="text-center" style="width:15%">Tanggal</th>
            <th scope="col" rowspan="3" class="text-center">KBWU yang di Uji</th>
            <th scope="col" class="text-center" colspan="22">Jenis Kendaraan</th>
        </tr>
        <tr>
            <th scope="col"></th>
            <th scope="col" class="text-center" colspan="4">Bus</th>
            <th scope="col" class="text-center" colspan="15">Mobil Barang</th>
            <th scope="col" class="text-center">K.Tempelan</th>
            <th scope="col" class="text-center">K.Gandeng</th>
        </tr>
        <tr>
            <th scope="col">Mobil Penumpang</th>
            <th scope="col">Kecil</th>
            <th scope="col">Sedang</th>
            <th scope="col">Besar</th>
            <th scope="col">Maxi</th>
            <th scope="col">Pick Up</th>
            <th scope="col">Pick Up Box</th>
            <th scope="col">Truck</th>
            <th scope="col">Light Truck</th>
            <th scope="col">Dump Truck</th>
            <th scope="col">Truck Box</th>
            <th scope="col">Tractor Head</th>
            <th scope="col">Delivery Van</th>
            <th scope="col">Double Cabin</th>
            <th scope="col">Truck Bak Crane</th>
            <th scope="col">Car Carrier</th>
            <th scope="col">Truck Tangki</th>
            <th scope="col">Blind Van</th>
            <th scope="col">Tronton</th>
            <th scope="col">Flat Deck</th>
            <th scope="col">Kereta Tempelan</th>
            <th scope="col">Kereta Gandengan</th>
        </tr>
    </thead>
    <tbody>
        @php $i=1;$kbwu=0;$mobilpenumpang=0;$buskecil=0;$bussedang=0;$busbesar=0;$busmaxi=0;
        $pickup=0;$pickupbox=0;$truck=0;$lighttruck=0;$dumptruck=0;$truckbox=0;
        $traktorhead=0;$deliveryvan=0;$doublecabin=0;$truckbakcrane=0;$carcarrier=0;
        $trucktangki=0;$blindvan=0;$tronton=0;$flatdeck=0;$keretatempelan=0;$keretagandeng=0;
        @endphp
        @foreach ($data as $dt)
        <tr>
            <td scope="row">{{ $i }}</td>
            <td>{{ $dt['tgl'] }}</td>
            <td>{{ $dt['kbwu'] }}</td>
            <td>{{ $dt['mobilpenumpang'] }}</td>
            <td>{{ $dt['buskecil'] }}</td>
            <td>{{ $dt['bussedang'] }}</td>
            <td>{{ $dt['busbesar'] }}</td>
            <td>{{ $dt['busmaxi'] }}</td>
            <td>{{ $dt['pickup'] }}</td>
            <td>{{ $dt['pickupbox'] }}</td>
            <td>{{ $dt['truck'] }}</td>
            <td>{{ $dt['lighttruck'] }}</td>
            <td>{{ $dt['dumptruck'] }}</td>
            <td>{{ $dt['truckbox'] }}</td>
            <td>{{ $dt['traktorhead'] }}</td>
            <td>{{ $dt['deliveryvan'] }}</td>
            <td>{{ $dt['doublecabin'] }}</td>
            <td>{{ $dt['truckbakcrane'] }}</td>
            <td>{{ $dt['carcarrier'] }}</td>
            <td>{{ $dt['trucktangki'] }}</td>
            <td>{{ $dt['blindvan'] }}</td>
            <td>{{ $dt['tronton'] }}</td>
            <td>{{ $dt['flatdeck'] }}</td>
            <td>{{ $dt['keretatempelan'] }}</td>
            <td>{{ $dt['keretagandeng'] }}</td>
        </tr>
        @php
        $i++;$kbwu=$kbwu+$dt['kbwu'];$mobilpenumpang=$mobilpenumpang+$dt['mobilpenumpang'];$buskecil=$buskecil+$dt['buskecil'];$bussedang=$bussedang+$dt['bussedang'];$busbesar=$busbesar+$dt['busbesar'];$busmaxi=$busmaxi+$dt['busmaxi'];
        $pickup=$pickup+$dt['pickup'];$pickupbox=$pickupbox+$dt['pickupbox'];$truck=$truck+$dt['truck'];$lighttruck=$lighttruck+$dt['lighttruck'];$dumptruck=$dumptruck+$dt['dumptruck'];$truckbox=$truckbox+$dt['truckbox'];
        $traktorhead=$traktorhead+$dt['traktorhead'];$deliveryvan=$deliveryvan+$dt['deliveryvan'];$doublecabin=$doublecabin+$dt['doublecabin'];$truckbakcrane=$truckbakcrane+$dt['truckbakcrane'];$carcarrier=$carcarrier+$dt['carcarrier'];
        $trucktangki=$trucktangki+$dt['trucktangki'];$blindvan=$blindvan+$dt['blindvan'];$tronton=$tronton+$dt['tronton'];$flatdeck=$flatdeck+$dt['flatdeck'];$keretatempelan=$keretatempelan+$dt['keretatempelan'];$keretagandeng=$dt['keretagandeng'];
        @endphp

        @endforeach
        <tr>
            <td colspan="2">Total</td>
            <td>{{ $kbwu }}</td>
            <td>{{ $mobilpenumpang }}</td>
            <td>{{ $buskecil }}</td>
            <td>{{ $bussedang }}</td>
            <td>{{ $busbesar }}</td>
            <td>{{ $busmaxi }}</td>
            <td>{{ $pickup }}</td>
            <td>{{ $pickupbox }}</td>
            <td>{{ $truck }}</td>
            <td>{{ $lighttruck }}</td>
            <td>{{ $dumptruck }}</td>
            <td>{{ $truckbox }}</td>
            <td>{{ $traktorhead }}</td>
            <td>{{ $deliveryvan }}</td>
            <td>{{ $doublecabin }}</td>
            <td>{{ $truckbakcrane }}</td>
            <td>{{ $carcarrier }}</td>
            <td>{{ $trucktangki }}</td>
            <td>{{ $blindvan }}</td>
            <td>{{ $tronton }}</td>
            <td>{{ $flatdeck }}</td>
            <td>{{ $keretatempelan }}</td>
            <td>{{ $keretagandeng }}</td>
        </tr>

        <tr></tr>

        <tr>
            <td colspan="13"><b>Laporan Bulanan Jenis Kendaraan Untuk Pelayanan Uji Pertama Pengujian Kendaraan Bermotor</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Tahun {{ $tglprint }}</b></td>
        </tr>
        <tr></tr>
        <tr>
            <th scope="col" rowspan="3">No</th>
            <th scope="col" rowspan="3" class="text-center" style="width:15%">Tanggal</th>
            <th scope="col" rowspan="3" class="text-center">KBWU yang di Uji</th>
            <th scope="col" class="text-center" colspan="22">Jenis Kendaraan</th>
        </tr>
        <tr>
            <th scope="col"></th>
            <th scope="col" class="text-center" colspan="4">Bus</th>
            <th scope="col" class="text-center" colspan="15">Mobil Barang</th>
            <th scope="col" class="text-center">K.Tempelan</th>
            <th scope="col" class="text-center">K.Gandeng</th>
        </tr>
        <tr>
            <th scope="col">Mobil Penumpang</th>
            <th scope="col">Kecil</th>
            <th scope="col">Sedang</th>
            <th scope="col">Besar</th>
            <th scope="col">Maxi</th>
            <th scope="col">Pick Up</th>
            <th scope="col">Pick Up Box</th>
            <th scope="col">Truck</th>
            <th scope="col">Light Truck</th>
            <th scope="col">Dump Truck</th>
            <th scope="col">Truck Box</th>
            <th scope="col">Tractor Head</th>
            <th scope="col">Delivery Van</th>
            <th scope="col">Double Cabin</th>
            <th scope="col">Truck Bak Crane</th>
            <th scope="col">Car Carrier</th>
            <th scope="col">Truck Tangki</th>
            <th scope="col">Blind Van</th>
            <th scope="col">Tronton</th>
            <th scope="col">Flat Deck</th>
            <th scope="col">Kereta Tempelan</th>
            <th scope="col">Kereta Gandengan</th>
        </tr>
        @php $i=1;$kbwu=0;$mobilpenumpang=0;$buskecil=0;$bussedang=0;$busbesar=0;$busmaxi=0;
        $pickup=0;$pickupbox=0;$truck=0;$lighttruck=0;$dumptruck=0;$truckbox=0;
        $traktorhead=0;$deliveryvan=0;$doublecabin=0;$truckbakcrane=0;$carcarrier=0;
        $trucktangki=0;$blindvan=0;$tronton=0;$flatdeck=0;$keretatempelan=0;$keretagandeng=0;
        @endphp
        @foreach ($dataujipertama as $dt)
        <tr>
            <td scope="row">{{ $i }}</td>
            <td>{{ $dt['tgl'] }}</td>
            <td>{{ $dt['kbwu'] }}</td>
            <td>{{ $dt['mobilpenumpang'] }}</td>
            <td>{{ $dt['buskecil'] }}</td>
            <td>{{ $dt['bussedang'] }}</td>
            <td>{{ $dt['busbesar'] }}</td>
            <td>{{ $dt['busmaxi'] }}</td>
            <td>{{ $dt['pickup'] }}</td>
            <td>{{ $dt['pickupbox'] }}</td>
            <td>{{ $dt['truck'] }}</td>
            <td>{{ $dt['lighttruck'] }}</td>
            <td>{{ $dt['dumptruck'] }}</td>
            <td>{{ $dt['truckbox'] }}</td>
            <td>{{ $dt['traktorhead'] }}</td>
            <td>{{ $dt['deliveryvan'] }}</td>
            <td>{{ $dt['doublecabin'] }}</td>
            <td>{{ $dt['truckbakcrane'] }}</td>
            <td>{{ $dt['carcarrier'] }}</td>
            <td>{{ $dt['trucktangki'] }}</td>
            <td>{{ $dt['blindvan'] }}</td>
            <td>{{ $dt['tronton'] }}</td>
            <td>{{ $dt['flatdeck'] }}</td>
            <td>{{ $dt['keretatempelan'] }}</td>
            <td>{{ $dt['keretagandeng'] }}</td>
        </tr>
        @php
        $i++;$kbwu=$kbwu+$dt['kbwu'];$mobilpenumpang=$mobilpenumpang+$dt['mobilpenumpang'];$buskecil=$buskecil+$dt['buskecil'];$bussedang=$bussedang+$dt['bussedang'];$busbesar=$busbesar+$dt['busbesar'];$busmaxi=$busmaxi+$dt['busmaxi'];
        $pickup=$pickup+$dt['pickup'];$pickupbox=$pickupbox+$dt['pickupbox'];$truck=$truck+$dt['truck'];$lighttruck=$lighttruck+$dt['lighttruck'];$dumptruck=$dumptruck+$dt['dumptruck'];$truckbox=$truckbox+$dt['truckbox'];
        $traktorhead=$traktorhead+$dt['traktorhead'];$deliveryvan=$deliveryvan+$dt['deliveryvan'];$doublecabin=$doublecabin+$dt['doublecabin'];$truckbakcrane=$truckbakcrane+$dt['truckbakcrane'];$carcarrier=$carcarrier+$dt['carcarrier'];
        $trucktangki=$trucktangki+$dt['trucktangki'];$blindvan=$blindvan+$dt['blindvan'];$tronton=$tronton+$dt['tronton'];$flatdeck=$flatdeck+$dt['flatdeck'];$keretatempelan=$keretatempelan+$dt['keretatempelan'];$keretagandeng=$dt['keretagandeng'];
        @endphp

        @endforeach
        <tr>
            <td colspan="2">Total</td>
            <td>{{ $kbwu }}</td>
            <td>{{ $mobilpenumpang }}</td>
            <td>{{ $buskecil }}</td>
            <td>{{ $bussedang }}</td>
            <td>{{ $busbesar }}</td>
            <td>{{ $busmaxi }}</td>
            <td>{{ $pickup }}</td>
            <td>{{ $pickupbox }}</td>
            <td>{{ $truck }}</td>
            <td>{{ $lighttruck }}</td>
            <td>{{ $dumptruck }}</td>
            <td>{{ $truckbox }}</td>
            <td>{{ $traktorhead }}</td>
            <td>{{ $deliveryvan }}</td>
            <td>{{ $doublecabin }}</td>
            <td>{{ $truckbakcrane }}</td>
            <td>{{ $carcarrier }}</td>
            <td>{{ $trucktangki }}</td>
            <td>{{ $blindvan }}</td>
            <td>{{ $tronton }}</td>
            <td>{{ $flatdeck }}</td>
            <td>{{ $keretatempelan }}</td>
            <td>{{ $keretagandeng }}</td>
        </tr>

        <tr></tr>

        <tr>
            <td><b>Laporan Bulanan Jenis Kendaraan Untuk Pelayanan Uji Berkala Pengujian Kendaraan Bermotor</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Tahun {{ $tglprint }}</b></td>
        </tr>
        <tr></tr>
        <tr>
            <th scope="col" rowspan="3">No</th>
            <th scope="col" rowspan="3" class="text-center" style="width:15%">Tanggal</th>
            <th scope="col" rowspan="3" class="text-center">KBWU yang di Uji</th>
            <th scope="col" class="text-center" colspan="22">Jenis Kendaraan</th>
        </tr>
        <tr>
            <th scope="col"></th>
            <th scope="col" class="text-center" colspan="4">Bus</th>
            <th scope="col" class="text-center" colspan="15">Mobil Barang</th>
            <th scope="col" class="text-center">K.Tempelan</th>
            <th scope="col" class="text-center">K.Gandeng</th>
        </tr>
        <tr>
            <th scope="col">Mobil Penumpang</th>
            <th scope="col">Kecil</th>
            <th scope="col">Sedang</th>
            <th scope="col">Besar</th>
            <th scope="col">Maxi</th>
            <th scope="col">Pick Up</th>
            <th scope="col">Pick Up Box</th>
            <th scope="col">Truck</th>
            <th scope="col">Light Truck</th>
            <th scope="col">Dump Truck</th>
            <th scope="col">Truck Box</th>
            <th scope="col">Tractor Head</th>
            <th scope="col">Delivery Van</th>
            <th scope="col">Double Cabin</th>
            <th scope="col">Truck Bak Crane</th>
            <th scope="col">Car Carrier</th>
            <th scope="col">Truck Tangki</th>
            <th scope="col">Blind Van</th>
            <th scope="col">Tronton</th>
            <th scope="col">Flat Deck</th>
            <th scope="col">Kereta Tempelan</th>
            <th scope="col">Kereta Gandengan</th>
        </tr>
        <tr>
            <th scope="col" rowspan="3">No</th>
            <th scope="col" rowspan="3" class="text-center" style="width:15%">Tanggal</th>
            <th scope="col" rowspan="3" class="text-center">KBWU yang di Uji</th>
            <th scope="col" class="text-center" colspan="22">Jenis Kendaraan</th>
        </tr>
        <tr>
            <th scope="col"></th>
            <th scope="col" class="text-center" colspan="4">Bus</th>
            <th scope="col" class="text-center" colspan="15">Mobil Barang</th>
            <th scope="col" class="text-center">K.Tempelan</th>
            <th scope="col" class="text-center">K.Gandeng</th>
        </tr>
        <tr>
            <th scope="col">Mobil Penumpang</th>
            <th scope="col">Kecil</th>
            <th scope="col">Sedang</th>
            <th scope="col">Besar</th>
            <th scope="col">Maxi</th>
            <th scope="col">Pick Up</th>
            <th scope="col">Pick Up Box</th>
            <th scope="col">Truck</th>
            <th scope="col">Light Truck</th>
            <th scope="col">Dump Truck</th>
            <th scope="col">Truck Box</th>
            <th scope="col">Tractor Head</th>
            <th scope="col">Delivery Van</th>
            <th scope="col">Double Cabin</th>
            <th scope="col">Truck Bak Crane</th>
            <th scope="col">Car Carrier</th>
            <th scope="col">Truck Tangki</th>
            <th scope="col">Blind Van</th>
            <th scope="col">Tronton</th>
            <th scope="col">Flat Deck</th>
            <th scope="col">Kereta Tempelan</th>
            <th scope="col">Kereta Gandengan</th>
        </tr>
        @php $i=1;$kbwu=0;$mobilpenumpang=0;$buskecil=0;$bussedang=0;$busbesar=0;$busmaxi=0;
        $pickup=0;$pickupbox=0;$truck=0;$lighttruck=0;$dumptruck=0;$truckbox=0;
        $traktorhead=0;$deliveryvan=0;$doublecabin=0;$truckbakcrane=0;$carcarrier=0;
        $trucktangki=0;$blindvan=0;$tronton=0;$flatdeck=0;$keretatempelan=0;$keretagandeng=0;
        @endphp
        @foreach ($dataujiberkala as $dt)
        <tr>
            <td scope="row">{{ $i }}</td>
            <td>{{ $dt['tgl'] }}</td>
            <td>{{ $dt['kbwu'] }}</td>
            <td>{{ $dt['mobilpenumpang'] }}</td>
            <td>{{ $dt['buskecil'] }}</td>
            <td>{{ $dt['bussedang'] }}</td>
            <td>{{ $dt['busbesar'] }}</td>
            <td>{{ $dt['busmaxi'] }}</td>
            <td>{{ $dt['pickup'] }}</td>
            <td>{{ $dt['pickupbox'] }}</td>
            <td>{{ $dt['truck'] }}</td>
            <td>{{ $dt['lighttruck'] }}</td>
            <td>{{ $dt['dumptruck'] }}</td>
            <td>{{ $dt['truckbox'] }}</td>
            <td>{{ $dt['traktorhead'] }}</td>
            <td>{{ $dt['deliveryvan'] }}</td>
            <td>{{ $dt['doublecabin'] }}</td>
            <td>{{ $dt['truckbakcrane'] }}</td>
            <td>{{ $dt['carcarrier'] }}</td>
            <td>{{ $dt['trucktangki'] }}</td>
            <td>{{ $dt['blindvan'] }}</td>
            <td>{{ $dt['tronton'] }}</td>
            <td>{{ $dt['flatdeck'] }}</td>
            <td>{{ $dt['keretatempelan'] }}</td>
            <td>{{ $dt['keretagandeng'] }}</td>
        </tr>
        @php
        $i++;$kbwu=$kbwu+$dt['kbwu'];$mobilpenumpang=$mobilpenumpang+$dt['mobilpenumpang'];$buskecil=$buskecil+$dt['buskecil'];$bussedang=$bussedang+$dt['bussedang'];$busbesar=$busbesar+$dt['busbesar'];$busmaxi=$busmaxi+$dt['busmaxi'];
        $pickup=$pickup+$dt['pickup'];$pickupbox=$pickupbox+$dt['pickupbox'];$truck=$truck+$dt['truck'];$lighttruck=$lighttruck+$dt['lighttruck'];$dumptruck=$dumptruck+$dt['dumptruck'];$truckbox=$truckbox+$dt['truckbox'];
        $traktorhead=$traktorhead+$dt['traktorhead'];$deliveryvan=$deliveryvan+$dt['deliveryvan'];$doublecabin=$doublecabin+$dt['doublecabin'];$truckbakcrane=$truckbakcrane+$dt['truckbakcrane'];$carcarrier=$carcarrier+$dt['carcarrier'];
        $trucktangki=$trucktangki+$dt['trucktangki'];$blindvan=$blindvan+$dt['blindvan'];$tronton=$tronton+$dt['tronton'];$flatdeck=$flatdeck+$dt['flatdeck'];$keretatempelan=$keretatempelan+$dt['keretatempelan'];$keretagandeng=$dt['keretagandeng'];
        @endphp

        @endforeach
        <tr>
            <td colspan="2"></td>
            <td>{{ $kbwu }}</td>
            <td>{{ $mobilpenumpang }}</td>
            <td>{{ $buskecil }}</td>
            <td>{{ $bussedang }}</td>
            <td>{{ $busbesar }}</td>
            <td>{{ $busmaxi }}</td>
            <td>{{ $pickup }}</td>
            <td>{{ $pickupbox }}</td>
            <td>{{ $truck }}</td>
            <td>{{ $lighttruck }}</td>
            <td>{{ $dumptruck }}</td>
            <td>{{ $truckbox }}</td>
            <td>{{ $traktorhead }}</td>
            <td>{{ $deliveryvan }}</td>
            <td>{{ $doublecabin }}</td>
            <td>{{ $truckbakcrane }}</td>
            <td>{{ $carcarrier }}</td>
            <td>{{ $trucktangki }}</td>
            <td>{{ $blindvan }}</td>
            <td>{{ $tronton }}</td>
            <td>{{ $flatdeck }}</td>
            <td>{{ $keretatempelan }}</td>
            <td>{{ $keretagandeng }}</td>
        </tr>

        <tr></tr>

        <tr>
            <td colspan="13"><b>Laporan Bulanan Jenis Kendaraan Untuk Pelayanan Numpang Uji Masuk Pengujian Kendaraan Bermotor</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Tahun {{ $tglprint }}</b></td>
        </tr>
        <tr></tr>
        <tr>
            <th scope="col" rowspan="3">No</th>
            <th scope="col" rowspan="3" class="text-center" style="width:15%">Tanggal</th>
            <th scope="col" rowspan="3" class="text-center">KBWU yang di Uji</th>
            <th scope="col" class="text-center" colspan="22">Jenis Kendaraan</th>
        </tr>
        <tr>
            <th scope="col"></th>
            <th scope="col" class="text-center" colspan="4">Bus</th>
            <th scope="col" class="text-center" colspan="15">Mobil Barang</th>
            <th scope="col" class="text-center">K.Tempelan</th>
            <th scope="col" class="text-center">K.Gandeng</th>
        </tr>
        <tr>
            <th scope="col">Mobil Penumpang</th>
            <th scope="col">Kecil</th>
            <th scope="col">Sedang</th>
            <th scope="col">Besar</th>
            <th scope="col">Maxi</th>
            <th scope="col">Pick Up</th>
            <th scope="col">Pick Up Box</th>
            <th scope="col">Truck</th>
            <th scope="col">Light Truck</th>
            <th scope="col">Dump Truck</th>
            <th scope="col">Truck Box</th>
            <th scope="col">Tractor Head</th>
            <th scope="col">Delivery Van</th>
            <th scope="col">Double Cabin</th>
            <th scope="col">Truck Bak Crane</th>
            <th scope="col">Car Carrier</th>
            <th scope="col">Truck Tangki</th>
            <th scope="col">Blind Van</th>
            <th scope="col">Tronton</th>
            <th scope="col">Flat Deck</th>
            <th scope="col">Kereta Tempelan</th>
            <th scope="col">Kereta Gandengan</th>
        </tr>
        @php $i=1;$kbwu=0;$mobilpenumpang=0;$buskecil=0;$bussedang=0;$busbesar=0;$busmaxi=0;
        $pickup=0;$pickupbox=0;$truck=0;$lighttruck=0;$dumptruck=0;$truckbox=0;
        $traktorhead=0;$deliveryvan=0;$doublecabin=0;$truckbakcrane=0;$carcarrier=0;
        $trucktangki=0;$blindvan=0;$tronton=0;$flatdeck=0;$keretatempelan=0;$keretagandeng=0;
        @endphp
        @foreach ($datanumasuk as $dt)
        <tr>
            <td scope="row">{{ $i }}</td>
            <td>{{ $dt['tgl'] }}</td>
            <td>{{ $dt['kbwu'] }}</td>
            <td>{{ $dt['mobilpenumpang'] }}</td>
            <td>{{ $dt['buskecil'] }}</td>
            <td>{{ $dt['bussedang'] }}</td>
            <td>{{ $dt['busbesar'] }}</td>
            <td>{{ $dt['busmaxi'] }}</td>
            <td>{{ $dt['pickup'] }}</td>
            <td>{{ $dt['pickupbox'] }}</td>
            <td>{{ $dt['truck'] }}</td>
            <td>{{ $dt['lighttruck'] }}</td>
            <td>{{ $dt['dumptruck'] }}</td>
            <td>{{ $dt['truckbox'] }}</td>
            <td>{{ $dt['traktorhead'] }}</td>
            <td>{{ $dt['deliveryvan'] }}</td>
            <td>{{ $dt['doublecabin'] }}</td>
            <td>{{ $dt['truckbakcrane'] }}</td>
            <td>{{ $dt['carcarrier'] }}</td>
            <td>{{ $dt['trucktangki'] }}</td>
            <td>{{ $dt['blindvan'] }}</td>
            <td>{{ $dt['tronton'] }}</td>
            <td>{{ $dt['flatdeck'] }}</td>
            <td>{{ $dt['keretatempelan'] }}</td>
            <td>{{ $dt['keretagandeng'] }}</td>
        </tr>
        @php
        $i++;$kbwu=$kbwu+$dt['kbwu'];$mobilpenumpang=$mobilpenumpang+$dt['mobilpenumpang'];$buskecil=$buskecil+$dt['buskecil'];$bussedang=$bussedang+$dt['bussedang'];$busbesar=$busbesar+$dt['busbesar'];$busmaxi=$busmaxi+$dt['busmaxi'];
        $pickup=$pickup+$dt['pickup'];$pickupbox=$pickupbox+$dt['pickupbox'];$truck=$truck+$dt['truck'];$lighttruck=$lighttruck+$dt['lighttruck'];$dumptruck=$dumptruck+$dt['dumptruck'];$truckbox=$truckbox+$dt['truckbox'];
        $traktorhead=$traktorhead+$dt['traktorhead'];$deliveryvan=$deliveryvan+$dt['deliveryvan'];$doublecabin=$doublecabin+$dt['doublecabin'];$truckbakcrane=$truckbakcrane+$dt['truckbakcrane'];$carcarrier=$carcarrier+$dt['carcarrier'];
        $trucktangki=$trucktangki+$dt['trucktangki'];$blindvan=$blindvan+$dt['blindvan'];$tronton=$tronton+$dt['tronton'];$flatdeck=$flatdeck+$dt['flatdeck'];$keretatempelan=$keretatempelan+$dt['keretatempelan'];$keretagandeng=$dt['keretagandeng'];
        @endphp

        @endforeach
        <tr>
            <td colspan="2"></td>
            <td>{{ $kbwu }}</td>
            <td>{{ $mobilpenumpang }}</td>
            <td>{{ $buskecil }}</td>
            <td>{{ $bussedang }}</td>
            <td>{{ $busbesar }}</td>
            <td>{{ $busmaxi }}</td>
            <td>{{ $pickup }}</td>
            <td>{{ $pickupbox }}</td>
            <td>{{ $truck }}</td>
            <td>{{ $lighttruck }}</td>
            <td>{{ $dumptruck }}</td>
            <td>{{ $truckbox }}</td>
            <td>{{ $traktorhead }}</td>
            <td>{{ $deliveryvan }}</td>
            <td>{{ $doublecabin }}</td>
            <td>{{ $truckbakcrane }}</td>
            <td>{{ $carcarrier }}</td>
            <td>{{ $trucktangki }}</td>
            <td>{{ $blindvan }}</td>
            <td>{{ $tronton }}</td>
            <td>{{ $flatdeck }}</td>
            <td>{{ $keretatempelan }}</td>
            <td>{{ $keretagandeng }}</td>
        </tr>

        <tr></tr>

        <tr>
            <td colspan="13"><b>Laporan Bulanan Jenis Kendaraan Untuk Pelayanan Numpang Uji Keluar Pengujian Kendaraan Bermotor</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Tahun {{ $tglprint }}</b></td>
        </tr>
        <tr></tr>
        <tr>
            <th scope="col" rowspan="3">No</th>
            <th scope="col" rowspan="3" class="text-center" style="width:15%">Tanggal</th>
            <th scope="col" rowspan="3" class="text-center">KBWU yang di Uji</th>
            <th scope="col" class="text-center" colspan="22">Jenis Kendaraan</th>
        </tr>
        <tr>
            <th scope="col"></th>
            <th scope="col" class="text-center" colspan="4">Bus</th>
            <th scope="col" class="text-center" colspan="15">Mobil Barang</th>
            <th scope="col" class="text-center">K.Tempelan</th>
            <th scope="col" class="text-center">K.Gandeng</th>
        </tr>
        <tr>
            <th scope="col">Mobil Penumpang</th>
            <th scope="col">Kecil</th>
            <th scope="col">Sedang</th>
            <th scope="col">Besar</th>
            <th scope="col">Maxi</th>
            <th scope="col">Pick Up</th>
            <th scope="col">Pick Up Box</th>
            <th scope="col">Truck</th>
            <th scope="col">Light Truck</th>
            <th scope="col">Dump Truck</th>
            <th scope="col">Truck Box</th>
            <th scope="col">Tractor Head</th>
            <th scope="col">Delivery Van</th>
            <th scope="col">Double Cabin</th>
            <th scope="col">Truck Bak Crane</th>
            <th scope="col">Car Carrier</th>
            <th scope="col">Truck Tangki</th>
            <th scope="col">Blind Van</th>
            <th scope="col">Tronton</th>
            <th scope="col">Flat Deck</th>
            <th scope="col">Kereta Tempelan</th>
            <th scope="col">Kereta Gandengan</th>
        </tr>
        @php $i=1;$kbwu=0;$mobilpenumpang=0;$buskecil=0;$bussedang=0;$busbesar=0;$busmaxi=0;
        $pickup=0;$pickupbox=0;$truck=0;$lighttruck=0;$dumptruck=0;$truckbox=0;
        $traktorhead=0;$deliveryvan=0;$doublecabin=0;$truckbakcrane=0;$carcarrier=0;
        $trucktangki=0;$blindvan=0;$tronton=0;$flatdeck=0;$keretatempelan=0;$keretagandeng=0;
        @endphp
        @foreach ($datanukeluar as $dt)
        <tr>
            <td scope="row">{{ $i }}</td>
            <td>{{ $dt['tgl'] }}</td>
            <td>{{ $dt['kbwu'] }}</td>
            <td>{{ $dt['mobilpenumpang'] }}</td>
            <td>{{ $dt['buskecil'] }}</td>
            <td>{{ $dt['bussedang'] }}</td>
            <td>{{ $dt['busbesar'] }}</td>
            <td>{{ $dt['busmaxi'] }}</td>
            <td>{{ $dt['pickup'] }}</td>
            <td>{{ $dt['pickupbox'] }}</td>
            <td>{{ $dt['truck'] }}</td>
            <td>{{ $dt['lighttruck'] }}</td>
            <td>{{ $dt['dumptruck'] }}</td>
            <td>{{ $dt['truckbox'] }}</td>
            <td>{{ $dt['traktorhead'] }}</td>
            <td>{{ $dt['deliveryvan'] }}</td>
            <td>{{ $dt['doublecabin'] }}</td>
            <td>{{ $dt['truckbakcrane'] }}</td>
            <td>{{ $dt['carcarrier'] }}</td>
            <td>{{ $dt['trucktangki'] }}</td>
            <td>{{ $dt['blindvan'] }}</td>
            <td>{{ $dt['tronton'] }}</td>
            <td>{{ $dt['flatdeck'] }}</td>
            <td>{{ $dt['keretatempelan'] }}</td>
            <td>{{ $dt['keretagandeng'] }}</td>
        </tr>
        @php
        $i++;$kbwu=$kbwu+$dt['kbwu'];$mobilpenumpang=$mobilpenumpang+$dt['mobilpenumpang'];$buskecil=$buskecil+$dt['buskecil'];$bussedang=$bussedang+$dt['bussedang'];$busbesar=$busbesar+$dt['busbesar'];$busmaxi=$busmaxi+$dt['busmaxi'];
        $pickup=$pickup+$dt['pickup'];$pickupbox=$pickupbox+$dt['pickupbox'];$truck=$truck+$dt['truck'];$lighttruck=$lighttruck+$dt['lighttruck'];$dumptruck=$dumptruck+$dt['dumptruck'];$truckbox=$truckbox+$dt['truckbox'];
        $traktorhead=$traktorhead+$dt['traktorhead'];$deliveryvan=$deliveryvan+$dt['deliveryvan'];$doublecabin=$doublecabin+$dt['doublecabin'];$truckbakcrane=$truckbakcrane+$dt['truckbakcrane'];$carcarrier=$carcarrier+$dt['carcarrier'];
        $trucktangki=$trucktangki+$dt['trucktangki'];$blindvan=$blindvan+$dt['blindvan'];$tronton=$tronton+$dt['tronton'];$flatdeck=$flatdeck+$dt['flatdeck'];$keretatempelan=$keretatempelan+$dt['keretatempelan'];$keretagandeng=$dt['keretagandeng'];
        @endphp

        @endforeach
        <tr>
            <td colspan="2"></td>
            <td>{{ $kbwu }}</td>
            <td>{{ $mobilpenumpang }}</td>
            <td>{{ $buskecil }}</td>
            <td>{{ $bussedang }}</td>
            <td>{{ $busbesar }}</td>
            <td>{{ $busmaxi }}</td>
            <td>{{ $pickup }}</td>
            <td>{{ $pickupbox }}</td>
            <td>{{ $truck }}</td>
            <td>{{ $lighttruck }}</td>
            <td>{{ $dumptruck }}</td>
            <td>{{ $truckbox }}</td>
            <td>{{ $traktorhead }}</td>
            <td>{{ $deliveryvan }}</td>
            <td>{{ $doublecabin }}</td>
            <td>{{ $truckbakcrane }}</td>
            <td>{{ $carcarrier }}</td>
            <td>{{ $trucktangki }}</td>
            <td>{{ $blindvan }}</td>
            <td>{{ $tronton }}</td>
            <td>{{ $flatdeck }}</td>
            <td>{{ $keretatempelan }}</td>
            <td>{{ $keretagandeng }}</td>
        </tr>

        <tr></tr>

        <tr>
            <td colspan="13"><b>Laporan Bulanan Jenis Kendaraan Untuk Pelayanan Mutasi Masuk Pengujian Kendaraan Bermotor</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Tahun {{ $tglprint }}</b></td>
        </tr>
        <tr></tr>
        <tr>
            <th scope="col" rowspan="3">No</th>
            <th scope="col" rowspan="3" class="text-center" style="width:15%">Tanggal</th>
            <th scope="col" rowspan="3" class="text-center">KBWU yang di Uji</th>
            <th scope="col" class="text-center" colspan="22">Jenis Kendaraan</th>
        </tr>
        <tr>
            <th scope="col"></th>
            <th scope="col" class="text-center" colspan="4">Bus</th>
            <th scope="col" class="text-center" colspan="15">Mobil Barang</th>
            <th scope="col" class="text-center">K.Tempelan</th>
            <th scope="col" class="text-center">K.Gandeng</th>
        </tr>
        <tr>
            <th scope="col">Mobil Penumpang</th>
            <th scope="col">Kecil</th>
            <th scope="col">Sedang</th>
            <th scope="col">Besar</th>
            <th scope="col">Maxi</th>
            <th scope="col">Pick Up</th>
            <th scope="col">Pick Up Box</th>
            <th scope="col">Truck</th>
            <th scope="col">Light Truck</th>
            <th scope="col">Dump Truck</th>
            <th scope="col">Truck Box</th>
            <th scope="col">Tractor Head</th>
            <th scope="col">Delivery Van</th>
            <th scope="col">Double Cabin</th>
            <th scope="col">Truck Bak Crane</th>
            <th scope="col">Car Carrier</th>
            <th scope="col">Truck Tangki</th>
            <th scope="col">Blind Van</th>
            <th scope="col">Tronton</th>
            <th scope="col">Flat Deck</th>
            <th scope="col">Kereta Tempelan</th>
            <th scope="col">Kereta Gandengan</th>
        </tr>
        @php $i=1;$kbwu=0;$mobilpenumpang=0;$buskecil=0;$bussedang=0;$busbesar=0;$busmaxi=0;
        $pickup=0;$pickupbox=0;$truck=0;$lighttruck=0;$dumptruck=0;$truckbox=0;
        $traktorhead=0;$deliveryvan=0;$doublecabin=0;$truckbakcrane=0;$carcarrier=0;
        $trucktangki=0;$blindvan=0;$tronton=0;$flatdeck=0;$keretatempelan=0;$keretagandeng=0;
        @endphp
        @foreach ($datamutasimasuk as $dt)
        <tr>
            <td scope="row">{{ $i }}</td>
            <td>{{ $dt['tgl'] }}</td>
            <td>{{ $dt['kbwu'] }}</td>
            <td>{{ $dt['mobilpenumpang'] }}</td>
            <td>{{ $dt['buskecil'] }}</td>
            <td>{{ $dt['bussedang'] }}</td>
            <td>{{ $dt['busbesar'] }}</td>
            <td>{{ $dt['busmaxi'] }}</td>
            <td>{{ $dt['pickup'] }}</td>
            <td>{{ $dt['pickupbox'] }}</td>
            <td>{{ $dt['truck'] }}</td>
            <td>{{ $dt['lighttruck'] }}</td>
            <td>{{ $dt['dumptruck'] }}</td>
            <td>{{ $dt['truckbox'] }}</td>
            <td>{{ $dt['traktorhead'] }}</td>
            <td>{{ $dt['deliveryvan'] }}</td>
            <td>{{ $dt['doublecabin'] }}</td>
            <td>{{ $dt['truckbakcrane'] }}</td>
            <td>{{ $dt['carcarrier'] }}</td>
            <td>{{ $dt['trucktangki'] }}</td>
            <td>{{ $dt['blindvan'] }}</td>
            <td>{{ $dt['tronton'] }}</td>
            <td>{{ $dt['flatdeck'] }}</td>
            <td>{{ $dt['keretatempelan'] }}</td>
            <td>{{ $dt['keretagandeng'] }}</td>
        </tr>
        @php
        $i++;$kbwu=$kbwu+$dt['kbwu'];$mobilpenumpang=$mobilpenumpang+$dt['mobilpenumpang'];$buskecil=$buskecil+$dt['buskecil'];$bussedang=$bussedang+$dt['bussedang'];$busbesar=$busbesar+$dt['busbesar'];$busmaxi=$busmaxi+$dt['busmaxi'];
        $pickup=$pickup+$dt['pickup'];$pickupbox=$pickupbox+$dt['pickupbox'];$truck=$truck+$dt['truck'];$lighttruck=$lighttruck+$dt['lighttruck'];$dumptruck=$dumptruck+$dt['dumptruck'];$truckbox=$truckbox+$dt['truckbox'];
        $traktorhead=$traktorhead+$dt['traktorhead'];$deliveryvan=$deliveryvan+$dt['deliveryvan'];$doublecabin=$doublecabin+$dt['doublecabin'];$truckbakcrane=$truckbakcrane+$dt['truckbakcrane'];$carcarrier=$carcarrier+$dt['carcarrier'];
        $trucktangki=$trucktangki+$dt['trucktangki'];$blindvan=$blindvan+$dt['blindvan'];$tronton=$tronton+$dt['tronton'];$flatdeck=$flatdeck+$dt['flatdeck'];$keretatempelan=$keretatempelan+$dt['keretatempelan'];$keretagandeng=$dt['keretagandeng'];
        @endphp

        @endforeach
        <tr>
            <td colspan="2"></td>
            <td>{{ $kbwu }}</td>
            <td>{{ $mobilpenumpang }}</td>
            <td>{{ $buskecil }}</td>
            <td>{{ $bussedang }}</td>
            <td>{{ $busbesar }}</td>
            <td>{{ $busmaxi }}</td>
            <td>{{ $pickup }}</td>
            <td>{{ $pickupbox }}</td>
            <td>{{ $truck }}</td>
            <td>{{ $lighttruck }}</td>
            <td>{{ $dumptruck }}</td>
            <td>{{ $truckbox }}</td>
            <td>{{ $traktorhead }}</td>
            <td>{{ $deliveryvan }}</td>
            <td>{{ $doublecabin }}</td>
            <td>{{ $truckbakcrane }}</td>
            <td>{{ $carcarrier }}</td>
            <td>{{ $trucktangki }}</td>
            <td>{{ $blindvan }}</td>
            <td>{{ $tronton }}</td>
            <td>{{ $flatdeck }}</td>
            <td>{{ $keretatempelan }}</td>
            <td>{{ $keretagandeng }}</td>
        </tr>

        <tr></tr>

        <tr>
            <td colspan="13"><b>Laporan Bulanan Jenis Kendaraan Untuk Pelayanan Mutasi Keluar Pengujian Kendaraan Bermotor</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Tahun {{ $tglprint }}</b></td>
        </tr>
        <tr></tr>
        <tr>
            <th scope="col" rowspan="3">No</th>
            <th scope="col" rowspan="3" class="text-center" style="width:15%">Tanggal</th>
            <th scope="col" rowspan="3" class="text-center">KBWU yang di Uji</th>
            <th scope="col" class="text-center" colspan="22">Jenis Kendaraan</th>
        </tr>
        <tr>
            <th scope="col"></th>
            <th scope="col" class="text-center" colspan="4">Bus</th>
            <th scope="col" class="text-center" colspan="15">Mobil Barang</th>
            <th scope="col" class="text-center">K.Tempelan</th>
            <th scope="col" class="text-center">K.Gandeng</th>
        </tr>
        <tr>
            <th scope="col">Mobil Penumpang</th>
            <th scope="col">Kecil</th>
            <th scope="col">Sedang</th>
            <th scope="col">Besar</th>
            <th scope="col">Maxi</th>
            <th scope="col">Pick Up</th>
            <th scope="col">Pick Up Box</th>
            <th scope="col">Truck</th>
            <th scope="col">Light Truck</th>
            <th scope="col">Dump Truck</th>
            <th scope="col">Truck Box</th>
            <th scope="col">Tractor Head</th>
            <th scope="col">Delivery Van</th>
            <th scope="col">Double Cabin</th>
            <th scope="col">Truck Bak Crane</th>
            <th scope="col">Car Carrier</th>
            <th scope="col">Truck Tangki</th>
            <th scope="col">Blind Van</th>
            <th scope="col">Tronton</th>
            <th scope="col">Flat Deck</th>
            <th scope="col">Kereta Tempelan</th>
            <th scope="col">Kereta Gandengan</th>
        </tr>
        @php $i=1;$kbwu=0;$mobilpenumpang=0;$buskecil=0;$bussedang=0;$busbesar=0;$busmaxi=0;
        $pickup=0;$pickupbox=0;$truck=0;$lighttruck=0;$dumptruck=0;$truckbox=0;
        $traktorhead=0;$deliveryvan=0;$doublecabin=0;$truckbakcrane=0;$carcarrier=0;
        $trucktangki=0;$blindvan=0;$tronton=0;$flatdeck=0;$keretatempelan=0;$keretagandeng=0;
        @endphp
        @foreach ($datamutasikeluar as $dt)
        <tr>
            <td scope="row">{{ $i }}</td>
            <td>{{ $dt['tgl'] }}</td>
            <td>{{ $dt['kbwu'] }}</td>
            <td>{{ $dt['mobilpenumpang'] }}</td>
            <td>{{ $dt['buskecil'] }}</td>
            <td>{{ $dt['bussedang'] }}</td>
            <td>{{ $dt['busbesar'] }}</td>
            <td>{{ $dt['busmaxi'] }}</td>
            <td>{{ $dt['pickup'] }}</td>
            <td>{{ $dt['pickupbox'] }}</td>
            <td>{{ $dt['truck'] }}</td>
            <td>{{ $dt['lighttruck'] }}</td>
            <td>{{ $dt['dumptruck'] }}</td>
            <td>{{ $dt['truckbox'] }}</td>
            <td>{{ $dt['traktorhead'] }}</td>
            <td>{{ $dt['deliveryvan'] }}</td>
            <td>{{ $dt['doublecabin'] }}</td>
            <td>{{ $dt['truckbakcrane'] }}</td>
            <td>{{ $dt['carcarrier'] }}</td>
            <td>{{ $dt['trucktangki'] }}</td>
            <td>{{ $dt['blindvan'] }}</td>
            <td>{{ $dt['tronton'] }}</td>
            <td>{{ $dt['flatdeck'] }}</td>
            <td>{{ $dt['keretatempelan'] }}</td>
            <td>{{ $dt['keretagandeng'] }}</td>
        </tr>
        @php
        $i++;$kbwu=$kbwu+$dt['kbwu'];$mobilpenumpang=$mobilpenumpang+$dt['mobilpenumpang'];$buskecil=$buskecil+$dt['buskecil'];$bussedang=$bussedang+$dt['bussedang'];$busbesar=$busbesar+$dt['busbesar'];$busmaxi=$busmaxi+$dt['busmaxi'];
        $pickup=$pickup+$dt['pickup'];$pickupbox=$pickupbox+$dt['pickupbox'];$truck=$truck+$dt['truck'];$lighttruck=$lighttruck+$dt['lighttruck'];$dumptruck=$dumptruck+$dt['dumptruck'];$truckbox=$truckbox+$dt['truckbox'];
        $traktorhead=$traktorhead+$dt['traktorhead'];$deliveryvan=$deliveryvan+$dt['deliveryvan'];$doublecabin=$doublecabin+$dt['doublecabin'];$truckbakcrane=$truckbakcrane+$dt['truckbakcrane'];$carcarrier=$carcarrier+$dt['carcarrier'];
        $trucktangki=$trucktangki+$dt['trucktangki'];$blindvan=$blindvan+$dt['blindvan'];$tronton=$tronton+$dt['tronton'];$flatdeck=$flatdeck+$dt['flatdeck'];$keretatempelan=$keretatempelan+$dt['keretatempelan'];$keretagandeng=$dt['keretagandeng'];
        @endphp

        @endforeach
        <tr>
            <td colspan="2"></td>
            <td>{{ $kbwu }}</td>
            <td>{{ $mobilpenumpang }}</td>
            <td>{{ $buskecil }}</td>
            <td>{{ $bussedang }}</td>
            <td>{{ $busbesar }}</td>
            <td>{{ $busmaxi }}</td>
            <td>{{ $pickup }}</td>
            <td>{{ $pickupbox }}</td>
            <td>{{ $truck }}</td>
            <td>{{ $lighttruck }}</td>
            <td>{{ $dumptruck }}</td>
            <td>{{ $truckbox }}</td>
            <td>{{ $traktorhead }}</td>
            <td>{{ $deliveryvan }}</td>
            <td>{{ $doublecabin }}</td>
            <td>{{ $truckbakcrane }}</td>
            <td>{{ $carcarrier }}</td>
            <td>{{ $trucktangki }}</td>
            <td>{{ $blindvan }}</td>
            <td>{{ $tronton }}</td>
            <td>{{ $flatdeck }}</td>
            <td>{{ $keretatempelan }}</td>
            <td>{{ $keretagandeng }}</td>
        </tr>


        <tr></tr>

        <tr>
            <td colspan="13"><b>Laporan Bulanan Jenis Kendaraan Untuk Pelayanan Uji Ulang Pengujian Kendaraan Bermotor</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Pada UPT PKB Dinas Perhubungan Kabupaten Mimika</b></td>
        </tr>
        <tr>
            <td colspan="13"><b>Tahun {{ $tglprint }}</b></td>
        </tr>
        <tr></tr>
        <tr>
            <th scope="col" rowspan="3">No</th>
            <th scope="col" rowspan="3" class="text-center" style="width:15%">Tanggal</th>
            <th scope="col" rowspan="3" class="text-center">KBWU yang di Uji</th>
            <th scope="col" class="text-center" colspan="22">Jenis Kendaraan</th>
        </tr>
        <tr>
            <th scope="col"></th>
            <th scope="col" class="text-center" colspan="4">Bus</th>
            <th scope="col" class="text-center" colspan="15">Mobil Barang</th>
            <th scope="col" class="text-center">K.Tempelan</th>
            <th scope="col" class="text-center">K.Gandeng</th>
        </tr>
        <tr>
            <th scope="col">Mobil Penumpang</th>
            <th scope="col">Kecil</th>
            <th scope="col">Sedang</th>
            <th scope="col">Besar</th>
            <th scope="col">Maxi</th>
            <th scope="col">Pick Up</th>
            <th scope="col">Pick Up Box</th>
            <th scope="col">Truck</th>
            <th scope="col">Light Truck</th>
            <th scope="col">Dump Truck</th>
            <th scope="col">Truck Box</th>
            <th scope="col">Tractor Head</th>
            <th scope="col">Delivery Van</th>
            <th scope="col">Double Cabin</th>
            <th scope="col">Truck Bak Crane</th>
            <th scope="col">Car Carrier</th>
            <th scope="col">Truck Tangki</th>
            <th scope="col">Blind Van</th>
            <th scope="col">Tronton</th>
            <th scope="col">Flat Deck</th>
            <th scope="col">Kereta Tempelan</th>
            <th scope="col">Kereta Gandengan</th>
        </tr>
        @php $i=1;$kbwu=0;$mobilpenumpang=0;$buskecil=0;$bussedang=0;$busbesar=0;$busmaxi=0;
        $pickup=0;$pickupbox=0;$truck=0;$lighttruck=0;$dumptruck=0;$truckbox=0;
        $traktorhead=0;$deliveryvan=0;$doublecabin=0;$truckbakcrane=0;$carcarrier=0;
        $trucktangki=0;$blindvan=0;$tronton=0;$flatdeck=0;$keretatempelan=0;$keretagandeng=0;
        @endphp
        @foreach ($dataujiulang as $dt)
        <tr>
            <td scope="row">{{ $i }}</td>
            <td>{{ $dt['tgl'] }}</td>
            <td>{{ $dt['kbwu'] }}</td>
            <td>{{ $dt['mobilpenumpang'] }}</td>
            <td>{{ $dt['buskecil'] }}</td>
            <td>{{ $dt['bussedang'] }}</td>
            <td>{{ $dt['busbesar'] }}</td>
            <td>{{ $dt['busmaxi'] }}</td>
            <td>{{ $dt['pickup'] }}</td>
            <td>{{ $dt['pickupbox'] }}</td>
            <td>{{ $dt['truck'] }}</td>
            <td>{{ $dt['lighttruck'] }}</td>
            <td>{{ $dt['dumptruck'] }}</td>
            <td>{{ $dt['truckbox'] }}</td>
            <td>{{ $dt['traktorhead'] }}</td>
            <td>{{ $dt['deliveryvan'] }}</td>
            <td>{{ $dt['doublecabin'] }}</td>
            <td>{{ $dt['truckbakcrane'] }}</td>
            <td>{{ $dt['carcarrier'] }}</td>
            <td>{{ $dt['trucktangki'] }}</td>
            <td>{{ $dt['blindvan'] }}</td>
            <td>{{ $dt['tronton'] }}</td>
            <td>{{ $dt['flatdeck'] }}</td>
            <td>{{ $dt['keretatempelan'] }}</td>
            <td>{{ $dt['keretagandeng'] }}</td>
        </tr>
        @php
        $i++;$kbwu=$kbwu+$dt['kbwu'];$mobilpenumpang=$mobilpenumpang+$dt['mobilpenumpang'];$buskecil=$buskecil+$dt['buskecil'];$bussedang=$bussedang+$dt['bussedang'];$busbesar=$busbesar+$dt['busbesar'];$busmaxi=$busmaxi+$dt['busmaxi'];
        $pickup=$pickup+$dt['pickup'];$pickupbox=$pickupbox+$dt['pickupbox'];$truck=$truck+$dt['truck'];$lighttruck=$lighttruck+$dt['lighttruck'];$dumptruck=$dumptruck+$dt['dumptruck'];$truckbox=$truckbox+$dt['truckbox'];
        $traktorhead=$traktorhead+$dt['traktorhead'];$deliveryvan=$deliveryvan+$dt['deliveryvan'];$doublecabin=$doublecabin+$dt['doublecabin'];$truckbakcrane=$truckbakcrane+$dt['truckbakcrane'];$carcarrier=$carcarrier+$dt['carcarrier'];
        $trucktangki=$trucktangki+$dt['trucktangki'];$blindvan=$blindvan+$dt['blindvan'];$tronton=$tronton+$dt['tronton'];$flatdeck=$flatdeck+$dt['flatdeck'];$keretatempelan=$keretatempelan+$dt['keretatempelan'];$keretagandeng=$dt['keretagandeng'];
        @endphp

        @endforeach
        <tr>
            <td colspan="2"></td>
            <td>{{ $kbwu }}</td>
            <td>{{ $mobilpenumpang }}</td>
            <td>{{ $buskecil }}</td>
            <td>{{ $bussedang }}</td>
            <td>{{ $busbesar }}</td>
            <td>{{ $busmaxi }}</td>
            <td>{{ $pickup }}</td>
            <td>{{ $pickupbox }}</td>
            <td>{{ $truck }}</td>
            <td>{{ $lighttruck }}</td>
            <td>{{ $dumptruck }}</td>
            <td>{{ $truckbox }}</td>
            <td>{{ $traktorhead }}</td>
            <td>{{ $deliveryvan }}</td>
            <td>{{ $doublecabin }}</td>
            <td>{{ $truckbakcrane }}</td>
            <td>{{ $carcarrier }}</td>
            <td>{{ $trucktangki }}</td>
            <td>{{ $blindvan }}</td>
            <td>{{ $tronton }}</td>
            <td>{{ $flatdeck }}</td>
            <td>{{ $keretatempelan }}</td>
            <td>{{ $keretagandeng }}</td>
        </tr>
    </tbody>
</table>
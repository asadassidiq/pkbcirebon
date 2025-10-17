<?php

namespace App\Exports\Bulanan;

use App\Models\Pendaftaran;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class jenisExport implements FromView
{
    use Exportable;

    public function __construct(string $tgl)
    {
        $this->tgl = $tgl;
    }

    public function view(): View
    {
        $tglcetak = date_create(date("d-m-Y"));
        $tglcreate = date_create($this->tgl);
        $hari = date_format($tglcreate, "d");
        $bulan = date_format($tglcreate, "m");
        $tahun = date_format($tglcreate, "Y");
        $hari1 = date_format($tglcetak, "d");
        $bulan1 = date_format($tglcetak, "m");
        $tahun1 = date_format($tglcetak, "Y");

        switch ($bulan) {
            case 1:
                $bulan_ini1 = "Januari";
                break;

            case 2:
                $bulan_ini1 = "Febuari";
                break;

            case 3:
                $bulan_ini1 = "Maret";
                break;

            case 4:
                $bulan_ini1 = "April";
                break;

            case 5:
                $bulan_ini1 = "Mei";
                break;

            case 6:
                $bulan_ini1 = "Juni";
                break;

            case 7:
                $bulan_ini1 = "Juli";
                break;

            case 8:
                $bulan_ini1 = "Agustus";
                break;

            case 9:
                $bulan_ini1 = "September";
                break;

            case 10:
                $bulan_ini1 = "Oktober";
                break;

            case 11:
                $bulan_ini1 = "November";
                break;

            case 12:
                $bulan_ini1 = "Desember";
                break;

            default:
                $bulan_ini1 = "Bukan di ketahui";
                break;
        }
        switch ($bulan1) {
            case 1:
                $bulan_ini = "Januari";
                break;

            case 2:
                $bulan_ini = "Febuari";
                break;

            case 3:
                $bulan_ini = "Maret";
                break;

            case 4:
                $bulan_ini = "April";
                break;

            case 5:
                $bulan_ini = "Mei";
                break;

            case 6:
                $bulan_ini = "Juni";
                break;

            case 7:
                $bulan_ini = "Juli";
                break;

            case 8:
                $bulan_ini = "Agustus";
                break;

            case 9:
                $bulan_ini = "September";
                break;

            case 10:
                $bulan_ini = "Oktober";
                break;

            case 11:
                $bulan_ini = "November";
                break;

            case 12:
                $bulan_ini = "Desember";
                break;

            default:
                $bulan_ini = "Bukan di ketahui";
                break;
        }
        $tglprint = $bulan_ini1 . ' ' . $tahun;
        $tglcetak = $hari1 . ' ' . $bulan_ini . ' ' . $tahun1;


        $tgl = Pendaftaran::select('tglpendaftaran')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->groupBy('tglpendaftaran')->get();
        $data = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");
            $arr = array(
                'tgl'  => $date,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpanb Bukan Sedan'])->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Kecil')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'LIGHT TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DUMP TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'like', '%' . 'TRACTOR HEAD' . '%')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DELIVERY VAN')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DOUBLE CABIN')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BAK CRANE')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'CAR CARREIR')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK TANGKI')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'BLINDVAN')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRONTON')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'FLAT DECK')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'lainlain' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereNotIn('jeniskendaraan',['Mobil Penumpang Bukan Sedan','Mobil Penumpang Sedan','Mobil Bus Kecil','Mobil Bus Sedang','Mobil Bus Besar','Mobil Bus Maxi','Kereta Tempelan','Kereta Gandeng'])->whereNotIn('model', ['PICK UP','PICK UP BOX','TRUCK','LIGHT TRUCK','DUMP TRUCK','TRUCK BOX','TRACTOR HEAD','DELIVERY VAN','DOUBLE CABIN','TRUCK BAK CRANE','CAR CARREIR','TRUCK TANGKI','BLINDVAN','TRONTON','FLAT DECK','Kereta Tempelan','Kereta Gandeng'])->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                );
            array_push($data, $arr);
        }

        $dataujipertama = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");
            $arr = array(
                'tgl'  => $date,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpanb Bukan Sedan'])->where('kodepenerbitans_id', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Kecil')->where('kodepenerbitans_id', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang')->where('kodepenerbitans_id', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar')->where('kodepenerbitans_id', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi')->where('kodepenerbitans_id', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'LIGHT TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DUMP TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'like', '%' . 'TRACTOR HEAD' . '%')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DELIVERY VAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DOUBLE CABIN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BAK CRANE')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'CAR CARREIR')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK TANGKI')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'BLINDVAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRONTON')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'FLAT DECK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'lainlain' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereNotIn('jeniskendaraan',['Mobil Penumpang Bukan Sedan','Mobil Penumpang Sedan','Mobil Bus Kecil','Mobil Bus Sedang','Mobil Bus Besar','Mobil Bus Maxi','Kereta Tempelan','Kereta Gandeng'])->whereNotIn('model', ['PICK UP','PICK UP BOX','TRUCK','LIGHT TRUCK','DUMP TRUCK','TRUCK BOX','TRACTOR HEAD','DELIVERY VAN','DOUBLE CABIN','TRUCK BAK CRANE','CAR CARREIR','TRUCK TANGKI','BLINDVAN','TRONTON','FLAT DECK','Kereta Tempelan','Kereta Gandeng'])->where('kodepenerbitans_id', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
            );
            array_push($dataujipertama, $arr);
        }

        $dataujiberkala = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");
            $arr = array(
                'tgl'  => $date,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '2')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpanb Bukan Sedan'])->where('kodepenerbitans_id', '2')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Kecil')->where('kodepenerbitans_id', '2')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang')->where('kodepenerbitans_id', '2')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar')->where('kodepenerbitans_id', '2')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi')->where('kodepenerbitans_id', '2')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'LIGHT TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DUMP TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'like', '%' . 'TRACTOR HEAD' . '%')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DELIVERY VAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DOUBLE CABIN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BAK CRANE')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'CAR CARREIR')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK TANGKI')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'BLINDVAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRONTON')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'FLAT DECK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '2')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '2')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'lainlain' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereNotIn('jeniskendaraan',['Mobil Penumpang Bukan Sedan','Mobil Penumpang Sedan','Mobil Bus Kecil','Mobil Bus Sedang','Mobil Bus Besar','Mobil Bus Maxi','Kereta Tempelan','Kereta Gandeng'])->whereNotIn('model', ['PICK UP','PICK UP BOX','TRUCK','LIGHT TRUCK','DUMP TRUCK','TRUCK BOX','TRACTOR HEAD','DELIVERY VAN','DOUBLE CABIN','TRUCK BAK CRANE','CAR CARREIR','TRUCK TANGKI','BLINDVAN','TRONTON','FLAT DECK','Kereta Tempelan','Kereta Gandeng'])->where('kodepenerbitans_id', '2')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
            );
            array_push($dataujiberkala, $arr);
        }

        $datanumasuk = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");
            $arr = array(
                'tgl'  => $date,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '5')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpanb Bukan Sedan'])->where('kodepenerbitans_id', '5')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Kecil')->where('kodepenerbitans_id', '5')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang')->where('kodepenerbitans_id', '5')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar')->where('kodepenerbitans_id', '5')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi')->where('kodepenerbitans_id', '5')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'LIGHT TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DUMP TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'like', '%' . 'TRACTOR HEAD' . '%')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DELIVERY VAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DOUBLE CABIN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BAK CRANE')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'CAR CARREIR')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK TANGKI')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'BLINDVAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRONTON')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'FLAT DECK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '5')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '5')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'lainlain' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereNotIn('jeniskendaraan',['Mobil Penumpang Bukan Sedan','Mobil Penumpang Sedan','Mobil Bus Kecil','Mobil Bus Sedang','Mobil Bus Besar','Mobil Bus Maxi','Kereta Tempelan','Kereta Gandeng'])->whereNotIn('model', ['PICK UP','PICK UP BOX','TRUCK','LIGHT TRUCK','DUMP TRUCK','TRUCK BOX','TRACTOR HEAD','DELIVERY VAN','DOUBLE CABIN','TRUCK BAK CRANE','CAR CARREIR','TRUCK TANGKI','BLINDVAN','TRONTON','FLAT DECK','Kereta Tempelan','Kereta Gandeng'])->where('kodepenerbitans_id', '5')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
            );
            array_push($datanumasuk, $arr);
        }

        $datanukeluar = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");
            $arr = array(
                'tgl'  => $date,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '9')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpanb Bukan Sedan'])->where('kodepenerbitans_id', '9')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Kecil')->where('kodepenerbitans_id', '9')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang')->where('kodepenerbitans_id', '9')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar')->where('kodepenerbitans_id', '9')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi')->where('kodepenerbitans_id', '9')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'LIGHT TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DUMP TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'like', '%' . 'TRACTOR HEAD' . '%')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DELIVERY VAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DOUBLE CABIN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BAK CRANE')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'CAR CARREIR')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK TANGKI')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'BLINDVAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRONTON')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'FLAT DECK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '9')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '9')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'lainlain' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereNotIn('jeniskendaraan',['Mobil Penumpang Bukan Sedan','Mobil Penumpang Sedan','Mobil Bus Kecil','Mobil Bus Sedang','Mobil Bus Besar','Mobil Bus Maxi','Kereta Tempelan','Kereta Gandeng'])->whereNotIn('model', ['PICK UP','PICK UP BOX','TRUCK','LIGHT TRUCK','DUMP TRUCK','TRUCK BOX','TRACTOR HEAD','DELIVERY VAN','DOUBLE CABIN','TRUCK BAK CRANE','CAR CARREIR','TRUCK TANGKI','BLINDVAN','TRONTON','FLAT DECK','Kereta Tempelan','Kereta Gandeng'])->where('kodepenerbitans_id', '9')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
            );
            array_push($datanukeluar, $arr);
        }

        $datamutasimasuk = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");
            $arr = array(
                'tgl'  => $date,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '6')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpanb Bukan Sedan'])->where('kodepenerbitans_id', '6')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Kecil')->where('kodepenerbitans_id', '6')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang')->where('kodepenerbitans_id', '6')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar')->where('kodepenerbitans_id', '6')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi')->where('kodepenerbitans_id', '6')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'LIGHT TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DUMP TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'like', '%' . 'TRACTOR HEAD' . '%')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DELIVERY VAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DOUBLE CABIN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BAK CRANE')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'CAR CARREIR')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK TANGKI')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'BLINDVAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRONTON')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'FLAT DECK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '6')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '6')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'lainlain' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereNotIn('jeniskendaraan',['Mobil Penumpang Bukan Sedan','Mobil Penumpang Sedan','Mobil Bus Kecil','Mobil Bus Sedang','Mobil Bus Besar','Mobil Bus Maxi','Kereta Tempelan','Kereta Gandeng'])->whereNotIn('model', ['PICK UP','PICK UP BOX','TRUCK','LIGHT TRUCK','DUMP TRUCK','TRUCK BOX','TRACTOR HEAD','DELIVERY VAN','DOUBLE CABIN','TRUCK BAK CRANE','CAR CARREIR','TRUCK TANGKI','BLINDVAN','TRONTON','FLAT DECK','Kereta Tempelan','Kereta Gandeng'])->where('kodepenerbitans_id', '6')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
            );
            array_push($datamutasimasuk, $arr);
        }

        $datamutasikeluar = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");
            $arr = array(
                'tgl'  => $date,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '10')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpanb Bukan Sedan'])->where('kodepenerbitans_id', '10')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Kecil')->where('kodepenerbitans_id', '10')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang')->where('kodepenerbitans_id', '10')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar')->where('kodepenerbitans_id', '10')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi')->where('kodepenerbitans_id', '10')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'LIGHT TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DUMP TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'like', '%' . 'TRACTOR HEAD' . '%')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DELIVERY VAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DOUBLE CABIN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BAK CRANE')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'CAR CARREIR')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK TANGKI')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'BLINDVAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRONTON')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'FLAT DECK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '10')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '10')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'lainlain' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereNotIn('jeniskendaraan',['Mobil Penumpang Bukan Sedan','Mobil Penumpang Sedan','Mobil Bus Kecil','Mobil Bus Sedang','Mobil Bus Besar','Mobil Bus Maxi','Kereta Tempelan','Kereta Gandeng'])->whereNotIn('model', ['PICK UP','PICK UP BOX','TRUCK','LIGHT TRUCK','DUMP TRUCK','TRUCK BOX','TRACTOR HEAD','DELIVERY VAN','DOUBLE CABIN','TRUCK BAK CRANE','CAR CARREIR','TRUCK TANGKI','BLINDVAN','TRONTON','FLAT DECK','Kereta Tempelan','Kereta Gandeng'])->where('kodepenerbitans_id', '10')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
            );
            array_push($datamutasikeluar, $arr);
        }

        $dataujiulang = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");
            $arr = array(
                'tgl'  => $date,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '7')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpanb Bukan Sedan'])->where('kodepenerbitans_id', '7')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Kecil')->where('kodepenerbitans_id', '7')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang')->where('kodepenerbitans_id', '7')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar')->where('kodepenerbitans_id', '7')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi')->where('kodepenerbitans_id', '7')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'PICK UP BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'LIGHT TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DUMP TRUCK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BOX')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'like', '%' . 'TRACTOR HEAD' . '%')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DELIVERY VAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'DOUBLE CABIN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK BAK CRANE')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'CAR CARREIR')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRUCK TANGKI')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'BLINDVAN')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'TRONTON')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('model', 'FLAT DECK')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '7')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '7')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'lainlain' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereNotIn('jeniskendaraan',['Mobil Penumpang Bukan Sedan','Mobil Penumpang Sedan','Mobil Bus Kecil','Mobil Bus Sedang','Mobil Bus Besar','Mobil Bus Maxi','Kereta Tempelan','Kereta Gandeng'])->whereNotIn('model', ['PICK UP','PICK UP BOX','TRUCK','LIGHT TRUCK','DUMP TRUCK','TRUCK BOX','TRACTOR HEAD','DELIVERY VAN','DOUBLE CABIN','TRUCK BAK CRANE','CAR CARREIR','TRUCK TANGKI','BLINDVAN','TRONTON','FLAT DECK','Kereta Tempelan','Kereta Gandeng'])->where('kodepenerbitans_id', '7')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
            );
            array_push($dataujiulang, $arr);
        }

        return view('exports.bulanan.jenis', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data, 'dataujipertama' => $dataujipertama, 'dataujiberkala' => $dataujiberkala, 'datanumasuk' => $datanumasuk, 'datanukeluar' => $datanukeluar, 'datamutasimasuk' => $datamutasimasuk, 'datamutasikeluar' => $datamutasikeluar, 'dataujiulang' => $dataujiulang]);
    }
}

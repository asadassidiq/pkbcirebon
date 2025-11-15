<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use App\Models\Pendaftaran;
use App\Models\Transaksi;
use App\Models\Datakendaraan;
use App\Models\Datapengujian;
use App\Models\Identitaskendaraan;
use App\Models\Kodewilayah;
use App\Models\Kepaladinas;
use App\Models\Kodepenerbitan;
use App\Models\TargetTahunan;
use App\Models\klasifikasi;
use App\Models\Merek;
use App\Models\Tipe;
use App\Models\Jenis;
use App\Models\TamanKendaraan;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Ttd;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Utils;

class LaporanController extends Controller
{
    private $utils;

    public function __construct()
    {
        $this->utils = new Utils();
    }

    public function printlaporanharian($tgl)
    {
        $tglcetak = date('Y-m-d', strtotime($tgl));
        $tglcreate = date_create($tgl);

        $hari = $this->utils->hari(date_format($tglcreate, "D"));

        $tglprint = $hari . ', ' . $this->utils->tgl_indo($tglcetak);

        $kendaraan  = Pendaftaran::select('pendaftarans.noantrian','identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan','identitaskendaraans.merek','identitaskendaraans.tipe','identitaskendaraans.norangka','identitaskendaraans.nomesin','identitaskendaraans.thpembuatan','identitaskendaraans.bahanbakar', 'identitaskendaraans.nama','identitaskendaraans.alamat', 'datarfid.statuspenerbitan', 'identitaskendaraans.subjenis', 'datakendaraans.jbb', 'identitaskendaraans.jenis', 'identitaskendaraans.model', 'kodepenerbitans.keterangan', 'laikjalan.statuslulusuji', 'peruntukan', 'datarfid.rfid_tid')->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('kodepenerbitans', 'kodepenerbitans.id', '=', 'pendaftarans.kodepenerbitans_id')->leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->leftJoin('datarfid','datarfid.idx','pendaftarans.idx')->where('tglpendaftaran', $tgl)->orderBy('pendaftarans.noantrian', 'ASC')->get();
        $umum       = Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('peruntukan', 'Umum')->count();
        $tidakumum  = Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('peruntukan', 'Tidak Umum')->count();
        $lulus      = Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->whereIn('kodepenerbitans_id', ['1', '2','3','4', '5', '6'])->where('statuslulusuji', '1')->count();
        $tidaklulus = Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->whereIn('kodepenerbitans_id', ['1', '2','3','4', '5', '6'])->where('statuslulusuji', '0')->count();

        $pemakaianbuku = array(
            'baru'   => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->whereIn('kodepenerbitans_id', ['1', '2', '5', '6'])->where('rfid_tid', '!=','')->count(),
            'perpanjangan'   => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->where('kodepenerbitans_id', '2')->where('rfid_tid','')->count(),
            'rusak'  => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->where('kodepenerbitans_id', '3')->where('rfid_tid', '!=','')->count(),
            'hilang' => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->where('kodepenerbitans_id', '4')->where('rfid_tid', '!=','')->count(),
        );

        // $jeniskendaraan = Jenis::all();
        $totaljenis = array(
            'mobil1' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'MOBIL PENUMPANG SEDAN')->count(),
            'mobil2' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'MOBIL PENUMPANG BUKAN SEDAN')->count(),
            'mobil3' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'MOBIL BUS KECIL')->count(),
            'mobil4' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'MOBIL BUS SEDANG')->count(),
            'mobil5' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'MOBIL BUS BESAR')->count(),
            'mobil6' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'MOBIL BUS MAXI')->count(),
            'mobil7' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'MOBIL BUS GANDENG')->count(),
            'mobil8' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'MOBIL BUS TEMPEL')->count(),
            'mobil9' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'MOBIL BUS TINGKAT')->count(),
            'mobil10' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'PICK UP')->count(),
            'mobil11' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'DOUBLE CABIN')->count(),
            'mobil12' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'LIGHT TRUCK')->count(),
            'mobil13' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'DUMP TRUCK')->count(),
            'mobil14' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'LOST BAK')->count(),
            'mobil15' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'CAR CARRIER')->count(),
            'mobil16' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'PICK UP BOX')->count(),
            'mobil17' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'PICK UP RANGKA')->count(),
            'mobil18' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'LIGHT TRUCK BOX')->count(),
            'mobil19' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'BLIND VAN')->count(),
            'mobil20' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'DELIVERY VAN')->count(),
            'mobil21' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'MOBIL TANGKI')->count(),
            'mobil22' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'MOBIL PENARIK')->count(),
            'mobil23' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'KERETA GANDENG BAK TERBUKA')->count(),
            'mobil24' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'KERETA GANDENG BAK TERTUTUP')->count(),
            'mobil25' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'KERETA GANDENG TANGKI')->count(),
            'mobil26' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'KERETA TEMPELAN BAK TERBUKA')->count(),
            'mobil27' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'KERETA TEMPELAN BAK TERTUTUP')->count(),
            'mobil28' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'KERETA TEMPELAN TANGKI')->count(),
            'mobil29' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN BARANG BAK MUATAN TERBUKA')->count(),
            'mobil30' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN BARANG BAK MUATAN TERTUTUP')->count(),
            'mobil31' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN PENUMPANG')->count(),
            'mobil32' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN BARANG TANGKI')->count(),
            'mobil33' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'AMBULANCE')->count(),
            'mobil34' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'DAMKAR')->count(),
            'mobil35' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'ARM ROLL')->count(),
            'mobil36' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'DEREK')->count(),
            'mobil37' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'FLAT DECK')->count(),
            'mobil38' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'MIXER')->count(),
            'mobil39' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('model', 'CONCRETEPUMP')->count(),
        );

        $jenispelayanan = kodepenerbitan::all();

        $pelayanan = array();
        foreach ($jenispelayanan as $data) {
            $arr = array(
                'jenispelayanan'  => $data->keterangan,
                'jumlah' => Pendaftaran::leftJoin('kodepenerbitans', 'kodepenerbitans.id', '=', 'pendaftarans.kodepenerbitans_id')->where('tglpendaftaran', $tgl)->where('keterangan', $data->keterangan)->count(),
            );
            array_push($pelayanan, $arr);
        }

        $ttd = Ttd::leftjoin('users', 'users.uuid', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();

        // return view('cetak.laporanharian', ['kendaraan' => $kendaraan, 'tglprint' => $tglprint, 'umum' => $umum, 'tidakumum' => $tidakumum, 'lulus' => $lulus, 'tidaklulus' => $tidaklulus, 'model' => $totaljenis, 'jenispelayanan' => $pelayanan, 'pemakaianbuku' => $pemakaianbuku, 'barang' => $mBarang, 'ttd' => $ttd]);
        
        $path_logoKab = public_path() . '/img/kota.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        $data = [
            'kendaraan' => $kendaraan,
            'tglprint' => $tglprint, 
            'umum'  => $umum,
            'tidakumum' => $tidakumum,
            'lulus' => $lulus,
            'tidaklulus' => $tidaklulus,
            'jenis' => $totaljenis,
            'jenispelayanan' => $pelayanan,
            'pemakaianbuku' => $pemakaianbuku,
            'ttd'     => $ttd,
            'logokab'  => $logokab,
        ];
        $pdf = PDF::loadView('cetak.harian.laporan', $data);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream('Laporan Harian.pdf')->header('Content-Type','application/pdf');
    }

    //BULANAN
    public function printbulananpelayanan($tgl)
    {
        $tglcetak = date('Y-m-d', strtotime($tgl));
        $tglcreate = date_create($tgl);
        $bulan = date_format($tglcreate, "m");
        $tahun = date_format($tglcreate, "Y");
        $tglprint = $this->utils->bulan($bulan).' '.$tahun;
        $tgl = Pendaftaran::select('tglpendaftaran')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->groupBy('tglpendaftaran')->get();
        $dataKend = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");
            $arr = array(
                'tgl'  => $date,
                'lulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('statuslulusuji', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'tidaklulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('statuslulusuji', '0')->where('kodepenerbitans_id', '!=', '9')->where('kodepenerbitans_id', '!=', '10')->count(),
                'numasuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'nukeluar' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'ujiulang' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'mutasikeluar' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'mutasimasuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'ujipertama' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id','1')->count(),
                'ujiberkala' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id','2')->count(),
                'rubahbentuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id','8')->count(),
            );
            array_push($dataKend, $arr);
        };

        $path_logoKab = public_path() . '/img/kota.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        $ttd = Ttd::leftjoin('users', 'users.uuid', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();
        $data = [
            'kendaraan' => $dataKend,
            'tglprint' => $tglprint,
            'ttd'     => $ttd,
            'logokab'  => $logokab,
        ];
        $pdf = PDF::loadView('cetak.bulanan.pelayanan', $data);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream('Laporan Bulanan Pelayanan.pdf')->header('Content-Type','application/pdf');
    }

    public function printbulanankartu($tgl)
    {
        $tglcetak = date('Y-m-d', strtotime($tgl));
        $tglcreate = date_create($tgl);
        $bulan = date_format($tglcreate, "m");
        $tahun = date_format($tglcreate, "Y");
        $tglprint = $this->utils->bulan($bulan).' '.$tahun;
        $tgl = Pendaftaran::select('tglpendaftaran')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->groupBy('tglpendaftaran')->get();
        $data = Pendaftaran::select('tglpendaftaran as tgl','keterangan','identitaskendaraans.nouji','identitaskendaraans.noregistrasikendaraan','datapengujian.tgluji','datapengujian.masaberlakuuji','nokendalikartu','datapengujian.perso')->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('kodepenerbitans', 'kodepenerbitans.id', '=', 'pendaftarans.kodepenerbitans_id')->leftJoin('datapengujian','datapengujian.idx','pendaftarans.idx')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->orderBy('pendaftarans.noantrian', 'ASC')->get();

        $path_logoKab = public_path() . '/img/kota.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        $ttd = Ttd::leftjoin('users', 'users.uuid', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();
        $data = [
            'kendaraan' => $data,
            'tglprint' => $tglprint,
            'ttd'     => $ttd,
            'logokab'  => $logokab,
        ];
        $pdf = PDF::loadView('cetak.bulanan.kartu', $data);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream('Laporan Bulanan Kartu.pdf')->header('Content-Type','application/pdf');
    }

    public function printbulananjeniskendaraan($tgl)
    {
        $kode = str_replace("/", "", request()->k);
        switch ($kode) {
            case 1:
                $ket = 'UJI PERTAMA';
                break;
            case 2:
                $ket = 'UJI BERKALA';
                break;
            case 5:
                $ket = 'NUMPANG UJI MASUK';
                break;
            case 6:
                $ket = 'MUTASI MASUK';
                break;
            case 8:
                $ket = 'RUBAH BENTUK';
                break;
            case 9:
                $ket = 'NUMPANG UJI KELUAR';
                break;
            case 10:
                $ket = 'MUTASI KELUAR';
                break;
        }
        $tglcetak = date('Y-m-d', strtotime($tgl));
        $tglcreate = date_create($tgl);
        $bulan = date_format($tglcreate, "m");
        $tahun = date_format($tglcreate, "Y");
        $tglprint = $this->utils->bulan($bulan).' '.$tahun;
        $tgl = Pendaftaran::select('tglpendaftaran')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->groupBy('tglpendaftaran')->where('kodepenerbitans_id',$kode)->get();
        $data = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");
            $kwbusblm = TamanKendaraan::where('tanggal', '<', $dt->tglpendaftaran)->orderBy('tanggal','DESC')->first();
            $kwbu = TamanKendaraan::where('tanggal', $dt->tglpendaftaran)->first();
            if($kwbu){
                $kwbu = $kwbu->total;
            }else{
                $kwbu = '';
            }
            if($kwbusblm){
                $kwbusblm = $kwbusblm->total;
            }else{
                $kwbusblm = '';
            }
            $arr = array(
                'tgl'  => $date,
                'kwbusblm' => $kwbusblm,
                'kwbu' => $kwbu,
                'mobil1' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL PENUMPANG SEDAN')->count(),
                'mobil2' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL PENUMPANG BUKAN SEDAN')->count(),
                'mobil3' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS KECIL')->count(),
                'mobil4' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS SEDANG')->count(),
                'mobil5' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS BESAR')->count(),
                'mobil6' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS MAXI')->count(),
                'mobil7' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS GANDENG')->count(),
                'mobil8' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS TEMPEL')->count(),
                'mobil9' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS TINGKAT')->count(),
                'mobil10' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'PICK UP')->count(),
                'mobil11' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'DOUBLE CABIN')->count(),
                'mobil12' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'LIGHT TRUCK')->count(),
                'mobil13' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'DUMP TRUCK')->count(),
                'mobil14' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'LOST BAK')->count(),
                'mobil15' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'CAR CARRIER')->count(),
                'mobil16' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'PICK UP BOX')->count(),
                'mobil17' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'PICK UP RANGKA')->count(),
                'mobil18' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'LIGHT TRUCK BOX')->count(),
                'mobil19' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'BLIND VAN')->count(),
                'mobil20' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'DELIVERY VAN')->count(),
                'mobil21' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL TANGKI')->count(),
                'mobil22' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL PENARIK')->count(),
                'mobil23' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'KERETA GANDENG BAK TERBUKA')->count(),
                'mobil24' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'KERETA GANDENG BAK TERTUTUP')->count(),
                'mobil25' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'KERETA GANDENG TANGKI')->count(),
                'mobil26' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'KERETA TEMPELAN BAK TERBUKA')->count(),
                'mobil27' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'KERETA TEMPELAN BAK TERTUTUP')->count(),
                'mobil28' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'KERETA TEMPELAN TANGKI')->count(),
                'mobil29' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN BARANG BAK MUATAN TERBUKA')->count(),
                'mobil30' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN BARANG BAK MUATAN TERTUTUP')->count(),
                'mobil31' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN PENUMPANG')->count(),
                'mobil32' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN BARANG TANGKI')->count(),
                'mobil33' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'AMBULANCE')->count(),
                'mobil34' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'DAMKAR')->count(),
                'mobil35' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'ARM ROLL')->count(),
                'mobil36' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'DEREK')->count(),
                'mobil37' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'FLAT DECK')->count(),
                'mobil38' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'MIXER')->count(),
                'mobil39' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id',$kode)->where('model', 'CONCRETEPUMP')->count(),
            );
            array_push($data, $arr);
        };

        $path_logoKab = public_path() . '/img/kota.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        $ttd = Ttd::leftjoin('users', 'users.uuid', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();
        $data = [
            'kendaraan' => $data,
            'tglprint' => $tglprint,
            'ttd'     => $ttd,
            'logokab'  => $logokab,
            'ket' => $ket,
        ];
        $pdf = PDF::loadView('cetak.bulanan.jeniskendaraan', $data);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream('Laporan Bulanan Jenis Kendaraan.pdf')->header('Content-Type','application/pdf');
    }

    //TRIWULAN
    public function printtriwulanpelayanan($tahun)
    {
        $triwulan = str_replace("/", "", request()->t);
        switch ($triwulan) {
            case 1:
                $range = array('1', '2', '3');
                break;
            case 2:
                $range = array('4', '5', '6');
                break;
            case 3:
                $range = array('7', '8', '9');
                break;
            case 4:
                $range = array('10', '11', '12');
                break;
        }
        $tglprint = $triwulan . ' ' . $tahun;
        $data = array();
        foreach ($range as $bulan) {
            $date = $this->utils->bulan($bulan);
            $arr = array(
                'bulan'  => $date,
                'lulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('statuslulusuji', '1')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->count(),
                'tidaklulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('statuslulusuji', '0')->where('kodepenerbitans_id', '!=', '9')->where('kodepenerbitans_id', '!=', '10')->count(),
                'numasuk' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'nukeluar' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '9')->count(),
                'ujiulang' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '7')->count(),
                'mutasikeluar' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'mutasimasuk' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'ujipertama' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id','1')->count(),
                'ujiberkala' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id','2')->count(),
                'rubahbentuk' => Pendaftaran::whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id','8')->count(),
            );
            array_push($data, $arr);
        };

        $path_logoKab = public_path() . '/img/kota.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        $ttd = Ttd::leftjoin('users', 'users.uuid', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();
        $data = [
            'kendaraan' => $data,
            'tglprint' => $tglprint,
            'ttd'     => $ttd,
            'logokab'  => $logokab,
        ];
        $pdf = PDF::loadView('cetak.triwulan.pelayanan', $data);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream('Laporan Triwulan Pelayanan.pdf')->header('Content-Type','application/pdf');
    }

    public function printtriwulankartu($tahun)
    {
        $triwulan = str_replace("/", "", request()->t);
        switch ($triwulan) {
            case 1:
                $range = array('1', '2', '3');
                break;
            case 2:
                $range = array('4', '5', '6');
                break;
            case 3:
                $range = array('7', '8', '9');
                break;
            case 4:
                $range = array('10', '11', '12');
                break;
        }
        $tglprint = $triwulan . ' ' . $tahun;
        $data = array();
        foreach ($range as $bulan) {
            $date = $this->utils->bulan($bulan);
            $arr = array(
                'bulan'  => $date,
                'baru'   => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->whereIn('kodepenerbitans_id', ['1', '2', '5', '6'])->where('rfid_tid', '!=','')->count(),
                'perpanjangan'   => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->where('rfid_tid','')->count(),
                'rusak'  => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '3')->where('rfid_tid', '!=','')->count(),
                'hilang' => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '4')->where('rfid_tid', '!=','')->count(),
            );
            array_push($data, $arr);
        }

        $path_logoKab = public_path() . '/img/kota.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        $ttd = Ttd::leftjoin('users', 'users.uuid', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();
        $data = [
            'kendaraan' => $data,
            'tglprint' => $tglprint,
            'ttd'     => $ttd,
            'logokab'  => $logokab,
        ];
        $pdf = PDF::loadView('cetak.triwulan.kartu', $data);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream('Laporan Triwulan Kartu.pdf')->header('Content-Type','application/pdf');
    }

    public function printtriwulanjeniskendaraan($tahun)
    {
        $kode = str_replace("/", "", request()->k);
        $triwulan = str_replace("/", "", request()->t);
        switch ($kode) {
            case 1:
                $ket = 'UJI PERTAMA';
                break;
            case 2:
                $ket = 'UJI BERKALA';
                break;
            case 5:
                $ket = 'NUMPANG UJI MASUK';
                break;
            case 6:
                $ket = 'MUTASI MASUK';
                break;
            case 8:
                $ket = 'RUBAH BENTUK';
                break;
            case 9:
                $ket = 'NUMPANG UJI KELUAR';
                break;
            case 10:
                $ket = 'MUTASI KELUAR';
                break;
        }
        switch ($triwulan) {
            case 1:
                $range = array('1', '2', '3');
                break;
            case 2:
                $range = array('4', '5', '6');
                break;
            case 3:
                $range = array('7', '8', '9');
                break;
            case 4:
                $range = array('10', '11', '12');
                break;
        }
        $tglprint = $triwulan . ' ' . $tahun;
        $dataKend = array();
        foreach ($range as $bulan) {
            if($bulan == 1){
                $kwbusblm = TamanKendaraan::whereMonth('tanggal', '12')->whereYear('tanggal', (int)$tahun-1)->orderBy('tanggal','DESC')->first();
            }else{
                $kwbusblm = TamanKendaraan::whereMonth('tanggal', $bulan)->whereYear('tanggal', $tahun)->orderBy('tanggal','DESC')->first();
            }
            $kwbu = TamanKendaraan::whereMonth('tanggal', $bulan)->whereYear('tanggal', $tahun)->first();
            if($kwbu){
                $kwbu = $kwbu->total;
            }else{
                $kwbu = '';
            }
            if($kwbusblm){
                $kwbusblm = $kwbusblm->total;
            }else{
                $kwbusblm = '';
            }

            $date = $this->utils->bulan($bulan);
            $arr = array(
                'bulan'  => $date,
                'kwbusblm' => $kwbusblm,
                'kwbu' => $kwbu,
                'mobil1' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL PENUMPANG SEDAN')->count(),
                'mobil2' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL PENUMPANG BUKAN SEDAN')->count(),
                'mobil3' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS KECIL')->count(),
                'mobil4' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS SEDANG')->count(),
                'mobil5' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS BESAR')->count(),
                'mobil6' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS MAXI')->count(),
                'mobil7' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS GANDENG')->count(),
                'mobil8' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS TEMPEL')->count(),
                'mobil9' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL BUS TINGKAT')->count(),
                'mobil10' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'PICK UP')->count(),
                'mobil11' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'DOUBLE CABIN')->count(),
                'mobil12' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'LIGHT TRUCK')->count(),
                'mobil13' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'DUMP TRUCK')->count(),
                'mobil14' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'LOST BAK')->count(),
                'mobil15' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'CAR CARRIER')->count(),
                'mobil16' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'PICK UP BOX')->count(),
                'mobil17' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'PICK UP RANGKA')->count(),
                'mobil18' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'LIGHT TRUCK BOX')->count(),
                'mobil19' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'BLIND VAN')->count(),
                'mobil20' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'DELIVERY VAN')->count(),
                'mobil21' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL TANGKI')->count(),
                'mobil22' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'MOBIL PENARIK')->count(),
                'mobil23' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'KERETA GANDENG BAK TERBUKA')->count(),
                'mobil24' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'KERETA GANDENG BAK TERTUTUP')->count(),
                'mobil25' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'KERETA GANDENG TANGKI')->count(),
                'mobil26' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'KERETA TEMPELAN BAK TERBUKA')->count(),
                'mobil27' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'KERETA TEMPELAN BAK TERTUTUP')->count(),
                'mobil28' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'KERETA TEMPELAN TANGKI')->count(),
                'mobil29' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN BARANG BAK MUATAN TERBUKA')->count(),
                'mobil30' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN BARANG BAK MUATAN TERTUTUP')->count(),
                'mobil31' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN PENUMPANG')->count(),
                'mobil32' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'KENDARAAN BERMOTOR RODA TIGA ANGKUTAN BARANG TANGKI')->count(),
                'mobil33' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'AMBULANCE')->count(),
                'mobil34' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'DAMKAR')->count(),
                'mobil35' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'ARM ROLL')->count(),
                'mobil36' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'DEREK')->count(),
                'mobil37' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'FLAT DECK')->count(),
                'mobil38' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'MIXER')->count(),
                'mobil39' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id',$kode)->where('model', 'CONCRETEPUMP')->count(),
            );
            array_push($dataKend, $arr);
        };

        $path_logoKab = public_path() . '/img/kota.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        $ttd = Ttd::leftjoin('users', 'users.uuid', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();
        $data = [
            'kendaraan' => $dataKend,
            'tglprint' => $tglprint,
            'ttd'     => $ttd,
            'logokab'  => $logokab,
            'ket'   => $ket,
        ];
        dd($dataKend);
        $pdf = PDF::loadView('cetak.triwulan.jeniskendaraan', $data);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream('Laporan Triwulan Jenis Kendaraan.pdf')->header('Content-Type','application/pdf');
    }


}

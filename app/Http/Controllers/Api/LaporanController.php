<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
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
        $lulus      = Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->whereIn('statuspenerbitan', ['1', '2','3','4', '5', '6'])->where('statuslulusuji', '1')->count();
        $tidaklulus = Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->whereIn('statuspenerbitan', ['1', '2','3','4', '5', '6'])->where('statuslulusuji', '0')->count();

        $pemakaianbuku = array(
            'baru'   => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->whereIn('statuspenerbitan', ['1', '2', '5', '6'])->where('rfid_tid', '!=','')->count(),
            'perpanjangan'   => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->where('statuspenerbitan', '2')->where('rfid_tid','')->count(),
            'rusak'  => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->where('statuspenerbitan', '3')->where('rfid_tid', '!=','')->count(),
            'hilang' => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->where('statuspenerbitan', '4')->where('rfid_tid', '!=','')->count(),
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

}

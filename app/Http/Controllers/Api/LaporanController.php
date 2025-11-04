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
        $tglcetak = date('d-m-Y', strtotime($tgl));
        $tglcreate = date_create($tgl);

        $hari = $this->utils->hari(date_format($tglcreate, "D"));

        $tglprint = $hari . ', ' . $tglcetak;

        $kendaraan  = Pendaftaran::select('pendaftarans.notelp','identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan','identitaskendaraans.merek','identitaskendaraans.tipe','identitaskendaraans.thpembuatan','identitaskendaraans.bahanbakar', 'identitaskendaraans.nama','identitaskendaraans.alamat', 'datarfid.statuspenerbitan', 'identitaskendaraans.subjenis', 'datakendaraans.jbb', 'identitaskendaraans.jenis', 'identitaskendaraans.model', 'kodepenerbitans.keterangan', 'laikjalan.statuslulusuji', 'peruntukan', 'datarfid.rfid_tid')->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('kodepenerbitans', 'kodepenerbitans.id', '=', 'pendaftarans.kodepenerbitans_id')->leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->leftJoin('datarfid','datarfid.idx','pendaftarans.idx')->where('tglpendaftaran', $tgl)->orderBy('pendaftaran.noantrian', 'ASC')->get();
        // $umum       = Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('peruntukan', 'Umum')->count();
        // $tidakumum  = Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('peruntukan', 'Tidak Umum')->count();
        // $lulus      = Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->where('statuslulusuji', '1')->count();
        // $tidaklulus = Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->where('statuslulusuji', '0')->count();
        // $mBarang    = Pendaftaran::select(DB::raw("COUNT(model) as total, model"))->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('jenis', 'Mobil Barang')->groupBy('model')->get();

        // $pemakaianbuku = array(
        //     'baru'   => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->whereIn('statuspenerbitan', ['1', '2', '5', '6'])->where('rfid_tid', '!=','')->count(),
        //     'rusak'  => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->where('statuspenerbitan', '3')->where('rfid_tid', '!=','')->count(),
        //     'hilang' => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->where('statuspenerbitan', '4')->where('rfid_tid', '!=','')->count(),
        // );

        // $jeniskendaraan = Jenis::all();
        // $jenispelayanan = kodepenerbitan::all();

        // $totaljenis = array();
        // foreach ($jeniskendaraan as $jenis) {
        //     $arr = array(
        //         'jenis'  => $jenis->jenis,
        //         'jumlah' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('jenis', $jenis->jenis)->count(),
        //     );
        //     array_push($totaljenis, $arr);
        // }

        // $pelayanan = array();
        // foreach ($jenispelayanan as $data) {
        //     $arr = array(
        //         'jenispelayanan'  => $data->keterangan,
        //         'jumlah' => Pendaftaran::leftJoin('kodepenerbitans', 'kodepenerbitans.id', '=', 'pendaftarans.kodepenerbitans_id')->where('tglpendaftaran', $tgl)->where('keterangan', $data->keterangan)->count(),
        //     );
        //     array_push($pelayanan, $arr);
        // }

        // $ttd = Ttd::leftjoin('users', 'users.id', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();

        // return view('cetak.laporanharian', ['kendaraan' => $kendaraan, 'tglprint' => $tglprint, 'umum' => $umum, 'tidakumum' => $tidakumum, 'lulus' => $lulus, 'tidaklulus' => $tidaklulus, 'jenis' => $totaljenis, 'jenispelayanan' => $pelayanan, 'pemakaianbuku' => $pemakaianbuku, 'barang' => $mBarang, 'ttd' => $ttd]);
        
        $path_logoKab = public_path() . '/img/kota.png';
        
        
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        $data = [
            'kendaraan' => $kendaraan,
            'tglprint' => $tglprint, 
            // 'umum'  => $umum,
            // 'tidakumum' => $tidakumum,
            // 'lulus' => $lulus,
            // 'tidaklulus' => $tidaklulus,
            // 'jenis' => $totaljenis,
            // 'jenispelayanan' => $pelayanan,
            // 'pemakaianbuku' => $pemakaianbuku,
            // 'barang' => $mBarang,
            // 'ttd'     => $ttd,
            'logokab'  => $logokab,
        ];
        $pdf = PDF::loadView('cetak.harian.laporan', $data);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream('Laporan Harian.pdf')->header('Content-Type','application/pdf');
    }

}

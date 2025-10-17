<?php

namespace App\Exports\Harian;

use App\Models\Pendaftaran;
use App\Models\Tandatangan;
use App\Models\Jenis;
use App\Models\Kodepenerbitan;
use App\Models\Ttd;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Support\Facades\DB;
class KendaraanExport implements FromView
{
    use Exportable;

    public function __construct(string $tgl)
    {
        $this->tgl = $tgl;
    }

    public function view(): View
    {
        $tglcetak = date('d-m-Y', strtotime($this->tgl));
        $tglcreate = date_create($this->tgl);
        $hari = date_format($tglcreate, "D");

        switch ($hari) {
            case 'Sun':
                $hari_ini = "Minggu";
                break;

            case 'Mon':
                $hari_ini = "Senin";
                break;

            case 'Tue':
                $hari_ini = "Selasa";
                break;

            case 'Wed':
                $hari_ini = "Rabu";
                break;

            case 'Thu':
                $hari_ini = "Kamis";
                break;

            case 'Fri':
                $hari_ini = "Jumat";
                break;

            case 'Sat':
                $hari_ini = "Sabtu";
                break;

            default:
                $hari_ini = "Bukan di ketahui";
                break;
        }

        $tglprint = $hari_ini . ', ' . $tglcetak;

        
        $kendaraan  = Pendaftaran::select('identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan', 'identitaskendaraans.nama', 'datarfid.statuspenerbitan', 'klasifikasis.klasifikasis', 'datakendaraans.jbb', 'identitaskendaraans.jenis', 'identitaskendaraans.model', 'kodepenerbitans.keterangan', 'laikjalan.statuslulusuji', 'peruntukan', 'datarfid.rfid_tid')->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('kodepenerbitans', 'kodepenerbitans.id', '=', 'pendaftarans.kodepenerbitans_id')->leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->leftJoin('klasifikasis', 'klasifikasis.id', '=', 'jenis.klasifikasis_id')->where('tglpendaftaran', $this->tgl)->orderBy('identitaskendaraans.jenis', 'ASC')->get();
        $umum       = Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $this->tgl)->where('peruntukan', 'Umum')->count();
        $tidakumum  = Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $this->tgl)->where('peruntukan', 'Tidak Umum')->count();
        $lulus      = Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $this->tgl)->where('statuslulusuji', '1')->count();
        $tidaklulus = Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $this->tgl)->where('statuslulusuji', '0')->count();
        $mBarang    = Pendaftaran::select(DB::raw("COUNT(model) as total, model"))->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $this->tgl)->where('jenis', 'Mobil Barang')->groupBy('model')->get();

        $pemakaianbuku = array(
            'baru'   => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $this->tgl)->whereIn('statuspenerbitan', ['1', '2', '5', '6'])->where('rfid_tid', '!=', '')->count(),
            'rusak'  => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $this->tgl)->where('statuspenerbitan', '3')->where('rfid_tid', '!=', '')->count(),
            'hilang' => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $this->tgl)->where('statuspenerbitan', '4')->where('rfid_tid', '!=', '')->count(),
        );

        $jeniskendaraan = Jenis::all();
        $jenispelayanan = kodepenerbitan::all();

        $totaljenis = array();
        foreach ($jeniskendaraan as $jenis) {
            $arr = array(
                'jenis'  => $jenis->jenis,
                'jumlah' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $this->tgl)->where('jenis', $jenis->jenis)->count(),
            );
            array_push($totaljenis, $arr);
        }

        $pelayanan = array();
        foreach ($jenispelayanan as $data) {
            $arr = array(
                'jenispelayanan'  => $data->keterangan,
                'jumlah' => Pendaftaran::leftJoin('kodepenerbitans', 'kodepenerbitans.id', '=', 'pendaftarans.kodepenerbitans_id')->where('tglpendaftaran', $this->tgl)->where('keterangan', $data->keterangan)->count(),
            );
            array_push($pelayanan, $arr);
        }

        $ttd = Ttd::leftjoin('users', 'users.id', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();

        return view('exports.harian.kendaraan', ['kendaraan' => $kendaraan, 'tglprint' => $tglprint, 'umum' => $umum, 'tidakumum' => $tidakumum, 'lulus' => $lulus, 'tidaklulus' => $tidaklulus, 'jenis' => $totaljenis, 'jenispelayanan' => $pelayanan, 'pemakaianbuku' => $pemakaianbuku, 'barang' => $mBarang, 'ttd' => $ttd]);
    }
}

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

class LaporanController extends Controller
{
    public function printlaporanharian($tgl)
    {
        $tglcetak = date('d-m-Y', strtotime($tgl));
        $tglcreate = date_create($tgl);
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
                $hari_ini = "Tidak di ketahui";
                break;
        }
        $tglprint = $hari_ini . ', ' . $tglcetak;

        $kendaraan  = Pendaftaran::select('pendaftarans.notelp','identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan', 'identitaskendaraans.nama', 'datarfid.statuspenerbitan', 'klasifikasis.klasifikasis', 'datakendaraans.jbb', 'identitaskendaraans.jenis', 'identitaskendaraans.model', 'kodepenerbitans.keterangan', 'laikjalan.statuslulusuji', 'peruntukan', 'datarfid.rfid_tid')->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('kodepenerbitans', 'kodepenerbitans.id', '=', 'pendaftarans.kodepenerbitans_id')->leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->leftJoin('klasifikasis', 'klasifikasis.id', '=', 'jenis.klasifikasis_id')->leftJoin('datarfid','datarfid.idx','pendaftarans.idx')->where('tglpendaftaran', $tgl)->orderBy('identitaskendaraans.jenis', 'ASC')->get();
        $umum       = Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('peruntukan', 'Umum')->count();
        $tidakumum  = Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('peruntukan', 'Tidak Umum')->count();
        $lulus      = Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->where('statuslulusuji', '1')->count();
        $tidaklulus = Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->where('statuslulusuji', '0')->count();
        $mBarang    = Pendaftaran::select(DB::raw("COUNT(model) as total, model"))->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('jenis', 'Mobil Barang')->groupBy('model')->get();

        $pemakaianbuku = array(
            'baru'   => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->whereIn('statuspenerbitan', ['1', '2', '5', '6'])->where('rfid_tid', '!=','')->count(),
            'rusak'  => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->where('statuspenerbitan', '3')->where('rfid_tid', '!=','')->count(),
            'hilang' => Pendaftaran::leftJoin('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $tgl)->where('statuspenerbitan', '4')->where('rfid_tid', '!=','')->count(),
        );

        $jeniskendaraan = Jenis::all();
        $jenispelayanan = kodepenerbitan::all();

        $totaljenis = array();
        foreach ($jeniskendaraan as $jenis) {
            $arr = array(
                'jenis'  => $jenis->jenis,
                'jumlah' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('jenis', $jenis->jenis)->count(),
            );
            array_push($totaljenis, $arr);
        }

        $pelayanan = array();
        foreach ($jenispelayanan as $data) {
            $arr = array(
                'jenispelayanan'  => $data->keterangan,
                'jumlah' => Pendaftaran::leftJoin('kodepenerbitans', 'kodepenerbitans.id', '=', 'pendaftarans.kodepenerbitans_id')->where('tglpendaftaran', $tgl)->where('keterangan', $data->keterangan)->count(),
            );
            array_push($pelayanan, $arr);
        }

        // $ttd = Ttd::leftjoin('users', 'users.id', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();

        // return view('cetak.laporanharian', ['kendaraan' => $kendaraan, 'tglprint' => $tglprint, 'umum' => $umum, 'tidakumum' => $tidakumum, 'lulus' => $lulus, 'tidaklulus' => $tidaklulus, 'jenis' => $totaljenis, 'jenispelayanan' => $pelayanan, 'pemakaianbuku' => $pemakaianbuku, 'barang' => $mBarang, 'ttd' => $ttd]);
        
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
            'barang' => $mBarang,
            // 'ttd'     => $ttd,
            'logokab'  => $logokab,
        ];
        $pdf = PDF::loadView('cetak.harian.laporan', $data);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream('Laporan Harian.pdf')->header('Content-Type','application/pdf');
    }

    public function printlaporanbulanan($tgl)
    {
        $tglcetak = date_create(date("d-m-Y"));
        $tglcreate = date_create($tgl);
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
                $bulan_ini1 = "Tidak di ketahui";
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
                $bulan_ini = "Tidak di ketahui";
                break;
        }
        $tglprint = $bulan_ini1 . ' ' . $tahun;
        $tglcetak = $hari1 . ' ' . $bulan_ini . ' ' . $tahun1;

        $tgl = Pendaftaran::select('tglpendaftaran')->whereMonth('tglpendaftaran', $bulan)->whereYear('tglpendaftaran', $tahun)->groupBy('tglpendaftaran')->get();
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
                'kwbuuji' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->whereIn('kodepenerbitans_id',['1','2','5','6'])->count(),
                'jumlah' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpang Bukan Sedan'])->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan',  'Mobil Bus Kecil')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang' )->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar' )->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'barangjbb1' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Mobil Barang' . '%')->where('jbb', '<=', 3000)->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'barangjbb2' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Mobil Barang' . '%')->where('jbb', '>', 3000)->where('jbb', '<=', 9000)->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'barangjbb3' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Mobil Barang' . '%')->where('jbb', '>', 9000)->where('jbb', '<=', 15000)->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'barangjbb4' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Mobil Barang' . '%')->where('jbb', '>', 15000)->where('jbb', '<', 21000)->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'barangjbb5' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Mobil Barang' . '%')->where('jbb', '=>', 21000)->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'like', '%' . 'TRACTOR HEAD' . '%')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'lulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('statuslulusuji', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'tidaklulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('statuslulusuji', '0')->where('kodepenerbitans_id', '!=', '9')->where('kodepenerbitans_id', '!=', '10')->count(),
                'numasuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->Where('kodepenerbitans_id', '5')->count(),
                'nukeluar' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'ujiulang' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'mutasikeluar' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'mutasimasuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'lainlain' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereNotIn('jeniskendaraan',['Mobil Penumpang Bukan Sedan','Mobil Penumpang Sedan','Mobil Bus Kecil','Mobil Bus Sedang','Mobil Bus Besar','Kereta Tempelan','Kereta Gandeng'])->whereNotIn('model', ['TRACTOR HEAD','Kereta Tempelan','Kereta Gandeng'])->whereNotIn('klasifikasis_id',['4'])->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'ujipertama' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id','1')->count(),
                'ujiberkala' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id','2')->count(),
            );
            array_push($data, $arr);
        }

        $ttd = Ttd::leftjoin('users', 'users.id', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();

        // return view('cetak.kbwu.bulanan', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data, 'ttd' => $ttd]);
        $path_logoKab = public_path() . '/img/kota.png';
        
        
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        $data = [
            'data' => $data,
            'tglprint' => $tglprint,
            'ttd'     => $ttd,
            'logokab'  => $logokab,
        ];
        $pdf = PDF::loadView('cetak.kbwu.bulanan-pdf', $data);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream('Laporan KWBU Bulanan.pdf')->header('Content-Type','application/pdf');
    }

    public function printlaporantahunan($tgl)
    {
        $tglcetak = date_create(date("d-m-Y"));
        $tglcreate = date_create($tgl);
        $hari = date_format($tglcreate, "d");
        $bulan = date_format($tglcreate, "m");
        $tahun = date_format($tglcreate, "Y");
        $hari1 = date_format($tglcetak, "d");
        $bulan1 = date_format($tglcetak, "m");
        $tahun1 = date_format($tglcetak, "Y");

        switch ($bulan) {
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
                $bulan_ini = "Tidak di ketahui";
                break;
        }
        $tglprint = $tahun;
        $tglcetak = $hari1 . ' ' . $bulan_ini . ' ' . $tahun1;

        $bulan = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
        $data = array();
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }
            if($dt == 1){
                $lsdt = 12;
                $lsthn = (int)$tahun - 1;
            }else{
                $lsdt = (int)$dt - 1;
                $lsthn = $tahun;
            }
            $kwbusblm = TamanKendaraan::whereMonth('tanggal', $lsdt)->whereYear('tanggal', $lsthn)->orderBy('tanggal','DESC')->first();
            $kwbu = TamanKendaraan::whereMonth('tanggal', $dt)->whereYear('tanggal', $tahun)->orderBy('tanggal','DESC')->first();
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
                'tgl'  => $bulan_ini1,
                'kwbusblm' => $kwbusblm,
                'kwbu' => $kwbu,
                'kwbuuji' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->whereIn('kodepenerbitans_id',['1','2','5','6'])->count(),
                'jumlah' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpang Bukan Sedan'])->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan',  'Mobil Bus Kecil')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang' )->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar' )->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'barangjbb1' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Mobil Barang' . '%')->where('jbb', '<', 3000)->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'barangjbb2' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Mobil Barang' . '%')->where('jbb', '>', 3000)->where('jbb', '<', 9000)->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'barangjbb3' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Mobil Barang' . '%')->where('jbb', '>', 9000)->where('jbb', '<', 15000)->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'barangjbb4' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Mobil Barang' . '%')->where('jbb', '>', 15000)->where('jbb', '<', 21000)->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'barangjbb5' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Mobil Barang' . '%')->where('jbb', '>', 21000)->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'like', '%' . 'TRACTOR HEAD' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'lulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('statuslulusuji', '1')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'tidaklulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('statuslulusuji', '0')->where('kodepenerbitans_id', '!=', '9')->where('kodepenerbitans_id', '!=', '10')->count(),
                'numasuk' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->Where('kodepenerbitans_id', '5')->count(),
                'nukeluar' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '9')->count(),
                'ujiulang' => Pendaftaran::where('tglpendaftaran', $dt)->where('kodepenerbitans_id', '7')->count(),
                'mutasikeluar' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'mutasimasuk' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'lainlain' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereNotIn('jeniskendaraan',['Mobil Penumpang Bukan Sedan','Mobil Penumpang Sedan','Mobil Bus Kecil','Mobil Bus Sedang','Mobil Bus Besar','Kereta Tempelan','Kereta Gandeng'])->whereNotIn('model', ['TRACTOR HEAD','Kereta Tempelan','Kereta Gandeng'])->whereNotIn('klasifikasis_id',['4'])->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'ujipertama' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id','1')->count(),
                'ujiberkala' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id','2')->count(),
            );
            array_push($data, $arr);
        }

        $detail = array(
            'penumpangsedan' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan',  'Mobil Penumpang Sedan')->whereIn('statuskendaraan',['0','1'])->count(),
            'penumpangbukansedan' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan',  'Mobil Penumpang Bukan Sedan')->whereIn('statuskendaraan',['0','1'])->count(),
            'buskecil' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan',  'Mobil Bus Kecil')->whereIn('statuskendaraan',['0','1'])->count(),
            'bussedang' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Mobil Bus Sedang')->whereIn('statuskendaraan',['0','1'])->count(),
            'busbesar' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Mobil Bus Besar')->whereIn('statuskendaraan',['0','1'])->count(),
            'busmaxi' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Mobil Bus Maxi')->whereIn('statuskendaraan',['0','1'])->count(),
            'busgandeng' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Mobil Bus Gandeng')->whereIn('statuskendaraan',['0','1'])->count(),
            'bustempel' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Mobil Bus Tempel')->whereIn('statuskendaraan',['0','1'])->count(),
            'bustingkat' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Mobil Bus Tingkat')->whereIn('statuskendaraan',['0','1'])->count(),
            'barangterbuka' => Identitaskendaraan::Join('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Mobil Barang Bak Terbuka')->whereIn('statuskendaraan',['0','1'])->count(),
            'barangtertutup' => Identitaskendaraan::Join('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Mobil Barang Bak Tertutup')->whereIn('statuskendaraan',['0','1'])->count(),
            'tangki' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('model', 'Mobil Tangki')->whereIn('statuskendaraan',['0','1'])->count(),
            'penarik' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Mobil Penarik')->whereIn('statuskendaraan',['0','1'])->count(),
            'gandengterbuka' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Kereta Gandeng Bak Terbuka')->whereIn('statuskendaraan',['0','1'])->count(),
            'gandengtertutup' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Kereta Gandeng Bak Tertutup')->whereIn('statuskendaraan',['0','1'])->count(),
            'gandengtangki' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Kereta Gandeng Tangki')->whereIn('statuskendaraan',['0','1'])->count(),
            'tempelanterbuka' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Kereta Tempelan Bak Terbuka')->whereIn('statuskendaraan',['0','1'])->count(),
            'tempelantertutup' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Kereta Tempelan Bak Tertutup')->whereIn('statuskendaraan',['0','1'])->count(),
            'tempelantangki' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Kereta Tempelan Tangki')->whereIn('statuskendaraan',['0','1'])->count(),
            'roda3terbuka' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Kendaraan Bermotor Roda Tiga Angkutan Barang Bak Muatan Terbuka')->whereIn('statuskendaraan',['0','1'])->count(),
            'roda3tertutup' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Kendaraan Bermotor Roda Tiga Angkutan Barang Bak Muatan Tertutup')->whereIn('statuskendaraan',['0','1'])->count(),
            'roda3penumpang' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Kendaraan Bermotor Roda Tiga Angkutan Penumpang')->whereIn('statuskendaraan',['0','1'])->count(),
            'roda3tangki' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'Kendaraan Bermotor Roda Tiga Angkutan Barang Tangki')->whereIn('statuskendaraan',['0','1'])->count(),
            'khusus' => Identitaskendaraan::leftJoin('jeniskendaraan', 'jeniskendaraan.jenis', '=', 'identitaskendaraans.model')->where('jeniskendaraan', 'KENDARAAN KHUSUS')->whereIn('statuskendaraan',['0','1'])->count(),
        );

        $ttd = Ttd::leftjoin('users', 'users.id', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();

        // return view('cetak.kbwu.tahunan', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data, 'detail' => $detail, 'ttd' => $ttd]);
        $path_logoKab = public_path() . '/img/kota.png';
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        $data = [
            'data' => $data,
            'tglprint' => $tglprint,
            'ttd'     => $ttd,
            'logokab'  => $logokab,
        ];
        $pdf = PDF::loadView('cetak.kbwu.tahunan-pdf', $data);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream('Laporan KWBU Tahunan.pdf')->header('Content-Type','application/pdf');
    }

    public function printlaporanjeniskendaraantahunan($tgl)
    {
        $tglcetak = date_create(date("d-m-Y"));
        $tglcreate = date_create($tgl);
        $hari = date_format($tglcreate, "d");
        $bulan = date_format($tglcreate, "m");
        $tahun = date_format($tglcreate, "Y");
        $hari1 = date_format($tglcetak, "d");
        $bulan1 = date_format($tglcetak, "m");
        $tahun1 = date_format($tglcetak, "Y");

        switch ($bulan) {
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
                $bulan_ini = "Tidak di ketahui";
                break;
        }
        $tglprint = $tahun;
        $tglcetak = $hari1 . ' ' . $bulan_ini . ' ' . $tahun1;

        $data = array();
        $bulan = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }
            $arr = array(
                'tgl'  => $bulan_ini1,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpang Bukan Sedan'])->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan',  'Mobil Bus Kecil')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang' )->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar' )->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi' )->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'LIGHT TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DUMP TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'like', '%' . 'TRACTOR HEAD' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DELIVERY VAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DOUBLE CABIN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BAK CRANE')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'CAR CARREIR')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK TANGKI')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'BLINDVAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRONTON')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'FLAT DECK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
            );
            array_push($data, $arr);
        }

        $dataujipertama = array();
        $bulan = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }
            $arr = array(
                'tgl'  => $bulan_ini1,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '1')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpang Bukan Sedan'])->where('kodepenerbitans_id', '1')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan',  'Mobil Bus Kecil')->where('kodepenerbitans_id', '1')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang' )->where('kodepenerbitans_id', '1')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar' )->where('kodepenerbitans_id', '1')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi' )->where('kodepenerbitans_id', '1')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'LIGHT TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DUMP TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'like', '%' . 'TRACTOR HEAD' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DELIVERY VAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DOUBLE CABIN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BAK CRANE')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'CAR CARREIR')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK TANGKI')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'BLINDVAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRONTON')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'FLAT DECK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '1')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '1')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
            );
            array_push($dataujipertama, $arr);
        }

        $dataujiberkala = array();
        $bulan = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }
            $arr = array(
                'tgl'  => $bulan_ini1,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '2')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpang Bukan Sedan'])->where('kodepenerbitans_id', '2')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan',  'Mobil Bus Kecil')->where('kodepenerbitans_id', '2')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang' )->where('kodepenerbitans_id', '2')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar' )->where('kodepenerbitans_id', '2')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi' )->where('kodepenerbitans_id', '2')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'LIGHT TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DUMP TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'like', '%' . 'TRACTOR HEAD' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DELIVERY VAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DOUBLE CABIN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BAK CRANE')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'CAR CARREIR')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK TANGKI')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'BLINDVAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRONTON')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'FLAT DECK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '2')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '2')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
            );
            array_push($dataujiberkala, $arr);
        }

        $datanumasuk = array();
        $bulan = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }
            $arr = array(
                'tgl'  => $bulan_ini1,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '5')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpang Bukan Sedan'])->where('kodepenerbitans_id', '5')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan',  'Mobil Bus Kecil')->where('kodepenerbitans_id', '5')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang' )->where('kodepenerbitans_id', '5')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar' )->where('kodepenerbitans_id', '5')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi' )->where('kodepenerbitans_id', '5')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'LIGHT TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DUMP TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'like', '%' . 'TRACTOR HEAD' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DELIVERY VAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DOUBLE CABIN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BAK CRANE')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'CAR CARREIR')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK TANGKI')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'BLINDVAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRONTON')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'FLAT DECK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '5')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '5')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
            );
            array_push($datanumasuk, $arr);
        }

        $datanukeluar = array();
        $bulan = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }
            $arr = array(
                'tgl'  => $bulan_ini1,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpang Bukan Sedan'])->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan',  'Mobil Bus Kecil')->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang' )->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar' )->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi' )->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'LIGHT TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DUMP TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'like', '%' . 'TRACTOR HEAD' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DELIVERY VAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DOUBLE CABIN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BAK CRANE')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'CAR CARREIR')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK TANGKI')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'BLINDVAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRONTON')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'FLAT DECK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
            );
            array_push($datanukeluar, $arr);
        }

        $datamutasimasuk = array();
        $bulan = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }
            $arr = array(
                'tgl'  => $bulan_ini1,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpang Bukan Sedan'])->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan',  'Mobil Bus Kecil')->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang' )->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar' )->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi' )->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'LIGHT TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DUMP TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'like', '%' . 'TRACTOR HEAD' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DELIVERY VAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DOUBLE CABIN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BAK CRANE')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'CAR CARREIR')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK TANGKI')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'BLINDVAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRONTON')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'FLAT DECK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '6')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
            );
            array_push($datamutasimasuk, $arr);
        }

        $datamutasikeluar = array();
        $bulan = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }
            $arr = array(
                'tgl'  => $bulan_ini1,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpang Bukan Sedan'])->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan',  'Mobil Bus Kecil')->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang' )->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar' )->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi' )->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'LIGHT TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DUMP TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'like', '%' . 'TRACTOR HEAD' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DELIVERY VAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DOUBLE CABIN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BAK CRANE')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'CAR CARREIR')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK TANGKI')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'BLINDVAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRONTON')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'FLAT DECK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
            );
            array_push($datamutasikeluar, $arr);
        }

        $dataujiulang = array();
        $bulan = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }
            $arr = array(
                'tgl'  => $bulan_ini1,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '7')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpang Bukan Sedan'])->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan',  'Mobil Bus Kecil')->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang' )->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar' )->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi' )->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'LIGHT TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DUMP TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'like', '%' . 'TRACTOR HEAD' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DELIVERY VAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DOUBLE CABIN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BAK CRANE')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'CAR CARREIR')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK TANGKI')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'BLINDVAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRONTON')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'FLAT DECK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
            );
            array_push($dataujiulang, $arr);
        }

        $datarubahbentuk = array();
        $bulan = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }
            $arr = array(
                'tgl'  => $bulan_ini1,
                'kbwu' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('kodepenerbitans_id', '8')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpang Bukan Sedan'])->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'buskecil' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan',  'Mobil Bus Kecil')->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'bussedang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Sedang' )->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busbesar' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Besar' )->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'busmaxi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'Mobil Bus Maxi' )->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'pickup' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'pickupbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'PICK UP BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'truck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'lighttruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'LIGHT TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'dumptruck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DUMP TRUCK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'truckbox' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BOX')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'traktorhead' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'like', '%' . 'TRACTOR HEAD' . '%')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'deliveryvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DELIVERY VAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'doublecabin' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'DOUBLE CABIN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'truckbakcrane' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK BAK CRANE')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'carcarrier' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'CAR CARREIR')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'trucktangki' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRUCK TANGKI')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'blindvan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'BLINDVAN')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'tronton' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'TRONTON')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'flatdeck' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('jenis', 'FLAT DECK')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'keretatempelan' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Tempelan' . '%')->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'keretagandeng' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->where('jeniskendaraan', 'like', '%' . 'Kereta Gandeng' . '%')->where('kodepenerbitans_id', '10')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
            );
            array_push($datarubahbentuk, $arr);
        }

        $ttd = Ttd::leftjoin('users', 'users.id', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();

        return view('cetak.jeniskendaraan.tahunan', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data, 'dataujipertama' => $dataujipertama, 'dataujiberkala' => $dataujiberkala, 'datanumasuk' => $datanumasuk, 'datanukeluar' => $datanukeluar, 'datamutasimasuk' => $datamutasimasuk, 'datamutasikeluar' => $datamutasikeluar, 'dataujiulang' => $dataujiulang, 'datarubahbentuk' => $datarubahbentuk, 'ttd' => $ttd]);
    }

    public function printlaporanjenispelayananbulanan($tgl)
    {
        $tglcetak = date_create(date("d-m-Y"));
        $tglcreate = date_create($tgl);
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
                $bulan_ini1 = "Tidak di ketahui";
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
                $bulan_ini = "Tidak di ketahui";
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
                'jumlah' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '!=', '7')->count(),
                'jumlahtotal' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'ujipertama' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'ujiberkala' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'rubahbentuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '8')->count(),
                'ujiulang' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'lulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('statuslulusuji', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
                'tidaklulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('statuslulusuji', '0')->count(),
                'numasuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'nukeluar' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'mutasikeluar' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
                'mutasimasuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
                'baru'   => Pendaftaran::Join('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $dt->tglpendaftaran)->whereIn('statuspenerbitan', ['1', '2', '5', '6'])->where('rfid_tid', '!=','')->count(),
                'lama'   => Pendaftaran::Join('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $dt->tglpendaftaran)->whereIn('statuspenerbitan', ['1', '2', '5', '6'])->where('rfid_tid','')->count(),
                'rusak'  => Pendaftaran::Join('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $dt->tglpendaftaran)->where('statuspenerbitan', '3')->where('rfid_tid', '!=','')->count(),
                'hilang' => Pendaftaran::Join('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->where('tglpendaftaran', $dt->tglpendaftaran)->where('statuspenerbitan', '4')->where('rfid_tid', '!=','')->count(),
        );
            array_push($data, $arr);
        }

        $data1 = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");

            $arr = array(
                'tgl'  => $date,
                'jumlah' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '!=', '7')->count(),
                'ujipertama' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '1')->count(),
                'ujiberkala' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '2')->count(),
                'rubahbentuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '8')->count(),
                'lulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('statuslulusuji', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '!=', '7')->count(),
                'tidaklulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('statuslulusuji', '0')->where('kodepenerbitans_id', '!=', '7')->count(),
                'numasuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '5')->count(),
                'mutasimasuk' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '6')->count(),
            );
            array_push($data1, $arr);
        }

        $data2 = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");

            $arr = array(
                'tgl'  => $date,
                'jumlah' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->whereIn('kodepenerbitans_id', ['9','10'])->count(),
                'nukeluar' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '9')->count(),
                'mutasikeluar' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '10')->count(),
            );
            array_push($data2, $arr);
        }


        $data3 = array();
        foreach ($tgl as $dt) {
            $date = date_create($dt->tglpendaftaran);
            $date = date_format($date, "d-m-Y");
            $arr = array(
                'tgl'  => $date,
                'jumlah' => Pendaftaran::where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'lulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('statuslulusuji', '1')->where('tglpendaftaran', $dt->tglpendaftaran)->where('kodepenerbitans_id', '7')->count(),
                'tidaklulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $dt->tglpendaftaran)->where('statuslulusuji', '0')->where('kodepenerbitans_id', '7')->count(),
            );
            array_push($data3, $arr);
        }

        // $ttd = Ttd::leftjoin('users', 'users.id', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();
        // $ttddinas = Kepaladinas::first();

        // return view('cetak.jenispelayanan.bulanan', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data, 'data1' => $data1, 'data2' => $data2, 'data3' => $data3, 'ttd' => $ttd, 'ttddinas' => $ttddinas]);
        $path_logoKab = public_path() . '/img/kota.png';
        
        
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        
        $data = [
            'data' => $data,
            'data1' => $data1,
            'data2' => $data2,
            'data3' => $data3,
            // 'ttd'     => $ttd,
            'tglprint' => $tglprint, 
            'tglcetak' => $tglcetak, 
            'logokab'  => $logokab,
            
        ];
        $pdf = PDF::loadView('cetak.jenispelayanan.bulanan-pdf', $data);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream('Laporan Jenis Pelayanan Bulanan.pdf')->header('Content-Type','application/pdf');
    }

    public function printlaporanjenispelayanantahunan($tgl)
    {
        $tglcetak = date_create(date("d-m-Y"));
        $tglcreate = date_create($tgl);
        $hari = date_format($tglcreate, "d");
        $bulan = date_format($tglcreate, "m");
        $tahun = date_format($tglcreate, "Y");
        $hari1 = date_format($tglcetak, "d");
        $bulan1 = date_format($tglcetak, "m");
        $tahun1 = date_format($tglcetak, "Y");

        switch ($bulan) {
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
                $bulan_ini = "Tidak di ketahui";
                break;
        }
        $tglprint = $tahun;
        $tglcetak = $hari1 . ' ' . $bulan_ini . ' ' . $tahun1;

        $data = array();
        $bulan = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }
            $arr = array(
                'tgl'  => $bulan_ini1,
                'jumlah' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '!=', '7')->count(),
                'jumlahtotal' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'ujipertama' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'ujiberkala' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'rubahbentuk' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '8')->count(),
                'ujiulang' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '7')->count(),
                'lulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('statuslulusuji', '1')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
                'tidaklulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('statuslulusuji', '0')->count(),
                'numasuk' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'nukeluar' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '9')->count(),
                'mutasikeluar' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
                'mutasimasuk' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
                'baru'   => Pendaftaran::Join('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->whereIn('statuspenerbitan', ['1', '2', '5', '6'])->where('rfid_tid', '!=','')->count(),
                'lama'   => Pendaftaran::Join('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->whereIn('statuspenerbitan', ['1', '2', '5', '6'])->where('rfid_tid','')->count(),
                'rusak'  => Pendaftaran::Join('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('statuspenerbitan', '3')->where('rfid_tid', '!=','')->count(),
                'hilang' => Pendaftaran::Join('datarfid', 'datarfid.idx', '=', 'pendaftarans.idx')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('statuspenerbitan', '4')->where('rfid_tid', '!=','')->count(),
            );
            array_push($data, $arr);
        }

        $data1 = array();
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }

            $arr = array(
                'tgl'  => $bulan_ini1,
                'jumlah' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '!=', '7')->count(),
                'ujipertama' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '1')->count(),
                'ujiberkala' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '2')->count(),
                'rubahbentuk' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '8')->count(),
                'lulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('statuslulusuji', '1')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '!=', '7')->count(),
                'tidaklulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('statuslulusuji', '0')->where('kodepenerbitans_id', '!=', '7')->count(),
                'numasuk' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '5')->count(),
                'mutasimasuk' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '6')->count(),
            );
            array_push($data1, $arr);
        }

        $data2 = array();
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }

            $arr = array(
                'tgl'  => $bulan_ini1,
                'jumlah' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '9')->orWhere('kodepenerbitans_id', '10')->count(),
                'nukeluar' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '9')->count(),
                'mutasikeluar' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '10')->count(),
            );
            array_push($data2, $arr);
        }

        $data3 = array();
        foreach ($bulan as $dt) {
            switch ($dt) {
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
                    $bulan_ini1 = "Tidak di ketahui";
                    break;
            }

            $arr = array(
                'tgl'  => $bulan_ini1,
                'jumlah' => Pendaftaran::whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '7')->count(),
                'lulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->where('statuslulusuji', '1')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('kodepenerbitans_id', '7')->count(),
                'tidaklulus' => Pendaftaran::leftJoin('laikjalan', 'laikjalan.pendaftaran_id', '=', 'pendaftarans.id')->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->where('statuslulusuji', '0')->where('kodepenerbitans_id', '7')->count(),
            );
            array_push($data3, $arr);
        }

        // $ttd = Ttd::leftjoin('users', 'users.id', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();
        // $ttddinas = Kepaladinas::first();

        // return view('cetak.jenispelayanan.tahunan', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data, 'data1' => $data1, 'data2' => $data2, 'data3' => $data3, 'ttd' => $ttd, 'ttddinas' => $ttddinas]);
        $path_logoKab = public_path() . '/img/kota.png';
        
        
        $logokab = 'data:image/png'. ';base64,' . base64_encode(file_get_contents($path_logoKab));
        
        $data = [
            'data' => $data,
            'data1' => $data1,
            'data2' => $data2,
            'data3' => $data3,
            // 'ttd'     => $ttd,
            'tglprint' => $tglprint, 
            'tglcetak' => $tglcetak, 
            'logokab'  => $logokab,
            
        ];
        $pdf = PDF::loadView('cetak.jenispelayanan.tahunan-pdf', $data);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream('Laporan Jenis Pelayanan Tahunan.pdf')->header('Content-Type','application/pdf');
    }

    public function printlaporankeuanganharian($tgl)
    {
        $tglcetak = date('d-m-Y', strtotime($tgl));
        $tglcreate = date_create($tgl);
        $hari = date_format($tglcreate, "D");
        $bulan = date_format($tglcreate, "m");
        $tahun = date_format($tglcreate, "Y");
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
                $hari_ini = "Tidak di ketahui";
                break;
        }
        $tglprint = $hari_ini . ', ' . $tglcetak;

        $kendaraan  = Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('kodepenerbitans', 'kodepenerbitans.id', '=', 'pendaftarans.kodepenerbitans_id')->rightJoin('transaksis', 'transaksis.pendaftaran_id', '=', 'pendaftarans.id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->leftJoin('klasifikasis', 'klasifikasis.id', '=', 'jenis.klasifikasis_id')->where('tglpendaftaran', $tgl)->orderBy('identitaskendaraans.jenis', 'ASC')->get();

        $umum       = Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('peruntukan', 'Umum')->count();
        $tidakumum  = Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('tglpendaftaran', $tgl)->where('peruntukan', 'Tidak Umum')->count();
        $jeniskendaraan = Jenis::all();
        $jenispelayanan = kodepenerbitan::all();

        $totaljenis = array();
        foreach ($jeniskendaraan as $jenis) {
            $arr = array(
                'jenis'     => $jenis->jenis,
                'jumlah'    => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->rightJoin('transaksis', 'transaksis.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->where('jenis', $jenis->jenis)->count(),
                'umum'      => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->rightJoin('transaksis', 'transaksis.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->where('peruntukan', 'Umum')->where('jenis', $jenis->jenis)->count(),
                'tidakumum' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->rightJoin('transaksis', 'transaksis.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->where('peruntukan', 'Tidak Umum')->where('jenis', $jenis->jenis)->count(),
                'retribusi' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->rightJoin('transaksis', 'transaksis.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->where('jenis', $jenis->jenis)->sum('retribusi'),
            );
            array_push($totaljenis, $arr);
        }

        $pelayanan = array();
        foreach ($jenispelayanan as $data) {
            $arr = array(
                'jenispelayanan'  => $data->keterangan,
                'jumlah' => Pendaftaran::leftJoin('kodepenerbitans', 'kodepenerbitans.id', '=', 'pendaftarans.kodepenerbitans_id')->rightJoin('transaksis', 'transaksis.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->where('keterangan', $data->keterangan)->count(),
            );
            array_push($pelayanan, $arr);
        }

        $pemakaianbuku = array(
            'baru'   => Pendaftaran::rightJoin('transaksis', 'transaksis.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->where('ketbuku', 'Kartu Uji Baru')->count(),
            'rusak'  => Pendaftaran::rightJoin('transaksis', 'transaksis.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->where('ketbuku', 'Kartu Uji Rusak')->count(),
            'hilang' => Pendaftaran::rightJoin('transaksis', 'transaksis.pendaftaran_id', '=', 'pendaftarans.id')->where('tglpendaftaran', $tgl)->where('ketbuku', 'Kartu Uji Hilang')->count(),
        );
        $stiker = '0';
        $platuji = '0';

        $ttd = Ttd::leftjoin('users', 'users.id', 'tandatangan.user_id')->where('tandatangan.name', 'Laporan')->first();
        $ttdb = Ttd::leftjoin('users', 'users.id', 'tandatangan.user_id')->where('jabatan', 'Pembantu Bendahara Penerimaan')->first();

        return view('cetak.laporankeuanganharian_print', ['kendaraan' => $kendaraan, 'tglprint' => $tglprint, 'jenis' => $totaljenis, 'jmlstiker' => $stiker, 'jenispelayanan' => $pelayanan, 'pemakaianbuku' => $pemakaianbuku, 'totplatuji' => $platuji, 'ttd' => $ttd, 'ttdb' => $ttdb]);
    }


    protected function getsifatbulan($bulan, $jenis)
    {
        $sifat = array("UMUM", "TIDAK UMUM", "PEMERINTAH");
        $totalsifat = array();
        foreach ($sifat as $list) {
            $arr = array(
                'sifat'        => $list,
                'thlalu'       => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->leftJoin('klasifikasis', 'klasifikasis.id', '=', 'jenis.klasifikasis_id')->whereMonth('tglpendaftaran', $bulan - 1)->where('klasifikasis.klasifikasis', $jenis)->where('peruntukan', $list)->count(),
                'ujipertama'   => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->leftJoin('klasifikasis', 'klasifikasis.id', '=', 'jenis.klasifikasis_id')->whereMonth('tglpendaftaran', $bulan)->where('klasifikasis.klasifikasis', $jenis)->where('kodepenerbitans_id', '1')->where('peruntukan', $list)->count(),
                'berubahjenis' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->leftJoin('klasifikasis', 'klasifikasis.id', '=', 'jenis.klasifikasis_id')->whereMonth('tglpendaftaran', $bulan)->where('klasifikasis.klasifikasis', $jenis)->where('kodepenerbitans_id', '8')->where('peruntukan', $list)->count(),
                'berubahsifat' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->leftJoin('klasifikasis', 'klasifikasis.id', '=', 'jenis.klasifikasis_id')->whereMonth('tglpendaftaran', $bulan)->where('klasifikasis.klasifikasis', $jenis)->where('kodepenerbitans_id', '11')->where('peruntukan', $list)->count(),
                'mutasimasuk'  => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->leftJoin('klasifikasis', 'klasifikasis.id', '=', 'jenis.klasifikasis_id')->whereMonth('tglpendaftaran', $bulan)->where('klasifikasis.klasifikasis', $jenis)->where('kodepenerbitans_id', '6')->where('peruntukan', $list)->count(),
                'numpangujikeluar'   => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->leftJoin('klasifikasis', 'klasifikasis.id', '=', 'jenis.klasifikasis_id')->whereMonth('tglpendaftaran', $bulan)->where('klasifikasis.klasifikasis', $jenis)->where('kodepenerbitans_id', '6')->where('peruntukan', $list)->count(),
                'berubahjeniskeluar' => '0',
                'berubahsifatkeluar' => '0',
                'mutasikeluar'       => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->leftJoin('klasifikasis', 'klasifikasis.id', '=', 'jenis.klasifikasis_id')->whereMonth('tglpendaftaran', $bulan)->where('klasifikasis.klasifikasis', $jenis)->where('kodepenerbitans_id', '10')->where('peruntukan', $list)->count(),
                'afkirkeluar'        => '0',
            );
            array_push($totalsifat, $arr);
        }

        return $totalsifat;
    }
}

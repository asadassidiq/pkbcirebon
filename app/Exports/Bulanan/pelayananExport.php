<?php

namespace App\Exports\Bulanan;

use App\Models\Pendaftaran;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class pelayananExport implements FromView
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

        return view('exports.bulanan.pelayanan', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data, 'data1' => $data1, 'data2' => $data2, 'data3' => $data3]);
    }
}

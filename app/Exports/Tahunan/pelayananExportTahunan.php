<?php

namespace App\Exports\Tahunan;

use App\Models\Pendaftaran;
use App\Models\Tandatangan;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class pelayananExportTahunan implements FromView
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

        return view('exports.tahunan.pelayanan', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data, 'data1' => $data1, 'data2' => $data2, 'data3' => $data3]);
    }
}

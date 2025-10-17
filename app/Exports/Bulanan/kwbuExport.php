<?php

namespace App\Exports\Bulanan;

use App\Models\Pendaftaran;
use App\Models\TamanKendaraan;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class kwbuExport implements FromView
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
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpanb Bukan Sedan'])->where('tglpendaftaran', $dt->tglpendaftaran)->count(),
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


        return view('exports.bulanan.kwbu', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data]);
    }
}

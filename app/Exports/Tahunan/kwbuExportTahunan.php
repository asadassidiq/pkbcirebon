<?php

namespace App\Exports\Tahunan;

use App\Models\Pendaftaran;
use App\Models\Identitaskendaraan;
use App\Models\TamanKendaraan;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class kwbuExportTahunan implements FromView
{
    use Exportable;
    protected $tgl;

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
                'mobilpenumpang' => Pendaftaran::leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('jenis', 'jenis.jenis', '=', 'identitaskendaraans.jenis')->whereIn('jeniskendaraan', ['Mobil Penumpang Sedan','Mobil Penumpanb Bukan Sedan'])->whereMonth('tglpendaftaran', $dt)->whereYear('tglpendaftaran', $tahun)->count(),
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

        return view('exports.tahunan.kwbu', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'data' => $data, 'detail' => $detail]);
    }
}

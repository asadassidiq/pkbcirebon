<?php

namespace App\Exports\Tahunan;

use App\Models\Pendaftaran;
use App\Models\Tandatangan;
use App\Models\TamanKendaraan;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class tahunanv1Export implements FromView
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
        $data = array();
        $kendaraan = Pendaftaran::select('pendaftarans.id','pendaftarans.identitaskendaraan_id','nouji','noregistrasikendaraan','nama','alamat','merek','tipe','thpembuatan','jenis','model','konfigurasisumburoda','norangka','jbb','peruntukan')->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->whereYear('tglpendaftaran', $this->tgl)->groupBy('nouji')->get();
        foreach($kendaraan as $dt){
            $check = Pendaftaran::select('masaberlakuuji','kodepenerbitans_id')->leftJoin('laikjalan','laikjalan.pendaftaran_id','pendaftarans.id')->where('idx','>','0')->where('pendaftarans.identitaskendaraan_id',$dt->identitaskendaraan_id)->orderBy('tglpendaftaran','DESC')->first();
            if($check){
                $masaberlakuuji = $check['masaberlakuuji'];
                if(strlen($masaberlakuuji)==8){
                    $masaberlakuuji = substr($masaberlakuuji,0,2).'-'.substr($masaberlakuuji,2,2).'-'.substr($masaberlakuuji,4,4);
                }
                if($check->kodepenerbitans_id == '2'){
                    $kartu = 'Lama';
                }else{
                    $kartu = 'Baru';
                }
            }
            $arr = array(
                'nouji'           => $dt->nouji,
                'noregistrasikendaraan' => $dt->noregistrasikendaraan,
                'nama'            => $dt->nama,
                'alamat'          => $dt->alamat,
                'merek'           => $dt->merek,
                'tipe'            => $dt->tipe,
                'thpembuatan'     => $dt->thpembuatan,
                'jenis'           => $dt->jenis,
                'model'           => $dt->model,
                'konfigurasisumburoda'     => $dt->konfigurasisumburoda,
                'norangka'        => $dt->norangka,
                'peruntukan'      => $dt->peruntukan,
                'jbb'             => $dt->jbb,
                'masaberlakuuji' => $masaberlakuuji,
                'kartu'           => $kartu,
            );
            array_push($data, $arr);
        }
        return view('exports.tahunan.tahunanv1', ['tglprint' => $tglprint, 'tglcetak' => $tglcetak, 'kendaraan' => $data]);
    }
}

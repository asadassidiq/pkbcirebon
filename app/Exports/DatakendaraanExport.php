<?php

namespace App\Exports;

use App\Models\Identitaskendaraan;
use App\Models\Tandatangan;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class DatakendaraanExport implements FromView
{
    use Exportable;

    public function __construct(int $page)
    {
        $this->page = $page;
    }

    public function view(): View
    {
        $tglcetak = date('d-m-Y');
        $hari = date("D");
 
        switch($hari){
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

        $tglprint = $hari_ini.', '.$tglcetak;

        if($this->page == 1){
            $kendaraan  = Identitaskendaraan::select('identitaskendaraans.id as idd','nouji', 'nama', 'alamat', 'noidentitaspemilik', 'nohp', 'noidentitaspemilik', 'noregistrasikendaraan', 'merek', 'nosertifikatreg', 'tglsertifikatreg', 'rancang', 'tipe', 'norangka', 'nomesin', 'thpembuatan', 'bahanbakar', 'isisilinder', 'dayamotorpenggerak', 'jenis', 'model', 'peruntukan', 'warna', 'idkepaladinas', 'iddirektur', 'kodewilayah', 'kodewilayahasal','jbb', 'jbkb', 'jbi', 'jbki', 'mst', 'konfigurasisumburoda', 'ukuranban', 'panjangkendaraan', 'lebarkendaraan', 'tinggikendaraan', 'panjangbakatautangki', 'lebarbakatautangki', 'tinggibakatautangki', 'jaraksumbu1_2', 'jaraksumbu2_3', 'jaraksumbu3_4', 'q', 'p', 'r', 'dayaangkutorang', 'dayaangkutbarang', 'kelasjalanterendah', 'julurdepan', 'julurbelakang', 'groundclearance', 'beratkosong', 'beratsumbu1', 'beratsumbu2', 'beratsumbu3', 'beratsumbu4', 'posisinomeruji', 'catatanrubahbentuk', 'bahan',DB::raw("(select tglpendaftaran from pendaftarans where identitaskendaraan_id = idd and status = 1 order by pendaftarans.id ASC Limit 1 ) as tglpertama"),DB::raw("(select tglpendaftaran from pendaftarans where identitaskendaraan_id = idd and idx is not null order by pendaftarans.id DESC Limit 1 ) as tgluji"))
            ->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')
            ->groupBy('identitaskendaraans.nouji')->limit(2000)->get();
        }elseif($this->page == 2){
            $kendaraan  = Identitaskendaraan::select('identitaskendaraans.id as idd','nouji', 'nama', 'alamat', 'noidentitaspemilik', 'nohp', 'noidentitaspemilik', 'noregistrasikendaraan', 'merek', 'nosertifikatreg', 'tglsertifikatreg', 'rancang', 'tipe', 'norangka', 'nomesin', 'thpembuatan', 'bahanbakar', 'isisilinder', 'dayamotorpenggerak', 'jenis', 'model', 'peruntukan', 'warna', 'idkepaladinas', 'iddirektur', 'kodewilayah', 'kodewilayahasal','jbb', 'jbkb', 'jbi', 'jbki', 'mst', 'konfigurasisumburoda', 'ukuranban', 'panjangkendaraan', 'lebarkendaraan', 'tinggikendaraan', 'panjangbakatautangki', 'lebarbakatautangki', 'tinggibakatautangki', 'jaraksumbu1_2', 'jaraksumbu2_3', 'jaraksumbu3_4', 'q', 'p', 'r', 'dayaangkutorang', 'dayaangkutbarang', 'kelasjalanterendah', 'julurdepan', 'julurbelakang', 'groundclearance', 'beratkosong', 'beratsumbu1', 'beratsumbu2', 'beratsumbu3', 'beratsumbu4', 'posisinomeruji', 'catatanrubahbentuk', 'bahan',DB::raw("(select tglpendaftaran from pendaftarans where identitaskendaraan_id = idd and status = 1 order by pendaftarans.id ASC Limit 1 ) as tglpertama"),DB::raw("(select tglpendaftaran from pendaftarans where identitaskendaraan_id = idd and idx is not null order by pendaftarans.id DESC Limit 1 ) as tgluji"))
            ->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')
            ->groupBy('identitaskendaraans.nouji')->skip(2000)->take(2000)->get();
        }elseif($this->page == 3){
            $kendaraan  = Identitaskendaraan::select('identitaskendaraans.id as idd','nouji', 'nama', 'alamat', 'noidentitaspemilik', 'nohp', 'noidentitaspemilik', 'noregistrasikendaraan', 'merek', 'nosertifikatreg', 'tglsertifikatreg', 'rancang', 'tipe', 'norangka', 'nomesin', 'thpembuatan', 'bahanbakar', 'isisilinder', 'dayamotorpenggerak', 'jenis', 'model', 'peruntukan', 'warna', 'idkepaladinas', 'iddirektur', 'kodewilayah', 'kodewilayahasal','jbb', 'jbkb', 'jbi', 'jbki', 'mst', 'konfigurasisumburoda', 'ukuranban', 'panjangkendaraan', 'lebarkendaraan', 'tinggikendaraan', 'panjangbakatautangki', 'lebarbakatautangki', 'tinggibakatautangki', 'jaraksumbu1_2', 'jaraksumbu2_3', 'jaraksumbu3_4', 'q', 'p', 'r', 'dayaangkutorang', 'dayaangkutbarang', 'kelasjalanterendah', 'julurdepan', 'julurbelakang', 'groundclearance', 'beratkosong', 'beratsumbu1', 'beratsumbu2', 'beratsumbu3', 'beratsumbu4', 'posisinomeruji', 'catatanrubahbentuk', 'bahan',DB::raw("(select tglpendaftaran from pendaftarans where identitaskendaraan_id = idd and status = 1 order by pendaftarans.id ASC Limit 1 ) as tglpertama"),DB::raw("(select tglpendaftaran from pendaftarans where identitaskendaraan_id = idd and idx is not null order by pendaftarans.id DESC Limit 1 ) as tgluji"))
            ->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')
            ->groupBy('identitaskendaraans.nouji')->skip(4000)->take(2000)->get();
        }elseif($this->page == 4){
            $kendaraan  = Identitaskendaraan::select('identitaskendaraans.id as idd','nouji', 'nama', 'alamat', 'noidentitaspemilik', 'nohp', 'noidentitaspemilik', 'noregistrasikendaraan', 'merek', 'nosertifikatreg', 'tglsertifikatreg', 'rancang', 'tipe', 'norangka', 'nomesin', 'thpembuatan', 'bahanbakar', 'isisilinder', 'dayamotorpenggerak', 'jenis', 'model', 'peruntukan', 'warna', 'idkepaladinas', 'iddirektur', 'kodewilayah', 'kodewilayahasal','jbb', 'jbkb', 'jbi', 'jbki', 'mst', 'konfigurasisumburoda', 'ukuranban', 'panjangkendaraan', 'lebarkendaraan', 'tinggikendaraan', 'panjangbakatautangki', 'lebarbakatautangki', 'tinggibakatautangki', 'jaraksumbu1_2', 'jaraksumbu2_3', 'jaraksumbu3_4', 'q', 'p', 'r', 'dayaangkutorang', 'dayaangkutbarang', 'kelasjalanterendah', 'julurdepan', 'julurbelakang', 'groundclearance', 'beratkosong', 'beratsumbu1', 'beratsumbu2', 'beratsumbu3', 'beratsumbu4', 'posisinomeruji', 'catatanrubahbentuk', 'bahan',DB::raw("(select tglpendaftaran from pendaftarans where identitaskendaraan_id = idd and status = 1 order by pendaftarans.id ASC Limit 1 ) as tglpertama"),DB::raw("(select tglpendaftaran from pendaftarans where identitaskendaraan_id = idd and idx is not null order by pendaftarans.id DESC Limit 1 ) as tgluji"))
            ->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')
            ->groupBy('identitaskendaraans.nouji')->skip(6000)->take(2000)->get();
        }elseif($this->page == 5){
            $kendaraan  = Identitaskendaraan::select('identitaskendaraans.id as idd','nouji', 'nama', 'alamat', 'noidentitaspemilik', 'nohp', 'noidentitaspemilik', 'noregistrasikendaraan', 'merek', 'nosertifikatreg', 'tglsertifikatreg', 'rancang', 'tipe', 'norangka', 'nomesin', 'thpembuatan', 'bahanbakar', 'isisilinder', 'dayamotorpenggerak', 'jenis', 'model', 'peruntukan', 'warna', 'idkepaladinas', 'iddirektur', 'kodewilayah', 'kodewilayahasal','jbb', 'jbkb', 'jbi', 'jbki', 'mst', 'konfigurasisumburoda', 'ukuranban', 'panjangkendaraan', 'lebarkendaraan', 'tinggikendaraan', 'panjangbakatautangki', 'lebarbakatautangki', 'tinggibakatautangki', 'jaraksumbu1_2', 'jaraksumbu2_3', 'jaraksumbu3_4', 'q', 'p', 'r', 'dayaangkutorang', 'dayaangkutbarang', 'kelasjalanterendah', 'julurdepan', 'julurbelakang', 'groundclearance', 'beratkosong', 'beratsumbu1', 'beratsumbu2', 'beratsumbu3', 'beratsumbu4', 'posisinomeruji', 'catatanrubahbentuk', 'bahan',DB::raw("(select tglpendaftaran from pendaftarans where identitaskendaraan_id = idd and status = 1 order by pendaftarans.id ASC Limit 1 ) as tglpertama"),DB::raw("(select tglpendaftaran from pendaftarans where identitaskendaraan_id = idd and idx is not null order by pendaftarans.id DESC Limit 1 ) as tgluji"))
            ->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')
            ->groupBy('identitaskendaraans.nouji')->skip(8000)->take(2000)->get();
        }else{
            $kendaraan  = Identitaskendaraan::select('identitaskendaraans.id as idd','nouji', 'nama', 'alamat', 'noidentitaspemilik', 'nohp', 'noidentitaspemilik', 'noregistrasikendaraan', 'merek', 'nosertifikatreg', 'tglsertifikatreg', 'rancang', 'tipe', 'norangka', 'nomesin', 'thpembuatan', 'bahanbakar', 'isisilinder', 'dayamotorpenggerak', 'jenis', 'model', 'peruntukan', 'warna', 'idkepaladinas', 'iddirektur', 'kodewilayah', 'kodewilayahasal','jbb', 'jbkb', 'jbi', 'jbki', 'mst', 'konfigurasisumburoda', 'ukuranban', 'panjangkendaraan', 'lebarkendaraan', 'tinggikendaraan', 'panjangbakatautangki', 'lebarbakatautangki', 'tinggibakatautangki', 'jaraksumbu1_2', 'jaraksumbu2_3', 'jaraksumbu3_4', 'q', 'p', 'r', 'dayaangkutorang', 'dayaangkutbarang', 'kelasjalanterendah', 'julurdepan', 'julurbelakang', 'groundclearance', 'beratkosong', 'beratsumbu1', 'beratsumbu2', 'beratsumbu3', 'beratsumbu4', 'posisinomeruji', 'catatanrubahbentuk', 'bahan',DB::raw("(select tglpendaftaran from pendaftarans where identitaskendaraan_id = idd and status = 1 order by pendaftarans.id ASC Limit 1 ) as tglpertama"),DB::raw("(select tglpendaftaran from pendaftarans where identitaskendaraan_id = idd and idx is not null order by pendaftarans.id DESC Limit 1 ) as tgluji"))
            ->leftJoin('datakendaraans','datakendaraans.identitaskendaraan_id','=','identitaskendaraans.id')
            ->groupBy('identitaskendaraans.nouji')->limit(2000)->get();
        }

        return view('exports.datakendaraan', ['kendaraan' => $kendaraan,'tglprint' => $tglprint,'page' => $this->page]);
    }
}

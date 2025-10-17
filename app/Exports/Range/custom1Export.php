<?php

namespace App\Exports\Range;

use App\Models\Pendaftaran;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class custom1Export implements FromView
{
    use Exportable;

    public function __construct(string $tgl1,string $tgl2,string $jenispendaftaran, string $jeniskendaraan, string $peruntukan, int $jbb, string $kota, string $kec, string $kel)
    {
        $this->tgl1 = $tgl1;
        $this->tgl2 = $tgl2;
        $this->jenispendaftaran = $jenispendaftaran;
        $this->jeniskendaraan = $jeniskendaraan;
        $this->peruntukan = $peruntukan;
        $this->jbb = $jbb;
        $this->kota = $kota;
        $this->kec = $kec;
        $this->kel = $kel;
    }

    public function view(): View
    {
        $tglcetak = date('d-m-Y');
        $hari = date("D");

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
        if($this->tgl1 == '0'){
            $tglcetak1 = '';
        }else{
            $tglcetak1 = date_format(date_create($this->tgl1), "d-m-Y");            
        }
        if($this->tgl2 == '0'){
            $tglcetak2 = '';
        }else{
            $tglcetak2 = date_format(date_create($this->tgl2), "d-m-Y");
        }


        $kendaraan = Pendaftaran::select('pendaftarans.tglpendaftaran', 'kodepenerbitans.keterangan', 'identitaskendaraans.nouji', 'identitaskendaraans.noregistrasikendaraan', 'identitaskendaraans.nama', 'identitaskendaraans.alamat', 'identitaskendaraans.jenis', 'identitaskendaraans.model', 'datakendaraans.jbb', 'identitaskendaraans.peruntukan')->leftJoin('identitaskendaraans', 'pendaftarans.identitaskendaraan_id', '=', 'identitaskendaraans.id')->leftJoin('datakendaraans', 'datakendaraans.identitaskendaraan_id', 'identitaskendaraans.id')->leftJoin('kodepenerbitans', 'kodepenerbitans.id', 'pendaftarans.kodepenerbitans_id');
        if($this->jenispendaftaran == '0' )
        {
        }
        elseif ($this->jenispendaftaran != '' || $this->jenispendaftaran != '0' || !empty($this->jenispendaftaran)) {
            $kendaraan = $kendaraan->where('pendaftarans.kodepenerbitans_id', $this->jenispendaftaran);
        }

        if($this->jeniskendaraan == '0' )
        {
        }
        elseif ($this->jeniskendaraan != '' || $this->jeniskendaraan != '0' || !empty($this->jeniskendaraan)) {
            $kendaraan = $kendaraan->where('identitaskendaraans.jenis', $this->jeniskendaraan);
        }
        if($this->peruntukan == '0' )
        {
        }
        elseif ($this->peruntukan != '' || $this->peruntukan != '0' || !empty($this->peruntukan)) {
            $kendaraan = $kendaraan->where('identitaskendaraans.peruntukan', $this->peruntukan);
        }

        if($this->jbb == '0' )
        {
        }
        elseif ($this->jbb != '' || $this->jbb != '0' || !empty($this->jbb)) {
            if ($this->jbb == '1') {
                $kendaraan = $kendaraan->where('datakendaraans.jbb', '<=', '3000');
            } elseif ($this->jbb == '2') {
                $kendaraan = $kendaraan->where('datakendaraans.jbb', '>=', '3001')->where('datakendaraans.jbb', '<=', '9000');
            } elseif ($this->jbb == '3') {
                $kendaraan = $kendaraan->where('datakendaraans.jbb', '>=', '9001')->where('datakendaraans.jbb', '<=', '15000');
            } elseif ($this->jbb == '4') {
                $kendaraan = $kendaraan->where('datakendaraans.jbb', '>=', '15001')->where('datakendaraans.jbb', '<=', '21000');
            } elseif ($this->jbb == '5') {
                $kendaraan = $kendaraan->where('datakendaraans.jbb', '>=', '21001');
            }
        }
        if ($this->kota == '0') {
            
        }else{
            $kendaraan = $kendaraan->where('identitaskendaraans.kota', $this->kota);
        }
        if ($this->kec == '0') {
            
        }else{
            $kendaraan = $kendaraan->where('identitaskendaraans.kecamatan', $this->kec);
        }
        if ($this->kel == '0') {
            
        }else{
            $kendaraan = $kendaraan->where('identitaskendaraans.kelurahan', $this->kel);
        }

        if($this->tgl1 == '0' && $this->tgl2 == '0' ){
            $kendaraan = $kendaraan->orderBy('pendaftarans.tglpendaftaran', 'ASC');
        }elseif($this->tgl1 == '0'){
            $kendaraan = $kendaraan->where('pendaftarans.tglpendaftaran', $this->tgl1)->orderBy('pendaftarans.tglpendaftaran', 'ASC');
        }else{
            $kendaraan = $kendaraan->whereBetween('pendaftarans.tglpendaftaran', [$this->tgl1, $this->tgl2])->orderBy('pendaftarans.tglpendaftaran', 'ASC');
        }

        return view('exports.custom1', ['data' => $kendaraan->get(), 'tglprint' => $tglprint]);
    }
}
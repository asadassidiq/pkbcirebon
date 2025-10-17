<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\PendaftaranService;
use App\Models\Pendaftaran;
use App\Models\Identitaskendaraan;
use App\Models\Datakendaraan;
use Mike42\Escpos\PrintConnectors\FilePrintConnector;
use Mike42\Escpos\PrintConnectors\WindowsPrintConnector;
use Mike42\Escpos\Printer;

class AntrianController extends Controller
{
    use apiJsonReturnTrait;
    protected $pendaftaranService;

    public function __construct(PendaftaranService $pendaftaranService)
    {
        $this->pendaftaranService = $pendaftaranService;
    }
    public function index()
    {
        $data = $this->pendaftaranService->getAntrian();
        return $this->returnJson($data);
    }

    public function getPendaftaran($id)
    {
        $data = $this->pendaftaranService->getPendaftaran($id);
        return $this->returnJson($data);
    }

    public function setNoAntrian($id){
        $no = Pendaftaran::select('noantrian')->where('tglpendaftaran',date("Y-m-d"))->orderBy('noantrian','DESC')->first();
        if($no){
            $no = (int)$no->noantrian+(int)1;
        }else{
            $no = 1;
        }

        if($no > 0){
            $pend = Pendaftaran::find($id);
            if($pend){
                if($pend->tglpendaftaran == date("Y-m-d")){
                    if($pend->noantrian){

                    }else{
                        $pend->noantrian = $no;
                        $pend->foto = '0';
                        $pend->save();
                    }
                }else{
                    $no = null;
                }
            }
        }

        // $connector = new WindowsPrintConnector("smb://ALTESCO109001/EPSON");
        // $printer = new Printer($connector);
        //     $printer -> setJustification(Printer::JUSTIFY_CENTER);
        //     $printer -> setTextSize(1,2);
        //     $printer -> text("DISHUB KAB.GUNUNGKIDUL\n");
        //     $printer -> setTextSize(1,1);
        //     $printer -> text("No. Antrian\n");
        //     $printer -> text("\n");
        //     $printer -> cut();
        //     $printer -> close();

        return $no;
    }

    public function update(Request $request, $id)
    {
        $data = Pendaftaran::where('identitaskendaraan_id',$id)->orderBy('tglpendaftaran', 'DESC')->first();
        if($data){
            if($data->kodepenerbitans_id == 1 && $request->kodepenerbitans_id == 2){
                if(!empty($request->nouji)){
                    $iden = Identitaskendaraan::where('nouji',$request->nouji)->first();
                    if($iden){
                        $data->tglpendaftaran          = $request->tglpendaftaran;
                        $data->kodepenerbitans_id      = $request->kodepenerbitans_id;
                        $data->identitaskendaraan_id   = $iden->id;
                        $data->save();

                        if($data){
                            $del = Identitaskendaraan::find($id);
                            $del->delete();
                            $del2 = Datakendaraan::where('identitaskendaraan_id',$id)->first();
                            $del2->delete();
                        }
                    }
                }
            }elseif ($data->kodepenerbitans_id != $request->kodepenerbitans_id) {
                if($request->kodepenerbitans_id == 5 || $request->kodepenerbitans_id == 6){
                    $pend = Pendaftaran::where('identitaskendaraan_id',$id)->orderBy('tglpendaftaran', 'DESC')->first();
                    if($pend){
                        $pend->tglpendaftaran       = $request->tglpendaftaran;
                        $pend->kodepenerbitans_id   = $request->kodepenerbitans_id;
                        $pend->save();
                    }

                    if (is_array($request->kodewilayah)) {
                        $kodewilayah = $request->kodewilayah['kodewilayah'];
                    }else{
                        $kodewilayah = $request->kodewilayah;
                    }

                    $iden = Identitaskendaraan::where('id',$id)->first();
                    if($iden){
                        $iden->kodewilayahasal = $kodewilayah;
                        $iden->save();
                    }
                }
            }else{
                $pend = Pendaftaran::where('identitaskendaraan_id',$id)->orderBy('tglpendaftaran', 'DESC')->first();
                    if($pend){
                        $pend->tglpendaftaran       = $request->tglpendaftaran;
                        $pend->kodepenerbitans_id   = $request->kodepenerbitans_id;
                        $pend->save();
                    }
            }
        }
        // $data = $request->jenispendaftaran;
        return $this->returnJson($pend, 'Pendaftaran Updated');
    }

    public function cetak($id)
    {
        $kendaraan = $this->pendaftaranService->getPendaftaran($id);
        return view('cetak.permohonan', compact('kendaraan'));
    }
}

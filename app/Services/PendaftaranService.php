<?php

namespace App\Services;

use App\Models\Datakendaraan;
use App\Models\Identitaskendaraan;
use App\Repositories\PendaftaranRepository;
use App\Repositories\PengujianRepository;
use App\Repositories\SuratRepository;
use App\Repositories\IdentitaskendaraanRepository;
use App\Repositories\DatakendaraanRepository;
use App\Traits\apiJsonReturnTrait;

class PendaftaranService
{
    protected $repoPendaftaran,$repoPengujian,$repoSurat,$repoIden,$repoDatakendaraan;
    use apiJsonReturnTrait;

    public function __construct(PendaftaranRepository $repoPendaftaran, PengujianRepository $repoPengujian, SuratRepository $repoSurat, IdentitaskendaraanRepository $repoIden, DatakendaraanRepository $repoDatakendaraan)
    {
        $this->repoPendaftaran = $repoPendaftaran;
        $this->repoPengujian = $repoPengujian;
        $this->repoSurat = $repoSurat;
        $this->repoIden = $repoIden;
        $this->repoDatakendaraan = $repoDatakendaraan;
    }

    public function getAllPendaftaran()
    {
        return $this->repoPendaftaran->getAll();
    }

    public function getMonitoring(){
        return $this->repoPendaftaran->getMonitoring();
    }

    public function getAllPenyerahan(){
        return $this->repoPendaftaran->getAllPenyerahan();
    }

    public function getAntrian(){
        return $this->repoPendaftaran->getAntrian();
    }

    public function getOnline(){
        return $this->repoPendaftaran->getOnline();
    }

    public function getPendaftaran($id)
    {
        return $this->repoPendaftaran->getPendaftaran($id);
    }

    public function getPendaftaranDetail()
    {
        return $this->repoPendaftaran->getPendaftaranDetail();
    }

    public function approveOnline($id)
    {
        return $this->repoPendaftaran->approveOnline($id);
    }

    public function getPendaftaranid($id,$tgl)
    {
        return $this->repoPendaftaran->getPendaftaranid($id,$tgl);
    }

    public function create($request)
    {
        $user = auth()->user();
        $statusPengujian = true;
        $statusDatakendaraan = false;
        $statusPendaftaran = false;
        $tglpendaftaran = date_create($request->tglpendaftaran);
        $tglpendaftaran = date_format($tglpendaftaran, "Y-m-d");
        $checkData = $this->repoIden->checkNouji($request->nouji);
        if($request->kodepenerbitans_id == 1){
            if($checkData === true){
                return $this->error(false,'no uji sudah dipakai kendaraan lain','',422);
            }
            $checkNorangka = $this->repoIden->checkNorangka($request->nouji,$request->norangka);
            if($checkNorangka === true){
                return $this->error(false,'no rangka sudah dipakai kendaraan lain','',422);
            }
            $dataIden = $this->repoIden->createIdentitaskendaraan($request->all());
            if($dataIden){
                $request->merge([
                    'identitaskendaraan_id'     => $dataIden->id,
                ]);
                $dataKendaraan = $this->repoDatakendaraan->createDatakendaraan($request->all());
                $statusDatakendaraan = true;
            }else{
                $statusDatakendaraan = false;
            }
        }
        elseif($request->kodepenerbitans_id == 5 || $request->kodepenerbitans_id == 6){
            $checkNorangka = $this->repoIden->checkNorangka($request->nouji,$request->norangka);
            if($checkData === true){
                if($checkNorangka === false){
                    $dataUUID = $this->repoIden->getUUID($request->nouji);
                    $dataIden = $this->repoIden->updateIdentitaskendaraan($request,$dataUUID->uuid);
                    if($dataIden){
                        $dataKendaraan = $this->repoDatakendaraan->updateDatakendaraan($request,$dataIden->id);
                        $statusDatakendaraan = true;
                    }
                }else{
                    return $this->error(false,'no rangka sudah dipakai kendaraan lain','',422);
                }
            }else{
                if($checkNorangka === true){
                    return $this->error(false,'no rangka sudah dipakai kendaraan lain','',422);
                }
                $dataIden = $this->repoIden->createIdentitaskendaraan($request->all());
                if($dataIden){
                    $request->merge([
                        'identitaskendaraan_id'     => $dataIden->id,
                    ]);
                    $dataKendaraan = $this->repoDatakendaraan->createDatakendaraan($request->all());
                    $statusDatakendaraan = true;
                }else{
                    $statusDatakendaraan = false;
                }
            }
        }
        elseif($request->kodepenerbitans_id == 3 || $request->kodepenerbitans_id == 4 || $request->kodepenerbitans_id == 7){
            if($checkData === false){
                return $this->error(false,'data kendaraan tidak ditemukan','',422);
            }
            $dataUUID = $this->repoIden->getUUID($request->nouji);
            $checkUji = $this->repoPengujian->checkPengujian($dataUUID->id);
            if($checkUji !== true){
                return $this->error(false,$checkUji,'',422);
            }
            $checkNorangka = $this->repoIden->checkNorangka($request->nouji,$request->norangka);
            if($checkNorangka === false){
                $dataIden = $this->repoIden->updateIdentitaskendaraan($request,$dataUUID->uuid);
                if($dataIden){
                    $dataKendaraan = $this->repoDatakendaraan->updateDatakendaraan($request,$dataIden->id);
                    $statusDatakendaraan = true;
                }
            }else{
                return $this->error(false,'no rangka sudah dipakai kendaraan lain','',422);
            }
        }
        else{
            $checkNorangka = $this->repoIden->checkNorangka($request->nouji,$request->norangka);
            if($checkNorangka === false){
                $dataUUID = $this->repoIden->getUUID($request->nouji);
                if($dataUUID === null){
                    $dataIden = $this->repoIden->createIdentitaskendaraan($request->all());
                    if($dataIden){
                        $request->merge([
                            'identitaskendaraan_id'     => $dataIden->id,
                        ]);
                        $dataKendaraan = $this->repoDatakendaraan->createDatakendaraan($request->all());
                        $statusDatakendaraan = true;
                    }else{
                        $statusDatakendaraan = false;
                    }
                }
                $dataIden = $this->repoIden->updateIdentitaskendaraan($request,$dataUUID->uuid);
                if($dataIden){
                    $dataKendaraan = $this->repoDatakendaraan->updateDatakendaraan($request,$dataIden->id);
                    $statusDatakendaraan = true;
                }
            }else{
                return $this->error(false,'no rangka sudah dipakai kendaraan lain','',422);
            }
        }

        if($statusDatakendaraan){
            $checkP = $this->repoPendaftaran->getPendaftaranid($dataIden->id, $request->tglpendaftaran);
            if($checkP && $request->kodepenerbitans_id != '3' && $request->kodepenerbitans_id != '4'){
                // $request->merge([
                //     'user_id'                   => $user['id'],
                // ]);
                $dataP = $this->repoPendaftaran->updatePendaftaran($checkP->uuid, $request);
            }else{
                if ($request->kodepenerbitans_id == '3' || $request->kodepenerbitans_id == '4') {
                    $request->merge([
                        'foto'                      => '1',
                        'posisi'                    => '9',
                        'identitaskendaraan_id'     => $dataIden['id'],
                    ]);
                }  elseif ($request->kodepenerbitans_id == '9' || $request->kodepenerbitans_id == '10') {
                    $request->merge([
                        'foto'                      => null,
                        'posisi'                    => '9',
                        'identitaskendaraan_id'     => $dataIden['id'],
                    ]);
                } elseif ($request->kodepenerbitans_id == '7') {
                    $request->merge([
                        'foto'                      => '1',
                        // 'posisi'                    => '1',
                        'identitaskendaraan_id'     => $dataIden['id'],
                    ]);
                } else {
                    $request->merge([
                        'foto'                      => '0',
                        'posisi'                    => '1',
                        'identitaskendaraan_id'     => $dataIden['id'],
                    ]);
                }
                
                $request->merge([
                    'tglpendaftaran'            => $tglpendaftaran,
                    'status'                    => '1',
                    'verif'                     => '1',
                    'jenispendaftaran'          => 'off',
                    'user_id'                   => $user['id'],
                ]);
                $dataP = $this->repoPendaftaran->createPendaftaran($request->all());
            }

            if($dataP){
                $statusPendaftaran = true;
                if ($request->kodepenerbitans_id == '3') {
                    $pengujian = $this->repoPengujian->setCopyPengujian($dataP['id']);
                    if (!$pengujian) {
                        $statusPengujian = false;
                    }
                } elseif ($request->kodepenerbitans_id == '4') {
                    $pengujian = $this->repoPengujian->setCopyPengujian($dataP['id']);
                    if (!$pengujian) {
                        $statusPengujian = false;
                    }
                }  elseif ($request->kodepenerbitans_id == '7') {
                    $pengujian = $this->repoPengujian->setCopyPengujian($dataP['id']);
                    if (!$pengujian) {
                        $statusPengujian = false;
                    }
                } 
                else if ($request->kodepenerbitans_id == '5' || $request->kodepenerbitans_id == '9' || $request->kodepenerbitans_id == '6' || $request->kodepenerbitans_id == '10') {
                    $checkNu = $this->repoSurat->checkSurat($dataP['id']);
                    if($checkNu){
                        if($request->kodepenerbitans_id == '5' || $request->kodepenerbitans_id == '6'){
                            $request->merge([
                                'kode'     => $request->kodewilayahasal,
                            ]);
                        }else{
                            $request->merge([
                                'kode'     => $request->kodewilayah,
                            ]);
                        }
                        $this->repoSurat->updateSurat($dataP['id'],$request);
                    }else{
                        if($request->kodepenerbitans_id == '5' || $request->kodepenerbitans_id == '6'){
                        $request->merge([
                                'pendaftaran_id'     => $dataP['id'],
                                'kode'     => $request->kodewilayahasal,
                            ]);
                        }else{
                            $request->merge([
                                'pendaftaran_id'     => $dataP['id'],
                                'kode'     => $request->kodewilayah,
                            ]);
                        }
                        $this->repoSurat->createSurat($request->all());
                    }
                }
            }
        }

        if($statusDatakendaraan == true && $statusPendaftaran == true){
            return $this->success(true,'Success Create','',200);
        }elseif($statusDatakendaraan == true && $statusPendaftaran == false){
            return $this->error(false,'ada error di Form Pendaftaran','',422);
        }elseif($checkNorangka === true){
            return $this->error(false,'No rangka sudah dipakai kendaraan lain','',422);
        }elseif($checkData === true){
            return $this->error(false,'No uji sudah dipakai kendaraan lain','',422);
        }elseif($statusPengujian === false){
            return $this->error(false,'Data Pengujian sebelum nya tidak berlaku karena lebih dari 3 bulan','',422);
        }else{
            return $this->error(false,'something errors','',422);
        }

        return $this->error(false,'something errors','',422);
    }

    public function update($request, $id)
    {
        $user = auth()->user();
        $statusDatakendaraan = false;
        $statusPendaftaran = false;
        $tglpendaftaran = date_create($request->tglpendaftaran);
        $tglpendaftaran = date_format($tglpendaftaran, "Y-m-d");
        $request->merge([
            'tglpendaftaran'            => $tglpendaftaran,
            'jenispendaftaran'          => 'off',
            // 'user_id'                   => $user['id'],
        ]);
        $dataP = $this->repoPendaftaran->updatePendaftaran($id, $request);

        if($dataP){
            $statusPendaftaran = true;
            if ($request->kodepenerbitans_id == '5' || $request->kodepenerbitans_id == '9' || $request->kodepenerbitans_id == '6' || $request->kodepenerbitans_id == '10') {
                $checkNu = $this->repoSurat->checkSurat($dataP['id']);
                if($checkNu){
                    if($request->kodepenerbitans_id == '5' || $request->kodepenerbitans_id == '6'){
                        $request->merge([
                            'kode'     => $request->kodewilayahasal,
                        ]);
                    }else{
                        $request->merge([
                            'kode'     => $request->kodewilayah,
                        ]);
                    }
                    $this->repoSurat->updateSurat($dataP['id'],$request);
                }else{
                    if($request->kodepenerbitans_id == '5' || $request->kodepenerbitans_id == '6'){
                        $request->merge([
                            'pendaftaran_id'     => $dataP['id'],
                            'kode'     => $request->kodewilayahasal,
                        ]);
                    }else{
                        $request->merge([
                            'pendaftaran_id'     => $dataP['id'],
                            'kode'     => $request->kodewilayah,
                        ]);
                    }
                    $this->repoSurat->createSurat($request->all());
                }
            }
        }

        // $checkNorangka = $this->repoIden->checkNorangka($request->nouji,$request->norangka);
        // $checkData = $this->repoIden->checkNouji($request->nouji);
        // if($checkNorangka === false && $checkData === false){
            $dataUUID = $this->repoIden->getUUID($request->nouji);
            $dataIden = $this->repoIden->updateIdentitaskendaraan($request,$dataUUID->uuid);
            if($dataIden){
                $dataKendaraan = $this->repoDatakendaraan->updateDatakendaraan($request,$dataUUID->id);
                $statusDatakendaraan = true;
            }
        // }

        if($statusDatakendaraan == true && $statusPendaftaran == true){
            return $this->success(true,'Success Create','',200);
        }elseif($statusDatakendaraan == true && $statusPendaftaran == false){
            return $this->error(false,'ada error di Form Pendaftaran','',422);
        }elseif($statusDatakendaraan === false){
            return $this->error(false,'Datakendaraan error','',422);
        }elseif($statusPendaftaran === false){
            return $this->error(false,'Pendaftaran error','',422);
        }else{
            return $this->error(false,'something errors','',422);
        }
        return $this->returnData(false,'something errorsa','');
    }

    public function create2($request)
    {
        $user = auth()->user();
        $statusPengujian = true;
        $statusDatakendaraan = false;
        $statusPendaftaran = false;
        $tglpendaftaran = date_create($request->tglpendaftaran);
        $tglpendaftaran = date_format($tglpendaftaran, "Y-m-d");
        $checkData = $this->repoIden->checkNouji($request->nouji);
        if($checkData === false){
            $request->merge([
                    'statuskendaraan'     => '4',
                ]);
            $dataIden = $this->repoIden->createIdentitaskendaraan($request->all());
            if($dataIden){
                $request->merge([
                    'identitaskendaraan_id'     => $dataIden->id,
                ]);
                // $dataKendaraan = $this->repoDatakendaraan->createDatakendaraan($request->all());
                $statusDatakendaraan = true;
                // return $this->returnData(true,'Success Create Pendaftaran',$dataKendaraan);
            }
        }else{
                $dataUUID = $this->repoIden->getUUID($request->nouji);
                $dataIden = $this->repoIden->updateIdentitaskendaraan($request,$dataUUID->uuid);
                if($dataIden){
                    // $dataKendaraan = $this->repoDatakendaraan->updateDatakendaraan($request,$dataIden->id);
                    $statusDatakendaraan = true;
                }
        }

        if($statusDatakendaraan){
            $checkP = $this->repoPendaftaran->getPendaftaranid($dataIden->id, $request->tglpendaftaran);
            if($checkP){
                $dataP = $this->repoPendaftaran->updatePendaftaran($checkP->uuid, $request);
            }else{
                if ($request->kodepenerbitans_id == '11') {
                    $request->merge([
                        'foto'                      => null,
                        'posisi'                    => '5',
                        'jenispendaftaran'          => 'off',
                        'identitaskendaraan_id'     => $dataIden['id'],
                    ]);
                } 
                else {
                    $request->merge([
                        'foto'                      => null,
                        'posisi'                    => '5',
                        'jenispendaftaran'          => 'off',
                        'identitaskendaraan_id'     => $dataIden['id'],
                    ]);
                }
                
                $request->merge([
                    'tglpendaftaran'            => $tglpendaftaran,
                    'status'                    => '1',
                    'verif'                     => '1',
                    'jenispendaftaran'          => 'off',
                    'user_id'                   => $user['id'],
                ]);
                $dataP = $this->repoPendaftaran->createPendaftaran($request->all());
            }

            if($dataP){
                $statusPendaftaran = true;
                if ($request->kodepenerbitans_id == '11' || $request->kodepenerbitans_id == '12') {
                    $checkSurat = $this->repoSurat->getPendaftaran($dataP['id']);
                    if($checkSurat){
                        $this->repoSurat->updateSurat($dataP['id'],$request);
                    }else{
                        $request->merge([
                            'pendaftaran_id'     => $dataP['id'],
                        ]);
                        $this->repoSurat->createSurat($request->all());
                    }
                }
            }
        }

        if($statusDatakendaraan == true && $statusPendaftaran == true){
            return $this->success(true,'Success Create',$dataP,200);
        }elseif($statusDatakendaraan == true && $statusPendaftaran == false){
            return $this->error(false,'ada error di Form Pendaftaran','',422);
        }else{
            return $this->error(false,'something errors','',422);
        }
        return $this->error(false,'something error','',422);
    }


    public function ulangiFoto($id){
        return $this->repoPendaftaran->ulangiFoto($id);
    }

    public function delete($id)
    {
        return $this->repoPendaftaran->deletePendaftaran($id);
    }

    public function getPenyerahan($id)
    {
        return $this->repoPendaftaran->getPenyerahan($id);
    }

    public function createPenyerahan($request,$id)
    {
        $check = $this->repoPendaftaran->checkPenyerahan($id);
        if($check){
            $data = $this->repoPendaftaran->updatePenyerahan($check['id'],$request->all());
        }else{        
            $idP = $this->repoPendaftaran->getIdPendaftaran($id);
            if($idP)
            {
                $request->merge([
                    'pendaftaran_id'  => $idP['id'],
                ]);
                $data = $this->repoPendaftaran->createPenyerahan($request->all());
            }
        }
        return $data;
    }

}

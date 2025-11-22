<?php

namespace App\Services;

use App\Models\Datakendaraan;
use App\Models\Identitaskendaraan;
use App\Repositories\PendaftaranRepository;
use App\Repositories\PengujianRepository;
use App\Repositories\PerizinanRepository;
use App\Repositories\SuratRepository;
use App\Repositories\IdentitaskendaraanRepository;
use App\Repositories\DatakendaraanRepository;
use App\Traits\apiJsonReturnTrait;
use App\Utils;
use App\Traits\CryptHelper;

class PendaftaranService
{
    protected $repoPendaftaran,$repoPengujian,$repoSurat,$repoIden,$repoDatakendaraan,$repoPerizinan;
    use apiJsonReturnTrait;
    private $utils;

    public function __construct(PendaftaranRepository $repoPendaftaran, PengujianRepository $repoPengujian, SuratRepository $repoSurat, IdentitaskendaraanRepository $repoIden, DatakendaraanRepository $repoDatakendaraan, PerizinanRepository $repoPerizinan)
    {
        $this->repoPendaftaran = $repoPendaftaran;
        $this->repoPengujian = $repoPengujian;
        $this->repoSurat = $repoSurat;
        $this->repoIden = $repoIden;
        $this->repoDatakendaraan = $repoDatakendaraan;
        $this->repoPerizinan = $repoPerizinan;
        $this->utils = new Utils();
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
        $pendaftaran = $request->input('pendaftaran', []);
        $perubahans  = $request->input('perubahans', []);
        
        //dd($pendaftaran['tglpendaftaran']);
        $statusPengujian = true;
        $statusDatakendaraan = false;
        $statusPendaftaran = false;
        $tglpendaftaran = date_create($pendaftaran['tglpendaftaran']);
        $tglpendaftaran = date_format($tglpendaftaran, "Y-m-d");
        $checkData = $this->repoIden->checkNouji($pendaftaran['nouji']);
        if($pendaftaran['kodepenerbitans_id'] == 1){
            if($checkData === true){
                return $this->error(false,'no uji sudah dipakai kendaraan lain','',422);
            }
            $checkNorangka = $this->repoIden->checkNorangka($pendaftaran['nouji'],$pendaftaran['norangka']);
            if($checkNorangka === true){
                return $this->error(false,'no rangka sudah dipakai kendaraan lain','',422);
            }
            $dataIden = $this->repoIden->createIdentitaskendaraan($pendaftaran);
            if($dataIden){
                $pendaftaran['identitaskendaraan_id'] = $dataIden->id;
                $dataKendaraan = $this->repoDatakendaraan->createDatakendaraan($pendaftaran);
                $statusDatakendaraan = true;
            }else{
                $statusDatakendaraan = false;
            }
        }
        elseif($pendaftaran['kodepenerbitans_id'] == 5 || $pendaftaran['kodepenerbitans_id'] == 6){
            $checkNorangka = $this->repoIden->checkNorangka($pendaftaran['nouji'],$pendaftaran['norangka']);
            if($checkData === true){
                if($checkNorangka === false){
                    $dataUUID = $this->repoIden->getUUID($pendaftaran['nouji']);
                    $dataIden = $this->repoIden->updateIdentitaskendaraan($pendaftaran,$dataUUID->uuid);
                    if($dataIden){
                        $dataKendaraan = $this->repoDatakendaraan->updateDatakendaraan($pendaftaran,$dataIden->id);
                        $statusDatakendaraan = true;
                    }
                }else{
                    return $this->error(false,'no rangka sudah dipakai kendaraan lain','',422);
                }
            }else{
                if($checkNorangka === true){
                    return $this->error(false,'no rangka sudah dipakai kendaraan lain','',422);
                }
                $dataIden = $this->repoIden->createIdentitaskendaraan($pendaftaran);
                if($dataIden){
                    $pendaftaran['identitaskendaraan_id'] = $dataIden->id;
                    $dataKendaraan = $this->repoDatakendaraan->createDatakendaraan($pendaftaran);
                    $statusDatakendaraan = true;
                }else{
                    $statusDatakendaraan = false;
                }
            }
        }
        elseif($pendaftaran['kodepenerbitans_id'] == 3 || $pendaftaran['kodepenerbitans_id'] == 4 || $pendaftaran['kodepenerbitans_id'] == 7){
            if($checkData === false){
                return $this->error(false,'data kendaraan tidak ditemukan','',422);
            }
            $dataUUID = $this->repoIden->getUUID($pendaftaran['nouji']);
            $checkUji = $this->repoPengujian->checkPengujian($dataUUID->id);
            if($checkUji !== true){
                return $this->error(false,$checkUji,'',422);
            }
            $checkNorangka = $this->repoIden->checkNorangka($pendaftaran['nouji'],$pendaftaran['norangka']);
            if($checkNorangka === false){
                $dataIden = $this->repoIden->updateIdentitaskendaraan($pendaftaran,$dataUUID->uuid);
                if($dataIden){
                    $dataKendaraan = $this->repoDatakendaraan->updateDatakendaraan($pendaftaran,$dataIden->id);
                    $statusDatakendaraan = true;
                }
            }else{
                return $this->error(false,'no rangka sudah dipakai kendaraan lain','',422);
            }
        }
        else{
            $checkNorangka = $this->repoIden->checkNorangka($pendaftaran['nouji'],$pendaftaran['norangka']);
            if($checkNorangka === false){
                $dataUUID = $this->repoIden->getUUID($pendaftaran['nouji']);
                if($dataUUID === null){
                    $dataIden = $this->repoIden->createIdentitaskendaraan($pendaftaran);
                    if($dataIden){
                        $pendaftaran['identitaskendaraan_id'] = $dataIden->id;
                        $dataKendaraan = $this->repoDatakendaraan->createDatakendaraan($pendaftaran);
                        $statusDatakendaraan = true;
                    }else{
                        $statusDatakendaraan = false;
                    }
                }
                $dataIden = $this->repoIden->updateIdentitaskendaraan($pendaftaran,$dataUUID->uuid);
                if($dataIden){
                    $dataKendaraan = $this->repoDatakendaraan->updateDatakendaraan($pendaftaran,$dataIden->id);
                    $statusDatakendaraan = true;
                }
            }else{
                return $this->error(false,'no rangka sudah dipakai kendaraan lain','',422);
            }
        }

        if($statusDatakendaraan){
            $checkP = $this->repoPendaftaran->getPendaftaranid($dataIden->id, $pendaftaran['tglpendaftaran']);
            if($checkP && $pendaftaran['kodepenerbitans_id'] != '3' && $pendaftaran['kodepenerbitans_id'] != '4'){
                // $request->merge([
                //     'user_id'                   => $user['id'],
                // ]);
                $dataP = $this->repoPendaftaran->updatePendaftaran($checkP->uuid, $pendaftaran);
            }else{
                if ($pendaftaran['kodepenerbitans_id'] == '3' || $pendaftaran['kodepenerbitans_id'] == '4') {
                    $pendaftaran['foto'] = '1';
                    $pendaftaran['posisi'] = '5';
                    $pendaftaran['identitaskendaraan_id'] = $dataIden['id'];
                }  elseif ($pendaftaran['kodepenerbitans_id'] == '9' || $pendaftaran['kodepenerbitans_id'] == '10') {
                    $pendaftaran['foto'] = null;
                    $pendaftaran['posisi'] = '0';
                    $pendaftaran['approved'] = '0';
                    $pendaftaran['identitaskendaraan_id'] = $dataIden['id'];
                }   elseif ($pendaftaran['kodepenerbitans_id'] == '8') {
                    $pendaftaran['foto'] = null;
                    $pendaftaran['posisi'] = '0';
                    $pendaftaran['approved'] = '0';
                    $pendaftaran['identitaskendaraan_id'] = $dataIden['id'];
                } elseif ($pendaftaran['kodepenerbitans_id'] == '7') {
                    $pendaftaran['foto'] = '1';
                    // $pendaftaran['posisi'] = '1';
                    $pendaftaran['identitaskendaraan_id'] = $dataIden['id'];
                } else {
                    $pendaftaran['foto'] = '0';
                    $pendaftaran['posisi'] = '1';
                    $pendaftaran['identitaskendaraan_id'] = $dataIden['id'];
                }
                
                $pendaftaran['tglpendaftaran'] = $tglpendaftaran;
                $pendaftaran['status'] = '1';
                $pendaftaran['verif'] = '1';
                $pendaftaran['jenispendaftaran'] = 'off';
                $pendaftaran['user_id'] = $user->id;
                $dataP = $this->repoPendaftaran->createPendaftaran($pendaftaran);
            }

            if($dataP){
                $statusPendaftaran = true;
                if ($pendaftaran['kodepenerbitans_id'] == '3') {
                    $pengujian = $this->repoPengujian->setCopyPengujian($dataP['id']);
                    if (!$pengujian) {
                        $statusPengujian = false;
                    }
                } elseif ($pendaftaran['kodepenerbitans_id'] == '4') {
                    $pengujian = $this->repoPengujian->setCopyPengujian($dataP['id']);
                    if (!$pengujian) {
                        $statusPengujian = false;
                    }
                }  elseif ($pendaftaran['kodepenerbitans_id'] == '7') {
                    $pengujian = $this->repoPengujian->setCopyPengujian($dataP['id']);
                    if (!$pengujian) {
                        $statusPengujian = false;
                    }
                } 
                else if ($pendaftaran['kodepenerbitans_id'] == '5' || $pendaftaran['kodepenerbitans_id'] == '9' || $pendaftaran['kodepenerbitans_id'] == '6' || $pendaftaran['kodepenerbitans_id'] == '10') {
                    $checkNu = $this->repoSurat->checkSurat($dataP['id']);
                    if($checkNu){
                        if($pendaftaran['kodepenerbitans_id'] == '5' || $pendaftaran['kodepenerbitans_id'] == '6'){
                            $pendaftaran['kode'] = $pendaftaran['kodewilayahasal'];
                        }else{
                            $pendaftaran['kode'] = $pendaftaran['kodewilayah'];
                        }
                        $this->repoSurat->updateSurat($dataP['id'],$pendaftaran);
                    }else{
                        if($pendaftaran['kodepenerbitans_id'] == '5' || $pendaftaran['kodepenerbitans_id'] == '6'){
                            $pendaftaran['pendaftaran_id'] = $dataP['id'];
                            $pendaftaran['kode'] = $pendaftaran['kodewilayahasal'];
                        }else{
                            $pendaftaran['pendaftaran_id'] = $dataP['id'];
                            $pendaftaran['kode'] = $pendaftaran['kodewilayah'];
                        }
                        $this->repoSurat->createSurat($pendaftaran);
                    }
                }

                if ($pendaftaran['kodepenerbitans_id'] != 1|| $pendaftaran['kodepenerbitans_id'] != 5 || $pendaftaran['kodepenerbitans_id'] != 6){
                    if (is_array($perubahans) && count($perubahans) > 0) {
                        // ada data di perubahans
                        $arrayPerubahan = array(
                            'uuid' => $this->utils->generateUUID(),
                            'pendaftaran_id' => $dataP['id'],
                            'proposed_data' => json_encode($perubahans),
                            'requested_by_user_id' => $user->id,
                            'type' => 'Perubahan Data',
                        );
                        $this->repoPerizinan->create($arrayPerubahan);
                    }
                }
                    
                if($pendaftaran['kodepenerbitans_id'] == '9' || $pendaftaran['kodepenerbitans_id'] == '10'){
                        $arrayPerubahan = array(
                        'uuid' => $this->utils->generateUUID(),
                        'pendaftaran_id' => $dataP['id'],
                        'proposed_data' => json_encode($perubahans),
                        'requested_by_user_id' => $user->id,
                        'approved' => '0',
                        'type' => 'Persuratan',
                    );
                    $this->repoPerizinan->create($arrayPerubahan);
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
        $pendaftaran = $request->input('pendaftaran', []);
        $perubahans  = $request->input('perubahans', []);
        $statusDatakendaraan = false;
        $statusPendaftaran = false;
        $tglpendaftaran = date_create($pendaftaran['tglpendaftaran']);
        $tglpendaftaran = date_format($tglpendaftaran, "Y-m-d");
        $pendaftaran['tglpendaftaran'] = $tglpendaftaran;
        $dataP = $this->repoPendaftaran->updatePendaftaran($id, $pendaftaran);

        if($dataP){
            $statusPendaftaran = true;
            if ($pendaftaran['kodepenerbitans_id'] == '5' || $pendaftaran['kodepenerbitans_id'] == '9' || $pendaftaran['kodepenerbitans_id'] == '6' || $pendaftaran['kodepenerbitans_id'] == '10') {
                $checkNu = $this->repoSurat->checkSurat($dataP['id']);
                if($checkNu){
                    if($pendaftaran['kodepenerbitans_id'] == '5' || $pendaftaran['kodepenerbitans_id'] == '6'){
                        $pendaftaran['kode'] = $pendaftaran['kodewilayahasal'];
                    }else{
                        $pendaftaran['kode'] = $pendaftaran['kodewilayah'];
                    }
                    $this->repoSurat->updateSurat($dataP['id'],$pendaftaran);
                }else{
                    if($pendaftaran['kodepenerbitans_id'] == '5' || $pendaftaran['kodepenerbitans_id'] == '6'){
                        $pendaftaran['pendaftaran_id'] = $dataP['id'];
                        $pendaftaran['kode'] = $pendaftaran['kodewilayahasal'];
                    }else{
                        $pendaftaran['pendaftaran_id'] = $dataP['id'];
                        $pendaftaran['kode'] = $pendaftaran['kodewilayah'];
                    }
                    $this->repoSurat->createSurat($pendaftaran);
                }
            }
            if ($pendaftaran['kodepenerbitans_id'] != 1 || $pendaftaran['kodepenerbitans_id'] != 5 || $pendaftaran['kodepenerbitans_id'] != 6){
                if (is_array($perubahans) && count($perubahans) > 0) {
                    // ada data di perubahans
                    $arrayPerubahan = array(
                        'uuid' => $this->utils->generateUUID(),
                        'pendaftaran_id' => $dataP['id'],
                        'proposed_data' => json_encode($perubahans),
                        'requested_by_user_id' => $user->id,
                        'type' => 'Perubahan Data',
                    );
                    $this->repoPerizinan->create($arrayPerubahan);
                }
            }
        }

        // $checkNorangka = $this->repoIden->checkNorangka($request->nouji,$request->norangka);
        // $checkData = $this->repoIden->checkNouji($request->nouji);
        // if($checkNorangka === false && $checkData === false){
            $dataUUID = $this->repoIden->getUUID($pendaftaran['nouji']);
            $dataIden = $this->repoIden->updateIdentitaskendaraan($pendaftaran,$dataUUID->uuid);
            if($dataIden){
                $dataKendaraan = $this->repoDatakendaraan->updateDatakendaraan($pendaftaran,$dataUUID->id);
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
        
    }

    public function getApproved($id)
    {
        return $this->repoPendaftaran->getApproved($id);
    }
    
    public function getAllApproved()
    {
        return $this->repoPendaftaran->getAllApproved();
    }

    public function updateApproved($request, $id)
    {
        $data =  $this->repoPerizinan->updatePerizinan($id, $request);
        if($data){
            if (is_array($request->proposed_data) && count($request->proposed_data) > 0) {
                $this->repoPerizinan->updateDatakendaraan($id, $request->proposed_data);
            }
        }
        return $data;
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

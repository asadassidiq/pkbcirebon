<?php

namespace App\Services;

use App\Repositories\DatakendaraanRepository;
use App\Repositories\IdentitaskendaraanRepository;
use App\Traits\apiJsonReturnTrait;


class DatakendaraanService
{
    protected $repoDatakendaraan,$repoIden;
    use apiJsonReturnTrait;

    public function __construct(DatakendaraanRepository $repoDatakendaraan, IdentitaskendaraanRepository $repoIden)
    {
        $this->repoIden = $repoIden;
        $this->repoDatakendaraan = $repoDatakendaraan;
    }

    public function getAllDatakendaraan()
    {
        return $this->repoDatakendaraan->getAll();
    }

    public function getDatakendaraan($id)
    {
        return $this->repoDatakendaraan->getDatakendaraan($id);
    }

    public function getTotalDatakendaraan()
    {
        return $this->repoDatakendaraan->getTotalDatakendaraan();
    }

    public function getDatakendaraanid($id)
    {
        return $this->repoDatakendaraan->getDatakendaraanid($id);
    }

    public function getDatakendaraanidentitas($id)
    {
        return $this->repoDatakendaraan->getDatakendaraanidentitas($id);
    }

    public function getKartuInduk($id)
    {
        return $this->repoDatakendaraan->getKartuInduk($id);
    }

    public function getListPengujian($id)
    {
        return $this->repoDatakendaraan->getListPengujian($id);
    }

    public function getListNU($id)
    {
        return $this->repoDatakendaraan->getListNU($id);
    }

    public function getListMU($id)
    {
        return $this->repoDatakendaraan->getListMU($id);
    }

    public function getListCatatan($id)
    {
        return $this->repoDatakendaraan->getListCatatan($id);
    }
    
    public function create($request)
    {
        $checkData = $this->repoIden->checkNouji($request->nouji);
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
            return $this->success(true,'Success Create','',200);
        }else{
            return $this->error(false,'something errors','',422);
        }
    }

    public function update($request, $id)
    {
        $dataIden = $this->repoIden->updateIdentitaskendaraan($request,$id);
        if($dataIden){
            $dataKendaraan = $this->repoDatakendaraan->updateDatakendaraan($request,$dataIden->id);
            return $this->success(true,'Success Create','',200);
        }else{
            $request->merge([
                'identitaskendaraan_id' => $dataIden->id,
            ]);
            $data = $this->repoDatakendaraan->createDatakendaraan($request->all());
            return $this->success(true,'Success Create','',200);
        }
        return $this->error(false,'something errors','',422);
    }

    public function delete($id)
    {
        return $this->repoDatakendaraan->deleteDatakendaraan($id);
    }

    public function riwayatUji($id)
    {
        return $this->repoDatakendaraan->riwayatUji($id);
    }

    public function detailRiwayatuji($id)
    {
        return $this->repoDatakendaraan->detailRiwayatuji($id);
    }

    public function updateData()
    {
        return $this->repoDatakendaraan->updateData();
    }

    public function updateData2()
    {
        return $this->repoDatakendaraan->updateData2();
    }

}

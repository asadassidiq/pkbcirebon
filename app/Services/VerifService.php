<?php

namespace App\Services;

use App\Repositories\VerifRepository;


class VerifService
{
    protected $repoVerif;

    public function __construct(VerifRepository $repoVerif)
    {
        $this->repoVerif = $repoVerif;
    }

    public function getAllVerif()
    {
        return $this->repoVerif->getAll();
    }

    public function getMonitoring(){
        return $this->repoVerif->getMonitoring();
    }

    public function getAllLulusVerif()
    {
        return $this->repoVerif->getAllLulus();
    }

    public function getAllVerif2()
    {
        return $this->repoVerif->getAllVerif2();
    }

    public function getAllLulusVerif2()
    {
        return $this->repoVerif->getAllVerif2Lulus();
    }

    public function getAllTLulusVerif()
    {
        return $this->repoVerif->getAllTLulus();
    }

    public function getVerif($id)
    {
        return $this->repoVerif->getVerif($id);
    }

    public function getData($id)
    {
        return $this->repoVerif->getData($id);
    }
    
    public function getTTD($id)
    {
        return $this->repoVerif->getTTD($id);
    }

    public function getCatatan($id)
    {
        return $this->repoVerif->getCatatan($id);
    }

    public function getVerifid($id,$tgl)
    {
        return $this->repoVerif->getVerifid($id,$tgl);
    }

    public function create($request)
    {
        return $this->repoVerif->createVerif($request);
    }

    public function checkid($id){
        return $this->repoVerif->checkid($id);
    }

    public function update($request, $id)
    {
        return $this->repoVerif->updateVerif($id, $request);
    }

    public function approveSurat($request, $id)
    {
        return $this->repoVerif->approveSurat($id, $request);
    }

    public function setDatapengujian($id,$jenis_cetak){
        return $this->repoVerif->setDatapengujian($id,$jenis_cetak);
    }

    public function delete($id)
    {
        return $this->repoVerif->destroy($this->repoVerif->getVerif($id));
    }

}

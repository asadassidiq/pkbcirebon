<?php

namespace App\Services;

use App\Repositories\CatatanRepository;


class CatatanService
{
    protected $repoCatatan;

    public function __construct(CatatanRepository $repoCatatan)
    {
        $this->repoCatatan = $repoCatatan;
    }

    public function getAllCatatan()
    {
        return $this->repoCatatan->getAll();
    }
    
    public function checkid($id){
        return $this->repoCatatan->checkid($id);
    }

    public function getCatatanName($id)
    {
        return $this->repoCatatan->getCatatanName($id);
    }

    public function getCatatan($id,$nama)
    {
        return $this->repoCatatan->getCatatan($id,$nama);
    }

    public function getCatatanPos($id,$pos){
        return $this->repoCatatan->getCatatanPos($id,$pos);
    }

    public function getCountCatatanName($id)
    {
        return $this->repoCatatan->getCountCatatanName($id);
    }

    public function getAlasan()
    {
        return $this->repoCatatan->getAlasan();
    }

    public function create($request)
    {
        return $this->repoCatatan->create($request);
    }

    public function updateCatatan($request, $id)
    {
        return $this->repoCatatan->updateCatatan($id, $request);
    }

    public function delete($id)
    {
        return $this->repoCatatan->delete($id);
    }

}

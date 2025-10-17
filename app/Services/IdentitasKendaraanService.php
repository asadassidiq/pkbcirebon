<?php

namespace App\Services;

use App\Repositories\IdentitaskendaraanRepository;


class IdentitasKendaraanService
{
    protected $repoIdentitasKendaraan;

    public function __construct(IdentitaskendaraanRepository $repoIdentitasKendaraan)
    {
        $this->repoIdentitasKendaraan = $repoIdentitasKendaraan;
    }

    public function getAllIdentitaskendaraan()
    {
        return $this->repoIdentitasKendaraan->getAll();
    }

    public function getIdentitaskendaraan($id)
    {
        return $this->repoIdentitasKendaraan->getIdentitaskendaraan($id);
    }

    public function getIdentitaskendaraanid($id){
        return $this->repoIdentitasKendaraan->getIdentitaskendaraanid($id);
    }

    public function getIdentitaskendaraanPos($id)
    {
        return $this->repoIdentitasKendaraan->getIdentitaskendaraanPos($id);
    }

    public function getIdentitaskendaraanNouji()
    {
        return $this->repoIdentitasKendaraan->getIdentitasKendaraanNouji();
    }

    public function getNokendaraan()
    {
        return $this->repoIdentitasKendaraan->getNokendaraan();
    }

    public function getNorangka()
    {
        return $this->repoIdentitasKendaraan->getNorangka('','');
    }

    public function getCheck($request){
        return $this->repoIdentitasKendaraan->getCheck($request);
    }

    public function getCheckNouji($request){
        return $this->repoIdentitasKendaraan->getCheckNouji($request);
    }

    public function create($request)
    {
        return $this->repoIdentitasKendaraan->store($request);
    }

    public function update($request, $id)
    {
        return $this->repoIdentitasKendaraan->updateIdentitaskendaraan($request, $id);
    }

    public function delete($id)
    {
        return $this->repoIdentitasKendaraan->destroy($this->repoIdentitasKendaraan->getById($id));
    }

}

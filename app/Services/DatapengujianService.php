<?php

namespace App\Services;

use App\Repositories\DatapengujianRepository;


class DatapengujianService
{
    protected $repoDatapengujian;

    public function __construct(DatapengujianRepository $repoDatapengujian)
    {
        $this->repoDatapengujian = $repoDatapengujian;
    }

    public function getAllDatapengujian()
    {
        return $this->repoDatapengujian->getAll();
    }

    public function updateData()
    {
        return $this->repoDatapengujian->updateData();
    }

    public function getDatapengujianName()
    {
        return $this->repoDatapengujian->getDatapengujianName();
    }

    public function getDatapengujian($id)
    {
        return $this->repoDatapengujian->getDatapengujian($id);
    }

    public function getnosertifikat($id){
        return $this->repoDatapengujian->getnosertifikat($id);
    }

    public function undoVerif($id){
        return $this->repoDatapengujian->undoVerif($id);
    }

    public function create($request)
    {
        return $this->repoDatapengujian->store($request);
    }

    public function update($request, $id)
    {
        return $this->repoDatapengujian->updateDatapengujian($id, $request);
    }


    public function nosertifikat($request, $id)
    {
        return $this->repoDatapengujian->nosertifikat($id, $request);
    }

    public function delete($id)
    {
        return $this->repoDatapengujian->destroy($this->repoDatapengujian->getById($id));
    }

}

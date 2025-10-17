<?php

namespace App\Services;

use App\Repositories\TandatanganRepository;


class TandatanganService
{
    protected $repoTandatangan;

    public function __construct(TandatanganRepository $repoTandatangan)
    {
        $this->repoTandatangan = $repoTandatangan;
    }

    public function getAllTandatangan()
    {
        return $this->repoTandatangan->getAll();
    }

    public function getTandatanganName()
    {
        return $this->repoTandatangan->getTandatanganName();
    }

    public function getTandatangan($id)
    {
        return $this->repoTandatangan->getById($id);
    }

    public function create($request)
    {
        $this->repoTandatangan->store($request);
    }

    public function update($request, $id)
    {
        $this->repoTandatangan->updateTandatangan($request, $id);
    }

    public function delete($id)
    {
        $this->repoTandatangan->destroy($this->repoTandatangan->getById($id));
    }

}

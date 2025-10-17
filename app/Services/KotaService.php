<?php

namespace App\Services;

use App\Repositories\KotaRepository;


class KotaService
{
    protected $repoKota;

    public function __construct(KotaRepository $repoKota)
    {
        $this->repoKota = $repoKota;
    }

    public function getAllKota()
    {
        return $this->repoKota->getAllPaginate();
    }

    public function getKotaName()
    {
        return $this->repoKota->getKotaName();
    }

    public function getKota($id)
    {
        return $this->repoKota->getById($id);
    }

    public function create($request)
    {
        return $this->repoKota->store($request);
    }

    public function update($request, $id)
    {
        return $this->repoKota->update($id, $request);
    }

    public function delete($id)
    {
        return $this->repoKota->delete($id);
    }

}

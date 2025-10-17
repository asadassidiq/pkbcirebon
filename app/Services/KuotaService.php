<?php

namespace App\Services;

use App\Repositories\KuotaRepository;


class KuotaService
{
    protected $repoKuota;

    public function __construct(KuotaRepository $repoKuota)
    {
        $this->repoKuota = $repoKuota;
    }

    public function getAllKuota()
    {
        return $this->repoKuota->getAll();
    }

    public function getCekKuota()
    {
        return $this->repoKuota->getCekKuota();
    }

    public function getCekKuota1()
    {
        return $this->repoKuota->getCekKuota1();
    }

    public function getKuotaName()
    {
        return $this->repoKuota->getKuotaName();
    }

    public function getKuota($id)
    {
        return $this->repoKuota->getById($id);
    }

    public function create($request)
    {
        return $this->repoKuota->storeKuota($request);
    }

    public function update($request, $id)
    {
        return $this->repoKuota->updateKuota($id, $request->all());
    }

    public function delete($id)
    {
        return $this->repoKuota->delete($id);
    }

}

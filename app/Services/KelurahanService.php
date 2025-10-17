<?php

namespace App\Services;

use App\Repositories\KelurahanRepository;


class KelurahanService
{
    protected $repoKelurahan;

    public function __construct(KelurahanRepository $repoKelurahan)
    {
        $this->repoKelurahan = $repoKelurahan;
    }

    public function getAllKelurahan()
    {
        return $this->repoKelurahan->getAllPaginate();
    }

    public function getKelurahanName()
    {
        return $this->repoKelurahan->getKelurahanName();
    }

    public function getKelurahan($id)
    {
        return $this->repoKelurahan->getById($id);
    }

    public function create($request)
    {
        return $this->repoKelurahan->store($request);
    }

    public function update($request, $id)
    {
        return $this->repoKelurahan->update($id, $request);
    }

    public function delete($id)
    {
        return $this->repoKelurahan->delete($id);
    }

}

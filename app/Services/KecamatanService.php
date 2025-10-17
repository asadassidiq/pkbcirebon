<?php

namespace App\Services;

use App\Repositories\KecamatanRepository;


class KecamatanService
{
    protected $repoKecamatan;

    public function __construct(KecamatanRepository $repoKecamatan)
    {
        $this->repoKecamatan = $repoKecamatan;
    }

    public function getAllKecamatan()
    {
        return $this->repoKecamatan->getAllPaginate();
    }

    public function getKecamatanName()
    {
        return $this->repoKecamatan->getKecamatanName();
    }

    public function getKecamatan($id)
    {
        return $this->repoKecamatan->getById($id);
    }

    public function create($request)
    {
        return $this->repoKecamatan->store($request);
    }

    public function update($request, $id)
    {
        return $this->repoKecamatan->update($id, $request);
    }

    public function delete($id)
    {
        return $this->repoKecamatan->delete($id);
    }

}

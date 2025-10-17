<?php

namespace App\Services;

use App\Repositories\MutasiRepository;


class MutasiService
{
    protected $repoMutasi;

    public function __construct(MutasiRepository $repoMutasi)
    {
        $this->repoMutasi = $repoMutasi;
    }

    public function getAllPendaftaran()
    {
        return $this->repoMutasi->getAll();
    }

    public function getPendaftaran($id)
    {
        return $this->repoMutasi->getPendaftaran($id);
    }

    public function getLastPendaftaran($id)
    {
        return $this->repoMutasi->getLastPendaftaran($id);
    }

    public function setNoSurat(){
        return $this->repoMutasi->setNoSurat();
    }

}

<?php

namespace App\Services;

use App\Repositories\FotoRepository;


class FotoService
{
    protected $repoFoto;

    public function __construct(FotoRepository $repoFoto)
    {
        $this->repoFoto = $repoFoto;
    }

    public function getAll()
    {
        return $this->repoFoto->getAll();
    }

    public function getAllFoto()
    {
        return $this->repoFoto->getAllFoto();
    }

}

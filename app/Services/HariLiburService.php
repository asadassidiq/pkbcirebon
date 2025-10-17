<?php

namespace App\Services;

use App\Repositories\HariLiburRepository;


class HariLiburService
{
    protected $repoHariLibur;

    public function __construct(HariLiburRepository $repoHariLibur)
    {
        $this->repoHariLibur = $repoHariLibur;
    }

    public function getAllHariLibur()
    {
        return $this->repoHariLibur->getAll();
    }

    public function getCekHariLibur()
    {
        return $this->repoHariLibur->getCekHariLibur();
    }

    public function getHariLiburName()
    {
        return $this->repoHariLibur->getHariLiburName();
    }

    public function getHariLibur($id)
    {
        return $this->repoHariLibur->getById($id);
    }

    public function create($request)
    {
        return $this->repoHariLibur->store($request);
    }

    public function update($request, $id)
    {
        return $this->repoHariLibur->updateHariLibur($id, $request);
    }

    public function delete($id)
    {
        return $this->repoHariLibur->destroy($this->repoHariLibur->getById($id));
    }

}

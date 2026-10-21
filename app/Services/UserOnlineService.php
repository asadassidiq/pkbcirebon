<?php

namespace App\Services;

use App\Repositories\UserOnlineRepository;


class UserOnlineService
{
    protected $repository;

    public function __construct(UserOnlineRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getAll()
    {
        return $this->repository->getAll();
    }

    public function getUserOnline(string $id)
    {
        return $this->repository->getUserOnline($id);
    }

    public function getDatakendaraanOnline(string $id)
    {
        return $this->repository->getDatakendaraanOnline($id);
    }

    public function storeDatakendaraanOnline(array $data)
    {
        return $this->repository->storeDatakendaraanOnline($data);
    }

    public function updateDatakendaraanOnline(string $id, array $data)
    {
        return $this->repository->updateDatakendaraanOnline($id, $data);
    }
}
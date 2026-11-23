<?php

namespace App\Services;

use App\Repositories\UserOnlineRepository;
use App\Traits\apiJsonReturnTrait;


class UserOnlineService
{
    protected $repository;
    use apiJsonReturnTrait;
    
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
        // return $this->error(false,'no rangka sudah dipakai kendaraan lain','',422);
        $data = $this->repository->storeDatakendaraanOnline($data);
        if (is_string($data)) {
            return $this->error(false, $data, '', 422);
        }
        return $this->returnJson($data);
    }

    public function updateDatakendaraanOnline(string $id, array $data)
    {
        $data =  $this->repository->updateDatakendaraanOnline($id, $data);
        if (is_string($data)) {
            return $this->error(false, $data, '', 422);
        }
        return $this->returnJson($data);
    }

    public function deleteDatakendaraanOnline(string $id)
    {
        return $this->repository->deleteDatakendaraanOnline($id);
    }
}
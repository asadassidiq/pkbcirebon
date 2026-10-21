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
}
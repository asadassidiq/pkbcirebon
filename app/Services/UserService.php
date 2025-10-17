<?php

namespace App\Services;

use App\Repositories\UserRepository;


class UserService
{
    protected $repoUser;

    public function __construct(UserRepository $repoUser)
    {
        $this->repoUser = $repoUser;
    }

    public function getAllUser()
    {
        return $this->repoUser->getAll();
    }

    public function getUserName()
    {
        return $this->repoUser->getUserName();
    }

    public function getUser($id)
    {
        return $this->repoUser->getUser($id);
    }

    public function create($request)
    {
        return $this->repoUser->createUser($request);
    }

    public function update($request, $id)
    {
        return $this->repoUser->updateUser($id, $request);
    }

    public function delete($id)
    {
        return $this->repoUser->destroy($this->repoUser->getById($id));
    }

}

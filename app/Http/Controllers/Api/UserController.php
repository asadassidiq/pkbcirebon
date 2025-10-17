<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\UserService;
use App\Http\Requests\UserPKB\UserStoreRequest;
use App\Http\Requests\UserPKB\UserUpdateRequest;

class UserController extends Controller
{
    use apiJsonReturnTrait;
    protected $UserService;

    public function __construct(UserService $UserService)
    {
        $this->UserService = $UserService;
    }

    public function index()
    {
        $data = $this->UserService->getAllUser();
        return $this->returnJson($data);
    }

    public function getUserName()
    {
        $data = $this->UserService->getUserName();
        return $this->returnJson($data);
    }

    public function getUser($id)
    {
        $data = $this->UserService->getUser($id);
        return $this->returnJson($data);
    }

    public function store(UserStoreRequest $request)
    {
        $request->merge([
            'password'            => bcrypt($request->password),
        ]);
        $data = $this->UserService->create($request);

        return $this->returnJson($data, 'User Created');
    }

    public function update(UserUpdateRequest $request, $id)
    {
        if(!empty($request->password)){
            $request->merge([
                'password'            => bcrypt($request->password),
            ]);
        }
        $data = $this->UserService->update($request, $id);
        return $this->returnJson($data, 'User Updated');
    }

    public function delete($id)
    {
        $data = $this->UserService->delete($id);
        return $this->returnJson('', 'User Deleted');
    }
}

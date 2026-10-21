<?php

namespace App\Http\Controllers\Api;

use App\Services\UserOnlineService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;

class UserOnlineController extends Controller
{
    use apiJsonReturnTrait;
    protected $service;

    public function __construct(UserOnlineService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        $data = $this->service->getAll();
        return $this->returnJson($data);
    }

    public function getUserOnline(string $id)
    {
        $data = $this->service->getUserOnline($id);
        return $this->returnJson($data);
    }
    
    public function getDatakendaraanOnline(string $id)
    {
        $data = $this->service->getDatakendaraanOnline($id);
        return $this->returnJson($data);
    }

    public function storeDatakendaraanOnline(Request $request)
    {
        $data = $this->service->storeDatakendaraanOnline($request->all());
        return $this->returnJson($data);
    }

    public function updateDatakendaraanOnline(string $id, Request $request)
    {
        $data = $this->service->updateDatakendaraanOnline($id, $request->all());
        return $this->returnJson($data);
    }
}

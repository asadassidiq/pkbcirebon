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
}

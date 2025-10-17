<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\apiJsonReturnTrait;
use App\Services\apiBlueCoreService;

class apiBlueCoreController extends Controller
{
    use apiJsonReturnTrait;
    protected $apiBlueCoreService;

    public function __construct(apiBlueCoreService $apiBlueCoreService)
    {
        $this->apiBlueCoreService = $apiBlueCoreService;
    }

    public function getDataMaster()
    {
        $data = $this->apiBlueCoreService->getDataMaster();
        return $this->returnJson($data);
    }

    public function getDataVTASRUT()
    {
        $data = $this->apiBlueCoreService->getDataVTASRUT();
        return $this->returnJson($data);
    }

}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\PengujianService;

class PengujianController extends Controller
{
    use apiJsonReturnTrait;
    protected $pengujianService;

    public function __construct(PengujianService $pengujianService)
    {
        $this->pengujianService = $pengujianService;
    }
    public function index()
    {
        $data = $this->pengujianService->getAll();
        return $this->returnJson($data);
    }

    public function getPengujian($id)
    {
        $data = $this->pengujianService->getPengujian($id);
        return $this->returnJson($data);
    }

    public function createPos(Request $request)
    {
        $data = $this->pengujianService->createPos($request);
        return $data;
    }

    public function delete($id)
    {
        $data = $this->pengujianService->delete($id);
        return $this->returnJson('', 'Pengujian Deleted');
    }
}


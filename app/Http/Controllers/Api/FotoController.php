<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\FotoService;

class FotoController 
{
    use apiJsonReturnTrait;
    protected $fotoService;

    public function __construct(FotoService $fotoService)
    {
        $this->fotoService = $fotoService;
    }
    public function index()
    {
        $data = $this->fotoService->getAll();
        return $this->returnJson($data);
    }

    public function foto()
    {
        $data = $this->fotoService->getAllFoto();
        return $this->returnJson($data);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\KotaService;
use App\Http\Requests\Kota\KotaStoreRequest;
use App\Http\Requests\Kota\KotaUpdateRequest;

class KotaController extends Controller
{
    use apiJsonReturnTrait;
    protected $KotaService;

    public function __construct(KotaService $KotaService)
    {
        $this->KotaService = $KotaService;
    }

    public function index()
    {
        $data = $this->KotaService->getAllKota();
        return $this->returnJson($data);
    }

    public function getName()
    {
        $data = $this->KotaService->getKotaName();
        return $this->returnJson($data);
    }

    public function getKota($id)
    {
        $data = $this->KotaService->getKota($id);
        return $this->returnJson($data);
    }

    public function store(KotaStoreRequest $request)
    {
        $data = $this->KotaService->create($request->all());

        return $this->returnJson($data, 'Kota Created');
    }

    public function update(KotaUpdateRequest $request, $id)
    {
        $data = $this->KotaService->update($request, $id);
        return $this->returnJson($data, 'Kota Updated');
    }

    public function delete($id)
    {
        $data = $this->KotaService->delete($id);
        return $this->returnJson('', 'Kota Deleted');
    }
}

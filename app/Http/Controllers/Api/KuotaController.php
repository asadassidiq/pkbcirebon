<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\KuotaService;
use App\Http\Requests\Kuota\KuotaStoreRequest;
use App\Http\Requests\Kuota\KuotaUpdateRequest;

class KuotaController extends Controller
{
    use apiJsonReturnTrait;
    protected $KuotaService;

    public function __construct(KuotaService $KuotaService)
    {
        $this->KuotaService = $KuotaService;
    }

    public function index()
    {
        $data = $this->KuotaService->getAllKuota();
        return $this->returnJson($data);
    }

    public function getCekKuota()
    {
        $data = $this->KuotaService->getCekKuota();
        return $this->returnJson($data);
    }

    public function getCekKuota1()
    {
        $data = $this->KuotaService->getCekKuota1();
        return $this->returnJson($data);
    }

    public function getKuotaName()
    {
        $data = $this->KuotaService->getKuotaName();
        return $this->returnJson($data);
    }

    public function getKuota($id)
    {
        $data = $this->KuotaService->getKuota($id);
        return $this->returnJson($data);
    }

    public function store(KuotaStoreRequest $request)
    {
        $data = $this->KuotaService->create($request);

        return $this->returnJson($data, 'Kuota Created');
    }

    public function update(KuotaUpdateRequest $request, $id)
    {
        $data = $this->KuotaService->update($request, $id);
        return $this->returnJson($request, 'Kuota Updated');
    }

    public function delete($id)
    {
        $data = $this->KuotaService->delete($id);
        return $this->returnJson('', 'Kuota Deleted');
    }
}

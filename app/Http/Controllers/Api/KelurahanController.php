<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\KelurahanService;
use App\Http\Requests\Kelurahan\KelurahanStoreRequest;
use App\Http\Requests\Kelurahan\KelurahanUpdateRequest;

class KelurahanController extends Controller
{
    use apiJsonReturnTrait;
    protected $KelurahanService;

    public function __construct(KelurahanService $KelurahanService)
    {
        $this->KelurahanService = $KelurahanService;
    }

    public function index()
    {
        $data = $this->KelurahanService->getAllKelurahan();
        return $this->returnJson($data);
    }

    public function getName()
    {
        $data = $this->KelurahanService->getKelurahanName();
        return $this->returnJson($data);
    }

    public function getKelurahan($id)
    {
        $data = $this->KelurahanService->getKelurahan($id);
        return $this->returnJson($data);
    }

    public function store(KelurahanStoreRequest $request)
    {
        $data = $this->KelurahanService->create($request->all());

        return $this->returnJson($data, 'Kelurahan Created');
    }

    public function update(KelurahanUpdateRequest $request, $id)
    {
        $data = $this->KelurahanService->update($request, $id);
        return $this->returnJson($data, 'Kelurahan Updated');
    }

    public function delete($id)
    {
        $data = $this->KelurahanService->delete($id);
        return $this->returnJson('', 'Kelurahan Deleted');
    }
}

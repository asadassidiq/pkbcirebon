<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\KecamatanService;
use App\Http\Requests\Kecamatan\KecamatanStoreRequest;
use App\Http\Requests\Kecamatan\KecamatanUpdateRequest;

class KecamatanController extends Controller
{
    use apiJsonReturnTrait;
    protected $KecamatanService;

    public function __construct(KecamatanService $KecamatanService)
    {
        $this->KecamatanService = $KecamatanService;
    }

    public function index()
    {
        $data = $this->KecamatanService->getAllKecamatan();
        return $this->returnJson($data);
    }

    public function getName()
    {
        $data = $this->KecamatanService->getKecamatanName();
        return $this->returnJson($data);
    }

    public function getKecamatan($id)
    {
        $data = $this->KecamatanService->getKecamatan($id);
        return $this->returnJson($data);
    }

    public function store(KecamatanStoreRequest $request)
    {
        $data = $this->KecamatanService->create($request->all());

        return $this->returnJson($data, 'Kecamatan Created');
    }

    public function update(KecamatanUpdateRequest $request, $id)
    {
        $data = $this->KecamatanService->update($request, $id);
        return $this->returnJson($data, 'Kecamatan Updated');
    }

    public function delete($id)
    {
        $data = $this->KecamatanService->delete($id);
        return $this->returnJson('', 'Kecamatan Deleted');
    }
}

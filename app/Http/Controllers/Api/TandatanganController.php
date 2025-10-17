<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\TandatanganService;
// use App\Http\Requests\Tandatangan\TandatanganStoreRequest;
// use App\Http\Requests\Tandatangan\TandatanganUpdateRequest;

class TandatanganController extends Controller
{
    use apiJsonReturnTrait;
    protected $TandatanganService;

    public function __construct(TandatanganService $TandatanganService)
    {
        $this->TandatanganService = $TandatanganService;
    }

    public function index()
    {
        $tandatangan = $this->TandatanganService->getAllTandatangan();
        return $this->returnJson($tandatangan);
    }

    public function getTandatanganName()
    {
        $tandatangan = $this->TandatanganService->getTandatanganName();
        return $this->returnJson($tandatangan);
    }

    public function getTandatangan($id)
    {
        $tandatangan = $this->TandatanganService->getTandatangan($id);
        return $this->returnJson($tandatangan);
    }

    public function store(Request $request)
    {
        $tandatangan = $this->TandatanganService->create($request->all());

        return $this->returnJson($tandatangan, 'Tandatangan Created');
    }

    public function update(Request $request, $id)
    {
        $tandatangan = $this->TandatanganService->update($request, $id);
        return $this->returnJson($tandatangan, 'Tandatangan Updated');
    }

    public function delete($id)
    {
        $tandatangan = $this->TandatanganService->delete($id);
        return $this->returnJson('', 'Tandatangan Deleted');
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\IdentifikasiService;
use App\Http\Requests\Identifikasi\IdentifikasiStoreRequest;
use App\Http\Requests\Identifikasi\IdentifikasiUpdateRequest;

class IdentifikasiController extends Controller
{
    use apiJsonReturnTrait;
    protected $IdentifikasiService;

    public function __construct(IdentifikasiService $IdentifikasiService)
    {
        $this->IdentifikasiService = $IdentifikasiService;
    }

    public function getIdentifikasi($id)
    {
        $data = $this->IdentifikasiService->getIdentifikasi($id);
        return $this->returnJson($data);
    }

    public function store(IdentifikasiStoreRequest $request)
    {
        $id = $this->IdentifikasiService->getIdentifikasi($request->pendaftaran_id);
        if($id){
            $data = $this->IdentifikasiService->update($request, $id['id']);
            return $this->returnJson($data, 'Updated');
        }else{
            $data = $this->IdentifikasiService->create($request->all());
            return $this->returnJson($data, 'Created');
        }
    }

    public function update(IdentifikasiUpdateRequest $request, $id)
    {
        $data = $this->IdentifikasiService->update($request, $id);
        return $this->returnJson($data, 'Identifikasi Updated');
    }

    public function delete($id)
    {
        $data = $this->IdentifikasiService->delete($id);
        return $this->returnJson('', 'Identifikasi Deleted');
    }
}

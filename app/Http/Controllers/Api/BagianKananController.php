<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\BagianKananService;
use App\Http\Requests\BagianKanan\BagianKananStoreRequest;
use App\Http\Requests\BagianKanan\BagianKananUpdateRequest;

class BagianKananController extends Controller
{
    use apiJsonReturnTrait;
    protected $BagianKananService;

    public function __construct(BagianKananService $BagianKananService)
    {
        $this->BagianKananService = $BagianKananService;
    }

    public function getBagianKanan($id)
    {
        $data = $this->BagianKananService->getBagianKanan($id);
        return $this->returnJson($data);
    }

    public function store(BagianKananStoreRequest $request)
    {
        $id = $this->BagianKananService->getBagianKanan($request->pendaftaran_id);
        if($id){
            $data = $this->BagianKananService->update($request, $id['id']);
            return $this->returnJson($data, 'Updated');
        }else{
            $data = $this->BagianKananService->create($request->all());
            return $this->returnJson($data, 'Created');
        }
    }

    public function update(BagianKananUpdateRequest $request, $id)
    {
        $data = $this->BagianKananService->update($request, $id);
        return $this->returnJson($data, 'BagianKanan Updated');
    }

    public function delete($id)
    {
        $data = $this->BagianKananService->delete($id);
        return $this->returnJson('', 'BagianKanan Deleted');
    }
}

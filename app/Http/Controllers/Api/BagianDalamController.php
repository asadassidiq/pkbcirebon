<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\BagianDalamService;
use App\Http\Requests\BagianDalam\BagianDalamStoreRequest;
use App\Http\Requests\BagianDalam\BagianDalamUpdateRequest;

class BagianDalamController extends Controller
{
    use apiJsonReturnTrait;
    protected $BagianDalamService;

    public function __construct(BagianDalamService $BagianDalamService)
    {
        $this->BagianDalamService = $BagianDalamService;
    }
    
    public function getBagianDalam($id)
    {
        $data = $this->BagianDalamService->getBagianDalam($id);
        return $this->returnJson($data);
    }

    public function store(BagianDalamStoreRequest $request)
    {
        $id = $this->BagianDalamService->getBagianDalam($request->pendaftaran_id);
        if($id){
            $data = $this->BagianDalamService->update($request, $id['id']);
            return $this->returnJson($data, 'Updated');
        }else{
            $data = $this->BagianDalamService->create($request->all());
            return $this->returnJson($data, 'Created');
        }
    }

    public function update(BagianDalamUpdateRequest $request, $id)
    {
        $data = $this->BagianDalamService->update($request, $id);
        return $this->returnJson($data, 'BagianDalam Updated');
    }

    public function delete($id)
    {
        $data = $this->BagianDalamService->delete($id);
        return $this->returnJson('', 'BagianDalam Deleted');
    }
}

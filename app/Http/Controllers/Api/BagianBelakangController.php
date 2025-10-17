<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\BagianBelakangService;
use App\Http\Requests\BagianBelakang\BagianBelakangStoreRequest;
use App\Http\Requests\BagianBelakang\BagianBelakangUpdateRequest;

class BagianBelakangController extends Controller
{
    use apiJsonReturnTrait;
    protected $BagianBelakangService;

    public function __construct(BagianBelakangService $BagianBelakangService)
    {
        $this->BagianBelakangService = $BagianBelakangService;
    }

    public function getBagianBelakang($id)
    {
        $data = $this->BagianBelakangService->getBagianBelakang($id);
        return $this->returnJson($data);
    }

    public function store(BagianBelakangStoreRequest $request)
    {
        $id = $this->BagianBelakangService->getBagianBelakang($request->pendaftaran_id);
        if($id){
            $data = $this->BagianBelakangService->update($request, $id['id']);
            return $this->returnJson($data, 'Updated');
        }else{
            $data = $this->BagianBelakangService->create($request->all());
            return $this->returnJson($data, 'Created');
        }
    }

    public function update(BagianBelakangUpdateRequest $request, $id)
    {
        $data = $this->BagianBelakangService->update($request, $id);
        return $this->returnJson($data, 'BagianBelakang Updated');
    }

    public function delete($id)
    {
        $data = $this->BagianBelakangService->delete($id);
        return $this->returnJson('', 'BagianBelakang Deleted');
    }
}

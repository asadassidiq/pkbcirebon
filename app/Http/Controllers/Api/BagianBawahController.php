<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\BagianBawahService;
use App\Http\Requests\BagianBawah\BagianBawahStoreRequest;
use App\Http\Requests\BagianBawah\BagianBawahUpdateRequest;

class BagianBawahController extends Controller
{
    use apiJsonReturnTrait;
    protected $BagianBawahService;

    public function __construct(BagianBawahService $BagianBawahService)
    {
        $this->BagianBawahService = $BagianBawahService;
    }

    public function getBagianBawah($id)
    {
        $data = $this->BagianBawahService->getBagianBawah($id);
        return $this->returnJson($data);
    }

    public function store(BagianBawahStoreRequest $request)
    {

        $id = $this->BagianBawahService->getBagianBawah($request->pendaftaran_id);
        if($id){
            $data = $this->BagianBawahService->update($request, $id['id']);
            return $this->returnJson($data, 'BagianBawah Updated');
        }else{
            $data = $this->BagianBawahService->create($request->all());
            return $this->returnJson($data, 'BagianBawah Created');
        }
    }

    public function update(BagianBawahUpdateRequest $request, $id)
    {
        $data = $this->BagianBawahService->update($request, $id);
        return $this->returnJson($data, 'BagianBawah Updated');
    }

    public function delete($id)
    {
        $data = $this->BagianBawahService->delete($id);
        return $this->returnJson('', 'BagianBawah Deleted');
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\BagianDepanService;
use App\Http\Requests\BagianDepan\BagianDepanStoreRequest;
use App\Http\Requests\BagianDepan\BagianDepanUpdateRequest;

class BagianDepanController extends Controller
{
    use apiJsonReturnTrait;
    protected $BagianDepanService;

    public function __construct(BagianDepanService $BagianDepanService)
    {
        $this->BagianDepanService = $BagianDepanService;
    }

    public function getBagianDepan($id)
    {
        $data = $this->BagianDepanService->getBagianDepan($id);
        return $this->returnJson($data);
    }

    public function store(BagianDepanStoreRequest $request)
    {
        $id = $this->BagianDepanService->getBagianDepan($request->pendaftaran_id);
        if($id){
            $data = $this->BagianDepanService->update($request, $id['id']);
            return $this->returnJson($data, 'Updated');
        }else{
            $data = $this->BagianDepanService->create($request->all());
            return $this->returnJson($data, 'Created');
        }
    }

    public function update(BagianDepanUpdateRequest $request, $id)
    {
        $data = $this->BagianDepanService->update($request, $id);
        return $this->returnJson($data, 'BagianDepan Updated');
    }

    public function delete($id)
    {
        $data = $this->BagianDepanService->delete($id);
        return $this->returnJson('', 'BagianDepan Deleted');
    }
}

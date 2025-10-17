<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\BagianKiriService;
use App\Http\Requests\BagianKiri\BagianKiriStoreRequest;
use App\Http\Requests\BagianKiri\BagianKiriUpdateRequest;

class BagianKiriController extends Controller
{
    use apiJsonReturnTrait;
    protected $BagianKiriService;

    public function __construct(BagianKiriService $BagianKiriService)
    {
        $this->BagianKiriService = $BagianKiriService;
    }

    public function getBagianKiri($id)
    {
        $data = $this->BagianKiriService->getBagianKiri($id);
        return $this->returnJson($data);
    }

    public function store(BagianKiriStoreRequest $request)
    {
        $id = $this->BagianKiriService->getBagianKiri($request->pendaftaran_id);
        if($id){
            $data = $this->BagianKiriService->update($request, $id['id']);
            return $this->returnJson($data, 'Updated');
        }else{
            $data = $this->BagianKiriService->create($request->all());
            return $this->returnJson($data, 'Created');
        }
    }

    public function update(BagianKiriUpdateRequest $request, $id)
    {
        $data = $this->BagianKiriService->update($request, $id);
        return $this->returnJson($data, 'BagianKiri Updated');
    }

    public function delete($id)
    {
        $data = $this->BagianKiriService->delete($id);
        return $this->returnJson('', 'BagianKiri Deleted');
    }
}

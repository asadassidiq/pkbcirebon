<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\DimensiService;
use App\Http\Requests\Dimensi\DimensiStoreRequest;
use App\Http\Requests\Dimensi\DimensiUpdateRequest;

class DimensiController extends Controller
{
    use apiJsonReturnTrait;
    protected $DimensiService;

    public function __construct(DimensiService $DimensiService)
    {
        $this->DimensiService = $DimensiService;
    }
    
    public function getDimensi($id)
    {
        $data = $this->DimensiService->getDimensi($id);
        return $this->returnJson($data);
    }

    public function store(DimensiStoreRequest $request)
    {
        $id = $this->DimensiService->getDimensi($request->pendaftaran_id);
        if($id){
            $data = $this->DimensiService->update($request, $id['id']);
            return $this->returnJson($data, 'Updated');
        }else{
            $data = $this->DimensiService->create($request->all());
            return $this->returnJson($data, 'Created');
        }
    }

    public function update(DimensiUpdateRequest $request, $id)
    {
        $data = $this->DimensiService->update($request, $id);
        return $this->returnJson($data, 'Dimensi Updated');
    }

    public function delete($id)
    {
        $data = $this->DimensiService->delete($id);
        return $this->returnJson('', 'Dimensi Deleted');
    }
}

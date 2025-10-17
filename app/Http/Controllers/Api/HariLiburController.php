<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\HariLiburService;
use App\Http\Requests\HariLibur\HariLiburStoreRequest;
use App\Http\Requests\HariLibur\HariLiburUpdateRequest;

class HariLiburController extends Controller
{
    use apiJsonReturnTrait;
    protected $HariLiburService;

    public function __construct(HariLiburService $HariLiburService)
    {
        $this->HariLiburService = $HariLiburService;
    }

    public function index()
    {
        $data = $this->HariLiburService->getAllHariLibur();
        return $this->returnJson($data);
    }

    public function getCekHariLibur(){
    	$data = $this->HariLiburService->getCekHariLibur();
        return $this->returnJson($data);
    }

    public function getHariLiburName()
    {
        $data = $this->HariLiburService->getHariLiburName();
        return $this->returnJson($data);
    }

    public function getHariLibur($id)
    {
        $data = $this->HariLiburService->getHariLibur($id);
        return $this->returnJson($data);
    }

    public function store(HariLiburStoreRequest $request)
    {
        $tanggal = date_create($request->tanggal);
        $tanggal = date_format($tanggal,"Y-m-d");
        $request->merge([
            'tanggal'            => $tanggal,
        ]);
        $data = $this->HariLiburService->create($request->all());

        return $this->returnJson($data, 'HariLibur Created');
    }

    public function update(HariLiburUpdateRequest $request, $id)
    {
        $data = $this->HariLiburService->update($request, $id);
        return $this->returnJson($data, 'HariLibur Updated');
    }

    public function delete($id)
    {
        $data = $this->HariLiburService->delete($id);
        return $this->returnJson('', 'HariLibur Deleted');
    }
}

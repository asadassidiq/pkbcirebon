<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\DatapengujianService;
use App\Http\Requests\Datapengujian\DatapengujianStoreRequest;
use App\Http\Requests\Datapengujian\DatapengujianUpdateRequest;

class DatapengujianController extends Controller
{
    use apiJsonReturnTrait;
    protected $DatapengujianService;

    public function __construct(DatapengujianService $DatapengujianService)
    {
        $this->DatapengujianService = $DatapengujianService;
    }

    public function index()
    {
        $data = $this->DatapengujianService->getAllDatapengujian();
        return $this->returnJson($data);
    }

    public function updateData()
    {
        $data = $this->DatapengujianService->updateData();
        return $this->returnJson($data);
    }

    public function getDatapengujianName()
    {
        $data = $this->DatapengujianService->getDatapengujianName();
        return $this->returnJson($data);
    }

    public function getDatapengujian($id)
    {
        $data = $this->DatapengujianService->getDatapengujian($id);
        return $this->returnJson($data);
    }

    public function store(DatapengujianStoreRequest $request)
    {
        $tanggal = date_create($request->tanggal);
        $tanggal = date_format($tanggal,"Y-m-d");
        $request->merge([
            'tanggal'            => $tanggal,
        ]);
        $data = $this->DatapengujianService->create($request->all());

        return $this->returnJson($data, 'Datapengujian Created');
    }

    public function update(DatapengujianUpdateRequest $request, $id)
    {
        $data = $this->DatapengujianService->update($request, $id);
        return $this->returnJson($data, 'Datapengujian Updated');
    }

    public function nosertifikat(DatapengujianUpdateRequest $request, $id)
    {
        $data = $this->DatapengujianService->nosertifikat($request, $id);
        return $this->returnJson($data, 'Datapengujian Updated');
    }

    public function getnosertifikat($id)
    {
        $data = $this->DatapengujianService->getnosertifikat($id);
        return $this->returnJson($data);
    }

    public function undoVerif($id)
    {
        $data = $this->DatapengujianService->undoVerif($id);
        return $this->returnJson($data);
    }

    public function delete($id)
    {
        $data = $this->DatapengujianService->delete($id);
        return $this->returnJson('', 'Datapengujian Deleted');
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\IdentitasKendaraanService;
// use App\Services\MerekService;
// use App\Services\TipeService;
use App\Http\Requests\Identitaskendaraan\IdentitaskendaraanStoreRequest;
use App\Http\Requests\Identitaskendaraan\IdentitaskendaraanUpdateRequest;

class IdentitaskendaraanController extends Controller
{
    use apiJsonReturnTrait;
    protected $identitaskendaraanService;

    public function __construct(IdentitasKendaraanService $identitaskendaraanService)
    {
        $this->identitaskendaraanService = $identitaskendaraanService;
        // $this->merekService = $merekService;
        // $this->tipeService = $tipeService;
    }
    public function index()
    {
        $data = $this->identitaskendaraanService->getAllIdentitaskendaraan();
        return $this->returnJson($data);
    }

    public function getIdentitaskendaraan($id)
    {
        $data = $this->identitaskendaraanService->getIdentitaskendaraan($id);
        return $this->returnJson($data);
    }

    public function getIdentitaskendaraanPos($id)
    {
        $data = $this->identitaskendaraanService->getIdentitaskendaraanPos($id);
        return $this->returnJson($data);
    }

    public function getIdentitaskendaraanNouji()
    {
        $data = $this->identitaskendaraanService->getIdentitaskendaraanNouji();
        return $this->returnJson($data);
    }

    public function getNokendaraan()
    {
        $data = $this->identitaskendaraanService->getNokendaraan();
        return $this->returnJson($data);
    }

    public function getNorangka()
    {
        $data = $this->identitaskendaraanService->getNorangka();
        return $this->returnJson($data);
    }

    public function getCheck()
    {
        $data = $this->identitaskendaraanService->getCheck(request()->nouji);
        return $this->returnJson($data);
    }

    public function store(Request $request)
    {
        if (empty($request->kodewilayah)) {
            $request->merge([
                'kodewilayah' => env('APP_KODEWILAYAH'),
            ]);
        } else {
            if (is_array($request->kodewilayah)) {
                $request->merge([
                    'kodewilayah' => $request->kodewilayah['kodewilayah'],
                ]);
            }
        }

        if (empty($request->kodewilayahasal)) {
            $request->merge([
                'kodewilayahasal' => env('APP_KODEWILAYAH'),
            ]);
        } else {
            if (is_array($request->kodewilayahasal)) {
                $request->merge([
                    'kodewilayahasal' => $request->kodewilayahasal['kodewilayah'],
                ]);
            }
        }
        if (!empty($request->tglsertifikatreg)) {
            $tglsertifikatreg = date_create($request->tglsertifikatreg);
            $tglsertifikatreg = date_format($tglsertifikatreg, "Y-m-d");
            $request->merge([
                'tglsertifikatreg' => $tglsertifikatreg,
            ]);
        }

        // $merek = $this->merekService->getByMerek($request->merek);
        // if (empty($merek) && strlen($request->merek) < 50) {
        //     $merek = $this->merekService->create($request);
        // }

        // $tipe = $this->tipeService->getByTipe($request->tipe);
        // if (empty($tipe) && strlen($request->tipe) < 50) {
        //     if ($merek) {
        //         $tipe = $this->tipeService->create($merek['id'], $request->tipe);
        //     } else {
        //         $tipe = $this->tipeService->create('0', $request->tipe);
        //     }
        // }

        if (is_array($request->model)) {
            $model = $request->model['jenis'];
        }
        // elseif(strpos($request->model,"{") == 0){
        //     $model = $request->model['jenis'];
        // }
         else {
            $model = $request->model;
        }

        $request->merge([
            'model' => $model,
        ]);

        $id = $this->identitaskendaraanService->getCheckNouji($request->nouji);
        if ($id) {
            $data = $this->identitaskendaraanService->update($request, $id->id);
            return $this->returnJson($data, 'Identitaskendaraan Updated');
        } else {
            $data = $this->identitaskendaraanService->create($request->all());
            return $this->returnJson($data, 'Identitaskendaraan Created');
        }
    }

    public function update(Request $request, $id)
    {
        if (empty($request->kodewilayah)) {
            $request->merge([
                'kodewilayah' => env('APP_KODEWILAYAH'),
            ]);
        } else {
            if (is_array($request->kodewilayah)) {
                $request->merge([
                    'kodewilayah' => $request->kodewilayah['kodewilayah'],
                ]);
            }
        }

        if (empty($request->kodewilayahasal)) {
            $request->merge([
                'kodewilayahasal' => env('APP_KODEWILAYAH'),
            ]);
        } else {
            if (is_array($request->kodewilayahasal)) {
                $request->merge([
                    'kodewilayahasal' => $request->kodewilayahasal['kodewilayah'],
                ]);
            }
        }

        if (!empty($request->tglsertifikatreg)) {
            $tglsertifikatreg = date_create($request->tglsertifikatreg);
            $tglsertifikatreg = date_format($tglsertifikatreg, "Y-m-d");
            $request->merge([
                'tglsertifikatreg' => $tglsertifikatreg,
            ]);
        }

        // $merek = $this->merekService->getByMerek($request->merek);
        // if (empty($merek) && strlen($request->merek) < 50) {
        //     $merek = $this->merekService->create($request);
        // }

        // $tipe = $this->tipeService->getByTipe($request->tipe);
        // if (empty($tipe) && strlen($request->tipe) < 50) {
        //     if ($merek) {
        //         $tipe = $this->tipeService->create($merek['id'], $request->tipe);
        //     } else {
        //         $tipe = $this->tipeService->create('0', $request->tipe);
        //     }
        // }


        if (is_array($request->model)) {
            $model = $request->model['jenis'];
        }else {
            $model = $request->model;
        }

        $request->merge([
            'model' => $model,
        ]);

        // $data = $request->id;
        // $check = $this->identitaskendaraanService->getIdentitaskendaraanid($id);
        // if($check){
            $data = $this->identitaskendaraanService->update($request, $id);
        // }
        // $data = $this->identitaskendaraanService->update($request, $request->id);

        return $this->returnJson($data, 'Identitaskendaraan Updated');
    }

    public function delete($id)
    {
        $data = $this->identitaskendaraanService->delete($id);
        return $this->returnJson('', 'Identitaskendaraan Deleted');
    }
}

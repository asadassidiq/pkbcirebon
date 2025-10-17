<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\CatatanService;
use App\Http\Requests\Catatan\CatatanStoreRequest;
use App\Http\Requests\Catatan\CatatanUpdateRequest;

class CatatanController extends Controller
{
    use apiJsonReturnTrait;
    protected $CatatanService;

    public function __construct(CatatanService $CatatanService)
    {
        $this->CatatanService = $CatatanService;
    }

    public function index()
    {
        $data = $this->CatatanService->getAllCatatan();
        return $this->returnJson($data);
    }

    public function getCatatanName($id)
    {
        $checkid = $this->CatatanService->checkid($id);
        if($checkid){
            $data = $this->CatatanService->getCatatanName($checkid['id']);
        }
        return $this->returnJson($data);
    }

    public function getAlasan()
    {
        $data = $this->CatatanService->getAlasan();
        return $this->returnJson($data);
    }

    public function getCatatan($id)
    {
        $checkid = $this->CatatanService->checkid($id);
        if($checkid){
            $data = $this->CatatanService->getCatatan($checkid['id'], '');
            return $this->returnJson($data);
        }
        return false;
    }

    public function getCatatanPos($id)
    {
        $checkid = $this->CatatanService->checkid($id);
        if($checkid){
            $pos1 = $this->CatatanService->getCatatanPos($checkid['id'], '1');
            $datapos1 = "";
            foreach ($pos1 as $pos1) {
                if ($datapos1 == "") {
                    $datapos1 =  $pos1->nama . ' : ' . $pos1->alasan;
                } else {
                    $datapos1 =  $datapos1 . ', ' . $pos1->nama . ' : ' . $pos1->alasan;
                }
            }

            $pos2 = $this->CatatanService->getCatatanPos($checkid['id'], '2');
            $datapos2 = "";
            foreach ($pos2 as $pos2) {
                if ($datapos2 == "") {
                    $datapos2 =  $pos2->nama . ' : ' . $pos2->alasan;
                } else {
                    $datapos2 =  $datapos2 . ', ' . $pos2->nama . ' : ' . $pos2->alasan;
                }
            }

            $pos3 = $this->CatatanService->getCatatanPos($checkid['id'], '3');
            $datapos3 = "";
            foreach ($pos3 as $pos3) {
                if ($datapos3 == "") {
                    $datapos3 =  $pos3->nama . ' : ' . $pos3->alasan;
                } else {
                    $datapos3 =  $datapos3 . ', ' . $pos3->nama . ' : ' . $pos3->alasan;
                }
            }

            $pos4 = $this->CatatanService->getCatatanPos($checkid['id'], '4');
            $datapos4 = "";
            foreach ($pos4 as $pos4) {
                if ($datapos4 == "") {
                    $datapos4 =  $pos4->nama . ' : ' . $pos4->alasan;
                } else {
                    $datapos4 =  $datapos4 . ', ' . $pos4->nama . ' : ' . $pos4->alasan;
                }
            }
            
            $data = array(
                'pos1' => $datapos1,
                'pos2' => $datapos2,
                'pos3' => $datapos3,
                'pos4' => $datapos4,
            );
        }else{
            $data = '';
        }
            
        return $this->returnJson($data);
    }

    public function store(Request $request)
    {
        $checkid = $this->CatatanService->checkid($request->pendaftaran_id);
        $count = $this->CatatanService->getCountCatatanName($checkid['id'], $request->nama);
        $countalsn = count($request->alasan);
        $insert = [];

        if ($count ==  0) {
            foreach ($request->alasan as $alasan) {
                $insert[] = array(
                    'pendaftaran_id'  => $checkid['id'],
                    'nama'            => $request->nama,
                    'hasiluji'        => $request->hasiluji,
                    'alasan'          => $alasan,
                    'rekomendasi'     => $request->rekomendasi,
                    'pos'             => $request->pos,
                    'status'          => $request->status
                );
            }

            $data = $this->CatatanService->create($insert);

            return $this->returnJson($data, 'Catatan Berhasil 1');
        } elseif ($countalsn != $count) {
            $delete = $this->CatatanService->delete($checkid['id'], $request->nama);
            $insert = [];
            foreach ($request->alasan as $alasan) {
                $insert[] = array(
                    'pendaftaran_id'  => $checkid['id'],
                    'nama'            => $request->nama,
                    'hasiluji'        => $request->hasiluji,
                    'alasan'          => $alasan,
                    'rekomendasi'     => $request->rekomendasi,
                    'pos'             => $request->pos,
                    'status'          => $request->status
                );
            }

            $data = $this->CatatanService->create($insert);

            return $this->returnJson($data, 'Catatan Berhasil 2');
        } elseif ($countalsn != $count) {
            $delete = $this->CatatanService->delete($checkid['id'], $request->nama);
            return $this->returnJson($delete, 'Catatan Delete Berhasil');
        } elseif ($countalsn == $count) {
            $insert = [];
            foreach ($request->alasan as $alasan) {
                $insert[] = array(
                    'pendaftaran_id'  => $checkid['id'],
                    'nama'            => $request->nama,
                    'hasiluji'        => $request->hasiluji,
                    'alasan'          => $alasan,
                    'rekomendasi'     => $request->rekomendasi,
                    'pos'             => $request->pos,
                    'status'          => $request->status
                );
            }
            $data = $this->CatatanService->updateCatatan($insert[0], $checkid['id']);
            return $this->returnJson($insert[0]['pendaftaran_id'], 'Catatan OK');
        } else {
            $delete = $this->CatatanService->delete($checkid['id'], $request->nama);
            $insert = [];
            foreach ($request->alasan as $alasan) {
                $insert[] = array(
                    'pendaftaran_id'  => $checkid['id'],
                    'nama'            => $request->nama,
                    'hasiluji'        => $request->hasiluji,
                    'alasan'          => $alasan,
                    'rekomendasi'     => $request->rekomendasi,
                    'pos'             => $request->pos,
                    'status'          => $request->status
                );
            }
            return $this->returnJson('', 'Catatan Berhasil 3');
        }
    }

    public function update(Request $request, $id)
    {
        $data = $this->CatatanService->updateCatatan($request, $id);
        return $this->returnJson($data, 'Catatan Updated');
    }

    public function delete($id)
    {
        $data = $this->CatatanService->delete($id);
        return $this->returnJson('', 'Catatan Deleted');
    }
}

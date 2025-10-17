<?php

namespace App\Services;

use App\Repositories\PendaftaranOnlineRepository;
use App\Repositories\PendaftaranRepository;
use App\Repositories\KuotaRepository;
use App\Repositories\IdentitaskendaraanRepository;
use App\Traits\apiJsonReturnTrait;


class PendaftaranOnlineService
{
    protected $repoPendaftaranOnline,$repoPend,$repoKuota,$repoIden;
    use apiJsonReturnTrait;

    public function __construct(PendaftaranOnlineRepository $repoPendaftaranOnline, KuotaRepository $repoKuota, IdentitaskendaraanRepository $repoIden, PendaftaranRepository $repoPend)
    {
        $this->repoPendaftaranOnline = $repoPendaftaranOnline;
        $this->repoKuota = $repoKuota;
        $this->repoIden = $repoIden;
        $this->repoPend = $repoPend;
    }

    public function getAll()
    {
        return $this->repoPendaftaranOnline->getAll();
    }

    public function getAllPendaftaranOnline()
    {
        return $this->repoPendaftaranOnline->getAll();
    }


    public function getPendaftaranDetail($id)
    {
        return $this->repoPendaftaranOnline->getPendaftaranDetail($id);
    }

    public function create($request)
    {
        $checkP = $this->repoPendaftaranOnline->checkPendaftaranOnline($request->tglpendaftaran,$request->nouji);
        if(!$checkP)
        {
            return $this->error(false,'No uji telah melalukan Pendaftaran Online dalam waktu 1 minggu ini','',422);
        }
        $checkKuota = $this->repoKuota->checkKuota($request->tglpendaftaran,$request->waktu);
        if(!$checkKuota)
        {
            if($request->waktu == '1'){
                return $this->error(false,'Kuota Pendaftaran Online Pagi Kosong','',422);
            }else{
                return $this->error(false,'Kuota Pendaftaran Online Siang Kosong','',422);
            }
        }
        $data = $this->repoPendaftaranOnline->createPendaftaranOnline($request);
        if($data)
        {
            $this->repoKuota->reductionKuota($request->tglpendaftaran,$request->waktu);
        }
        return $this->success(true,'Success Create','',200);
    }

    public function approve($request)
    {
        $checkNouji = $this->repoIden->checkNouji($request->nouji);
        if(!$checkNouji)
        {
            $cretaeDatakendaraan = $this->repoIden->setDefault($request);
            if($cretaeDatakendaraan)
            {
                $createPendaftaran = $this->repoPend->approvePendaftaranOnline($request,$cretaeDatakendaraan);
                $upStatus = $this->repoPendaftaranOnline->approve($request);
            }else{
                return $this->error(false,'Ada error','',422);
            }
        }else{
            $getData = $this->repoIden->getUUID($request->nouji);
            if($getData)
            {
                $createPendaftaran = $this->repoPend->approvePendaftaranOnline($request,$getData->id);
                $upStatus = $this->repoPendaftaranOnline->approve($request);
            }else{
                return $this->error(false,'Ada error','',422);
            }
        }
        return $this->success(true,'Success Approve',$createPendaftaran->uuid,200);
    }

    // public function update($request, $id)
    // {
    //     return $this->repoPendaftaranOnline->updatePendaftaranOnline($id, $request);
    // }

}

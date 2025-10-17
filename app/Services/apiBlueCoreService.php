<?php

namespace App\Services;

use App\Repositories\apiBlueCore;


class apiBlueCoreService
{
    protected $repoApi;

    public function __construct(apiBlueCore $repoApi)
    {
        $this->repoApi = $repoApi;
    }
    

    public function getDataMaster()
    {
        $prefix = str_replace("/", "", request()->p);
        $id = str_replace("/", "", request()->i);
        $nouji = str_replace("/", "", request()->n);
        $search_by = str_replace("/", "", request()->s);
        $keyword = str_replace("/", "", request()->k);
        // return $nouji;
        return $this->repoApi->getDataMaster($prefix,$id,$nouji,$search_by,$keyword);
    }

    public function getDataVTASRUT(){
        $search = request()->s;
        if(substr($search, -1) == "/"){
            $search = substr_replace($search, '', -1);
        }
        return $this->repoApi->getDataVTASRUT($search);
    }
}

<?php

namespace App\Repositories;

use App\Traits\RepositoryTrait;
use Illuminate\Database\Eloquent\Model;
use App\Models\UserPKB;
use DB;
use App\Traits\CryptHelper;

class UserRepository
{
    use RepositoryTrait;

    protected $model;

    public function __construct(UserPKB $model)
    {
        $this->model = $model;
    }

    public function getAll()
    {
        $data = $this->model;
        $search = str_replace("/", "", request()->q);
        
        if ($search != '') {
            $data = $data->where('users.name', 'LIKE', '%' . $search . '%');
        }
        return $data->paginate(10);
    }

    public function getUser($id)
    {
        $data = $this->model->where('uuid',$id)->first();
        if($data){
            if(!empty($data->pf)){
                $data->pf = true;
            }else{
                $data->pf = false;
            }
            if(!empty($data->ft)){
                $data->ft = true;
            }else{
                $data->ft = false;
            }
            if(!empty($data->ct)){
                $data->ct = true;
            }else{
                $data->ct= false;
            }
            if(!empty($data->p1)){
                $data->p1 = true;
            }else{
                $data->p1 = false;
            }
            if(!empty($data->p2)){
                $data->p2 = true;
            }else{
                $data->p2 = false;
            }
            if(!empty($data->p3)){
                $data->p3 = true;
            }else{
                $data->p3 = false;
            }
            if(!empty($data->p4)){
                $data->p4 = true;
            }else{
                $data->p4 = false;
            }
            if(!empty($data->v1)){
                $data->v1 = true;
            }else{
                $data->v1 = false;
            }
        }
        return $data;
    }

    public function getUserName()
    {
        $data = $this->model->orderBy('id', 'ASC');

        if(request()->name != '' && request()->name != 'undefined'   ){
            $data = $data->where('id', request()->name);
        }
        return $data->get();
    }

    public function createUser($request)
    {
        $key = 'solusiteknikindonesiaxsimbok';
        if($request->pf == true){
            $pf= CryptHelper::encrypt($request->username.'pendaftaranok', $key);
        }else{
            $pf = null;
        }
        if($request->ft == true){
            $ft= CryptHelper::encrypt($request->username.'fotokendaraanok', $key);
        }else{
            $ft = null;
        }
        if($request->ct == true){
            $ct= CryptHelper::encrypt($request->username.'cetakok', $key);
        }else{
            $ct = null;
        }
        if($request->p1 == true){
            $p1= CryptHelper::encrypt($request->username.'possatuok', $key);
        }else{
            $p1 = null;
        }
        if($request->p2 == true){
            $p2= CryptHelper::encrypt($request->username.'posduaok', $key);
        }else{
            $p2 = null;
        }
        if($request->p3 == true){
            $p3= CryptHelper::encrypt($request->username.'postigaok', $key);
        }else{
            $p3 = null;
        }
        if($request->p4 == true){
            $p4= CryptHelper::encrypt($request->username.'posempatok', $key);
        }else{
            $p4 = null;
        }
        if($request->v1 == true){
            $v1= CryptHelper::encrypt($request->username.'posverifsatuok', $key);
        }else{
            $v1 = null;
        }
        $data = $this->model::create([
                'name' => $request->name,
                'username' => $request->username,
                'role' => $request->role,
                'jabatan' => $request->jabatan,
                'nip' => $request->nip,
                'nrp' => $request->nrp,
                'pangkat' => $request->pangkat,
                'password' => $request->password,
                'pf' => $pf,
                'ft' => $ft,
                'p1' => $p1,
                'p2' => $p2,
                'p3' => $p3,
                'p4' => $p4,
                'v1' => $v1,
                'ct' => $ct,
            ]);
        return $data;
    }

    public function updateUser($id,$request)
    {

        $key = 'solusiteknikindonesiaxsimbok';
        $update = $this->model->where('uuid',$id)->first();

        $update->name = $request->name;
        $update->username = $request->username;
        $update->role = $request->role;
        $update->jabatan = $request->jabatan;
        $update->nip = $request->nip;
        $update->nrp = $request->nrp;
        $update->pangkat = $request->pangkat;
        if(!empty($request->password)){
            $update->password  = $request->password;
        }
        if($request->pf == true){
            $pf= CryptHelper::encrypt($request->username.'pendaftaranok', $key);
        }else{
            $pf = null;
        }
        if($request->ft == true){
            $ft= CryptHelper::encrypt($request->username.'fotokendaraanok', $key);
        }else{
            $ft = null;
        }
        if($request->ct == true){
            $ct= CryptHelper::encrypt($request->username.'cetakok', $key);
        }else{
            $ct = null;
        }
        if($request->p1 == true){
            $p1= CryptHelper::encrypt($request->username.'possatuok', $key);
        }else{
            $p1 = null;
        }
        if($request->p2 == true){
            $p2= CryptHelper::encrypt($request->username.'posduaok', $key);
        }else{
            $p2 = null;
        }
        if($request->p3 == true){
            $p3= CryptHelper::encrypt($request->username.'postigaok', $key);
        }else{
            $p3 = null;
        }
        if($request->p4 == true){
            $p4= CryptHelper::encrypt($request->username.'posempatok', $key);
        }else{
            $p4 = null;
        }
        if($request->v1 == true){
            $v1= CryptHelper::encrypt($request->username.'posverifsatuok', $key);
        }else{
            $v1 = null;
        }
        $update->pf  = $pf;
        $update->ft  = $ft;
        $update->p1  = $p1;
        $update->p2  = $p2;
        $update->p3  = $p3;
        $update->p4  = $p4;
        $update->v1  = $v1;
        $update->ct  = $ct;
        if ($update->save()) {
            return true;
        }
        return false;
    }

    public function delete($id)
    {
        $delete = $this->model->where('uuid', $id);
        $delete->delete();
        return $delete;
    }
}

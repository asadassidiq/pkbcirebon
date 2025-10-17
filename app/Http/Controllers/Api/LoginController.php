<?php

namespace App\Http\Controllers\Api;

use App\Models\UserPKB;
use App\Models\Pendaftaran;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Traits\apiJsonReturnTrait;
use Illuminate\Support\Facades\Http;

class LoginController extends Controller
{    
    use apiJsonReturnTrait;

    /**
     * index
     *
     * @param  mixed $request
     * @return void
     */
    public function index(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
            'recaptcha' => 'required',
        ]);


        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => env('RECAPTCHA_SECRET_KEY'),
            'response' => $request->input('recaptcha'),
        ]);
        if (!$response->json('success')) {
            return response()->json(['message' => 'CAPTCHA validation failed'], 422);
        }

        $user= UserPKB::where('username', $request->username)->first();
        
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response([
                    'success'   => false,
                    'message' => ['Username atau Password tidak sesuai!.']
                ], 200);
            }
        
            $token = $user->createToken('ApiToken')->plainTextToken;
            if($user){
                if(!empty($user->pf)){
                    $user->pf = true;
                }else{
                    $user->pf = false;
                }
                if(!empty($user->ft)){
                    $user->ft = true;
                }else{
                    $user->ft = false;
                }
                if(!empty($user->ct)){
                    $user->ct = true;
                }else{
                    $user->ct= false;
                }
                if(!empty($user->p1)){
                    $user->p1 = true;
                }else{
                    $user->p1 = false;
                }
                if(!empty($user->p2)){
                    $user->p2 = true;
                }else{
                    $user->p2 = false;
                }
                if(!empty($user->p3)){
                    $user->p3 = true;
                }else{
                    $user->p3 = false;
                }
                if(!empty($user->p4)){
                    $user->p4 = true;
                }else{
                    $user->p4 = false;
                }
                if(!empty($user->v1)){
                    $user->v1 = true;
                }else{
                    $user->v1 = false;
                }
            }
            $response = [
                'success'   => true,
                'user'      => $user,
                'token'     => $token
            ];
        
        return response($response, 201);
    }

    public function checkSession(Request $request)
    {
        $antrianDataPos1 = Pendaftaran::where('tglpendaftaran',date("Y/m/d"))->where('posisi','1')->count();
        $antrianDataPos2 = Pendaftaran::where('tglpendaftaran',date("Y/m/d"))->where('posisi','2')->count();
        $antrianDataPos3 = Pendaftaran::where('tglpendaftaran',date("Y/m/d"))->where('posisi','3')->count();
        $antrianDataPos4 = Pendaftaran::where('tglpendaftaran',date("Y/m/d"))->where('posisi','4')->count();
        $antrianDataVerif1 = Pendaftaran::where('tglpendaftaran',date("Y/m/d"))->where('posisi','9')->count();
        $antrianDataFoto = Pendaftaran::where('tglpendaftaran',date("Y/m/d"))->whereIn('kodepenerbitans_id',['1','2','3','4','5','6','7'])->where('foto','0')->count();
        $antrianDataCetak = Pendaftaran::where('tglpendaftaran',date("Y/m/d"))->whereIn('kodepenerbitans_id',['1','2','3','4','5','6','7'])->where('posisi','10')->count();
        $antrianDataSurat = Pendaftaran::where('tglpendaftaran',date("Y/m/d"))->whereIn('kodepenerbitans_id',['9','10','11','12'])->where('posisi','10')->count();
        $antrianDataPenyerahan = Pendaftaran::where('tglpendaftaran',date("Y/m/d"))->where('posisi','11')->count();
        $data  = [
            'pos1'   => $antrianDataPos1,
            'pos2'   => $antrianDataPos2,
            'pos3'   => $antrianDataPos3,
            'pos4'   => $antrianDataPos4,
            'verif1' => $antrianDataVerif1,
            'foto'   => $antrianDataFoto,
            'cetak'  => $antrianDataCetak,
            'surat'  => $antrianDataSurat,
            'penyerahan'  => $antrianDataPenyerahan,
        ];
        return response()->json($data);
    }

    public function refresh(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();

        return response()->json([
            'token' => $request->user()->createToken('api')->plainTextToken,
        ]);
    }
    
    /**
     * logout
     *
     * @return void
     */
    public function logout()
    {
        auth()->logout();
        return response()->json([
            'success'    => true
        ], 200);
    }

}
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Traits\CryptHelper;
use App\Models\UserPKB;

use function PHPUnit\Framework\isNull;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, $role)
    {

        $user = auth()->user();
        if (!$user) {
            if ($request->expectsJson()) {
                return response()->json([
                    'status' => 403,
                    'message' => 'Unauthorized..',
                ], 403);
            }
            abort(403, 'Unauthorized');
        }

        $ps = $request->route()?->getPrefix();
        $nm = $request->route()->getName();
        $pos = $request->query('ps');
        // dd($request->route());
        $checkPs = '';
        // Contoh penggunaan decrypt
        if($ps == 'api/pendaftaran' || $ps == 'api/antrian' || $ps == 'api/pendaftaranonline' || $ps == 'api/regonline' || $ps == 'api/pendaftaran2' || $ps == 'api/penyerahan' || $ps == 'api/kuota' || $ps == 'api/harilibur' || $ps == 'api/bluecore' || $ps == 'api/vta')
        {
            $encrypted = $user->pf;
            $checkPs = $user->username.'pendaftaranok';
        }elseif($ps == 'api/foto')
        {
            $encrypted = $user->ft;
            $checkPs = $user->username.'fotokendaraanok';
        }
        elseif($ps == 'api/pengujian')
        {
            if($pos == 1){
                $encrypted = $user->p1;
                $checkPs = $user->username.'possatuok';
            }elseif($pos == 2){
                $encrypted = $user->p2;
                $checkPs = $user->username.'posduaok';
            }elseif($pos == 3){
                $encrypted = $user->p3;
                $checkPs = $user->username.'postigaok';
            }elseif($pos == 4){
                $encrypted = $user->p4;
                $checkPs = $user->username.'posempatok';
            }elseif($pos == 5){
                $encrypted = $user->p5;
                $checkPs = $user->username.'poslimaok';
            }elseif($pos == 6){
                $encrypted = $user->p6;
                $checkPs = $user->username.'posenamok';
            }elseif($pos == 7){
                $encrypted = $user->p7;
                $checkPs = $user->username.'postujuhok';
            }elseif($pos == 8){
                $encrypted = $user->p8;
                $checkPs = $user->username.'posdelapanok';
            }
            
        }
        elseif($ps == 'api/verif')
        {
            $encrypted = $user->v1;
            $checkPs = $user->username.'posverifsatuok';
        }elseif($ps == 'api/tandatangan')
        {
            $encrypted = $user->ct;
            $checkPs = $user->username.'cetakok';
        }elseif($ps == 'api/datapengujian' || $ps == 'api/surat' || $ps == 'api/nosurat')
        {
            $encrypted = $user->ct;
            $checkPs = $user->username.'cetakok';
            if($user->ct == null){
                $encrypted = $user->v1;
                $checkPs = $user->username.'posverifsatuok';
            }
        }elseif($ps == 'api/hasiluji')
        {
            $encrypted = $user->ct;
            $checkPs = $user->username.'cetakok';
            if($user->ct == null){
                $encrypted = $user->v1;
                $checkPs = $user->username.'posverifsatuok';
            }
        }elseif($ps == 'api/datakendaraan'){
            $encrypted = $user->pf;
            $checkPs = $user->username.'pendaftaranok';
            if($user->pf == null){
                $encrypted = $user->v1;
                $checkPs = $user->username.'posverifsatuok';
            }
        }else{
            $encrypted = '-';
            $checkPs = $user->username;
        }
        
        $key = 'solusiteknikindonesiaxsimbok';

        $decrypted = CryptHelper::decrypt($encrypted, $key);
        
        if($ps == 'api/monitoring'){
            if($user->role == 'KEPALA' || $user->role == 'PENGUJI' || $user->role == 'ADMIN'){
                $decrypted = $checkPs;
            }
        }elseif($ps == 'api/verify'){
            if($user->role == 'KEPALA' || $user->role == 'PENGUJI' || $user->role == 'ADMIN'){
                $decrypted = $checkPs;
            }
        // }elseif($ps == 'api/pengujian'){
        //     if($user->role == 'KEPALA' || $user->role == 'PENGUJI' || $user->role == 'ADMIN'){
        //         $decrypted = $checkPs;
        //     }
        }elseif($ps == 'api/riwayatuji'){
            if($user->role == 'KEPALA' || $user->role == 'PENGUJI' || $user->role == 'ADMIN'){
                $decrypted = $checkPs;
            }
        }elseif($ps == 'api/bluecore' || $ps == 'api/vta'){
            if($user->role == 'PENGUJI' || $user->role == 'ADMIN'){
                $decrypted = $checkPs;
            }
        }elseif($ps == 'api/identitaskendaraan'){
            if($user->role == 'KEPALA' || $user->role == 'PENGUJI' || $user->role == 'ADMIN' || $user->role == 'PETUGAS'){
                $decrypted = $checkPs;
            }
        }elseif($ps == 'api/identitaskendaraan'){
            if($user->role == 'PENGUJI' || $user->role == 'ADMIN'){
                $decrypted = $checkPs;
            }
        }elseif($ps == 'api/kuota'){
            if($user->role == 'PENGUJI' || $user->role == 'ADMIN'){
                $decrypted = $checkPs;
            }
        }elseif($ps == 'api/harilibur'){
            if( $user->role == 'ADMIN'){
                $decrypted = $checkPs;
            }
        }elseif($ps == 'api/tandatangan'){
            if($user->role == 'ADMIN'){
                $decrypted = $checkPs;
            }
        }elseif($ps == 'api/datakendaraan'){
            if($user->role == 'KEPALA' || $user->role == 'ADMIN'){
                $decrypted = $checkPs;
            }
        }elseif($ps == 'api/kota' || $ps == 'api/kecamatan' || $ps == 'api/kelurahan'){
            if($user->role == 'KEPALA' || $user->role == 'PENGUJI' || $user->role == 'ADMIN' || $user->role == 'PETUGAS'){
                $decrypted = $checkPs;
            }
        }elseif($ps == 'api/user'){
            if($user->role == 'ADMIN'){
                $decrypted = $checkPs;
            }
        }elseif($nm == 'get.verif' || $nm == 'identitaskendaraan.pos' || $nm == 'approving.surat'){
            if($nm != null){
                if($user->role == 'KEPALA' || $user->role == 'ADMIN'){
                    $decrypted = $checkPs;
                }
            }
        }

        // Tambah logika pengecekan role dsb...
        if ($checkPs !== $decrypted) {
            if ($request->expectsJson()) {
                return response()->json([
                    'status' => 403,
                    'message' => 'Akses ditolak. Anda tidak memiliki izin.',
                ], 403);
            }
            // abort(403, 'Anda tidak memiliki akses ke halaman ini.');
        }

        // return $next($request);
        $allowedRoles = explode('|', $role);
        if (!in_array($user->role, $allowedRoles)) {
            return $next($request);
        }
        
        if ($request->expectsJson()) {
            return response()->json([
                'status' => 403,
                'message' => 'Unauthorized.',
            ], 403);
        }
        abort(403, 'Unauthorized');
    }

}

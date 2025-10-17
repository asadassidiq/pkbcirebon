<?php

namespace App\Repositories;

use App\Models\Pendaftaran;
use App\Models\Persuratan;
use App\Models\Merek;
use App\Models\Bc_Tipe;
use App\Models\Varian;
use App\Models\Bc_Jenis;
use App\Models\Subjenis;
use App\Models\Kelasjalan;
use App\Models\Bahanbakar;
use App\Models\Statuspenerbitan;
use App\Models\Kodewilayah;
use App\Models\Bc_Srut;

class apiBlueCore
{
    public function getDataMaster($prefix,$id,$nouji,$search_by,$keyword){
        // Inisialisasi sesi cURL
        $curl = curl_init();
        
        if(empty($nouji) || is_null($nouji)){
            $nouji = null;
        };
        if(empty($search_by) || is_null($search_by)){
            $search_by = null;
        };
        if(empty($keyword) || is_null($keyword)){
            $keyword = null;
        };
        $token = "eyJpdiI6ImltODYxQVRPejZsVzd1RktKcUcwaUE9PSIsInZhbHVlIjoiU1M4ODg3bFdaZHlsQWFHaFRUSFM0akpTbEdzaWtpcGs0bTBnMUdFMTk4RVNXbUZjWFp4aFllNkpzZ2Jza1FuZGFTbGRLemRPZjBVdmQwMUJTR0pYTjJ5Zm5NQzdmclZNdGdrU0s1Qlg1ejllRVVOYVZwMCtwWTZPbnh6cENOMVgiLCJtYWMiOiJjZjA5MjA1MzljNWRjZGJhNjI2N2UzZTM2Nzk1YTIxMzc4ZjQ3ZTgxNGVlODNlNGQ5OTYxNzNmMWMxM2NjYWQwIn0=";
        
        // Data yang akan dikirim dalam format JSON

        if($prefix == "varian"){
            $data = json_encode([
                "token" => $token,
                "prefix" => $prefix,
                "param" => [
                    "vehicle_varian_type_id" => $id,
                ]
            ]);
        }elseif($prefix == "variantype"){
            $data = json_encode([
                "token" => $token,
                "prefix" => $prefix,
                "param" => [
                    "vehicle_brand_id" => $id,
                ]
            ]);
        }elseif($prefix == "subvehicletype"){
            $data = json_encode([
                "token" => $token,
                "prefix" => $prefix,
                "param" => [
                    "vehicle_type_id" => $id,
                ]
            ]);
        }elseif($prefix == "area" && $keyword !== null){
            $data = json_encode([
                "token" => $token,
                "prefix" => $prefix,
                "param" => [
                    "search_by" => 'code',
                    "keyword" => $keyword
                ]
            ]);
        }elseif($prefix == "insertexam"){
            $data = json_encode([
                "token" => $token,
                "prefix" => $prefix,
                "param" => [
                    "nouji" => $nouji,
                    "status_penerbitan" => (int)$search_by,
                    "area_code_tujuan" => $keyword
                ]
            ]);
        }elseif($prefix == "checkpengujiankeluar"){
            $data = json_encode([
                "token" => $token,
                "prefix" => $prefix,
                "param" => [
                    "nouji" => $nouji,
                    "statuspenerbitan" => (int)$search_by,
                ]
            ]);
        }else{
            $data = json_encode([
                "token" => $token,
                "prefix" => $prefix,
                "param" => [
                    "search_by" => $search_by,
                    "keyword" => $keyword
                ]
            ]);
        }

        // return $data;
        // die();


        // Set opsi cURL
        curl_setopt_array($curl, [
            CURLOPT_URL => 'https://ujiberkala-middle.kemenhub.go.id/api/v1/global',  // URL endpoint
            CURLOPT_RETURNTRANSFER => true,  // Agar hasil dikembalikan sebagai string, bukan langsung output
            CURLOPT_FOLLOWLOCATION => true,  // Ikuti redirect jika ada
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',  // Header untuk menunjukkan tipe konten
            ],
            CURLOPT_POST => true,  // Gunakan metode POST
            CURLOPT_POSTFIELDS => $data,  // Data yang akan dikirim
            CURLOPT_CONNECTTIMEOUT => 10, // timeout koneksi (detik)
            CURLOPT_TIMEOUT => 10,        // timeout keseluruhan (detik)
        ]);

        // // Eksekusi request
        $response = curl_exec($curl);
        if ($response === false) {
            $response = '';
        }

        // Cek jika ada error dalam request
        if (curl_errno($curl)) {
            // echo 'Error:' . curl_error($curl);
            if(empty($response)){
                if($prefix == "statuspenerbitan"){
                    return $this->returnJson(Statuspenerbitan::all());
                }elseif($prefix == "kelasjalan"){
                    return $this->returnJson(Kelasjalan::all());
                }elseif($prefix == "merk"){
                    return $this->returnJson(Merek::all());
                }elseif($prefix == "varian"){
                    if(empty($id) || is_null($id)){
                        return $this->returnJson(Varian::all());
                    }else{
                        return $this->returnJson(Varian::where('vehicle_varian_type_id',$id)->get());
                    }
                }elseif($prefix == "variantype"){
                    if(empty($id) || is_null($id)){
                        return $this->returnJson(Bc_Tipe::all());
                    }else{
                        return $this->returnJson(Bc_Tipe::where('vehicle_brand_id',$id)->get());
                    }
                }elseif($prefix == "subvehicletype"){
                    if(empty($id) || is_null($id)){
                        return $this->returnJson(Subjenis::all());
                    }else{
                        return $this->returnJson(Subjenis::where('vehicle_sub_type_id',$id)->get());
                    }
                }elseif($prefix == "vehicletype"){
                    return $this->returnJson(Bc_Jenis::all());
                }elseif($prefix == "area"){
                    return $this->returnJson(Kodewilayah::all());
                }elseif($prefix == "fuel"){
                    return $this->returnJson(Bahanbakar::all());
                }
            }
        } else {
            // Cek apakah response valid JSON
            $responseArray = json_decode($response, true);
            $json_response = json_decode($response);

            if(empty($response)){
                if($prefix == "statuspenerbitan"){
                    return $this->returnJson(Statuspenerbitan::all());
                }elseif($prefix == "kelasjalan"){
                    return $this->returnJson(Kelasjalan::all());
                }elseif($prefix == "merk"){
                    return $this->returnJson(Merek::all());
                }elseif($prefix == "varian"){
                    if(empty($id) || is_null($id)){
                        return $this->returnJson(Varian::all());
                    }else{
                        return $this->returnJson(Varian::where('vehicle_varian_type_id',$id)->get());
                    }
                }elseif($prefix == "variantype"){
                    if(empty($id) || is_null($id)){
                        return $this->returnJson(Bc_Tipe::all());
                    }else{
                        return $this->returnJson(Bc_Tipe::where('vehicle_brand_id',$id)->get());
                    }
                }elseif($prefix == "subvehicletype"){
                    if(empty($id) || is_null($id)){
                        return $this->returnJson(Subjenis::all());
                    }else{
                        return $this->returnJson(Subjenis::where('vehicle_sub_type_id',$id)->get());
                    }
                }elseif($prefix == "vehicletype"){
                    return $this->returnJson(Bc_Jenis::all());
                }elseif($prefix == "area"){
                    return $this->returnJson(Kodewilayah::all());
                }elseif($prefix == "fuel"){
                    return $this->returnJson(Bahanbakar::all());
                }
            }

            if (json_last_error() == JSON_ERROR_NONE) {
                // Tampilkan respons dalam format "pretty" jika JSON valid
                // echo "<pre>" . json_encode($json_response, JSON_PRETTY_PRINT) . "</pre>";
                if($prefix == "insertexam"){
                    $status = $responseArray['status'];
                    if($status){
                        $data = Pendaftaran::where('uuid',$id)->first();
                        if($data){
                            $datSurat = Persuratan::where('pendaftaran_id',$data->id)->first();
                            $datSurat->status_cetak = '1';
                            $datSurat->save();
                        }
                    }
                }
                return $json_response;
            } else {
                // Tampilkan respons asli jika bukan JSON
                return $response;
            }
        }

        // Tutup sesi cURL
        curl_close($curl);
    }

    public function getDataVTASRUT($search){
        // API URL
        $base_url = 'https://api-gateway.hubdat.dephub.go.id/data-integration-service/vta/srut/find';

        // Parameter pencarian (misalnya, didapatkan dari input pengguna)
        $search_query = $search; // Bisa diubah atau diambil dari input form

        // Menambahkan parameter pencarian ke URL
        $url = $base_url . '?search=' . urlencode($search_query);
        $cookie_name = 'VTA-TOKEN';
        if (isset($_COOKIE[$cookie_name])) {
            $token = $_COOKIE[$cookie_name];
        } else {
            $cookie_value = $this->getTokenVTASRUT();
            setcookie($cookie_name, $cookie_value, time() + (332000), "/");
            // Bearer Token
            $token = $cookie_value;
        }

        // Inisialisasi cURL
        $ch = curl_init();

        // Mengatur URL dengan parameter pencarian
        curl_setopt($ch, CURLOPT_URL, $url);

        // Mengatur metode HTTP menjadi GET
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");

        // Menambahkan header Authorization dengan Bearer token
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Authorization: Bearer ' . $token,
            'Content-Type: application/json'
        ));

        // Mengembalikan respon sebagai string, tidak langsung menampilkannya
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Eksekusi permintaan
        $response = curl_exec($ch);
        // print_r($response);
        // die();

        // Mengecek apakah terjadi kesalahan
        if (curl_errno($ch)) {
            echo 'Error:' . curl_error($ch);
        } else {
            // Cek apakah response valid JSON
            $responseArray = json_decode($response, true);
            $json_response = json_decode($response);
            if (json_last_error() == JSON_ERROR_NONE) {
                // Tampilkan respons dalam format "pretty" jika JSON valid
                // echo "<pre>" . json_encode($json_response, JSON_PRETTY_PRINT) . "</pre>";
                $status = $responseArray['status_code'];
                if($status == 401){
                    $cookie_name = 'VTA-TOKEN';
                    if (isset($_COOKIE[$cookie_name])) {
                        $token = $_COOKIE[$cookie_name];
                    } else {
                        $cookie_value = $this->getTokenVTASRUT();
                        setcookie($cookie_name, $cookie_value, time() + (332000), "/");
                        // Bearer Token
                        $token = $cookie_value;
                    }
                }
                return $json_response;
            } else {
                // Tampilkan respons asli jika bukan JSON
                return $response;
            }
        }

        // Menutup resource cURL
        curl_close($ch);
    }

    public function getTokenVTASRUT(){

        $tokenLama = Bc_Srut::where('srut_id')->first();
        if($tokenLama)
        {
            date_default_timezone_set('Asia/Jakarta');
            $expired = $tokenLama->srut_expired;
            if (time() > $expired) {
                return $tokenLama->srut_token;
            }
        }
        // Inisialisasi sesi cURL
        $curl = curl_init();
        // Data yang akan dikirim dalam format JSON
            $data = json_encode([
                "email" => "pkblotara@gmail.com",
                "password" => "Test12345@",
                // "email" => "dishub@bantulkab.go.id",
                // "password" => "28N81p5@Edu7",
            ]);

        // return $data;
        // die();


        // Set opsi cURL
        curl_setopt_array($curl, [
            CURLOPT_URL => 'https://api-gateway.hubdat.dephub.go.id/dev/auth-service/auth/open/token',  // URL endpoint
            CURLOPT_RETURNTRANSFER => true,  // Agar hasil dikembalikan sebagai string, bukan langsung output
            CURLOPT_FOLLOWLOCATION => true,  // Ikuti redirect jika ada
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',  // Header untuk menunjukkan tipe konten
            ],
            CURLOPT_POST => true,  // Gunakan metode POST
            CURLOPT_POSTFIELDS => $data  // Data yang akan dikirim
        ]);

        // Eksekusi request
        $response = curl_exec($curl);
        

        // Cek jika ada error dalam request
        if (curl_errno($curl)) {
            echo 'Error:' . curl_error($curl);
        } else {
            // Cek apakah response valid JSON
            $responseArray = json_decode($response, true);
            $json_response = json_decode($response);
            if (json_last_error() == JSON_ERROR_NONE) {
                // Tampilkan respons dalam format "pretty" jika JSON valid
                // echo "<pre>" . json_encode($json_response, JSON_PRETTY_PRINT) . "</pre>";
                $status = $responseArray['status_code'];
                if($status == 200){
                    $updateToken = Bc_Srut::where('srut_id','1')->first();
                    if($updateToken){
                        $updateToken->srut_token = $responseArray['data']['token'];
                        $updateToken->srut_expired = $responseArray['data']['expired'];
                        $updateToken->save();
                    }
                    return  $responseArray['data']['token'];
                }
            } else {
                // Tampilkan respons asli jika bukan JSON
                return $response;
            }
        }

        // Tutup sesi cURL
        curl_close($curl);
    }

    public function returnJson($data)
    {
        return [
            'data'  => $data,
        ];
    }
}

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
    public function getDataMaster($prefix, $id, $nouji, $search_by, $keyword) {
        $nouji = empty($nouji) ? null : $nouji;
        $search_by = empty($search_by) ? null : $search_by;
        $keyword = empty($keyword) ? null : $keyword;
        
        $token = "eyJpdiI6Ilc0MjZBdE83Nkg3SGhReEgxYVQxN3c9PSIsInZhbHVlIjoiYUQ5Z1RMbGtINkRBbTJDbU9xQUVWb25nQzFpUW1HS1paemQxUjNCTm1hQ2ppMmtjY2FQZDdCbkk4WTNvNzg4ditxT1BFV0Rma2JCUzdVL0RSRUNLTE5pNU1HTUZjSFl1cTJuSEVMamtQbVQvc1RTSHkwMytUT05STHdOTG80VlgiLCJtYWMiOiIxMWQ5ZjU2ZDFjNmNlZmM1Nzg2MjljZTM4ZjQ2NmJmNWIxYjI5NGJjNWRjMTNhOWI0NjJlNjlhYTU2NGQ5OTFlIn0=";
        $time = 10;

        // Mapping payload JSON berdasarkan prefix
        if ($prefix == "varian") {
            $data = json_encode(["token" => $token, "prefix" => $prefix, "param" => ["vehicle_varian_type_id" => $id]]);
        } elseif ($prefix == "variantype") {
            $data = json_encode(["token" => $token, "prefix" => $prefix, "param" => ["vehicle_brand_id" => $id]]);
        } elseif ($prefix == "subvehicletype") {
            $data = json_encode(["token" => $token, "prefix" => $prefix, "param" => ["vehicle_type_id" => $id]]);
        } elseif ($prefix == "area" && $keyword !== null) {
            $data = json_encode(["token" => $token, "prefix" => $prefix, "param" => ["search_by" => 'code', "keyword" => $keyword]]);
        } elseif ($prefix == "lastexam") {
            $data = json_encode(["token" => $token, "prefix" => $prefix, "param" => ["nouji" => $nouji]]);
            $time = 120;
        } elseif ($prefix == "insertexam") {
            $data = json_encode(["token" => $token, "prefix" => $prefix, "param" => ["nouji" => $nouji, "status_penerbitan" => (int)$search_by, "area_code_tujuan" => $keyword]]);
            $time = 120;
        } elseif ($prefix == "checkpengujiankeluar") {
            $data = json_encode(["token" => $token, "prefix" => $prefix, "param" => ["nouji" => $nouji, "statuspenerbitan" => (int)$search_by]]);
            $time = 120;
        } else {
            $data = json_encode(["token" => $token, "prefix" => $prefix, "param" => ["search_by" => $search_by, "keyword" => $keyword]]);
        }

        // Inisialisasi sesi cURL
        $curl = curl_init();
        
        curl_setopt_array($curl, [
            CURLOPT_URL => 'https://ujiberkala-middle.kemenhub.go.id/api/v1/global',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            
            // FIX UTAMA KECEPATAN: Memaksa IPv4 untuk menghindari delay DNS lookup domain Kemenhub
            CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4,
            
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
            ],
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $data,
            CURLOPT_CONNECTTIMEOUT => $time,
            CURLOPT_TIMEOUT => $time,
        ]);

        // Eksekusi request
        $response = curl_exec($curl);
        $curl_error = curl_errno($curl);
        
        // TUTUP SESI LANGSUNG: Mencegah resource leak / koneksi menggantung
        curl_close($curl);

        // Fungsi helper untuk fallback lokal jika API Kemenhub timeout/error/down
        $fallbackToLocal = function() use ($prefix, $id) {
            if ($prefix == "statuspenerbitan") return $this->returnJson(Statuspenerbitan::all());
            if ($prefix == "kelasjalan") return $this->returnJson(Kelasjalan::all());
            if ($prefix == "merk") return $this->returnJson(Merek::all());
            if ($prefix == "varian") return empty($id) ? $this->returnJson(Varian::all()) : $this->returnJson(Varian::where('vehicle_varian_type_id', $id)->get());
            if ($prefix == "variantype") return empty($id) ? $this->returnJson(Bc_Tipe::all()) : $this->returnJson(Bc_Tipe::where('vehicle_brand_id', $id)->get());
            if ($prefix == "subvehicletype") return empty($id) ? $this->returnJson(Subjenis::all()) : $this->returnJson(Subjenis::where('vehicle_sub_type_id', $id)->get());
            if ($prefix == "vehicletype") return $this->returnJson(Bc_Jenis::all());
            if ($prefix == "area") return $this->returnJson(Kodewilayah::all());
            if ($prefix == "fuel") return $this->returnJson(Bahanbakar::all());
            
            return null;
        };

        // Cek kondisi error cURL / respons kosong / bad gateway / halaman error HTML
        if ($curl_error || $response === false || strpos($response, '502 Bad Gateway') !== false || strpos($response, '<!DOCTYPE html>') !== false || empty($response)) {
            return $fallbackToLocal();
        }

        $responseArray = json_decode($response, true);
        $json_response = json_decode($response);

        // Jika bukan format JSON yang valid, kembalikan respons mentah
        if (json_last_error() !== JSON_ERROR_NONE) {
            return $response;
        }

        // Penanganan khusus untuk checkpengujiankeluar
        if ($prefix == "checkpengujiankeluar") {
            return $json_response;
        }

        // Penanganan khusus untuk insertexam (Update status cetak persuratan)
        if ($prefix == "insertexam") {
            $status = $responseArray['status'] ?? false;
            if ($status === true || $status === 'true' || $status === 'ok') {
                $pendaftaran = Pendaftaran::where('uuid', $id)->first();
                if ($pendaftaran) {
                    $datSurat = Persuratan::where('pendaftaran_id', $pendaftaran->id)->first();
                    if ($datSurat) {
                        $datSurat->status_cetak = '1';
                        $datSurat->save();
                    }
                }
            }
        }

        return $json_response;
    }

    public function getDataVTASRUT($search) {
        $base_url = 'https://api-gateway.hubdat.kemenhub.go.id/data-integration-service/vta/srut/find';
        $url = $base_url . '?search=' . urlencode($search);
        
        // Ambil token (sudah otomatis divalidasi dan di-cache di database oleh getTokenVTASRUT)
        $token = $this->getTokenVTASRUT();

        // Helper cURL internal untuk mendukung proses retry jika 401
        $executeVtaCurl = function($targetUrl, $authToken) {
            $ch = curl_init();

            curl_setopt_array($ch, [
                CURLOPT_URL => $targetUrl,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_RETURNTRANSFER => true,
                
                // FIX UTAMA KECEPATAN: Paksa IPv4 untuk menghindari delay DNS/koneksi
                CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4,
                CURLOPT_CONNECTTIMEOUT => 10,
                CURLOPT_TIMEOUT => 15,
                
                CURLOPT_HTTPHEADER => [
                    'Authorization: Bearer ' . $authToken,
                    'Content-Type: application/json'
                ]
            ]);

            $response = curl_exec($ch);
            $err = curl_errno($ch);
            $errMsg = curl_error($ch);
            
            // Tutup cURL langsung untuk mencegah resource leak
            curl_close($ch);

            if ($err) {
                return ['error' => true, 'message' => $errMsg];
            }

            return ['error' => false, 'response' => $response];
        };

        // Eksekusi request pertama
        $result = $executeVtaCurl($url, $token);
        if ($result['error']) {
            return 'Error:' . $result['message'];
        }

        $response = $result['response'];
        $responseArray = json_decode($response, true);
        $json_response = json_decode($response);

        if (json_last_error() === JSON_ERROR_NONE && isset($responseArray['status_code'])) {
            $status = $responseArray['status_code'];
            
            // Jika token Unauthorized / Expired (401), reset masa aktif token di DB, ambil baru, lalu retry sekali
            if ($status == 401) {
                $tokenLama = Bc_Srut::where('srut_id', '1')->first();
                if ($tokenLama) {
                    $tokenLama->srut_expired = 0; // Paksa anggap expired
                    $tokenLama->save();
                }
                
                $newToken = $this->getTokenVTASRUT();
                $retryResult = $executeVtaCurl($url, $newToken);
                
                if (!$retryResult['error']) {
                    return json_decode($retryResult['response']);
                }
            }
            
            return $json_response;
        } else {
            return $response;
        }
    }

    public function getTokenVTASRUT() {
        date_default_timezone_set('Asia/Jakarta');

        // 1. Cek token yang tersimpan di database
        $tokenLama = Bc_Srut::where('srut_id', '1')->first();
        
        if ($tokenLama && !empty($tokenLama->srut_token)) {
            $expired = $tokenLama->srut_expired;
            
            // PERBAIKAN LOGIKA: Jika waktu sekarang MASIH DI BAWAH waktu expired (token masih aktif), gunakan token lama
            if (time() < $expired) {
                return $tokenLama->srut_token;
            }
        }

        // 2. Jika token tidak ada atau sudah expired, ambil token baru via cURL
        $curl = curl_init();
        $data = json_encode([
            "email" => "upubkbkotadumai@gmail.com",
            "password" => "qv8HR4LS",
        ]);

        curl_setopt_array($curl, [
            CURLOPT_URL => 'https://api-gateway.hubdat.kemenhub.go.id/auth-service/auth/open/token',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            
            // FIX UTAMA KECEPATAN: Paksa IPv4
            CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4,
            CURLOPT_CONNECTTIMEOUT => 10,
            CURLOPT_TIMEOUT => 15,
            
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
            ],
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $data
        ]);

        $response = curl_exec($curl);
        $curl_error = curl_errno($curl);
        $curl_error_msg = curl_error($curl);
        
        // Tutup sesi cURL langsung
        curl_close($curl);

        if ($curl_error) {
            return 'Error:' . $curl_error_msg;
        }

        $responseArray = json_decode($response, true);
        $json_response = json_decode($response);

        if (json_last_error() === JSON_ERROR_NONE && isset($responseArray['status_code'])) {
            if ($responseArray['status_code'] == 200) {
                $newToken = $responseArray['data']['token'] ?? null;
                $newExpired = $responseArray['data']['expired'] ?? null;

                if ($newToken) {
                    // Simpan atau perbarui token ke database
                    $updateToken = Bc_Srut::firstOrNew(['srut_id' => '1']);
                    $updateToken->srut_token = $newToken;
                    $updateToken->srut_expired = $newExpired;
                    $updateToken->save();
                }

                return $newToken;
            }
        }

        return $response;
    }

    public function returnJson($data)
    {
        return [
            'data'  => $data,
        ];
    }
}

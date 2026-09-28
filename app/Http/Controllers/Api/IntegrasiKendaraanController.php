<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\IdentitasKendaraan;
use Illuminate\Http\JsonResponse;

class IntegrasiKendaraanController extends Controller
{
    public function show(string $nouji): JsonResponse
    {
        $kendaraan = IdentitasKendaraan::query()
            ->where('nouji', $nouji)
            ->first();

        if (!$kendaraan) {
            return response()->json([
                'success' => false,
                'message' => 'Kendaraan tidak ditemukan',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'nouji' => $kendaraan->nouji,
                'noregistrasikendaraan' =>$kendaraan->noregistrasikendaraan,
                'nama' => $kendaraan->nama,
                'jenis' => $kendaraan->jenis,
                'model' => $kendaraan->model,
                'peruntukan' => $kendaraan->peruntukan,
                'tglsertifikatreg' =>$kendaraan->tglsertifikatreg,
                'statuskendaraan' =>$kendaraan->statuskendaraan,
            ],
        ]);
    }
}
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Identitaskendaraan;
use App\Models\Pendaftaran;
use App\Models\Kuota;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class IntegrasiKendaraanController extends Controller
{
    public function show(Request $request): JsonResponse
    {
        $request->validate([
            'noregistrasikendaraan' => [
                'required',
                'string',
            ],
            'norangka' => [
                'required',
                'string',
                'size:5',
            ],
        ]);

        $noregistrasi = strtoupper(
            preg_replace(
                '/[^A-Z0-9]/',
                '',
                $request->noregistrasikendaraan
            )
        );

        $norangka = strtoupper(
            preg_replace(
                '/[^A-Z0-9]/',
                '',
                $request->norangka
            )
        );

        $kendaraan = Identitaskendaraan::query()
            ->where(
                'noregistrasikendaraan',
                $noregistrasi
            )
            ->whereRaw(
                'RIGHT(norangka, 5) = ?',
                [$norangka]
            )
            ->first();

        if (!$kendaraan) {
            return response()->json([
                'success' => false,
                'message' => 'Data kendaraan tidak ditemukan',
            ], 404);
        }

        $masaBerlakuUji = Pendaftaran::query()
                        ->where('identitaskendaraan_id', $kendaraan->id)
                        ->whereNotIn('kodepenerbitans_id', ['3', '4','9','10'])
                        ->orderBy('tglpendaftaran', 'desc')
                        ->first(); 

        if($masaBerlakuUji){
            date_default_timezone_set('Asia/Jakarta');
            $tanggal = strtotime('+6 months', strtotime($masaBerlakuUji->tglpendaftaran));
            $kendaraan->tglberlakuuji = date('d', $tanggal) . ' ' .$this->MonthNameIndo((int) date('m', $tanggal)) . ' ' .date('Y', $tanggal);
            if (strtotime($kendaraan->tglberlakuuji) < time()) {
                $kendaraan->statuskendaraan = 'tidak aktif';
            }else{
                $kendaraan->statuskendaraan = 'aktif';
            }
        }else{
            $kendaraan->statuskendaraan = 'tidak aktif';
        }

        return response()->json([
            'success' => true,
            'data' => [
                'nouji' => $kendaraan->nouji,
                'noregistrasikendaraan' =>$kendaraan->noregistrasikendaraan,
                'nama' => $kendaraan->nama,
                'merek' => $kendaraan->merek,
                'tipe' => $kendaraan->tipe,
                'jenis' => $kendaraan->jenis,
                'model' => $kendaraan->model,
                'peruntukan' => $kendaraan->peruntukan,
                'masaberlakuuji' =>$kendaraan->tglberlakuuji,
                'statuskendaraan' =>$kendaraan->statuskendaraan,
            ],
        ]);
    }

    public function getKuota(Request $request): JsonResponse
    {
        $kuota = Kuota::query()
                ->select('tanggal', 'kuotapagi', 'kuotasiang','tersediapagi','tersediasiang')
                ->where('tanggal', '>=', date('Y-m-d'))
                ->orderBy('tanggal', 'asc')
                ->limit(7)
                ->get();
        return response()->json([
            'success' => true,
            'data' => $kuota,
        ]);
    }

    private function MonthNameIndo($monthNumber)
    {
        $months = [
            1 => 'Januari',
            2 => 'Februari',
            3 => 'Maret',
            4 => 'April',
            5 => 'Mei',
            6 => 'Juni',
            7 => 'Juli',
            8 => 'Agustus',
            9 => 'September',
            10 => 'Oktober',
            11 => 'November',
            12 => 'Desember',
        ];

        $monthNumber = (int) $monthNumber;
        return $months[$monthNumber] ?? '';
    }
}
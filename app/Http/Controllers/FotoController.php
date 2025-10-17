<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fotomentah;
use App\Models\Pendaftaran;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Traits\apiJsonReturnTrait;
use App\Traits\ApiException;
use App\Services\FotoService;
use Intervention\Image\Facades\Image;

class FotoController extends Controller
{
    use apiJsonReturnTrait;
    protected $fotoService;

    public function __construct(FotoService $fotoService)
    {
        $this->fotoService = $fotoService;
    }

    public function getImage($id)
    {
        $kendaraan = Pendaftaran::select('noregistrasikendaraan','nouji','nama','thpembuatan','merek','jenis','pendaftarans.uuid')->leftJoin('identitaskendaraans', 'identitaskendaraans.id', '=', 'pendaftarans.identitaskendaraan_id')->where('pendaftarans.uuid', $id)->first();
        if ($kendaraan) {
            // $kendaraan->id = $id;
        }
        return view('foto', compact('kendaraan'));
    }

    public function postImage(Request $request)
    {
        $this->validate($request, [
            'image1' => 'nullable|image|mimes:jpeg,png,jpg',
            'image2' => 'nullable|image|mimes:jpeg,png,jpg',
            'image3' => 'nullable|image|mimes:jpeg,png,jpg',
            'image4' => 'nullable|image|mimes:jpeg,png,jpg',
        ]);

        $nouji = $request->nouji;
        $pendaftaran_id = $request->pendaftaran_id;
        $fotoUploaded = false;

        $imageFields = [
            'image1' => '-tampakdepan.jpg',
            'image2' => '-tampakkanan.jpg',
            'image3' => '-tampakbelakang.jpg',
            'image4' => '-tampakkiri.jpg',
        ];

        $folderPath = public_path('tmp_images');
        if (!file_exists($folderPath)) {
            mkdir($folderPath, 0755, true);
        }

        foreach ($imageFields as $field => $suffix) {
            if ($request->hasFile($field)) {
                $file = $request->file($field);
                $filePath = $folderPath . '/' . $nouji . $suffix;

                // Hapus file lama jika ada
                if (file_exists($filePath)) {
                    unlink($filePath);
                }

                // Simpan gambar baru
                // Image::make($file)->save($filePath, 50);
                Image::make($file)
                        ->fit(600, 600)
                        ->encode('jpg', 30) // ubah ke JPEG dan kompresi maksimal
                        ->save($filePath);
                $fotoUploaded = true;
            }
        }

        if ($fotoUploaded && $pendaftaran_id) {
            $pendaftarandata = Pendaftaran::where('uuid', $pendaftaran_id)->first();
            if ($pendaftarandata) {
                $pendaftarandata->foto = '1';
                $pendaftarandata->save();
            }
        }

        return redirect()->back()->with('success', 'Upload foto berhasil.');
    }


    public function accFoto($id) {}
}

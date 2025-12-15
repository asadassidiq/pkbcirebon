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


    public function saveCCTVImage(Request $request)
    {
        $nouji = $request->input('nouji');
        $side = $request->input('side') ?: 'unknown';

        // sanitize
        $safeNouji = $nouji;
        $safeSide = preg_replace('/[^A-Za-z0-9_\-]/', '-', (string) $side);

        $dir = public_path('tmp_images');
        if (! file_exists($dir)) {
            mkdir($dir, 0755, true);
        }

        // if file attached, use it; otherwise try to fetch from provided URL
        if ($request->hasFile('file') && $request->file('file')->isValid()) {
            $uploaded = $request->file('file');
            $orig = $uploaded->getClientOriginalName();
            $ext = $uploaded->getClientOriginalExtension() ?: 'jpg';
            $filename = $safeNouji ? "$safeNouji-tampak$safeSide.$ext" : ($orig ?: ('snapshot-' . time() . '.' . $ext));
            $uploaded->move($dir, $filename);

            return response()->json([
                'saved' => true,
                'filename' => $filename,
                'url' => url('tmp_image/' . $filename),
            ], 200);
        }else{
            return response()->json(['saved' => false, 'error' => 'No valid file uploaded'], 400);
        }

        return response()->json(['saved' => false, 'error' => 'No file or url provided'], 400);
    }
}

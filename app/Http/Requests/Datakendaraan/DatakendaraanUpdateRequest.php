<?php

namespace App\Http\Requests\Datakendaraan;

use Illuminate\Foundation\Http\FormRequest;

class DatakendaraanUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'nouji' => 'required|string|max:20|unique:identitaskendaraans,nouji,' . $this->input('uuid') . ',uuid',
            'noregistrasikendaraan' => 'required|string|max:12',
            'norangka' => 'required|string|max:100|unique:identitaskendaraans,norangka,' . $this->input('uuid') . ',uuid',
            'nomesin'           => 'required|string|max:100',
            'merek'           => 'required|string|max:100',
            'tipe'           => 'required|string|max:100',
            'jenis'           => 'required|string|max:100',
            'subjenis'           => 'required|string|max:100',
            'isisilinder'           => 'integer|min:0',
            'dayamotorpenggerak'           => 'integer|min:0',
            'bahanbakar'           => 'required|string|max:100',
            'nosertifikatreg'           => 'required|string|max:100',
            'tglsertifikatreg'           => 'required|date_format:Y-m-d',
            'jbb'           => 'integer|min:0',
            'jbkb'           => 'integer|min:0',
            'jbi'           => 'integer|min:0',
            'jbki'           => 'integer|min:0',
            'mst'           => 'integer|min:0',
            'konfigurasisumburoda'           => 'required|string',
            'ukuranban'           => 'required|string|min:0',
            'panjangkendaraan'           => 'integer|min:0',
            'lebarkendaraan'           => 'integer|min:0',
            'tinggikendaraan'           => 'integer|min:0',
            'panjangbakatautangki'           => 'integer|min:0',
            'lebarbakatautangki'           => 'integer|min:0',
            'tinggibakatautangki'           => 'integer|min:0',
            'julurdepan'           => 'integer|min:0',
            'julurbelakang'           => 'integer|min:0',
            'jumlah_sumbu'           => 'required|integer|min:2',
            'jaraksumbu1_2'           => 'integer|min:0',
            'q'           => 'integer|min:0',
            'p'           => 'integer|min:0',
            'a'           => 'integer|min:0',
            'r'           => 'integer|min:0',
            'b'           => 'integer|min:0',
            'dayaangkutorang'           => 'integer|min:0',
            'dayaangkutbarang'           => 'integer|min:0',
            'kelasjalanterendah'           => 'required|string',
            'beratsumbu1'           => 'integer|min:0',
            'beratsumbu2'           => 'integer|min:0',
            'nama'        => 'required|string',
            'alamat'        => 'required|string',
            'noidentitaspemilik'        => 'required',
        ];

        return $rules;
    }

    public function messages()
    {
        return [
            'nouji.required' => 'Nomor uji wajib diisi',
            'noregistrasikendaraan.required' => 'Nomor Kendaraan wajib diisi',
            'norangka.required' => 'Nomor rangka wajib diisi',
            'nomesin.required' => 'Nomor mesin wajib diisi',
            'nosertifikatreg.not_regex' => 'Input tidak boleh hanya berisi tanda "-" saja',
            'merek.required' => 'Merek wajib diisi',
            'merek.max' => 'Merek tidak boleh lebih dari 100 karakter',
            'tipe.required' => 'Tipe wajib diisi',
            'jenis.required' => 'Jenis wajib diisi',
            'subjenis.required' => 'Model wajib diisi',
            'bahanbakar.required' => 'Bahan bakar wajib diisi',
            'nosertifikatreg.required' => 'No. Sertifikat Registrasi wajib diisi',
            'tglsertifikatreg.required' => 'Tanggal Sertifikat Registrasi wajib diisi',
            'tglsertifikatreg.date_format' => 'Format tanggal harus Y-m-d (contoh: 2024-12-31)',
    
            // Validasi umum integer + min:0
            'jbb.integer' => 'Isian jbb harus berupa angka',
            'jbkb.integer' => 'Isian jbkb harus berupa angka',
            'jbi.integer' => 'Isian jbi harus berupa angka',
            'jbki.integer' => 'Isian jbki harus berupa angka',
            'mst.integer' => 'Isian mst harus berupa angka',
            'panjangkendaraan.integer' => 'Isian panjang kendaraan harus berupa angka',
            'lebarkendaraan.integer' => 'Isian lebar kendaraan harus berupa angka',
            'tinggikendaraan.integer' => 'Isian tiggi kendaraan harus berupa angka',
            'panjangbakatautangki.integer' => 'Isian panjang bak atau tangki harus berupa angka',
            'lebarbakatautangki.integer' => 'Isian lebar bak atau tangki bak atau tangki harus berupa angka',
            'tinggibakatautangki.integer' => 'Isian tinggi bak atau tangki harus berupa angka',
            'julurdepan.integer' => 'Isian julur depan harus berupa angka',
            'julurbelakang.integer' => 'Isian julur belakang harus berupa angka',
            'jaraksumbu1_2.integer' => 'Isian jaraksumbu 1-2 harus berupa angka',
            'q.integer' => 'Isian q harus berupa angka',
            'p.integer' => 'Isian p harus berupa angka',
            'r.integer' => 'Isian r harus berupa angka',
            'a.integer' => 'Isian a harus berupa angka',
            'b.integer' => 'Isian b harus berupa angka',
            'dayaangkutorang.integer' => 'Isian daya angkut orang harus berupa angka',
            'dayaangkutbarang.integer' => 'Isian daya angkur barang harus berupa angka',
            'beratsumbu1.integer' => 'Isian berat sumbu 1 harus berupa angka',
            'beratsumbu2.integer' => 'Isian berat sumbu 2  harus berupa angka',
            
            'jbb.integer' => 'Nilai jbb tidak boleh kurang dari 0',
            'jbkb.integer' => 'Nilai jbkb tidak boleh kurang dari 0',
            'jbi.integer' => 'Nilai jbi tidak boleh kurang dari 0',
            'jbki.integer' => 'Nilai jbki tidak boleh kurang dari 0',
            'mst.integer' => 'Nilai mst tidak boleh kurang dari 0',
            'panjangkendaraan.integer' => 'Nilai panjang kendaraan tidak boleh kurang dari 0',
            'lebarkendaraan.integer' => 'Nilai lebar kendaran tidak boleh kurang dari 0',
            'tinggikendaraan.integer' => 'Nilai tinggi kendaraan tidak boleh kurang dari 0',
            'panjangbakatautangki.integer' => 'Nilai panajng bak atau tangki tidak boleh kurang dari 0',
            'lebarbakatautangki.integer' => 'Nilai lebar bak atau tangki tidak boleh kurang dari 0',
            'tinggibakatautangki.integer' => 'Nilai tinggi bak atau tangki tidak boleh kurang dari 0',
            'julurdepan.integer' => 'Nilai julur depan tidak boleh kurang dari 0',
            'julurbelakang.integer' => 'Nilai julur belakang tidak boleh kurang dari 0',
            'jaraksumbu1_2.integer' => 'Nilai jarak sumbu 1-2 tidak boleh kurang dari 0',
            'q.integer' => 'Nilai q tidak boleh kurang dari 0',
            'p.integer' => 'Nilai p tidak boleh kurang dari 0',
            'r.integer' => 'Nilai r tidak boleh kurang dari 0',
            'a.integer' => 'Nilai a tidak boleh kurang dari 0',
            'b.integer' => 'Nilai b tidak boleh kurang dari 0',
            'dayaangkutorang.integer' => 'Nilai daya angkut orang tidak boleh kurang dari 0',
            'dayaangkutbarang.integer' => 'Nilai daya angkut barang tidak boleh kurang dari 0',
            'beratsumbu1.integer' => 'Nilai berat sumbu 1 tidak boleh kurang dari 0',
            'beratsumbu2.integer' => 'Nilai berat sumbu 2 tidak boleh kurang dari 0',
    
            // Beberapa custom khusus
            'jumlah_sumbu.min' => 'Jumlah sumbu minimal 2',
            'jumlah_sumbu.required' => 'Jumlah sumbu wajib diisi',
    
            // Optional: kasih nama yang lebih manusiawi (kalau pakai di frontend)
            'isisilinder.required' => 'Isi silinder wajib diisi',
            'dayamotorpenggerak.required' => 'Daya motor penggerak wajib diisi',
            'konfigurasisumburoda.required' => 'Konfigurasi sumbu roda wajib diisi',
            'kelasjalanterendah.required' => 'Kelas Jalan Terendah wajib diisi',
            'ukuranban.required' => 'Ukuran Ban wajib diisi',

            //unique
            'nouji.unique' => 'Nomor Uji kendaraan sudah terdaftar.',
            'noregistrasikendaraan.unique' => 'Nomor Registrasi kendaraan sudah terdaftar.',
            'norangka.unique' => 'Nomor Rangka kendaraan sudah terdaftar.',
        ];
    }
}

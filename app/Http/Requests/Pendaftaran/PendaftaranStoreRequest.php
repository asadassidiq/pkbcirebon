<?php

namespace App\Http\Requests\Pendaftaran;

use Illuminate\Foundation\Http\FormRequest;

class PendaftaranStoreRequest extends FormRequest
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

        if ($this->input('kodepenerbitans_id') == 11)
        {
            $rules = [
                'tglpendaftaran'     => 'required',
                'kodepenerbitans_id' => 'required|integer',
                'nouji'              => 'required|string',
                'noregistrasikendaraan' => 'required|string|max:20',
                'merek'           => 'required|string|max:100',
                'tipe'           => 'required|string|max:100',
                'jenis'           => 'required|string|max:100',
                'subjenis'           => 'required|string|max:100',
                'nama'        => 'required|string',
                'nosurat'        => 'required|string',
                'tujuan'        => 'required|string',
                // 'noantrian' => 'required',
            ];
        }elseif ($this->input('kodepenerbitans_id') == 12)
        {
            $rules = [
                'tglpendaftaran'     => 'required',
                'kodepenerbitans_id' => 'required|integer',
                'noregistrasikendaraan' => 'required|string|max:20',
                'nama'        => 'required|string',
                'nosurat'        => 'required|string',
                'tujuan'        => 'required|string',
                // 'noantrian' => 'required',
            ];
        }else{
            $rules = [
                // 'noantrian' => 'required',
                'tglpendaftaran'     => 'required',
                'kodepenerbitans_id' => 'required|integer',
                'nouji'              => 'required|string',
                'noregistrasikendaraan' => 'required|string|max:20',
                'nomesin'           => 'required|string|max:100',
                'merek'           => 'required|string|max:100',
                'tipe'           => 'required|string|max:100',
                'jenis'           => 'required|string|max:100',
                'subjenis'           => 'required|string|max:100',
                'isisilinder'           => 'integer|min:0',
                'dayamotorpenggerak'           => 'integer|min:0',
                'bahanbakar'           => 'required|string|max:100',
                'nosertifikatreg'           => 'required|string|max:100',
                'tglsertifikatreg'           => 'required',
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
                'peruntukan'        => 'required|string',
                'nama'        => 'required|string',
                'alamat'        => 'required|string',
                'noidentitaspemilik'        => 'required',
                'nosuratkehilangan' => 'required_if:kodepenerbitans_id,4',
            ];
        }
        if ($this->input('jumlah_sumbu') >= '2'){
            $rules['jaraksumbu1_2'] = 'required|integer|min:0';
            $rules['beratsumbu1'] = 'required|integer|min:0';
            $rules['beratsumbu2'] = 'required|integer|min:0';
        }
        if ($this->input('jumlah_sumbu') >= '3'){
            $rules['jaraksumbu2_3'] = 'required|integer|min:0';
            $rules['beratsumbu3'] = 'required|integer|min:0';
        }
        if ($this->input('jumlah_sumbu') >= '4'){
            $rules['jaraksumbu3_4'] = 'required|integer|min:0';
            $rules['beratsumbu4'] = 'required|integer|min:0';
        }
        if ($this->input('jumlah_sumbu') >= '5'){
            $rules['jaraksumbu4_5'] = 'required|integer|min:0';
            $rules['beratsumbu5'] = 'required|integer|min:0';
        }
        if ($this->input('jumlah_sumbu') >= '6'){
            $rules['jaraksumbu5_6'] = 'required|integer|min:0';
            $rules['beratsumbu6'] = 'required|integer|min:0';
        }
        if ($this->input('jumlah_sumbu') >= '7'){
            $rules['jaraksumbu6_7'] = 'required|integer|min:0';
            $rules['beratsumbu7'] = 'required|integer|min:0';
        }
        if ($this->input('jumlah_sumbu') >= '8'){
            $rules['jaraksumbu7_8'] = 'required|integer|min:0';
            $rules['beratsumbu8'] = 'required|integer|min:0';
        }
        if ($this->input('jumlah_sumbu') >= '9'){
            $rules['jaraksumbu8_9'] = 'required|integer|min:0';
            $rules['beratsumbu9'] = 'required|integer|min:0';
        }
        if ($this->input('jumlah_sumbu') >= '10'){
            $rules['jaraksumbu9_10'] = 'required|integer|min:0';
            $rules['beratsumbu10'] = 'required|integer|min:0';
        }
        if ($this->input('jumlah_sumbu') >= '11'){
            $rules['jaraksumbu10_11'] = 'required|integer|min:0';
            $rules['beratsumbu11'] = 'required|integer|min:0';
        }
        if ($this->input('jumlah_sumbu') >= '12'){
            $rules['jaraksumbu11_12'] = 'required|integer|min:0';
            $rules['beratsumbu12'] = 'required|integer|min:0';
        }

        if ($this->input('kodepenerbitans_id') === '9' || $this->input('kodepenerbitans_id') === '10')
        {
            $rules['nosurat'] = 'required|string';
            $rules['kepada'] = 'required|string';
        }

        if ($this->input('kodepenerbitans_id') === '10')
        {
            $rules['nokendaraanbaru'] = 'required|string';
            $rules['namapemilikbaru'] = 'required|string';
            $rules['alamatpemilikbaru'] = 'required|string';
        }
        // if ($this->input('jumlah_sumbu') === '10')

        return $rules;
    }

    public function messages()
    {
        return [
            'noantrian.required' => 'No Antrian wajib diisi',
            'nama.required' => 'Nama wajib diisi',
            'noidentitaspemilik.required' => 'No Identitas Pemilik wajib diisi',
            'peruntukan.required' => 'Peruntukan wajib diisi',
            'nosurat.required' => 'No Surat wajib diisi',
            'kepada.required' => 'Kepada wajib diisi',
            'tujuan.required' => 'Tujuan wajib diisi',
            'nokendaraanbaru.required' => 'No Kendaraan Baru wajib diisi',
            'namapemilikbaru.required' => 'Nama Pemilik Baru wajib diisi',
            'alamatpemilikbaru.required' => 'Alamat Pemilik Baru wajib diisi',
            'nosuratkehilangan.required_if' => 'No Surat Kehilangan wajib diisi jika jenis pendaftaran hilang',
            'tglpendaftaran.required' => 'Tanggal pendaftaran wajib diisi',
            'tglpendaftaran.date_format' => 'Format tanggal harus Y-m-d',
            'kodepenerbitans_id.required' => 'Kode penerbitan wajib dipilih',
            'nouji.required' => 'Nomor uji wajib diisi',
            'noregistrasikendaraan.required' => 'Nomor Kendaraan wajib diisi',
            'norangka.required' => 'Nomor rangka wajib diisi',
            'nomesin.required' => 'Nomor mesin wajib diisi',
            'nosertifikatreg.not_regex' => 'Input tidak boleh hanya berisi tanda "-" saja',
            'nosertifikatreg.string' => 'tipe data string saja',
            'merek.required' => 'Merek wajib diisi',
            'merek.max' => 'Merek tidak boleh lebih dari 100 karakter',
            'tipe.required' => 'Tipe wajib diisi',
            // 'varian.required' => 'Varian wajib diisi',
            'jenis.required' => 'Jenis wajib diisi',
            'subjenis.required' => 'Model wajib diisi',
            'bahanbakar.required' => 'Bahan bakar wajib diisi',
            'nosertifikatreg.required' => 'No. Sertifikat Registrasi wajib diisi',
            'tglsertifikatreg.required' => 'Tanggal Sertifikat Registrasi wajib diisi',
            // 'tglsertifikatreg.date_format' => 'Format tanggal harus Y-m-d (contoh: 2024-12-31)',
            'jaraksumbu1_2.required' => 'jaraksumbu 1-2 wajib diisi',
            'jaraksumbu2_3.required' => 'jaraksumbu 2-3 wajib diisi',
            'jaraksumbu3_4.required' => 'jaraksumbu 3-4 wajib diisi',
            'jaraksumbu4_5.required' => 'jaraksumbu 4-5 wajib diisi',
            'jaraksumbu5_6.required' => 'jaraksumbu 5-6 wajib diisi',
            'jaraksumbu6_7.required' => 'jaraksumbu 6-7 wajib diisi',
            'jaraksumbu7_8.required' => 'jaraksumbu 7-8 wajib diisi',
            'jaraksumbu8_9.required' => 'jaraksumbu 8-9 wajib diisi',
            'jaraksumbu9_10.required' => 'jaraksumbu 9-10 wajib diisi',
            'jaraksumbu10_11.required' => 'jaraksumbu 10-11 wajib diisi',
            'jaraksumbu11_12.required' => 'jaraksumbu 11-12 wajib diisi',
            'beratsumbu1.required' => 'berat sumbu 1 wajib diisi',
            'beratsumbu2.required' => 'berat sumbu 2 wajib diisi',
            'beratsumbu3.required' => 'berat sumbu 3 wajib diisi',
            'beratsumbu4.required' => 'berat sumbu 4 wajib diisi',
            'beratsumbu5.required' => 'berat sumbu 5 wajib diisi',
            'beratsumbu6.required' => 'berat sumbu 6 wajib diisi',
            'beratsumbu7.required' => 'berat sumbu 7 wajib diisi',
            'beratsumbu8.required' => 'berat sumbu 8 wajib diisi',
            'beratsumbu9.required' => 'berat sumbu 9 wajib diisi',
            'beratsumbu10.required' => 'berat sumbu 10 wajib diisi',
            'beratsumbu11.required' => 'berat sumbu 11 wajib diisi',
            'beratsumbu12.required' => 'berat sumbu 12 wajib diisi',
    
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
            'jaraksumbu2_3.integer' => 'Isian jaraksumbu 2-3 harus berupa angka',
            'jaraksumbu3_4.integer' => 'Isian jaraksumbu 3-4 harus berupa angka',
            'jaraksumbu4_5.integer' => 'Isian jaraksumbu 4-5 harus berupa angka',
            'jaraksumbu5_6.integer' => 'Isian jaraksumbu 5-6 harus berupa angka',
            'jaraksumbu6_7.integer' => 'Isian jaraksumbu 6-7 harus berupa angka',
            'jaraksumbu7_8.integer' => 'Isian jaraksumbu 7-8 harus berupa angka',
            'jaraksumbu8_9.integer' => 'Isian jaraksumbu 8-9 harus berupa angka',
            'jaraksumbu9_10.integer' => 'Isian jaraksumbu 9-10 harus berupa angka',
            'jaraksumbu10_11.integer' => 'Isian jaraksumbu 10-11 harus berupa angka',
            'jaraksumbu11_12.integer' => 'Isian jaraksumbu 11-12 harus berupa angka',
            'q.integer' => 'Isian q harus berupa angka',
            'p.integer' => 'Isian p harus berupa angka',
            'r.integer' => 'Isian r harus berupa angka',
            'a.integer' => 'Isian a/Wheelbase harus berupa angka',
            'b.integer' => 'Isian b harus berupa angka',
            'dayaangkutorang.integer' => 'Isian daya angkut orang harus berupa angka',
            'dayaangkutbarang.integer' => 'Isian daya angkur barang harus berupa angka',
            'beratsumbu1.integer' => 'Isian berat sumbu 1 harus berupa angka',
            'beratsumbu2.integer' => 'Isian berat sumbu 2  harus berupa angka',
            'beratsumbu3.integer' => 'Isian berat sumbu 3  harus berupa angka',
            'beratsumbu4.integer' => 'Isian berat sumbu 4  harus berupa angka',
            'beratsumbu5.integer' => 'Isian berat sumbu 5  harus berupa angka',
            'beratsumbu6.integer' => 'Isian berat sumbu 6  harus berupa angka',
            'beratsumbu7.integer' => 'Isian berat sumbu 7  harus berupa angka',
            'beratsumbu8.integer' => 'Isian berat sumbu 8  harus berupa angka',
            'beratsumbu9.integer' => 'Isian berat sumbu 9  harus berupa angka',
            'beratsumbu10.integer' => 'Isian berat sumbu 10  harus berupa angka',
            'beratsumbu11.integer' => 'Isian berat sumbu 11  harus berupa angka',
            'beratsumbu12.integer' => 'Isian berat sumbu 12  harus berupa angka',
            
            'jbb.integer' => 'Nilai jbb tidak boleh kurang dari 0',
            'jbkb.integer' => 'Nilai jbkb tidak boleh kurang dari 0',
            'jbi.integer' => 'Nilai jbi tidak boleh kurang dari 0',
            'jbki.integer' => 'Nilai jbki tidak boleh kurang dari 0',
            'mst.integer' => 'Nilai mst tidak boleh kurang dari 0',
            'panjangkendaraan.integer' => 'Nilai panjang kendaraan tidak boleh kurang dari 0',
            'lebarkendaraan.integer' => 'Nilai lebar kendaran tidak boleh kurang dari 0',
            'tinggikendaraan.integer' => 'Nilai tinggi kendaraan tidak boleh kurang dari 0',
            'panjangbakatautangki.integer' => 'Nilai panjang bak atau tangki tidak boleh kurang dari 0',
            'lebarbakatautangki.integer' => 'Nilai lebar bak atau tangki tidak boleh kurang dari 0',
            'tinggibakatautangki.integer' => 'Nilai tinggi bak atau tangki tidak boleh kurang dari 0',
            'julurdepan.integer' => 'Nilai julur depan tidak boleh kurang dari 0',
            'julurbelakang.integer' => 'Nilai julur belakang tidak boleh kurang dari 0',
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
        ];
    }
}

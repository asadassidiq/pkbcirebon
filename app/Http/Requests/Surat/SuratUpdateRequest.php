<?php

namespace App\Http\Requests\Surat;

use Illuminate\Foundation\Http\FormRequest;

class SuratUpdateRequest extends FormRequest
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
        if ($this->input('keterangan') === 'Mutasi Keluar')
        {
            $rules['v_stnk'] = 'required|integer';
            $rules['v_kartuinduk']     = 'required|integer';
            $rules['v_srut'] = 'required|integer';
            $rules['v_smartcard']           = 'required|integer';
            $rules['v_riwayat']           = 'required|integer';
            $rules['catatan']           = 'nullable|string|max:255';
        }

        if ($this->input('keterangan') === 'Numpang Uji Keluar')
        {
            $rules['v_stnk'] = 'required|integer';
            $rules['v_smartcard']           = 'required|integer';
            $rules['catatan']           = 'nullable|string|max:255';
        }

        if ($this->input('keterangan') === 'Persetujuan Numpang Uji Masuk')
        {
            $rules['v_stnk'] = 'required|integer';
            $rules['v_smartcard']           = 'required|integer';
            $rules['catatan']           = 'nullable|string|max:255';
        }

        if ($this->input('keterangan') === 'Laporan Pemeriksaan Kendaraan')
        {
            $rules['catatan']           = 'nullable|string|max:255';
        }


        return $rules;
    }

    public function messages()
    {
        return [
            'v_stnk.required' => 'Verifikasi Berkas STNK wajib diisi',
            'v_kartuinduk.required' => 'Verifikasi Berkas Kartu Induk wajib diisi',
            'v_srut.required' => 'Verifikasi Berkas SRUT wajib diisi',
            'v_smartcard.required_if' => 'Verifikasi Berkas Smart Card wajib diisi jika jenis pendaftaran numpang uji Keluar',
            'v_riwayat.required' => 'Verifikasi Berkas Riwayat wajib diisi',
            'catatan.max' => 'Catatan maksimal 255 karakter',
        ];
    }
}

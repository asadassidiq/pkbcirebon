<?php

namespace App\Http\Requests\Pendaftaran;

use Illuminate\Foundation\Http\FormRequest;

class PendaftaranStore2Request extends FormRequest
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
        if ($this->input('kodepenerbitans_id') == '11')
        {
            $rules = [
                'tglpendaftaran'     => 'required|date_format:Y-m-d',
                'kodepenerbitans_id' => 'required|integer',
                'nouji'              => 'required|string|max:20',
                'noregistrasikendaraan' => 'required|string|max:20',
                'merek'           => 'required|string|max:100',
                'tipe'           => 'required|string|max:100',
                'jenis'           => 'required|string|max:100',
                'subjenis'           => 'required|string|max:100',
                'nama'        => 'required|string',
                'nosurat'        => 'required|string',
                'kepada'        => 'required|string',
                'tujuan'        => 'required|string',
                // 'noantrian' => 'required',
            ];
        }

        if ($this->input('kodepenerbitans_id') == '12')
        {
            $rules = [
                // 'noantrian' => 'required',
                'tglpendaftaran'     => 'required|date_format:Y-m-d',
                'kodepenerbitans_id' => 'required|integer',
                'noregistrasikendaraan' => 'required|string|max:20',
                'nama'        => 'required|string',
                'alamat'        => 'required|string',
                'merek'        => 'required|string',
                'tipe'        => 'required|string',
                'norangka'        => 'required|string',
                'nomesin'        => 'required|string',
                'nosurat'        => 'required|string',
                'nosuratdari' => 'required|string',
                'tujuan'        => 'required|string',
                'kepada'        => 'required|string',
            ];
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'noantrian.required' => 'No Antrian wajib diisi',
            'nama.required' => 'Nama wajib diisi',
            'alamat.required' => 'Alamat wajib diisi',
            'nosurat.required' => 'No Surat wajib diisi',
            'nosuratdari.required' => 'No Surat wajib diisi',
            'tujuan.required' => 'Tujuan wajib diisi',
            'kepada.required' => 'Kepada wajib diisi',
            'nosuratkehilangan.required_if' => 'No Surat Kehilangan wajib diisi jika jenis pendaftaran hilang',
            'tglpendaftaran.required' => 'Tanggal pendaftaran wajib diisi',
            'tglpendaftaran.date_format' => 'Format tanggal harus Y-m-d',
            'kodepenerbitans_id.required' => 'Kode penerbitan wajib dipilih',
            'nouji.required' => 'Nomor uji wajib diisi',
            'noregistrasikendaraan.required' => 'Nomor Kendaraan wajib diisi',
            'merek.required' => 'Merek wajib diisi',
            'merek.max' => 'Merek tidak boleh lebih dari 100 karakter',
            'tipe.required' => 'Tipe wajib diisi',
            'jenis.required' => 'Jenis wajib diisi',
            'subjenis.required' => 'Model wajib diisi', 
            'nomesin.required' => 'Nomor Kendaraan wajib diisi',
            'norangka.required' => 'Nomor rangka wajib diisi',
        ];
    }
}

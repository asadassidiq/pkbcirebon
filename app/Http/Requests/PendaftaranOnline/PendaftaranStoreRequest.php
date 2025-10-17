<?php

namespace App\Http\Requests\PendaftaranOnline;

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

        $rules = [
                'tglpendaftaran'     => 'required|date_format:Y-m-d',
                'kodepenerbitans_id' => 'required|integer',
                'nouji'              => 'required|string|max:20',
                'noregistrasikendaraan' => 'required|string|max:20',
                'namapemohon' => 'null|string|max:255',
                'notelp' => 'null|string|max:20',
            ];

        return $rules;
    }

    public function messages()
    {
        return [
            'nouji.required' => 'Nomor uji wajib diisi',
            'noregistrasikendaraan.required' => 'Nomor Kendaraan wajib diisi',
            'tglpendaftaran.required' => 'Tanggal pendaftaran wajib diisi',
            'tglpendaftaran.date_format' => 'Format tanggal harus Y-m-d',
            'kodepenerbitans_id.required' => 'Jenis Pendaftaran wajib dipilih',
        ];
    }
}

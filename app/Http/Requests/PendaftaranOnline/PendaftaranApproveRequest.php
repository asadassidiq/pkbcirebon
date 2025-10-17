<?php

namespace App\Http\Requests\PendaftaranOnline;

use Illuminate\Foundation\Http\FormRequest;

class PendaftaranApproveRequest extends FormRequest
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
                'v_stnk' => 'required|in:1',
            ];
        if ($this->input('kodepenerbitans_id') == '1'){
            $rules = [
                'v_srut' => 'required|in:1',
            ];
        }
        if ($this->input('kodepenerbitans_id') == '2' || $this->input('kodepenerbitans_id') == '3' || $this->input('kodepenerbitans_id') == '6' || $this->input('kodepenerbitans_id') == '9'){
            $rules = [
                'v_smartcard' => 'required|in:1',
            ];
        }
        if ($this->input('kodepenerbitans_id') == '5' || $this->input('kodepenerbitans_id') == '6'){
            $rules = [
                'v_suratketerangan' => 'required|in:1',
            ];
        }

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
            'v_stnk.required' => 'STNK wajib diisi.',
            'v_stnk.in'       => 'STNK harus dicentang(Ada).',
            'v_srut.required' => 'SRUT wajib diisi.',
            'v_srut.in'       => 'SRUT harus dicentang(Ada).',
            'v_smartcard.required' => 'Kartu Uji wajib diisi.',
            'v_smartcard.in'       => 'Kartu Uji harus dicentang(Ada).',
            'v_suratketerangan.required' => 'Surat Keterangan wajib diisi.',
            'v_suratketerangan.in'       => 'Surat Keterangan harus dicentang(Ada).',
        ];
    }
}

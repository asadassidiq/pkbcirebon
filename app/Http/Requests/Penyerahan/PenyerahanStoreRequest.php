<?php

namespace App\Http\Requests\Penyerahan;

use Illuminate\Foundation\Http\FormRequest;

class PenyerahanStoreRequest extends FormRequest
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
            'namapenerima'     => 'required|string|max:25',
            'noidentitaspenerima'     => 'nullable|string|max:25',
            'notelppenerima'     => 'required|string|max:25',
        ];

        return $rules;
    }

    public function messages()
    {
        return [
            'namapenerima.required' => 'Nama Penerima wajib diisi',
            'notelppenerima.required' => 'No Surat wajib diisi',
            // 'noidentitaspenerima.required' => 'No Identitas Penrima wajib diisi',
        ];
    }
}

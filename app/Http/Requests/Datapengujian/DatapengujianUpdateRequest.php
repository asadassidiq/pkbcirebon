<?php

namespace App\Http\Requests\Datapengujian;

use Illuminate\Foundation\Http\FormRequest;

class DatapengujianUpdateRequest extends FormRequest
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
            'nokendalikartu'     => 'required|string|max:25',
            'rfid'     => 'required|string|max:25',
            'perso'     => 'required|max:25',
        ];

        return $rules;
    }
    
    public function messages()
    {
        return [
            'nokendalikartu.required' => 'No Kartu wajib diisi',
            'rfid.required' => 'No RFID wajib diisi',
            'perso.required' => 'Perso Kartu wajib diisi',
        ];
    }
}

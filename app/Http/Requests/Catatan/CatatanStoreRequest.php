<?php

namespace App\Http\Requests\Catatan;

use Illuminate\Foundation\Http\FormRequest;

class CatatanStoreRequest extends FormRequest
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
        return [
            'pendaftaran_id'=>'required|int',
            'nama'=>'required|string',
            'alasan'=>'required|string',
            'rekomendasi'=>'required|string',
            'pos'=>'required',
        ];
    }
}

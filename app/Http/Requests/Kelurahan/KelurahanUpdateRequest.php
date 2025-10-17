<?php

namespace App\Http\Requests\Kelurahan;

use Illuminate\Foundation\Http\FormRequest;

class KelurahanUpdateRequest extends FormRequest
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
            'kec_id'=>'required',
            'nama'=>'required',
        ];
    }
}

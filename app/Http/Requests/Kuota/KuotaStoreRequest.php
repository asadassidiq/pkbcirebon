<?php

namespace App\Http\Requests\Kuota;

use Illuminate\Foundation\Http\FormRequest;

class KuotaStoreRequest extends FormRequest
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
            'kuotapaginormal'=>'required|int',
            'kuotapagijumat'=>'required|int',
            'kuotasiangnormal'=>'required|int',
            'kuotasiangjumat'=>'required|int',
        ];
    }
}

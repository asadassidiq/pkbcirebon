<?php

namespace App\Http\Requests\Pos4;

use Illuminate\Foundation\Http\FormRequest;

class Pos4UpdateRequest extends FormRequest
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
            'alatuji_penunjukkecepatan' => 'required',
            'pos4' => 'required',
        ];
    }
}

<?php

namespace App\Http\Requests\Pos2;

use Illuminate\Foundation\Http\FormRequest;

class Pos2UpdateRequest extends FormRequest
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
            'alatuji_emisiasapbahanbakarsolar' => 'required_if:bahanbakar,==,Solar',
            'alatuji_emisicobahanbakarbensin'  => 'required_if:bahanbakar,==,Bensin',
            'alatuji_emisihcbahanbakarbensin'  => 'required_if:bahanbakar,==,Bensin',
            'pos2' => 'required',
        ];
    }
}

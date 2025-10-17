<?php

namespace App\Http\Requests\Pos1;

use Illuminate\Foundation\Http\FormRequest;

class Pos1UpdateRequest extends FormRequest
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
            'kualitasminyakrem' => 'required',
            'kondisibadankacaengseldantempatduduk' => 'required',
            'sistemlampudanapc' => 'required',
            'ukurankendaraan' => 'required',
            'rancanganteknis' => 'required',
            'pemuatan'        => 'required',
            'perlengkapan' => 'required',
            'komponenpendukung' => 'required',
            'penempelan' => 'required',
            'kondisiban' => 'required',
            'pos1' => 'required',
        ];
    }
}

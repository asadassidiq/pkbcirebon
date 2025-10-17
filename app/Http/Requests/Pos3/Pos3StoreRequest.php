<?php

namespace App\Http\Requests\Pos3;

use Illuminate\Foundation\Http\FormRequest;

class Pos3StoreRequest extends FormRequest
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
            'beratsumbu1' => 'required',
            'beratsumbu2' => 'required',
            'beratsumbu3' => 'required',
            'beratsumbu4' => 'required',
            'alatuji_kincuprodadepan'        => 'required',
            'alatuji_remparkirtangan' => 'required',
            'effsumbu1'=> 'required',
            'effsumbu2'=> 'required',
            'effsumbu3'=> 'required',
            'effsumbu4'=> 'required',
            'alatuji_remutamaselisihgayapengeremanrodakirikanan1' => 'required',
            'alatuji_remutamaselisihgayapengeremanrodakirikanan2' => 'required',
            'alatuji_remutamaselisihgayapengeremanrodakirikanan3' => 'required',
            'alatuji_remutamaselisihgayapengeremanrodakirikanan4' => 'required',
        ];
    }
}

<?php

namespace App\Http\Requests\UserPKB;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
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
            'name' => 'required|string|max:191',
            'username' => 'required|string|max:191',
            'role' => 'required|string|max:191',
            'password' => 'required|string|min:5'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Nama wajib diisi',
            'username.required' => 'Username wajib diisi',
            'role.required' => 'Role wajib diisi',
            'password.required' => 'Password wajib diisi',
        ];
    }
}

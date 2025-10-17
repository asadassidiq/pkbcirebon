<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use App\Traits\CryptHelper;

class CryptCast implements CastsAttributes
{
    protected $key;

    public function __construct($key = 'DEFAULTKEY')
    {
        $this->key = $key;
    }

    public function get($model, $key, $value, $attributes)
    {
        return CryptHelper::decrypt($value, $this->key);
    }

    public function set($model, $key, $value, $attributes)
    {
        return CryptHelper::encrypt($value, $this->key);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Logtte extends Model
{
    protected $table = 'log_tte';
    protected $fillable = [
        'pendaftaran_id',
        'user_id',
        'ip',
        'respon'
    ];
}

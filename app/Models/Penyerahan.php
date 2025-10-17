<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Penyerahan extends Model
{
    protected $table = 'penyerahan';

    protected $fillable = [
        'pendaftaran_id',
        'namapenerima',
        'noidentitaspenerima',
        'notelppenerima',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DatakendaraanOnline extends Model
{
    protected $table = 'datakendaraan_online';

    protected $fillable = [
        'user_id',
        'noregistrasikendaraan',
        'nouji',
        'status'
    ];
}
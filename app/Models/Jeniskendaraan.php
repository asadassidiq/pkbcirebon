<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jeniskendaraan extends Model
{
    protected $table = 'jeniskendaraan';

    protected $fillable = [
        'id',
        'jenis',
        'klasifikasis_id',
        'jeniskendaraan'
    ];
}

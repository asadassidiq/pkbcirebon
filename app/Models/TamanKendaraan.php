<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TamanKendaraan extends Model
{
    use HasFactory;
    protected $table = 'tamankendaraan';

    protected $fillable = [
        'total',
        'masuk',
        'keluar',
        'tanggal',
    ];
}

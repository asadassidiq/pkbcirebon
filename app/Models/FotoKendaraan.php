<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FotoKendaraan extends Model
{
    use HasFactory;
    protected $table = 'fotokendaraan';

    protected $fillable = [
        'identitaskendaraan_id',
        'foto1',
        'foto2',
        'foto3',
        'foto4',
        'foto5',
        'foto6',
    ];
}

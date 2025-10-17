<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ttd extends Model
{
    protected $table = 'tandatangan';

    protected $fillable = [
        'nama',
        'nip',
        'jabatan',
    ];
}

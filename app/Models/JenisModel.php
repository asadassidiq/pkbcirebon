<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisModel extends Model
{
    protected $table = 'models';

    protected $fillable = [
        'id',
        'model',
    ];
}

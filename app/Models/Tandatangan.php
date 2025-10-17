<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tandatangan extends Model
{
    use HasFactory;
    protected $table = 'tandatangan';

    protected $fillable = [
        'id',
        'name',
        'user_id',
    ];
}

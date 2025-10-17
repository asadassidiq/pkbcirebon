<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Direktur extends Model
{
    protected $table= 'direktur';
    protected $primaryKey = 'idx';
    protected $pKeyType = 'bigint';
}

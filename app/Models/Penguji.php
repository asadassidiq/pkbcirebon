<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penguji extends Model
{
    protected $table= 'penguji';
    protected $primaryKey = 'idx';
    protected $pKeyType = 'bigint';
}

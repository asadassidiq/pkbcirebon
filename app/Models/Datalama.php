<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Datalama extends Model
{
    use HasFactory;
    protected $table = 'datapengujian';
    protected $primaryKey = 'idx';
    public $timestamps = false;
    protected $guarded = [];
    
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bc_Srut extends Model
{
    use HasFactory;
    protected $table = 'bc_srut';
    protected $primaryKey = 'srut_id';
    public $timestamps = false;

}

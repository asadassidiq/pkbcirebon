<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Fotomentah extends Model
{
    protected $table= 'fotomentah';
    protected $primaryKey = 'idx';
    protected $fillable = ['idx', 'nouji' ,'fotodepanmentah', 'fotobelakangmentah', 'fotokananmentah', 'fotokirimentah', 'statuskompres'];
    protected $pKeyType = 'int';
}

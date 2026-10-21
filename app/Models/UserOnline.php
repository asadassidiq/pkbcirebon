<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserOnline extends Model
{
    protected $table = 'users_pkb';

    protected $fillable = [
        'no_identitas', 'name', 'nama_badan_usaha', 'email', 'telepon',
        'provinsi', 'kabupaten', 'kecamatan', 'kelurahan', 'alamat', 'password',
    ];
}

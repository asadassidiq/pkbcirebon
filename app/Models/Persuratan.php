<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Persuratan extends Model
{
    protected $table = 'persuratan';
    protected $fillable = [
        'pendaftaran_id',
        'nosurat',
        'nosuratdari',
        'kode',
        'kepada',
        'tujuan',
        'alasan',
        'nokendaraanbaru',
        'namapemilikbaru',
        'alamatpemilikbaru',
        'catatan',
        'status_cetak',
        'v_stnk',
        'v_kartuinduk',
        'v_srut',
        'v_smartcard',
        'v_riwayat',
    ];
}

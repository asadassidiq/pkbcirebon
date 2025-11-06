<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Pendaftaran extends Model
{
    protected $table = 'pendaftarans';
    protected $hidden = ['id', 'identitaskendaraan_id','idx','user_id','user_pos1','user_pos2','user_pos3','user_pos4','user_posverif'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = (string) Str::uuid();
            }
        });
    }

    public static function booted()
    {
        static::updating(function ($model) {
            if ($model->isDirty('uuid')) {
                $model->uuid = $model->getOriginal('uuid');
            }
        });
    }

    protected $fillable = [
        'identitaskendaraan_id',
        'noantrian',
        'tglpendaftaran',
        'tglbayar',
        'kodepenerbitans_id',
        'status',
        'foto',
        'posisi',
        'verif',
        'jenispendaftaran',
        'noantrian',
        'nosuratkehilangan',
        'namapemohon',
        'alamatpemohon',
        'notelp',
        'pos1',
        'pos2',
        'pos3',
        'pos4',
        'posverif',
        'user_pos1',
        'user_pos2',
        'user_pos3',
        'user_pos4',
        'user_posverif',
    ];
}

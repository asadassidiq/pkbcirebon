<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class PendaftaransOnline extends Model
{
    use HasFactory;

    protected $table = 'pendaftaransonline';
    protected $hidden = ['id'];

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

    // protected $guarded = [];
    protected $fillable = [
        'uuid',
        'nouji',
        'noregistrasikendaraan',
        'tglpendaftaran',
        'kodepenerbitans_id',
        'status',
        'kodewilayahasal',
        'namapemohon',
        'notelp',
        'waktu',
    ];
}

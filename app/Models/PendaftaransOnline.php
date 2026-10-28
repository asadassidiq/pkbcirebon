<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class PendaftaransOnline extends Model
{
    use HasFactory;

    protected $table = 'bookings';
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

    protected $guarded = [];
    protected $fillable = [
        'uuid',
        'user_id',
        'kode_booking',
        'nomor_polisi',
        'nomor_uji',
        'merek_tipe',
        'nama_pemilik',
        'pemohon_nama',
        'pemohon_telepon',
        'jenis_uji',
        'tanggal',
        'sesi',
        'nomor_antrian',
        'status',
        'catatan',
    ];
}

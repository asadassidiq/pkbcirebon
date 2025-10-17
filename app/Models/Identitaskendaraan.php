<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Identitaskendaraan extends Model
{
    protected $table = 'identitaskendaraans';
    protected $hidden = ['id','identitaskendaraan_id'];

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

    public function setNoujiAttribute($value)
    {
        $this->attributes['nouji'] = strtoupper($value);
    }

    public function setNoregistrasikendaraanAttribute($value)
    {
        $this->attributes['noregistrasikendaraan'] = strtoupper($value);
    }

    public function setNorangkaAttribute($value)
    {
        $this->attributes['norangka'] = strtoupper($value);
    }

    public function setNomesinAttribute($value)
    {
        $this->attributes['nomesin'] = strtoupper($value);
    }

    protected $fillable = [
        'nouji',
        'nama',
        'alamat',
        'kota',
        'kecamatan',
        'kelurahan',
        'nohp',
        'noidentitaspemilik',
        'noregistrasikendaraan',
        'tgl_registrasikendaraan',
        'nosertifikatreg',
        'tglsertifikatreg',
        'merek',
        'tipe',
        'varian',
        'norangka',
        'nomesin',
        'thpembuatan',
        'bahanbakar',
        'isisilinder',
        'dayamotorpenggerak',
        'jenis',
        'subjenis',
        'model',
        'peruntukan',
        'kodewilayah',
        'kodewilayahasal',
        'idkepaladinas',
        'iddirektur',
        'idmerek',
        'idtipe',
        'idvarian',
        'idbahanbakar',
        'idjenis',
        'idsubjenis',
        'idkodewilayah',
        'idkodewilayahasal',
        'rancang',
        'warna',
        'statuskendaraan',
        'tglterdaftar',
        'tglberlakuuji',
        'tglout',
    ];
}

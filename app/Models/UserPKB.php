<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;

use App\Casts\CryptCast;

class UserPKB extends Authenticatable 
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $table = 'users';

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
        'uuid',
        'name',
        'username',
        'password',
        'role',
        'jabatan',
        'nip',
        'nrp',
        'pangkat',
        'pf',
        'ft',
        'p1',
        'p2',
        'p3',
        'p4',
        'v1',
        'ct',
    ];

    protected $hidden = [
        'id',
        'password',
        'remember_token',
    ];

    protected $casts = [
        // 'pf' => CryptCast::class . ':' . 'solusiteknikindonesiaxsimbok',
        // 'ft' => CryptCast::class . ':' . 'solusiteknikindonesiaxsimbok',
        // 'p1' => CryptCast::class . ':' . 'solusiteknikindonesiaxsimbok',
        // 'p2' => CryptCast::class . ':' . 'solusiteknikindonesiaxsimbok',
        // 'p3' => CryptCast::class . ':' . 'solusiteknikindonesiaxsimbok',
        // 'v1' => CryptCast::class . ':' . 'solusiteknikindonesiaxsimbok',
        // 'v2' => CryptCast::class . ':' . 'solusiteknikindonesiaxsimbok',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

}
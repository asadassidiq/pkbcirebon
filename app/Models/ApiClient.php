<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApiClient extends Model
{
    //
    protected $fillable = [
        'name',
        'client_id',
        'client_secret',
        'abilities',
        'active',
    ];

    protected $casts = [
        'abilities' => 'array',
        'active' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(
            User::class,
            'user_id'
        );
    }
}

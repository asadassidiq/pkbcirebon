<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Perizinan extends Model
{
    protected $table = 'perizinans';
    protected $fillable = [
        'pendaftaran_id',
        'proposed_data',
        'requested_by_user_id',
        'approved_by_user_id',
        'approved',
        'approval_notes',
        'type',
    ];
}

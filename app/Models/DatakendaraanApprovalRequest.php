<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DatakendaraanApprovalRequest extends Model
{
    use HasFactory;

    protected $table = 'datakendaraan_approval_requests';

    protected $fillable = [
        'datakendaraan_id',
        'requested_by_user_id',
        'original_data',
        'proposed_data',
        'status',
    ];

    protected $casts = [
        'original_data' => 'array',
        'proposed_data' => 'array',
    ];

    public function datakendaraan()
    {
        return $this->belongsTo(Datakendaraan::class);
    }

    public function requestedBy()
    {
        return $this->belongsTo(User::class, 'requested_by_user_id');
    }
}

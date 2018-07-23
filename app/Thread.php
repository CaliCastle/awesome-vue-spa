<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    protected $fillable = [
        'body'
    ];

    protected $hidden = [
        'user_id', 'created_at'
    ];

    protected $perPage = '20';

    /**
     * User relationship.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

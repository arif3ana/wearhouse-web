<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;


class Karyawan extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [ 
        'user_id',
        'image',
        'name',
        'nik'
    ];

    public function categoryBarang(): HasMany
    {
        return $this->hasMany(Pengiriman::class);
    }

}

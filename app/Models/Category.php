<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;



class Category extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','name'];

    public function barang(): HasMany
    {
        return $this->hasMany(Barang::class);
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

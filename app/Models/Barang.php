<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;



class Barang extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'category_id', 'nama_barang', 'jumlah_barang'];
    public $attributes = ['jumlah_barang'];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

        public function categoryBarang(): HasMany
    {
        return $this->hasMany(Pengiriman::class);
    }
}

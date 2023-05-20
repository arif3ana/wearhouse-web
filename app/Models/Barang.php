<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Barang extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'category_id', 'nama_barang', 'jumlah_barang'];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}

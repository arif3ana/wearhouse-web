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
    protected $with = ['category'];

    public function scopeSearch($query, $cari)
    {
        $query->when($cari ?? false, function($query, $cari) {
            return $query->where('nama_barang', 'like', '%'.$cari.'%')
            ->orWhereHas('category', function($query) use($cari){
                $query->where('name', 'like', '%'.$cari.'%');
            });
        });
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

        public function pengiriman(): HasMany
    {
        return $this->hasMany(Pengiriman::class);
    }
}

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

    public function scopeSearch($query, $cari)
    {
         // menerima request dari controller untuk feature pencarian 
        // receive a request from the controller for the search feature
        //?? = null coalesing oprator PHP pemanis saat menggunakan ternary dan digunakan untuk mengecek isset
        $query->when($cari ?? false, function($query, $cari) {
            return $query->where('name','like','%'.$cari.'%')
            ->orWhere('nik','like','%'.$cari.'%');
        });
    }

    public function pengiriman(): HasMany
    {
        return $this->hasMany(Pengiriman::class);
    }

}

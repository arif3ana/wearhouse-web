<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

class Pengiriman extends Model
{
    use HasFactory;
    public $table = "pengirimans";
    protected $fillable = ['user_id','barang_id', 'karyawan_id', 'jumlah_pengiriman'];
    protected $with = ['karyawan', 'barang'];

    public function scopeSearch($query, $cari)
    {
        $query->when($cari ?? false, function($query, $cari) {
            return $query->whereDate('created_at','like', '%'.$cari.'%')
            ->orWhereMonth('created_at', '=', 'like', '%'.date('m', strtotime($cari)).'%')
            ->orWhereYear('created_at','like', '%'.date('Y', strtotime($cari)).'%')
            ->orWhereHas('barang', function($query) use($cari) {
                $query->where('nama_barang', 'like', '%'.$cari.'%');
            })->orWhereHas('karyawan', function($query) use($cari) {
                $query->where('name', 'like', '%'.$cari.'%');
            });
        });
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function barang(): BelongsTo
    {
        return $this->belongsTo(Barang::class);
    }

    public function karyawan(): BelongsTo
    {
        return $this->belongsTo(Karyawan::class);
    }

    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])
        ->format('d M Y');
    }
}

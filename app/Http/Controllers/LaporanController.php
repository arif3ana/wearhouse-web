<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\Pengiriman;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;


class LaporanController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Laporan/Index', [
            // Laporan stok barang di program untuk satu bulan sekali dengan data bulan sekarang, jika data tdak tampil itu karena belum ada data update dan data baru bulan sekarang
            // Stock reports are programmed for once a month with the current month's data, if the data does not appear it is because there is no data update and new data for the current month
            'barangs' => Barang::where('user_id', auth()->user()->id)->whereMonth('updated_at', Carbon::now()->format('m'))->get(),
            'pengiriman' => Pengiriman::where('user_id', auth()->user()->id)->whereMonth('updated_at', Carbon::now()->format('m'))->get()
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\Karyawan;
use App\Models\Pengiriman;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PengirimanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employes = Karyawan::all();
        $barangs = Barang::all();
        $pengirimans = Pengiriman::where('user_id', auth()->user()->id)->with(['karyawan', 'barang'])->get();
        return Inertia::render('Dashboard/Pengiriman/Index', [
            "karyawans" => $employes,
            "barangs" => $barangs,
            "pengirimans" => $pengirimans
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Dashboard/Pengiriman/Kirim');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $kirim = $request->validate([
            'barang_id' => 'required',
            'karyawan_id' => 'required',
            'jumlah_pengiriman' => 'required|numeric|min:0|max:999'
        ]);
        $kirim['user_id'] = auth()->user()->id;

        // mengupdate jumlah_barang dari table barang dangan hasil dari jumlah_barang di kurang jumlah pengiriman 
        $barangs = Barang::where('id', $request->barang_id)->get();
        foreach ($barangs as $barang) {
            $jumlah = ($barang->jumlah_barang);
        }
        $result = $jumlah - $request->jumlah_pengiriman;
        if ($result < 0) {
            return dd('jumlah barang kurang');
            // Use a sweet alert for warning message
        }
        Barang::where('jumlah_barang', $jumlah)->update(['jumlah_barang' => $result]);
        Pengiriman::create($kirim);
        return redirect()->route('dashboard.pengiriman.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pengiriman  $pengiriman
     * @return \Illuminate\Http\Response
     */
    public function show(Pengiriman $pengiriman)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pengiriman  $pengiriman
     * @return \Illuminate\Http\Response
     */
    public function edit(Pengiriman $pengiriman)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pengiriman  $pengiriman
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pengiriman $pengiriman)
    {
       //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pengiriman  $pengiriman
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pengiriman $pengiriman)
    {
        //
    }
}

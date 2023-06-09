<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;



class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // search for chek request from input search and sand to models
        $barang = Barang::latest()->search(request('search'));
        return Inertia::render('Dashboard/Barang/index', [
            'barangs' => $barang->where('user_id', auth()->user()->id)->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function show(Barang $barang)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function edit(Barang $barang)
    {
        return inertia('Dashboard/Barang/Update', [
            'barangs' => $barang,
            'categories' => Category::where('user_id', auth()->user()->id)->get()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Barang $barang)
    {
        $data = $request->validate([
            'category_id' => 'nullable',
            'nama_barang' => 'nullable|unique:barangs,nama_barang,'.$barang->id,
            'jumlah_barang' => 'nullable|numeric|min:0|max:999'
        ]);

        $barang->update($data);
        return redirect()->route('dashboard.barang.index')->with([
            'message' => 'Data Barang berhasil di edit',
            'type' => 'success'
        ]);;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function destroy(Barang $barang)
    {
        $barang->delete();
        return redirect()->route('dashboard.barang.index')->with([
            'message' => 'Data Barang berhasil di hapus',
            'type' => 'error'
        ]);
    }

    // menampilkan data belanja gudang
    public function belanja()
    {
        $barang = Barang::where('user_id', auth()->user()->id)->get();
        return Inertia::render('Dashboard/Belanja/Index', [
            'barangs' => $barang,
        ]);
    }
}

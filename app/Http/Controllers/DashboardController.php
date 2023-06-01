<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Barang;
use App\Models\Category;
use App\Models\Karyawan;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $barang = Barang::where('user_id', auth()->user()->id)->with('category')->latest()->limit(5)->get();
        $belanja = Barang::where('user_id', auth()->user()->id)->where('jumlah_barang', 0)->with('category')->limit(3)->get();
        $category = Category::where('user_id', auth()->user()->id)->get();
        $employe = Karyawan::where('user_id', auth()->user()->id)->latest()->limit(3)->get();
        return Inertia::render('Dashboard/Index', [
            'barangs' => $barang,
            'belanja' => $belanja,
            'categories' => $category,
            'karyawan' => $employe
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Dashboard/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'category_id' => 'required',
            'nama_barang' => 'required|unique:barangs',
            'jumlah_barang' => 'required|numeric'
        ]);

        $data['user_id'] = auth()->user()->id;

        Barang::create($data);

        return redirect()->route('dashboard.index')->with([
            'message' => 'Data baru berhasil di simpan',
            'type' => 'success',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

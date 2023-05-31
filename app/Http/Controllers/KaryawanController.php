<?php

namespace App\Http\Controllers;

use App\Models\Karyawan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;


class KaryawanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employe = Karyawan::latest()->search(request('search'));
        
        $out = Karyawan::where('user_id', auth()->user()->id)->onlyTrashed()->get();
        return Inertia::render('Dashboard/Karyawan/Index', [
            'employes' => $employe->where('user_id', auth()->user()->id)->get(),
            'outEmployes' => $out
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Dashboard/Karyawan/Create');
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
            'image' => 'required|image|file|max:1024',
            'name' => 'required',
            'nik' => 'required|numeric|min:0|max:99999'
        ]);

        $data['user_id'] = auth()->user()->id;
        $data['image'] = Storage::disk('public',)->put('imgKaryawan', $request->file('image'));

        Karyawan::create($data);
        return redirect()->route('dashboard.karyawan.index')->with([
            'message' => 'Karyawan baru telah di tambahkan',
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Karyawan  $karyawan
     * @return \Illuminate\Http\Response
     */
    public function show(Karyawan $karyawan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Karyawan  $karyawan
     * @return \Illuminate\Http\Response
     */
    public function edit(Karyawan $karyawan)
    {
        return inertia('Dashboard/Karyawan/Update', [
            'employes' => $karyawan
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Karyawan  $karyawan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Karyawan $karyawan)
    {
        $data = $request->validate([
            'image' => 'nullable|image|file|max:1024',
            'name' => 'nullable|unique:karyawans,name,'.$karyawan->id,
            'nik' => 'nullable|numeric|min:0|max:9999999999'
        ]);

        if ($request->file('image')) {
            $data['image'] = Storage::disk('public')->put('imgKaryawan', $request->file('image'));
            Storage::disk('public')->delete($karyawan->image);
        } else {
            $data['image'] = $karyawan->image;
        }

        $karyawan->update($data);
        return redirect()->route('dashboard.karyawan.index')->with([
            'message' => 'data Karyawan berhasil di edit',
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Karyawan  $karyawan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Karyawan $karyawan)
    {
        $karyawan->delete();
        Storage::disk('public')->delete($karyawan->image);
        return redirect()->route('dashboard.karyawan.index')->with([
            'message' => 'data Karyawan berhasil di hapus',
            'type' => 'error'
        ]);
    }

    public function restore($id)
    {
        Karyawan::onlyTrashed()->where('id', $id)->restore();
        return redirect()->route('dashboard.karyawan.index')->with([
            'message' => 'Karyawan berhasil di Kembalikan. untuk kelengkapan data, upload kembali poto karyawan',
            'type' => 'success'
        ]);
    }

    public function destroy_permanen($id)
    {
        $karyawan = Karyawan::onlyTrashed()->where('id', $id);
        $karyawan->forceDelete();
        return redirect()->route('dashboard.karyawan.index')->with([
            'message' => 'data Karyawan berhasil di hapus permanen',
            'type' => 'error'
        ]);
    }

    // public function search(Request $request)
    // {
    //     dd($request);
    //     // $cari = $request->query('search');
    //     // $cari = $request->search;
    //     // $employe = Karyawan::query()->when($cari, fn ($query) => $query->where('name','like','%'.$cari.'%')->orWhere('nik','like','%'.$cari.'%'))->get();
    //     // $employe = Karyawan::where('name','Like',"%$cari%")->orWhere('nik','Like',"%$cari%")->get();
    //     // return inertia('Dashboard/Karyawan/Index', ['employes' => $employe]);
    // }
}

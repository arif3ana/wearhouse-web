<?php

namespace App\Http\Controllers;

use App\Models\Karyawan;
use Illuminate\Http\Request;
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
        $employe = Karyawan::where('user_id', auth()->user()->id)->get();
        $out = Karyawan::where('user_id', auth()->user()->id)->onlyTrashed()->get();
        return Inertia::render('Dashboard/Karyawan/Index', [
            'employes' => $employe,
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
            'name' => 'required',
            'nik' => 'required|numeric|min:0|max:99999'
        ]);

        $data['user_id'] = auth()->user()->id;

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
            'name' => 'nullable|unique:karyawans,name,'.$karyawan->id,
            'nik' => 'nullable|numeric|min:0|max:9999999999'
        ]);

        $karyawan->update($data);
        return redirect()->route('dashboard.karyawan.index');
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
        return redirect()->route('dashboard.karyawan.index');
    }

    public function restore($id)
    {
        Karyawan::onlyTrashed()->where('id', $id)->restore();
        return redirect()->route('dashboard.karyawan.index');
    }
}

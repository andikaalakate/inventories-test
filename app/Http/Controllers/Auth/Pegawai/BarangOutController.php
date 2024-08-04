<?php

namespace App\Http\Controllers\Auth\Pegawai;

use App\Http\Controllers\Controller;
use App\Models\Barang;
use App\Models\BarangOut;
use Illuminate\Http\Request;

class BarangOutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $barangs = Barang::get();
        $barangOut = BarangOut::get();
        return view('auth.pegawai.barang.out', [
            'barangs' => $barangs,
            'barangOut' => $barangOut,
            'title' => 'Barang Keluar'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'barang_id' => 'required',
            'pegawai_id' => 'required',
            'jumlah' => 'required|integer',
        ]);

        $barangOut = BarangOut::create($request->all());

        $barangOut->barang->decrementJumlah($barangOut->jumlah);

        return redirect()->route('pegawai.barang-out')->with('success', 'Barang masuk berhasil dikeluarkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

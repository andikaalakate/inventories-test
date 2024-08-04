<?php

namespace App\Http\Controllers\Auth\Pegawai;

use App\Http\Controllers\Controller;
use App\Models\Barang;
use App\Models\BarangIn;
use Illuminate\Http\Request;

class BarangInController extends Controller
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
        $barangIn = BarangIn::get();
        return view('auth.pegawai.barang.in', [
            'barangs' => $barangs,
            'barangIn' => $barangIn,
            'title' => 'Barang masuk'
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

        $barangIn = BarangIn::create($request->all());

        $barangIn->barang->incrementJumlah($barangIn->jumlah);

        return redirect()->route('pegawai.barang-in')->with('success', 'Barang masuk berhasil ditambahkan');
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

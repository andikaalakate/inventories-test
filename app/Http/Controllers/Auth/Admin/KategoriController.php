<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Models\KategoriBarang;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kategoris = KategoriBarang::with('barang')->get();
        return view('auth.kategori-barang', [
            'title' => 'Kategori Barang',
            'kategoris' => $kategoris,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('auth.admin.kategori.tambah', [
            'title' => 'Tambah Kategori',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string',
        ]);

        $kategori = new KategoriBarang($request->only([
            'nama',
        ]));

        $kategori->id = (string) Str::uuid();

        $kategori->save();

        return redirect()->route('admin.kategori.list')->with('success', 'Data Kategori berhasil disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $kategori)
    {
        $kategorie = KategoriBarang::where('nama', $kategori)->firstOrFail();
        $barangs = $kategorie->barang;

        return view('auth.kategori-barang-show', [
            'title' => 'Lihat Kategori',
            'kategori' => $kategorie,
            'barangs' => $barangs
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $kategori)
    {
        // $kategori = KategoriBarang::find($id);
        $kategorie = KategoriBarang::where('nama', $kategori)->firstOrFail();
        $barangs = $kategorie->barang;

        return view('auth.admin.kategori.edit', [
            'title' => 'Edit Kategori',
            'kategori' => $kategorie,
            'barangs' => $barangs
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nama' => 'required|string',
        ]);

        $kategori = KategoriBarang::find($id);
        $kategori->update($request->all());

        return redirect()->route('admin.kategori.list')->with('success', 'Data Kategori berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $kategori = KategoriBarang::find($id);
        $kategori->delete();

        return redirect()->route('admin.kategori.list')->with('success', 'Data Kategori berhasil dihapus');
    }
}

<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Models\Barang;
use App\Models\KategoriBarang;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $barangs = Barang::with('kategori')->get();
        $kategoris = KategoriBarang::get();
        // dd($barangs);
        return view('auth.admin.barang', [
            'barangs' => $barangs,
            'kategoris' => $kategoris,
            'title' => 'Barang'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string',
            'kategori_id' => 'required|uuid|exists:kategori_barangs,id',
            'jumlah' => 'required|integer',
            'deskripsi' => 'required|string',
            'gambar.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'status' => 'required|in:tersedia,habis'
        ]);

        $barang = new Barang($request->only([
            'nama',
            'kategori_id',
            'jumlah',
            'deskripsi',
            'gambar',
            'status'
        ]));

        $barang->id = (string) Str::uuid();

        // Menangani gambar
        if ($request->hasFile('gambar')) {
            $images = $request->file('gambar');
            $imagePaths = [];
            // dd($images);

            foreach ($images as $image) {
                $imageName = $image->getClientOriginalName();
                $imagePath = $image->storeAs('gambar/barang', $imageName, 'public');
                $imagePaths[] = $imagePath;
            }

            $barang->gambar = json_encode($imagePaths); // Simpan jalur gambar sebagai JSON
        }

        $barang->save();

        return redirect()->route('admin.barang.list')->with('success', 'Data Barang berhasil disimpan');

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

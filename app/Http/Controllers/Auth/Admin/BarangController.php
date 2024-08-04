<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Models\Barang;
use App\Models\KategoriBarang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
        return view('auth.barang', [
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
        $kategoris = KategoriBarang::get();
        return view('auth.admin.barang.tambah', [
            'title' => 'Tambah Barang',
            'kategoris' => $kategoris,
        ]);
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
    public function show(string $barang)
    {
        $barang = Barang::where('nama', $barang)->firstOrFail();
        $kategoris = KategoriBarang::get();

        $barangIn = $barang->barangIn;
        $barangOut = $barang->barangOut;

        return view('auth.barang-show', [
            'title' => 'Lihat Barang',
            'barang' => $barang,
            'kategoris' => $kategoris,
            'barangIn' => $barangIn,
            'barangOut' => $barangOut
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $barang)
    {
        $barang = Barang::where('nama', $barang)->firstOrFail();
        $kategoris = KategoriBarang::get();

        $barangIn = $barang->barangIn;
        $barangOut = $barang->barangOut;

        return view('auth.admin.barang.edit', [
            'title' => 'Edit Barang',
            'barang' => $barang,
            'kategoris' => $kategoris,
            'barangIn' => $barangIn,
            'barangOut' => $barangOut
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nama' => 'required|string',
            'kategori_id' => 'required|uuid|exists:kategori_barangs,id',
            'jumlah' => 'required|integer',
            'deskripsi' => 'required|string',
            'gambar.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'status' => 'required|in:tersedia,habis'
        ]);

        $barang = Barang::find($id);

        // Menangani gambar
        if ($request->hasFile('gambar')) {
            $existingImages = json_decode($barang->gambar, true) ?? [];
            $newImages = $request->file('gambar');
            $imagePaths = $existingImages;

            foreach ($newImages as $image) {
                $imageName = $image->getClientOriginalName();
                $imagePath = $image->storeAs('gambar/barang', $imageName, 'public');
                $imagePaths[] = $imagePath;
            }

            $barang->gambar = json_encode($imagePaths); // Simpan jalur gambar sebagai JSON
        }

        $barang->update($request->except('gambar')); // Update semua field kecuali gambar

        return redirect()->route('admin.barang.list')->with('success', 'Data Barang berhasil disimpan');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $barang = Barang::find($id);
        $barang->delete();

        return redirect()->route('admin.barang.list')->with('success', 'Data Barang berhasil dihapus');
    }

    public function deleteImage($barangId, $index)
    {
        $barang = Barang::findOrFail($barangId);

        // Decode existing images
        $images = json_decode($barang->gambar, true);

        if (isset($images[$index])) {
            // Delete the image from storage
            Storage::disk('public')->delete($images[$index]);

            // Remove the image path from the array
            unset($images[$index]);

            // Save updated image paths to the database
            $barang->gambar = json_encode(array_values($images));
            $barang->save();

            return response()->json(['success' => true]);
        }

        return response()->json(['success' => false], 404);
    }

}

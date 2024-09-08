<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Models\Barang;
use App\Models\KategoriBarang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use ProtoneMedia\Splade\Facades\Toast;
use ProtoneMedia\Splade\FileUploads\ExistingFile;
use ProtoneMedia\Splade\FileUploads\HandleSpladeFileUploads;
use ProtoneMedia\Splade\FileUploads\SpladeFile;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $barangsQuery = Barang::with('kategori')->latest();
        $barangs = $barangsQuery->paginate(10);
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
        $messages = [
            'nama.required' => 'Nama Barang harus diisi',
            'nama.string' => 'Nama Barang harus berupa string',
            'kategori_id.required' => 'Kategori harus dipilih',
            'kategori_id.uuid' => 'Kategori harus berupa UUID',
            'kategori_id.exists' => 'Kategori tidak ditemukan',
            'deskripsi.required' => 'Deskripsi harus diisi',
            'gambar*.image' => 'Gambar harus berupa gambar',
            'gambar*.mimes' => 'Gambar harus berupa jpeg, png, jpg, gif, atau svg',
            'gambar*.max' => 'Gambar maksimal 2 MB',
            'jumlah.required' => 'Jumlah harus diisi',
            'jumlah.integer' => 'Jumlah harus berupa angka',
            'jumlah.min' => 'Jumlah minimal 1',
            'jumlah.max' => 'Jumlah maksimal 1000',
        ];

        $validator = Validator::make($request->all(), [
            'nama' => 'required|string',
            'kategori_id' => 'required|uuid|exists:kategori_barangs,id',
            'jumlah' => 'required|integer',
            'deskripsi' => 'required|string',
            'gambar.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ], $messages);

        if ($validator->fails()) {
            $errors = $validator->errors()->all();

            foreach ($errors as $error) {
                Toast::title('Error!')
                    ->warning()
                    ->rightTop()
                    ->autoDismiss(5)
                    ->message($error);
            }

            return redirect()->back()->withInput();
        }

        try {
            DB::beginTransaction();

            $barang = new Barang($request->only([
                'nama',
                'kategori_id',
                'jumlah',
                'deskripsi',
            ]));

            $barang->id = (string) Str::uuid();

            if ($request->jumlah > 0) {
                $barang->status = 'tersedia';
            } else {
                $barang->status = 'habis';
            }

            // Menangani gambar
            if ($request->hasFile('gambar')) {
                $images = $request->file('gambar');
                $imagePaths = [];

                foreach ($images as $image) {
                    $imageName = $image->getClientOriginalName();
                    $imagePath = $image->storeAs('gambar/barang', $imageName, 'public');
                    $imagePaths[] = $imagePath;
                }

                $barang->gambar = $imagePath;

                $barang->gambar = json_encode($imagePaths); // Simpan jalur gambar sebagai JSON
            }

            $barang->save();

            DB::commit();

            Toast::title('Success!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Barang ditambahkan');

            return redirect()->route('admin.barang.list');
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
                ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Barang gagal ditambahkan!' . $e->getMessage());

            return redirect()->back()->withInput();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $barang)
    {
        $barang = Barang::where('nama', $barang)->firstOrFail();
        $kategoris = KategoriBarang::get();

        $barangIn = $barang->barangIn()->latest()->paginate(10, ['*'], 'barang-masuk');
        $barangOut = $barang->barangOut()->latest()->paginate(10, ['*'], 'barang-keluar');

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

        $barangIn = $barang->barangIn()->latest()->paginate(10, ['*'], 'barang-masuk');
        $barangOut = $barang->barangOut()->latest()->paginate(10, ['*'], 'barang-keluar');

        $gambarPaths = json_decode($barang->gambar, true);

        if (is_array($gambarPaths)) {
            foreach ($gambarPaths as $key => $path) {
                $gambarPaths[$key] = $path;
            }
        }

        $barang->gambar = $gambarPaths;

        $gambar = ExistingFile::fromDisk('public')->get($gambarPaths);

        return view('auth.admin.barang.edit', [
            'title' => 'Edit Barang',
            'barang' => $barang,
            'gambar' => $gambar,
            'kategoris' => $kategoris,
            'barangIn' => $barangIn,
            'barangOut' => $barangOut,
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        HandleSpladeFileUploads::forRequest($request, 'gambar'); 

        $messages = [
            'nama.required' => 'Nama Barang harus diisi',
            'nama.string' => 'Nama Barang harus berupa string',
            'kategori_id.required' => 'Kategori harus dipilih',
            'kategori_id.uuid' => 'Kategori harus berupa UUID',
            'kategori_id.exists' => 'Kategori tidak ditemukan',
            'deskripsi.required' => 'Deskripsi harus diisi',
            'jumlah.required' => 'Jumlah harus diisi',
            'jumlah.integer' => 'Jumlah harus berupa angka',
            'jumlah.min' => 'Jumlah minimal 1',
            'jumlah.max' => 'Jumlah maksimal 1000',
        ];

        $validator = Validator::make($request->all(), [
            'nama' => 'required|string',
            'kategori_id' => 'required|uuid|exists:kategori_barangs,id',
            'jumlah' => 'required|integer',
            'deskripsi' => 'required|string',
            'gambar.*' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ], $messages);

        if ($validator->fails()) {
            $errors = $validator->errors()->all();

            foreach ($errors as $error) {
                Toast::title('Error!')
                ->warning()
                    ->rightTop()
                    ->autoDismiss(5)
                    ->message($error);
            }

            return redirect()->back()->withInput();
        }

        try {
            DB::beginTransaction();

            $barang = Barang::findOrFail($id);

            $barang->status = $request->input('jumlah') > 0 ? 'tersedia' : 'habis';

            $existingImages = json_decode($barang->gambar, true) ?? [];

            $updatedImages = [];
            if ($request->has('gambar_existing')) {
                $existingImagesFromRequest = $request->input('gambar_existing', []);
                foreach ($existingImagesFromRequest as $key => $value) {
                    if (isset($existingImages[$key])) {
                        $updatedImages[] = $existingImages[$key];
                    }
                }
            }

            $newImages = [];
            if ($request->hasFile('gambar')) {
                foreach ($request->file('gambar') as $image) {
                    $imageName = $image->getClientOriginalName();
                    $imagePath = $image->storeAs('gambar/barang', $imageName, 'public');
                    $newImages[] = $imagePath;
                }
            }

            $finalImages = array_merge($updatedImages, $newImages);
            $barang->gambar = json_encode($finalImages);

            $barang->update($request->except('gambar_existing', 'gambar_order', 'gambar'));

            DB::commit();

            Toast::title('Success!')
            ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Barang berhasil diperbarui');

            return redirect()->route('admin.barang.list');
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
            ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Barang gagal diperbarui: ' . $e->getMessage());

            return redirect()->back()->withInput();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            DB::beginTransaction();

            Barang::destroy($id);

            DB::commit();

            Toast::title('Success!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Barang Berhasil Dihapus!');

            return redirect()->back();
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
                ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Barang Gagal Dihapus!');

            return redirect()->back();
        }
    }

    public function deleteImage($barangId, $index)
    {
        try {
            DB::beginTransaction();

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

                DB::commit();

                return response()->json(['success' => true]);
            }
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
        }
    }
}

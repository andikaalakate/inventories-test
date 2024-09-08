<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Models\KategoriBarang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use ProtoneMedia\Splade\Facades\Toast;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kategorisQuery = KategoriBarang::with('barang')->latest();
        $kategoris = $kategorisQuery->paginate(10);

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
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string',
        ], [
            'nama.required' => 'Nama harus diisi',
            'nama.string' => 'Nama harus berupa string',
        ]);

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

            $kategori = new KategoriBarang($request->only([
                'nama',
            ]));

            $kategori->id = (string) Str::uuid();

            $kategori->save();

            DB::commit();

            Toast::title('Success!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Kategori Berhasil Ditambah!');

            return redirect()->route('admin.kategori.list');
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
                ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Kategori Gagal Ditambah!');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $kategori)
    {
        $kategorie = KategoriBarang::where('nama', $kategori)->firstOrFail();

        $barangsQuery = $kategorie->barang()->latest()->paginate(10, ['*'], 'barang');

        return view('auth.kategori-barang-show', [
            'title' => 'Lihat Kategori',
            'kategori' => $kategorie,
            'barangs' => $barangsQuery
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $kategori)
    {
        $kategorie = KategoriBarang::where('nama', $kategori)->firstOrFail();

        $barangsQuery = $kategorie->barang()->latest()->paginate(10, ['*'], 'barang');

        return view('auth.admin.kategori.edit', [
            'title' => 'Edit Kategori',
            'kategori' => $kategorie,
            'barangs' => $barangsQuery
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string',
        ], [
            'nama.required' => 'Nama harus diisi',
            'nama.string' => 'Nama harus berupa string',
        ]);

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

            $kategori = KategoriBarang::find($id);
            $kategori->update($request->all());

            DB::commit();

            Toast::title('Success!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Kategori Berhasil Diupdate!');

            return redirect()->route('admin.kategori.list');
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
                ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Kategori Gagal Diupdate!');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            DB::beginTransaction();

            KategoriBarang::destroy($id);

            DB::commit();
            
            Toast::title('Success!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Kategori Berhasil Dihapus!');
            return redirect()->route('admin.kategori.list');
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
                ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Kategori Gagal Dihapus!');
        }
    }
}

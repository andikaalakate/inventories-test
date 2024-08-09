<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $siswas = Siswa::get();
        return view('auth.admin.siswa', [
            'title' => 'Siswa',
            'siswas' => $siswas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('auth.admin.siswa.tambah', [
            'title' => 'Tambah Siswa',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nisn' => 'required|string',
            'nama' => 'required|string',
            'jenis_kelamin' => 'required|in:Laki-laki,Perempuan',
            'kelas' => 'required|in:X,XI,XII',
            'jurusan' => 'required|in:RPL,MPLB,BDP,AKL,TJKT',
            'tempat_lahir' => 'required|string',
            'tgl_lahir' => 'required|date',
            'alamat' => 'required|string',
            'no_hp' => 'required|string|max:18',
        ]);

        $siswa = new Siswa($request->only([
            'nisn',
            'nama',
            'jenis_kelamin',
            'kelas',
            'jurusan',
            'tempat_lahir',
            'tgl_lahir',
            'alamat',
            'no_hp',
        ]));

        $siswa->id = (string) Str::uuid();
        $siswa->save();

        return redirect()->route('admin.siswa.list')->with('success', 'Data Siswa berhasil disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return view('auth.admin.siswa-show', [
            'title' => 'Lihat Siswa',
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return view('auth.admin.siswa.edit', [
            'title' => 'Edit Siswa',
        ]);
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

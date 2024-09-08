<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Models\Barang;
use App\Models\KategoriBarang;
use App\Models\Pegawai;
use App\Models\Siswa;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $countData = [
            'barangCount' => Barang::select('id')->count(),
            'kategoriCount' => KategoriBarang::select('id')->count(),
            'pegawaiCount' => Pegawai::select('id')->count(),
            'siswaCount' => Siswa::select('id')->count(),
            'userCount' => User::select('id')->count(),
        ];

        return view('auth.admin.dashboard', array_merge(['title' => 'Dashboard'], $countData));
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
        //
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

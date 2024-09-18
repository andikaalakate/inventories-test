<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Models\User;
use App\Models\Siswa;
use App\Models\Barang;
use App\Models\Pegawai;
use App\Models\BarangIn;
use App\Models\BarangOut;
use Illuminate\Http\Request;
use App\Models\KategoriBarang;
use App\Http\Controllers\Controller;

class LaporanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $datas = [
            'barangs' => Barang::get(),
            'barangIn' => BarangIn::get(),
            'barangOut' => BarangOut::get(),
            'kategoris' => KategoriBarang::get(),
            'pegawais' => Pegawai::get(),
            'siswas' => Siswa::get(),
            'users' => User::get(),
        ];

        return view('auth.admin.laporan', array_merge(['title' => 'Laporan'], $datas));
    }

    public function cetak(string $laporan)
    {
        $data = [];
        $headers = [];

        switch ($laporan) {
            case ('barang'):
                $head = 'Barang';
                $data = Barang::with('kategori')->get()->map(function ($barang) {
                    return [
                        'Nama' => $barang->nama,
                        'Kategori' => $barang->kategori->nama,
                        'Jumlah' => $barang->jumlah,
                        'Deskripsi' => $barang->deskripsi,
                        'Status' => $barang->status,
                    ];
                });
                $headers = [
                    'Nama',
                    'Kategori',
                    'Jumlah',
                    'Deskripsi',
                    'Status',
                ];
                break;
            case ('barang-masuk'):
                $head = 'Barang Masuk';
                $data = BarangIn::with('barang', 'pegawai')->get()->map(function ($barangIn) {
                    return [
                        'Nama Barang' => $barangIn->barang->nama,
                        'Nama Pegawai' => $barangIn->pegawai->nama,
                        'Jumlah' => $barangIn->jumlah,
                        'Tanggal' => $barangIn->created_at,
                    ];
                });
                $headers = [
                    'Nama Barang',
                    'Nama Pegawai',
                    'Jumlah',
                    'Tanggal',
                ];
                break;
            case ('barang-keluar'):
                $head = 'Barang Keluar';
                $data = BarangOut::with('barang', 'pegawai')->get()->map(function ($barangOut) {
                    return [
                        'Nama Barang' => $barangOut->barang->nama,
                        'Nama Pegawai' => $barangOut->pegawai->nama,
                        'Jumlah' => $barangOut->jumlah,
                        'Tanggal' => $barangOut->created_at,
                    ];
                });
                $headers = [
                    'Nama Barang',
                    'Nama Pegawai',
                    'Jumlah',
                    'Tanggal',
                ];
                break;
            case ('siswa'):
                $head = 'Siswa';
                $data = Siswa::get()->map(function ($siswa) {
                    return [
                        'NISN' => $siswa->nisn,
                        'Nama' => $siswa->nama,
                        'Jenis Kelamin' => $siswa->jenis_kelamin,
                        'Kelas' => $siswa->kelas,
                        'Jurusan' => $siswa->jurusan,
                    ];
                });
                $headers = [
                    'NISN',
                    'Nama',
                    'Jenis Kelamin',
                    'Kelas',
                    'Jurusan',
                ];
                break;
            case ('admin'):
                $head = 'Admin';
                $data = User::get()->map(function ($admin) {
                    return [
                        'Nama' => $admin->name,
                        'Username' => $admin->username,
                        'Email' => $admin->email,
                    ];
                });
                $headers = [
                    'Nama',
                    'Username',
                    'Email',
                ];
                break;
            case ('pegawai'):
                $head = 'Pegawai';
                $data = Pegawai::get()->map(function ($pegawai) {
                    return [
                        'Nama' => $pegawai->nama,
                        'Username' => $pegawai->username,
                        'Email' => $pegawai->email,
                        'Jabatan' => $pegawai->jabatan,
                        'Jenis Kelamin' => $pegawai->jenis_kelamin,
                        'Alamat' => $pegawai->alamat,
                        'No. HP' => $pegawai->no_hp,
                    ];
                });
                $headers = [
                    'Nama',
                    'Username',
                    'Email',
                    'Jabatan',
                    'Jenis Kelamin',
                    'Alamat',
                    'No. HP',
                ];
                break;
        }

        return view('auth.admin.cetak', [
            'title' => 'Cetak Laporan',
            'head' => $head,
            'headers' => $headers,
            'data' => $data,
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

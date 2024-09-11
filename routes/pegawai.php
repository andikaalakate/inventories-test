<?php

use App\Http\Controllers\Auth\Pegawai\DashboardController as PegawaiDashboard;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\Admin\KategoriController;
use App\Http\Controllers\Auth\Admin\BarangController;
use App\Http\Controllers\Auth\Pegawai\BarangInController;
use App\Http\Controllers\Auth\Pegawai\BarangOutController;
use Illuminate\Support\Facades\Route;

Route::prefix('pegawai')->middleware(['auth:pegawai', 'auth.session'])->group(function () {
    // Dasboard
    Route::get('/', [PegawaiDashboard::class, 'index'])->name('pegawai.dashboard');

    // Profile
    Route::get('/profile', [AuthController::class, 'pegawaiProfile'])->name('pegawai.profile');

    // Logout
    Route::post('/logout', [AuthController::class, 'pegawaiLogout'])->name('pegawai.logout');

    // Kategori Barang
    Route::prefix('kategori-barang')->group(function () {
        Route::get('/', [KategoriController::class, 'index'])->name('pegawai.kategori.list');
        Route::get('/{kategori}/lihat', [KategoriController::class, 'show'])->name('pegawai.kategori.show');
    });

    // Barang
    Route::prefix('barang')->group(function () {
        Route::get('/', [BarangController::class, 'index'])->name('pegawai.barang.list');
        Route::get('/{barang}/lihat', [BarangController::class, 'show'])->name('pegawai.barang.show');
        Route::get('/masuk', [BarangInController::class, 'create'])->name('pegawai.barang-in');
        Route::post('/masuk-in', [BarangInController::class, 'store'])->name('pegawai.barang-in.store');
        Route::get('/keluar', [BarangOutController::class, 'create'])->name('pegawai.barang-out');
        Route::post('/keluar-in', [BarangOutController::class, 'store'])->name('pegawai.barang-out.store');
    });
});

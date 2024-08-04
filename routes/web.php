<?php

use App\Http\Controllers\Auth\Admin\BarangController;
use App\Http\Controllers\Auth\Admin\DashboardController as AdminDashboard;
use App\Http\Controllers\Auth\Admin\KategoriController;
use App\Http\Controllers\Auth\Pegawai\DashboardController as PegawaiDashboard;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\Pegawai\BarangInController;
use App\Http\Controllers\Auth\Pegawai\BarangOutController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);

Route::prefix('admin')->middleware('guest:admin')->group(function () {
    // Login Admin
    Route::get('/login', [AuthController::class, 'index'])->name('login')->middleware('auth.check');
    Route::post('/proseslogin', [AuthController::class, 'login'])->name('admin.proseslogin');
});

Route::prefix('pegawai')->middleware('guest:pegawai')->group(function () {
    // Login Pegawai
    Route::get('/login', [AuthController::class, 'pegawaiIndex'])->name('pegawai.login')->middleware('auth.check');
    Route::post('/proseslogin', [AuthController::class, 'pegawaiLogin'])->name('pegawai.proseslogin');
});

Route::prefix('admin')->middleware(['auth:admin', 'auth.session'])->group(function () {
    // Dasboard
    Route::get('/', [AdminDashboard::class, 'index'])->name('dashboard');

    // Logout
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    // Kategori Barang
    Route::resource('kategori-barang', KategoriController::class, [
        'names' => [
            'index' => 'admin.kategori.list',
            'show' => 'admin.kategori.show',
            'store' => 'admin.kategori.store',
            'create' => 'admin.kategori.create',
            'edit' => 'admin.kategori.edit',
            'update' => 'admin.kategori.update',
            'destroy' => 'admin.kategori.destroy',
        ],
    ]);

    // Barang
    Route::resource('barang', BarangController::class, [
        'names' => [
            'index' => 'admin.barang.list',
            'show' => 'admin.barang.show',
            'store' => 'admin.barang.store',
            'create' => 'admin.barang.create',
            'edit' => 'admin.barang.edit',
            'update' => 'admin.barang.update',
            'destroy' => 'admin.barang.destroy',
        ],
    ]);

    // Delete Image Barang
    Route::delete('/barang/{barangId}/delete-image/{index}', [BarangController::class, 'deleteImage'])->name('barang.deleteImage');
});

Route::prefix('pegawai')->middleware(['auth:pegawai', 'auth.session'])->group(function () {
    // Dasboard
    Route::get('/', [PegawaiDashboard::class, 'index'])->name('pegawai.dashboard');

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

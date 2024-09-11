<?php

use App\Http\Controllers\Auth\Admin\AdminController;
use App\Http\Controllers\Auth\Admin\BarangController;
use App\Http\Controllers\Auth\Admin\DashboardController as AdminDashboard;
use App\Http\Controllers\Auth\Admin\KategoriController;
use App\Http\Controllers\Auth\Admin\LaporanController;
use App\Http\Controllers\Auth\Admin\PegawaiController;
use App\Http\Controllers\Auth\Admin\SiswaController;
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->middleware(['auth:admin', 'auth.session'])->group(function () {
    // Dashboard
    Route::get('/', [AdminDashboard::class, 'index'])->name('dashboard');
    
    // Profile
    Route::get('/profile', [AuthController::class, 'adminProfile'])->name('profile');

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
            'store' => 'admin.barang.store',
            'create' => 'admin.barang.create',
            'edit' => 'admin.barang.edit',
            'update' => 'admin.barang.update',
            'destroy' => 'admin.barang.destroy',
        ],
    ]);
    Route::get('/barang/{barang}/lihat', [BarangController::class, 'show'])->name('admin.barang.show');

    // Pegawai
    Route::resource('pegawai', PegawaiController::class, [
        'names' => [
            'index' => 'admin.pegawai.list',
            'show' => 'admin.pegawai.show',
            'store' => 'admin.pegawai.store',
            'create' => 'admin.pegawai.create',
            'edit' => 'admin.pegawai.edit',
            'update' => 'admin.pegawai.update',
            'destroy' => 'admin.pegawai.destroy',
        ],
    ]);

    // Siswa
    Route::resource('siswa', SiswaController::class, [
        'names' => [
            'index' => 'admin.siswa.list',
            'show' => 'admin.siswa.show',
            'store' => 'admin.siswa.store',
            'create' => 'admin.siswa.create',
            'edit' => 'admin.siswa.edit',
            'update' => 'admin.siswa.update',
            'destroy' => 'admin.siswa.destroy',
        ],
    ]);

    // User
    Route::resource('user', AdminController::class, [
        'names' => [
            'index' => 'admin.user.list',
            'show' => 'admin.user.show',
            'store' => 'admin.user.store',
            'create' => 'admin.user.create',
            'edit' => 'admin.user.edit',
            'update' => 'admin.user.update',
            'destroy' => 'admin.user.destroy',
        ],
    ]);

    // Laporan
    Route::get('/laporan', [LaporanController::class, 'index'])->name('admin.laporan');

    // Delete Image Barang
    Route::delete('/barang/{barangId}/delete-image/{index}', [BarangController::class, 'deleteImage'])->name('barang.deleteImage');
});

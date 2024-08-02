<?php

use App\Http\Controllers\Auth\Admin\BarangController;
use App\Http\Controllers\Auth\Admin\DashboardController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);
Route::get('/admin/login', [AuthController::class, 'index']);
Route::get('/admin', [DashboardController::class, 'index']);
Route::post('/admin/proseslogin', [AuthController::class, 'login'])->name('admin.proseslogin');
Route::get('/admin/barang', [BarangController::class, 'index'])->name('admin.barang.list');
Route::post('/admin/barang/store', [BarangController::class, 'store'])->name('admin.barang.store');
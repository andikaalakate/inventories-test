<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;

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
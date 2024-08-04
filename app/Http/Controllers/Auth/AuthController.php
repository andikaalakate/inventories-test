<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Pegawai;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('auth.admin.login', ['title' => 'Login']);
    }

    /**
     * Display a listing of the resource.
     */
    public function pegawaiIndex()
    {
        return view('auth.pegawai.login', ['title' => 'Login']);
    }

    /**
     * Handle an authentication attempt.
     */
    public function pegawaiLogin(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::guard('pegawai')->attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('pegawai/');
        } else {
            return redirect()->intended('pegawai/login')->with('warning', 'Email / Password Salah!');
        }
    }

    /**
     * Log the user out of the application.
     */
    public function pegawaiLogout(Request $request): RedirectResponse
    {
        if (Auth::guard('pegawai')->check()) {
            Auth::guard('pegawai')->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
        }

        return redirect()->intended('pegawai/login');
    }

    /**
     * Handle an authentication attempt.
     */
    public function login(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::guard('admin')->attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('admin/');
        } else {
            return redirect()->intended('admin/login')->with('warning', 'Email / Password Salah!');
        }
    }

    /**
     * Log the user out of the application.
     */
    public function logout(Request $request): RedirectResponse
    {
        if (Auth::guard('admin')->check()) {
            Auth::guard('admin')->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
        }

        return redirect()->intended('admin/login');
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

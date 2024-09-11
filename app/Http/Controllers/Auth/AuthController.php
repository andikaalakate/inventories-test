<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Pegawai;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use ProtoneMedia\Splade\Facades\Toast;
use ProtoneMedia\Splade\FileUploads\ExistingFile;

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
            Toast::title('Success!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Berhasil Masuk!');
            return redirect()->intended('pegawai/');
        } else {
            Toast::title('Error!')
                ->warning()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Email / Password Salah!');
            return redirect()->intended('pegawai/login');
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
            Toast::title('Success!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Berhasil Keluar!');
        }

        return redirect()->intended('pegawai/login');
    }

    public function pegawaiProfile()
    {
        $user = Auth::guard('pegawai')->user();

        if ($user->avatar_url == null) {
            $avatar = '';
        } else {
            $avatarPath = 'avatars/' . $user->avatar_url;
            $user->avatar_url = $avatarPath;

            $avatar =
                ExistingFile::fromDisk('public')->get($avatarPath);
        }

        return view('auth.pegawai.profil', ['title' => 'Profile', 'akun' => $user, 'avatar' => $avatar]);
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
            Toast::title('Success!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Berhasil Masuk!');
            return redirect()->intended('admin/');
        } else {
            Toast::title('Error!')
                ->warning()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Email / Password Salah!');
            return redirect()->intended('admin/login');
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
            Toast::title('Success!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Berhasil Keluar!');
        }

        return redirect()->intended('admin/login');
    }

    public function adminProfile()
    {
        $user = Auth::guard('admin')->user();

        if ($user->avatar_url == null) {
            $avatar = '';
        } else {
            $avatarPath = 'avatars/' . $user->avatar_url;
            $user->avatar_url = $avatarPath;

            $avatar =
                ExistingFile::fromDisk('public')->get($avatarPath);
        }
        return view('auth.admin.profil', ['title' => 'Profile', 'akun' => $user, 'avatar' => $avatar]);
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

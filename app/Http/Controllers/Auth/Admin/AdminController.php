<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Models\User;
use App\Models\admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use ProtoneMedia\Splade\Facades\Toast;
use Illuminate\Support\Facades\Validator;
use ProtoneMedia\Splade\FileUploads\ExistingFile;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $adminsQuery = User::latest();
        $admins = $adminsQuery->paginate(10);

        return view('auth.admin.user', [
            'title' => 'Admin / Pengguna',
            'admins' => $admins
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('auth.admin.user.tambah', [
            'title' => 'Tambah Admin / Pengguna',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $messages = [
            'username.required' => 'Username harus diisi',
            'username.string' => 'Username harus berupa string',
            'username.unique' => 'Username sudah ada',
            'avatar.image' => 'Avatar harus berupa gambar',
            'name.required' => 'Nama harus diisi',
            'name.string' => 'Nama harus berupa string',
            'email.required' => 'Email harus diisi',
            'email.email' => 'Email harus diisi dengan email',
            'email.unique' => 'Email telah dipakai',
        ];

        $validator = Validator::make($request->all(), [
            'username' => 'required|string|unique:users,username',
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'password' => 'nullable|string',
        ], $messages);

        if ($validator->fails()) {
            $errors = $validator->errors()->all();

            foreach ($errors as $error) {
                Toast::title('Error!')
                    ->warning()
                    ->rightTop()
                    ->autoDismiss(5)
                    ->message($error);
            }

            return redirect()->back()->withInput();
        }

        try {
            DB::beginTransaction();

            $admin = new User($request->only('username', 'name', 'email'));

            if ($request->filled('password')) {
                $admin->password = bcrypt($request->password);
            } else {
                $admin->password = bcrypt('password');
            }

            if ($request->hasFile('avatar')) {
                $file = $request->file('avatar');
                $filename = time() . '.' . $file->getClientOriginalExtension();
                $file->storeAs('public/avatars', $filename);
                $admin->avatar_url = $filename;
            }

            $admin->save();

            DB::commit();

            Toast::title('Success!')
            ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Admin ditambahkan');

            return redirect()->route('admin.user.list');
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
                ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Admin gagal ditambahkan!' . $e->getMessage());

            return redirect()->back()->withInput();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $username)
    {
        $admin = User::where('username', $username)->first();

        if ($admin->avatar_url == null) {
            $avatar = '';
        } else {
            $avatarPath = 'avatars/' . $admin->avatar_url;
            $admin->avatar_url = $avatarPath;

            $avatar =
                ExistingFile::fromDisk('public')->get($avatarPath);
        }

        return view('auth.admin.user-show', [
            'title' => 'Lihat Admin / Pengguna',
            'admin' => $admin,
            'avatar' => $avatar
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $username)
    {
        $admin = User::where('username', $username)->first();

        if ($admin->avatar_url == null) {
            $avatar = '';
        } else {
            $avatarPath = 'avatars/' . $admin->avatar_url;
            $admin->avatar_url = $avatarPath;

            $avatar =
                ExistingFile::fromDisk('public')->get($avatarPath);
        }

        return view('auth.admin.user.edit', [
            'title' => 'Edit Admin / Pengguna',
            'admin' => $admin,
            'avatar' => $avatar
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $messages = [
            'username.required' => 'Username harus diisi',
            'username.string' => 'Username harus berupa string',
            'username.unique' => 'Username sudah ada',
            'avatar.image' => 'Avatar harus berupa gambar',
            'name.required' => 'Nama harus diisi',
            'name.string' => 'Nama harus berupa string',
            'email.required' => 'Email harus diisi',
            'email.email' => 'Email harus diisi dengan email yang valid',
            'email.unique' => 'Email telah dipakai',
        ];

        $validator = Validator::make($request->all(), [
            'username' => 'nullable|string|unique:users,username,' . $id,
            'name' => 'nullable|string',
            'email' => 'nullable|email|unique:users,email,' . $id,
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'password' => 'nullable|string',
        ], $messages);

        if ($validator->fails()) {
            foreach ($validator->errors()->all() as $error) {
                Toast::title('Error!')
                ->warning()
                    ->rightTop()
                    ->autoDismiss(5)
                    ->message($error);
            }

            return redirect()->back()->withInput();
        }

        try {
            DB::beginTransaction();

            $admin = User::findOrFail($id);

            $admin->update($request->only('username', 'name', 'email'));

            if ($request->filled('password')) {
                $admin->password = bcrypt($request->password);
            }

            if ($request->hasFile('avatar')) {
                $file = $request->file('avatar');
                $filename = time() . '.' . $file->getClientOriginalExtension();
                $file->storeAs('public/avatars', $filename);
                $admin->avatar_url = $filename;
            }

            $admin->save();

            DB::commit();

            Toast::title('Success!')
            ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Admin berhasil diperbarui');

            return redirect()->back();
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
            ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Admin gagal diperbarui! ' . $e->getMessage());

            return redirect()->back()->withInput();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            DB::beginTransaction();

            $admin = User::findOrFail($id);

            if ($admin->avatar_url) {
                $avatar = $admin->avatar_url;
                Storage::disk('public')->delete('avatars/' . $avatar);
            }

            $admin->delete();
            DB::commit();

            Toast::title('Success!')
            ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Admin berhasil dihapus');

            return redirect()->route('admin.user.list');
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
                ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Admin gagal dihapus!' . $e->getMessage());

            return redirect()->back();
        }
    }
}

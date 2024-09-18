<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Models\Pegawai;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use ProtoneMedia\Splade\Facades\Toast;
use ProtoneMedia\Splade\FileUploads\ExistingFile;

class PegawaiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pegawaisQuery = Pegawai::with('barangIn', 'barangOut')->latest();
        $pegawais = $pegawaisQuery->paginate(10);

        return view('auth.admin.pegawai', [
            'title' => 'Pegawai',
            'pegawais' => $pegawais
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('auth.admin.pegawai.tambah', [
            'title' => 'Tambah Pegawai',
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
            'password.required' => 'Password harus diisi',
            'nama.required' => 'Nama harus diisi',
            'nama.string' => 'Nama harus berupa string',
            'jenis_kelamin.required' => 'Jenis kelamin harus diisi',
            'email.required' => 'Email harus diisi',
            'email.email' => 'Email harus diisi dengan email',
            'email.unique' => 'Email telah dipakai',
            'jabatan.required' => 'Jabatan harus diisi',
            'alamat.required' => 'Alamat harus diisi',
            'alamat.string' => 'Alamat harus berupa string',
            'no_hp.required' => 'No. HP harus diisi',
            'no_hp.max' => 'No. HP maksimal 18 karakter',
            'no_hp.unique' => 'No. HP sudah ada',
            'no_hp.regex' => 'No. HP harus berupa angka',
            'no_hp.numeric' => 'No. HP harus berupa angka',
            'no_hp.min' => 'No. HP minimal 11 karakter',
        ];

        $validator = Validator::make($request->all(), [
            'username' => 'required|string|unique:pegawais',
            'nama' => 'required|string',
            'email' => 'required|email|unique:pegawais,email',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'password' => 'required|string',
            'jenis_kelamin' => 'required|in:Laki-laki,Perempuan',
            'jabatan' => 'required|in:Pengurus Lab,Tata Usaha,Kepala Sekolah,Wakil Kepala Sekolah,Kepala Jurusan,Guru,Wali Kelas',
            'alamat' => 'required|string|max:255|min:3',
            'no_hp' => 'required|string|max:18|min:11|regex:/^[0-9]*$/|unique:siswas',
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

            $pegawai = new Pegawai($request->only('username', 'nama', 'email', 'jenis_kelamin', 'jabatan', 'alamat', 'no_hp'));

            if ($request->filled('password')) {
                $pegawai->password = Hash::make($request->password);
            }

            if ($request->hasFile('avatar')) {
                $file = $request->file('avatar');
                $filename = time() . '.' . $file->getClientOriginalExtension();
                $file->storeAs('public/avatars', $filename);
                $pegawai->avatar_url = $filename;
            }

            $pegawai->save();

            DB::commit();

            Toast::title('Success!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Pegawai ditambahkan');

            return redirect()->route('admin.pegawai.list');
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
                ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Pegawai gagal ditambahkan!' . $e->getMessage());

            return redirect()->back()->withInput();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $username)
    {
        $pegawai = Pegawai::where('username', $username)->first();

        if ($pegawai->avatar_url == null) {
            $avatar = '';
        } else {
            $avatarPath = 'avatars/' . $pegawai->avatar_url;
            $pegawai->avatar_url = $avatarPath;
    
            $avatar =
                ExistingFile::fromDisk('public')->get($avatarPath);
        }

        return view('auth.admin.pegawai-show', [
            'title' => 'Lihat Pegawai',
            'pegawai' => $pegawai,
            'avatar' => $avatar
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $username)
    {
        $pegawai = Pegawai::where('username', $username)->first();

        if ($pegawai->avatar_url == null) {
            $avatar = '';
        } else {
            $avatarPath = 'avatars/' . $pegawai->avatar_url;
            $pegawai->avatar_url = $avatarPath;

            $avatar =
                ExistingFile::fromDisk('public')->get($avatarPath);
        }
        
        return view('auth.admin.pegawai.edit', [
            'title' => 'Edit Pegawai',
            'pegawai' => $pegawai,
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
            'avatar.image' => 'Avatar harus berupa gambar',
            'nama.required' => 'Nama harus diisi',
            'nama.string' => 'Nama harus berupa string',
            'jenis_kelamin.required' => 'Jenis kelamin harus diisi',
            'email.required' => 'Email harus diisi',
            'email.email' => 'Email harus diisi dengan email yang valid',
            'jabatan.required' => 'Jabatan harus diisi',
            'alamat.required' => 'Alamat harus diisi',
            'alamat.string' => 'Alamat harus berupa string',
            'no_hp.required' => 'No. HP harus diisi',
            'no_hp.max' => 'No. HP maksimal 18 karakter',
            'no_hp.unique' => 'No. HP sudah ada',
            'no_hp.regex' => 'No. HP harus berupa angka',
            'no_hp.min' => 'No. HP minimal 11 karakter',
        ];

        $validator = Validator::make($request->all(), [
            'username' => 'nullable|string|unique:pegawais,username,' . $id,
            'nama' => 'required|string',
            'email' => 'nullable|email|unique:pegawais,email,' . $id,
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'password' => 'nullable|string',
            'jenis_kelamin' => 'required|in:Laki-laki,Perempuan',
            'jabatan' => 'required|in:Pengurus Lab,Tata Usaha,Kepala Sekolah,Wakil Kepala Sekolah,Kepala Jurusan,Guru,Wali Kelas',
            'alamat' => 'required|string|max:255|min:3',
            'no_hp' => 'required|string|max:18|min:11|regex:/^[0-9]*$/|unique:pegawais,no_hp,' . $id,
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

            $pegawai = Pegawai::findOrFail($id);

            $pegawai->fill($request->only('username', 'nama', 'email', 'jenis_kelamin', 'jabatan', 'alamat', 'no_hp'));

            if ($request->filled('password')) {
                $pegawai->password = Hash::make($request->password);
            }

            if ($request->hasFile('avatar')) {
                $file = $request->file('avatar');
                $filename = time() . '.' . $file->getClientOriginalExtension();
                $file->storeAs('public/avatars', $filename);
                $pegawai->avatar_url = $filename;
            }

            $pegawai->save();

            DB::commit();

            Toast::title('Success!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Pegawai berhasil diperbarui');

            return redirect()->back();
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
                ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Pegawai gagal diperbarui! ' . $e->getMessage());

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

            $pegawai = Pegawai::findOrFail($id);

            if ($pegawai->avatar_url) {
                $avatar = $pegawai->avatar_url;
                Storage::disk('public')->delete('avatars/' . $avatar);
            }

            $pegawai->delete();
            DB::commit();

            Toast::title('Success!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Pegawai berhasil dihapus');

            return redirect()->route('admin.pegawai.list');
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
                ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Pegawai gagal dihapus!' . $e->getMessage());

            return redirect()->back();
        }
    }
}

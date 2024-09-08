<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Models\Pegawai;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use ProtoneMedia\Splade\Facades\Toast;

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
    }

    /**
     * Display the specified resource.
     */
    public function show(string $nama)
    {
        $pegawai = Pegawai::where('nama', $nama)->first();
        return view('auth.admin.pegawai-show', [
            'title' => 'Lihat Pegawai',
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return view('auth.admin.pegawai.edit', [
            'title' => 'Edit Pegawai',
        ]);
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

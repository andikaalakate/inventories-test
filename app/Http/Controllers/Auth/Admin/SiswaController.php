<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use ProtoneMedia\Splade\Facades\Toast;

class SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $siswasQuery = Siswa::latest();
        $siswas = $siswasQuery->paginate(10);
        
        return view('auth.admin.siswa', [
            'title' => 'Siswa',
            'siswas' => $siswas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('auth.admin.siswa.tambah', [
            'title' => 'Tambah Siswa',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $messages = [
            'nisn.required' => 'NISN harus diisi',
            'nisn.string' => 'NISN harus berupa string',
            'nisn.unique' => 'NISN sudah ada',
            'nama.required' => 'Nama harus diisi',
            'nama.string' => 'Nama harus berupa string',
            'jenis_kelamin.required' => 'Jenis kelamin harus diisi',
            'kelas.required' => 'Kelas harus diisi',
            'jurusan.required' => 'Jurusan harus diisi',
            'tempat_lahir.required' => 'Tempat lahir harus diisi',
            'tgl_lahir.required' => 'Tanggal lahir harus diisi',
            'tgl_lahir.date' => 'Tanggal lahir harus berupa tanggal',
            'alamat.required' => 'Alamat harus diisi',
            'alamat.string' => 'Alamat harus berupa string',
            'no_hp.required' => 'No. HP harus diisi',
            'no_hp.string' => 'No. HP harus berupa string',
            'no_hp.max' => 'No. HP maksimal 18 karakter',
            'no_hp.unique' => 'No. HP sudah ada',
            'no_hp.regex' => 'No. HP harus berupa angka',
            'no_hp.numeric' => 'No. HP harus berupa angka',
            'no_hp.min' => 'No. HP minimal 11 karakter',
            'tgl_lahir.before' => 'Tanggal lahir tidak boleh kurang dari 2003-01-01',
            'tgl_lahir.after' => 'Tanggal lahir tidak boleh lebih dari hari ini',
        ];

        $validator = Validator::make($request->all(), [
            'nisn' => 'required|string|unique:siswas',
            'nama' => 'required|string',
            'jenis_kelamin' => 'required|in:Laki-laki,Perempuan',
            'kelas' => 'required|in:X,XI,XII',
            'jurusan' => 'required|in:RPL,MPLB,BDP,AKL,TJKT',
            'tempat_lahir' => 'required|string|max:255|min:3|regex:/^[a-zA-Z\s]*$/',
            'tgl_lahir' => 'required|date|before:today|after:2003-01-01',
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
            $siswa = new Siswa($request->only([
                'nisn',
                'nama',
                'jenis_kelamin',
                'kelas',
                'jurusan',
                'tempat_lahir',
                'tgl_lahir',
                'alamat',
                'no_hp',
            ]));

            $siswa->id = (string) Str::uuid();
            $siswa->save();

            DB::commit();
            Toast::title('Sukses!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Siswa Berhasil Ditambahkan!');
            return redirect()->route('admin.siswa.list');

        } catch (\Exception $e) {
            DB::rollBack();
            Toast::title('Terjadi Kesalahan!')
            ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Gagal Menambahkan Siswa! ' . $e->getMessage());
            return redirect()->route('admin.siswa.list');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $nama)
    {
        $siswa = Siswa::where('nama', $nama)->first();

        if (!$siswa) {
            Toast::title('Error!')
                ->warning()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Siswa Tidak Ditemukan!');
            return redirect()->route('admin.siswa.list');
        }
        
        return view('auth.admin.siswa-show', [
            'title' => 'Lihat Siswa',
            'siswa' => $siswa
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $nama)
    {
        $siswa = Siswa::where('nama', $nama)->first();

        if (!$siswa) {
            Toast::title('Error!')
                ->warning()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Siswa Tidak Ditemukan!');
            return redirect()->route('admin.siswa.list');
        }
        
        return view('auth.admin.siswa.edit', [
            'title' => 'Edit Siswa',
            'siswa' => $siswa,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $messages = [
            'nisn.required' => 'NISN harus diisi',
            'nisn.string' => 'NISN harus berupa string',
            'nisn.exists' => 'NISN tidak ditemukan',
            'nama.required' => 'Nama harus diisi',
            'nama.string' => 'Nama harus berupa string',
            'jenis_kelamin.required' => 'Jenis kelamin harus diisi',
            'kelas.required' => 'Kelas harus diisi',
            'jurusan.required' => 'Jurusan harus diisi',
            'tempat_lahir.required' => 'Tempat lahir harus diisi',
            'tgl_lahir.required' => 'Tanggal lahir harus diisi',
            'tgl_lahir.date' => 'Tanggal lahir harus berupa tanggal',
            'alamat.required' => 'Alamat harus diisi',
            'alamat.string' => 'Alamat harus berupa string',
            'no_hp.required' => 'No. HP harus diisi',
            'no_hp.string' => 'No. HP harus berupa string',
            'no_hp.max' => 'No. HP maksimal 18 karakter',
            'no_hp.regex' => 'No. HP harus berupa angka',
            'no_hp.numeric' => 'No. HP harus berupa angka',
            'no_hp.min' => 'No. HP minimal 11 karakter',
            'tgl_lahir.before' => 'Tanggal lahir tidak boleh kurang dari 2003-01-01',
            'tgl_lahir.after' => 'Tanggal lahir tidak boleh lebih dari hari ini',
        ];

        $validator = Validator::make($request->all(), [
            'nisn' => 'required|string|exists:siswas,nisn',
            'nama' => 'required|string',
            'jenis_kelamin' => 'required|in:Laki-laki,Perempuan',
            'kelas' => 'required|in:X,XI,XII',
            'jurusan' => 'required|in:RPL,MPLB,BDP,AKL,TJKT',
            'tempat_lahir' => 'required|string|max:255|min:3|regex:/^[a-zA-Z\s]*$/',
            'tgl_lahir' => 'required|date|before:today|after:2003-01-01',
            'alamat' => 'required|string|max:255|min:3',
            'no_hp' => 'required|string|max:18|min:11|regex:/^[0-9]*$/',
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

            $siswa = Siswa::findOrFail($id);
            $siswa->update($request->only([
                'nisn',
                'nama',
                'jenis_kelamin',
                'kelas',
                'jurusan',
                'tempat_lahir',
                'tgl_lahir',
                'alamat',
                'no_hp',
            ]));

            DB::commit();
            Toast::title('Sukses!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Siswa Berhasil Diubah!');
            return redirect()->route('admin.siswa.list');
        } catch (\Exception $e) {
            DB::rollBack();
            Toast::title('Terjadi Kesalahan!')
            ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Gagal Mengubah Siswa! ' . $e->getMessage());
            return redirect()->route('admin.siswa.list');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            DB::beginTransaction();

            Siswa::destroy($id);

            DB::commit();

            Toast::title('Success!')
            ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Siswa Berhasil Dihapus!');

            return redirect()->back();
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
                ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Siswa Gagal Dihapus!');

            return redirect()->back();
        }
    }
}

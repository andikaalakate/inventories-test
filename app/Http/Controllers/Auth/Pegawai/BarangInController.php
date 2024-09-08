<?php

namespace App\Http\Controllers\Auth\Pegawai;

use App\Http\Controllers\Controller;
use App\Models\Barang;
use App\Models\BarangIn;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use ProtoneMedia\Splade\Facades\Toast;

class BarangInController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $barangs = Barang::get();
        $barangIn = BarangIn::with('barang')->where('pegawai_id', Auth::user()->id)->latest()->paginate(10);

        return view('auth.pegawai.barang.in', [
            'barangs' => $barangs,
            'barangIn' => $barangIn,
            'title' => 'Barang masuk'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $messages = [
            'barang_id.required' => 'Barang harus dipilih',
            'jumlah.required' => 'Jumlah harus diisi',
        ];

        $validator = Validator::make($request->all(),[
            'barang_id' => 'required|exists:barangs,id',
            'jumlah' => 'required|integer',
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
            
            $barangIn = new BarangIn($request->only([
                'barang_id',
                'jumlah'
            ]));

            $barangIn->pegawai_id = Auth::user()->id;
    
            $barangIn->barang->incrementJumlah($barangIn->jumlah);

            $barangIn->save();
            DB::commit();

            Toast::title('Success!')
                ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Barang masuk ditambahkan');
    
            return redirect()->route('pegawai.barang-in');
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
            ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Barang gagal dimasukkan: ' . $e->getMessage());

            return redirect()->back()->withInput();
        }
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

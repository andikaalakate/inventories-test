<?php

namespace App\Http\Controllers\Auth\Pegawai;

use App\Http\Controllers\Controller;
use App\Models\Barang;
use App\Models\BarangOut;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use ProtoneMedia\Splade\Facades\Toast;

class BarangOutController extends Controller
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
        $barangOut = BarangOut::with('barang')->where('pegawai_id', Auth::user()->id)->latest()->paginate(10);

        return view('auth.pegawai.barang.out', [
            'barangs' => $barangs,
            'barangOut' => $barangOut,
            'title' => 'Barang Keluar'
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

        $validator = Validator::make($request->all(), [
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

            $barangOut = new BarangOut($request->only([
                'barang_id',
                'jumlah'
            ]));

            $barangOut->pegawai_id = Auth::user()->id;

            $barang = $barangOut->barang;
            $barang->decrementJumlah($barangOut->jumlah);

            if ($barang->jumlah <= 0) {
                $barang->status = 'habis';
                $barang->save();
            }

            $barangOut->save();
            DB::commit();

            Toast::title('Success!')
            ->success()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Barang dikeluarkan');

            return redirect()->route('pegawai.barang-out');
        } catch (\Exception $e) {
            DB::rollBack();

            Toast::title('Error!')
            ->danger()
                ->rightTop()
                ->autoDismiss(5)
                ->message('Barang gagal dikeluarkan: ' . $e->getMessage());

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

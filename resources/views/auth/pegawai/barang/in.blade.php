@extends('components.layouts.pegawai')

@section('head')
    
@endsection

@section('body')
    <section class="flex justify-between items-center pb-4 pt-8 px-8">
        <h1 class="text-xl font-bold">Masukkan Barang</h1>
        <a href="{{ route('pegawai.barang.list') }}"
            class="text-sm font-bold rounded-md border-2 py-2 px-4 border-slate-200">Kembali</a>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <form action="{{ route('pegawai.barang-in.store') }}" method="post" enctype="multipart/form-data"
            class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @csrf
            @method('POST')

            <input type="hidden" name="pegawai_id" value="{{ auth()->user()->id }}">

            <!-- Barang -->
            <div class="flex flex-col">
                <label for="barang" class="text-sm font-semibold py-2 text-white">Barang</label>
                <select name="barang_id" id="barang" required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option disabled selected>Pilih Barang</option>
                    @foreach ($barangs as $barang)
                        <option value="{{ $barang->id }}">{{ $barang->nama }}</option>
                    @endforeach
                </select>
            </div>

            <!-- Jumlah -->
            <div class="flex flex-col">
                <label for="jumlah" class="text-sm font-semibold py-2 text-white">Jumlah</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number" id="jumlah" name="jumlah" placeholder="Masukkan jumlah">
            </div>

            <!-- Submit Button -->
            <div class="col-span-1 lg:col-span-2 justify-end flex">
                <button type="submit"
                    class="bg-slate-200 text-[#1a1a1a] py-2 px-4 rounded-lg hover:bg-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Submit
                </button>
            </div>
        </form>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <div class="flex justify-center items-center">
            <h1 class="text-xl font-semibold mb-4 text-center">Barang yang pernah Anda masukkan</h1>
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full mb-4 bg-[#3a3a3a] border border-gray-300 rounded-lg shadow-sm">
                <thead>
                    <tr class="border-b bg-[#2a2a2a]">
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">No</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Nama Barang</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Jumlah</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($barangIn->where('pegawai_id', auth()->user()->id) as $index => $barang)
                        <tr class="border-b hover:bg-[#3a3a3a]">
                            <td class="py-2 px-4 text-sm text-white">{{ $index + 1 }}</td>
                            <td class="py-2 px-4 text-sm text-white">{{ $barang->barang->nama }}</td>
                            <td class="py-2 px-4 text-sm text-white">{{ $barang->jumlah }}</td>
                            <td class="py-2 px-4 text-sm text-white">{{ $barang->created_at }}</td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="4" class="py-20 px-4 text-lg text-white text-center">Tidak ada barang yang pernah Anda masukkan</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </section>
@endsection
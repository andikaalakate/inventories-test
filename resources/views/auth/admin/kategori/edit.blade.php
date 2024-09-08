@extends('components.layouts.admin')

@section('body')
    <section class="flex justify-between items-center pb-4 pt-8 px-8">
        <h1 class="text-xl font-bold">Edit Kategori</h1>
        <Link href="{{ route('admin.kategori.list') }}"
            class="text-sm font-bold rounded-md border-2 py-2 px-4 border-slate-200">Kembali</Link>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <x-splade-form action="{{ route('admin.kategori.update', $kategori->id) }}" method="put"
            enctype="multipart/form-data" class="grid grid-cols-1 md:grid-cols-2 gap-6" :default="['nama' => $kategori->nama]">
            @csrf
            @method('PUT')

            <div class="flex flex-col">
                <label for="nama" class="text-sm font-semibold py-2 text-white">Nama Kategori</label>
                <input
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="nama" v-model="form.nama" value="{{ $kategori->nama }}"
                    placeholder="Masukkan nama kategori">
            </div>

            <div class="col-span-2 justify-end flex">
                <button type="submit"
                    class="bg-slate-200 text-[#1a1a1a] py-2 px-4 rounded-lg hover:bg-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Submit
                </button>
            </div>
        </x-splade-form>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <div class="flex justify-center items-center">
            <h1 class="text-xl font-semibold mb-4 text-center">Barang yang terkait</h1>
        </div>
        <div class="overflow-x-auto rounded-md">
            <table class="min-w-full bg-gray-300 h-full mb-4 border border-gray-300 shadow-sm rounded-lg overflow-hidden">
                <thead class="bg-[#1a1a1a]">
                    <tr class="border-b">
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">No</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Nama Barang</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Jumlah</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Deskripsi</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Status</th>
                    </tr>
                </thead>
                <tbody class="bg-[#2a2a2a]">
                    <x-splade-lazy>
                        <x-slot:placeholder>
                            <tr>
                                <td class="text-center p-8" colspan="5">
                                    Sedang memuat list Barang...
                                </td>
                            </tr>
                        </x-slot:placeholder>
                        @forelse ($barangs as $index => $barang)
                            <tr class="border-b hover:bg-[#3a3a3a]">
                                <td class="py-2 px-4 text-sm text-white">{{ $index + 1 }}</td>
                                <td class="py-2 px-4 text-sm text-white">{{ $barang->nama }}</td>
                                <td class="py-2 px-4 text-sm text-white">{{ $barang->jumlah }}</td>
                                <td class="py-2 px-4 text-sm text-white">{{ $barang->deskripsi }}</td>
                                <td class="py-2 px-4 text-sm text-white">
                                    <span
                                        class="inline-block px-2 py-1 text-xs font-semibold rounded-full {{ $barang->status === 'tersedia' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' }}">
                                        {{ ucfirst($barang->status) }}
                                    </span>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="5" class="py-20 px-4 text-lg text-white text-center">Tidak ada barang</td>
                            </tr>
                        @endforelse
                    </x-splade-lazy>
                </tbody>
            </table>
        </div>

        <div class="flex justify-center w-full">
            {{ $barangs->links() }}
        </div>
    </section>
@endsection

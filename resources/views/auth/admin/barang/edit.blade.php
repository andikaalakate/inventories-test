@extends('components.layouts.admin')

@section('body')
    <section class="flex justify-between items-center pb-4 pt-8 px-8">
        <h1 class="text-xl font-bold">Edit Barang</h1>
        <Link href="{{ route('admin.barang.list') }}"
            class="text-sm font-bold rounded-md border-2 py-2 px-4 border-slate-200">Kembali</Link>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <x-splade-form action="{{ route('admin.barang.update', $barang->id) }}" method="put" enctype="multipart/form-data"
            :default="[
                'nama' => $barang->nama,
                'kategori_id' => $barang->kategori_id,
                'jumlah' => $barang->jumlah,
                'deskripsi' => $barang->deskripsi,
                'status' => $barang->status,
                'gambar' => $barang->gambar,
            ]"
            class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @csrf
            @method('PUT')

            <div class="flex flex-col">
                <label for="nama" class="text-sm font-semibold py-2 text-white">Nama Barang</label>
                <input
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="nama" v-model="form.nama" value="{{ old('nama', $barang->nama) }}"
                    placeholder="Masukkan nama barang">
            </div>

            <div class="flex flex-col">
                <label for="kategori" class="text-sm font-semibold py-2 text-white">Kategori</label>
                <select v-model="form.kategori_id" id="kategori"
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option disabled>Pilih Kategori</option>
                    @foreach ($kategoris as $kategori)
                        <option value="{{ $kategori->id }}" {{ $kategori->id == $barang->kategori_id ? 'selected' : '' }}>
                            {{ $kategori->nama }}
                        </option>
                    @endforeach
                </select>
            </div>

            <div class="flex flex-col">
                <label for="jumlah" class="text-sm font-semibold py-2 text-white">Jumlah</label>
                <input
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number" id="jumlah" v-model="form.jumlah" value="{{ old('jumlah', $barang->jumlah) }}"
                    placeholder="Masukkan jumlah barang">
            </div>

            <div class="flex flex-col">
                <label for="deskripsi" class="text-sm font-semibold py-2 text-white">Deskripsi</label>
                <textarea id="deskripsi" v-model="form.deskripsi"
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4" placeholder="Masukkan deskripsi barang">{{ old('deskripsi', $barang->deskripsi) }}</textarea>
            </div>

            <label class="block col-span-1 lg:col-span-2">
                <span class="sr-only">Choose File</span>
                <x-splade-file name="gambar[]" multiple filepond preview />
            </label>

            <div class="flex flex-col">
                <label for="status" class="text-sm font-semibold py-2 text-white">Status</label>
                @php
                    $statusOptions = [
                        'tersedia' => 'Tersedia',
                        'habis' => 'Habis',
                    ];
                @endphp
                <select id="status" v-model="form.status"
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    @foreach ($statusOptions as $value => $label)
                        <option value="{{ $value }}" {{ $barang->status == $value ? 'selected' : '' }}>
                            {{ $label }}</option>
                    @endforeach
                </select>
            </div>

            <div class="col-span-1 lg:col-span-2 justify-end flex">
                <button type="submit"
                    class="bg-slate-200 text-[#1a1a1a] py-2 px-4 rounded-lg hover:bg-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Submit
                </button>
            </div>
        </x-splade-form>
        <input type="hidden" id="barang-id" value="{{ $barang->id }}">
    </section>


    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md grid grid-cols-1 lg:grid-cols-2 gap-4">
        <section>
            <div class="flex justify-center items-center py-2">
                <h1 class="text-xl font-semibold mb-4 text-center">Barang Masuk</h1>
            </div>
            <div class="overflow-x-auto">
                <table
                    class="min-w-full mb-4 sm:table-fixed md:table-auto w-full border-collapse bg-[#3a3a3a] border border-gray-300 rounded-lg shadow-sm">
                    <thead>
                        <tr class="border-b bg-[#2a2a2a]">
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">No</th>
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">Pegawai</th>
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">Jumlah</th>
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">Tanggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($barangIn as $index => $barang)
                            <tr class="border-b hover:bg-[#3a3a3a]">
                                <td class="py-2 px-4 text-sm text-white">{{ $index + 1 }}</td>
                                <td class="py-2 px-4 text-sm text-white">{{ $barang->pegawai->nama }}</td>
                                <td class="py-2 px-4 text-sm text-white">{{ $barang->jumlah }}</td>
                                <td class="py-2 px-4 text-sm text-white">{{ $barang->created_at }}</td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="3" class="py-20 px-4 text-lg text-white text-center">Tidak ada barang masuk
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <div class="flex justify-center items-center py-2">
                <h1 class="text-xl font-semibold mb-4 text-center">Barang Keluar</h1>
            </div>
            <div class="overflow-x-auto">
                <table
                    class="min-w-full mb-4 sm:table-fixed md:table-auto w-full border-collapse bg-[#3a3a3a] border border-gray-300 rounded-lg shadow-sm">
                    <thead>
                        <tr class="border-b bg-[#2a2a2a]">
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">No</th>
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">Pegawai</th>
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">Jumlah</th>
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">Tanggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($barangOut as $index => $barang)
                            <tr class="border-b hover:bg-[#3a3a3a]">
                                <td class="py-2 px-4 text-sm text-white">{{ $index + 1 }}</td>
                                <td class="py-2 px-4 text-sm text-white">{{ $barang->pegawai->nama }}</td>
                                <td class="py-2 px-4 text-sm text-white">{{ $barang->jumlah }}</td>
                                <td class="py-2 px-4 text-sm text-white">{{ $barang->created_at }}</td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="3" class="py-20 px-4 text-lg text-white text-center">Tidak ada barang
                                    keluar</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </section>
    </section>
@endsection

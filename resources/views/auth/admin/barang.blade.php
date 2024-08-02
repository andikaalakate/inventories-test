@extends('components.layouts.admin')

@section('head')
    <style>
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background: #fff;
        }
    </style>
@endsection

@section('body')
    <header class="header-image text-white p-8 text-center bg-red-800">
        <h1 class="text-5xl font-bold">Admin - INVENTORIES</h1>
    </header>
    <nav class="bg-red-700 sticky top-0 z-50 shadow-lg">
        <ul class="flex justify-center gap-10 text-xl text-white p-4 transition-all duration-300">
            <li><a href="#"
                    class="hover:underline hover:bg-white hover:text-red-700 hover:rounded-md hover:px-3 hover:py-2 transition-all">Home</a>
            </li>
            <li><a href="#"
                    class="hover:underline hover:bg-white hover:text-red-700 hover:rounded-md hover:px-3 hover:py-2 transition-all">Profil</a>
            </li>
            <li><a href="#"
                    class="hover:underline hover:bg-white hover:text-red-700 hover:rounded-md hover:px-3 hover:py-2 transition-all">Kontak</a>
            </li>
            <li><a href="#"
                    class="hover:underline hover:bg-white hover:text-red-700 hover:rounded-md hover:px-3 hover:py-2 transition-all">Daftar</a>
            </li>
            <li><a href="#"
                    class="hover:underline hover:bg-white hover:text-red-700 hover:rounded-md hover:px-3 hover:py-2 transition-all">Masuk</a>
            </li>
        </ul>
    </nav>

    <section class="p-6 my-4 mx-16 bg-gray-100 rounded-lg shadow-md">
        <form action="{{ route('admin.barang.store') }}" method="post" enctype="multipart/form-data"
            class="grid grid-cols-1 md:grid-cols-2 gap-6">
            @csrf
            @method('POST')

            <div class="flex flex-col">
                <label for="nama" class="text-sm font-semibold text-gray-700">Nama Barang</label>
                <input
                    class="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="nama" name="nama" placeholder="Masukkan nama barang">
            </div>

            <div class="flex flex-col">
                <label for="kategori" class="text-sm font-semibold text-gray-700">Kategori</label>
                <select name="kategori_id" id="kategori"
                    class="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    @foreach ($kategoris as $kategori)
                        <option value="{{ $kategori->id }}">{{ $kategori->nama }}</option>
                    @endforeach
                </select>
            </div>

            <div class="flex flex-col">
                <label for="jumlah" class="text-sm font-semibold text-gray-700">Jumlah</label>
                <input
                    class="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number" id="jumlah" name="jumlah" placeholder="Masukkan jumlah barang">
            </div>

            <div class="flex flex-col">
                <label for="deskripsi" class="text-sm font-semibold text-gray-700">Deskripsi</label>
                <textarea id="deskripsi" name="deskripsi"
                    class="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4" placeholder="Masukkan deskripsi barang"></textarea>
            </div>

            <div class="flex flex-col">
                <label for="gambar" class="text-sm font-semibold text-gray-700">Gambar</label>
                <input type="file" multiple id="gambar" name="gambar[]" class="mt-1">
            </div>

            <div class="flex flex-col">
                <label for="status" class="text-sm font-semibold text-gray-700">Status</label>
                <select id="status" name="status"
                    class="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="tersedia">Tersedia</option>
                    <option value="habis">Habis</option>
                </select>
            </div>

            <div class="col-span-2">
                <button type="submit"
                    class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Submit
                </button>
            </div>
        </form>
    </section>

    <section class="p-6 my-4 mx-16 bg-gray-100 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Daftar Barang</h2>
        <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
            <thead>
                <tr class="border-b bg-gray-50">
                    <th class="py-2 px-4 text-left text-sm font-semibold text-gray-700">No</th>
                    <th class="py-2 px-4 text-left text-sm font-semibold text-gray-700">Nama Barang</th>
                    <th class="py-2 px-4 text-left text-sm font-semibold text-gray-700">Kategori</th>
                    <th class="py-2 px-4 text-left text-sm font-semibold text-gray-700">Jumlah</th>
                    <th class="py-2 px-4 text-left text-sm font-semibold text-gray-700">Deskripsi</th>
                    <th class="py-2 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th class="py-2 px-4 text-left text-sm font-semibold text-gray-700">Aksi</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($barangs as $index => $barang)
                    <tr class="border-b hover:bg-gray-50">
                        <td class="py-2 px-4 text-sm text-gray-700">{{ $index + 1 }}</td>
                        <td class="py-2 px-4 text-sm text-gray-700">{{ $barang->nama }}</td>
                        <td class="py-2 px-4 text-sm text-gray-700">{{ $barang->kategori->nama }}</td>
                        <td class="py-2 px-4 text-sm text-gray-700">{{ $barang->jumlah }}</td>
                        <td class="py-2 px-4 text-sm text-gray-700">{{ $barang->deskripsi }}</td>
                        <td class="py-2 px-4 text-sm text-gray-700">
                            <span
                                class="inline-block px-2 py-1 text-xs font-semibold rounded-full {{ $barang->status === 'tersedia' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' }}">
                                {{ ucfirst($barang->status) }}
                            </span>
                        </td>
                        <td class="py-2 px-4 text-sm text-gray-700">
                            {{-- <a href="{{ route('admin.barang.edit', $barang->id) }}"
                                class="text-blue-500 hover:text-blue-700">Edit</a>
                            <a href="{{ route('admin.barang.destroy', $barang->id) }}"
                                class="text-red-500 hover:text-red-700 ml-2">Delete</a> --}}
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </section>
@endsection

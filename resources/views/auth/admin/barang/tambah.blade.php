@extends('components.layouts.admin')

@section('body')
    <section class="flex justify-between items-center pb-4 pt-8 px-8">
        <h1 class="text-xl font-bold">Tambah Barang</h1>
        <Link href="{{ route('admin.barang.list') }}"
            class="text-sm font-bold rounded-md border-2 py-2 px-4 border-slate-200">Kembali</Link>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <x-splade-form action="{{ route('admin.barang.store') }}" method="post" enctype="multipart/form-data"
        defaults="{'gambar': []}"
            class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @csrf
            @method('POST')

            <!-- Nama Barang -->
            <div class="flex flex-col">
                <label for="nama" class="text-sm font-semibold py-2 text-white">Nama Barang</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="nama" v-model="form.nama" placeholder="Masukkan nama barang">
            </div>

            <!-- Kategori -->
            <div class="flex flex-col">
                <label for="kategori" class="text-sm font-semibold py-2 text-white">Kategori</label>
                <x-splade-select v-model="form.kategori_id" id="kategori" required
                    :options="$kategoris" option-value="id" option-label="nama" placeholder="Pilih Kategori">
                </x-splade-select>
            </div>

            <!-- Jumlah -->
            <div class="flex flex-col">
                <label for="jumlah" class="text-sm font-semibold py-2 text-white">Jumlah</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number" id="jumlah" min="0" step="1" max="100" value="1" v-model="form.jumlah" placeholder="Masukkan jumlah barang">
            </div>

            <!-- Deskripsi -->
            <div class="flex flex-col">
                <label for="deskripsi" class="text-sm font-semibold py-2 text-white">Deskripsi</label>
                <textarea id="deskripsi" v-model="form.deskripsi" required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4" placeholder="Masukkan deskripsi barang"></textarea>
            </div>

            <!-- Gambar -->
            <div class="flex flex-col">
                <x-splade-file label="Gambar" name="gambar[]" id="gambar" multiple filepond preview />
            </label>
            </div>

            <!-- Status -->
            <div class="flex flex-col">
                <label for="status" class="text-sm font-semibold py-2 text-white">Status</label>
                <input type="text" class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize" :value="form.jumlah > 0 ? 'Tersedia' : 'Habis'" />
            </div>

            <!-- Submit Button -->
            <div class="col-span-1 lg:col-span-2 justify-end flex">
                <button type="submit"
                    class="bg-slate-200 text-[#1a1a1a] py-2 px-4 rounded-lg hover:bg-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Submit
                </button>
            </div>
        </x-splade-form>
    </section>
@endsection

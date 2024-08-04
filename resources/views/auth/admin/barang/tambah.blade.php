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
    <section class="flex justify-between items-center pb-4 pt-8 px-8">
        <h1 class="text-xl font-bold">Tambah Barang</h1>
        <a href="{{ route('admin.barang.list') }}"
            class="text-sm font-bold rounded-md border-2 py-2 px-4 border-slate-200">Kembali</a>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <form action="{{ route('admin.barang.store') }}" method="post" enctype="multipart/form-data"
            class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @csrf
            @method('POST')

            <!-- Nama Barang -->
            <div class="flex flex-col">
                <label for="nama" class="text-sm font-semibold py-2 text-white">Nama Barang</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="nama" name="nama" placeholder="Masukkan nama barang">
            </div>

            <!-- Kategori -->
            <div class="flex flex-col">
                <label for="kategori" class="text-sm font-semibold py-2 text-white">Kategori</label>
                <select name="kategori_id" id="kategori" required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option disabled selected>Pilih Kategori</option>
                    @foreach ($kategoris as $kategori)
                        <option value="{{ $kategori->id }}">{{ $kategori->nama }}</option>
                    @endforeach
                </select>
            </div>

            <!-- Jumlah -->
            <div class="flex flex-col">
                <label for="jumlah" class="text-sm font-semibold py-2 text-white">Jumlah</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number" id="jumlah" name="jumlah" placeholder="Masukkan jumlah barang">
            </div>

            <!-- Deskripsi -->
            <div class="flex flex-col">
                <label for="deskripsi" class="text-sm font-semibold py-2 text-white">Deskripsi</label>
                <textarea id="deskripsi" name="deskripsi" required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4" placeholder="Masukkan deskripsi barang"></textarea>
            </div>

            <!-- Gambar -->
            <div class="flex flex-col">
                <label for="gambar" class="text-sm font-semibold py-2 text-white">Gambar</label>
                <label class="block" x-data="showImage()">
                    <span class="sr-only">Choose Files</span>
                    <input type="file" name="gambar[]" multiple @change="showPreview(event)"
                        class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                    <div id="preview-container" class="mt-2 flex flex-wrap gap-2"></div>
                </label>
            </div>

            <!-- Status -->
            <div class="flex flex-col">
                <label for="status" class="text-sm font-semibold py-2 text-white">Status</label>
                <select id="status" name="status" required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="tersedia">Tersedia</option>
                    <option value="habis">Habis</option>
                </select>
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
@endsection

@section('script')
    <script>
        function showImage() {
            return {
                showPreview(event) {
                    const previewContainer = document.getElementById("preview-container");
                    previewContainer.innerHTML = ""; // Clear previous previews

                    Array.from(event.target.files).forEach(file => {
                        if (file) {
                            const src = URL.createObjectURL(file);
                            const img = document.createElement("img");
                            img.src = src;
                            img.className = "object-cover h-32 w-60"; // Apply the same styles as before

                            // Create a container for the image
                            const container = document.createElement("div");
                            container.className = "relative";
                            container.appendChild(img);

                            previewContainer.appendChild(container);
                        }
                    });
                }
            }
        }
    </script>
@endsection

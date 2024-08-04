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
        <h1 class="text-xl font-bold">Edit Barang</h1>
        <a href="{{ route('admin.barang.list') }}"
            class="text-sm font-bold rounded-md border-2 py-2 px-4 border-slate-200">Kembali</a>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <form action="{{ route('admin.barang.update', $barang->id) }}" method="post" enctype="multipart/form-data"
            class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @csrf
            @method('PUT')

            <div class="flex flex-col">
                <label for="nama" class="text-sm font-semibold py-2 text-white">Nama Barang</label>
                <input
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="nama" name="nama" value="{{ old('nama', $barang->nama) }}"
                    placeholder="Masukkan nama barang">
            </div>

            <div class="flex flex-col">
                <label for="kategori" class="text-sm font-semibold py-2 text-white">Kategori</label>
                <select name="kategori_id" id="kategori"
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
                    type="number" id="jumlah" name="jumlah" value="{{ old('jumlah', $barang->jumlah) }}"
                    placeholder="Masukkan jumlah barang">
            </div>

            <div class="flex flex-col">
                <label for="deskripsi" class="text-sm font-semibold py-2 text-white">Deskripsi</label>
                <textarea id="deskripsi" name="deskripsi"
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4" placeholder="Masukkan deskripsi barang">{{ old('deskripsi', $barang->deskripsi) }}</textarea>
            </div>

            <label class="block col-span-1 lg:col-span-2" x-data="showImage()">
                <span class="sr-only">Choose File</span>
                <input type="file" name="gambar[]" multiple @change="showPreview(event)"
                    class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />

                <div id="preview-container" class="mt-2 flex flex-wrap gap-2">
                    @php
                        $images = json_decode($barang->gambar, true) ?? [];
                    @endphp
                    @foreach ($images as $key => $image)
                        <div class="relative">
                            <img src="{{ asset('storage/' . $image) }}" class="object-cover h-32 w-60" alt="Image Preview">
                            <button type="button" data-index="{{ $key }}"
                                class="absolute top-0 right-0 bg-red-500 text-white p-1 px-4 text-sm font-bold rounded-md"
                                @click="removeImage($event)">x</button>
                        </div>
                    @endforeach
                </div>
            </label>

            @error('gambar')
                <div class="flex items-center text-sm text-red-600 col-span-1 lg:col-span-2">
                    {{ $message }}
                </div>
            @enderror

            <div class="flex flex-col">
                <label for="status" class="text-sm font-semibold py-2 text-white">Status</label>
                @php
                    $statusOptions = [
                        'tersedia' => 'Tersedia',
                        'habis' => 'Habis',
                    ];
                @endphp
                <select id="status" name="status"
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
        </form>
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

                            // Create a container for the image and delete button
                            const container = document.createElement("div");
                            container.className = "relative";
                            container.appendChild(img);

                            // Create a delete button
                            const deleteButton = document.createElement("button");
                            deleteButton.type = "button";
                            deleteButton.className = "absolute top-0 right-0 bg-red-500 text-white p-1 rounded";
                            deleteButton.innerText = "x";
                            deleteButton.onclick = () => {
                                container.remove();
                            };
                            container.appendChild(deleteButton);

                            previewContainer.appendChild(container);
                        }
                    });
                },

                removeImage(event) {
                    const button = event.currentTarget;
                    const index = button.getAttribute('data-index');
                    const barangId = document.getElementById('barang-id').value; // Ambil ID barang dari elemen tersembunyi

                    if (confirm('Are you sure you want to delete this image?')) {
                        fetch(`/admin/barang/${barangId}/delete-image/${index}`, {
                            method: 'DELETE',
                            headers: {
                                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute(
                                    'content'),
                                'Content-Type': 'application/json',
                            }
                        }).then(response => {
                            if (response.ok) {
                                button.parentElement.remove(); // Remove the image preview
                            } else {
                                alert('Failed to delete the image');
                            }
                        });
                    }
                }
            }
        }
    </script>
@endsection

@extends(Auth::guard('admin')->check() ? 'components.layouts.admin' : 'components.layouts.pegawai')

@section('body')
    <section class="flex justify-between items-center pb-4 pt-8 px-8">
        <h1 class="text-xl font-bold">Lihat Barang</h1>
        <Link href="{{ route(auth()->guard('admin')->check() ? 'admin.barang.list' : 'pegawai.barang.list') }}"
            class="text-sm font-bold rounded-md border-2 py-2 px-4 border-slate-200">Kembali</Link>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Nama Barang -->
            <div class="flex flex-col">
                <label for="nama" class="text-sm font-semibold py-2 text-white">Nama Barang</label>
                <input readonly
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="nama" value="{{ $barang->nama }}">
            </div>

            <!-- Kategori -->
            <div class="flex flex-col">
                <label for="kategori" class="text-sm font-semibold py-2 text-white">Kategori</label>
                <select name="kategori_id" id="kategori" disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option disabled>Pilih Kategori</option>
                    @foreach ($kategoris as $kategori)
                        <option disabled value="{{ $kategori->id }}"
                            {{ $kategori->id == $barang->kategori_id ? 'selected' : '' }}>
                            {{ $kategori->nama }}
                        </option>
                    @endforeach
                </select>
            </div>

            <!-- Jumlah -->
            <div class="flex flex-col">
                <label for="jumlah" class="text-sm font-semibold py-2 text-white">Jumlah</label>
                <input readonly
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number" id="jumlah" value="{{ $barang->jumlah }}" placeholder="Masukkan jumlah barang">
            </div>

            <!-- Deskripsi -->
            <div class="flex flex-col">
                <label for="deskripsi" class="text-sm font-semibold py-2 text-white">Deskripsi</label>
                <textarea id="deskripsi" readonly
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4" placeholder="Masukkan deskripsi barang">{{ $barang->deskripsi }}</textarea>
            </div>

            <!-- Gambar -->
            <div class="flex flex-col">
                <label for="gambar" class="text-sm font-semibold py-2 text-white">Gambar</label>
                @php
                    $gambars = json_decode($barang->gambar);
                @endphp
                <div class="flex gap-4 overflow-x-auto">
                    @foreach ($gambars as $gambar)
                        <div class="justify-center relative">
                            <img src="{{ Storage::url($gambar) }}" class="object-cover h-32 w-60" alt="">
                        </div>
                    @endforeach
                </div>
            </div>

            <!-- Status -->
            <div class="flex flex-col">
                <label for="status" class="text-sm font-semibold py-2 text-white">Status</label>
                @php
                    $statusOptions = [
                        'tersedia' => 'Tersedia',
                        'habis' => 'Habis',
                    ];
                @endphp
                <select id="status" disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    @foreach ($statusOptions as $value => $label)
                        <option disabled value="{{ $value }}" {{ $barang->status == $value ? 'selected' : '' }}>
                            {{ $label }}</option>
                    @endforeach
                </select>
            </div>
        </div>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md grid grid-cols-1 lg:grid-cols-2 gap-4">
        <section>
            <div class="flex justify-center items-center py-2">
                <h1 class="text-xl font-semibold mb-4 text-center">Barang Masuk</h1>
            </div>
            <div class="overflow-x-auto rounded-md">
                <table
                    class="min-w-full bg-gray-300 h-full mb-4 border border-gray-300 shadow-sm rounded-lg overflow-hidden">
                    <thead class="bg-[#1a1a1a]">
                        <tr class="border-b">
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">No</th>
                            @if (auth()->guard('admin')->check())
                                <th class="py-2 px-4 text-left text-sm font-semibold text-white">Pegawai</th>
                            @endif
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">Jumlah</th>
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">Tanggal</th>
                        </tr>
                    </thead>
                    <tbody class="bg-[#2a2a2a]">
                        <x-splade-lazy>
                            <x-slot:placeholder>
                                <tr>
                                    <td class="text-center p-8" colspan="4">
                                        Sedang memuat list Barang...
                                    </td>
                                </tr>
                            </x-slot:placeholder>
                            @auth('admin')
                                @forelse ($barangIn as $index => $barang)
                                    <tr class="border-b hover:bg-[#3a3a3a]">
                                        <td class="py-2 px-4 text-sm text-white">{{ $barangIn->firstItem() + $index }}</td>
                                        <td class="py-2 px-4 text-sm text-white">{{ $barang->pegawai->nama }}</td>
                                        <td class="py-2 px-4 text-sm text-white">{{ $barang->jumlah }}</td>
                                        <td class="py-2 px-4 text-sm text-white">
                                            {{ $barang->created_at->format('l, d-m-y, H:i') }}</td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="5" class="py-20 px-4 text-lg text-white text-center">Tidak ada barang
                                            masuk
                                        </td>
                                    </tr>
                                @endforelse
                            @endauth
                            @auth('pegawai')
                                @forelse ($barangIn->where('pegawai_id', auth()->user()->id) as $index => $barang)
                                    <tr class="border-b hover:bg-[#3a3a3a]">
                                        <td class="py-2 px-4 text-sm text-white">{{ $barangIn->firstItem() + $index }}</td>
                                        <td class="py-2 px-4 text-sm text-white">{{ $barang->jumlah }}</td>
                                        <td class="py-2 px-4 text-sm text-white">
                                            {{ $barang->created_at->format('l, d-m-y, H:i') }}</td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="5" class="py-20 px-4 text-lg text-white text-center">Tidak ada barang
                                            masuk
                                        </td>
                                    </tr>
                                @endforelse
                            @endauth
                        </x-splade-lazy>
                    </tbody>
                </table>
            </div>
            <div class="flex justify-center w-full">
                @if ($barangIn->hasPages())
                    @auth('admin')
                        {{ $barangIn->appends(['barang-keluar' => $barangOut->currentPage()])->links() }}
                    @endauth
                    @auth('pegawai')
                        {{ $barangIn->appends(['barang-keluar' => $barangOut->currentPage()])->links() }}
                    @endauth
                @endif
            </div>
        </section>

        <section>
            <div class="flex justify-center items-center py-2">
                <h1 class="text-xl font-semibold mb-4 text-center">Barang Keluar</h1>
            </div>
            <div class="overflow-x-auto rounded-md">
                <table
                    class="min-w-full bg-gray-300 h-full mb-4 border border-gray-300 shadow-sm rounded-lg overflow-hidden">
                    <thead class="bg-[#1a1a1a]">
                        <tr class="border-b">
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">No</th>
                            @if (auth()->guard('admin')->check())
                                <th class="py-2 px-4 text-left text-sm font-semibold text-white">Pegawai</th>
                            @endif
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">Jumlah</th>
                            <th class="py-2 px-4 text-left text-sm font-semibold text-white">Tanggal</th>
                        </tr>
                    </thead>
                    <tbody class="bg-[#2a2a2a]">
                        <x-splade-lazy>
                            <x-slot:placeholder>
                                <tr>
                                    <td class="text-center p-8" colspan="4">
                                        Sedang memuat list Barang...
                                    </td>
                                </tr>
                            </x-slot:placeholder>
                            @auth('admin')
                                @forelse ($barangOut as $index => $barang)
                                    <tr class="border-b hover:bg-[#3a3a3a]">
                                        <td class="py-2 px-4 text-sm text-white">{{ $barangOut->firstItem() + $index }}</td>
                                        <td class="py-2 px-4 text-sm text-white">{{ $barang->pegawai->nama }}</td>
                                        <td class="py-2 px-4 text-sm text-white">{{ $barang->jumlah }}</td>
                                        <td class="py-2 px-4 text-sm text-white">
                                            {{ $barang->created_at->format('l, d-m-y, H:i') }}</td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="4" class="py-20 px-4 text-lg text-white text-center">Tidak ada barang
                                            masuk
                                        </td>
                                    </tr>
                                @endforelse
                            @endauth
                            @auth('pegawai')
                                @forelse ($barangOut->where('pegawai_id', auth()->user()->id) as $index => $barang)
                                    <tr class="border-b hover:bg-[#3a3a3a]">
                                        <td class="py-2 px-4 text-sm text-white">{{ $barangOut->firstItem() + $index }}</td>
                                        <td class="py-2 px-4 text-sm text-white">{{ $barang->jumlah }}</td>
                                        <td class="py-2 px-4 text-sm text-white">
                                            {{ $barang->created_at->format('l, d-m-y, H:i') }}</td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="4" class="py-20 px-4 text-lg text-white text-center">Tidak ada barang
                                            keluar
                                        </td>
                                    </tr>
                                @endforelse
                            @endauth
                        </x-splade-lazy>
                    </tbody>
                </table>
            </div>
            <div class="flex justify-center w-full">
                @if ($barangOut->hasPages())
                    @auth('admin')
                        {{ $barangOut->appends(['barang-masuk' => $barangIn->currentPage()])->links() }}
                    @endauth
                    @auth('pegawai')
                        {{ $barangOut->appends(['barang-masuk' => $barangIn->currentPage()])->links() }}
                    @endauth
                @endif
            </div>
        </section>
    </section>
@endsection

@extends(Auth::guard('admin')->check() ? 'components.layouts.admin' : 'components.layouts.pegawai')

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
    <section class="flex justify-between gap-4 pb-4 pt-8 px-8 items-center">
        <h1 class="sm:text-xl md:text-2xl font-bold">List Barang</h1>
        <h1 class="sm:text-sm md:text-xl font-bold rounded-md border-2 py-2 px-4 border-slate-200">Jumlah : <span
                class="underline">{{ $barangs->count() }}</span></h1>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <div class="flex justify-between items-center">
            <div class="relative max-w-xs py-4">
                <label class="sr-only">Search</label>
                <input type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search"
                    class="py-2 px-3 ps-9 block w-full shadow-sm rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-transparent focus:border-[#5a5a5a]"
                    placeholder="Search for items">
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                    <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                </div>
            </div>
            @auth('admin')
                <a href="{{ route('admin.barang.create') }}"
                    class="text-sm font-semibold mb-4 rounded-md border py-2 px-4 border-slate-200">Tambah</a>
            @endauth

            @auth('pegawai')
                <div class="justify-end">
                    <a href="{{ route('pegawai.barang-in') }}"
                        class="text-sm font-semibold mb-4 ml-2 rounded-md border py-2 px-4 border-slate-200">Masukkan
                        Barang</a>
                    <a href="{{ route('pegawai.barang-out') }}"
                        class="text-sm font-semibold mb-4 ml-2 rounded-md border py-2 px-4 border-slate-200">Keluarkan
                        Barang</a>
                </div>
            @endauth
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full mb-4 bg-[#3a3a3a] border border-gray-300 rounded-lg shadow-sm">
                <thead>
                    <tr class="border-b bg-[#2a2a2a]">
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">No</th>
                        <th class="py-2 sm:px-24 lg:px-4 text-center text-sm font-semibold text-white">Gambar</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Nama</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Kategori</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Jumlah</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Deskripsi</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Status</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($barangs as $index => $barang)
                        <tr class="border-b hover:bg-[#3a3a3a]">
                            <td class="py-2 px-4 text-sm text-white">{{ $index + 1 }}</td>
                            <td class="py-4 lg:px-16 sm:px-24 text-sm text-white">
                                @php
                                    $gambar = json_decode($barang->gambar);
                                    $totalGambar = $gambar ? count($gambar) : 0;
                                @endphp

                                <div class="relative w-16 h-16">
                                    @if ($totalGambar > 0)
                                        <img src="{{ Storage::url($gambar[0]) }}" alt="Gambar utama"
                                            class="w-full h-full rounded-full border-2 border-gray-50 object-cover absolute top-0 left-0 z-10">

                                        @if ($totalGambar > 1)
                                            <img src="{{ Storage::url($gambar[1]) }}" alt="Gambar kedua"
                                                class="w-full h-full rounded-full border border-gray-50 object-cover absolute hidden md:flex top-0 left-10 z-20">
                                        @endif

                                        @if ($totalGambar > 2)
                                            <div
                                                class="absolute top-0 left-16 hidden md:flex items-center justify-center w-full h-full bg-gray-800 text-white rounded-full border border-gray-50 z-30">
                                                +{{ $totalGambar - 2 }}
                                            </div>
                                        @endif
                                    @else
                                        <img src="{{ asset('path/to/default/image.png') }}" alt="Gambar default"
                                            class="w-full h-full rounded-full border-2 border-gray-50 object-cover absolute top-0 left-0 z-10">
                                    @endif
                                </div>
                            </td>
                            <td class="py-2 px-4 text-sm text-white">{{ $barang->nama }}</td>
                            <td class="py-2 px-4 text-sm text-white">{{ $barang->kategori->nama }}</td>
                            <td class="py-2 px-4 text-sm text-white">{{ $barang->jumlah }}</td>
                            <td class="py-2 px-4 text-sm text-white">{{ $barang->deskripsi }}</td>
                            <td class="py-2 px-4 text-sm text-white">
                                <span
                                    class="inline-block px-2 py-1 text-xs font-semibold rounded-full {{ $barang->status === 'tersedia' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' }}">
                                    {{ ucfirst($barang->status) }}
                                </span>
                            </td>
                            <td class="py-2 px-4 text-sm text-white">
                                <div class="justify-start items-center flex gap-4">
                                    @auth('admin')
                                        <a href="{{ route('admin.barang.show', $barang->nama) }}"
                                            class="text-gray-50 bg-[#1a1a1a] rounded-md py-2 px-3 hover:bg-gray-50 hover:text-[#1a1a1a] transition-all duration-300">Lihat</a>
                                        <a href="{{ route('admin.barang.edit', $barang->nama) }}"
                                            class="text-gray-50 bg-[#1a1a1a] rounded-md py-2 px-3 hover:bg-gray-50 hover:text-[#1a1a1a] transition-all duration-300">Edit</a>
                                        <form action="{{ route('admin.barang.destroy', $barang->id) }}" method="post">
                                            @method('DELETE')
                                            @csrf
                                            <button type="submit"
                                                class="text-[#1a1a1a] rounded-md py-2 px-3 bg-gray-50 hover:bg-[#1a1a1a] hover:text-gray-50 ml-2 transition-all duration-300">Delete</button>
                                        </form>
                                    @endauth
                                    @auth('pegawai')
                                        <a href="{{ route('pegawai.barang.show', $barang->nama) }}"
                                            class="text-gray-50 bg-[#1a1a1a] rounded-md py-2 px-3 hover:bg-gray-50 hover:text-[#1a1a1a] transition-all duration-300">Lihat</a>
                                    @endauth
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="7" class="py-20 px-4 text-lg text-white text-center">Tidak ada barang</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </section>
@endsection

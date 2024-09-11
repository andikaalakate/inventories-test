@extends(Auth::guard('admin')->check() ? 'components.layouts.admin' : 'components.layouts.pegawai')

@section('body')
    <section class="flex justify-between gap-4 pb-4 pt-8 px-8 items-center">
        <h1 class="sm:text-xl md:text-2xl font-bold">List Kategori</h1>
        <h1 class="sm:text-sm md:text-xl font-bold rounded-md border-2 py-2 px-4 border-slate-200">Jumlah : <span
                class="underline">{{ $kategoris->count() }}</span></h1>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <div class="flex justify-between items-center py-2">
            <div class="relative max-w-xs">
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
                <Link href="{{ route('admin.kategori.create') }}"
                    class="text-sm font-semibold mb-4 rounded-md border py-2 px-4 border-slate-200">Tambah</Link>
            @endauth
        </div>
        <div class="overflow-x-auto rounded-md">
            <table class="min-w-full bg-gray-300 h-full mb-4 border border-gray-300 shadow-sm rounded-lg overflow-hidden">
                <thead class="bg-[#1a1a1a]">
                    <tr class="border-b">
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">No</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Nama</th>
                        <th class="py-2 px-4 text-center text-sm font-semibold text-white">Jumlah</th>
                        <th class="py-2 px-4 text-center text-sm font-semibold text-white">Tersedia</th>
                        <th class="py-2 px-4 text-center text-sm font-semibold text-white">Habis</th>
                        <th class="py-2 px-4 text-center text-sm font-semibold text-white">Aksi</th>
                    </tr>
                </thead>
                <tbody class="bg-[#2a2a2a]">
                    <x-splade-lazy>
                        <x-slot:placeholder>
                            <tr>
                                <td class="text-center p-8" colspan="6">
                                    Sedang memuat list Kategori...
                                </td>
                            </tr>
                        </x-slot:placeholder>
                        @forelse ($kategoris as $index => $kategori)
                            <tr class="border-b hover:bg-[#3a3a3a]">
                                <td class="py-2 px-4 text-sm text-white">{{ $kategoris->firstItem() + $index }}</td>
                                <td class="py-2 px-4 text-sm text-white">{{ $kategori->nama }}</td>
                                <td class="py-2 px-4 text-sm text-white text-center">{{ $kategori->barang->count() ?? 0 }}
                                </td>
                                <td class="py-2 px-4 text-sm text-white text-center">
                                    {{ $kategori->barang->where('status', 'tersedia')->count() ?? 0 }}
                                </td>
                                <td class="py-2 px-4 text-sm text-white text-center">
                                    {{ $kategori->barang->where('status', 'habis')->count() ?? 0 }}
                                </td>
                                <td class="py-2 px-4 text-sm text-white flex justify-center gap-4 items-center">
                                    @auth('admin')
                                        <Link href="{{ route('admin.kategori.show', $kategori->nama) }}"
                                            class="text-gray-50 bg-[#1a1a1a] rounded-md py-2 px-3 hover:bg-gray-50 hover:text-[#1a1a1a] transition-all duration-300">
                                        Lihat</Link>
                                        <Link href="{{ route('admin.kategori.edit', $kategori->nama) }}"
                                            class="text-gray-50 bg-[#1a1a1a] rounded-md py-2 px-3 hover:bg-gray-50 hover:text-[#1a1a1a] transition-all duration-300">
                                        Edit</Link>
                                        <x-splade-form confirm="Konfirmasi" confirm-text="Apa kamu yakin?"
                                            confirm-button="Ya, aku yakin!" cancel-button="Tidak"
                                            action="{{ route('admin.kategori.destroy', $kategori->id) }}" method="delete">
                                            @method('DELETE')
                                            @csrf
                                            <button type="submit"
                                                class="text-[#1a1a1a] rounded-md py-2 px-3 bg-gray-50 hover:bg-[#1a1a1a] hover:text-gray-50 ml-2 transition-all duration-300">Delete</button>
                                        </x-splade-form>
                                    @endauth
                                    @auth('pegawai')
                                        <Link href="{{ route('pegawai.kategori.show', $kategori->nama) }}"
                                            class="text-gray-50 bg-[#1a1a1a] rounded-md py-2 px-3 hover:bg-gray-50 hover:text-[#1a1a1a] transition-all duration-300">
                                        Lihat</Link>
                                    @endauth
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="7" class="py-20 px-4 text-lg text-white text-center">Tidak ada kategori
                                    barang
                                </td>
                            </tr>
                        @endforelse
                    </x-splade-lazy>
                </tbody>
            </table>
        </div>

        <div class="flex justify-center w-full">
            @if ($kategoris->hasPages())
                <x-pagination :paginator="$kategoris"
                    route="
                @auth('admin')
                    {{ route('admin.kategori.list') }}
                @endauth
                @auth('pegawai')
                    {{ route('pegawai.kategori.list') }}
                @endauth" />
            @endif
        </div>
    </section>
@endsection

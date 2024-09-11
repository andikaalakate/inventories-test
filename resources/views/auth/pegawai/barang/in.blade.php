@extends('components.layouts.pegawai')

@section('body')
    <section class="flex justify-between items-center pb-4 pt-8 px-8">
        <h1 class="text-xl font-bold">Masukkan Barang</h1>
        <Link href="{{ route('pegawai.barang.list') }}"
            class="text-sm font-bold rounded-md border-2 py-2 px-4 border-slate-200">Kembali</Link>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <x-splade-form confirm="Konfirmasi" confirm-text="Apa kamu yakin?" confirm-button="Ya, aku yakin!" cancel-button="Tidak"
            action="{{ route('pegawai.barang-in.store') }}" method="post" enctype="multipart/form-data"
            class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @csrf
            @method('POST')

            <!-- Barang -->
            <div class="flex flex-col">
                <label for="barang" class="text-sm font-semibold py-2 text-white">Barang</label>
                <x-splade-select v-model="form.barang_id" id="barang" required :options="$barangs" option-value="id"
                    option-label="nama" placeholder="Pilih Barang">
                </x-splade-select>
            </div>

            <!-- Jumlah -->
            <div class="flex flex-col">
                <label for="jumlah" class="text-sm font-semibold py-2 text-white">Jumlah</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number" id="jumlah" v-model="form.jumlah" placeholder="Masukkan jumlah">
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

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <div class="flex justify-center items-center">
            <h1 class="text-xl font-semibold mb-4 text-center">Barang yang pernah Anda masukkan</h1>
        </div>
        <div class="overflow-x-auto rounded-md">
            <table class="min-w-full bg-gray-300 h-full mb-4 border border-gray-300 shadow-sm rounded-lg overflow-hidden">
                <thead class="bg-[#1a1a1a]">
                    <tr class="border-b">
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">No</th>
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">Nama Barang</th>
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
                        @forelse ($barangIn as $index => $barang)
                            <tr class="border-b hover:bg-[#3a3a3a]">
                                <td class="py-2 px-4 text-sm text-white">{{ $barangIn->firstItem() + $index }}</td>
                                <td class="py-2 px-4 text-sm text-white">{{ $barang->barang->nama }}</td>
                                <td class="py-2 px-4 text-sm text-white">{{ $barang->jumlah }}</td>
                                <td class="py-2 px-4 text-sm text-white">{{ $barang->created_at->format('l, d-m-y, H:i') }}
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="4" class="py-20 px-4 text-lg text-white text-center">Tidak ada barang yang
                                    pernah Anda masukkan</td>
                            </tr>
                        @endforelse
                    </x-splade-lazy>
                </tbody>
            </table>
        </div>
        <div class="flex justify-center w-full">
            @if ($barangIn->hasPages())
                <x-pagination :paginator="$barangIn" route="{{ route('pegawai.barang-in') }}" />
            @endif
        </div>
    </section>
@endsection

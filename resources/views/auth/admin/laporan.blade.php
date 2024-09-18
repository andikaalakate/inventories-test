@extends('components.layouts.admin')

@section('body')
    <section class="bg-[#1a1a1a] h-[calc(100%-75%)]">

    </section>
    <div class="p-6 flex flex-col gap-5 flex-wrap -mt-16">
        <div class="w-full bg-[#2a2a2a] rounded-xl p-6">
            <div class="flex justify-between items-center">
                <p class="text-2xl font-bold uppercase">Laporan</p>
            </div>
        </div>
        <div class="flex gap-5 flex-wrap">
            <div
                class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow hover:translate-x-[10px] hover:translate-y-[5px] hover:shadow-none transition-all duration-300">
                <a target="_blank" href="{{ route('admin.laporan.cetak', 'barang') }}">
                    <p>Cetak Barang</p>
                    <p class="text-7xl leading-snug text-center">{{ $barangs->select('id')->count() }}</p>
                    <p class="text-right">Barang</p>
                </a>
            </div>
            <div
                class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow hover:translate-x-[10px] hover:translate-y-[5px] hover:shadow-none transition-all duration-300">
                <a target="_blank" href="{{ route('admin.laporan.cetak', 'barang-masuk') }}">
                    <p>Cetak Barang Masuk</p>
                    <p class="text-7xl leading-snug text-center">{{ $barangIn->select('id')->count() }}</p>
                    <p class="text-right">Barang Masuk</p>
                </a>
            </div>
            <div
                class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow hover:translate-x-[10px] hover:translate-y-[5px] hover:shadow-none transition-all duration-300">
                <a target="_blank" href="{{ route('admin.laporan.cetak', 'barang-keluar') }}">
                    <p>Cetak Barang Keluar</p>
                    <p class="text-7xl leading-snug text-center">{{ $barangOut->select('id')->count() }}</p>
                    <p class="text-right">Barang Keluar</p>
                </a>
            </div>
            <div
                class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow hover:translate-x-[10px] hover:translate-y-[5px] hover:shadow-none transition-all duration-300">
                <a target="_blank" href="{{ route('admin.laporan.cetak', 'siswa') }}">
                    <p>Cetak Siswa</p>
                    <p class="text-7xl leading-snug text-center">{{ $siswas->select('id')->count() }}</p>
                    <p class="text-right">Siswa</p>
                </a>
            </div>
        </div>
        <div class="flex gap-5 flex-wrap">
            <div
                class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow hover:translate-x-[10px] hover:translate-y-[5px] hover:shadow-none transition-all duration-300">
                <a target="_blank" href="{{ route('admin.laporan.cetak', 'admin') }}">
                    <p>Cetak Admin</p>
                    <p class="text-7xl leading-snug text-center">{{ $users->select('id')->count() }}</p>
                    <p class="text-right">Admin</p>
                </a>
            </div>
            <div
                class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow hover:translate-x-[10px] hover:translate-y-[5px] hover:shadow-none transition-all duration-300">
                <a target="_blank" href="{{ route('admin.laporan.cetak', 'pegawai') }}">
                    <p>Cetak Pegawai</p>
                    <p class="text-7xl leading-snug text-center">{{ $pegawais->select('id')->count() }}</p>
                    <p class="text-right">Pegawai</p>
                </a>
            </div>
        </div>
    </div>
@endsection
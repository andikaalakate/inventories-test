@extends('components.layouts.admin')

@section('body')
    <div class="p-6 flex flex-col gap-5 flex-wrap">
        <div class="flex gap-5 flex-wrap">
            <div class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                <p>Total Kategori</p>
                <p class="text-7xl leading-snug text-center">{{ $kategoriCount }}</p>
                <p class="text-right">Kategori</p>
            </div>
            <div class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                <p>Total Barang</p>
                <p class="text-7xl leading-snug text-center">{{ $barangCount }}</p>
                <p class="text-right">Barang</p>
            </div>
            <div class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                <p>Pegawai</p>
                <p class="text-7xl leading-snug text-center">{{ $pegawaiCount }}</p>
                <p class="text-right">Pegawai</p>
            </div>
            <div class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                <p>Total Siswa</p>
                <p class="text-7xl leading-snug text-center">{{ $siswaCount }}</p>
                <p class="text-right">Siswa</p>
            </div>
            <div class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                <p>Admin / Pengguna</p>
                <p class="text-7xl leading-snug text-center">{{ $userCount }}</p>
                <p class="text-right">Admin / Pengguna</p>
            </div>
        </div>
        <div class="flex gap-5 flex-wrap">
            <div class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
            </div>
            <div class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
            </div>
            <div class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
            </div>
        </div>
        <div class="flex gap-5 flex-wrap">
            <div class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
            </div>
            <div class="flex gap-5 flex-wrap flex-col w-1/2">
                <div class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                </div>
                <div class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                </div>
            </div>
        </div>
    </div>
@endsection
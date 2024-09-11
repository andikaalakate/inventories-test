@extends('components.layouts.pegawai')

@section('body')
    <section class="bg-[#1a1a1a] h-[calc(100%-75%)]">

    </section>
    <div class="p-6 flex flex-col gap-5 flex-wrap -mt-16">
        <div class="w-full bg-[#2a2a2a] rounded-xl p-6">
            <div class="flex justify-between items-center">
                <p class="text-2xl font-bold uppercase">Dashboard</p>
                <p class="text-right">Selamat datang kembali, <span class="font-bold">{{ auth()->user()->nama }}</span></p>
            </div>
        </div>
        <div class="flex gap-5 flex-wrap">
            <div class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow hover:translate-x-[10px] hover:translate-y-[5px] hover:shadow-none transition-all duration-300">
                <Link href="{{ route('pegawai.kategori.list') }}">
                    <p>Total Kategori</p>
                    <p class="text-7xl leading-snug text-center">{{ $kategoriCount }}</p>
                    <p class="text-right">Kategori</p>
                </Link>
            </div>
            <div class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow hover:translate-x-[10px] hover:translate-y-[5px] hover:shadow-none transition-all duration-300">
                <Link href="{{ route('pegawai.barang.list') }}">
                    <p>Total Barang</p>
                    <p class="text-7xl leading-snug text-center">{{ $barangCount }}</p>
                    <p class="text-right">Barang</p>
                </Link>
            </div>
        </div>
    </div>
@endsection

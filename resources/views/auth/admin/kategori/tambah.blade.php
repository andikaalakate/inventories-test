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
        <h1 class="text-xl font-bold">Tambah Kategori</h1>
        <a href="{{ route('admin.kategori.list') }}"
            class="text-sm font-bold rounded-md border-2 py-2 px-4 border-slate-200">Kembali</a>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <form action="{{ route('admin.kategori.store') }}" method="post" enctype="multipart/form-data"
            class="grid grid-cols-1 md:grid-cols-2 gap-6">
            @csrf
            @method('POST')

            <div class="flex flex-col">
                <label for="nama" class="text-sm font-semibold py-2 text-white">Nama Kategori</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="nama" name="nama" placeholder="Masukkan nama kategori">
            </div>

            <div class="col-span-2 justify-end flex">
                <button type="submit"
                    class="bg-slate-200 text-[#1a1a1a] py-2 px-4 rounded-lg hover:bg-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Submit
                </button>
            </div>
        </form>
    </section>
@endsection

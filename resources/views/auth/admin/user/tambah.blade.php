@extends('components.layouts.admin')

@section('body')
    <section class="flex justify-between items-center pb-4 pt-8 px-8">
        <h1 class="text-xl font-bold">Edit Admin</h1>
        <Link href="{{ route('admin.user.list') }}" class="text-sm font-bold rounded-md border-2 py-2 px-4 border-slate-200">
        Kembali</Link>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <x-splade-form action="{{ route('admin.user.store') }}" method="POST" enctype="multipart/form-data"
            class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @csrf
            @method('POST')

            <!-- Nama user -->
            <div class="flex flex-col">
                <label for="nama" class="text-sm font-semibold py-2 text-white">Nama</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="nama" v-model="form.name" placeholder="Masukkan nama user"/>
            </div>

            <!-- Username user -->
            <div class="flex flex-col">
                <label for="username" class="text-sm font-semibold py-2 text-white">Username</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="username" v-model="form.username" placeholder="Masukkan username user"/>
            </div>

            <!-- Kelas -->
            <div class="flex flex-col">
                <label for="email" class="text-sm font-semibold py-2 text-white">Email</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email" id="email" v-model="form.email" placeholder="Masukkan email user" inputmode="email"/>
            </div>

            <!-- Avatar user -->
            <div class="flex flex-col">
                <label for="avatar" class="text-sm font-semibold py-2 text-white">Avatar</label>
                <x-splade-file name="avatar" id="avatar" filepond preview accept="image/*" />
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
@endsection

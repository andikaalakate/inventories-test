@extends('components.layouts.admin')

@section('body')
    <section class="flex justify-between items-center pb-4 pt-8 px-8">
        <h1 class="text-xl font-bold">Tambah pegawai</h1>
        <Link href="{{ route('admin.pegawai.list') }}" class="text-sm font-bold rounded-md border-2 py-2 px-4 border-slate-200">
        Kembali</Link>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <x-splade-form action="{{ route('admin.pegawai.store') }}" method="post" enctype="multipart/form-data"
            class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            @csrf
            @method('POST')

            <!-- Nama pegawai -->
            <div class="flex flex-col">
                <label for="nama" class="text-sm font-semibold py-2 text-white">Nama pegawai</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="nama" v-model="form.nama" placeholder="Masukkan nama pegawai"/>
            </div>

            <!-- Username pegawai -->
            <div class="flex flex-col">
                <label for="username" class="text-sm font-semibold py-2 text-white">Username pegawai</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="username" v-model="form.username" placeholder="Masukkan username pegawai"/>
            </div>

            <!-- Jenis Kelamin -->
            <div class="flex flex-col">
                <label for="jenis_kelamin" class="text-sm font-semibold py-2 text-white">Jenis Kelamin</label>
                @php
                    $jk = [
                        ['id' => 'Laki-laki', 'nama' => 'Laki-laki'],
                        ['id' => 'Perempuan', 'nama' => 'Perempuan'],
                    ]
                @endphp

                <x-splade-select v-model="form.jenis_kelamin" id="jenis_kelamin" required
                    :options="$jk" option-value="id" option-label="nama" placeholder="Pilih Jenis Kelamin">
                </x-splade-select>
            </div>

            <!-- Kelas -->
            <div class="flex flex-col">
                <label for="email" class="text-sm font-semibold py-2 text-white">Email</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email" id="email" v-model="form.email" placeholder="Masukkan email pegawai" inputmode="email"/>
            </div>

            <!-- Jurusan -->
            <div class="flex flex-col">
                <label for="jabatan" class="text-sm font-semibold py-2 text-white">Jabatan</label>
                @php
                    $jabatan = [
                        ['id' => 'Pengurus Lab', 'nama' => 'Pengurus Lab'],
                        ['id' => 'Tata Usaha', 'nama' => 'Tata Usaha'],
                        ['id' => 'Kepala Sekolah', 'nama' => 'Kepala Sekolah'],
                        ['id' => 'Wakil Kepala Sekolah', 'nama' => 'Wakil Kepala Sekolah'],
                        ['id' => 'Kepala Jurusan', 'nama' => 'Kepala Jurusan'],
                        ['id' => 'Guru', 'nama' => 'Guru'],
                        ['id' => 'Wali Kelas', 'nama' => 'Wali Kelas']
                    ];
                @endphp

                <x-splade-select v-model="form.jabatan" id="jabatan" required
                    :options="$jabatan" option-value="id" option-label="nama" placeholder="Pilih Jabatan">
                </x-splade-select>
            </div>

            <!-- Password pegawai -->
            <div class="flex flex-col">
                <label for="password" class="text-sm font-semibold py-2 text-white">Password pegawai</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password" id="password" v-model="form.password" placeholder="Masukkan password pegawai"/>
            </div>

            <!-- Avatar pegawai -->
            <div class="flex flex-col">
                <label for="avatar" class="text-sm font-semibold py-2 text-white">Avatar</label>
                <x-splade-file name="avatar" id="avatar" filepond preview accept="image/*" />
            </div>

            <!-- Alamat pegawai -->
            <div class="flex flex-col">
                <label for="alamat" class="text-sm font-semibold py-2 text-white">Alamat</label>
                <textarea id="alamat" v-model="form.alamat" required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4" placeholder="Masukkan alamat pegawai"></textarea>
            </div>

            <!-- No HP pegawai -->
            <div class="flex flex-col">
                <label for="no_hp" class="text-sm font-semibold py-2 text-white">No HP pegawai</label>
                <input required
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" maxlength="18" id="no_hp" v-model="form.no_hp" placeholder="Masukkan no hp pegawai"/>
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

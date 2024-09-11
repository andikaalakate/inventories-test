@extends('components.layouts.admin')

@section('body')
    <section class="flex justify-between items-center pb-4 pt-8 px-8">
        <h1 class="text-xl font-bold">Lihat pegawai</h1>
        <Link href="{{ route('admin.pegawai.list') }}" class="text-sm font-bold rounded-md border-2 py-2 px-4 border-slate-200">
        Kembali</Link>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Nama pegawai -->
            <div class="flex flex-col">
                <label for="nama" class="text-sm font-semibold py-2 text-white">Nama pegawai</label>
                <input disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="nama" value="{{ $pegawai->nama }}" placeholder="Masukkan nama pegawai"/>
            </div>

            <!-- Username pegawai -->
            <div class="flex flex-col">
                <label for="username" class="text-sm font-semibold py-2 text-white">Username pegawai</label>
                <input disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="username" value="{{ $pegawai->username }}" placeholder="Masukkan username pegawai"/>
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

                <select class="border w-full border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" id="jenis_kelamin" disabled>
                    @foreach ($jk as $j)
                        <option value="{{ $j['id'] }}" {{ $j['id'] === $pegawai->jenis_kelamin ? 'selected' : '' }}>{{ $j['nama'] }}</option>
                    @endforeach
                </select>
            </div>

            <!-- Kelas -->
            <div class="flex flex-col">
                <label for="email" class="text-sm font-semibold py-2 text-white">Email</label>
                <input disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email" id="email" value="{{ $pegawai->email }}" placeholder="Masukkan email pegawai" />
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

                <select class="border w-full border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" id="jabatan" disabled>
                    @foreach ($jabatan as $j)
                        <option value="{{ $j['id'] }}" {{ $j['id'] === $pegawai->jabatan ? 'selected' : '' }}>{{ $j['nama'] }}</option>
                    @endforeach
                </select>
            </div>

            <!-- Avatar pegawai -->
            <div class="flex flex-col">
                <label for="avatar" class="text-sm font-semibold py-2 text-white">Avatar</label>
                <div class="flex justify-center max-w-24 max-h-24 rounded-full">
                    <img src="{{ Storage::url($pegawai->avatar_url) }}" class="w-full h-full" alt="Avatar pegawai" />
                </div>
            </div>

            <!-- Alamat pegawai -->
            <div class="flex flex-col">
                <label for="alamat" class="text-sm font-semibold py-2 text-white">Alamat</label>
                <textarea id="alamat" disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4" placeholder="Masukkan alamat pegawai">{{ $pegawai->alamat }}</textarea>
            </div>

            <!-- No HP pegawai -->
            <div class="flex flex-col">
                <label for="no_hp" class="text-sm font-semibold py-2 text-white">No HP pegawai</label>
                <input disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" maxlength="18" id="no_hp" value="{{ $pegawai->no_hp }}" placeholder="Masukkan no hp pegawai"/>
            </div>
        </section>
    </section>
@endsection

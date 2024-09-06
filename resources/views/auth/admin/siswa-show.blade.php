@extends('components.layouts.admin')

@section('body')
    <section class="flex justify-between items-center pb-4 pt-8 px-8">
        <h1 class="text-xl font-bold">Lihat Siswa</h1>
        <Link href="{{ route('admin.siswa.list') }}" class="text-sm font-bold rounded-md border-2 py-2 px-4 border-slate-200">
        Kembali</Link>
    </section>

    <section class="p-6 my-4 mx-8 bg-[#2a2a2a] rounded-lg shadow-md">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <!-- NISN Siswa -->
            <div class="flex flex-col">
                <label for="nisn" class="text-sm font-semibold py-2 text-white">NISN</label>
                <input disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="nisn" value="{{ $siswa->nisn }}" placeholder="Masukkan nisn siswa" />
            </div>

            <!-- Nama Siswa -->
            <div class="flex flex-col">
                <label for="nama" class="text-sm font-semibold py-2 text-white">Nama Siswa</label>
                <input disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="nama" value="{{ $siswa->nama }}" placeholder="Masukkan nama siswa" />
            </div>

            <!-- Jenis Kelamin -->
            <div class="flex flex-col">
                <label for="jenis_kelamin" class="text-sm font-semibold py-2 text-white">Jenis Kelamin</label>
                <select value="{{ $siswa->jenis_kelamin }}" id="jenis_kelamin" disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option disabled selected>Pilih Jenis Kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                </select>
            </div>

            <!-- Kelas -->
            <div class="flex flex-col">
                <label for="kelas" class="text-sm font-semibold py-2 text-white">Kelas</label>
                <select id="kelas" disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option disabled selected>Pilih Kelas</option>
                    {{-- <option value="X">X</option>
                    <option value="XI">XI</option>
                    <option value="XII">XII</option> --}}
                    @php
                        $kelas = [
                            "X", "XI", "XII"
                        ]
                    @endphp

                    @foreach ($kelas as $kls)
                        <option value="{{ $kls }}" {{ $kls === $siswa->kelas ? 'selected' : '' }}>{{ $kls }}</option>
                    @endforeach
                </select>
            </div>

            <!-- Jurusan -->
            <div class="flex flex-col">
                <label for="jurusan" class="text-sm font-semibold py-2 text-white">Jurusan</label>
                <select value="{{ $siswa->jurusan }}" id="jurusan" disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option disabled selected>Pilih Jurusan</option>
                    <option value="RPL">RPL</option>
                    <option value="MPLB">MPLB</option>
                    <option value="BDP">BDP</option>
                    <option value="TJKT">TJKT</option>
                    <option value="AKL">AKL</option>
                </select>
            </div>

            <!-- Tempat Lahir Siswa -->
            <div class="flex flex-col">
                <label for="tempat_lahir" class="text-sm font-semibold py-2 text-white">Tempat Lahir</label>
                <input disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" id="tempat_lahir" value="{{ $siswa->tempat_lahir }}"                     placeholder="Masukkan tempat lahir siswa" />
            </div>

            <!-- Tanggal Lahir Siswa -->
            <div class="flex flex-col">
                <label for="tgl_lahir" class="text-sm font-semibold py-2 text-white">Tanggal Lahir</label>
                <input disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="date" id="tgl_lahir" value="{{ $siswa->tgl_lahir }}" placeholder="Masukkan tanggal lahir siswa" />
            </div>

            <!-- Alamat Siswa -->
            <div class="flex flex-col">
                <label for="alamat" class="text-sm font-semibold py-2 text-white">Alamat</label>
                <textarea id="alamat" value="{{ $siswa->alamat }}" disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4" placeholder="Masukkan alamat Siswa"></textarea>
            </div>

            <!-- No HP Siswa -->
            <div class="flex flex-col">
                <label for="no_hp" class="text-sm font-semibold py-2 text-white">No HP Siswa</label>
                <input disabled
                    class="border border-[#3a3a3a] bg-[#4a4a4a] placeholder:text-gray-200 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" maxlength="18" id="no_hp" value="{{ $siswa->no_hp }}" placeholder="Masukkan no hp siswa" />
            </div>
        </div>
    </section>
@endsection

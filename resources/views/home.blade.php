<header class="header-image text-white p-8 text-center bg-red-800">
    <h1 class="text-5xl font-bold">SMK SWASTA JAMBI MEDAN</h1>
</header>
<nav class="bg-red-700 sticky top-0 z-50 shadow-lg">
    <ul class="flex justify-center gap-10 text-xl text-white p-4 transition-all duration-300">
        <li><a href="#"
                class="hover:underline hover:bg-white hover:text-red-700 hover:rounded-md hover:px-3 hover:py-2 transition-all">Home</a>
        </li>
        <li><a href="#"
                class="hover:underline hover:bg-white hover:text-red-700 hover:rounded-md hover:px-3 hover:py-2 transition-all">Profil</a>
        </li>
        <li><a href="#"
                class="hover:underline hover:bg-white hover:text-red-700 hover:rounded-md hover:px-3 hover:py-2 transition-all">Kontak</a>
        </li>
        <li><a href="#"
                class="hover:underline hover:bg-white hover:text-red-700 hover:rounded-md hover:px-3 hover:py-2 transition-all">Daftar</a>
        </li>
        <li><a href="#"
                class="hover:underline hover:bg-white hover:text-red-700 hover:rounded-md hover:px-3 hover:py-2 transition-all">Masuk</a>
        </li>
    </ul>
</nav>

<main class="p-4">
    <section class="my-8">
        <header class="text-center mb-6">
            <h2 class="text-3xl font-bold">INI BARANG!</h2>
        </header>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            @foreach ($barangs as $data)
                <article class="bg-white rounded-md border border-gray-300 shadow-md p-4">
                    <header class="bg-red-400 text-white text-xl p-4 rounded-t-md">
                        <h3>{{ $data->nama }}</h3>
                    </header>
                    @php
                        $gambarList = json_decode($data->gambar);
                    @endphp
                    @php
                        $gambarList = json_decode($data->gambar);
                    @endphp
                    @if ($gambarList && count($gambarList) > 0)
                        @php
                            $gambarPertama = $gambarList[0];
                        @endphp
                        <figure class="my-4 aspect-[3/4]">
                            <img class="w-full h-full object-cover rounded-md" src="{{ Storage::url($gambarPertama) }}"
                                alt="Deskripsi gambar">
                        </figure>
                    @else
                        <figure class="my-4 aspect-[3/4]">
                            <img class="w-full h-full object-cover rounded-md" src="{{ asset('image.jpg') }}"
                                alt="Deskripsi gambar">
                        </figure>
                    @endif
                    <figcaption class="p-2">
                        <p>{{ $data->deskripsi }}</p>
                        <p>Kategori: {{ $data->kategori->nama }}</p>
                        <p>Jumlah: {{ $data->jumlah }}</p>
                        <p>Status: {{ $data->status }}</p>
                    </figcaption>
                </article>
            @endforeach
        </div>
    </section>

    <section class="my-8">
        <header class="text-center mb-6">
            <h2 class="text-3xl font-bold">INI GAMBARRR!</h2>
        </header>
        <div class="flex justify-center">
            <figure class="bg-white p-4 rounded-md shadow-md">
                <img class="w-full h-96 object-cover rounded-md" src="image.jpg" alt="Deskripsi gambar">
                <figcaption class="text-center mt-4">
                    <h3 class="text-xl font-bold">Ini Gambar</h3>
                    <p>Nganu</p>
                </figcaption>
            </figure>
        </div>
    </section>
</main>

<footer class="bg-gray-800 text-white p-4 text-center">
    <p>&copy; 2024 SMK SWASTA JAMBI MEDAN. All rights reserved.</p>
</footer>

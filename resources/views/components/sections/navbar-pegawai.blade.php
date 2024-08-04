<nav x-data="{ isOpen: false }" @click.outside="isOpen = false" class="bg-[#3a3a3a] h-20 relative">
    <div class="flex justify-between items-center h-[100%] px-3">
        <div class="cursor-pointer border-[#0004] border-2 rounded-lg ml-4">
            <box-icon name='menu-alt-left' @click.stop="isOpen = !isOpen"
                class='w-[40px] h-[40px] p-1 fill-white'></box-icon>
        </div>
        <div class="p-1 pr-4 flex gap-4 items-center ">
            <p class="text-lg flex">{{ auth()->user()->nama }} | <span class="hidden md:flex"> |
                    ({{ auth()->user()->email }})</span></p>
            <div class="rounded-full size-9 overflow-hidden bg-white">
                <img src="{{ asset('user.png') }}" alt="Gambar Profile" class="size-full">
            </div>
        </div>
    </div>
    <label
        class="absolute top-2/4 lg:left-[332px] left-3 -translate-y-2/4 hidden lg:flex items-center gap-2 p-2 border-2 border-[#0004] rounded-md ">
        <input type="text" placeholder="Lakukan Pencarian"
            class="bg-transparent outline-none border-none flex w-full">
        <box-icon name='search' class="text-[20px]"></box-icon>
    </label>
    <aside :class="{ 'left-0 sm:shadow-[10px_10px_.5px_0_rgba(0,0,0,0.75)]': isOpen, '-left-full': !isOpen }"
        class="duration-500 z-50 h-screen w-full md:w-80 bg-[#2a2a2a] lg:shadow-none fixed lg:left-0 top-0">
        <div class="flex justify-between items-center h-20 px-3 lg:justify-center">
            <h1 class="text-white text-3xl text-center pl-4">Inventory</h1>
            <box-icon name='x' @click="isOpen = false" class='w-[40px] h-[40px] p-1 cursor-pointer lg:hidden fill-white'></box-icon>
        </div>
        <div class="px-[27px] py-3 lg:hidden ">
            <label class="flex  items-center gap-2 p-2 border-2 border-[#0004] rounded-md">
                <input type="text" placeholder="Lakukan Pencarian"
                    class="bg-transparent outline-none border-none flex w-full">
                <box-icon name='search' class="text-[20px]"></box-icon>
            </label>
        </div>
        <div class="lg:h-[calc(100%-80px)] h-[calc(100%-148px)] w-full flex flex-col justify-between ">
            <ul class="p-[27px] flex flex-col gap-3 text-[18px]">
                <li>
                    <a href="{{ route('pegawai.dashboard') }}"
                        class="bg-[#3a3a3a] flex w-full h-full py-1 px-3 rounded-xl items-center gap-2 {{ request()->routeIs('dashboard') ? 'border-2 border-slate-50' : '' }}">
                        <box-icon name='tachometer' class="fill-white"></box-icon>Dashboard
                    </a>
                </li>
                <li>
                    <a href="{{ route('pegawai.kategori.list') }}"
                        class="bg-[#3a3a3a] flex w-full h-full py-1 px-3 rounded-xl items-center gap-2 {{ request()->is('admin/kategori-barang*') ? 'border-2 border-slate-50' : '' }}">
                        <box-icon name='category-alt' class="fill-white"></box-icon>Kategori Barang
                    </a>
                </li>
                <li>
                    <a href="{{ route('pegawai.barang.list') }}"
                        class="bg-[#3a3a3a] flex w-full h-full py-1 px-3 rounded-xl items-center gap-2  {{ request()->is('admin/barang*') ? 'border-2 border-slate-50' : '' }}">
                        <box-icon name='package' class="fill-white"></box-icon>Barang
                    </a>
                </li>
                <li>
                    <a href="#" class="flex w-full h-full py-1 px-3 rounded-xl items-center gap-2 bg-[#3a3a3a]">
                        <box-icon name='user' class="fill-white"></box-icon>Siswa
                    </a>
                </li>
            </ul>
            <ul class="p-[27px] flex flex-col gap-3 text-[18px] ">
                <li>
                    <form action="{{ route('pegawai.logout') }}" method="post">
                        @method('POST')
                        @csrf
                        <button type="submit"
                            class="flex bg-[#3a3a3a] w-full h-full py-1 px-3 rounded-xl items-center gap-2"><box-icon
                                name='exit' class="fill-white"></box-icon>Keluar</button>
                    </form>
                </li>
            </ul>
        </div>
    </aside>
</nav>

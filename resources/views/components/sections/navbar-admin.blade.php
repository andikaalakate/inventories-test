<nav class="bg-[#3a3a3a] h-20 relative">
    <div class="flex justify-between items-center h-[100%] px-3">
        <i @click.stop="isOpen = !isOpen"
            class='bx bx-menu-alt-left text-3xl p-1 cursor-pointer border-[#0004] border-2 rounded-lg'
            style='color:#ffffff'></i>
        <div class="p-1 flex gap-4 items-center ">
            <p class="text-lg hidden lg:flex">Nama</p>
            <div class="bg-white rounded-full size-9 overflow-hidden">
                <img src="assets/img/Sample_User_Icon.png" alt="Gambar Profile" class="size-full">
            </div>
        </div>
    </div>
    <label
        class="absolute top-2/4 lg:left-[332px] left-3 -translate-y-2/4 hidden lg:flex items-center gap-2 p-2 border-2 border-[#0004] rounded-md ">
        <input type="text" placeholder="Lakukan Pencarian"
            class="bg-transparent outline-none border-none flex w-full">
        <i class='bx bx-search text-[20px]'></i>
    </label>
    <aside :class="{ 'left-0': isOpen, '-left-full': !isOpen }"
        class="duration-300 h-screen w-full md:w-80 bg-[#2a2a2a] fixed lg:left-0 top-0">
        <div class="flex justify-between items-center h-20 px-3 lg:justify-center">
            <h1 class="text-white text-3xl text-center pl-4">Inventory</h1>
            <i @click="isOpen = false" class='bx bx-x text-3xl p-1 cursor-pointer lg:hidden' style='color:#ffffff'></i>
        </div>
        <div class="px-[27px] py-3 lg:hidden ">
            <label class="flex  items-center gap-2 p-2 border-2 border-[#0004] rounded-md">
                <input type="text" placeholder="Lakukan Pencarian"
                    class="bg-transparent outline-none border-none flex w-full">
                <i class='bx bx-search text-[20px]'></i>
            </label>
        </div>
        <div class="lg:h-[calc(100%-80px)] h-[calc(100%-148px)] w-full flex flex-col justify-between ">
            <ul class="p-[27px] flex flex-col gap-3 text-[18px]">
                <li><a href="#" class="flex bg-[#3a3a3a] border-2 border-slate-50 w-full h-full py-1 px-3 rounded-xl items-center gap-2"><i
                            class='bx bx-tachometer'></i>Dashboard</a></li>
                <li><a href="#" class="flex bg-[#3a3a3a] w-full h-full py-1 px-3 rounded-xl items-center gap-2"><i
                            class='bx bx-category-alt'></i>Kategori Barang</a></li>
                <li><a href="#" class="flex bg-[#3a3a3a] w-full h-full py-1 px-3 rounded-xl items-center gap-2"><i
                            class='bx bx-package'></i>Barang</a></li>
                <li><a href="#" class="flex bg-[#3a3a3a] w-full h-full py-1 px-3 rounded-xl items-center gap-2"><i
                            class='bx bxs-user-detail'></i>Pegawai</a></li>
                <li><a href="#" class="flex bg-[#3a3a3a] w-full h-full py-1 px-3 rounded-xl items-center gap-2"><i
                            class='bx bx-user'></i>Siswa</a></li>
                <li><a href="#" class="flex bg-[#3a3a3a] w-full h-full py-1 px-3 rounded-xl items-center gap-2"><i
                            class='bx bx-user-pin'></i>Admin / Pengguna</a></li>
            </ul>
            <ul class="p-[27px] flex flex-col gap-3 text-[18px] ">
                <li><a href="#" class="flex bg-[#3a3a3a] w-full h-full py-1 px-3 rounded-xl items-center gap-2"><i
                            class='bx bx-exit'></i>Keluar</a></li>
            </ul>
        </div>
    </aside>
</nav>

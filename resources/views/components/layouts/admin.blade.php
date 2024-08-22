<div class="bg-[#4e4e4e] font-[Poppins] text-white overflow-hidden" x-data="{ isOpen: false }"
    @click.away="isOpen = false">
    <x-sections.navbar-admin></x-sections.navbar-admin>
    <main :class="{ 'blur-sm': isOpen }" class=" h-[calc(100vh-80px)] w-full overflow-y-auto lg:pl-80">
        @yield('body')
    </main>
</div>

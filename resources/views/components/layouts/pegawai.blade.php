<x-splade-data default="{ isOpen: false }" store="navigation" />

<div class="bg-[#4e4e4e] font-[Poppins] text-white overflow-hidden" v-on:click.away="navigation.isOpen = false">
    <x-sections.navbar-pegawai />
    <main class=" h-[calc(100vh-80px)] w-full overflow-y-auto lg:pl-80">
        @yield('body')
    </main>
</div>

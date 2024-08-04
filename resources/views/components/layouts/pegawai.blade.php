<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" x-data="{ isOpen: false }" @click.outside="isOpen = false" class="select-none">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
        rel="stylesheet">
    {{-- <script src="https://unpkg.com/alpinejs@3.7.0/dist/cdn.min.js" defer></script> --}}
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <style>
        .blur {
            filter: blur(5px);
        }
    </style>
    <title>Pegawai - {{ $title }}</title>
    @yield('head')
</head>

<body class="bg-[#4e4e4e] font-[Poppins] text-white overflow-hidden" x-data="{ isOpen: false }"
    @click.away="isOpen = false">
    @include('components.sections.navbar-pegawai')
    <main :class="{ 'blur': isOpen }" class=" h-[calc(100vh-80px)] w-full overflow-y-auto lg:pl-80">
        @yield('body')
    </main>
    @yield('script')
</body>

</html>

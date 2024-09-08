@props(['paginator', 'barang', 'route', 'pageParam'])

<div class="flex justify-center px-8 gap-8 w-full items-center text-white bg-[#414141] p-2 rounded-lg">
    <div class="flex items-center">
        @if ($paginator->onFirstPage())
            <!-- Tidak ada tombol jika di halaman pertama -->
        @else
            <!-- Tombol ke halaman pertama -->
            <Link href="{{ route($route, ['barang' => $barang->nama, $pageParam => 1]) }}" class="fill-white flex items-center">
                <box-icon type='solid' name='chevrons-left'></box-icon>
            </Link>
            <!-- Tombol ke halaman sebelumnya -->
            <Link href="{{ route($route, ['barang' => $barang->nama, $pageParam => $paginator->currentPage() - 1]) }}" class="fill-white flex items-center">
                <box-icon type='solid' name='chevron-left'></box-icon>
            </Link>
        @endif
    </div>

    <div class="flex items-center text-xl gap-2">
        <!-- Nomor Halaman -->
        @foreach ($paginator->getUrlRange(1, $paginator->lastPage()) as $page => $url)
            <Link href="{{ route($route, ['barang' => $barang->nama, $pageParam => $page]) }}" class="flex items-center {{ $page == $paginator->currentPage() ? 'font-bold text-white' : 'text-slate-300' }}">
                {{ $page }}
            </Link>
        @endforeach
    </div>

    <div class="flex items-center">
        @if ($paginator->hasMorePages())
            <!-- Tombol ke halaman berikutnya -->
            <Link href="{{ route($route, ['barang' => $barang->nama, $pageParam => $paginator->currentPage() + 1]) }}" class="fill-white flex items-center">
                <box-icon type='solid' name='chevron-right'></box-icon>
            </Link>
            <!-- Tombol ke halaman terakhir -->
            <Link href="{{ route($route, ['barang' => $barang->nama, $pageParam => $paginator->lastPage()]) }}" class="fill-white flex items-center">
                <box-icon type='solid' name='chevrons-right'></box-icon>
            </Link>
        @endif
    </div>
</div>

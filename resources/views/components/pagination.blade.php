@props(['paginator', 'route'])

<div class="flex justify-center px-8 gap-8 w-full items-center text-white bg-[#414141] p-2 rounded-lg">
    <div class="flex items-center">
        <!-- Tombol ke halaman pertama dan halaman sebelumnya -->
        @if ($paginator->onFirstPage())
            <!-- Tidak ada tombol jika di halaman pertama -->
        @else
            <Link href="{{ $paginator->url(1) }}" class="fill-white flex items-center">
                <box-icon type='solid' name='chevrons-left'></box-icon>
            </Link>
            <Link href="{{ $paginator->previousPageUrl() }}" class="fill-white flex items-center">
                <box-icon type='solid' name='chevron-left'></box-icon>
            </Link>
        @endif
    </div>

    <div class="flex items-center text-xl gap-2">
        <!-- Nomor Halaman -->
        @foreach ($paginator->getUrlRange(1, $paginator->lastPage()) as $page => $url)
            <Link href="{{ $url }}" class="flex items-center {{ $page == $paginator->currentPage() ? 'font-bold text-white' : 'text-slate-300' }}">
                {{ $page }}
            </Link>
        @endforeach
    </div>

    <div class="flex items-center">
        <!-- Tombol ke halaman berikutnya dan terakhir -->
        @if ($paginator->hasMorePages())
            <Link href="{{ $paginator->nextPageUrl() }}" class="fill-white flex items-center">
                <box-icon type='solid' name='chevron-right'></box-icon>
            </Link>
            <Link href="{{ $paginator->url($paginator->lastPage()) }}" class="fill-white flex items-center">
                <box-icon type='solid' name='chevrons-right'></box-icon>
            </Link>
        @endif
    </div>
</div>

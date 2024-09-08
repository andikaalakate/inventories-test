@if ($paginator->hasPages())
    <nav role="navigation" aria-label="{{ __('Pagination Navigation') }}"
        class="flex justify-center px-8 gap-8 w-full items-center text-white bg-[#414141] p-2 rounded-lg">
        <div class="flex items-center gap-2">

            {{-- Previous Page Link --}}
            @if (!$paginator->onFirstPage())
                <Link href="{{ $paginator->url(1) }}" rel="prev" class="fill-white flex items-center"
                    aria-label="{{ __('pagination.previous') }}">
                <box-icon type='solid' name='chevrons-left'></box-icon>
                </Link>

                <Link href="{{ $paginator->previousPageUrl() }}" rel="first" class="fill-white flex items-center"
                    aria-label="{{ __('pagination.previous') }}">
                <box-icon type='solid' name='chevron-left'></box-icon>
                </Link>
            @endif
        </div>

        <div class="flex items-center text-xl gap-4">
            {{-- Pagination Elements --}}
            @foreach ($elements as $element)
                {{-- "Three Dots" Separator --}}
                @if (is_string($element))
                    <span aria-disabled="true">
                        <span
                            class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-[#3a3a3a] border border-gray-300 cursor-default leading-5 dark:bg-[#3a3a3a] dark:border-gray-600">{{ $element }}</span>
                    </span>
                @endif

                {{-- Array Of Links --}}
                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        @php
                            $startPage = max(1, $paginator->currentPage() - 2);
                            $endPage = min($paginator->lastPage(), $paginator->currentPage() + 2);
                        @endphp

                        @if ($page >= $startPage && $page <= $endPage)
                            @if ($page == $paginator->currentPage())
                                <span aria-current="page"
                                    class="rounded-full bg-[#3a3a3a] border border-gray-300 cursor-default leading-5 py-1 px-2">
                                    <span class="font-bold text-white">{{ $page }}</span>
                                </span>
                            @else
                                <Link href="{{ $url }}" class="text-slate-300 hover:text-slate-100"
                                    aria-label="{{ __('Go to page :page', ['page' => $page]) }}">
                                {{ $page }}
                                </Link>
                            @endif
                        @endif
                    @endforeach
                @endif
            @endforeach
        </div>


        <div class="flex items-center gap-2">
            {{-- Next Page Link --}}
            @if ($paginator->hasMorePages())
                <Link href="{{ $paginator->nextPageUrl() }}" class="fill-white flex items-center">
                <box-icon type='solid' name='chevron-right'></box-icon>
                </Link>
                <Link href="{{ $paginator->url($paginator->lastPage()) }}" ref="last"
                    class="fill-white flex items-center">
                <box-icon type='solid' name='chevrons-right'></box-icon>
                </Link>
            @endif
        </div>
    </nav>
@endif

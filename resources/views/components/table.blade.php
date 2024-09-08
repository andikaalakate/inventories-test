<div class="overflow-x-auto rounded-md">
    <table class="min-w-full h-full mb-4 bg-gray-300 border border-gray-300 shadow-sm rounded-lg overflow-hidden">
        <thead>
            <tr class="border-b bg-[#1a1a1a]">
                @foreach ($columns as $column)
                    <th class="py-2 px-4 text-left text-sm font-semibold text-white">{{ $column['label'] }}</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            <x-splade-lazy :items="$items" delay="200">
                <x-slot:placeholder>
                    <tr>
                        <td class="text-center p-8" colspan="{{ count($columns) }}">
                            Memuat data...
                        </td>
                    </tr>
                </x-slot:placeholder>

                @php $index = 1; @endphp <!-- Mulai nomor dari 1 -->

                @forelse ($items as $item)
                    <tr class="border-b hover:bg-[#3a3a3a] bg-[#2a2a2a]">
                        @foreach ($columns as $column)
                            <td class="py-2 px-4 text-sm text-white">
                                @if (is_callable($column['field']))
                                    {!! $column['field']($item, $index) !!}
                                @else
                                    {{ $item->{$column['field']} }}
                                @endif
                            </td>
                        @endforeach
                    </tr>
                    @php $index++; @endphp <!-- Increment nomor setelah setiap loop -->
                @empty
                    <tr>
                        <td colspan="{{ count($columns) }}" class="py-20 px-4 text-lg text-white text-center">Tidak ada data</td>
                    </tr>
                @endforelse
            </x-splade-lazy>
        </tbody>
    </table>
</div>

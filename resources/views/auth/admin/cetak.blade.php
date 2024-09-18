<section class="bg-[#4e4e4e] min-h-screen h-full p-8">
    <section class="flex justify-between gap-4 pb-4 text-white pt-8 items-center">
        <h1 class="sm:text-xl md:text-2xl font-bold">List {{ $head }}</h1>
        <h1 class="sm:text-sm md:text-xl font-bold rounded-md border-2 py-2 px-4 border-slate-200">Jumlah : <span
                class="underline">{{ $data->count() }}</span></h1>
    </section>
    <div class="overflow-x-auto rounded-md">
        <table class="min-w-full bg-gray-300 h-full mb-4 border border-gray-300 shadow-sm rounded-lg overflow-hidden">
            <thead class="bg-[#1a1a1a]">
                <tr class="border-b">
                    <th class="py-2 px-4 text-left text-sm font-semibold text-white">No</th>
                    @foreach ($headers as $header)
                        <th class="py-2 px-4 text-left text-sm font-semibold text-white">{{ $header }}</th>
                    @endforeach
                </tr>
            </thead>
            <tbody class="bg-[#2a2a2a]">
                <x-splade-lazy>
                    <x-slot:placeholder>
                        <tr>
                            <td class="text-center p-8" colspan="{{ count($headers) + 1 }}">
                                Sedang memuat list data ...
                            </td>
                        </tr>
                    </x-slot:placeholder>
                    @forelse ($data as $index => $item)
                        <tr class="border-b hover:bg-[#3a3a3a]">
                            <td class="py-2 px-4 text-sm text-white">{{ $index + 1 }}</td>
    
                            @foreach ($headers as $header)
                                <td class="py-2 px-4 text-sm text-white">{{ $item[$header] }}</td>
                            @endforeach
                        </tr>
                    @empty
                        <tr>
                            <td colspan="{{ count($headers) + 1 }}" class="py-20 px-4 text-lg text-white text-center">Tidak
                                ada data</td>
                        </tr>
                    @endforelse
                </x-splade-lazy>
            </tbody>
        </table>
    </div>
</section>

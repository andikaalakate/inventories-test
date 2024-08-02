@extends('components.layouts.admin')

@section('head')
    <style>
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background: #fff;
        }

    </style>
@endsection

@section('body')
<main class=" h-[calc(100vh-80px)] w-full overflow-y-auto lg:pl-80">
    <div class="p-6 flex flex-col gap-5 flex-wrap">
        <div class="flex gap-5 flex-wrap">
            <div class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                <p>Stats</p>
                <p class="text-7xl leading-snug text-center">33,55</p>
                <p class="text-right">Last Month</p>
            </div>
            <div class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                <p>Stats</p>
                <p class="text-7xl leading-snug text-center">33,55</p>
                <p class="text-right">Last Month</p>
            </div>
            <div class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                <p>Stats</p>
                <p class="text-7xl leading-snug text-center">33,55</p>
                <p class="text-right">Last Month</p>
            </div>
            <div class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                <p>Stats</p>
                <p class="text-7xl leading-snug text-center">33,55</p>
                <p class="text-right">Last Month</p>
            </div>
            <div class="bg-[#2a2a2a] p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                <p>Stats</p>
                <p class="text-7xl leading-snug text-center">33,55</p>
                <p class="text-right">Last Month</p>
            </div>
        </div>
        <div class="flex gap-5 flex-wrap">
            <div class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
            </div>
            <div class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
            </div>
            <div class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
            </div>
        </div>
        <div class="flex gap-5 flex-wrap">
            <div class="bg-[#2a2a2a]  p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
            </div>
            <div class="flex gap-5 flex-wrap flex-col w-1/2">
                <div class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                </div>
                <div class="bg-[#2a2a2a] h-64 p-3 rounded-lg shadow-[10px_10px_.5px_0_rgba(0,0,0,1)] grow">
                </div>
            </div>
        </div>
    </div>
</main>
@endsection

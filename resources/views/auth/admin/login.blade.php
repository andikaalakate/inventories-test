@extends('components.layouts.admin')

@section('head')
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <style>
        .shadow-button {
            box-shadow: 0.2rem 0.1rem 0px 1px #000;
        }

        .shadow-container {
            box-shadow: 0.8rem 1rem 0px 1px #000;
        }

        .shadow-button:hover,
        .shadow-button:focus,
        .shadow-button:active {
            box-shadow: none;
            transform: translate(0.2rem, 0.1rem);
        }
    </style>
@endsection

@section('body')
    <section class="bg-slate-900 flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-container w-full max-w-md">
            <div class="text-center mb-6">
                <h2 class="text-lg font-semibold mb-4">Masuk dengan</h2>
                <div class="flex justify-center gap-4">
                    <button
                        class="bg-black text-white py-2 px-10 rounded-md flex items-center shadow-button border-black transition-shadow duration-500 ease-out">
                        <box-icon type='logo' name='github' class="fill-white mr-2"></box-icon> GITHUB
                    </button>
                    <button
                        class="bg-white border shadow-button border-black text-black py-2 px-10 rounded-md flex items-center transition-shadow duration-500 ease-out">
                        <box-icon type='logo' name='google' class="fill-black mr-2"></box-icon> GOOGLE
                    </button>
                </div>
            </div>
            <hr class="my-6 border-black">
            <div class="text-center mb-6">
                <h2 class="text-lg font-semibold">Atau</h2>
            </div>
            <form>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email"
                        class="mt-1 block w-full shadow-button border-black px-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow duration-500 ease-out">
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Kata Sandi</label>
                    <input type="password" id="password"
                        class="mt-1 block w-full px-3 py-2 border shadow-button border-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow duration-500 ease-out">
                </div>
                <div class="flex items-center mb-4">
                    <input type="checkbox" id="remember"
                        class="h-4 w-4 text-indigo-600 shadow-button border-black rounded transition-shadow duration-500 ease-out">
                    <label class="ml-2 block text-sm text-gray-900">Ingat saya</label>
                </div>
                <button type="submit"
                    class="w-full bg-white border shadow-button border-black text-black py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-shadow duration-500 ease-out">MASUK</button>
            </form>
        </div>
    </section>
@endsection

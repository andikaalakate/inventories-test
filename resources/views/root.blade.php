<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background: #fff;
        }
    </style>

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

    @spladeHead
    @vite('resources/js/app.js')
</head>

<body class="bg-gray-100">
    @splade
</body>

</html>

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

    <style>
        /* Matikan pemilihan teks */
        body {
            -webkit-user-select: none;
            /* Safari */
            -moz-user-select: none;
            /* Firefox */
            -ms-user-select: none;
            /* Internet Explorer/Edge */
            user-select: none;
            /* Non-prefixed version, supported by most browsers */
        }

        /* Matikan drag elemen */
        body {
            -webkit-user-drag: none;
            /* Safari */
            user-drag: none;
            /* Non-prefixed version, supported by modern browsers */
        }
    </style>

    <script>
        // Matikan klik kanan
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        });

        // Matikan drag and drop pada seluruh elemen
        document.addEventListener('dragstart', function(event) {
            event.preventDefault();
        });

        document.addEventListener('drop', function(event) {
            event.preventDefault();
        });
    </script>

    @spladeHead
    @vite('resources/js/app.js')
</head>

<body class="bg-gray-100">
    @splade
</body>

</html>

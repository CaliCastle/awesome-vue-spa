<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="base-api-url" content="{{ url('/api') }}/">
    <meta name="app-name" content="{{ config('app.name') }}">

    <title>@yield('', '主页') - {{ config('app.name') }}</title>

    <link rel="stylesheet" href="{{ mix('/css/pace.css') }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="{{ mix('css/utilities.css') }}">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8a4d76">
    <meta name="msapplication-TileColor" content="#8a4d76">
    <meta name="theme-color" content="#ffffff">
</head>
<body>
    <div id="app">
        <app></app>
    </div>

    <script src="/js/pace.min.js"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
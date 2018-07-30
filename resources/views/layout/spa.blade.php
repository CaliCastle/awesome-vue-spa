<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>@yield('', '主页') - {{ config('app.name') }}</title>

    <link rel="preload" href="/assets/js/pace.min.js" as="script">
    <link rel="preload" href="{{ mix('/assets/css/utils.css') }}" as="style">

    <script src="/assets/js/pace.min.js"></script>

    @stack('head')
    <link rel="stylesheet" href="{{ mix('/assets/css/utils.css') }}">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8a4d76">
    <meta name="msapplication-TileColor" content="#8a4d76">
    <meta name="theme-color" content="#ffffff">
</head>
<body>

    <div id="@yield('vue-root-id')">

        <app :app=@json($appConfig)>
            @yield('app.body')
        </app>

    </div>

    @stack('body.scripts')

    <noscript></noscript>

</body>
</html>
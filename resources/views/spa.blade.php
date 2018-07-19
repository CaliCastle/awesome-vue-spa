<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="base-api-url" content="{{ url('/api') }}/">
    <meta name="app-name" content="{{ config('app.name') }}">

    <title>Vue SPA</title>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="{{ mix('css/utilities.css') }}">
</head>
<body>
    <div id="app">
        <app></app>
    </div>

    <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue SPA</title>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <div id="app">
        {{--<app></app>--}}
        <modal>
            <template slot="header">My Title</template>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur dignissimos dolor esse, ex inventore nemo pariatur, ratione, recusandae rem sed unde vel voluptatibus? Ab cumque illum necessitatibus pariatur veritatis.

        </modal>
    </div>

    <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
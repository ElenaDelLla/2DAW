<html>
    <head>
        <title>@yield('title')</title>
        <meta name="viewport" content="width=device-width">
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/public/assets/css/stylesheet.css">
    </head>
    <body>
        <div class="flex-page">
            <h1>@yield('h1Text')</h1>
            @yield('content')
        </div>
    </body>
</html>


<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <menu-component></menu-component>
    <main class="container py-4">
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </main>
</div>
</body>
</html>

<script>

</script>

<style scoped>
    .slide-enter, .slide-leave-to {
        transform: translateX(-50px);
        opacity: 0;
    }

    .slide-enter-active, .slide-leave-active {
        transition: all 0.3s;
    }
</style>




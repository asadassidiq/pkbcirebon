<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   {{-- <meta name="csrf-token" value="{{ csrf_token() }}"/> --}}
   <meta name="csrf-token" content="{{ csrf_token() }}">
   <meta name="recaptcha-sitekey" content="{{ $recaptcha_sitekey }}">
   <meta name="app-url" content="{{ config('app.url') }}">
   <title>SIMPKB {{ env('APP_WILAYAH') }}</title>
   <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
   <link href="{{ mix('css/app.css').'?r='.time() }}" type="text/css" rel="stylesheet"/>
   <link href="{{ asset('css/custom.css') }}" rel="stylesheet">
</head>
<body>
   <div id="app">
   </div>
   <script src="{{ mix('js/app.js').'?r='.time() }}" type="text/javascript"></script>
</body>
</html>
<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

ApiRoute::version('v1', function(){
    ApiRoute::group([
        'namespace' => 'App\Http\Controllers\Api',
//        'as' => 'api',
//        'middleware' => 'bindings'
    ], function(){

        /**
         * auth.renew = renovação de autenticação
         * api.throttle = controla fluxo de acesso
         * limit = limite das requests
         * expires = tempo para expirar o bloqueio
         */
        ApiRoute::group([
//            'middleware' => ['api.throttle', 'auth.renew'],
//            'limit' => 100,
//            'expires' => 3
        ], function(){
            // rota para test
            ApiRoute::get('/user', function (){
                return ['teste api'];
            });

            // rota noticias
            ApiRoute::resource('/noticias', 'NoticiasController', ['only' => ['index']]);
        });
    });
});

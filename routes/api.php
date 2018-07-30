<?php

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

Route::prefix('v1')
    ->name('api.')
    ->group(function () {
        Route::get('/', function () {
            return response('', \Illuminate\Http\Response::HTTP_FORBIDDEN);
        })->name('base');

        Route::get('/threads', 'Api\ThreadsController@index')->name('threads');

        Route::middleware('guest:api')->group(function () {
            Route::post('/login', 'Api\AuthController@login');
            Route::post('/register', 'Api\AuthController@register');
        });

        Route::middleware('auth:api')->group(function () {
            Route::get('/me', 'Api\AuthController@me')->name('me');
            Route::get('/me/profile', 'Api\AuthController@profile');

            Route::post('/logout', 'Api\AuthController@logout');
        });
    });

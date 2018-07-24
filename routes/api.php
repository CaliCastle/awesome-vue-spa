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

Route::get('/threads', 'Api\ThreadsController@index');

Route::middleware('guest:api')->group(function () {
    Route::post('/login', 'Api\AuthController@login');
    Route::post('/register', 'Api\AuthController@register');
});

Route::middleware('auth:api')->group(function () {
    Route::get('/me', 'Api\AuthController@me');
    Route::get('/me/profile', 'Api\AuthController@profile');

    Route::post('/logout', 'Api\AuthController@logout');
});

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

Route::post('/login', 'Api\AuthController@login');

Route::middleware('auth:api')->group(function () {
    Route::get('/me', 'Api\AuthController@me');
    Route::post('/logout', 'Api\AuthController@logout');
});

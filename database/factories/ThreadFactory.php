<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Thread::class, function () {
    $faker = \Faker\Factory::create(app()->getLocale());

    return [
        'body' => $faker->sentences(rand(3, 15), true)
    ];
});
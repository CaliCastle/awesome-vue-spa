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

$factory->define(App\Channel::class, function () {
    $faker = \Faker\Factory::create(app()->getLocale());

    return [
        'name'  => $faker->name,
        'color' => str_replace('#', '', $faker->hexColor)
    ];
});
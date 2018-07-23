<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 30)->create()->each(function ($user) {
            // Make a thread
            $thread = factory(App\Thread::class)->make();

            // Bind thread to user
            $user->threads()->save($thread);
        });
    }
}

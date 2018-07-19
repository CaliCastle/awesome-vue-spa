<?php

use Illuminate\Database\Seeder;

class ThreadsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 20; $i++) {
            $user = App\User::all()->random();
            $channel = $user->channels->first();

            factory(App\Thread::class, 3)->make()->each(function ($thread) use ($user, $channel) {
                $thread->user_id = $user->id;
                $thread->channel_id = $channel->id;
                $thread->save();
            });
        }
    }
}

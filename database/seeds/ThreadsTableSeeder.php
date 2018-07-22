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
        $users = App\User::all();

        foreach ($users as $user) {
            $channel = $user->channels->first();

            factory(App\Thread::class, 2)->make()->each(function ($thread) use ($user, $channel) {
                $thread->user_id = $user->id;
                $thread->channel_id = $channel->id;
                $thread->save();
            });
        }
    }
}

<?php

namespace Tests\Unit;

use App\Thread;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class ThreadsTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function threads_can_be_pulled()
    {
        $count = 10;

        $user = factory(User::class)->create();
        factory(Thread::class, $count)->make()->each(function ($thread) use ($user) {
            $user->threads()->save($thread);
        });

        $response = $this->get(route('api.threads'));

        $response->assertJsonCount($count, 'threads.data')
            ->assertJson([
                "threads" => [
                    "total" => $count
                ]
            ]);
    }
}

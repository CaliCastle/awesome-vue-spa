<?php

namespace Tests\Unit;

use App\User;
use Laravel\Passport\Passport;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class AuthTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function a_user_can_register()
    {
        // Create a new user.
        $user = factory(User::class)->create();

        // Check persistence.
        $this->assertTrue(User::where($user->toArray())->exists());
    }

    /** @test */
    public function a_user_can_login()
    {
        // Create a new user.
        $password = 'secret';
        $user = factory(User::class)->create([
            'password' => bcrypt($password)
        ]);

        // And check password encryption.
        $this->assertTrue(
            auth()->attempt([
                'name'     => $user->name,
                'password' => $password
            ])
        );
    }

    /** @test */
    public function a_user_can_authenticate_via_oauth()
    {
        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $response = $this->get('/api/me');

        $response->assertExactJson($user->toArray());
    }
}

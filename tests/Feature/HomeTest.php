<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HomeTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_if_home_page_can_be_loaded()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_if_a_user_can_register()
    {

    }
}
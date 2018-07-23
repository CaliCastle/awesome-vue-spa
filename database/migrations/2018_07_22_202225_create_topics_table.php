<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTopicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('topics', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name')->unique();
            $table->timestamps();
        });

        Schema::create('thread_topic', function (Blueprint $table) {
            $table->unsignedInteger('topic_id');
            $table->unsignedInteger('thread_id');

            $table->foreign('topic_id')->references('id')->on('topics')->onDelete('cascade');
            $table->foreign('thread_id')->references('id')->on('threads')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('thread_topic');
        Schema::dropIfExists('topics');
    }
}

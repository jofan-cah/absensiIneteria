<?php

namespace Database\Seeders;

// use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        // \App\Models\User::factory(10)->create();
        Factory::factoryForModel(User::class)->count(50)->create();
    }
}

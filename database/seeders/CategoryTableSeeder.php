<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'user_id' => 1,
                'name' => 'Elektronik',
            ],
            [
                'user_id' => 1,
                'name' => 'Alat Tulis',
            ],
            [
                'user_id' => 1,
                'name' => 'Matrial',
            ],
            [
                'user_id' => 1,
                'name' => 'Meubeul',
            ],
        ];
        Category::insert($categories);
    }
}

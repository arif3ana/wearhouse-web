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
                'name' => 'Elektronik',
                'slug' => 'elektronik'
            ],
            [
                'name' => 'Alat Tulis',
                'slug' => 'alat-tulis'
            ],
        ];
        Category::insert($categories);
    }
}

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
            ],
            [
                'name' => 'Alat Tulis',
            ],
            [
                'name' => 'Kendaraan',
            ],
            [
                'name' => 'Meubeul',
            ],
        ];
        Category::insert($categories);
    }
}

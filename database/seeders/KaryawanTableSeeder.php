<?php

namespace Database\Seeders;

use App\Models\Karyawan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KaryawanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $employes = [
            [
                'user_id' => 1,
                'name' => 'Supardi',
                'nik' => 823456
            ],
            [
                'user_id' => 1,
                'name' => 'Yayan',
                'nik' => 845987
            ],
            [
                'user_id' => 1,
                'name' => 'Rohmat',
                'nik' => 836951
            ],
            [
                'user_id' => 1,
                'name' => 'Miko',
                'nik' => 869283
            ],
        ];

        Karyawan::insert($employes);
    }
}

<?php

namespace Database\Seeders;

use App\Models\Barang;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BarangTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $goods = [
            [
                'user_id' => 1,
                'category_id' => 2,
                'nama_barang' => 'pensil',
                'jumlah_barang' => 20
            ],
            [
                'user_id' => 1,
                'category_id' => 1,
                'nama_barang' => 'Monitor',
                'jumlah_barang' => 50
            ],
            [
                'user_id' => 1,
                'category_id' => 2,
                'nama_barang' => 'buku',
                'jumlah_barang' => 200
            ],
            [
                'user_id' => 1,
                'category_id' => 1,
                'nama_barang' => 'lampu',
                'jumlah_barang' => 40
            ],
            
        ];

        Barang::insert($goods);
    }
}

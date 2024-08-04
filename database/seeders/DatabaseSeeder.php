<?php

namespace Database\Seeders;

use App\Models\Pegawai;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'username' => 'admin',
            'email' => 'admin@admin.com',
        ]);

        Pegawai::factory()->create([
            'nama' => 'Pegawai',
            'username' => 'pegawai',
            'email' => 'pegawai@pegawai.com',
            'jenis_kelamin' => 'Laki-laki',
            'jabatan' => 'Tata Usaha',
            'alamat' => 'Di Rumah',
            'no_hp' => '089505722187',
        ]);
    }
}

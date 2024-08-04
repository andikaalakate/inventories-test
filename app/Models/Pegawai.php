<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Str;

class Pegawai extends Authenticatable
{
    use HasFactory;
    protected $guard = 'pegawai';

    protected $keyType = 'string';

    protected $fillable = [
        'nama',
        'username',
        'avatar_url',
        'email',
        'password',
        'jenis_kelamin',
        'jabatan',
        'alamat',
        'no_hp',
    ];

    protected $hidden = [
        'password',
    ];

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }

    public function barangIn()
    {
        return $this->hasMany(BarangIn::class);
    }

    public function barangOut()
    {
        return $this->hasMany(BarangOut::class);
    }
}

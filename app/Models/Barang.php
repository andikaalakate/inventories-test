<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Barang extends Model
{
    use HasFactory;

    protected $keyType = 'string';
    public $incrementing = false;

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->{$model->getKeyName()} = (string) Str::uuid();
        });
    }

    protected $fillable = [
        'nama',
        'kategori_id',
        'jumlah',
        'deskripsi',
        'gambar',
        'status',
    ];

    public function kategori()
    {
        return $this->belongsTo(KategoriBarang::class);
    }

    public function barangIn()
    {
        return $this->hasMany(BarangIn::class);
    }

    public function barangOut()
    {
        return $this->hasMany(BarangOut::class);
    }

    protected function casts(): array
    {
        return [
            'gambar' => 'array',
        ];
    }
}

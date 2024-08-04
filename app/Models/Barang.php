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
        return $this->belongsTo(KategoriBarang::class, 'kategori_id');
    }

    public function barangIn()
    {
        return $this->hasMany(BarangIn::class);
    }

    public function incrementJumlah($jumlah)
    {
        $this->jumlah += $jumlah;
        $this->save();
    }

    public function barangOut()
    {
        return $this->hasMany(BarangOut::class);
    }

    public function decrementJumlah($jumlah)
    {
        $this->jumlah -= $jumlah;
        $this->save();
    }

    protected function casts(): array
    {
        return [
            'gambar' => 'array',
        ];
    }
}

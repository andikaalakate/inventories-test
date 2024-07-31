<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('barangs', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nama');
            $table->uuid('kategori_id');
            $table->integer('jumlah');
            $table->text('deskripsi');
            $table->json('gambar')->nullable();
            $table->enum('status', ['tersedia', 'habis']);
            $table->timestamps();

            $table->foreign('kategori_id')->references('id')->on('kategori_barangs')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('barangs');
    }
};

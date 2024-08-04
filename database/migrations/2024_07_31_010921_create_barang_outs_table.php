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
        Schema::create('barang_outs', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('barang_id');
            $table->foreignId('pegawai_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->integer('jumlah');
            $table->timestamps();

            $table->foreign('barang_id')->references('id')->on('barangs')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('barang_outs');
    }
};

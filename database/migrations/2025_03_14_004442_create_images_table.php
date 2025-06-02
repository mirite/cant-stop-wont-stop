<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {

	/**
	 * Reverse the migrations.
	 */
	public function down(): void {
		Schema::dropIfExists( 'images' );
	}

	/**
	 * Run the migrations.
	 */
	public function up(): void {
		Schema::create(
			'images',
			function ( Blueprint $table ) {
				$table->id();
				$table->text( 'image' );
				$table->timestamps();
			}
		);
	}
};

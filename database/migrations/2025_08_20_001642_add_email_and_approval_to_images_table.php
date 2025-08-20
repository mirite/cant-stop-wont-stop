<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {

	/**
	 * Reverse the migrations.
	 */
	public function down(): void {
		Schema::table(
			'images',
			function ( Blueprint $table ) {
			}
		);
	}

	/**
	 * Run the migrations.
	 */
	public function up(): void {
		Schema::table(
			'images',
			function ( Blueprint $table ) {
				$table->string( 'title' )->nullable();
				$table->unsignedInteger( 'width' )->nullable();
				$table->unsignedInteger( 'height' )->nullable();

				$table->string( 'email' );
				$table->index( 'email' );

				$table->boolean( 'is_approved' )->default( false );
			}
		);
	}
};

<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;
use Inertia\Inertia;

Route::get(
	'/',
	function () {
		return Inertia::render(
			'Home',
			array(
				'canLogin'       => Route::has( 'login' ),
				'canRegister'    => Route::has( 'register' ),
				'laravelVersion' => Application::VERSION,
				'phpVersion'     => PHP_VERSION,
				'theme'          => 'red',
			)
		);
	}
);

Route::get(
	'/photos',
	function () {
		return Inertia::render(
			'Photos',
			array(
				'canLogin'       => Route::has( 'login' ),
				'canRegister'    => Route::has( 'register' ),
				'laravelVersion' => Application::VERSION,
				'phpVersion'     => PHP_VERSION,
				'theme'          => 'green',
				'photos'         => ImageController::get(),
			)
		);
	}
);
Route::get(
	'/about',
	function () {
		return Inertia::render(
			'About',
			array(
				'canLogin'       => Route::has( 'login' ),
				'canRegister'    => Route::has( 'register' ),
				'laravelVersion' => Application::VERSION,
				'phpVersion'     => PHP_VERSION,
				'theme'          => 'red',
			)
		);
	}
);
Route::get(
	'/dashboard',
	function () {
		return Inertia::render( 'Dashboard' );
	}
)->middleware( array( 'auth', 'verified' ) )->name( 'dashboard' );
Route::get( 'image', array( ImageController::class, 'index' ) )->name( 'image.index' );
Route::get( 'image/create', array( ImageController::class, 'create' ) )->name( 'image.create' );
Route::post( 'image', array( ImageController::class, 'store' ) )->name( 'image.store' );
Route::middleware( 'auth' )->group(
	function () {
		Route::get( '/profile', array( ProfileController::class, 'edit' ) )->name( 'profile.edit' );
		Route::patch( '/profile', array( ProfileController::class, 'update' ) )->name( 'profile.update' );
		Route::delete( '/profile', array( ProfileController::class, 'destroy' ) )->name( 'profile.destroy' );
	}
);

require __DIR__ . '/auth.php';

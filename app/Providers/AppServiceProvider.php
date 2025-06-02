<?php

namespace App\Providers;

use Illuminate\Support\Facades\{URL, Vite};
use Illuminate\Support\ServiceProvider;
class AppServiceProvider extends ServiceProvider {

	/**
	 * Bootstrap any application services.
	 */
	public function boot(): void {
		Vite::prefetch( concurrency: 3 );

		if ( $this->app->environment( 'production' ) ) {
			URL::forceScheme( 'https' );
		}
	}

	/**
	 * Register any application services.
	 */
	public function register(): void {
	}
}

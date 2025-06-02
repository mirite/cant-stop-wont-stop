<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\{RedirectResponse, Request};
use Illuminate\Support\Facades\{Auth, Route};
use Inertia\{Inertia, Response};
class AuthenticatedSessionController extends Controller {

	/**
	 * Display the login view.
	 */
	public function create(): Response {
		return Inertia::render(
			'Auth/Login',
			array(
				'canResetPassword' => Route::has( 'password.request' ),
				'status'           => session( 'status' ),
			)
		);
	}

	/**
	 * Destroy an authenticated session.
	 *
	 * @param Request $request
	 */
	public function destroy( Request $request ): RedirectResponse {
		Auth::guard( 'web' )->logout();

		$request->session()->invalidate();

		$request->session()->regenerateToken();

		return redirect( '/' );
	}

	/**
	 * Handle an incoming authentication request.
	 *
	 * @param LoginRequest $request
	 */
	public function store( LoginRequest $request ): RedirectResponse {
		$request->authenticate();

		$request->session()->regenerate();

		return redirect()->intended( route( 'dashboard', absolute: false ) );
	}
}

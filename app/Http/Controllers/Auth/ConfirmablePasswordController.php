<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\{RedirectResponse, Request};
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\{Inertia, Response};
class ConfirmablePasswordController extends Controller {

	/**
	 * Show the confirm password view.
	 */
	public function show(): Response {
		return Inertia::render( 'Auth/ConfirmPassword' );
	}

	/**
	 * Confirm the user's password.
	 *
	 * @param Request $request
	 */
	public function store( Request $request ): RedirectResponse {
		if ( ! Auth::guard( 'web' )->validate(
			array(
				'email'    => $request->user()->email,
				'password' => $request->password,
			)
		) ) {
			throw ValidationException::withMessages(
				array(
					'password' => __( 'auth.password' ),
				)
			);
		}

		$request->session()->put( 'auth.password_confirmed_at', time() );

		return redirect()->intended( route( 'dashboard', absolute: false ) );
	}
}

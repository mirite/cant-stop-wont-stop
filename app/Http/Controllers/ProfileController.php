<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\{RedirectResponse, Request};
use Illuminate\Support\Facades\{Auth, Redirect};
use Inertia\{Inertia, Response};
class ProfileController extends Controller {

	/**
	 * Delete the user's account.
	 *
	 * @param Request $request
	 */
	public function destroy( Request $request ): RedirectResponse {
		$request->validate(
			array(
				'password' => array( 'required', 'current_password' ),
			)
		);

		$user = $request->user();

		Auth::logout();

		$user->delete();

		$request->session()->invalidate();
		$request->session()->regenerateToken();

		return Redirect::to( '/' );
	}

	/**
	 * Display the user's profile form.
	 *
	 * @param Request $request
	 */
	public function edit( Request $request ): Response {
		return Inertia::render(
			'Profile/Edit',
			array(
				'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
				'status'          => session( 'status' ),
			)
		);
	}

	/**
	 * Update the user's profile information.
	 *
	 * @param ProfileUpdateRequest $request
	 */
	public function update( ProfileUpdateRequest $request ): RedirectResponse {
		$request->user()->fill( $request->validated() );

		if ( $request->user()->isDirty( 'email' ) ) {
			$request->user()->email_verified_at = null;
		}

		$request->user()->save();

		return Redirect::route( 'profile.edit' );
	}
}

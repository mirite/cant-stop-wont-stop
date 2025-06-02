<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\{RedirectResponse, Request};
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\{Inertia, Response};
class PasswordResetLinkController extends Controller {

	/**
	 * Display the password reset link request view.
	 */
	public function create(): Response {
		return Inertia::render(
			'Auth/ForgotPassword',
			array(
				'status' => session( 'status' ),
			)
		);
	}

	/**
	 * Handle an incoming password reset link request.
	 *
	 * @throws \Illuminate\Validation\ValidationException
	 * @param Request $request
	 */
	public function store( Request $request ): RedirectResponse {
		$request->validate(
			array(
				'email' => 'required|email',
			)
		);

		// We will send the password reset link to this user. Once we have attempted
		// to send the link, we will examine the response then see the message we
		// need to show to the user. Finally, we'll send out a proper response.
		$status = Password::sendResetLink(
			$request->only( 'email' )
		);

		if ( Password::RESET_LINK_SENT == $status ) {
			return back()->with( 'status', __( $status ) );
		}

		throw ValidationException::withMessages(
			array(
				'email' => array( trans( $status ) ),
			)
		);
	}
}

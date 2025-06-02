<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\{RedirectResponse, Request};
use Inertia\{Inertia, Response};
class EmailVerificationPromptController extends Controller {

	/**
	 * Display the email verification prompt.
	 *
	 * @param Request $request
	 */
	public function __invoke( Request $request ): RedirectResponse|Response {
		return $request->user()->hasVerifiedEmail()
					? redirect()->intended( route( 'dashboard', absolute: false ) )
					: Inertia::render( 'Auth/VerifyEmail', array( 'status' => session( 'status' ) ) );
	}
}

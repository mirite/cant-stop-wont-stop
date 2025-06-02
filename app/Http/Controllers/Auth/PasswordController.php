<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\{RedirectResponse, Request};
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class PasswordController extends Controller {

	/**
	 * Update the user's password.
	 *
	 * @param Request $request
	 */
	public function update( Request $request ): RedirectResponse {
		$validated = $request->validate(
			array(
				'current_password' => array( 'required', 'current_password' ),
				'password'         => array( 'required', Password::defaults(), 'confirmed' ),
			)
		);

		$request->user()->update(
			array(
				'password' => Hash::make( $validated['password'] ),
			)
		);

		return back();
	}
}

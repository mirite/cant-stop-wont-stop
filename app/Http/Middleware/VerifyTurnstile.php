<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

/**
 * Verifies a Cloudflare Turnstile token on incoming requests.
 */
class VerifyTurnstile {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request                                                         $request The incoming request.
	 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next The next middleware.
	 * @throws \Illuminate\Validation\ValidationException If the turnstile challenge fails.
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function handle( Request $request, Closure $next ): Response {
		$secret = config( 'services.turnstile.secret' );

		if ( ! $secret ) {
			// It's crucial to fail securely if the secret key is not configured.
			abort( 500, 'Turnstile secret key is not configured.' );
		}

		$token = $request->input( 'cf-turnstile-response' );

		if ( ! $token ) {
			// If the token is missing, throw a validation exception.
			throw ValidationException::withMessages(
				array(
					'cf-turnstile-response' => 'The CAPTCHA challenge is required.',
				)
			);
		}

		$response = Http::asForm()->post(
			'https://challenges.cloudflare.com/turnstile/v0/siteverify',
			array(
				'secret'   => $secret,
				'response' => $token,
				'remoteip' => $request->ip(),
			)
		);

		$result = $response->json();

		if ( ! ( $result['success'] ?? false ) ) {
			// If Cloudflare says the token is invalid, throw a validation exception.
			throw ValidationException::withMessages(
				array(
					'cf-turnstile-response' => 'The CAPTCHA challenge failed. Please try again.',
				)
			);
		}

		return $next( $request );
	}
}

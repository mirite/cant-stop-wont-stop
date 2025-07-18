<?php

namespace App\Http\Requests\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\{Auth, RateLimiter};
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest {

	/**
	 * Attempt to authenticate the request's credentials.
	 *
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function authenticate(): void {
		$this->ensureIsNotRateLimited();

		if ( ! Auth::attempt( $this->only( 'email', 'password' ), $this->boolean( 'remember' ) ) ) {
			RateLimiter::hit( $this->throttleKey() );

			throw ValidationException::withMessages(
				array(
					'email' => trans( 'auth.failed' ),
				)
			);
		}

		RateLimiter::clear( $this->throttleKey() );
	}

	/**
	 * Determine if the user is authorized to make this request.
	 */
	public function authorize(): bool {
		return true;
	}

	/**
	 * Ensure the login request is not rate limited.
	 *
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function ensureIsNotRateLimited(): void {
		if ( ! RateLimiter::tooManyAttempts( $this->throttleKey(), 5 ) ) {
			return;
		}

		event( new Lockout( $this ) );

		$seconds = RateLimiter::availableIn( $this->throttleKey() );

		throw ValidationException::withMessages(
			array(
				'email' => trans(
					'auth.throttle',
					array(
						'seconds' => $seconds,
						'minutes' => ceil( $seconds / 60 ),
					)
				),
			)
		);
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
	 */
	public function rules(): array {
		return array(
			'email'    => array( 'required', 'string', 'email' ),
			'password' => array( 'required', 'string' ),
		);
	}

	/**
	 * Get the rate limiting throttle key for the request.
	 */
	public function throttleKey(): string {
		return Str::transliterate( Str::lower( $this->string( 'email' ) ) . '|' . $this->ip() );
	}
}

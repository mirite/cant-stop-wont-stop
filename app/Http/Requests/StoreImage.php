<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * An upload image request.
 */
class StoreImage extends FormRequest {

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize(): bool {
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules(): array {
		return array(
			'images'   => array( 'required', 'array', 'max:20' ),
			'images.*' => array( 'required', 'image', 'mimes:jpg,jpeg,png,gif,svg,webp,heic', 'max:10240' ),
			'email'    => array( 'required', 'string', 'email', 'max:255' ),
		);
	}
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreImage;
use App\Models\Image;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class ImageController extends Controller {

	public function index() {
		$images = Image::latest()->get();

		return Inertia::render( 'Image/Index', array( 'images' => $images ) );
	}

	public function create() {
		return Inertia::render( 'Image/Create' );
	}

	public function store( StoreImage $request ) {

		$image_path = '';

		if ( $request->hasFile( 'image' ) ) {
			$image_path = $request->file( 'image' )->store( 'image', 'public' );
		}

		$data = Image::create(
			array(
				'image' => $image_path,
			)
		);

		return Redirect::route( 'image.index' );
	}
}

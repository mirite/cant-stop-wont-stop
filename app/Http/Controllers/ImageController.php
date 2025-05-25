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

	/**
	 * Get the photos to display.
	 *
	 * TODO: Find out how Laravel does this properly.
	 *
	 * @return array<array{src:string,title:string,date:int,className:string,description?:string}>> The photo data.
	 */
	public static function get(): array {

		/**
		 * Converts a textual date into a time-stamp.
		 *
		 * @param string $date The textual date.
		 * @return The time-stamp.
		 */
		$date_to_timestamp = function ( string $date ) {
			$time_zone = new \DateTimeZone( 'America/Toronto' );
			return new \DateTimeImmutable( $date, $time_zone )->getTimestamp();
		};
		$images            = array();
		$root_dir          = __DIR__ . '/../../../public/images/';
		$handle            = opendir( $root_dir );
		if ( $handle ) {

			while ( false !== ( $entry = readdir( $handle ) ) ) {
				$full_path = $root_dir . $entry;
				if ( str_starts_with( mime_content_type( $full_path ), 'image' ) ) {
					list($width, $height) = getimagesize( $full_path );

					$images[] = array(
						'src'    => $entry,
						'title'  => '',
						'width'  => $width,
						'height' => $height,
						'date'   => $date_to_timestamp( 'March 1, 2023' ),
					);
				}
			}

			closedir( $handle );
		}
		return $images;
	}
}

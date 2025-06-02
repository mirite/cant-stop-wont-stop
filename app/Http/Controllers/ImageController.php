<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreImage;
use App\Models\Image;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class ImageController extends Controller {

	public function create() {
		return Inertia::render( 'Image/Create' );
	}

	/**
	 * Get the photos to display.
	 *
	 * TODO: Find out how Laravel does this properly.
	 *
	 * @return array<array{src:string,title:string,date:int,className:string,description?:string}>> The photo data.
	 */
	public static function get(): array {

		$images   = array();
		$root_dir = __DIR__ . '/../../../public/images/';
		$handle   = opendir( $root_dir );

		if ( $handle ) {

			while ( false !== ( $entry = readdir( $handle ) ) ) {
				$full_path = $root_dir . $entry;

				if ( str_starts_with( mime_content_type( $full_path ), 'image' ) ) {
					$images[] = self::get_image_info( $root_dir, $entry );
				}
			}

			closedir( $handle );
		}

		return $images;
	}

	public function index() {
		$images = Image::latest()->get();

		return Inertia::render( 'Image/Index', array( 'images' => $images ) );
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
	 * Converts a textual date into a time-stamp.
	 *
	 * @param string $date The textual date.
	 * @return The time-stamp.
	 */
	private static function date_to_timestamp( string $date ): int {
		$time_zone = new \DateTimeZone( 'America/Toronto' );

		return new \DateTimeImmutable( $date, $time_zone )->getTimestamp();
	}

	/**
	 * Gets information about the file such as size and title.
	 *
	 * @param string $root_dir The path to the photos directory.
	 * @param string $entry The name of the photo to get the info for.
	 * @return The info.
	 */
	private static function get_image_info( string $root_dir, string $entry ): array {
		$full_path              = $root_dir . $entry;
		list( $width, $height ) = getimagesize( $full_path );
		$title                  = '';
		$date                   = self::date_to_timestamp( 'January 28, 2023' );
		$path_parts             = pathinfo( $full_path );
		$meta_path              = $root_dir . $path_parts['filename'] . '.json';

		if ( file_exists( $meta_path ) ) {
			$meta_raw = file_get_contents( $meta_path );
			$parsed   = json_decode( $meta_raw );
			$title    = $parsed->title;
			$date     = self::date_to_timestamp( $parsed->date );
		}

		return array(
			'src'    => $entry,
			'title'  => $title,
			'width'  => $width,
			'height' => $height,
			'date'   => $date,
		);
	}
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreImage;
use App\Models\Image;
use Illuminate\Support\Facades\{Redirect, Storage};
use Inertia\Inertia;

/**
 * Controller for the Image gallery functionality.
 */
class ImageController extends Controller {

	/**
	 * A list of pre-approved email addresses.
	 *
	 * @var array<int, string>
	 */
	private const PRE_APPROVED_EMAILS = array(
		'jconner90@gmail.com',
		'another-admin@example.com',
	);

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
		$images = Image::where( 'is_approved', true )->latest()->get();

		$photo_data = $images->map(
			function ( Image $image ) {
				return array(
					'src'    => Storage::url( $image->image ),
					'title'  => $image->title,
					'width'  => $image->width,
					'height' => $image->height,
					'date'   => $image->created_at->getTimestamp(),
				);
			}
		)->all();
		$photo_data = array_merge( self::get(), $photo_data );

		return Inertia::render(
			'PhotosUpload',
			array(
				'phpVersion'   => PHP_VERSION,
				'theme'        => 'green',
				'photos'       => $photo_data,
				'uploadStatus' => session( 'upload_status' ),
			),
		);
	}

	public function store( StoreImage $request ) {
		$image_uploaded = false;
		$email          = $request->validated( 'email' );

		$is_approved = in_array( $email, self::PRE_APPROVED_EMAILS, true );

		if ( $request->hasFile( 'images' ) ) {
			/** @var array<\Illuminate\Http\UploadedFile> $files */
			$files = $request->file( 'images' );

			foreach ( $files as $file ) {
				$image_path             = $file->store( 'image', 'public' );
				list( $width, $height ) = getimagesize( $file->getRealPath() );

				Image::create(
					array(
						'image'       => $image_path,
						'title'       => $request->input( 'title', $file->getClientOriginalName() ),
						'width'       => $width,
						'height'      => $height,
						'email'       => $email,           // <-- Save the email
						'is_approved' => $is_approved,      // <-- Save the approval status
					)
				);
			}

			$image_uploaded = count( $files ) > 0;
		}

		if ( $image_uploaded ) {
				$status = $is_approved ? 'approved' : 'pending';

				return Redirect::route( 'image.index' )->with( 'upload_status', $status );
		}

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

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
		 * Converts a textual date into a timestamp.
		 *
		 * @param string $date The textual date.
		 * @return The timestamp.
		 */
		$date_to_timestamp = function ( string $date ) {
			$time_zone = new \DateTimeZone( 'America/Toronto' );
			return new \DateTimeImmutable( $date, $time_zone )->getTimestamp();
		};

		return array(
			array(
				'src'   => '20230309_183922.jpg',
				'title' => 'On the Spencer Smith Park Piere',
				'date'  => $date_to_timestamp( 'March 9, 2023' ),
			),
			array(
				'src'   => '20230318_145222.jpg',
				'title' => 'At Disney on Ice',
				'date'  => $date_to_timestamp( 'March 18, 2023' ),
			),
			array(
				'src'       => '20230610_174126.jpg',
				'title'     => 'At Laurier, Just Cuz',
				'className' => 'object-bottom',
				'date'      => $date_to_timestamp( 'June 10, 2023' ),
			),
			array(
				'src'   => '20230714_182203.jpg',
				'title' => 'Niagra Falls',
				'date'  => $date_to_timestamp( 'July 14, 2023' ),
			),
			array(
				'src'   => '20230819_134223.jpg',
				'title' => 'Hiking the Bruce Trail',
				'date'  => $date_to_timestamp( 'August 19, 2023' ),
			),
			array(
				'src'   => '20231014_155718.jpg',
				'title' => 'Fall Camping in Algonquin',
				'date'  => $date_to_timestamp( 'October 14, 2023' ),
			),
			array(
				'src'   => '20231014_164856.jpg',
				'title' => "Hiking Booth's Rock",
				'date'  => $date_to_timestamp( 'October 14, 2023' ),
			),
			array(
				'src'   => '20241026_202809.jpg',
				'title' => 'The Dairy Queen and Burger King',
				'date'  => $date_to_timestamp( 'October 26, 2024' ),
			),
			array(
				'src'       => '20231210_201455.jpg',
				'title'     => 'Winterfest at Wonderland',
				'className' => 'object-bottom',
				'date'      => $date_to_timestamp( 'December 10, 2023' ),
			),
			array(
				'src'   => '481336465_9873917365960392_4461144057522829076_n.jpg',
				'title' => 'Race Day at the Chili',
				'date'  => $date_to_timestamp( 'March 2, 2025' ),
			),
			array(
				'src'   => '462572575_9080327988652671_268767077185305630_n.jpg',
				'title' => 'Engagement Ring',
				'date'  => $date_to_timestamp( 'October 21, 2024' ),
			),
			array(
				'src'   => '462578838_9080327998652670_4150079677673872191_n.jpg',
				'title' => 'Engagement Ring With People',
				'date'  => $date_to_timestamp( 'October 21, 2024' ),
			),
			array(
				'src'       => '463216189_9080327985319338_1606559593105980768_n.jpg',
				'title'     => 'Fritz Looking Glamorous',
				'className' => 'object-bottom',
				'date'      => $date_to_timestamp( 'October 21, 2024' ),
			),
			array(
				'src'   => '463868643_9080327995319337_7660532591378465189_n.jpg',
				'title' => 'Love is in the Keyboard',
				'date'  => $date_to_timestamp( 'October 21, 2024' ),
			),
			array(
				'src'   => '463869396_9080328001986003_5384596525598605006_n.jpg',
				'title' => 'I Said Yes',
				'date'  => $date_to_timestamp( 'October 21, 2024' ),
			),
			array(
				'src'   => '464079638_9080327991986004_2521103127080810601_n.jpg',
				'title' => 'Smiling in the Sun',
				'date'  => $date_to_timestamp( 'October 21, 2024' ),
			),
		);
	}
}

import type { ReactElement } from "react";

import type { PhotoProps } from "@/types/photos";

import Photo from "./Photo";


type Props = {
	photos: PhotoProps[];
};

/**
 * A grid of our photos.
 *
 * @param props The photos to display.
 * @returns The component.
 */
export default function PhotoGrid(props: Props): ReactElement {
	const { photos } = props;
	return (
		<div className="mx-auto grid grid-cols-[repeat(auto-fit,512px)] place-content-center">
			{photos.map((image) => (
				<Photo key={image.src} {...image} />
			))}
		</div>
	);
}

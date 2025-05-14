import { type ReactElement, useState } from "react";

import type { PhotoProps } from "@/types/photos";

import LightboxPhoto from "./LightboxPhoto";
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
	const { length } = photos;
	const [state, setState] = useState({ index: 0, isOpen: false });

	document
		.querySelector("body")
		?.classList[state.isOpen ? "add" : "remove"]("overflow-clip");
	return (
		<div className="mx-auto grid place-content-center gap-4 sm:grid-cols-[repeat(auto-fit,500px)]">
			{state.isOpen === true && (
				<LightboxPhoto
					isEnd={state.index === length - 1}
					isStart={state.index === 0}
					onClose={() => setState({ ...state, isOpen: false })}
					onNext={() =>
						setState({
							...state,
							index: Math.min(length - 1, state.index + 1),
						})
					}
					onPrevious={() =>
						setState({ ...state, index: Math.max(0, state.index - 1) })
					}
					{...photos[state.index]}
				/>
			)}
			{photos.map((image, index) => (
				<Photo
					key={image.src}
					onOpen={() => setState({ ...state, index, isOpen: true })}
					{...image}
				/>
			))}
		</div>
	);
}

import type { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import type { PhotoProps } from "@/types/photos";
/**
 * A photo in the photo-grid.
 *
 * @param props The image properties.
 * @returns The component.
 */
export default function Photo(props: PhotoProps): ReactElement {
	const { className: extendedClassName, src, ...rest } = props;
	const className = twMerge(
		"size-[512px] max-w-full object-cover",
		extendedClassName,
	);
	return (
		<div>
			<img
				src={`/images/${src}`}
				alt=""
				width={512}
				height={512}
				className={className}
				{...rest}
			/>
		</div>
	);
}

import { type ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import type { PhotoProps } from "@/types/photos";

type Props = PhotoProps & { onOpen: () => void };

/**
 * A photo in the photo-grid.
 *
 * @param props The image properties.
 * @returns The component.
 */
export default function Photo(props: Props): ReactElement {
	const { className: extendedClassName, src, onOpen, ...rest } = props;
	const className = twMerge(
		"size-[512px] max-w-full object-cover",
		extendedClassName,
	);

	return (
		<div className="leading-0">
			<button type="button" className="cursor-pointer" onClick={onOpen}>
				<img
					src={`/images/${src}`}
					alt=""
					width={500}
					height={500}
					className={className}
					{...rest}
				/>
			</button>
		</div>
	);
}

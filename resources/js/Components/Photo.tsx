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
	const { className: extendedClassName, onOpen, src, ...rest } = props;
	const className = twMerge(
		"size-[512px] max-w-full object-cover",
		extendedClassName,
	);

	return (
		<div className="leading-0">
			<button className="cursor-pointer" onClick={onOpen} type="button">
				<img
					alt=""
					className={className}
					height={500}
					src={`/images/${src}`}
					width={500}
					{...rest}
				/>
			</button>
		</div>
	);
}

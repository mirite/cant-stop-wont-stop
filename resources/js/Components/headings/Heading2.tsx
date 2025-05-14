import type { HTMLAttributes, ReactElement } from "react";

import { twMerge } from "tailwind-merge";

/**
 * A level two heading
 *
 * @param props The heading props.
 * @returns The heading.
 */
export default function Heading2(
	props: HTMLAttributes<HTMLHeadingElement>,
): ReactElement {
	const { className: extendedClassName, ...rest } = props;
	return (
		<h2
			{...rest}
			className={twMerge(
				"text-center text-3xl font-bold uppercase",
				extendedClassName,
			)}
		/>
	);
}

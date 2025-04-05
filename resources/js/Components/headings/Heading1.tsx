import type { HTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

/**
 * A level 1 heading.
 *
 * @param props The heading props.
 * @returns The heading component.
 */
export default function Heading1(
	props: HTMLAttributes<HTMLHeadingElement>,
): ReactElement {
	const { className: extendedClassName, ...rest } = props;
	return (
		<h1
			className={twMerge(
				"mb-4 text-center text-4xl font-bold uppercase",
				extendedClassName,
			)}
			{...rest}
		/>
	);
}

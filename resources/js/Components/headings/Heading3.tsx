import type { HTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

/**
 * A level 3 heading.
 *
 * @param props The heading props.
 * @returns The heading component.
 */
export default function Heading3(
	props: HTMLAttributes<HTMLHeadingElement>,
): ReactElement {
	const { className: extendedClassName, ...rest } = props;
	return (
		<h3
			className={twMerge(
				"text-center text-2xl font-bold break-all uppercase",
				extendedClassName,
			)}
			{...rest}
		/>
	);
}

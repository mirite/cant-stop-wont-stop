import type { HTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

/** @param props */
export default function Heading3(
	props: HTMLAttributes<HTMLHeadingElement>,
): ReactElement {
	const { className: extendedClassName, ...rest } = props;
	return (
		<h3
			className={twMerge(
				"text-center text-2xl font-bold uppercase",
				extendedClassName,
			)}
			{...rest}
		/>
	);
}

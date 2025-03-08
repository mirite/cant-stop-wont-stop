import type { HTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

/** @param props */
export default function Heading1(
	props: HTMLAttributes<HTMLHeadingElement>,
): ReactElement {
	const { className: extendedClassName, ...rest } = props;
	return (
		<h1
			className={twMerge(
				"text-center text-4xl font-bold uppercase",
				extendedClassName,
			)}
			{...rest}
		/>
	);
}

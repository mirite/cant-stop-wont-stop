import type { HTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import Heading2 from "./headings/Heading2";

/**
 * A details section.
 *
 * @param props The heading text and additional div props.
 * @returns The component.
 */
export default function Section(
	props: HTMLAttributes<HTMLDivElement> & { heading: string },
): ReactElement {
	const { className: extendedClassName, heading, children, ...rest } = props;
	return (
		<div
			className={twMerge(
				"mb-8 flex max-w-fit flex-col items-center place-self-center",
				extendedClassName,
			)}
			{...rest}
		>
			<Heading2 className="mb-4">{heading}</Heading2>
			{children}
		</div>
	);
}

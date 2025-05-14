import type { HTMLAttributes, ReactElement } from "react";

import { twMerge } from "tailwind-merge";

/**
 * A paragraph for readable text.
 *
 * @param props Paragraph properties.
 * @returns The component.
 */
export default function Paragraph(
	props: HTMLAttributes<HTMLParagraphElement>,
): ReactElement {
	const { className: extendedClassName, ...rest } = props;
	return (
		<p
			className={twMerge(
				"mb-2 max-w-[80ch] tracking-normal",
				extendedClassName,
			)}
			{...rest}
		/>
	);
}

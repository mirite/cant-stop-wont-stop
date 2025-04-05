import type { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import type { ButtonProps } from "@/linkHelpers";
import { getLinkElement } from "@/linkHelpers";

/**
 * An anchor styled as a button.
 *
 * @param props The default anchor props.
 * @returns The component.
 */
export default function Button(props: ButtonProps): ReactElement {
	const { className: extendedClassName, useNative = false, ...rest } = props;
	const Element = getLinkElement(useNative);
	return (
		<Element
			className={twMerge(
				"bg-primary/20 hover:bg-primary hover:text-neutral rounded-full px-8 py-1 text-center text-xl font-bold uppercase transition-all",
			)}
			{...rest}
		/>
	);
}

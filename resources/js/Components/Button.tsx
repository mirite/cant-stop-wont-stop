import { Link } from "@inertiajs/react";
import type { ComponentProps, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

/**
 * An anchor styled as a button.
 *
 * @param props The default anchor props.
 * @returns The component.
 */
export default function Button(
	props: ComponentProps<typeof Link>,
): ReactElement {
	const { className: extendedClassName, ...rest } = props;
	return (
		<Link
			className={twMerge(
				"bg-primary/20 hover:bg-primary hover:text-neutral rounded-full px-8 py-1 text-xl font-bold uppercase transition-all",
			)}
			{...rest}
		/>
	);
}

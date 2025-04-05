import { Link } from "@inertiajs/react";
import type { AnchorHTMLAttributes, ComponentProps, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = Omit<ComponentProps<typeof Link>, "as" | "method" | "ref"> &
	AnchorHTMLAttributes<HTMLAnchorElement> & { useNative?: boolean };

/**
 * An anchor styled as a button.
 *
 * @param props The default anchor props.
 * @returns The component.
 */
export default function Button(props: ButtonProps): ReactElement {
	const { className: extendedClassName, useNative = false, ...rest } = props;
	const Element = useNative ? "a" : Link;
	return (
		<Element
			className={twMerge(
				"bg-primary/20 hover:bg-primary hover:text-neutral rounded-full px-8 py-1 text-center text-xl font-bold uppercase transition-all",
			)}
			{...rest}
		/>
	);
}

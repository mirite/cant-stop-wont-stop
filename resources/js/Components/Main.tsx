import type { PropsWithChildren, ReactElement } from "react";

/**
 * The main HTML element.
 *
 * @param props The component children.
 * @returns The element.
 */
export default function Main(props: PropsWithChildren): ReactElement {
	const { children } = props;
	return (
		<main className="relative container mx-auto grow px-2 lg:px-0">
			{children}
		</main>
	);
}

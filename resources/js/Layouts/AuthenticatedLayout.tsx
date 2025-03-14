import { usePage } from "@inertiajs/react";
import type { PropsWithChildren, ReactElement, ReactNode } from "react";

/**
 * @param root0
 * @param root0.header
 * @param root0.children
 */
export default function Authenticated({
	children,
}: PropsWithChildren<{ header?: ReactNode }>): ReactElement {
	const user = usePage().props.auth.user;

	return (
		<main>
			{user?.name}
			{children}
		</main>
	);
}

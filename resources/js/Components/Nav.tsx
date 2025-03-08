import { Link } from "@inertiajs/react";
import type { ReactElement } from "react";

import type { NavLinkProps } from "../types/navigation";

type Props = { pages: NavLinkProps[] };
/**
 * Displays a page navigation.
 *
 * @param props The navigation items.
 * @returns The component.
 */
export default function Nav(props: Props): ReactElement {
	return (
		<nav className="flex list-none gap-4">
			{props.pages.map((page) => (
				<NavLink key={page.text} {...page} />
			))}
		</nav>
	);
}

/**
 * Displays a link in the navigation.
 *
 * @param props The nav link props.
 * @returns The component.
 */
function NavLink(props: NavLinkProps): ReactElement {
	return (
		<li>
			<Link
				className="text-neutral text-xl font-bold uppercase"
				href={props.href}
			>
				{props.text}
			</Link>
		</li>
	);
}

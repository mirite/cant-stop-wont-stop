import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePage } from "@inertiajs/react";
import { useState, type ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import { getLinkElement } from "@/linkHelpers";

import type { NavLinkProps } from "../types/navigation";

type Props = { pages: NavLinkProps[] };
/**
 * Displays a page navigation.
 *
 * @param props The navigation items.
 * @returns The component.
 */
export default function Nav(props: Props): ReactElement {
	const [isClosed, setIsClosed] = useState(true);

	return (
		<div className="relative">
			<nav
				className={twMerge(
					"bg-primary fixed inset-0 z-10 flex list-none flex-col items-center justify-center gap-4 md:static md:flex md:flex-row md:bg-transparent",
					isClosed && "hidden",
				)}
			>
				{props.pages.map((page) => (
					<NavLink key={page.text} {...page} />
				))}
			</nav>
			<button
				className="relative z-20 mr-2 cursor-pointer text-2xl font-bold md:hidden"
				type="button"
				onClick={() => setIsClosed(!isClosed)}
				title={isClosed ? "Open Menu" : "Close Menu"}
			>
				<FontAwesomeIcon icon={isClosed ? faBars : faX} />
			</button>
		</div>
	);
}

/**
 * Displays a link in the navigation.
 *
 * @param props The nav link props.
 * @returns The component.
 */
function NavLink(props: NavLinkProps): ReactElement {
	const { url } = usePage();
	const Element = getLinkElement(props.href.startsWith("https://"));
	return (
		<li>
			<Element
				className={twMerge(
					"text-neutral text-xl font-bold uppercase decoration-1 underline-offset-10",
					url === props.href && "underline",
				)}
				href={props.href}
			>
				{props.text}
			</Element>
		</li>
	);
}

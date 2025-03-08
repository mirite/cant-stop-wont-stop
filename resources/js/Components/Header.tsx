import { Link } from "@inertiajs/react";
import type { ReactElement, CSSProperties } from "react";

import RedPattern from "../red-pattern.svg";
/**
 * The site header
 *
 * @returns The component.
 */
export function Header(): ReactElement {
	return (
		<header
			className="text-neutral relative mb-[calc(var(--logo-height)/2)] h-[33vh] [background-image:var(--pattern)] p-8"
			style={
				{
					"--logo-width": "400px",
					"--logo-height": "800px",
					"--pattern": `url(${RedPattern})`,
				} as CSSProperties
			}
		>
			<div className="container mx-auto flex items-center justify-between gap-4">
				<img width={64} height={64} />
				<Link href={"/"} className="mr-auto text-xl font-bold uppercase">
					Jesse &amp; Bailey
				</Link>
				<Nav />
			</div>
			<div className="absolute top-1/2 -bottom-1/2 left-[calc(50%-var(--logo-width)/2)] mx-auto w-(--logo-width) bg-white" />
		</header>
	);
}
const pages = [
	{ href: "/", text: "Info" },
	{ href: "/photos", text: "Photos" },
	{ href: "/", text: "RSVP" },
	{ href: "/about", text: "Our Story" },
];
function Nav(): ReactElement {
	return (
		<nav className="flex list-none gap-4">
			{pages.map((page) => (
				<NavLink href={page.href} text={page.text} />
			))}
		</nav>
	);
}

type NavLinkProps = {
	href: string;
	text: string;
};

/** @param props */
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

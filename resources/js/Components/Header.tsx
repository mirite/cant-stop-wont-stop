import type { CSSProperties, ReactElement } from "react";

import { Link } from "@inertiajs/react";

import type { PageProps } from "@/types";

import Nav from "@/Components/Nav";
import { pages } from "@/types/navigation";
import { useTheme } from "@/useTheme";

import Divider from "./Divider";
import Section from "./Section";

/**
 * The site header
 *
 * @param props The page props from the layout.
 * @returns The component.
 */
export function Header(props: PageProps): ReactElement {
	const { classes, date, logo, pattern } = useTheme(props);
	return (
		<div className="[--header-height:calc(var(--inner-header-height)+(var(--logo-height)/2))] [--inner-header-height:142px] [--logo-height:min(400px,calc(60vw*1.63))] md:[--logo-height:min(600px,calc(33vw*1.63))]">
			<header
				className={`relative h-(--header-height) [background-image:var(--pattern)] text-neutral ${classes} bg-primary`}
				style={{ "--pattern": `url(${pattern})` } as CSSProperties}
			>
				<div className="container mx-auto flex h-(--inner-header-height) items-center justify-between gap-4 p-4">
					<img className="pb-8" height={64} src={logo} width={64} />
					<Link className="mr-auto text-xl font-bold uppercase" href={"/"}>
						Jesse &amp; Bailey
					</Link>
					<Nav pages={pages} />
				</div>
			</header>
			<div className="mx-auto mb-8 grid min-h-[calc(var(--logo-height)/2)] max-w-6xl grid-rows-3 md:grid-cols-3 md:grid-rows-1 md:gap-4">
				<Section className="order-2 pt-6 md:order-none md:pt-10" heading="When">
					<span className="text-3xl font-semibold uppercase">Oct 5, 2025</span>
					<Divider />
					<span className="text-3xl uppercase">3:45PM</span>
					<span className="font-semibold uppercase">Reception to Follow</span>
				</Section>
				<div className="relative order-first flex md:order-none">
					<div className="absolute inset-x-0 -top-[calc(var(--logo-height)/2)] bottom-0 mx-auto h-(--logo-height)">
						<img className="mx-auto h-full w-auto" src={date} />
					</div>
				</div>
				<Section className="order-last md:order-none md:pt-10" heading="Where">
					<span className="text-3xl uppercase">The Barn</span>
					<span className="text-3xl uppercase">Event Space</span>
					<Divider />
					<span className="font-semibold uppercase">122 Ashworth Rd.</span>
					<span className="font-semibold uppercase">Mount Albert</span>
				</Section>
			</div>
		</div>
	);
}

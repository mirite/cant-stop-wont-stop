import { Link } from "@inertiajs/react";
import type { CSSProperties, ReactElement } from "react";

import Nav from "@/Components/Nav";
import type { PageProps } from "@/types";
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
	const { pattern, logo, classes, date } = useTheme(props);
	return (
		<div>
			<header
				className={`text-neutral relative h-[min(33vh,400px)] [background-image:var(--pattern)] p-4 ${classes} bg-primary`}
				style={{ "--pattern": `url(${pattern})` } as CSSProperties}
			>
				<div className="container mx-auto flex items-center justify-between gap-4">
					<img src={logo} width={64} height={64} className="pb-8" />
					<Link href={"/"} className="mr-auto text-xl font-bold uppercase">
						Jesse &amp; Bailey
					</Link>
					<Nav pages={pages} />
				</div>
			</header>
			<div className="container mx-auto mb-8 grid grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
				<Section heading="When" className="order-2 pt-10 md:order-none">
					<span className="text-3xl font-semibold uppercase">Oct 5, 2025</span>
					<Divider />
					<span className="text-3xl uppercase">3:30 PM</span>
					<span className="text-secondary font-semibold uppercase">
						Reception to Follow
					</span>
				</Section>
				<div className="relative order-first md:order-none">
					<div className="absolute inset-x-0 -top-1/2 bottom-0 mx-auto md:-top-2/3 xl:-top-full">
						<img src={date} className="mx-auto h-full w-auto" />
					</div>
				</div>
				<Section heading="Where" className="order-last pt-10 md:order-none">
					<span className="text-3xl uppercase">The Barn</span>
					<span className="text-3xl uppercase">Event Space</span>
					<Divider />
					<span className="text-secondary font-semibold uppercase">
						122 Ashworth Rd.
					</span>
					<span className="text-secondary font-semibold uppercase">
						Mount Albert
					</span>
				</Section>
			</div>
		</div>
	);
}

import { Link } from "@inertiajs/react";
import type { ReactElement } from "react";

import Nav from "@/Components/Nav";
import { pages } from "@/types/navigation";
/**
 * The site header
 *
 * @returns The component.
 */
export function Header(): ReactElement {
	return (
		<header className="text-neutral bg-primary bg-fill relative h-[33vh] [background-image:var(--pattern)] p-8">
			<div className="container mx-auto flex items-center justify-between gap-4">
				<img width={64} height={64} />
				<Link href={"/"} className="mr-auto text-xl font-bold uppercase">
					Jesse &amp; Bailey
				</Link>
				<Nav pages={pages} />
			</div>
		</header>
	);
}

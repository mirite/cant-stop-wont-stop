import { Link } from "@inertiajs/react";
import type { CSSProperties, ReactElement } from "react";

import Nav from "@/Components/Nav";
import { pages } from "@/types/navigation";
import { useTheme } from "@/useTheme";
/**
 * The site header
 *
 * @returns The component.
 */
export function Header(): ReactElement {
	const { pattern, logo, classes } = useTheme();
	return (
		<header
			className={`text-neutral relative h-[33vh] [background-image:var(--pattern)] p-4 ${classes} bg-primary`}
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
	);
}

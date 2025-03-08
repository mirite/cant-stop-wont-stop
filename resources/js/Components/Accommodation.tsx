import type { ReactElement } from "react";

import Button from "@/Components/Button";
import Heading3 from "@/Components/headings/Heading3";

/**
 * An accommodation listing.
 *
 * @returns The component,
 */
export default function Accommodation(): ReactElement {
	return (
		<div className="border-b-primary @2xl:border-r-primary flex w-full flex-col items-center border-b-1 py-8 last:border-b-0 @2xl:border-r-1 @2xl:border-b-0 @2xl:px-8 @2xl:py-0 @2xl:last:border-r-0">
			<Heading3>Placeholder</Heading3>
			<span className="text-secondary uppercase">109 Niska Drive</span>
			<span className="text-secondary uppercase">109 Niska Drive</span>
			<span className="text-secondary uppercase">109 Niska Drive</span>
			<br />
			<span className="text-secondary text-2xl font-bold uppercase">
				22 Min Drive
			</span>
			<br />
			<Button href="/">Book Now</Button>
		</div>
	);
}

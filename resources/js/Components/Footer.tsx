import type { ReactElement } from "react";

/**
 * The website footer.
 *
 * @returns The footer component.
 */
export default function Footer(): ReactElement {
	return (
		<footer className="container mx-auto p-4 text-center">
			Copyright © {new Date().getFullYear()}, Jesse Conner &amp; Bailey Few
		</footer>
	);
}

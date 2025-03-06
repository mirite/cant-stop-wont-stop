import type { ReactElement } from "react";

/**
 * The home page component.
 *
 * @returns The component.
 */
export default function Welcome(): ReactElement {
	return (
		<div className="text-brown flex min-h-dvh w-full flex-col *:w-full">
			<header className="bg-taracota h-[33vh]">Hi</header>
			<main>By</main>
		</div>
	);
}

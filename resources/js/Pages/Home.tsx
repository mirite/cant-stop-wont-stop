import type { CSSProperties, ReactElement } from "react";

/**
 * The home page component.
 *
 * @returns The component.
 */
export default function Home(): ReactElement {
	return (
		<div className="text-brown flex min-h-dvh w-full flex-col *:w-full">
			<header
				className="bg-taracota mb-[calc(var(--logo-height)/2)] h-[33vh]"
				style={
					{ "--logo-width": "400px", "--logo-height": "800px" } as CSSProperties
				}
			>
				<div className="relative container mx-auto h-full text-center">
					<div className="absolute bottom-[calc(-1*var(--logo-height)/2)] left-[calc(50%-var(--logo-width)/2)] mx-auto h-(--logo-height) w-(--logo-width) bg-white"></div>
				</div>
			</header>
			<main className="container mx-auto grow">By</main>
			<footer className="container mx-auto text-center">{Date.now()}</footer>
		</div>
	);
}

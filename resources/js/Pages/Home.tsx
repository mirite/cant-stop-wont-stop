import type { HTMLAttributes, PropsWithChildren, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import Heading2 from "@/Components/headings/Heading2";
import Heading3 from "@/Components/headings/Heading3";

import Layout from "../Layouts/GuestLayout";

/**
 * The home page component.
 *
 * @returns The component.
 */
export default function Home(): ReactElement {
	return (
		<Layout>
			<div className="grid grid-cols-3 gap-4">
				<Section heading="When">
					<span className="text-3xl font-bold uppercase">Oct 5, 2025</span>
					<Divider />
					<span className="text-3xl uppercase">3:30 PM</span>
					<span className="text-brown font-semibold uppercase">
						Reception to Follow
					</span>
				</Section>
				<div />
				<Section heading="Where">
					<span className="text-3xl uppercase">The Barn</span>
					<span className="text-3xl uppercase">Event Space</span>
					<Divider />
					<span className="text-brown font-semibold uppercase">
						122 Ashworth Rd.
					</span>
					<span className="text-brown font-semibold uppercase">
						Mount Albert
					</span>
				</Section>
			</div>
			<Section heading="Accommodations" className="w-full max-w-full">
				<div className="grid w-full @2xl:grid-cols-3">
					<Accomondation />
					<Accomondation />
					<Accomondation />
				</div>
			</Section>
			<Section heading="Directions" />
		</Layout>
	);
}

/**
 *
 */
function Accomondation() {
	return (
		<div className="border-b-taracota @2xl:border-r-taracota flex w-full flex-col items-center border-b-1 py-8 last:border-b-0 @2xl:border-r-1 @2xl:border-b-0 @2xl:px-8 @2xl:py-0 @2xl:last:border-r-0">
			<Heading3>Placeholder</Heading3>
			<span className="text-brown uppercase">109 Niska Drive</span>
			<span className="text-brown uppercase">109 Niska Drive</span>
			<span className="text-brown uppercase">109 Niska Drive</span>
			<br />
			<span className="text-brown text-2xl font-bold uppercase">
				22 Min Drive
			</span>
			<br />
			<a
				href="/"
				className="bg-taracota/20 bg-taracota hover:bg-taracota rounded-full px-8 py-1 font-bold uppercase transition-all hover:text-white"
			>
				Book Now
			</a>
		</div>
	);
}

/**
 *
 */
function Divider(): ReactElement {
	return <hr className="bg-taracota my-4 h-px w-4/5" />;
}

/**
 *
 * @param props
 */
function Section(
	props: HTMLAttributes<HTMLDivElement> & { heading: string },
): ReactElement {
	const { className: extendedClassName, heading, children, ...rest } = props;
	return (
		<div
			className={twMerge(
				"mb-8 flex max-w-fit flex-col items-center place-self-center",
				extendedClassName,
			)}
			{...rest}
		>
			<Heading2 className="mb-4">{heading}</Heading2>
			{children}
		</div>
	);
}

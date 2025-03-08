import type { ReactElement } from "react";

import Accommodation from "@/Components/Accommodation";
import Button from "@/Components/Button";
import Divider from "@/Components/Divider";
import Section from "@/Components/Section";

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
					<Accommodation />
					<Accommodation />
					<Accommodation />
				</div>
			</Section>
			<Section heading="Directions">
				<p className="text-brown uppercase">Placeholder text</p>
				<br />
				<Button href="/">Google Maps</Button>
			</Section>
		</Layout>
	);
}

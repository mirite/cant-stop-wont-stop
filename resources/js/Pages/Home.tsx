import { Head } from "@inertiajs/react";
import type { ReactElement } from "react";

import Accommodations from "@/Components/Accommodations";
import Button from "@/Components/Button";
import Divider from "@/Components/Divider";
import Section from "@/Components/Section";
import type { PageProps } from "@/types";
import { accommodations } from "@/types/accommodations";
import { useTheme } from "@/useTheme";

import Layout from "../Layouts/GuestLayout";

/**
 * The home page component.
 *
 * @param props
 * @returns The component.
 */
export default function Home(props: PageProps): ReactElement {
	const { date } = useTheme(props);
	return (
		<Layout {...props}>
			<Head title="Home" />
			<div className="mb-8 grid grid-cols-3 gap-4">
				<Section heading="When" className="pt-10">
					<span className="text-3xl font-semibold uppercase">Oct 5, 2025</span>
					<Divider />
					<span className="text-3xl uppercase">3:30 PM</span>
					<span className="text-secondary font-semibold uppercase">
						Reception to Follow
					</span>
				</Section>
				<div className="relative">
					<div className="absolute inset-x-0 -top-full bottom-0 mx-auto">
						<img src={date} className="mx-auto h-full w-auto" />
					</div>
				</div>
				<Section heading="Where" className="pt-10">
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
			<Accommodations accommodations={accommodations} />
			<Section heading="Directions">
				<p className="text-secondary uppercase">Placeholder text</p>
				<br />
				<Button href="/">Google Maps</Button>
			</Section>
		</Layout>
	);
}

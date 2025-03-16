import { Head } from "@inertiajs/react";
import type { ReactElement } from "react";

import Accommodations from "@/Components/Accommodations";
import Button from "@/Components/Button";
import Section from "@/Components/Section";
import type { PageProps } from "@/types";
import { accommodations } from "@/types/accommodations";

import Layout from "../Layouts/MainLayout";

/**
 * The home page component.
 *
 * @param props
 * @returns The component.
 */
export default function Home(props: PageProps): ReactElement {
	return (
		<Layout {...props}>
			<Head title="Home" />
			<Accommodations accommodations={accommodations} />
			<Section heading="Directions">
				<p className="text-secondary uppercase">Placeholder text</p>
				<br />
				<Button href="/">Google Maps</Button>
			</Section>
		</Layout>
	);
}

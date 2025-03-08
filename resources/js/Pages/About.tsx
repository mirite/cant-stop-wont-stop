import type { ReactElement } from "react";

import Heading1 from "@/Components/headings/Heading1";

import Layout from "../Layouts/GuestLayout";
/**
 * The our story page component.
 *
 * @returns The component.
 */
export default function About(): ReactElement {
	return (
		<Layout>
			<Heading1>Our Story</Heading1>
		</Layout>
	);
}

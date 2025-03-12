import { Head } from "@inertiajs/react";
import type { ReactElement } from "react";

import Heading1 from "@/Components/headings/Heading1";
import type { PageProps } from "@/types";

import Layout from "../Layouts/GuestLayout";
/**
 * The our story page component.
 *
 * @param props
 * @returns The component.
 */
export default function About(props: PageProps): ReactElement {
	return (
		<Layout {...props}>
			<Head title="Our Story" />
			<Heading1>Our Story</Heading1>
		</Layout>
	);
}

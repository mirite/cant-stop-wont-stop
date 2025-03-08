import { Head } from "@inertiajs/react";
import type { ReactElement } from "react";

import Heading1 from "@/Components/headings/Heading1";
import Layout from "@/Layouts/GuestLayout";
/**
 * The photo page component.
 *
 * @returns The component.
 */
export default function Photos(): ReactElement {
	return (
		<Layout>
			<Head title="Photos" />
			<Heading1>Photos</Heading1>
		</Layout>
	);
}

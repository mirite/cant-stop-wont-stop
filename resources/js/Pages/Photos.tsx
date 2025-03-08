import type { CSSProperties, ReactElement } from "react";

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
			<Heading1>Photos</Heading1>
		</Layout>
	);
}

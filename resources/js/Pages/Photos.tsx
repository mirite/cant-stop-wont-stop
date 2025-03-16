import { Head } from "@inertiajs/react";
import type { ReactElement } from "react";

import Heading1 from "@/Components/headings/Heading1";
import Layout from "@/Layouts/MainLayout";
import type { PageProps } from "@/types";
/**
 * The photo page component.
 *
 * @param props
 * @returns The component.
 */
export default function Photos(props: PageProps): ReactElement {
	return (
		<Layout {...props}>
			<Head title="Photos" />
			<Heading1>Photos</Heading1>
		</Layout>
	);
}

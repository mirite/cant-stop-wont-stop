import { Head } from "@inertiajs/react";
import type { ReactElement } from "react";

import Heading1 from "@/Components/headings/Heading1";
import PhotoGrid from "@/Components/PhotoGrid";
import Layout from "@/Layouts/MainLayout";
import type { PageProps } from "@/types";
import { photos } from "@/types/photos";

/**
 * The photo page component.
 *
 * @param props The page props.
 * @returns The component.
 */
export default function Photos(props: PageProps): ReactElement {
	return (
		<Layout {...props}>
			<Head title="Photos" />
			<Heading1 className="mb-4">Photos</Heading1>
			<PhotoGrid photos={photos} />
		</Layout>
	);
}

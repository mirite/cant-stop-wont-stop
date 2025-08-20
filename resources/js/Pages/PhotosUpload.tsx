import { Head } from "@inertiajs/react";
import type { ReactElement } from "react";

import Heading1 from "@/Components/headings/Heading1";
import ImageUploader from "@/Components/ImageUploader";
import type { PageProps } from "@/types";
import Layout from "../Layouts/MainLayout";

/**
 * The page for uploading new photos from the event.
 *
 * @param props The component props
 * @returns The component.
 */
export default function PhotosUpload(props: PageProps): ReactElement {
	return (
		<Layout {...props}>
			<Head title="Add Photos" />
			<Heading1>Add Photos</Heading1>
			<ImageUploader />
		</Layout>
	);
}

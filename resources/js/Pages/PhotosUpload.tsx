import { Head } from "@inertiajs/react";
import type { ReactElement } from "react";

import Heading1 from "@/Components/headings/Heading1";
import ImageUploader from "@/Components/ImageUploader";
import PhotoGrid from "@/Components/PhotoGrid";
import type { PageProps } from "@/types";
import type { PhotoProps } from "@/types/photos";
import Layout from "../Layouts/MainLayout";

/**
 * The page for uploading new photos from the event.
 *
 * @param props The component props
 * @returns The component.
 */
export default function PhotosUpload(
	props: PageProps<{ photos: PhotoProps[]; uploadStatus?: string }>,
): ReactElement {
	return (
		<Layout {...props}>
			<Head title="Add Photos" />
			<Heading1>Add Photos</Heading1>
			<ImageUploader uploadStatus={props.uploadStatus} />
			<PhotoGrid photos={props.photos} />
		</Layout>
	);
}

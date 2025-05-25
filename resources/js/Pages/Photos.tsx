import type { ReactElement } from "react";

import { Head } from "@inertiajs/react";

import type { PageProps } from "@/types";
import type { PhotoProps } from "@/types/photos";

import PhotoGrid from "@/Components/PhotoGrid";
import Layout from "@/Layouts/MainLayout";

/**
 * The photo page component.
 *
 * @param props The page props.
 * @returns The component.
 */
export default function Photos(
	props: PageProps & { photos: PhotoProps[] },
): ReactElement {
	const { photos, ...rest } = props;
	console.log(photos);
	return (
		<Layout {...rest}>
			<Head title="Photos" />
			<PhotoGrid photos={photos} />
		</Layout>
	);
}

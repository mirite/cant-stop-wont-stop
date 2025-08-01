import type { FormEvent, ReactElement } from "react";

import { Head, useForm } from "@inertiajs/react";

import type { PageProps } from "@/types";

import Heading1 from "@/Components/headings/Heading1";

import Layout from "../Layouts/MainLayout";

/**
 * The page for uploading new photos from the event.
 *
 * @param props The component props
 * @returns The component.
 */
export default function PhotosUpload(props: PageProps): ReactElement {
	const { post, progress, setData } = useForm({
		images: null as File[] | null,
	});
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		post("/");
	};
	return (
		<Layout {...props}>
			<Head title="Add Photos" />
			<Heading1>Add Photos</Heading1>
			<form
				className="flex items-center justify-center"
				onSubmit={handleSubmit}
			>
				<label htmlFor="fileInput">Photos:</label>
				<input
					accept="image/png, image/jpeg"
					id="fileInput"
					multiple={true}
					onChange={(e) =>
						setData("images", e.target.files ? Array.from(e.target.files) : [])
					}
					type="file"
				/>
				{progress ? (
					<progress max="100" value={progress.percentage}>
						{progress.percentage}%
					</progress>
				) : null}
			</form>
		</Layout>
	);
}

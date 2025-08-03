import type { AxiosProgressEvent } from "axios";
import type { ChangeEvent, FormEvent } from "react";

import { useForm } from "@inertiajs/react";

export type UseUploadFormResult<TData extends object> = {
	data: TData;
	errors: { [key in keyof TData]?: string };
	fileListText: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
	handleSubmit: (e: FormEvent) => unknown;
	hasImages: boolean;
	progress: AxiosProgressEvent | null;
	uploadButtonText: string;
};

/**
 * Handles the logic for the image uploads form.
 *
 * @param endpoint The API endpoint for posting the images to.
 * @returns The callbacks and status text for the form.
 */
export function useUploadForm(
	endpoint: string,
): UseUploadFormResult<{ images: File[] | null }> {
	const { data, errors, post, progress, setData } = useForm({
		images: null as File[] | null,
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData("images", e.target.files ? Array.from(e.target.files) : []);
	};
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		post(endpoint);
	};
	const hasImages = isContentful(data);
	const fileListText = hasImages
		? data.images.map((i) => i.name).join(", ")
		: "";
	const uploadButtonText =
		"Upload" + (hasImages ? ` ${data.images.length} files` : "");
	return {
		data,
		errors,
		fileListText,
		handleChange,
		handleSubmit,
		hasImages,
		progress,
		uploadButtonText,
	};
}

/**
 * Determines if the images attribute is populated with one or more files.
 *
 * @template TData The type of the form data object.
 * @param data The form data.
 * @returns True if there is one or more image.
 */
function isContentful<TData extends { images: File[] | null }>(
	data: TData,
): data is TData & { images: File[] } {
	return data.images !== null && data.images.length > 0;
}

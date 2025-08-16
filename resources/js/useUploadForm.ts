import { useForm } from "@inertiajs/react";
import type { AxiosProgressEvent } from "axios";
import type { ChangeEvent, FormEvent } from "react";

export type UseFormPayload = Record<string, File>;
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
): UseUploadFormResult<UseFormPayload> {
	const { data, errors, post, progress, setData } = useForm<UseFormPayload>({});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newFiles: UseFormPayload = {};
		for (const file of e.target.files || []) {
			newFiles[file.name] = file;
		}

		setData(newFiles);
	};
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		post(endpoint);
	};
	const hasImages = isContentful(data);
	const fileListText = hasImages ? Object.keys(data).join(", ") : "";
	const uploadButtonText =
		"Upload" + (hasImages ? ` ${Object.keys(data).length} files` : "");
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
function isContentful<TData extends UseFormPayload>(
	data: TData,
): data is TData & UseFormPayload {
	return Object.keys(data).length > 0;
}

import { useForm } from "@inertiajs/react";
import type { AxiosProgressEvent } from "axios";
import type { ChangeEvent, FormEvent } from "react";

const defaultPayload = {
	"cf-turnstile-response": "",
	email: "",
	images: {} as Record<string, File>,
};
export type UseFormPayload = typeof defaultPayload;
export type UseUploadFormResult<TData extends object> = {
	changeEmail: (e: ChangeEvent<HTMLInputElement>) => unknown;
	changeFiles: (e: ChangeEvent<HTMLInputElement>) => unknown;
	changeTurnstile: (e: string) => unknown;
	data: TData;
	errors: { [key in keyof TData]?: string };
	fileListText: string;
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
	const { data, errors, post, progress, setData } = useForm<UseFormPayload>({
		...defaultPayload,
	});

	const changeFiles = (e: ChangeEvent<HTMLInputElement>) => {
		const newState: UseFormPayload = { ...data, images: {} };
		for (const file of e.target.files || []) {
			newState.images[file.name] = file;
		}

		setData(newState);
	};
	const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, email: e.currentTarget.value });
	};
	const changeTurnstile = (e: string) => {
		setData({ ...data, "cf-turnstile-response": e });
	};
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		post(endpoint, {
			onSuccess: () => {
				setData({ ...defaultPayload });
			},
		});
	};
	const hasImages = isContentful(data);
	const fileListText = hasImages ? Object.keys(data.images).join(", ") : "";
	const count = Object.keys(data.images).length;
	const uploadButtonText =
		"Upload" + (hasImages ? ` ${count} file${count > 1 ? "s" : ""}` : "");
	return {
		changeEmail,
		changeFiles,
		changeTurnstile,
		data,
		errors,
		fileListText,
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
	return Object.keys(data.images).length > 0;
}

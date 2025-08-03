import type { ChangeEvent, FormEvent, ReactElement } from "react";

import { useForm } from "@inertiajs/react";

/**
 * Form for uploading new photos from the event.
 *
 * @returns The component.
 */
export default function ImageUploader(): ReactElement {
	const { data, errors, post, progress, setData } = useForm({
		images: null as File[] | null,
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData("images", e.target.files ? Array.from(e.target.files) : []);
	};
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		post("/capture");
	};
	const hasImages = isContentful(data);
	const fileListText = hasImages
		? data.images.map((i) => i.name).join(", ")
		: "";
	const uploadButtonText =
		"Upload" + (hasImages ? ` ${data.images.length} files` : "");
	return (
		<form
			className="mx-auto mb-4 flex max-w-3xl flex-col items-center justify-center gap-4 border border-solid p-4"
			onSubmit={handleSubmit}
		>
			<label className="cursor-pointer font-bold underline" htmlFor="fileInput">
				Choose Photos
			</label>
			<input
				accept="image/png, image/jpeg"
				className="hidden"
				id="fileInput"
				multiple={true}
				onChange={handleChange}
				type="file"
			/>
			{fileListText != "" && <span>{fileListText}</span>}
			<button
				className="cursor-pointer rounded-full bg-primary/20 px-8 py-1 text-center text-xl font-bold uppercase transition-all hover:bg-primary hover:text-neutral"
				disabled={!hasImages}
				type="submit"
			>
				{uploadButtonText}
			</button>
			{progress != undefined && (
				<progress max="100" value={progress.percentage}>
					{progress.percentage}%
				</progress>
			)}
			{errors.images ? (
				<div className="bg-amber-400 p-2">{errors.images}</div>
			) : null}
		</form>
	);
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

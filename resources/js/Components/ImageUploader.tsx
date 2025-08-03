import type { ReactElement } from "react";

import { useUploadForm } from "@/useUploadForm";

/**
 * Form for uploading new photos from the event.
 *
 * @returns The component.
 */
export default function ImageUploader(): ReactElement {
	const {
		errors,
		fileListText,
		handleChange,
		handleSubmit,
		hasImages,
		progress,
		uploadButtonText,
	} = useUploadForm("/capture");

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

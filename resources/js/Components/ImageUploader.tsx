import type { ReactElement } from "react";

import { useUploadForm } from "@/useUploadForm";

/**
 * Form for uploading new photos from the event.
 *
 * @returns The component.
 */
export default function ImageUploader(): ReactElement {
	const {
		changeEmail,
		changeFiles,
		data,
		errors,
		fileListText,
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
			<label className="cursor-pointer font-bold" htmlFor="email">
				Your Email
			</label>
			<input id="email" onChange={changeEmail} required type="email" />
			<label className="cursor-pointer font-bold underline" htmlFor="fileInput">
				Choose Photos
			</label>
			<input
				accept="image/png, image/jpeg"
				className="hidden"
				id="fileInput"
				multiple={true}
				onChange={changeFiles}
				type="file"
			/>
			{fileListText != "" && <span>{fileListText}</span>}
			<div
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className="cf-turnstile"
				data-callback="onSuccess"
				data-sitekey="0x4AAAAAABtXg9HPDsMQ2aD1"
				data-size="normal"
				data-theme="dark"
			/>
			<button
				className="cursor-pointer rounded-full bg-primary/20 px-8 py-1 text-center text-xl font-bold uppercase transition-all not-disabled:hover:bg-primary not-disabled:hover:text-neutral disabled:cursor-not-allowed disabled:opacity-70"
				disabled={!hasImages || !data.email}
				type="submit"
			>
				{uploadButtonText}
			</button>
			{progress != undefined && (
				<progress max="100" value={progress.percentage}>
					{progress.percentage}%
				</progress>
			)}
			{errors.files ? (
				<div className="bg-amber-400 p-2">{errors.files}</div>
			) : null}
		</form>
	);
}

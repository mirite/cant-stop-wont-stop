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
			className="mx-auto mb-4 flex max-w-3xl flex-col items-center justify-center gap-4 border border-solid p-8"
			onSubmit={handleSubmit}
		>
			<label
				className="cursor-pointer rounded-full bg-primary/20 px-8 py-1 text-center text-xl font-bold uppercase transition-all hover:bg-primary hover:text-neutral"
				htmlFor="fileInput"
			>
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
			{fileListText != "" && (
				<span className="tracking-normal">{fileListText}</span>
			)}
			<label className="cursor-pointer font-bold" htmlFor="emailInput">
				Your Email
			</label>
			<input
				className="w-sm rounded-md border-2 border-solid border-eucalyptus bg-white px-3 py-3 font-bold tracking-normal text-black focus:border-2 focus:border-eucalyptus focus:outline focus:outline-eucalyptus [&:user-invalid]:border-2 [&:user-invalid]:border-solid [&:user-invalid]:border-red-500 [&:user-invalid]:bg-white"
				id="email"
				onChange={changeEmail}
				placeholder="example@example.com"
				required
				type="emailInput"
			/>
			<div
				// eslint-disable-next-line tailwindcss/no-custom-classname
				className="cf-turnstile"
				data-callback="onSuccess"
				data-sitekey="0x4AAAAAABtXg9HPDsMQ2aD1"
				data-size="normal"
				data-theme="light"
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

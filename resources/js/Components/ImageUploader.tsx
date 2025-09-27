import type { ReactElement } from "react";
import Turnstile from "react-turnstile";

import { useUploadForm } from "@/useUploadForm";

/**
 * Form for uploading new photos from the event.
 *
 * @param root0
 * @param root0.uploadStatus
 * @returns The component.
 */
export default function ImageUploader({
	uploadStatus,
}: {
	uploadStatus?: string;
}): ReactElement {
	const {
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
	} = useUploadForm("/photos");
	const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as unknown;
	if (typeof siteKey !== "string") {
		return <span>Turnstile Site Key Not Set</span>;
	}
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
			<Turnstile
				onSuccess={(token) => {
					changeTurnstile(token);
				}}
				sitekey={siteKey}
				theme="light"
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
			{Object.entries(errors).map(([field, error]) => (
				<div className="bg-amber-400 p-2" key={field}>
					{error}
				</div>
			))}
			{uploadStatus === "approved" && (
				<div className="mx-auto mb-4 max-w-3xl border border-solid border-green-600 bg-green-100 p-4 text-center text-green-800">
					✅ Thank you for sharing your memories of our special day!
				</div>
			)}

			{uploadStatus === "pending" && (
				<div className="mx-auto mb-4 max-w-3xl border border-solid border-yellow-600 bg-yellow-100 p-4 text-center text-yellow-800">
					👍 Thank you for sharing your memories of our special day! Your photos
					are pending review and will appear in the gallery once approved.
				</div>
			)}
		</form>
	);
}

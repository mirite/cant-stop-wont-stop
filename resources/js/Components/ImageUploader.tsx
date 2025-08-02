import type { ChangeEvent, FormEvent, ReactElement } from "react";

import { useForm } from "@inertiajs/react";

/**
 * Form for uploading new photos from the event.
 *
 * @returns The component.
 */
export default function ImageUploader(): ReactElement {
	const { errors, post, progress, setData } = useForm({
		images: null as File[] | null,
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData("images", e.target.files ? Array.from(e.target.files) : []);
	};
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		post("/capture");
	};
	return (
		<form
			className="mx-auto mb-4 flex max-w-3xl flex-col items-center justify-center gap-4 border border-solid p-4"
			onSubmit={handleSubmit}
		>
			<label className="cursor-pointer font-bold" htmlFor="fileInput">
				Photos:
			</label>
			<input
				accept="image/png, image/jpeg"
				className=""
				id="fileInput"
				multiple={true}
				onChange={handleChange}
				type="file"
			/>
			<button
				className="cursor-pointer rounded-full bg-primary/20 px-8 py-1 text-center text-xl font-bold uppercase transition-all hover:bg-primary hover:text-neutral"
				type="submit"
			>
				Upload
			</button>
			{progress ? (
				<progress max="100" value={progress.percentage}>
					{progress.percentage}%
				</progress>
			) : null}
			{errors.images ? (
				<div className="bg-amber-400 p-2">{errors.images}</div>
			) : null}
		</form>
	);
}

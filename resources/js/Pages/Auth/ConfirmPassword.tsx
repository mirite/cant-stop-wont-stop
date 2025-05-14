import type { FormEventHandler } from "react";

import { Head, useForm } from "@inertiajs/react";

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";

export default function ConfirmPassword() {
	const { data, errors, post, processing, reset, setData } = useForm({
		password: "",
	});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("password.confirm"), {
			onFinish: () => reset("password"),
		});
	};

	return (
		<GuestLayout>
			<Head title="Confirm Password" />

			<div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				This is a secure area of the application. Please confirm your password
				before continuing.
			</div>

			<form onSubmit={submit}>
				<div className="mt-4">
					<InputLabel htmlFor="password" value="Password" />

					<TextInput
						className="mt-1 block w-full"
						id="password"
						isFocused={true}
						name="password"
						onChange={(e) => setData("password", e.target.value)}
						type="password"
						value={data.password}
					/>

					<InputError className="mt-2" message={errors.password} />
				</div>

				<div className="mt-4 flex items-center justify-end">
					<PrimaryButton className="ms-4" disabled={processing}>
						Confirm
					</PrimaryButton>
				</div>
			</form>
		</GuestLayout>
	);
}

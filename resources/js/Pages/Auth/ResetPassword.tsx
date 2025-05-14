import type { FormEventHandler } from "react";

import { Head, useForm } from "@inertiajs/react";

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";

/**
 * @param root0
 * @param root0.token
 * @param root0.email
 */
export default function ResetPassword({
	email,
	token,
}: {
	email: string;
	token: string;
}) {
	const { data, errors, post, processing, reset, setData } = useForm({
		email: email,
		password: "",
		password_confirmation: "",
		token: token,
	});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("password.store"), {
			onFinish: () => reset("password", "password_confirmation"),
		});
	};

	return (
		<GuestLayout>
			<Head title="Reset Password" />

			<form onSubmit={submit}>
				<div>
					<InputLabel htmlFor="email" value="Email" />

					<TextInput
						autoComplete="username"
						className="mt-1 block w-full"
						id="email"
						name="email"
						onChange={(e) => setData("email", e.target.value)}
						type="email"
						value={data.email}
					/>

					<InputError className="mt-2" message={errors.email} />
				</div>

				<div className="mt-4">
					<InputLabel htmlFor="password" value="Password" />

					<TextInput
						autoComplete="new-password"
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

				<div className="mt-4">
					<InputLabel
						htmlFor="password_confirmation"
						value="Confirm Password"
					/>

					<TextInput
						autoComplete="new-password"
						className="mt-1 block w-full"
						name="password_confirmation"
						onChange={(e) => setData("password_confirmation", e.target.value)}
						type="password"
						value={data.password_confirmation}
					/>

					<InputError className="mt-2" message={errors.password_confirmation} />
				</div>

				<div className="mt-4 flex items-center justify-end">
					<PrimaryButton className="ms-4" disabled={processing}>
						Reset Password
					</PrimaryButton>
				</div>
			</form>
		</GuestLayout>
	);
}

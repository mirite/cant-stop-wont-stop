import type { FormEventHandler } from "react";

import { Head, useForm } from "@inertiajs/react";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";

/**
 * @param root0
 * @param root0.status
 */
export default function ForgotPassword({ status }: { status?: string }) {
	const { data, errors, post, processing, setData } = useForm({
		email: "",
	});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("password.email"));
	};

	return (
		<GuestLayout>
			<Head title="Forgot Password" />

			<div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				Forgot your password? No problem. Just let us know your email address
				and we will email you a password reset link that will allow you to
				choose a new one.
			</div>

			{status ? (
				<div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
					{status}
				</div>
			) : null}

			<form onSubmit={submit}>
				<TextInput
					className="mt-1 block w-full"
					id="email"
					isFocused={true}
					name="email"
					onChange={(e) => setData("email", e.target.value)}
					type="email"
					value={data.email}
				/>

				<InputError className="mt-2" message={errors.email} />

				<div className="mt-4 flex items-center justify-end">
					<PrimaryButton className="ms-4" disabled={processing}>
						Email Password Reset Link
					</PrimaryButton>
				</div>
			</form>
		</GuestLayout>
	);
}

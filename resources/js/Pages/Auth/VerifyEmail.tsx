import type { FormEventHandler } from "react";

import { Head, Link, useForm } from "@inertiajs/react";

import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/GuestLayout";

/**
 * @param root0
 * @param root0.status
 */
export default function VerifyEmail({ status }: { status?: string }) {
	const { post, processing } = useForm({});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("verification.send"));
	};

	return (
		<GuestLayout>
			<Head title="Email Verification" />

			<div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				Thanks for signing up! Before getting started, could you verify your
				email address by clicking on the link we just emailed to you? If you
				didn't receive the email, we will gladly send you another.
			</div>

			{status === "verification-link-sent" && (
				<div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
					A new verification link has been sent to the email address you
					provided during registration.
				</div>
			)}

			<form onSubmit={submit}>
				<div className="mt-4 flex items-center justify-between">
					<PrimaryButton disabled={processing}>
						Resend Verification Email
					</PrimaryButton>

					<Link
						as="button"
						className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
						href={route("logout")}
						method="post"
					>
						Log Out
					</Link>
				</div>
			</form>
		</GuestLayout>
	);
}
